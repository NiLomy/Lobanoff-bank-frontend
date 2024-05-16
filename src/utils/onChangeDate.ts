import React from "react";
import { Path, UseFormSetValue } from "react-hook-form";
import { RegistryInterface } from "@/app/(auth)/register/page";
import { PassportChangeType } from "@/types/PassportType";

export function onChangeDate(
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<RegistryInterface>,
  id: Path<RegistryInterface>,
) {
  const inline = (q: string): string => {
    const list: string[] = [];
    const b = q.trim().split("");
    while (b.length > 0) {
      const first = b.shift()!;
      if (/\d/.test(first)) {
        if (list.length < 8) {
          list.push(first);
        }
      }
    }

    let ans = "";
    for (let i = 0; i < list.length; i++) {
      if (i <= 8) {
        ans += list[i];
        if (i === 1 || i === 3) {
          ans += ".";
        }
      }
    }
    return ans;
  };

  const v = e.target.value as string;
  // @ts-ignore
  if (e.nativeEvent.inputType === "deleteContentBackward") {
    setValue(id, v);
    // @ts-ignore
  } else if (e.nativeEvent.inputType === "insertFromPaste") {
    setValue(id, inline(v));
  } else {
    setValue(id, inline(v));
  }
}

export function onChangeDate2(
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<PassportChangeType>,
  id: Path<PassportChangeType>,
) {
  const inline = (q: string): string => {
    const list: string[] = [];
    const b = q.trim().split("");
    while (b.length > 0) {
      const first = b.shift()!;
      if (/\d/.test(first)) {
        if (list.length < 8) {
          list.push(first);
        }
      }
    }

    let ans = "";
    for (let i = 0; i < list.length; i++) {
      if (i <= 8) {
        ans += list[i];
        if (i === 1 || i === 3) {
          ans += ".";
        }
      }
    }
    return ans;
  };

  const v = e.target.value as string;
  // @ts-ignore
  if (e.nativeEvent.inputType === "deleteContentBackward") {
    setValue(id, v);
    // @ts-ignore
  } else if (e.nativeEvent.inputType === "insertFromPaste") {
    setValue(id, inline(v));
  } else {
    setValue(id, inline(v));
  }
}
