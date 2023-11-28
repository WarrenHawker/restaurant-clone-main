"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
const Navbar = () => {
  const [path, setPath] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const openDrop = () => {
    setDropOpen(true);
  };
  const closeDrop = () => {
    setDropOpen(false);
  };

  useEffect(() => {
    const changeLink = () => {
      const path = window.location.pathname;
      const page = path.substring(1);
      setPath(page);
    };
    changeLink();
    console.log("path:", path);
  }, []);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Link href={"/"}>
          <Image src={"/kokkariLogo.png"} alt="" fill />
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href={"/about"}>
          <span
            style={
              path === "about" ? { color: "#6d4412" } : { color: "#333333" }
            }
          >
            About
          </span>
        </Link>
        <Link
          href={"/cuisine"}
          style={
            path === "cuisine" ? { color: "#6d4412" } : { color: "#333333" }
          }
        >
          Cuisine
        </Link>
        <div
        className={styles.menuDropDown}
          style={path === "menus" ? { color: "#6d4412" } : { color: "#333333" }}
          onMouseOver={openDrop}
          onMouseLeave={closeDrop}
        >
          Menus
          <div style={ dropOpen ? {display: 'flex'} : {display: 'none'} } className={styles.dropDownMenu} onMouseLeave={closeDrop}>
            <Link href={"/"}>lunch menu</Link>
            <hr />
            <Link href={"/"}>Dinner menu</Link>
            <hr />
            <Link href={"/"}>wine list</Link>
          </div>
        </div>
        <Link
          href={"/reservations"}
          style={
            path === "reservations"
              ? { color: "#6d4412" }
              : { color: "#333333" }
          }
        >
          Reservations
        </Link>
        <Link
          href={"/private-dining"}
          style={
            path === "private-dining"
              ? { color: "#6d4412" }
              : { color: "#333333" }
          }
        >
          Private dining
        </Link>
      </div>
      <div className={styles.responsiveMenu}>
        {menuOpen ? (
          <div onClick={openMenu} style={{ cursor: "pointer" }}>
            <MenuOpenIcon />
          </div>
        ) : (
          <div onClick={openMenu} style={{ cursor: "pointer" }}>
            <MenuIcon />
          </div>
        )}

        <div
          className={styles.navLinksResponsive}
          style={menuOpen ? { display: "flex" } : { display: "none" }}
        >
          <Link href={"/about"}>
            <span
              style={
                path === "about" ? { color: "#6d4412" } : { color: "#333333" }
              }
            >
              About
            </span>
          </Link>
          <Link
            href={"/cuisine"}
            style={
              path === "cuisine" ? { color: "#6d4412" } : { color: "#333333" }
            }
          >
            Cuisine
          </Link>
          <Link
            href={"/menus"}
            style={
              path === "menus" ? { color: "#6d4412" } : { color: "#333333" }
            }
          >
            Menus
          </Link>
          <Link
            href={"/reservations"}
            style={
              path === "reservations"
                ? { color: "#6d4412" }
                : { color: "#333333" }
            }
          >
            Reservations
          </Link>
          <Link
            href={"/private-dining"}
            style={
              path === "private-dining"
                ? { color: "#6d4412" }
                : { color: "#333333" }
            }
          >
            Private dining
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
