"use client";
import React, { useEffect, useState } from "react";
import styles from "./ChangeUser.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChangeUserInterface } from "@/types";
import { useUser } from "@/stores";
import { Input } from "@/components/Input/Input";
import { onChangePhoneChange } from "@/utils";
import { Loading } from "@/components/Loading/Loading";
import { getUser, putUser } from "@/api";

export function ChangeUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    setError,
  } = useForm<ChangeUserInterface>();

  const { id, access } = useUser();
  const [loading, setLoading] = useState(true);
  const [send, setSend] = useState(false);
  const onSubmit: SubmitHandler<ChangeUserInterface> = (data) => {
    setSend(true);
    const save = async () => {
      if (!access) return;
      if (data.password === "") {
        data.password = null;
        data.confirmPassword = null;
      }
      const saved = await putUser(access, data);
      if (saved) {
        setValue("phone", saved.phone);
        setValue("email", saved.email);
        setValue("password", "");
        setValue("confirmPassword", "");
      }
      setSend(false);
    };
    save();
  };
  useEffect(() => {
    const get = async () => {
      if (!access || !id) return;
      const d = await getUser(access, id);
      if (d) {
        setValue("id", id);
        setValue("email", d.email);
        setValue("phone", d.phone);
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
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <Input
          placeholder="Email"
          id="email"
          register={register}
          watch={watch}
          type="email"
          autocomplete="email"
          required={true}
          pattern={
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
          }
          error={!!errors.email}
        />
        {errors.email && <div className={styles.error}>Invalid</div>}
      </div>
      <div className={styles.row}>
        <Input
          placeholder="8 999 999 99 99"
          id="phone"
          register={register}
          watch={watch}
          type="text"
          error={!!errors.phone}
          pattern={/^(\+7|8)\s9\d\d\s\d\d\d\s\d\d\s\d\d$/}
          onChange={(e) => onChangePhoneChange(e, setValue)}
        />
      </div>
      <div className={styles.row}>
        <Input
          placeholder="Password"
          id="password"
          register={register}
          watch={watch}
          type="password"
          error={!!errors.password}
        />
        <Input
          placeholder="Confirm password"
          id="confirmPassword"
          register={register}
          watch={watch}
          type="password"
          error={!!errors.confirmPassword}
        />
      </div>
      {send ? (
        <Loading />
      ) : (
        <input type="submit" className={styles.submit} value="Send" />
      )}
    </form>
  );
}
