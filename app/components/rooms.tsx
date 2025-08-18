'use client'

import Image from "next/image";

export default function Section3()  {
    return(
        <section className="rooms flex flex-col relative pt-13 mb-5 px-30">
            <div className="content">
                <div className="w-60 h-1.5 relative bg-[#c1b086]"></div>
                <div className="flex flex-col gap-6">
                    <h3 className="pt-6 font-sans font-semibold">BEST BLEND OF AFFORDABILITY AND FACILITY</h3>
                    <div className="flex flex-row w-[84vw] justify-between items-center">
                        <h1 className="font-serif text-[40px]">Rooms</h1>
                        <button className="button w-45 h-15 bg-[#c1b086] border rounded-4xl text-xl text-white font-sans transition duration-500 hover:bg-[#252e59] hover:cursor-pointer">VIEW ALL</button>
                    </div>
                </div>
            </div>
            <div className="room-cards flex flex-row gap-20 justify-center pt-20 h-fit w-full">
                <div className="room-card flex flex-col gap-10 pb-10 w-fit shadow-2xl shadow-black/20">
                    <div className="image-wrapper relative h-100 w-100">
                        <Image
                            alt="this is the card image"
                            src={'/400x400 placeholder.svg'}
                            fill
                        />
                    </div>
                    <div className="card-content ml-10 font-sans">
                        <h1 className="text-2xl">
                            Room 1
                        </h1>
                        <div className="cost flex flex-row items-baseline">
                            <h3 className="text-2xl">₹ 0000</h3>
                            <h3 className="text-sm">&nbsp;/ per month</h3>
                        </div>
                    </div>
                </div>
                <div className="room-card flex flex-col gap-10 pb-10 w-100 shadow-2xl shadow-black/20">
                    <div className="image-wrapper relative h-100 w-100">
                        <Image
                            alt="this is the card image"
                            src={'/400x400 placeholder.svg'}
                            fill
                        />
                    </div>
                    <div className="card-content ml-10 font-sans">
                        <h1 className="text-2xl">
                            Room 2
                        </h1>
                        <div className="cost flex flex-row items-baseline">
                            <h3 className="text-2xl">₹ 0000</h3>
                            <h3 className="text-sm">&nbsp;/ per month</h3>
                        </div>
                    </div>
                </div>
                <div className="room-card flex flex-col gap-10 pb-10 w-100 shadow-2xl shadow-black/20">
                    <div className="image-wrapper relative h-100 w-100">
                        <Image
                            alt="this is the card image"
                            src={'/400x400 placeholder.svg'}
                            fill
                        />
                    </div>
                    <div className="card-content ml-10 font-sans">
                        <h1 className="text-2xl">
                            Room 3
                        </h1>
                        <div className="cost flex flex-row items-baseline">
                            <h3 className="text-2xl">₹ 0000</h3>
                            <h3 className="text-sm">&nbsp;/ per month</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}