import logo from "./assets/audiophile.png"
import { IoLogoFacebook , IoLogoTwitter , IoLogoInstagram } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

let linkStyle = 'font-bold text-[13px] leading-[25px] tracking-[2px] uppercase';

export default function Footer() {
  return (
    <div className="bg-[#0E0E0E] w-full flex justify-center">
      <footer className="container flex flex-col pt-[75px] pb-12 gap-9 mx-auto max-w-[1110px] px-4 md:px-6 lg:px-8">
        <header className="flex justify-between">
          <img src={logo} />
          <nav className="hidden md:flex gap-8 text-white">
            <a className={linkStyle} href="#">
              HOME
            </a>
            <a className={linkStyle} href="#">
              HEADPHONES
            </a>
            <a className={linkStyle} href="#">
              SPEAKERS
            </a>
            <a className={linkStyle} href="#">
              EARPHONES
            </a>
          </nav>
          <GiHamburgerMenu className="text-white w-[20px] h-[20px] flex lg:hidden"/>
        </header>

        <div className="flex flex-col md:flex-row gap-10 ">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col gap-14">
                    <p className="max-w-[540px] w-full text-white/50 font-normal text-[15px] leading-[25px] text-center md:text-left">
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                    </p>
                    <p className="max-w-[540px] w-full text-white/50 font-bold text-[15px] leading-[25px] text-center md:text-left">Copyright 2021. All Rights Reserved</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center md:items-end ">
                <div className="flex gap-4">
                    <IoLogoFacebook className="w-[30px] h-[30px] text-white cursor-pointer" />
                    <IoLogoTwitter className="w-[30px] h-[30px] text-white cursor-pointer" />
                    <IoLogoInstagram className="w-[30px] h-[30px] text-white cursor-pointer" />


                </div>

            </div>
        </div>
      </footer>
    </div>
  );
}
