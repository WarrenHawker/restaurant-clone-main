"use client";
import React, { useEffect, useState } from "react";
import styles from "./cookbook.module.css";
import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckBox from "../components/checkbox/CheckBox";
import Textarea from "../components/textarea/Textarea";
import { Divider } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cookbook = () => {
  // STATES
  const [total, setTotal] = useState(15);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [bookNumber, setBookNumber] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [billingAddressLine, setBillingAddressLine] = useState(null);
  const [billingCity, setBillingCity] = useState(null);
  const [billingState, setBillingState] = useState(null);
  const [billingZipCode, setBillingZipCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [text, setText] = useState("");
  const count = text.length;

  // Shipping states

  const [clientSecret, setClientSecret] = useState("sdsdsd");
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(`${process.env.BASE}/api/create-intent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: total,
        });
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };
  });


  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContainer}>
        <h1>Cookbook and Gift Certificates</h1>
        <div className={styles.aboutBook}>
          <h3>Kokkari: Contemporary Greek Flavors </h3>
          <hr className={styles.responsiveDivider} />
          <hr
            className={styles.responsiveDivider}
            style={{ marginBottom: "1em" }}
          />

          <div className={styles.aboutBookContents}>
            <div className={styles.textContainer}>
              <hr className={styles.bigDivider} />
              <hr
                className={styles.bigDivider}
                style={{ marginBottom: "5px" }}
              />

              <p>
                Long before fresh, seasonal, artisanal, and local became
                catchwords on every food-lovers lips, the Greeks had a developed
                as simple and irresistible cuisine based on the day’s catch from
                the sea, wild greens gathered on rocky hillsides, perfectly
                ripened orchard fruits, and patiently prepared feta cheese and
                thickened yogurt. Horta, Avgolemono, Tzatziki, Galaktoboureko.
                The brilliant flavors and unforgettable textures of bright lemon
                and fragile phyllo, the mouthwatering aroma of lamb roasting
                over an open fire resonate with every Greek heart and evoke
                strong memories of family gatherings and an age-old ethos of
                hospitality. Well into its second decade, Kokkari’s founders
                continue to greet the stranger as a friend and welcome diners in
                the best warm Greek fashion to a meal they won’t soon forget.
                Now they invite you to try some of their favorite dishes at
                home, and wish you a Greek bon appetit: kali orexi!
              </p>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={"/kokkari-cookbook.jpg"}
                alt=""
                fill
                className={styles.img}
              />
            </div>
          </div>
        </div>
        <div className={styles.paymentFormContainer}>
          <form className={styles.paymentForm}>
            <h3 style={{ marginBottom: "1.5em" }}>
              Cookbook & Gift Certificate Order Form
            </h3>

            <div className={styles.goodToChoose}>
              <p style={{ marginTop: "1em", marginBottom: "2em" }}>
                We ship gift certificates and cookbooks to United States
                addresses only.
              </p>
              <p style={{ marginBottom: "1em" }}>
                Together they make a memorable gift.
              </p>
              <p style={{ fontWeight: "bold" }}>Cookbooks $40</p>
              <p style={{ marginBottom: ".75em" }}>
                Two cookbook maximum per order
              </p>
              <div className={styles.optionContainer}>
                <select
                  name="bookNumberCheckbox"
                  id=""
                  className={styles.selectBox}
                  value={bookNumber}
                  onChange={(e) => setBookNumber(e.target.value)}
                >
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <div className={styles.selectIcon}>
                  <ArrowDropDownIcon className={styles.selectIconSelf} />
                </div>
              </div>

              <div className={styles.checkBoxContainer}>
                <CheckBox checked={false} />
                <span>
                  {" "}
                  Gift Wrap <span style={{ color: "gray" }}>+$3.50</span>
                </span>
              </div>
              <p style={{ marginBottom: "1em", marginTop: "2em" }}>
                Gift certificate orders placed by 12pm PST Monday thru Friday
                will be processed and sent the same day. Orders received after
                12pm PST, over the weekend or on a holiday, will be processed
                and sent the next business weekday (Monday-Friday).
              </p>
              <p style={{ marginBottom: "1em" }}>
                Gift certificates purchased online will be shipped to the
                recipient via Federal Express or UPS and cannot be held at the
                restaurant for pickup. We cannot send gift certificates via US
                Mail or ship to a P.O Box.
              </p>
              <p style={{ marginBottom: "1em" }}>
                Gift certificates cannot be replaced if lost or stolen. By
                placing your order, you agree to these terms.
              </p>

              <div>
                <textarea
                  onChange={(e) => setText(e.target.value)}
                  name=""
                  id=""
                  cols="30"
                  maxLength={75}
                  className={styles.textarea}
                ></textarea>
                <p style={{ fontSize: 10 }}>{count} of 75 max characters</p>
              </div>
            </div>

            <div className={styles.billingInformation}>
              <h4 style={{ marginTop: "4em" }}>Billing Information</h4>
              <Divider
                sx={{
                  backgroundColor: "white",
                  marginTop: "1em",
                  marginBottom: "1.3em",
                }}
              />

              <div className={styles.billingInformationContents}>
                <h4>
                  Your Name<span style={{ color: "red" }}>*</span>
                </h4>

                <div className={styles.firstItemFromEach}>
                  <div className={styles.firstItemFromEachContents}>
                    <input
                      type="text"
                      name=""
                      id="firstName"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label style={{ display: "block" }} htmlFor="firstName">
                      First
                    </label>
                  </div>
                  <div className={styles.firstItemFromEachContents}>
                    <input
                      type="text"
                      name=""
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <label style={{ display: "block" }} htmlFor="lastName">
                      Last
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.billingInformationContents}>
                <h4>
                  Billing Address <span style={{ color: "red" }}>*</span>
                </h4>

                <div className={styles.firstItemFromEachContents}>
                  <input
                    type="text"
                    name=""
                    id="streetAddress"
                    value={billingAddress}
                    onChange={(e) => setBillingAddress(e.target.value)}
                  />
                  <label style={{ display: "block" }} htmlFor="streetAddress">
                    Street Address
                  </label>
                </div>
                <div className={styles.firstItemFromEachContents}>
                  <input
                    type="text"
                    name=""
                    id="addressLine2"
                    value={billingAddressLine}
                    onChange={(e) => setBillingAddressLine(e.target.value)}
                  />
                  <label style={{ display: "block" }} htmlFor="addressLine2">
                    Address Line 2
                  </label>
                </div>
                <div className={styles.firstItemFromEach}>
                  <div className={styles.firstItemFromEachContents}>
                    <input
                      type="text"
                      name=""
                      id="city"
                      value={billingCity}
                      onChange={(e) => setBillingCity(e.target.value)}
                    />
                    <label style={{ display: "block" }} htmlFor="city">
                      city
                    </label>
                  </div>
                  <div className={styles.firstItemFromEachContents}>
                    <input
                      type="text"
                      name=""
                      id="state"
                      value={billingState}
                      onChange={(e) => setBillingState(e.target.value)}
                    />
                    <label style={{ display: "block" }} htmlFor="state">
                      State / Province / Region
                    </label>
                  </div>
                </div>
                <div className={styles.firstItemFromEach}>
                  <div className={styles.firstItemFromEachContents}>
                    <input
                      type="text"
                      name=""
                      id="zip"
                      value={billingZipCode}
                      onChange={(e) => setBillingZipCode(e.target.value)}
                    />
                    <label style={{ display: "block" }} htmlFor="zip">
                      ZIP / Postal Code
                    </label>
                  </div>
                  <div className={styles.firstItemFromEachContents}>
                    <div className={styles.optionContainer}>
                      <select
                        name="cookBook"
                        id="country"
                        className={styles.selectBox}
                        style={{ display: "block" }}
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <option value=""></option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bonaire, Sint Eustatius and Saba">
                          Bonaire, Sint Eustatius and Saba
                        </option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cabo Verde">Cabo Verde</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos Islands">Cocos Islands</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, Democratic Republic of the">
                          Congo, Democratic Republic of the
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curaçao">Curaçao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czechia">Czechia</option>
                        
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Eswatini">Eswatini</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands">
                          Falkland Islands
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and McDonald Islands">
                          Heard Island and McDonald Islands
                        </option>
                        <option value="Holy See">Holy See</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                       
                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                      
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia">Micronesia</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="North Macedonia">North Macedonia</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestine, State of">
                          Palestine, State of
                        </option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Réunion">Réunion</option>
                        <option value="Saint Barthélemy">
                          Saint Barthélemy
                        </option>
                        <option value="Saint Helena, Ascension and Tristan da Cunha">
                          Saint Helena, Ascension and Tristan da Cunha
                        </option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Martin">Saint Martin</option>
                        <option value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon
                        </option>
                        <option value="Saint Vincent and the Grenadines">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Sint Maarten">Sint Maarten</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and the South Sandwich Islands">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="South Sudan">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria Arab Republic">
                          Syria Arab Republic
                        </option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, the United Republic of">
                          Tanzania, the United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-Leste">Timor-Leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Türkiye">Türkiye</option>
                        <option value="US Minor Outlying Islands">
                          US Minor Outlying Islands
                        </option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">
                          Virgin Islands, British
                        </option>
                        <option value="Virgin Islands, U.S.">
                          Virgin Islands, U.S.
                        </option>
                        <option value="Wallis and Futuna">
                          Wallis and Futuna
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                        <option value="Åland Islands">Åland Islands</option>
                      </select>
                      <div className={styles.selectIcon}>
                        <ArrowDropDownIcon className={styles.selectIconSelf} />
                      </div>
                    </div>
                    <label
                      style={{ marginTop: 5, display: "block" }}
                      htmlFor="country"
                    >
                      Country
                    </label>
                  </div>
                </div>

                <div className={styles.firstItemFromEachContents}>
                  <h4 style={{ marginBottom: "1em", marginTop: "2.5em" }}>
                    Billing Address <span style={{ color: "red" }}>*</span>
                  </h4>
                  <input
                    type="text"
                    name=""
                    id="phoneNumber"
                    style={{ width: "47%" }}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className={styles.firstItemFromEachContents}>
                  <h4 style={{ marginBottom: "1em", marginTop: "2.5em" }}>
                    Your Email <span style={{ color: "red" }}>*</span>
                  </h4>
                  <input
                    type="text"
                    name=""
                    id="phoneNumber"
                    style={{ width: "47%" }}
                    value={email}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className={styles.billingInformation}>
              <h4 style={{ marginTop: "4em" }}>Shipping Information</h4>
              <Divider
                sx={{
                  backgroundColor: "white",
                  marginTop: "1em",
                  marginBottom: "1.3em",
                }}
              />

              <div className={styles.billingInformationContents}>
                <h4>
                  Mail To Name<span style={{ color: "red" }}>*</span>
                </h4>

                <div className={styles.firstItemFromEach}>
                  <div className={styles.firstItemFromEachContents}>
                    <input type="text" name="" id="firstName" />
                    <label style={{ display: "block" }} htmlFor="firstName">
                      First
                    </label>
                  </div>
                  <div className={styles.firstItemFromEachContents}>
                    <input type="text" name="" id="lastName" />
                    <label style={{ display: "block" }} htmlFor="lastName">
                      Last
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.billingInformationContents}>
                <h4>
                  Shipping Address <span style={{ color: "red" }}>*</span>
                </h4>

                <p>
                  We ship gift certificates and cookbooks to United States
                  addresses only.
                </p>

                <div className={styles.checkBoxContainer}>
                  <CheckBox checked={false} />
                  <span>Same As Billing Address</span>
                </div>

                <div className={styles.firstItemFromEachContents}>
                  <input type="text" name="" id="streetAddress" />
                  <label style={{ display: "block" }} htmlFor="streetAddress">
                    Street Address
                  </label>
                </div>
                <div className={styles.firstItemFromEachContents}>
                  <input type="text" name="" id="addressLine2" />
                  <label style={{ display: "block" }} htmlFor="addressLine2">
                    Address Line 2
                  </label>
                </div>
                <div className={styles.firstItemFromEach}>
                  <div className={styles.firstItemFromEachContents}>
                    <input type="text" name="" id="city" />
                    <label style={{ display: "block" }} htmlFor="city">
                      city
                    </label>
                  </div>
                  <div className={styles.firstItemFromEachContents}>
                    <div className={styles.optionContainer}>
                      <select
                        name="cookBook"
                        id="country"
                        className={styles.selectBox}
                        style={{ display: "block" }}
                        value={state}
                      >
                        <option value=""></option>

                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="District of Columbia">
                          District of Columbia
                        </option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Guam">Guam</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="U.S. Virgin Islands">
                          U.S. Virgin Islands
                        </option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                        <option value="Armed Forces Americas">
                          Armed Forces Americas
                        </option>
                        <option value="Armed Forces Europe">
                          Armed Forces Europe
                        </option>
                        <option value="Armed Forces Pacific">
                          Armed Forces Pacific
                        </option>
                      </select>
                      <div className={styles.selectIcon}>
                        <ArrowDropDownIcon className={styles.selectIconSelf} />
                      </div>
                    </div>
                    <label
                      style={{ display: "block", marginTop: 5 }}
                      htmlFor="state"
                    >
                      State
                    </label>
                  </div>
                </div>
                <div className={styles.firstItemFromEach}>
                  <div className={styles.firstItemFromEachContents}>
                    <input
                      type="text"
                      name=""
                      id="zip"
                      style={{ width: "47%" }}
                    />
                    <label style={{ display: "block" }} htmlFor="zip">
                      ZIP / Postal Code
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.billingInformation}>
              <h4 style={{ marginTop: "4em" }}>Shipping and Tax</h4>
              <Divider
                sx={{
                  backgroundColor: "white",
                  marginTop: "1em",
                  marginBottom: "1.3em",
                }}
              />
              <h4>Gift Certificate Delivery Via FedEx or UPS</h4>

              <div className={styles.checkBoxContainer}>
                <CheckBox checked={true} />
                <span>
                  {" "}
                  2nd day ($15) <span style={{ color: "gray" }}>-$10.00</span>
                </span>
              </div>

              <div className={styles.checkBoxContainer}>
                <CheckBox checked={false} />
                <span>
                  {" "}
                  Overnight (excluding Saturday and Sunday){" "}
                  <span style={{ color: "gray" }}>+$3.50</span>
                </span>
              </div>

              <h4>Require a Signature?</h4>

              <div className={styles.checkBoxContainer}>
                <CheckBox checked={false} />
                <span>
                  {" "}
                  Yes. Signature Required (Gift certificates cannot be replaced
                  if lost or stolen.)
                </span>
              </div>

              <div className={styles.tax}>
                <h4>Sales Tax</h4>

                <span>$0.00</span>
              </div>
              <div className={styles.total}>
                <h4>Order Total</h4>

                <span>${total.toFixed(2)}</span>
              </div>
            </div>


            <button className={styles.purchaseBtn}>PURCHASE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cookbook;
