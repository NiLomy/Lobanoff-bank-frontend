import React from "react";
import { UseFormSetValue } from "react-hook-form";
import { RegistryInterface } from "@/app/(auth)/register/page";
import { PassportChangeType } from "@/types/PassportType";

export function onChangeDepartmentCode(
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<RegistryInterface>,
) {
  const inline = (q: string): string => {
    const list: string[] = [];
    const b = q.trim().split("");
    while (b.length > 0) {
      const first = b.shift()!;
      if (/\d/.test(first)) {
        if (list.length < 6) {
          list.push(first);
        }
      }
    }

    let ans = "";
    for (let i = 0; i < list.length; i++) {
      if (i <= 6) {
        ans += list[i];
        if (i === 2) {
          ans += "-";
        }
      }
    }
    return ans;
  };

  const v = e.target.value as string;
  // @ts-ignore
  if (e.nativeEvent.inputType === "deleteContentBackward") {
    setValue("department_code", v);
    // @ts-ignore
  } else if (e.nativeEvent.inputType === "insertFromPaste") {
    setValue("department_code", inline(v));
  } else {
    setValue("department_code", inline(v));
  }
}

export function onChangeDepartmentCode2(
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<PassportChangeType>,
) {
  const inline = (q: string): string => {
    const list: string[] = [];
    const b = q.trim().split("");
    while (b.length > 0) {
      const first = b.shift()!;
      if (/\d/.test(first)) {
        if (list.length < 6) {
          list.push(first);
        }
      }
    }

    let ans = "";
    for (let i = 0; i < list.length; i++) {
      if (i <= 6) {
        ans += list[i];
        if (i === 2) {
          ans += "-";
        }
      }
    }
    return ans;
  };

  const v = e.target.value as string;
  // @ts-ignore
  if (e.nativeEvent.inputType === "deleteContentBackward") {
    setValue("departmentCode", v);
    // @ts-ignore
  } else if (e.nativeEvent.inputType === "insertFromPaste") {
    setValue("departmentCode", inline(v));
  } else {
    setValue("departmentCode", inline(v));
  }
}
