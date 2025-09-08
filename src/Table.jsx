import table from "./assets/table.png";
import earpods from "./assets/ear.png";
export default function Table() {
  return (
    <div className="bg-white w-full flex justify-center ">
      <section className="container flex flex-col gap-12 pt-12  items-center mx-auto max-w-[1110px] px-4 sm:px-6 lg:px-8">
        <div
          className=" w-full px-[95px] py-[100px] rounded-2xl"
          style={{ backgroundImage: `url(${table})` }}
        >
          <div className="flex flex-col gap-8">
            <h3 className="font-bold text-[28px] tracking-[2px] uppercase">
              ZX7 SPEAKER
            </h3>
            <button className="w-[160px] h-12 font-bold text-[13px] tracking-[1px] uppercase  border-2 border-black cursor-pointer">
              see product
            </button>
          </div>
        </div>


        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-[30px] justify-between">
          <div
            className=" h-[320px] max-h-[320px] rounded-2xl"
            style={{ backgroundImage: `url(${earpods})` }}
          ></div>
          <div className=" h-[320px] max-h-[320px] bg-[#F1F1F1] flex justify-center items-center rounded-2xl">
            <div className="flex flex-col gap-8 ">
              <h3 className="font-bold text-[28px] tracking-[2px] uppercase ">
                YX1 EARPHONES
              </h3>
              <button className="w-[160px] h-12 font-bold text-[13px] tracking-[1px] uppercase  border-2 border-black cursor-pointer">
                see product
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
