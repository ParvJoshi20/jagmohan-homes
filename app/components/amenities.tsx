'use client'

import Image from "next/image";

export default function Section2() {
    return(
        <section className="amenities flex relative items-center pt-2 mb-5 w-[99vw] h-fit">
                <div className="wrapper flex relative mt-40 w-full h-120 z-10">
                    <Image
                        alt="Section 2 background image."
                        src={'/section2-1.jpg'}
                        fill
                    />
                </div>
                <div className="content relative grid-cols-2 gap-8 overflow-hidden mt-40 -ml-[42%] w-[33vw] h-160 z-20 bg-[#3f9cc1]">
                    <div className="wrapper">
                        <Image
                            alt="Logo design"
                            src={'/logo.png'}
                            width={350}
                            height={200}
                            className="opacity-25 -ml-20 mt-6 z-10"
                        />
                    </div>
                    <div className="text-content z-20 -mt-75 ml-30">
                        <h1 className="font-serif text-[40px] text-white">
                            Our Amenities
                        </h1>
                        <p className="font-sans font-medium size-110 mt-8 text-justify text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus et accusantium doloribus odit, eveniet praesentium odio ipsa molestiae veritatis adipisci corrupti quam aperiam blanditiis, explicabo esse provident. Harum est voluptate veritatis beatae perspiciatis minus, voluptatem maxime deleniti! Molestias, doloremque vitae.
                        </p>
                    </div>
                </div>
        </section>
    );
}