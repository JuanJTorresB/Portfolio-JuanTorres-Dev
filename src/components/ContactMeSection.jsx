import { Titulo } from "./Titulo.jsx"

export const ContactMeSection = () => {

    const generalLetras = "font-Ysabeau font-normal text-wrap text-amberMine placeholder-amberMine text-xl";


    const inputBasicStyle = "bg-amber-100 bg-opacity-10 border border-slate-50 backdrop-blur-lg flex w-[966px] p-14 rounded-[60px] gap-x-7 items-center"

    return <section className="text-center pb-16">
        <Titulo titulo="Contact Me" />
        <form className="flex flex-wrap justify-center mt-16 items-center gap-8 max-w-[966px] mx-auto">
            <input type="text" name="inputName" id="inputName" className={inputBasicStyle + " h-[120px] " + generalLetras} placeholder="Your Name" />
            <input type="email" name="inputEmail" id="inputEmail" className={inputBasicStyle + " h-[120px] " + generalLetras} placeholder="Your Email Adress" />
            <textarea name="inputMessage" id="inputMessage" className={inputBasicStyle + " h-[480px] resize-none  " + generalLetras} placeholder="Your Message" />
            <button type="submit" id="SendButton" className="w-[966px] h-[120px] bg-amber-300 rounded-[60px] flex items-center justify-center gap-x-4">
                <span className="font-tanNimbus text-6xl text-slate-50">Send</span>
                <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_96_708)">
                        <path d="M74.4366 0.831329C75.9358 1.87039 76.7225 3.66649 76.4405 5.46258L66.9405 67.2126C66.7178 68.6524 65.842 69.9141 64.5655 70.6266C63.2889 71.3391 61.76 71.4282 60.4092 70.8641L42.6561 63.4868L32.4881 74.486C31.167 75.9259 29.0889 76.4009 27.2631 75.6884C25.4374 74.9759 24.2499 73.2094 24.2499 71.2501V58.8407C24.2499 58.247 24.4725 57.6829 24.8733 57.2376L49.7514 30.1032C50.6124 29.168 50.5827 27.7282 49.692 26.8376C48.8014 25.947 47.3616 25.8876 46.4264 26.7337L16.2342 53.5563L3.1272 46.9954C1.55376 46.2087 0.544384 44.6352 0.499852 42.8837C0.455321 41.1321 1.37563 39.4993 2.8897 38.6235L69.3897 0.623517C70.978 -0.281952 72.9374 -0.192889 74.4366 0.831329Z" fill="#F8FAFC" />
                    </g>
                    <defs>
                        <clipPath id="clip0_96_708">
                            <rect width="76" height="76" fill="white" transform="translate(0.5)" />
                        </clipPath>
                    </defs>
                </svg>

            </button>
            <nav className="flex gap-6 mt-12">
                {/* Linkedin */}
                <svg className="w-20" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill="#fff" d="M474.919 0H38.592C17.72 0 0 16.504 0 36.841V475.14C0 495.496 11.629 512 32.492 512h436.327C489.718 512 512 495.496 512 475.14V36.841C512 16.504 495.809 0 474.919 0zM195.043 195.043h68.928v35.136h.755c10.505-18.945 41.541-38.177 79.921-38.177 73.655 0 94.214 39.108 94.214 111.538v135.321h-73.148V316.883c0-32.427-12.947-60.883-43.227-60.883-36.768 0-54.295 24.889-54.295 65.758v117.103h-73.148V195.043zM73.139 438.861h73.148V195.043H73.139v243.818zm82.289-329.148c0 25.258-20.457 45.715-45.715 45.715-25.258 0-45.715-20.457-45.715-45.715 0-25.258 20.457-45.715 45.715-45.715 25.258 0 45.715 20.457 45.715 45.715z"/></svg>
                {/* GitHub */}
                <svg width="80" height="79" viewBox="0 0 80 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.0002 0C17.9115 0 0 17.9084 0 40.0002C0 57.6736 11.4612 72.6672 27.3546 77.9565C29.3536 78.3266 30.0877 77.0887 30.0877 76.0321C30.0877 75.0784 30.0504 71.9272 30.0334 68.5849C18.9051 71.0045 16.5569 63.8653 16.5569 63.8653C14.7374 59.2418 12.1157 58.0127 12.1157 58.0127C8.4866 55.53 12.3892 55.5808 12.3892 55.5808C16.406 55.8631 18.5211 59.703 18.5211 59.703C22.0886 65.8182 27.8785 64.0501 30.1611 63.0284C30.52 60.4427 31.5568 58.6784 32.7006 57.6795C23.8163 56.6678 14.4764 53.238 14.4764 37.9111C14.4764 33.5442 16.039 29.9757 18.5979 27.1746C18.1826 26.1669 16.8135 22.0987 18.9854 16.5889C18.9854 16.5889 22.3443 15.5138 29.9883 20.6891C33.1788 19.8026 36.6007 19.3584 40.0002 19.3433C43.3996 19.3584 46.8241 19.8026 50.0208 20.6891C57.6557 15.5138 61.0099 16.5889 61.0099 16.5889C63.1871 22.0987 61.8174 26.1669 61.4021 27.1746C63.9667 29.9757 65.5186 33.5439 65.5186 37.9111C65.5186 53.2743 56.1612 56.6574 47.2542 57.6475C48.6888 58.8889 49.9672 61.3233 49.9672 65.0549C49.9672 70.4069 49.9207 74.7145 49.9207 76.0321C49.9207 77.0966 50.6407 78.3439 52.6686 77.9511C68.5532 72.6559 80 57.6676 80 40.0002C80 17.9084 62.091 0 40.0002 0Z" fill="white" />
                </svg>
            </nav>
        </form>
    </section>
}

