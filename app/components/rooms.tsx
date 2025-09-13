'use client'

import Image from "next/image";

export default function Section3()  {
    return(
        <section className="rooms flex flex-col relative pt-8 lg:pt-13 mb-5 px-4 md:px-8 lg:px-30">
            <div className="content">
                <div className="w-60 h-1.5 relative bg-[#c1b086]"></div>
                <div className="flex flex-col gap-6">
                    <h3 className="pt-6 font-sans font-semibold text-sm md:text-base">BEST BLEND OF AFFORDABILITY AND FACILITY</h3>
                    <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-4">
                        <h1 className="font-serif text-2xl md:text-3xl lg:text-[40px]">Rooms</h1>
                        <a href="/rooms" className="button w-full md:w-auto px-6 py-3 bg-[#c1b086] border rounded-full text-lg lg:text-xl text-white font-sans transition duration-500 hover:bg-[#252e59] hover:cursor-pointer text-center">VIEW ALL</a>
                    </div>
                </div>
            </div>
            <div className="room-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20 justify-center pt-12 lg:pt-20 h-fit w-full">
                <div className="room-card flex flex-col gap-6 lg:gap-10 pb-6 lg:pb-10 w-full shadow-2xl shadow-black/20 bg-white rounded-lg overflow-hidden">
                    <div className="image-wrapper relative h-48 lg:h-100 w-full">
                        <Image
                            alt="this is the card image"
                            src={'/400x400 placeholder.svg'}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="card-content px-4 lg:ml-10 font-sans">
                        <h1 className="text-xl lg:text-2xl">
                            Room 1
                        </h1>
                        <div className="cost flex flex-row items-baseline">
                            <h3 className="text-xl lg:text-2xl">₹ 0000</h3>
                            <h3 className="text-sm">&nbsp;/ per month</h3>
                        </div>
                    </div>
                </div>
                <div className="room-card flex flex-col gap-6 lg:gap-10 pb-6 lg:pb-10 w-full shadow-2xl shadow-black/20 bg-white rounded-lg overflow-hidden">
                    <div className="image-wrapper relative h-48 lg:h-100 w-full">
                        <Image
                            alt="this is the card image"
                            src={'/400x400 placeholder.svg'}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="card-content px-4 lg:ml-10 font-sans">
                        <h1 className="text-xl lg:text-2xl">
                            Room 2
                        </h1>
                        <div className="cost flex flex-row items-baseline">
                            <h3 className="text-xl lg:text-2xl">₹ 0000</h3>
                            <h3 className="text-sm">&nbsp;/ per month</h3>
                        </div>
                    </div>
                </div>
                <div className="room-card flex flex-col gap-6 lg:gap-10 pb-6 lg:pb-10 w-full shadow-2xl shadow-black/20 bg-white rounded-lg overflow-hidden">
                    <div className="image-wrapper relative h-48 lg:h-100 w-full">
                        <Image
                            alt="this is the card image"
                            src={'/400x400 placeholder.svg'}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="card-content px-4 lg:ml-10 font-sans">
                        <h1 className="text-xl lg:text-2xl">
                            Room 3
                        </h1>
                        <div className="cost flex flex-row items-baseline">
                            <h3 className="text-xl lg:text-2xl">₹ 0000</h3>
                            <h3 className="text-sm">&nbsp;/ per month</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}