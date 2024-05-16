"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./page.module.scss";
import { Input } from "@/components/Input/Input";
import React, { useEffect, useState } from "react";
import { AccountTypesInterface, CurrencyType } from "@/types";
import { Loading } from "@/components/Loading/Loading";
import { createAccount, getAccountsTypes, getCurrencies } from "@/api";
import classNames from "classnames/bind";
import { useUser } from "@/stores";
import { useRouter } from "next/navigation";
const cx = classNames.bind(styles);
export interface CreateAccountForm {
  name: string;
  currencyId: number;
  typeId: string;
}

function AccountItem({
  a,
  click,
  className,
}: {
  a: AccountTypesInterface;
  click: () => void;
  className?: string;
}) {
  return (
    <div className={cx(styles.currency, className)} onClick={() => click()}>
      <div className={styles.name}>{a.name}</div>
    </div>
  );
}

function CurrencyItem({
  currency,
  click,
  className,
}: {
  currency: CurrencyType;
  click: () => void;
  className?: string;
}) {
  return (
    <div className={cx(styles.currency, className)} onClick={() => click()}>
      {currency.icon && <div className={styles.icon}>{currency.icon}</div>}
      <div className={styles.name}>{currency.name}</div>
    </div>
  );
}

export default function CreateAccount() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateAccountForm>();
  const [loading, setLoading] = useState(true);
  const [currencies, setCurrencies] = useState<CurrencyType[]>([]);
  const [currenciesOpen, setCurrenciesOpen] = useState(false);
  const [accountsOpen, setAccountsOpen] = useState(false);
  const [accountsTypes, setAccountsTypes] = useState<AccountTypesInterface[]>(
    [],
  );
  const { access, id } = useUser();
  const router = useRouter();
  const onSubmit: SubmitHandler<CreateAccountForm> = (data) => {
    const send = async () => {
      if (!access || !id) return;
      const f = await createAccount(access, {
        name: data.name,
        currencyId: String(data.currencyId),
        typeId: data.typeId,
        ownerId: String(id),
      });
      if (f) {
        router.push("/my");
      }
    };
    send();
  };
  useEffect(() => {
    const get = async () => {
      if (!access) return;
      const c = await getCurrencies(access);
      const a = await getAccountsTypes(access);
      if (c) {
        setCurrencies(c);
        setValue("currencyId", c[0].id);
      }
      if (a) {
        setAccountsTypes(a);
        setValue("typeId", a[0].id);
      }
      if (a && c) {
        setLoading(false);
      }
    };
    get();
  }, [access]);

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
        <div className={styles.header}>Create Account</div>
        <div className={styles.line}>
          <div className={styles.title}>Name</div>
          <Input
            placeholder="Name of account"
            id="name"
            register={register}
            required={true}
            watch={watch}
            type="text"
            maxLength={100}
            error={!!errors.name}
          />
          {errors.name && (
            <div className={styles.error}>
              {errors.name.type === "required" && "Required"}
              {errors.name.type === "maxLength" && "Max length is 100"}
            </div>
          )}
        </div>
        <div className={styles.line}>
          <div className={styles.title}>Currency</div>
          <div className={styles.select}>
            <CurrencyItem
              currency={currencies.find((e) => e.id === watch("currencyId"))!}
              click={() => {
                setCurrenciesOpen(!currenciesOpen);
                setAccountsOpen(false);
              }}
              className={styles.hfdh}
            />
            <div
              className={cx(styles.popup, {
                open: currenciesOpen,
              })}
            >
              {currencies.map((e) => {
                if (e.id !== watch("currencyId")) {
                  return (
                    <CurrencyItem
                      key={e.id}
                      currency={e}
                      click={() => {
                        setValue("currencyId", e.id);
                        setCurrenciesOpen(!currenciesOpen);
                      }}
                    />
                  );
                }
              })}
            </div>
            <input
              type="text"
              className={styles.hidden}
              {...register("currencyId", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.title}>Type</div>
          <div className={styles.select}>
            <AccountItem
              a={accountsTypes.find((e) => e.id === watch("typeId"))!}
              click={() => {
                setAccountsOpen(!accountsOpen);
                setCurrenciesOpen(false);
              }}
              className={styles.hfdh}
            />
            <div
              className={cx(styles.popup, {
                open: accountsOpen,
              })}
            >
              {accountsTypes.map((e) => {
                if (e.id !== watch("typeId")) {
                  return (
                    <AccountItem
                      key={e.id}
                      a={e}
                      click={() => {
                        setAccountsOpen(!accountsOpen);
                        setValue("typeId", e.id);
                      }}
                    />
                  );
                }
              })}
            </div>
            <input
              type="text"
              className={styles.hidden}
              {...register("typeId", {
                required: true,
              })}
            />
          </div>
        </div>
        <input type="submit" className={styles.submit} value="Send" />
      </form>
    </div>
  );
}
