"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "@/app/(auth)/page.module.scss";
import { Input } from "@/components/Input/Input";
import Link from "next/link";
interface FormInterface {
  email: string;
  password: string;
}
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = (data) => {
    console.log("Форма отправится с таким данными", data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Login 🥺</h2>
      <div className={styles.row}>
        <div className={styles.input}>
          <Input
            type="email"
            placeholder="Email"
            id="email"
            register={register}
            required
            watch={watch}
            autocomplete="email"
            error={!!errors.email}
          />
          {errors.email && <div className={styles.error}>Required</div>}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.input}>
          <Input
            type="password"
            placeholder="Password"
            id="password"
            register={register}
            required
            watch={watch}
            autocomplete="current-password"
            error={!!errors.password}
          />
          {errors.password && <div className={styles.error}>Required</div>}
        </div>
      </div>
      <div className={styles.btns}>
        <Link href="/register" className={styles.btn}>
          Register
        </Link>
        <input type="submit" className={styles.submit} value="Send" />
      </div>
    </form>
  );
}
