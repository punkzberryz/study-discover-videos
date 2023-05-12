"use client";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./navbar.module.css";

interface NavBarProps {
  username: string;
}
const NavBar = ({ username }: NavBarProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
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
                  <Link href="/login" className={styles.linkName}>
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
