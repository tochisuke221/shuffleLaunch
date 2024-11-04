"use client";

import { MuiStack } from "@/components/mui";
import { Header } from "@/features/common";
import { Attendances } from "@/features/attendee";

export default function Page() {
  return (
    <>
      <Header />
      {/* TODO: あとで直す */}
      <MuiStack px={2}  py={10}>
        <Attendances />
      </MuiStack>
    </>
  );
}
