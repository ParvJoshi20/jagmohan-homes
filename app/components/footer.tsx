'use client'
import Image from "next/image";
import { Mail, Phone} from "lucide-react";

export default function Footer() {
    return(
        <section className="footer w-full pt-30">
            <div className="content px-20 flex flex-row items-start justify-between">
                <div className="company flex flex-col gap-6 size-[20%]">
                    <div className="logo-title flex flex-row items-center gap-4">
                        <Image
                            alt="logo"
                            src={'/logo-dark.png'}
                            width={80}
                            height={80}
                        />
                        <div className="title flex flex-col items-start">
                            <h1 className="font-mono text-black text-2xl">Jagmohan</h1>
                            <h1 className="font-mono text-black text-2xl">Homes</h1>
                        </div>
                    </div>
                    <p className="font-sans font-medium text-black text-[16px]">All PG and rental properties and their details listed on this website are independently owned and operated. <br></br> Accepted payment methods:</p>
                    <Image
                        alt="payment methods"
                        src={'/pm.jpg'}
                        width={150}
                        height={50}
                        className="-mt-2"
                    />
                </div>
                <div className="content-right flex flex-row gap-30">
                    <div className="customer-info flex flex-col gap-8 size-fit">
                        <h1 className="heading font-serif text-3xl size-fit text-black">For Customers</h1>
                        <h3 className="l1 font-sans font-medium text-black text-[16px] pt-5">About Jagmohan Homes</h3>
                        <h3 className="l2 font-sans font-medium text-black text-[16px]">Inquiry for Rooms</h3>
                        <h3 className="l2 font-sans font-medium text-black text-[16px]">Reviews and Testimonials</h3>
                        <h3 className="l2 font-sans font-medium text-black text-[16px]">Location and Directions</h3>
                        <h3 className="l2 font-sans font-medium text-black text-[16px]">Terms and Conditions</h3>
                    </div>
                    <div className="contact-us flex flex-col gap-6 size-fit">
                        <h1 className="heading font-serif text-3xl text-black">Contact Us</h1>
                        <h3 className="l1 font-sans font-medium text-black text-[16px] pt-5">Raipur Khadar, Sector 126, <br></br> Noida, Uttar Pradesh 201313</h3>
                        
                        <div className="l2 flex flex-row gap-2 items-center">
                            <Mail className="w-5 h-5" />
                            <h3 className="l1 font-sans font-medium text-black text-[16px]">xyz@gmail.com</h3>
                        </div>
                        <div className="l2 flex flex-row gap-2 items-center">
                            <Phone className="w-5 h-5" />
                            <h3 className="l1 font-sans font-medium text-black text-[16px]">+91 8285423005</h3>
                        </div>
                        <div className="l2 flex flex-row gap-2 items-center">
                            <Phone className="w-5 h-5" />
                            <h3 className="l1 font-sans font-medium text-black text-[16px]">+91 7011346403</h3>
                        </div>
                        <div className="l2 flex flex-row gap-2 items-center">
                            <Phone className="w-5 h-5" />
                            <h3 className="l1 font-sans font-medium text-black text-[16px]">+91 7011346403</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="salutation flex flex-row px-20 items-start justify-between mt-20 py-10 border-t-1 border-black/30">
                <h3 className="font-sans text-black text-[16px]">Jagmohan Homes &copy; 2025 All Rights Reserved</h3>
                <div className="wrapper flex flex-row gap-3">
                    <h3 className="font-sans text-[#c1b086] text-[14px]">About&nbsp;</h3> 
                    <h3 className="font-sans text-[#c1b086] text-[14px]">/&nbsp;</h3> 
                    <h3 className="font-sans text-[#c1b086] text-[14px]">Terms and Conditions</h3>
                </div>
            </div>
        </section>
    );
}