'use client'

export default function Section6(){
    return(
        <section className="section6 w-full flex justify-center pt-13">
            <div className="w-full max-h-8xl overflow-hidden shadow-xl black/30">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9288581602113!2d77.33335351137016!3d28.541857988090676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce67f71bf3d4b%3A0x8ced6e0664884ce!2sJagmohan%20Pg!5e0!3m2!1sen!2sin!4v1743600091484!5m2!1sen!2sin"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen={true}  
                loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}