import React from 'react'
import styles from './press.module.css'
import Navbar from '../components/navbar/Navbar'

import Link from 'next/link'
const getData = async () => {
  const res = await fetch(`${process.env.BASE}/api/press`);

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const Press =async () => {
  const data = await getData()
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.mainContainer}>
      {data.map(item=>(
          <div className={styles.eachPress} key={item.id}>
          <div className={styles.imgContainer}>
           <img src={item.img} alt="" className={styles.img}/>
          </div>
          <div className={styles.textContainer}>
           <h3>{item.title}</h3>
           <p style={{fontWeight: 'bold', margin: '1.3em 0'}}>{item.subtitle}</p>
       
           <p>{item.desc}</p>
           <Link href={item.link}>Read more...</Link>
          </div>
         </div>
      ))}
       
        
      </div>
    </div>
  )
}

export default Press