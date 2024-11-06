"use client";

import {
  ReactNode,
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from "react";

type GroupContext = {
  groupCount: number;
  groupAttendanceCount: number;
  changeGroupCount: (groupCount: number) => void;
  changeGroupAttendanceCount: (groupAttendanceCount: number) => void;
};

const GroupContext = createContext<GroupContext>({
  groupCount: 3,
  groupAttendanceCount: 4,
  changeGroupCount(groupCount: number) {
    throw new Error("missing method");
  },
  changeGroupAttendanceCount(groupAttendanceCount: number) {
    throw new Error("missing method");
  },
});

type Props = {
  children: ReactNode;
};

export const GroupProvider = ({ children }: Props) => {
  const [groupCount, setGroupCount] = useState<number>(3);
  const [groupAttendanceCount, setGroupAttendanceCount] = useState<number>(4);

  const handleChangeGroupCount = (groupCount: number) => {
    setGroupCount(groupCount);
  };

  const handleChangeGroupAttendanceCount = (groupAttendanceCount: number) => {
    setGroupAttendanceCount(groupAttendanceCount);
  };

  return (
    <GroupContext.Provider
      value={{
        groupCount,
        groupAttendanceCount,
        changeGroupCount: handleChangeGroupCount,
        changeGroupAttendanceCount: handleChangeGroupAttendanceCount,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroupContext = () => useContext(GroupContext);
