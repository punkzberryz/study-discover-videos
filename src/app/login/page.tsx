"use client";

import { Metadata } from "next";
import Image from "next/image";
import { MouseEvent, ChangeEvent, useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

//styles
import styles from "../styles/Login.module.css";
//lib
import { magic } from "../../lib/magic-client";

export const metadata: Metadata = {
  title: "Netflix SignIn",
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    console.log("path = ", url);
    console.log(searchParams);
  }, [pathname, searchParams]);

  const handleLoginWithEmail = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (email) {
      setIsLoading(true);
      if (email == "kanggive@gmail.com") {
        try {
          if (magic) {
            const didToken = await magic.auth.loginWithMagicLink({ email });
            console.log(didToken);
            if (didToken) {
              router.push("/");
              setIsLoading(false);
            }
          }
        } catch (error) {
          console.error("Something went wrong logging in", error);
          setIsLoading(false);
        }
      }
    } else {
      setIsLoading(false);
      setUserMsg("Enter a valid email addess");
    }
  };

  const handleOnChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserMsg("");
    setEmail(event.target.value);
  };
  return (
    <>
      <title>Netflix SignIn</title>
      <div className={styles.container}>
        <header>
          <div className={styles.headerWrapper}>
            <a className={styles.logoLink} href="/">
              <div className={styles.logoWrapper}>
                <Image
                  src="/static/netflix.svg"
                  alt="Netflix logo"
                  width="128"
                  height="34"
                />
              </div>
            </a>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.mainWrapper}>
            <h1 className={styles.signinHeader}>Sign In</h1>
            <input
              type="text"
              placeholder="Email address"
              className={styles.emailInput}
              onChange={handleOnChangeEmail}
            />
            <p className={styles.userMsg}>{userMsg}</p>
            <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
              {isLoading ? "Loading..." : "Sign In"}
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
export default Login;
