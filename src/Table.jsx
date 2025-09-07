import table from "./assets/table.png";
import earpods from "./assets/ear.png";
export default function Table() {
  return (
    <div className="bg-white w-full flex justify-center ">
      <section className="container flex flex-col gap-12 pt-12  items-center">
        <div
          className=" w-[1110px] h-[320px] px-[95px] py-[100px] rounded-2xl"
          style={{ backgroundImage: `url(${table})` }}
        >
          <div className="flex flex-col gap-8">
            <h3 className="font-bold text-[28px] tracking-[2px] uppercase">
              ZX7 SPEAKER
            </h3>
            <button className="w-[160px] h-12 font-bold text-[13px] tracking-[1px] uppercase  border-2 border-black">
              see product
            </button>
          </div>
        </div>
        <div className=" w-[1110px] h-[320px] flex gap-[30px] justify-between">
          <div
            className="w-1/2 rounded-2xl"
            style={{ backgroundImage: `url(${earpods})` }}
          ></div>
          <div className="w-1/2 px-[95px] py-[100px] bg-[#F1F1F1] rounded-2xl">
            <div className="flex flex-col gap-8 ">
              <h3 className="font-bold text-[28px] tracking-[2px] uppercase ">
                YX1 EARPHONES
              </h3>
              <button className="w-[160px] h-12 font-bold text-[13px] tracking-[1px] uppercase  border-2 border-black">
                see product
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
