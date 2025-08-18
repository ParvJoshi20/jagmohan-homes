'use client'
import Image from "next/image";

export default function Section1() {
    return(
    <section className="section1 flex flex-col lg:flex-row pt-8 lg:pt-15 mb-5 px-4 md:px-8 lg:px-30">
        <div className="image-tile flex-col mb-8 lg:mb-0">
            <Image
                    src={'/logo-dark.png'}
                    alt="logo design"
                    height={500}    
                    width={350} 
                    className="absolute mt-10 left-4 lg:left-100 -z-2 opacity-10"
                />
            
            <Image
                    src={'/section1-1.jpg'}
                    alt="View 1"
                    height={300}
                    width={360}
                    className="shadow-2xl shadow-black/30 w-full max-w-sm lg:max-w-none" 
                />
                
            <Image
                    src={'/section1-2.jpg'}
                    alt="View 1"
                    height={300}
                    width={450}
                    className="-mt-8 lg:-mt-30 ml-8 lg:ml-40 shadow-2xl shadow-black/30 w-full max-w-md lg:max-w-none" 
                />
        </div>

        <div className="content lg:ml-150">
            <div className="w-60 h-1.5 lg:-ml-60 bg-[#c1b086]"></div>
            <div className="flex flex-col gap-6">
                <h3 className="lg:-ml-60 pt-6 font-sans font-semibold text-sm md:text-base">BEST BLEND OF AFFORDABILITY AND FACILITY</h3>
                <h1 className="lg:-ml-60 pt-6 font-serif text-2xl md:text-3xl lg:text-[40px]">Welcome to Jagmohan Homes</h1>
                <p className="lg:-ml-20 w-full lg:w-[480px] pt-4 font-sans text-sm md:text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nesciunt iste voluptas modi assumenda ea deleniti earum non praesentium quibusdam ipsa blanditiis, ducimus minima vitae inventore sequi nulla facere?<br/><br/> Velit accusamus sint architecto tenetur dolorum animi sapiente modi autem repellendus vel accusantium, labore quod! Distinctio magnam dolores, alias culpa, incidunt iste quaerat quas magni quidem, laborum velit vitae totam quod repudiandae tempore dolor cumque in ea modi et! Officia modi expedita accusamus doloremque rem assumenda iusto? Sit consectetur laudantium ullam iste minus fugit accusamus asperiores dolorem voluptatum rerum, sapiente id reprehenderit pariatur itaque saepe veniam dolore iure temporibus libero officiis!</p>
                <button className="read-more w-full max-w-xs lg:w-45 h-12 lg:h-15 lg:-ml-20 mt-5 bg-[#c1b086] border rounded-full text-lg lg:text-xl text-white font-sans transition duration-500 hover:bg-[#252e59] hover:cursor-pointer">READ MORE</button>
            </div>
        </div>

     </section>
    );
}