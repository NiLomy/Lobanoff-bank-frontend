import React from "react";
import { UseFormSetValue } from "react-hook-form";
import { PaymentFormInterface } from "@/app/(bank)/payments/page";

export function onChangePhone(
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<PaymentFormInterface>,
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
    setValue("to_phone", v);
  } else {
    // @ts-ignore
    if (e.nativeEvent.inputType === "insertFromPaste") {
      setValue("to_phone", inline(v));
    } else {
      setValue("to_phone", inline(v));
    }
  }
}
