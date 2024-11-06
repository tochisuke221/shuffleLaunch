"use client";

import { MuiStack } from "@/components/mui";
import { Header } from "@/features/common";
import {
  Attendances,
  CreateForm,
  GroupProvider,
  AttendanceProvider,
} from "@/features/attendances";

export default function Page() {
  return (
    <>
      <Header />
      {/* TODO: あとで直す */}
      <MuiStack px={2} py={10}>
        <GroupProvider>
          <AttendanceProvider>
            <Attendances />
            <CreateForm />
          </AttendanceProvider>
        </GroupProvider>
      </MuiStack>
    </>
  );
}
