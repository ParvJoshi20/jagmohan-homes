'use client'
import Image from "next/image";

export default function Section1() {
    return(
    <section className="section1 flex flex-row pt-15 mb-5 px-30">
        <div className="image-tile flex-col">
            <Image
                    src={'/logo-dark.png'}
                    alt="logo design"
                    height={500}    
                    width={350} 
                    className="absolute mt-10 left-100 -z-2 opacity-10"
                />
            
            <Image
                    src={'/section1-1.jpg'}
                    alt="View 1"
                    height={300}
                    width={360}
                    className="shadow-2xl shadow-black/30" 
                />
                
            <Image
                    src={'/section1-2.jpg'}
                    alt="View 1"
                    height={300}
                    width={450}
                    className="-mt-30 ml-40 shadow-2xl shadow-black/30" 
                />
        </div>

        <div className="content ml-150">
            <div className="w-60 h-1.5 -ml-60 bg-[#c1b086]"></div>
            <div className="flex flex-col gap-6">
                <h3 className="-ml-60 pt-6 font-sans font-semibold">BEST BLEND OF AFFORDABILITY AND FACILITY</h3>
                <h1 className="-ml-60 pt-6 font-serif text-[40px]">Welcome to Jagmohan Homes</h1>
                <p className="-ml-20 w-[480px] pt-4 font-sans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nesciunt iste voluptas modi assumenda ea deleniti earum non praesentium quibusdam ipsa blanditiis, ducimus minima vitae inventore sequi nulla facere?<br/><br/> Velit accusamus sint architecto tenetur dolorum animi sapiente modi autem repellendus vel accusantium, labore quod! Distinctio magnam dolores, alias culpa, incidunt iste quaerat quas magni quidem, laborum velit vitae totam quod repudiandae tempore dolor cumque in ea modi et! Officia modi expedita accusamus doloremque rem assumenda iusto? Sit consectetur laudantium ullam iste minus fugit accusamus asperiores dolorem voluptatum rerum, sapiente id reprehenderit pariatur itaque saepe veniam dolore iure temporibus libero officiis!</p>
                <button className="read-more w-45 h-15 -ml-20 mt-5 bg-[#c1b086] border rounded-4xl text-xl text-white font-sans transition duration-500 hover:bg-[#252e59] hover:cursor-pointer">READ MORE</button>
            </div>
        </div>

     </section>
    );
}