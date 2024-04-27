import React, { useState } from "react";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { PaymentFormInterface } from "@/app/(bank)/payments/page";
import styles from "@/components/SelectAccount/SelectAccount.module.scss";
import { Currency } from "@/components/Currency/Currency";
import { ChevronDown } from "lucide-react";
import classNames from "classnames/bind";
import { PaymentAccountType } from "@/types";
const cx = classNames.bind(styles);
export function SelectAccountTo({
  accounts,
  register,
  watch,
  setValue,
}: {
  accounts: PaymentAccountType[];
  register: UseFormRegister<PaymentFormInterface>;
  watch: UseFormWatch<PaymentFormInterface>;
  setValue: UseFormSetValue<PaymentFormInterface>;
}) {
  const [open, setOpen] = useState(false);
  const set = (acc: PaymentAccountType) => {
    setValue("to_account.id", acc.id);
    setValue("to_account.balance", acc.balance);
    setValue("to_account.currency", acc.currency);
    setValue("to_account.name", acc.name);
  };

  const handleClick = (e: PaymentAccountType) => {
    const from_id = watch("from_account.id");
    const from_currency = watch("from_account.currency");
    const from_name = watch("from_account.name");
    const from_balance = watch("from_account.balance");
    const to_id = watch("to_account.id");
    const to_currency = watch("to_account.currency");
    const to_name = watch("to_account.name");
    const to_balance = watch("to_account.balance");
    if (from_id === e.id) {
      setValue("to_account.id", from_id);
      setValue("to_account.name", from_name);
      setValue("to_account.currency", from_currency);
      setValue("to_account.balance", from_balance);
      setValue("from_account.id", to_id);
      setValue("from_account.name", to_name);
      setValue("from_account.currency", to_currency);
      setValue("from_account.balance", to_balance);
    } else {
      set(e);
    }
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      {watch("to_account.id") ? (
        <div
          className={cx(styles.item, styles.item__select, {
            item__select_open: open,
          })}
          onClick={() => setOpen(!open)}
        >
          <div className={styles.item__balance}>
            {watch("to_account.balance")}
            <Currency cur={watch("to_account.currency")} />
          </div>
          <div className={styles.item__title}>{watch("to_account.name")}</div>
          <div className={styles.item__arrow}>
            <ChevronDown />
          </div>
        </div>
      ) : (
        <div
          className={cx(styles.item, styles.item__empty, {
            item__select_open: open,
          })}
          onClick={() => setOpen(!open)}
        >
          <div className={styles.item__empty_text}>Select an account</div>
          <div className={styles.item__arrow}>
            <ChevronDown />
          </div>
        </div>
      )}

      <div
        className={cx(styles.popup, {
          popup__open: open,
        })}
      >
        {accounts.map((e) => {
          return (
            <div
              key={e.id}
              className={cx(styles.item, styles.item__popup, {
                item__popup_hidden:
                  !watch("to_account.id") && e.id === watch("from_account.id"),
                item__popup_active:
                  e.id === watch("to_account.id", accounts[0].id),
              })}
              onClick={() => handleClick(e)}
            >
              <div className={styles.item__balance}>
                {e.balance}
                <Currency cur={e.currency} />
              </div>
              <div className={styles.item__title}>{e.name}</div>
            </div>
          );
        })}
      </div>

      <input
        type="text"
        {...register("to_account.id")}
        className={styles.hidden}
      />
      <input
        type="text"
        {...register("to_account.currency")}
        className={styles.hidden}
      />
      <input
        type="number"
        {...register("to_account.balance")}
        className={styles.hidden}
      />
      <input
        type="text"
        {...register("to_account.name")}
        className={styles.hidden}
      />
    </div>
  );
}
