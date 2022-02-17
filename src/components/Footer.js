import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "./icons";

const Footer = () => (
  <footer className="footer bg-blue p-6 text-white">
    <div className="container mx-auto">
      <div className="footer-text flex-none md:flex items-center justify-between">
        <p>Copyright © 2022 - MedQuota LTD.</p>
        <ul className="privacy-links align-center text-white py-4 lg:py-0">
          <Link href="/shipping">
            <a className="block mt-4 lg:inline-block lg:mt-0  mr-10">
              Shipping Policy
            </a>
          </Link>
          <Link href="/privacy">
            <a className="block mt-4 lg:inline-block lg:mt-0  mr-10">
              Privacy Policy
            </a>
          </Link>
          <Link href="/return">
            <a className="block mt-4 lg:inline-block lg:mt-0  mr-10">
              Return & Refund Policy
            </a>
          </Link>
          <Link href="/terms">
            <a className="block mt-4 lg:inline-block lg:mt-0  mr-10">
              Terms & Conditions
            </a>
          </Link>
        </ul>
        <ul className="social-links align-center">
          <li>
            <a
              href="https://web.facebook.com/Medquota-101737529132527"
              className="fa fa-facebook"
              target="_blank"
            >
              <Facebook />
            </a>
          </li>
          <li className="ml-2 mt-1">
            <a href="https://twitter.com/MEDMAKER2" target="_blank">
              <Twitter />
            </a>
          </li>
          <li className="ml-2 mt-1">
            <a
              href="https://www.youtube.com/c/VEVTVall/"
              className="fa fa-youtube"
              target="_blank"
            >
              <Youtube />
            </a>
          </li>
          <li className="ml-2">
            <a
              href="https://www.instagram.com/medquota/"
              className="fa fa-instagram"
              target="_blank"
            >
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
