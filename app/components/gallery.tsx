'use client'

import ImageCarousel from "../ui/image-carousel";

export default function Section5(){
    return(
        <section className="section-5 flex flex-col relative pt-8 lg:pt-13 mb-5 px-4 md:px-8 lg:px-30">
            <div className="headings flex flex-col relative gap-5 mb-25">
                <div className="w-60 h-1.5 relative bg-[#c1b086]"></div>
                <h3 className="font-sans font-semibold text-sm md:text-base">WELCOME TO OUR PHOTO GALLERY</h3>
                <div className="wrapper w-full flex flex-col md:flex-row relative justify-between items-start md:items-center gap-4">
                    <h1 className="font-serif text-2xl md:text-3xl lg:text-[40px]">Photo Gallery of Our PG</h1>
                    <a href="/gallery" className="button w-full md:w-auto px-6 py-3 bg-[#c1b086] border rounded-full text-lg lg:text-xl text-white font-sans transition duration-500 hover:bg-[#252e59] hover:cursor-pointer text-center">VIEW ALL</a>
                </div>
            </div>
            <ImageCarousel/>
        </section>
    );
}