"use client";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./navbar.module.css";
//data
import { magic } from "../../../lib/magic-client";

interface NavBarProps {
  username: string;
}
const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState("");
  const router = useRouter();
  useEffect(() => {
    const getUser = async () => {
      try {
        if (magic) {
          const { email, publicAddress } = await magic.user.getMetadata();
          if (email) setUsername(email);
        }
      } catch {
        // Handle errors if required!
      }
    };
    getUser();
  });

  const handleOnClickHome = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    router.push("/");
  };
  const handleOnClickMyList = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    router.push("/browse/my-list");
  };
  const handleShowDropdown = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setShowDropdown(!showDropdown);
  };
  const handleSignout = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      if (magic) {
        await magic.user.logout();
        console.log(await magic.user.isLoggedIn()); // => `false`
        router.push("/login");
      }
    } catch (error) {
      console.error("error retrieving email", error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              {/* Expand more icon */}
              <Image
                src="/static/expand_more.svg"
                alt="Expand dropdown"
                width="24"
                height="24"
              />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link
                    href="/login"
                    className={styles.linkName}
                    // legacyBehavior
                    onClick={handleSignout}
                  >
                    Sign out
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
