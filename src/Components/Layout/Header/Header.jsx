import { FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import "./header.css";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="my-container">
          <div className="dp-beetween">
            <div className="left">
              <p>Əyani / Online tədris</p>
            </div>
            <div className="right dp-align">
              <div className="dp-align rp-none">
                <FaPhoneAlt className="icon" />
                <p>Mobil:+994507333816</p>
              </div>
              <div className="dp-align rp-none">
                <MdEmail className="icon mail-icon" />
                <p>Email:example@gmail.com</p>
              </div>
              <div className="dp-align">
                <a href="#">
                  <IoLogoFacebook className="icon social-icon" />
                </a>
                <a href="#">
                  <FaInstagramSquare className="icon social-icon insta-icon" />
                </a>
                <a href="#">
                  <FaSquareYoutube className=" icon social-icon youtube-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="my-container">
          <div className="dp-beetween">
            <div className="header-logo">
              {/* <img  src="../.w./../../public/WhatsApp Image 2024-11-07 at 16.29.38_031500ec.jpg" alt="" /> */}
            </div>
            <div>
              {/* <ul className="dp-align">
                <li><Link className="link">Ana Səhifə</Link></li>
                <li><Link className="link">Haqqımızda</Link></li>
                <li><Link className="link">Təlimçilər</Link></li>
                <li><Link className="link">Əlaqə</Link></li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
