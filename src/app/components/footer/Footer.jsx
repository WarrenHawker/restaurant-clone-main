import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <Link href={"/press"}>Press Room</Link>
        <Link href={"/cookbook"}>
          Gift certificates
          <br />& cookbook
        </Link>
        <Link href={"/about/#about"}>Contact</Link>
      </div>

      <div className={styles.footerDownContainer}>
        <div className={styles.upFooter}>
          <Link href={"/"}>kokkari</Link>
          <p>|</p>
          <Link href={"/"}>evvia</Link>
        </div>

        <div className={styles.middleFooter} >
          <p >
            KOKKARI ESTIATORIO
            <br />
            200 Jackson Street (at Front St.)
            <br />
            San Francisco, CA 94111
            <br />
            p: <Link style={{color:'#844e02'}} href={"tel:+14159810983"}>415.981.0983</Link>
          </p>
        </div>

        <div className={styles.bottomFooter}>
          <Link style={{color:'#844e02'}} href={"/"}>
            reservations & hours
            <br />
            directions
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
