import React from "react";
import { UseFormSetValue } from "react-hook-form";
import { PaymentFormInterface } from "@/app/(bank)/payments/page";

export function onChangeCard(
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<PaymentFormInterface>,
) {
  const inline = (q: string): string => {
    const list: string[] = [];
    const b = q.trim().split("");
    while (b.length > 0) {
      const first = b.shift()!;
      if (/\d/.test(first)) {
        if (list.length < 16) {
          list.push(first);
        }
      }
    }

    let ans = "";
    for (let i = 0; i < list.length; i++) {
      if (i <= 15) {
        ans += list[i];
        if (i === 3 || i === 7 || i === 11) {
          ans += " ";
        }
      }
    }
    return ans;
  };

  const v = e.target.value as string;
  if (e.nativeEvent.inputType === "deleteContentBackward") {
    setValue("to_card", v);
  } else if (e.nativeEvent.inputType === "insertFromPaste") {
    setValue("to_card", inline(v));
  } else {
    setValue("to_card", inline(v));
  }
}
