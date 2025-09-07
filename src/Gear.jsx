import person from "./assets/person.png"

export default function Gear() {
  return (
    <div className="flex justify-center items-center bg-white w-full">
        <section className="container flex py-[200px]">
            <div className="w-1/2 py-[147px] ">
                <div className="flex flex-col gap-8">
                    <h1 className=" w-[445px] font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase ">Bringing you the <span className="text-[#D87D4A] ">best</span> audio gear</h1>
                    <p className="w-[445px] text-black/50 font-normal text-[15px] leading-[25px] ">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
            </div>
            <div className="w-1/2 rounded-2xl bg-cover" style={{ backgroundImage: `url(${person})` }} >

            </div>

        </section>
        
    </div>
  )
}
