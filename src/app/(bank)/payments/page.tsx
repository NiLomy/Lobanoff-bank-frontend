"use client";
import React, { ChangeEvent } from "react";
import styles from "./page.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/Input/Input";
import { SelectAccountFrom } from "@/components/SelectAccount/SelectAccountFrom";
import { RadioTo } from "@/components/RadioTo/RadioTo";
import { SelectAccountTo } from "@/components/SelectAccount/SelectAccountTo";
import { onChangeCard, onChangePhone } from "@/utils";
import { PaymentAccountType } from "@/types";
export interface PaymentFormInterface {
  from_account: PaymentAccountType;
  to_type: "phone" | "card" | "account";
  to_phone: string;
  to_card: string;
  to_account: PaymentAccountType;
  message: string;
  amount: number;
}
const accountList: PaymentAccountType[] = [
  {
    id: "account1",
    name: "я только начал",
    balance: 5000000,
    currency: "$",
  },
  {
    id: "account2",
    name: "я уже закончил",
    balance: 120,
    currency: "₽",
  },
];
export default function Payments() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PaymentFormInterface>({
    defaultValues: {
      to_type: "phone",
    },
  });

  const onSubmit: SubmitHandler<PaymentFormInterface> = (data) => {
    console.log("Форма отправится с таким данными", data);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.item}>
          <div className={styles.title}>From</div>
          <SelectAccountFrom
            accounts={accountList}
            register={register}
            watch={watch}
            setValue={setValue}
          />
        </div>
        <div className={styles.item}>
          <div className={styles.title}>To</div>
          <RadioTo
            register={register}
            watch={watch}
            accounts={accountList}
            setValue={setValue}
          />
          {watch("to_type", "phone") === "phone" && (
            <Input
              placeholder="8 999 999 99 99"
              id="to_phone"
              register={register}
              watch={watch}
              type="text"
              error={!!errors.to_phone}
              pattern={/^(\+7|8)\s9\d\d\s\d\d\d\s\d\d\s\d\d$/}
              onChange={(e) => onChangePhone(e, setValue)}
            />
          )}
          {watch("to_type", "phone") === "card" && (
            <Input
              placeholder="9999 9999 9999 9999"
              id="to_card"
              register={register}
              watch={watch}
              type="text"
              error={!!errors.to_card}
              pattern={/^\d\d\d\d\s\d\d\d\d\s\d\d\d\d\s\d\d\d\d$/}
              onChange={(e) => onChangeCard(e, setValue)}
            />
          )}
          {watch("to_type", "phone") === "account" && (
            <SelectAccountTo
              accounts={accountList}
              register={register}
              watch={watch}
              setValue={setValue}
            />
          )}
          {watch("to_card") && watch("to_card").length >= 7 && (
            <div className={styles.bank}>
              <div className={styles.brand}>MAESTRO</div>
              <div className={styles.issuer}>LOBANOFF BANK</div>
            </div>
          )}
        </div>
        <div className={styles.item}>
          <div className={styles.title}>Amount</div>
          <div className={styles.input}>
            <Input
              placeholder="Amount"
              id="amount"
              register={register}
              watch={watch}
              type="number"
              required={true}
              error={!!errors.amount}
              min={watch("from_account.currency", "$") === "$" ? 1 : 10}
              max={watch("from_account.balance") || 5000000}
            />
            {watch("from_account.currency") && (
              <div className={styles.tip}>
                From {watch("from_account.currency") === "$" ? "1$" : "10₽"}
              </div>
            )}
            {watch("amount") > 50000 && (
              <div className={styles.tip}>
                Commission: 1%, it will be sent {watch("amount") * 0.99}
                {watch("from_account.currency")}
              </div>
            )}
            {!!watch("to_account.id") &&
              watch("to_account.currency") !==
                watch("from_account.currency") && (
                <div className={styles.tip}>
                  Conversion will be at the current exchange rate
                </div>
              )}
            {errors.amount && errors.amount.type === "required" && (
              <div className={styles.error}>Required</div>
            )}
            {errors.amount && errors.amount.type === "min" && (
              <div className={styles.error}>
                Minimum is{" "}
                {watch("from_account.currency") === "$" ? "1$" : "10₽"}
              </div>
            )}
            {errors.amount && errors.amount.type === "max" && (
              <div className={styles.error}>
                Maximum is {watch("from_account.balance")}
                {watch("from_account.currency")}
              </div>
            )}
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>Message</div>
          <div className={styles.input}>
            <Input
              placeholder="Message (optionally)"
              id="message"
              register={register}
              watch={watch}
              type="text"
              error={!!errors.message}
              maxLength={150}
            />
            {errors.message && errors.message.type === "maxLength" && (
              <div className={styles.error__message}>Maximum length is 150</div>
            )}
          </div>
        </div>
        <input type="submit" className={styles.submit} value="Send" />
      </form>
    </div>
  );
}
