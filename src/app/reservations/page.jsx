import React from "react";
import styles from "./reservations.module.css";
import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
const Reservations = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContainer}>
        <h1>Reservations</h1>
        <hr className={styles.responsiveDivider} />
        <hr className={styles.responsiveDivider} style={{marginBottom: '1em'}}/>

        <div className={styles.reservationssContainer}>
          <div className={styles.textContainer}>
            <hr className={styles.bigDivider} />
            <hr
              className={styles.bigDivider}
              style={{ marginBottom: "30px" }}
            />

            <p>
              KOKKARI ESTIATORIO accepts reservations up to two months in
              advance to the calendar date.
            </p>

            <p>To reserve a table, please call 415.981.0983.</p>

            <p>
              Online reservations are 30 days in advance only. Make an online
              reservation through OpenTable
            </p>

            <p>We do not take reservations via email.</p>
            <div className={styles.times}>
              <h2 style={{ marginBottom: "1em" }}>Hours of Operation</h2>

              <h3>Lunch</h3>
              <p>Mon-Fri 11:30am to 2:30pm</p>
              <h3>Dinner</h3>
              <p>Monday-Sunday 5:00pm – 10:00pm</p>
              <h3>Corkage</h3>
              <p>
                $30 per 750ml bottle for up to 2 bottles, $50 per additional
                bottle
              </p>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image src={"/door.jpg"} fill className={styles.img} />
          </div>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.7014219890484!2d-122.40233082487269!3d37.79703651087863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858060747de94d%3A0xb3d399f14d2b6c40!2sKokkari%20Estiatorio!5e0!3m2!1sen!2sus!4v1700568113157!5m2!1sen!2sus"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.directionsContainer}>
          <h4 style={{ marginBottom: "1em" }}>Directions</h4>
          <Link
            href={
              "http://maps.apple.com/?daddr=200+Jackson+Street,+ San+Francisco,+CA"
            }
          >
            <p style={{ fontFamily: '"Cinzel", serif', marginBottom: ".3em" }}>
              Click here for mobile map
            </p>
            <div className={styles.carIconContainer}>
              <DirectionsCarIcon color="white" />
            </div>
          </Link>
        </div>
        <hr style={{ marginTop: "3em" }} />
        <hr />
        <div className={styles.directAddress}>
          <div className={styles.eachDirectAddressList} style={{marginTop: '3em'}}>
            <h4 style={{fontSize: 20}}>From North Bay:</h4>
            <ul style={{marginLeft: '2em', marginTop: '1em'}}>
              <li>Take US-101 South towards San Francisco</li>
              <li>Go across the Golden Gate Bridge</li>
              <li>Take the US-101 South ramp towards DOWNTOWN/LOMBARD ST.</li>
              <li>Stay on LOMBARD ST. until VAN NESS AVE</li>
              <li>Turn RIGHT on VAN NESS AVE.</li>
              <li>Turn LEFT on BROADWAY ST.</li>
              <li>Take BROADWAY thru the BROADWAY TUNNEL.</li>
              <li>
                Proceed thru the major intersection of COLUMBUS and BROADWAY.
              </li>
              <li>Turn RIGHT on BATTERY ST.</li>
              <li>Turn LEFT on JACKSON ST.</li>
              <li>KOKKARI is at the corner of JACKSON ST. & FRONT ST.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
