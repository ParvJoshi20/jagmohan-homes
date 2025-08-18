'use client'
import Image from "next/image";
import ReviewCarousel from "../ui/review-slideshow";

export default function Section4() {
    return (
        <section className="reviews flex flex-col lg:flex-row relative items-center pt-2 mb-5 w-full h-fit overflow-hidden">
            <div className="wrapper flex relative mt-8 lg:mt-40 w-full h-64 lg:h-120 z-10">
                <Image
                    alt="Section 4 background image."
                    src={'/section2-1.jpg'}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="content relative grid-cols-2 gap-8 overflow-hidden mt-8 lg:mt-40 lg:-ml-445 w-full lg:w-[33vw] h-auto lg:h-160 z-20 bg-[#3f9cc1] p-6 lg:p-0">
                <div className="wrapper">
                    <Image
                        alt="Logo design"
                        src={'/logo.png'}
                        width={350}
                        height={200}
                        className="opacity-25 lg:-ml-20 mt-6 z-10 w-full max-w-xs lg:max-w-none"
                    />
                </div>
                <div className="text-content flex flex-col gap-5 z-20 lg:-mt-75 lg:ml-30">
                    <div className="w-20 h-1.5 relative bg-white"></div>
                    <h2 className="font-sans text-white font-semibold text-sm md:text-base">AT THE HEART OF COMMUNITIES</h2>
                    <h1 className="font-serif text-2xl md:text-3xl lg:text-[40px] text-white">
                        People Say
                    </h1>
                </div>
                <div className="review-cards flex mt-5 w-full justify-center px-4 lg:px-0">
                    <ReviewCarousel/>
                </div>
            </div>
        </section>
    );
}