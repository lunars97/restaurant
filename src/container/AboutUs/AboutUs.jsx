import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
    <div
        className="app__aboutUs app__bg flex__center section__padding "
        id="about"
    >
        <div className="app__aboutUs-overlay flex__center">
            <img src={images.G} alt="letter_G" />
        </div>
        <div className="app__aboutUs-content flex__center">
            <div className="app__aboutUs-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <img src={images.spoon} alt="spoon" />
                <p className="p__opensans">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                </p>
                <button type="button" className="custom__button">
                    Know more
                </button>
            </div>

            <div className="app__aboutUs-content_knife flex__center">
                <img src={images.knife} alt="knife" />
            </div>
            <div className="app__aboutUs-content_history">
                <h1 className="headtext__cormorant">Our History</h1>
                <img src={images.spoon} alt="spoon" />
                <p className="p__opensans">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                </p>
                <button type="button" className="custom__button">
                    Know more
                </button>
            </div>
        </div>
    </div>
);

export default AboutUs;
