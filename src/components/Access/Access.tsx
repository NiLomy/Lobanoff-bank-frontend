"use client";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { useUser } from "@/stores";
import { getAccess } from "@/api";

export function Access() {
  const { refresh, setTokens, access, clear, setId } = useUser();
  const prepare = async () => {
    const now = new Date().getTime() / 1000;
    if (refresh) {
      const decoded = jwtDecode(refresh);
      if (decoded.exp && now > decoded.exp) {
        clear();
        return;
      }
      if (decoded.sub) {
        setId(decoded.sub);
      }
    }
  };
  const update = async () => {
    if (!refresh) return;
    const tokens = await getAccess(refresh);
    if (!tokens) return;
    console.log("token");
    setTokens(tokens);
  };

  useEffect(() => {
    prepare();
  }, [refresh]);

  useEffect(() => {
    let int: NodeJS.Timeout;

    if (refresh) {
      update();
      int = setInterval(update, 1000 * 4 * 60);
    }

    return () => {
      clearInterval(int);
    };
  }, [refresh]);
  return "";
}
