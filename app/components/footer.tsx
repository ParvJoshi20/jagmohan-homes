'use client'
import Image from "next/image";
import { Mail, Phone} from "lucide-react";

export default function Footer() {
    return(
        <section className="footer w-full pt-16 lg:pt-30">
            <div className="content px-4 md:px-8 lg:px-20 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0">
                <div className="company flex flex-col gap-6 w-full lg:w-[20%]">
                    <div className="logo-title flex flex-row items-center gap-4">
                        <Image
                            alt="logo"
                            src={'/logo-dark.png'}
                            width={60}
                            height={60}
                            className="lg:w-20 lg:h-20"
                        />
                        <div className="title flex flex-col items-start">
                            <h1 className="font-mono text-black text-xl lg:text-2xl">Jagmohan</h1>
                            <h1 className="font-mono text-black text-xl lg:text-2xl">Homes</h1>
                        </div>
                    </div>
                    <p className="font-sans font-medium text-black text-sm lg:text-[16px] leading-relaxed">All PG and rental properties and their details listed on this website are independently owned and operated. <br></br> Accepted payment methods:</p>
                    <Image
                        alt="payment methods"
                        src={'/pm.jpg'}
                        width={120}
                        height={40}
                        className="lg:w-[150px] lg:h-[50px]"
                        className="-mt-2"
                    />
                </div>
                <div className="content-right flex flex-col md:flex-row gap-8 lg:gap-30 w-full lg:w-auto">
                    <div className="customer-info flex flex-col gap-4 lg:gap-8 w-full md:w-fit">
                        <h1 className="heading font-serif text-2xl lg:text-3xl text-black">For Customers</h1>
                        <h3 className="l1 font-sans font-medium text-black text-sm lg:text-[16px] pt-2 lg:pt-5">About Jagmohan Homes</h3>
                        <h3 className="l2 font-sans font-medium text-black text-sm lg:text-[16px]">Inquiry for Rooms</h3>
                        <h3 className="l2 font-sans font-medium text-black text-sm lg:text-[16px]">Reviews and Testimonials</h3>
                        <h3 className="l2 font-sans font-medium text-black text-sm lg:text-[16px]">Location and Directions</h3>
                        <h3 className="l2 font-sans font-medium text-black text-sm lg:text-[16px]">Terms and Conditions</h3>
                    </div>
                    <div className="contact-us flex flex-col gap-4 lg:gap-6 w-full md:w-fit">
                        <h1 className="heading font-serif text-2xl lg:text-3xl text-black">Contact Us</h1>
                        <h3 className="l1 font-sans font-medium text-black text-sm lg:text-[16px] pt-2 lg:pt-5">Raipur Khadar, Sector 126, <br></br> Noida, Uttar Pradesh 201313</h3>
                        
                        <div className="l2 flex flex-row gap-2 items-center">
                            <Mail className="w-5 h-5" />
                            <h3 className="l1 font-sans font-medium text-black text-sm lg:text-[16px]">xyz@gmail.com</h3>
                        </div>
                        <div className="l2 flex flex-row gap-2 items-center">
                            <Phone className="w-5 h-5" />
                            <h3 className="l1 font-sans font-medium text-black text-sm lg:text-[16px]">+91 8285423005</h3>
                        </div>
                        <div className="l2 flex flex-row gap-2 items-center">
                            <Phone className="w-5 h-5" />
                            <h3 className="l1 font-sans font-medium text-black text-sm lg:text-[16px]">+91 7011346403</h3>
                        </div>
                        <div className="l2 flex flex-row gap-2 items-center">
                            <Phone className="w-5 h-5" />
                            <h3 className="l1 font-sans font-medium text-black text-sm lg:text-[16px]">+91 7011346403</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="salutation flex flex-col md:flex-row px-4 md:px-8 lg:px-20 items-center justify-between mt-12 lg:mt-20 py-6 lg:py-10 border-t border-black/30 gap-4">
                <h3 className="font-sans text-black text-sm lg:text-[16px] text-center md:text-left">Jagmohan Homes &copy; 2025 All Rights Reserved</h3>
                <div className="wrapper flex flex-row gap-3 text-center">
                    <h3 className="font-sans text-[#c1b086] text-xs lg:text-[14px]">About&nbsp;</h3> 
                    <h3 className="font-sans text-[#c1b086] text-xs lg:text-[14px]">/&nbsp;</h3> 
                    <h3 className="font-sans text-[#c1b086] text-xs lg:text-[14px]">Terms and Conditions</h3>
                </div>
            </div>
        </section>
    );
}