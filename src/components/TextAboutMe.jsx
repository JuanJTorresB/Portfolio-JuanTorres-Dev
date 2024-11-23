export const TextAboutMe = ({ text }) => {

    const generalLetras = "font-Ysabeau font-normal text-wrap";

    return <div className="flex flex-wrap w-full justify-center gap-24 mt-8">
        <div className="max-w-[550px] p-4">
            <p className={generalLetras + " " + "text-2xl text-ellipsis text-amberMine tracking-wider leading-loose"}>
                {text}
            </p>
            <nav className="flex flex-wrap gap-6 mt-12">
                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/juanjtorresbecerra/?locale=en_US" target="_blank">
                <svg className="w-20" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512"><path fill="#fff" d="M474.919 0H38.592C17.72 0 0 16.504 0 36.841V475.14C0 495.496 11.629 512 32.492 512h436.327C489.718 512 512 495.496 512 475.14V36.841C512 16.504 495.809 0 474.919 0zM195.043 195.043h68.928v35.136h.755c10.505-18.945 41.541-38.177 79.921-38.177 73.655 0 94.214 39.108 94.214 111.538v135.321h-73.148V316.883c0-32.427-12.947-60.883-43.227-60.883-36.768 0-54.295 24.889-54.295 65.758v117.103h-73.148V195.043zM73.139 438.861h73.148V195.043H73.139v243.818zm82.289-329.148c0 25.258-20.457 45.715-45.715 45.715-25.258 0-45.715-20.457-45.715-45.715 0-25.258 20.457-45.715 45.715-45.715 25.258 0 45.715 20.457 45.715 45.715z"/></svg>
                </a>
                {/* GitHub */}
                <a href="https://github.com/JuanJTorresB" target="_blank">
                <svg width="80" height="79" viewBox="0 0 80 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.0002 0C17.9115 0 0 17.9084 0 40.0002C0 57.6736 11.4612 72.6672 27.3546 77.9565C29.3536 78.3266 30.0877 77.0887 30.0877 76.0321C30.0877 75.0784 30.0504 71.9272 30.0334 68.5849C18.9051 71.0045 16.5569 63.8653 16.5569 63.8653C14.7374 59.2418 12.1157 58.0127 12.1157 58.0127C8.4866 55.53 12.3892 55.5808 12.3892 55.5808C16.406 55.8631 18.5211 59.703 18.5211 59.703C22.0886 65.8182 27.8785 64.0501 30.1611 63.0284C30.52 60.4427 31.5568 58.6784 32.7006 57.6795C23.8163 56.6678 14.4764 53.238 14.4764 37.9111C14.4764 33.5442 16.039 29.9757 18.5979 27.1746C18.1826 26.1669 16.8135 22.0987 18.9854 16.5889C18.9854 16.5889 22.3443 15.5138 29.9883 20.6891C33.1788 19.8026 36.6007 19.3584 40.0002 19.3433C43.3996 19.3584 46.8241 19.8026 50.0208 20.6891C57.6557 15.5138 61.0099 16.5889 61.0099 16.5889C63.1871 22.0987 61.8174 26.1669 61.4021 27.1746C63.9667 29.9757 65.5186 33.5439 65.5186 37.9111C65.5186 53.2743 56.1612 56.6574 47.2542 57.6475C48.6888 58.8889 49.9672 61.3233 49.9672 65.0549C49.9672 70.4069 49.9207 74.7145 49.9207 76.0321C49.9207 77.0966 50.6407 78.3439 52.6686 77.9511C68.5532 72.6559 80 57.6676 80 40.0002C80 17.9084 62.091 0 40.0002 0Z" fill="white" />
                </svg>
                </a>
                <a href="https://drive.google.com/file/d/10r_SXfFjOX8J46iPkhzlA6fAqZxl2XBV/view?usp=sharing" target="_blank">
                <button className="bg-amber-300 px-10 pt-5 pb-5 rounded-full font-tanNimbus text-2xl text-slate-50" >Dowloand CV</button>
                </a>
            </nav>
        </div>
        <img className="h-[500px]" src="/image.png" alt="Profile Photo" />
    </div>

}