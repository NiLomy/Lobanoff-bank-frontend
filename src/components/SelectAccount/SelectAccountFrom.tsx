import React, { useState } from "react";
import styles from "./SelectAccount.module.scss";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { PaymentFormInterface } from "@/app/(bank)/payments/page";
import { Currency } from "@/components/Currency/Currency";
import { ChevronDown } from "lucide-react";
import classNames from "classnames/bind";
import { PaymentAccountType } from "@/types";
const cx = classNames.bind(styles);
export function SelectAccountFrom({
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
    setValue("from_account.id", acc.id);
    setValue("from_account.balance", acc.balance);
    setValue("from_account.currency", acc.currency);
    setValue("from_account.name", acc.name);
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
    if (to_id === e.id) {
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

  React.useEffect(() => {
    if (accounts.length === 0) {
      throw new Error("критическая ошибка");
    }

    if (!watch("from_account.id")) {
      set(accounts[0]);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={cx(styles.item, styles.item__select, {
          item__select_open: open,
        })}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.item__balance}>
          {watch("from_account.balance", accounts[0].balance)}
          <Currency
            cur={watch("from_account.currency", accounts[0].currency)}
          />
        </div>
        <div className={styles.item__title}>
          {watch("from_account.name", accounts[0].name)}
        </div>
        <div className={styles.item__arrow}>
          <ChevronDown />
        </div>
      </div>
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
                item__popup_active:
                  e.id === watch("from_account.id", accounts[0].id),
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
        {...register("from_account.id", { required: true })}
        className={styles.hidden}
      />
      <input
        type="text"
        {...register("from_account.currency", { required: true })}
        className={styles.hidden}
      />
      <input
        type="number"
        {...register("from_account.balance", { required: true })}
        className={styles.hidden}
      />
      <input
        type="text"
        {...register("from_account.name", { required: true })}
        className={styles.hidden}
      />
    </div>
  );
}
