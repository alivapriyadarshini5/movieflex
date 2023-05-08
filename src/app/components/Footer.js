import React from "react";
import footerStyles from "@/app/styles/footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
};

const Footer = () => {
  return (
    <>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles.top}>
            <div className={footerStyles[`media-icons`]}>
              <Link href="https://www.facebook.com/aliva%20priyadarshini">
                <i>
                  {" "}
                  <FaFacebookF />{" "}
                </i>
              </Link>
              <Link href="https://twitter.com/alialiva5">
                <i>
                  {" "}
                  <FaTwitter />{" "}
                </i>{" "}
              </Link>
              <Link
                href="https://www.instagram.com/crazyyy_aliaaa5/"
                target="_blank"
              >
                <i>
                  {" "}
                  <FaInstagram />{" "}
                </i>
              </Link>
              <Link href="https://www.linkedin.com/in/aliva%20priyadarshini">
                <i>
                  {" "}
                  <FaLinkedinIn />{" "}
                </i>
              </Link>
              <Link href="https://github.com/alivapriyadarshini5">
                <i>
                  {" "}
                  <FaGithub />{" "}
                </i>
              </Link>
            </div>
          </div>
        </div>
        <div className={footerStyles["bottom-details"]}>
          <div className={footerStyles.bottom_text}>
            <span>
              <span>Made with</span>
              <span className={footerStyles.love}> ❤️</span>
              <span> by</span>
              <span> Aliva Priyadarshini </span>
              <span> </span>
              <span> | </span>
              <span> </span>
              <span>copyright © {new Date().getFullYear()} </span>
              <Link href="https://www.linkedin.com/in/aliva%20priyadarshini">
                {" "}
                Aliva Priyadarshini.
              </Link>
              <span>All rights reserved</span>{" "}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
