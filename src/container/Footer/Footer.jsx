import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";
const Footer = () => (
    <div className="app__footer section__padding">
        <FooterOverlay />
        <Newsletter />
        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Contact Us</h1>
                <p className="p__opensans">Bishkek, Kyrgyzstan</p>
                <p className="p__opensans">+996708100048</p>
                <p className="p__opensans">+996708100048</p>
            </div>
            <div className="app__footer-links_logo">
                <img src={images.gericht} alt="footer-logo" />
                <p className="p__opensans">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non, pariatur.
                </p>
                <img
                    src={images.spoon}
                    alt="spoon"
                    className="spoon__img"
                    style={{ marginTop: "50px" }}
                />
                <div className="app__footer-links_icons">
                    <FiFacebook />
                    <FiInstagram />
                    <FiTwitter />
                </div>
            </div>
            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">Working Hours</h1>
                <p className="p__opensans">Monday - Friday</p>
                <p className="p__opensans">09:00 am - 12:00 am</p>
                <p className="p__opensans">Saturday - Sunday</p>
                <p className="p__opensans">07:00 am - 11:00 am</p>
            </div>
        </div>
        <div className="footer__copyright">
            <p className="p__opensans">2021 Gericht. All rights reserved</p>
        </div>
    </div>
);

export default Footer;
