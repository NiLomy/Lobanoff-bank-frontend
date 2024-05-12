"use client";
import React from "react";
import styles from "../page.module.scss";
import { Input } from "@/components/Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import {
  onChangeDate,
  onChangeDepartmentCode,
  onChangePassport,
} from "@/utils";
import { RegistryGender } from "@/components/RegistryGender/RegistryGender";

export interface RegistryInterface {
  name: string;
  surname: string;
  patronymic: string;
  email: string;
  password: string;
  confirm_password: string;
  passport: string;
  birthday: string;
  gender: "M" | "F";
  department_code: string;
  issued_by: string;
  issued_date: string;
  address: string;
}
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegistryInterface>({
    defaultValues: {
      gender: "M",
    },
  });
  const onSubmit: SubmitHandler<RegistryInterface> = (data) => {
    console.log("Форма отправится с таким данными", data);
  };
  console.log(errors);
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Register 😎</h2>
      <div className={styles.row}>
        <div className={styles.input}>
          <Input
            type="text"
            placeholder="Name"
            id="name"
            register={register}
            required
            watch={watch}
            autocomplete="given-name"
            maxLength={100}
            error={!!errors.name}
          />
          {errors.name && (
            <div className={styles.error}>
              {errors.name.type === "required"
                ? "Required"
                : "Max length is 100"}
            </div>
          )}
        </div>
        <div className={styles.input}>
          <Input
            type="text"
            placeholder="Surname"
            id="surname"
            register={register}
            required
            watch={watch}
            maxLength={100}
            autocomplete="additional-name"
            error={!!errors.surname}
          />
          {errors.surname && (
            <div className={styles.error}>
              {errors.surname.type === "required"
                ? "Required"
                : "Max length is 100"}
            </div>
          )}
        </div>
        <div className={styles.input}>
          <Input
            type="text"
            placeholder="Patronymic"
            id="patronymic"
            register={register}
            required
            watch={watch}
            maxLength={100}
            autocomplete="family-name"
            error={!!errors.patronymic}
          />
          {errors.patronymic && (
            <div className={styles.error}>
              {errors.patronymic.type === "required"
                ? "Required"
                : "Max length is 100"}
            </div>
          )}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.input}>
          <Input
            placeholder="Passport series"
            id="passport"
            register={register}
            watch={watch}
            required={true}
            type="text"
            error={!!errors.passport}
            minLength={11}
            onChange={(e) => onChangePassport(e, setValue)}
          />
          {errors.passport && (
            <div className={styles.error}>
              {errors.passport.type === "required"
                ? "Required"
                : "Invalid input"}
            </div>
          )}
        </div>
        <div className={styles.input}>
          <Input
            placeholder="Birthday (DD.MM.YYYY)"
            id="birthday"
            register={register}
            watch={watch}
            required={true}
            type="text"
            error={!!errors.birthday}
            minLength={10}
            onChange={(e) => onChangeDate(e, setValue, "birthday")}
          />
          {errors.birthday && (
            <div className={styles.error}>
              {errors.birthday.type === "required"
                ? "Required"
                : "Invalid input"}
            </div>
          )}
        </div>
        <RegistryGender registry={register} watch={watch} />
      </div>
      <div className={styles.row}>
        <div className={styles.input}>
          <Input
            placeholder="Issued by"
            id="issued_by"
            register={register}
            watch={watch}
            required={true}
            type="text"
            error={!!errors.issued_by}
          />
          {errors.issued_by && <div className={styles.error}>Required</div>}
        </div>
        <div className={styles.input}>
          <Input
            placeholder="Issued data (DD.MM.YYYY)"
            id="issued_date"
            register={register}
            watch={watch}
            required={true}
            type="text"
            error={!!errors.issued_date}
            minLength={10}
            onChange={(e) => onChangeDate(e, setValue, "issued_date")}
          />
          {errors.issued_date && (
            <div className={styles.error}>
              {errors.issued_date.type === "required"
                ? "Required"
                : "Invalid input"}
            </div>
          )}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.input}>
          <Input
            placeholder="Department code"
            id="department_code"
            register={register}
            watch={watch}
            required={true}
            type="text"
            error={!!errors.department_code}
            minLength={7}
            onChange={(e) => onChangeDepartmentCode(e, setValue)}
          />
          {errors.department_code && (
            <div className={styles.error}>
              {errors.department_code.type === "required"
                ? "Required"
                : "Invalid input"}
            </div>
          )}
        </div>
        <div className={styles.input}>
          <Input
            placeholder="Address"
            id="address"
            register={register}
            watch={watch}
            required={true}
            type="text"
            error={!!errors.address}
          />
          {errors.address && <div className={styles.error}>Required</div>}
        </div>
      </div>
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
            pattern={
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            }
            error={!!errors.email}
          />
          {errors.email && (
            <div className={styles.error}>
              {errors.email.type === "required"
                ? "Required"
                : "Email is not admissible"}
            </div>
          )}
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
            minLength={8}
            pattern={
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            }
            autocomplete="new-password"
            error={!!errors.password}
          />
          {errors.password && (
            <div className={styles.error}>
              {errors.password.type === "required"
                ? "Required"
                : "Password is not admissible"}
            </div>
          )}
        </div>
        <div className={styles.input}>
          <Input
            type="password"
            placeholder="Repeat password"
            id="confirm_password"
            register={register}
            required
            watch={watch}
            validate={(value, formValues) => {
              if (value !== formValues.password) {
                return "Passwords must match ";
              }
            }}
            error={!!errors.confirm_password}
          />
          {errors.confirm_password && (
            <div className={styles.error}>
              {errors.confirm_password.type === "required"
                ? "Required"
                : "The passwords don't match"}
            </div>
          )}
        </div>
      </div>
      <div className={styles.tip}>
        The password must contain at least <span>one letter</span>, at least{" "}
        <span>one number</span> and the special character <span>@</span>,{" "}
        <span>$</span>, <span>!</span>,<span>%</span>, <span>*</span>,{" "}
        <span>?</span>, <span>&</span>.
      </div>
      <div className={styles.btns}>
        <Link href="/login" className={styles.btn}>
          Login
        </Link>
        <input type="submit" className={styles.submit} value="Send" />
      </div>
    </form>
  );
}
