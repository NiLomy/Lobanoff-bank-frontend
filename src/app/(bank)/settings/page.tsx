"use client";
import styles from "./page.module.scss";
import { ChangeUser } from "@/components/ChangeUser/ChangeUser";
import { useUser } from "@/stores";
import { useRouter } from "next/navigation";
import { ChangePassport } from "@/components/ChangeUser/ChangePassport";
import { deleteUser } from "@/api";

export default function Settings() {
  const { clear, access, id } = useUser();
  const router = useRouter();

  const handleExit = () => {
    clear();
    router.push("/");
  };

  const handleDelete = async () => {
    if (!access || !id) return;
    const d = await deleteUser(access, id);
    if (d) {
      clear();
      router.push("/");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.line}>
          <div className={styles.title}>User info</div>
          <ChangeUser />
        </div>
        <div className={styles.line}>
          <div className={styles.title}>Passport</div>
          <ChangePassport />
        </div>
        <div className={styles.line}>
          <div className={styles.title}>Log out</div>
          <div className={styles.buttons}>
            <button className={styles.exit} onClick={() => handleExit()}>
              Exit
            </button>
            <button className={styles.delete} onClick={() => handleDelete()}>
              Delete profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
