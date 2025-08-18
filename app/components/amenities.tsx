'use client'

import Image from "next/image";

export default function Section2() {
    return(
        <section className="amenities flex flex-col lg:flex-row relative items-center pt-2 mb-5 w-full h-fit overflow-hidden">
                <div className="wrapper flex relative mt-8 lg:mt-40 w-full h-64 lg:h-120 z-10">
                    <Image
                        alt="Section 2 background image."
                        src={'/section2-1.jpg'}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="content relative grid-cols-2 gap-8 overflow-hidden mt-8 lg:mt-40 lg:-ml-[42%] w-full lg:w-[33vw] h-auto lg:h-160 z-20 bg-[#3f9cc1] p-6 lg:p-0">
                    <div className="wrapper">
                        <Image
                            alt="Logo design"
                            src={'/logo.png'}
                            width={350}
                            height={200}
                            className="opacity-25 lg:-ml-20 mt-6 z-10 w-full max-w-xs lg:max-w-none"
                        />
                    </div>
                    <div className="text-content z-20 lg:-mt-75 lg:ml-30">
                        <h1 className="font-serif text-2xl md:text-3xl lg:text-[40px] text-white">
                            Our Amenities
                        </h1>
                        <p className="font-sans font-medium text-sm md:text-base mt-4 lg:mt-8 text-justify text-white leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus et accusantium doloribus odit, eveniet praesentium odio ipsa molestiae veritatis adipisci corrupti quam aperiam blanditiis, explicabo esse provident. Harum est voluptate veritatis beatae perspiciatis minus, voluptatem maxime deleniti! Molestias, doloremque vitae.
                        </p>
                    </div>
                </div>
        </section>
    );
}