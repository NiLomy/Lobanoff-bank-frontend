import React, {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
} from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";
import {
  UseFormRegister,
  FieldValues,
  Path,
  UseFormWatch,
  Validate,
  PathValue,
} from "react-hook-form";
const cx = classNames.bind(styles);
export function Input<T extends FieldValues>({
  placeholder,
  id,
  register,
  required,
  maxLength,
  minLength,
  pattern,
  watch,
  type,
  validate,
  autocomplete,
  error,
}: {
  placeholder: string;
  id: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
  watch: UseFormWatch<T>;
  type: HTMLInputTypeAttribute;
  validate?: Validate<PathValue<T, Path<T>>, T>;
  autocomplete?: HTMLInputAutoCompleteAttribute;
  error: boolean;
}) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label
      className={cx(styles.label, {
        error,
        focused: focus || watch(id),
      })}
      htmlFor={id}
    >
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        autoComplete={autocomplete || "off"}
        className={styles.input}
        onFocus={() => setFocus(true)}
        {...register(id, {
          pattern,
          required,
          minLength,
          maxLength,
          onBlur: () => setFocus(false),
          validate,
        })}
      />
    </label>
  );
}
