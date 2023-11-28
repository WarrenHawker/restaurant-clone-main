import React from "react";
import Navbar from "../components/navbar/Navbar";
import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";
import "./aboutGlobal.css";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContainer}>
        <h1>Philoxenia — φιλοξενια</h1>
        <hr className={styles.responsiveDivider} />
        <hr className={styles.responsiveDivider} style={{marginBottom: '1em'}}/>
        <div className={styles.aboutHotel}>
          <div className={styles.textContainer}>
            <hr className={styles.bigDivider}/>
            <hr className={styles.bigDivider}/>

            <p>
              At Kokkari Estiatorio, we are driven by the concept of philoxenia,
              the art of making a stranger a friend. This philosophy drives our
              efforts to create a cuisine fit for the gods with the hospitality
              of a proper Greek home — a restaurant that you would never want to
              leave.
            </p>

            <p>
              Named after a small fishing village on the island of Samos in the
              Aegean Sea, Kokkari is the sister restaurant to acclaimed Evvia
              Estiatorio in Palo Alto, California.
            </p>

            <p>
              Legendary Kokkari is the site where Orion, son of the Greek god
              Poseidon, fell in love with the daughter of the King of Chios. For
              her love, Orion foraged the island for wild game and seafood to
              prepare elaborate banquets: Cuisine fit for the gods.
            </p>

            <p>
              On entering Kokkari, guests experience the old-world charm of a
              rustic Mediterranean country inn. An inviting fireplace, extensive
              woodwork, hand-made pottery and freshly picked flowers all reflect
              the warmth and tradition of ages-old hospitality.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src={"/table.jpg"} fill className={styles.img} />
          </div>
        </div>
        <div className={styles.divider}>
          <hr />
          <hr />
        </div>
        <div className={styles.aboutSeo}>
          <div id="about" className={styles.hotelNamesAndAddress}>
            <div className={styles.address}>
              <h3 style={{ marginBottom: "1em" }}>KOKKARI ESTIATORIO</h3>
              <p style={{ marginBottom: "1em", fontWeight: "bold" }}>
                200 Jackson Street (at Front St.)
                <br />
                San Francisco, CA 94111
              </p>
              <p>
                p:{" "}
                <Link
                  href={"tel:+14159810983"}
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                  className={styles.roleLinks}
                >
                  415.981.0983
                </Link>
                <br />
              </p>
              <Link
                href={"/reservations"}
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
                className={styles.roleLinks}
              >
                reservations & hours
              </Link>
              <Link
                href={
                  "http://maps.apple.com/?daddr=200+Jackson+Street,+ San+Francisco,+CA"
                }
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 16,
                  fontWeight: "bold",
                  display: "block",
                }}
                className={styles.roleLinks}
              >
                directions via mobile map
              </Link>
            </div>
            <div className={styles.roles}>
              <p>Managing Partner</p>
              <Link
                href={"mailto:paul@kokkari.com"}
                className={styles.rolaNameLinks}
              >
                Paul Kirby
              </Link>
              <p>Chef Partner </p>
              <Link
                href={"mailto:erik@kokkari.com"}
                className={styles.rolaNameLinks}
              >
                Erik Cosselmon
              </Link>
              <p>General Manager </p>
              <Link
                href={"mailto:william@kokkari.com"}
                className={styles.rolaNameLinks}
              >
                William Boumier
              </Link>
              <p>Executive Chef </p>
              <p>Mario Ortega</p>
              <p>Chef de Cuisine </p>
              <p>Manuel Vera</p>
              <p>Office Manager </p>
              <Link
                href={"mailto:molly@kokkari.com"}
                className={styles.rolaNameLinks}
              >
                Molly Barrango
              </Link>
              <p>Sous Chefs </p>
              <p> Miho Reis</p>
              <p>Pastry</p>
              <p>Guillermo Coronado</p>
              <p>Managers</p>
              <p>
                Bibi Bahador
                <br />
                Iain Bates
                <br />
                Michele DiRuocco
                <br />
                <Link
                  href={"mailto:robin@kokkari.com"}
                  className={styles.rolaNameLinks}
                >
                  {" "}
                  Robin Kirby
                </Link>
                <br />
                Valerie Klein
              </p>
              <p>Wine Buyer </p>
              <p>Lyle Coffield</p>
              <p>Event Manager </p>
              <Link
                href={"mailto:events@kokkari.com"}
                className={styles.rolaNameLinks}
              >
                Melissa Lopez
              </Link>
            </div>
          </div>
          <div className={styles.aboutEachOne}>
            <div className={styles.eachRole}>
              <div className={styles.paulImgContainer}>
                <Image
                  src={"/paul.jpg"}
                  width={300}
                  height={449}
                  className={styles.img}
                />
              </div>
              <Link
                href={"mailto:paul@kokkari.com"}
                className={styles.roleLinks}
              >
                <h4 style={{ marginBottom: "1em" }}>Paul kirby</h4>
              </Link>
              <h5
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 16,
                  fontWeight: "normal",
                }}
              >
                Managing partner
              </h5>
              <p style={{ margin: "1em 0" }}>
                “Running a restaurant is all about taking care of people,” says
                Paul Kirby who has been at the helm of Kokkari Estiatorio since
                2000. “From your staff to each and every guest that comes into
                your establishment, it is important to make everyone feel
                comfortable and welcome. Restaurant employees that are valued
                and respected take pride in their work and truly enjoy their
                jobs. This translates directly to the guest experience.”
              </p>
              <p style={{ margin: "1em 0" }}>
                While Paul may be soft-spoken and charming (qualities he
                attributes to his Southern upbringing), he is extremely driven.
                His dedicated, hands-on approach to management ensures the high
                standards of service and hospitality at the restaurant have
                stayed consistent for over 15 years. Under Kirby, Kokkari’s
                refreshing approach to service emphasizes the emotional elements
                of hospitality: Have a good time and above all, make sure the
                guests have a great time.
              </p>
              <p style={{ margin: "1em 0" }}>
                Paul came to the West Coast after years managing waterfront
                restaurant properties in The Hamptons outside of New York City.
                His first job in San Francisco was working alongside acclaimed,
                Bay Area Chef, Reed Hearon as General Manager of Rose Pistola.
                After three years with Hearon he came to Kokkari Estiatorio
                bringing with him a genuine appreciation and knowledge of rustic
                Meditteranean cuisine and wines, an essential prerequisite for
                working at Kokkari. In 2006 he was named Managing Partner of
                both Kokkari and Evvia in Palo Alto.
              </p>
            </div>
            <div className={styles.eachRole}>
              <div className={styles.paulImgContainer}>
                <Image
                  src={"/erik.jpg"}
                  width={300}
                  height={449}
                  className={styles.img}
                />
              </div>
              <Link
                href={"mailto:erik@kokkari.com"}
                className={styles.roleLinks}
              >
                <h4 style={{ marginBottom: "1em" }}>Erik Cosselmon</h4>
              </Link>
              <h5
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 16,
                  fontWeight: "normal",
                }}
              >
                Chef Partner
              </h5>
              <p style={{ margin: "1em 0" }}>
                Erik Cosselmon’s wide-ranging Mediterranean repertoire and
                strong, ingredient-driven style finds full expression in the
                Greek-inspired menus at Kokkari and sister restaurant Evvia in
                Palo Alto. Since being named Executive Chef of Kokkari in 2004,
                Cosselmon’s brand of casual tavern cuisine has attracted even
                more devotees, earning Kokkari top ratings in both local and
                National press publications. “The goal at Kokkari and Evvia is
                to offer as close to a true Greek restaurant experience as
                possible. Not only is it about good food, it’s about the people,
                the celebratory atmosphere and the Greek hospitality.”
              </p>
              <p style={{ margin: "1em 0" }}>
                Erik grew up on a farm in Central Michigan helping his mom tend
                their extensive kitchen garden and his dad cook for the large
                parties the family would host. This introduction to farm-fresh
                ingredients and cooking cemented his desire to be a chef at an
                early age. After completing a degree at The Culinary Institute
                of America in Hyde Park, New York he moved to Manhattan and
                began his career working at notable restaurants such as
                Montrachet, Tribeca Grill, Le Bernardin and Daniel.
              </p>
              <p style={{ margin: "1em 0" }}>
                Cosselmon moved to San Francisco and in 1996 joined Reed Hearon
                in opening his landmark Liqurian restaurant, Rose Pistola, in
                North Beach. In 1998 he was named Executive Chef. In 2001, ready
                for a new challenge, Erik left to run the kitchen at Cetrella
                Bistro & Café in Half Moon Bay where he garnered immediate and
                consistent critical praise for his rustic Mediterranean food
              </p>
              <p style={{ margin: "1em 0" }}>
                His subsequent move to Kokkari made perfect sense. “Since moving
                from New York to the Bay Area, my cooking philosophy has evolved
                from the formal French tradition to the less complicated
                Mediterranean, with a focus on ingredients as opposed to the
                architecture of the dish.” His leadership and cuisine has
                contributed to Kokkari’s extraordinary success as one of San
                Francisco’s busiest restaurants. In 2006, Cosselmon was named
                Executive Chef of sister restaurant Evvia located in Palo Alto
                where he oversees the menu. He also joined the founding Partners
                as a Partner.
              </p>
            </div>
            <div className={styles.eachRole}>
              <div className={styles.paulImgContainer}>
                <Image
                  src={"/mario.jpg"}
                  width={300}
                  height={449}
                  className={styles.img}
                />
              </div>
              <div className={styles.roleLinks}>
                <h4 style={{ marginBottom: "1em" }}>Mario Ortega</h4>
              </div>
              <h5
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 16,
                  fontWeight: "normal",
                }}
              >
                Executive Chef
              </h5>
              <p style={{ margin: "1em 0" }}>
                Chef Mario Ortega’s interest in food and cooking began at a
                young age. He would spend hours in the kitchen with his grandma
                observing and helping her cook and tasting the delicious dishes
                she created. This ignited a lifelong passion for food that
                shaped his adult life.
              </p>
              <p style={{ margin: "1em 0" }}>
                After attending culinary school at Leaderwolf Academy in
                Sacramento, Chef Mario was brought to California’s culinary
                mecca, San Francisco. During his time in SF, Mario worked hard
                to develop his craft at high end restaurants such as Vertigo in
                the famous TransAmerica building and Scala’s Bistro. He spent
                several years at Scala’s nourishing his love for Mediterranean
                cooking. In 2005 he left the city for an opportunity to head the
                kitchen at Quail Lodge Resort in Carmel. He joined the culinary
                team, and a few years later as as Chef de Cuisine at Evvia
                Estiatorio, our sister restaurant in Palo Alto. The modern
                Hellenic cuisine was a great fit for Mario’s
                Mediterranean-focused background.
              </p>
              <p style={{ margin: "1em 0" }}>
                After 15 years at Evvia Estiatorio, Mario returned to Kokkari in
                the Summer of 2023 to assume the roll of Executive Chef. During
                his time at Evvia he developed close relationships with many
                local purveyors. At Kokkari, he continues to foster these
                relationships and focus on creating Mediterranean-inspired
                dishes from locally sourced products whenever possible. When
                Chef is not at the helm at Evvia, he adores spending time with
                his wife and three children and it usually involves food!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
