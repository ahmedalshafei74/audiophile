import logo from "./assets/audiophile.png"
import { IoLogoFacebook , IoLogoTwitter , IoLogoInstagram } from "react-icons/io";

let linkStyle = 'font-bold text-[13px] leading-[25px] tracking-[2px] uppercase';

export default function Footer() {
  return (
    <div className="bg-[#0E0E0E] w-full flex justify-center">
      <footer className="container flex flex-col pt-[75px] pb-12 gap-9">
        <header className="flex justify-between">
          <img src={logo} />
          <nav className="flex gap-8 text-white">
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
        </header>

        <div className="flex ">
            <div className="w-1/2">
                <div className="flex flex-col gap-14">
                    <p className="w-[540px] text-white/50 font-normal text-[15px] leading-[25px]">
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                    </p>
                    <p className="w-[540px] text-white/50 font-bold text-[15px] leading-[25px]">Copyright 2021. All Rights Reserved</p>
                </div>
            </div>
            <div className="w-1/2 pl-[466px] pt-[105px] ">
                <div className="flex gap-4">
                    <IoLogoFacebook className="w-[24px] h-[24px] text-white cursor-pointer" />
                    <IoLogoTwitter className="w-[24px] h-[24px] text-white cursor-pointer" />
                    <IoLogoInstagram className="w-[24px] h-[24px] text-white cursor-pointer" />


                </div>

            </div>
        </div>
      </footer>
    </div>
  );
}
