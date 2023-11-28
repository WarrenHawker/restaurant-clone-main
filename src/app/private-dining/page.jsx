import React from "react";
import styles from "./private-dining.module.css";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import Link from "next/link";

const getData = async () => {
  const res = await fetch(`${process.env.BASE}/api/table`);

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const PrivateDining = async() => {
  const data = await getData()
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContainer}>
        <h1>Private Dining and Special Events</h1>
       {data.map(item=>(
         <div className={styles.eachTable} key={item.id}>
         <h3>{item.title}</h3>
         <hr className={styles.responsiveDivider} />
       <hr className={styles.responsiveDivider} style={{marginBottom: '1em'}}/>

         <div className={styles.eachTableContents}>
           <div className={styles.textContainer}>
             <hr className={styles.bigDivider} />
             <hr
               className={styles.bigDivider}
               style={{ marginBottom: "5px" }}
             />

             <p>
              {item.desc}
             </p>
           </div>
           <div className={styles.imgContainer}>
             <Image
               src={item.img}
               alt=""
               fill
               className={styles.img}
             />
           </div>
         </div>
       </div>
       ))}
        <div className={styles.diningInformation}>
          <h2>Further Group Dining Information</h2>
          <p style={{marginBottom: '1.5em'}}>
            For group dining options, room minimums and availability, please
            contact our Event Manager, <Link href={'mailto:events@kokkari.com'}>Melissa Lopez</Link>.
          </p>
          <p>Phone: <Link href={'tel:+14159810983'}>415.981.0983</Link></p>
          <Link href={'mailto:events@kokkari.com'} style={{marginBottom: '1.5em'}}>Email: events@kokkari.com</Link>
          <p >Download: <Link href={'#'}>Private Dining Packet</Link> or <Link href={'#'}>Lunch Event Packet</Link></p>
        </div>
      </div>
    </div>
  );
};

export default PrivateDining;
