'use client'
import Image from "next/image";
import ReviewCarousel from "../ui/review-slideshow";

export default function Section4() {
    return (
        <section className="reviews flex relative items-center pt-2 mb-5 w-[99vw] h-fit">
            <div className="wrapper flex relative mt-40 w-full h-120 z-10">
                <Image
                    alt="Section 4 background image."
                    src={'/section2-1.jpg'}
                    fill
                />
            </div>
            <div className="content relative grid-cols-2 gap-8 overflow-hidden mt-40 -ml-445 w-[33vw] h-160 z-20 bg-[#3f9cc1]">
                <div className="wrapper">
                    <Image
                        alt="Logo design"
                        src={'/logo.png'}
                        width={350}
                        height={200}
                        className="opacity-25 -ml-20 mt-6 z-10"
                    />
                </div>
                <div className="text-content flex flex-col gap-5 z-20 -mt-75 ml-30">
                    <div className="w-20 h-1.5 relative bg-white"></div>
                    <h2 className="font-sans text-white font-semibold">AT THE HEART OF COMMUNITIES</h2>
                    <h1 className="font-serif text-[40px] text-white">
                        People Say
                    </h1>
                </div>
                <div className="review-cards flex mt-5 w-full justify-center">
                    <ReviewCarousel/>
                </div>
            </div>
        </section>
    );
}