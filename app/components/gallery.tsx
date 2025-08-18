'use client'

import ImageCarousel from "../ui/image-carousel";

export default function Section5(){
    return(
        <section className="section-5 flex flex-col relative pt-13 mb-5 px-30">
            <div className="headings flex flex-col relative gap-5 mb-25">
                <div className="w-60 h-1.5 relative bg-[#c1b086]"></div>
                <h3 className="font-sans font-semibold">WELCOME TO OUR PHOTO GALLERY</h3>
                <div className="wrapper w-[86vw] flex flex-row relative justify-between">
                    <h1 className="font-serif text-[40px]">Photo Gallery of Our PG</h1>
                    <button className="button w-45 h-15 bg-[#c1b086] border rounded-4xl text-xl text-white font-sans transition duration-500 hover:bg-[#252e59] hover:cursor-pointer">VIEW ALL</button>
                </div>
            </div>
            <ImageCarousel/>
        </section>
    );
}