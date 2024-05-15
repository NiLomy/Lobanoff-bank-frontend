import React from "react";
import { UseFormSetValue } from "react-hook-form";
import { RegistryInterface } from "@/app/(auth)/register/page";

export function onChangePhoneRegister(
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<RegistryInterface>,
) {
  const inline = (q: string): string => {
    const list: string[] = [];
    let head = "+7";
    const b = q.trim().split("");
    if (b[0] === "+") {
      b.shift();
      b.shift();
    } else if (b[0] === "8") {
      b.shift();
      head = "8";
    }
    while (b.length > 0) {
      const first = b.shift()!;
      if (/\d/.test(first)) {
        if (list.length < 10) {
          list.push(first);
        }
      }
    }

    let ans = head + " ";
    for (let i = 0; i < list.length; i++) {
      if (i <= 9) {
        ans += list[i];
        if (i === 2 || i === 5 || i === 7) {
          ans += " ";
        }
      }
    }
    return ans;
  };

  const v = e.target.value as string;
  // @ts-ignore
  if (e.nativeEvent.inputType === "deleteContentBackward") {
    setValue("phone", v);
  } else {
    // @ts-ignore
    if (e.nativeEvent.inputType === "insertFromPaste") {
      setValue("phone", inline(v));
    } else {
      setValue("phone", inline(v));
    }
  }
}
