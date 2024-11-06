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
  }
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

  useEffect(() => {
    setAttendances(
      Array.from({ length: groupAttendanceCount * groupCount }, (_, i) => ({
        id: i + 1,
        name: "",
      }))
    );
  }, [groupCount, groupAttendanceCount]);

  const handleShuffleAttendances = () => {
    setAttendances((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  const handleInputAttendance = (id: number, name: string) => {
    setAttendances((prev) =>
      prev.map((attendance) => (attendance.id === id ? { ...attendance, name: name } : attendance))
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
