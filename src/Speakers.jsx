import headphone from "./assets/headphone.png";
import speakers from "./assets/speakers.png";
import earphones from "./assets/earphones.png";
import speaker from "./assets/image-removebg-preview(38).png"

export default function Speakers() {
  return (
    <div className="bg-white w-full flex justify-center pt-[127px]">
      <section className="container flex flex-col gap-40 bg-white items-center">
        <div className="flex justify-between gap-8 ">
          <div className="w-[350px] h-[204px] rounded-lg bg-gray-100 flex flex-col items-center ">
            <img
              src={headphone}
              className="max-w-[125px] shadow-2x100  mt-[-70px] z-10 drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]"
            />
            <h3 class="mt-8 font-bold uppercase">Headphones</h3>
            <a
              href="#"
              class="mt-2 text-sm text-gray-500 tracking-wide flex items-center gap-2"
            >
              Shop <span class="text-[#D87D4A]">→</span>
            </a>
          </div>
          <div className="w-[350px] h-[204px] rounded-lg bg-gray-100 flex flex-col items-center ">
            <img
              src={speakers}
              className="max-w-[125px] shadow-2x100  mt-[-70px] z-10 drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]"
            />
            <h3 class="mt-8 font-bold uppercase">Speakers</h3>
            <a
              href="#"
              class="mt-2 text-sm text-gray-500 tracking-wide flex items-center gap-2"
            >
              Shop <span class="text-[#D87D4A]">→</span>
            </a>
          </div>
          <div className="w-[350px] h-[204px] rounded-lg bg-gray-100 flex flex-col items-center ">
            <img
              src={earphones}
              className="max-w-[125px] shadow-2x100  mt-[-70px] z-10 drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]"
            />
            <h3 class="mt-8 font-bold uppercase">Earphones</h3>
            <a
              href="#"
              class="mt-2 text-sm text-gray-500 tracking-wide flex items-center gap-2"
            >
              Shop <span class="text-[#D87D4A]">→</span>
            </a>
          </div>
        </div>
        <div className="w-[1110px] h-[560px] bg-[#D87D4A] rounded-2xl flex relative">
            <img src={speaker} className="w-[410px] h-[450px] absolute bottom-0 left-[117px]"/>
            <div className="flex flex-col gap-8 w-[349px] absolute right-[50px] top-[140px] ">
                <h1 className="text-white font-bold text-[56px] leading-[58px] tracking-[2px] uppercase">ZX9 SPEAKER</h1>
                <p className="text-white/50 font-normal text-[15px]">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button className="bg-black text-white w-[160px] h-[48px] cursor-pointer mt-[10px]">SEE PRODUCT</button>
                

            </div>


        </div>
      </section>
    </div>
  );
}
