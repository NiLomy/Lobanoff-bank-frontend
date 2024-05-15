"use client";
import { Loading } from "@/components/Loading/Loading";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect } from "react";
import { verifyUser } from "@/api";
import { useUser } from "@/stores";

export default function Verify() {
  const params = useSearchParams();
  console.log(params.get("code"));
  const { setTokens } = useUser();
  const router = useRouter();
  useEffect(() => {
    const code = params.get("code");
    if (code) {
      verifyUser(code).then((res) => {
        if (res) {
          setTokens(res);
          router.push("/accounts/create");
        }
      });
    } else {
      router.push("/");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div>Please, wait</div>
      <Loading />
    </div>
  );
}
