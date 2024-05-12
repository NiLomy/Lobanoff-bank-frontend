import styles from "./RegistryGender.module.scss";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { RegistryInterface } from "@/app/(auth)/register/page";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export function RegistryGender({
  registry,
  watch,
}: {
  registry: UseFormRegister<RegistryInterface>;
  watch: UseFormWatch<RegistryInterface>;
}) {
  return (
    <div className={styles.wrapper}>
      <label
        htmlFor="male"
        className={cx(styles.label, styles.left, {
          active: watch("gender") === "M",
        })}
      >
        Male
      </label>
      <input
        type="radio"
        id="male"
        value="M"
        className={styles.input}
        {...registry("gender", {
          required: true,
        })}
      />
      <label
        htmlFor="female"
        className={cx(styles.label, styles.right, {
          active: watch("gender") === "F",
        })}
      >
        Female
      </label>
      <input
        type="radio"
        id="female"
        value="F"
        className={styles.input}
        {...registry("gender", {
          required: true,
        })}
      />
    </div>
  );
}
