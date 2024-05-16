"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ChangeUser.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUser } from "@/stores";
import { Loading } from "@/components/Loading/Loading";
import { PassportChangeType } from "@/types/PassportType";
import { getPassport, putPassport } from "@/api/passports";
import { Input } from "@/components/Input/Input";
import {
  onChangeDate,
  onChangeDate2,
  onChangeDepartmentCode2,
  onChangePassport2,
} from "@/utils";
import { putUser } from "@/api";

function reformatDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString();
}

export function ChangePassport() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<PassportChangeType>();

  const { id, access } = useUser();
  const [loading, setLoading] = useState(true);
  const [send, setSend] = useState(false);
  const gender = useRef("");
  const onSubmit: SubmitHandler<PassportChangeType> = (data) => {
    setSend(true);
    const save = async () => {
      if (!access) return;
      const d = await putPassport(access, {
        id: data.id,
        series: Number(data.passport.split(" ")[0]),
        number: Number(data.passport.split(" ")[1]),
        birthday: new Date(data.birthday),
        gender: gender.current!,
        departmentCode: data.departmentCode,
        issuedBy: data.issuedBy,
        issuedDate: new Date(data.issuedDate),
        address: data.address,
        name: data.name,
        lastname: data.name,
        patronymic: data.patronymic,
      });
      if (d) {
        setValue("id", d.id);
        setValue("name", d.name);
        setValue("lastname", d.lastname);
        setValue("patronymic", d.patronymic);
        setValue("passport", d.series + " " + d.number);
        setValue("birthday", reformatDate(d.birthday));
        setValue("address", d.address);
        gender.current = d.gender;
        setValue("departmentCode", d.departmentCode);
        setValue("issuedBy", d.issuedBy);
        setValue("issuedDate", reformatDate(d.issuedDate));
      }
      setSend(false);
    };
    save();
  };
  useEffect(() => {
    const get = async () => {
      if (!access || !id) return;
      const d = await getPassport(access, id);
      if (d) {
        setValue("id", d.id);
        setValue("name", d.name);
        setValue("lastname", d.lastname);
        setValue("patronymic", d.patronymic);
        setValue("passport", d.series + " " + d.number);
        setValue("birthday", reformatDate(d.birthday));
        setValue("address", d.address);
        gender.current = d.gender;
        setValue("departmentCode", d.departmentCode);
        setValue("issuedBy", d.issuedBy);
        setValue("issuedDate", reformatDate(d.issuedDate));
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
          type="text"
          placeholder="Name"
          id="name"
          register={register}
          required
          watch={watch}
          maxLength={100}
          error={!!errors.name}
        />
        <Input
          type="text"
          placeholder="Lastname"
          id="lastname"
          register={register}
          required
          watch={watch}
          maxLength={100}
          error={!!errors.lastname}
        />
        <Input
          type="text"
          placeholder="Patronymic"
          id="patronymic"
          register={register}
          required
          watch={watch}
          maxLength={100}
          error={!!errors.patronymic}
        />
      </div>
      <div className={styles.row}>
        <Input
          placeholder="Passport series"
          id="passport"
          register={register}
          watch={watch}
          required={true}
          type="text"
          error={!!errors.passport}
          minLength={11}
          onChange={(e) => onChangePassport2(e, setValue)}
        />
        <Input
          placeholder="Birthday (DD.MM.YYYY)"
          id="birthday"
          register={register}
          watch={watch}
          required={true}
          type="text"
          error={!!errors.birthday}
          minLength={10}
          onChange={(e) => onChangeDate2(e, setValue, "birthday")}
        />
      </div>
      <div className={styles.row}>
        <Input
          placeholder="Issued by"
          id="issuedBy"
          register={register}
          watch={watch}
          required={true}
          type="text"
          error={!!errors.issuedBy}
        />
        <Input
          placeholder="Issued data (DD.MM.YYYY)"
          id="issuedDate"
          register={register}
          watch={watch}
          required={true}
          type="text"
          error={!!errors.issuedDate}
          minLength={10}
          onChange={(e) => onChangeDate2(e, setValue, "issuedDate")}
        />
      </div>
      <div className={styles.row}>
        <Input
          placeholder="Department code"
          id="departmentCode"
          register={register}
          watch={watch}
          required={true}
          type="text"
          error={!!errors.departmentCode}
          minLength={7}
          onChange={(e) => onChangeDepartmentCode2(e, setValue)}
        />
        <Input
          placeholder="Address"
          id="address"
          register={register}
          watch={watch}
          required={true}
          type="text"
          error={!!errors.address}
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
