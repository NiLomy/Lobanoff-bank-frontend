import React from "react";
import styles from "./RadioTo.module.scss";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { PaymentFormInterface } from "@/app/(bank)/payments/page";
import classNames from "classnames/bind";
import { AccountItemType } from "@/types";
const cx = classNames.bind(styles);
export function RadioTo({
  accounts,
  register,
  watch,
  setValue,
}: {
  register: UseFormRegister<PaymentFormInterface>;
  watch: UseFormWatch<PaymentFormInterface>;
  accounts: AccountItemType[];
  setValue: UseFormSetValue<PaymentFormInterface>;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.radio}>
        <input
          type="radio"
          value="phone"
          id="phone"
          className={styles.input}
          {...register("to_type", { required: true })}
        />
        <label
          htmlFor="phone"
          className={cx(styles.label, {
            active: watch("to_type", "phone") === "phone",
          })}
          onClick={() => {
            setValue("to_card", "");
            setValue("to_account.id", "");
          }}
        >
          Phone
        </label>
      </div>
      <div className={styles.radio}>
        <input
          type="radio"
          value="card"
          id="card"
          className={styles.input}
          {...register("to_type", { required: true })}
        />
        <label
          htmlFor="card"
          className={cx(styles.label, {
            active: watch("to_type", "phone") === "card",
          })}
          onClick={() => {
            setValue("to_phone", "");
            setValue("to_account.id", "");
          }}
        >
          Card
        </label>
      </div>
      <div
        className={cx(styles.radio, {
          hidden: accounts.length <= 1,
        })}
      >
        <input
          type="radio"
          value="account"
          id="account"
          className={styles.input}
          {...register("to_type", { required: true })}
        />
        <label
          htmlFor="account"
          className={cx(styles.label, {
            active: watch("to_type", "phone") === "account",
          })}
          onClick={() => {
            setValue("to_phone", "");
            setValue("to_card", "");
          }}
        >
          Account
        </label>
      </div>
    </div>
  );
}
