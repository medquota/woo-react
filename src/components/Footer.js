import { Facebook, Instagram, Twitter, Youtube } from "./icons";

const Footer = () => (
  <div className="footer bg-gray-800 p-6 text-white">
    <div className="container mx-auto">
      <div className="footer-text flex-none md:flex items-center justify-between">
        <p>Copyright © 2022 - MedQuota LTD.</p>
        <ul className="social-links align-center">
          <li>
            <a
              href="https://www.facebook.com/TAXITVOFFICIEL/"
              className="fa fa-facebook"
              target="_blank"
            >
              <Facebook />
            </a>
          </li>
          <li className="ml-2 mt-1">
            <a href="https://twitter.com/pilorepro" target="_blank">
              <Twitter />
            </a>
          </li>
          <li className="ml-2 mt-1">
            <a
              href="https://www.youtube.com/channel/UCTD28y61LY4E7mdvxM--zlA"
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
  </div>
);

export default Footer;
