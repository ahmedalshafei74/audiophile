import { FiShoppingCart } from "react-icons/fi";
import logo from "./assets/audiophile.png";

let linkStyle = 'font-bold text-[13px] leading-[25px] tracking-[2px] uppercase';

export default function Header(){
    return (
        <div className="bg-[#0E0E0E] w-full pt-8  pl-40 pr-40 flex justify-center ">
            <header className="container bg-[#0E0E0E] flex justify-between pb-[30px] border-b-2 border-amber-50/20">
                <img src={logo}/>
                <nav className="flex gap-8 text-white">
                    <a className={linkStyle} href="#">HOME</a>
                    <a className={linkStyle} href="#">HEADPHONES</a>
                    <a className={linkStyle} href="#">SPEAKERS</a>
                    <a className={linkStyle} href="#">EARPHONES</a>
                </nav>
                <FiShoppingCart className="text-white w-[20px] h-[20px]"/>
            </header>
        </div>
    )
}