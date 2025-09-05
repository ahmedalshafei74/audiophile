import bitmap from "./assets/Bitmap.png"

export default function HeroSection(){
    return(
        <div className="bg-[#0E0E0E] w-full h-[770px] px-[165px] flex justify-center ">
            <section className="container flex ">
                <div className="flex flex-col mt-32 gap-6">
                    <p className="text-amber-50/50 font-normal text-sm tracking-[10px] ">NEW PRODUCT</p>
                    <h1 className="w-1/2 text-[#FFFFFF] font-bold text-[56px] uppercase">XX99 Mark II Headphones</h1>
                    <p className="w-[349px] text-[#FFFFFF]/75 font-normal text-[15px] leading-[25px] tracking-normal">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <button className="bg-[#D87D4A] px-[30px] py-[15px] text-[#FFFFFF] w-[160px] h-12 cursor-pointer">See Product</button>
                </div>
                <img  src={bitmap}/>
            </section>


        </div>
    )
}