import React from "react";
import styles from "./cuisine.module.css";
import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import useSWR from "swr";
const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.messg);
  }
  return data;
};
const getData = async () => {
  const res = await fetch(`${process.env.BASE}/api/cuisines`);

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Cuisine = async() => {
  const data = await getData();
  //  const {data , isLoading} = useSWR('http://localhost:3000/api/cuisines', fetcher)
  console.log('data:',data);
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContainer}>
        <h1>Kouzina — κουζίνα</h1>
        <hr className={styles.responsiveDivider} />
        <hr
          className={styles.responsiveDivider}
          style={{ marginBottom: "1em" }}
        />

        <div className={styles.aboutCuisine}>
          <div className={styles.textContainer}>
            <hr className={styles.bigDivider} />
            <hr
              className={styles.bigDivider}
              style={{ marginBottom: "30px" }}
            />

            <p>
              Although we operate in San Francisco and draw on the bounty of
              Northern California, we owe our culinary aesthetic to Greece,
              where diners take more pleasure in quality ingredients than in
              artful embellishment.
            </p>

            <p>
              We have modernized many Greek dishes while staying true to the
              signature tastes of the Greek table, respecting the pure flavors
              of sweet baby lamb, tangy homemade yogurt, and the woodsy scent of
              wild oregano.{" "}
            </p>

            <p>
              While Greece is a country with dramatically varied landscapes and
              widely dispersed archipelagos, there is a singularly Greek flavor
              palette, a collection of ingredients and preparation, that define
              what we do at the Kokkari.
            </p>

            <p>
              The appetizing aroma of wood smoke, coming from our open hearth,
              charcoal grill, and wood-fired oven, perfumes our dishes and
              enhances the of warmth of family and friends.
            </p>
            <p>
              Our menu, showcasing seafood and game, features many of the most
              sought-after traditional Aegean dishes, as well as selections
              which have been modernized through the innovative blending of
              cultures and techniques. Horiatiki, the classic Greek salad is
              offered along side the Maroulosalata, a version of the chopped
              salad with a creamy feta dressing, pine nuts and Kalamata olives.
              Tender grilled octopus is garnished with lemon juice and olive
              oil; a classic Greek preparation, while calamari is stuffed with
              feta, fennel and orange; a more modern combination. Lamb chops are
              served straight from the mesquite grill with hints of garlic,
              oregano and lemon juice. While traditional soutzoukakia, or lamb
              meatballs, are enlivened with a hint of cumin and tangy Greek
              yogurt.{" "}
            </p>
          </div>
          <div className={styles.images}>
            <div className={styles.imgContainer}>
              <Image src={"/lamb.jpg"} fill className={styles.img} />
            </div>
            <div className={styles.imgContainer}>
              <Image src={"/olives.jpg"} fill className={styles.img} />
            </div>
          </div>
        </div>
        <div className={styles.cuisines}>
       
       {data.map(item =>(
           <div className={styles.eachCuisine} key={item.id}>
           <div className={styles.eachCuisineImageContainer}>
             <Image
               src={item.img}
               alt="oliveOil"
               fill
               className={styles.img}
             />
           </div>
           <h3 style={{ margin: "1.25em 0" }}>{item.title}</h3>
           <p style={{ padding: "0 .6em 0 1.25em " }}>
            {item.desc}
           </p>
         </div>
       ))}
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
