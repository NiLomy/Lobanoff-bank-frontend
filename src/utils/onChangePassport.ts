import React from "react";
import { UseFormSetValue } from "react-hook-form";
import { RegistryInterface } from "@/app/(auth)/register/page";

export function onChangePassport(
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<RegistryInterface>,
) {
  const inline = (q: string): string => {
    const list: string[] = [];
    const b = q.trim().split("");
    while (b.length > 0) {
      const first = b.shift()!;
      if (/\d/.test(first)) {
        if (list.length < 10) {
          list.push(first);
        }
      }
    }

    let ans = "";
    for (let i = 0; i < list.length; i++) {
      if (i <= 9) {
        ans += list[i];
        if (i === 3) {
          ans += " ";
        }
      }
    }
    return ans;
  };

  const v = e.target.value as string;
  if (e.nativeEvent.inputType === "deleteContentBackward") {
    setValue("passport", v);
  } else if (e.nativeEvent.inputType === "insertFromPaste") {
    setValue("passport", inline(v));
  } else {
    setValue("passport", inline(v));
  }
}
