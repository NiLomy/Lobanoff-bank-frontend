"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./page.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/Input/Input";
import { SelectAccountFrom } from "@/components/SelectAccount/SelectAccountFrom";
import { RadioTo } from "@/components/RadioTo/RadioTo";
import { SelectAccountTo } from "@/components/SelectAccount/SelectAccountTo";
import { onChangeCard, onChangePhone } from "@/utils";
import { AccountItemType, PaymentAccountType } from "@/types";
import { Loading } from "@/components/Loading/Loading";
import { CardInfoResponse } from "@/types/CardInfoResponse";
import { useUser } from "@/stores";
import { getAccountInfo, getAllUserAccounts } from "@/api";
import { getAllCardInfos } from "@/api/cardInfos";
import { useRouter } from "next/navigation";
import {
  transferBetweenAccounts,
  transferByCard,
  transferByPhone,
} from "@/api/transactions";
export interface PaymentFormInterface {
  from_account: PaymentAccountType;
  to_type: "phone" | "card" | "account";
  to_phone: string;
  to_card: string;
  to_account: PaymentAccountType;
  message: string;
  amount: number;
}

export function CardInfo({
  num,
  info,
}: {
  num: string;
  info: CardInfoResponse;
}) {
  const n = num.split(" ").join("").slice(0, 6);
  if (n.length >= 6 && info[n]) {
    return (
      <div className={styles.bank}>
        <div className={styles.brand}>{info[n].brand}</div>
        <div className={styles.issuer}>{info[n].issuer}</div>
      </div>
    );
  }
  return "";
}

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
  const [loading, setLoading] = useState(true);
  const [sendLoading, setSendLoading] = useState(false);
  const [accounts, setAccounts] = useState<AccountItemType[]>([]);
  const [cardInfo, setCardInfo] = useState<CardInfoResponse | null>(null);
  const { access, id } = useUser();
  const router = useRouter();
  useEffect(() => {
    const get = async () => {
      if (!access || !id) return;
      const a = await getAllUserAccounts(access, id);
      const c = await getAllCardInfos(access);
      if (a) {
        setAccounts(a);
      }
      if (c) {
        setCardInfo(c);
      }
      if (a && a.length > 0 && c) {
        setLoading(false);
      } else {
        router.push("/my");
      }
    };
    get();
  }, [access]);
  const onSubmit: SubmitHandler<PaymentFormInterface> = (data) => {
    setSendLoading(true);
    const send = async () => {
      if (!access) return;
      if (data.to_type === "card") {
        const response = await transferByCard(
          {
            from: Number(data.from_account.id),
            card: data.to_card.split(" ").join(""),
            amount: data.amount,
            message: data.message || null,
          },
          access,
        );
        if (response) {
          router.push("/my");
        } else {
          setSendLoading(false);
        }
      } else if (data.to_type === "phone") {
        const response = await transferByPhone(
          {
            from: Number(data.from_account.id),
            amount: data.amount,
            message: data.message || null,
            phone: data.to_phone.split(" ").join(""),
          },
          access,
        );
        if (response) {
          router.push("/my");
        } else {
          setSendLoading(false);
        }
      } else {
        const response = await transferBetweenAccounts(
          {
            from: Number(data.from_account.id),
            amount: data.amount,
            message: data.message || null,
            to: Number(data.to_account.id),
          },
          access,
        );
        if (response) {
          router.push("/my");
        } else {
          setSendLoading(false);
        }
      }
    };
    send();
    console.log("Форма отправится с таким данными", data);
  };

  if (loading) {
    return (
      <div className={styles.center}>
        <Loading />
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.item}>
          <div className={styles.title}>From</div>
          <SelectAccountFrom
            accounts={accounts}
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
            accounts={accounts}
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
          {cardInfo && (
            <CardInfo num={watch("to_card", "000000")} info={cardInfo} />
          )}

          {watch("to_type", "phone") === "account" && (
            <SelectAccountTo
              accounts={accounts}
              register={register}
              watch={watch}
              setValue={setValue}
            />
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
              min={1}
              max={watch("from_account.balance") || 5000000}
            />
            {watch("from_account.currency") && (
              <div className={styles.tip}>
                From 1{" "}
                {
                  accounts.find((e) => e.id === watch("from_account.id"))!
                    .currency.name
                }
              </div>
            )}
            {watch("amount") >= 100000 && (
              <div className={styles.tip}>
                Commission: 5%, it will be sent {watch("amount") * 0.95}{" "}
                {
                  accounts.find((e) => e.id === watch("from_account.id"))!
                    .currency.name
                }
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
                Minimum is 1{" "}
                {
                  accounts.find((e) => e.id === watch("from_account.id"))!
                    .currency.name
                }
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
        {watch("to_type") !== "account" && (
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
                <div className={styles.error__message}>
                  Maximum length is 150
                </div>
              )}
            </div>
          </div>
        )}
        {sendLoading ? (
          <Loading />
        ) : (
          <input type="submit" className={styles.submit} value="Send" />
        )}
      </form>
    </div>
  );
}
