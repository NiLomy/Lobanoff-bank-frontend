"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Chat.module.scss";
import { MessageSquare } from "lucide-react";
import { useUser } from "@/stores";
import SockJS from "sockjs-client";
import { CompatClient, Stomp } from "@stomp/stompjs";
import { MessageRequestType, MessageType } from "@/types/MessageType";
import { getAllMessages, getUser, getUserAll } from "@/api";
import { Loading } from "@/components/Loading/Loading";
import classNames from "classnames/bind";
import { UserType } from "@/types";
const cx = classNames.bind(styles);
export function ChatContent({
  id,
  name,
  support,
}: {
  id: string;
  name: string;
  support: boolean;
}) {
  const client = useRef<CompatClient | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [value, setValue] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const down = () => {
    if (listRef.current) {
      setTimeout(() => {
        listRef.current!.scrollTo({
          top: listRef.current!.scrollHeight,
          behavior: "smooth",
        });
      }, 300);
    }
  };
  async function get() {
    if (!id) return;
    const content = await getAllMessages(id);
    if (content) {
      setMessages(content);
      down();
    }
  }

  useEffect(() => {
    const callback = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        send();
      }
    };
    document.body.removeEventListener("keypress", callback);
    document.body.addEventListener("keypress", callback);
    return () => {
      document.body.removeEventListener("keypress", callback);
    };
  }, [send]);
  useEffect(() => {
    if (!id) return;
    get();
    if (!client.current) {
      const socket = new SockJS("http://localhost:8082/ws");
      client.current = Stomp.over(socket);
      client.current.connect({}, () => {
        client.current!.subscribe("/user/" + id + "/queue/messages", () => {
          get();
        });
      });
    }
  }, [id]);

  function send() {
    if (client.current && value.trim().length > 0) {
      const message: MessageRequestType = {
        senderId: String(id),
        senderName: name,
        content: value,
        timestamp: new Date(),
        isSupport: support,
      };
      client.current.send("/app/chat", {}, JSON.stringify(message));
      setValue("");
      down();
    }
  }

  return (
    <>
      <div className={styles.list} ref={listRef}>
        {messages
          .sort(
            (a, b) =>
              new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
          )
          .map((e) => {
            return (
              <div
                key={e.id}
                className={cx(styles.message, {
                  support: e.isSupport,
                })}
              >
                <div className={styles.top}>{e.senderName}</div>
                <div className={styles.content}>{e.content}</div>
              </div>
            );
          })}
      </div>
      <div className={styles.bottom}>
        <input
          type="text"
          value={value}
          placeholder="Message..."
          onChange={(e) => setValue(e.target.value)}
          className={styles.input}
        />
        <button onClick={send} className={styles.btn}>
          Send
        </button>
      </div>
    </>
  );
}

function ChatAdmin({ adminId }: { adminId: string }) {
  const { access } = useUser();
  const [users, setUsers] = useState<UserType[]>([]);
  const [openedUser, setOpenedUser] = useState<UserType | null>(null);
  useEffect(() => {
    const get = async () => {
      if (!access) return;
      const users = await getUserAll(access);
      if (users) setUsers(users);
    };
    get();
  }, [access]);

  if (users.length === 0) return "";

  return (
    <>
      {openedUser ? (
        <>
          <button className={styles.btnnn} onClick={() => setOpenedUser(null)}>
            back
          </button>
          <ChatContent
            id={String(openedUser.id)}
            name="Lobanoff bank"
            support={true}
          />
        </>
      ) : (
        <div className={styles.list}>
          {users.map((e) => {
            if (Number(adminId) !== e.id) {
              return (
                <button
                  key={e.id}
                  className={styles.btnn}
                  onClick={() => {
                    setOpenedUser(e);
                  }}
                >
                  {e.name}
                </button>
              );
            }
          })}
        </div>
      )}
    </>
  );
}

export function Chat() {
  const [open, setOpen] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const { id, access } = useUser();

  useEffect(() => {
    const get = async () => {
      if (!access || !id) return;
      const user = await getUser(access, id);
      if (!user) return;
      if (user.role === "ADMIN") {
        setAdmin(true);
      }
      setName(user.name);
      setLoading(false);
    };
    get();
  }, [access, id]);

  return (
    <>
      {loading ? (
        <div className={styles.button}>
          <Loading />
        </div>
      ) : (
        <div className={styles.button} onClick={() => setOpen(!open)}>
          <MessageSquare size={16} />
        </div>
      )}

      {open && (
        <div className={styles.chat}>
          {admin ? (
            <ChatAdmin adminId={id!} />
          ) : (
            <ChatContent id={id!} name={name} support={false} />
          )}
        </div>
      )}
    </>
  );
}
