"use client";

import {
  ReactNode,
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGroupContext } from "./group";

type AttendanceContext = {
  attendances: Attendance[];
  shuffleAttendances: () => void;
  inputAttendance: (id: number, name: string) => void;
};

const AttendanceContext = createContext<AttendanceContext>({
  attendances: [],
  shuffleAttendances() {
    throw new Error("missing method");
  },
  inputAttendance() {
    throw new Error("missing method");
  },
});

type Props = {
  children: ReactNode;
};

type Attendance = {
  id: number;
  name: string;
};

export const AttendanceProvider = ({ children }: Props) => {
  const { groupCount, groupAttendanceCount } = useGroupContext();
  const [attendances, setAttendances] = useState<Attendance[]>(
    Array.from({ length: groupAttendanceCount * groupCount }, (_, i) => ({
      id: i + 1,
      name: "",
    }))
  );

  // NOTE: 一旦、グループ数やグループあたりの人数が変更された場合はうしろに新しいフォームを追加する
  useEffect(() => {
    setAttendances((prev) => {
      const newLength = groupAttendanceCount * groupCount;

      if (prev.length === newLength) return prev;

      if (prev.length > newLength) {
        // 長さが新しい長さよりも多い場合は短縮
        return prev.slice(0, newLength);
      }

      // 長さが新しい長さよりも少ない場合は追加
      const additionalItems = Array.from(
        { length: newLength - prev.length },
        (_, i) => ({
          id: prev.length + i + 1,
          name: "",
        })
      );

      return [...prev, ...additionalItems];
    });
  }, [groupCount, groupAttendanceCount]);

  const handleShuffleAttendances = () => {
    setAttendances((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  const handleInputAttendance = (id: number, name: string) => {
    setAttendances((prev) =>
      prev.map((attendance) =>
        attendance.id === id ? { ...attendance, name: name } : attendance
      )
    );
  };

  return (
    <AttendanceContext.Provider
      value={{
        attendances,
        shuffleAttendances: handleShuffleAttendances,
        inputAttendance: handleInputAttendance,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendanceContext = () => useContext(AttendanceContext);
