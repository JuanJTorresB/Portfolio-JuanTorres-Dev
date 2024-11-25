import { useState, useEffect } from "react";
export const NavBar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const generalLetras = "font-tanNimbus font-normal text-[20px] text-slate-50 text-nowrap";
    const iconosGeneral = "w-8 h-8 fill-slate-50"

    return <nav className={(windowWidth >= 1440 ? "gap-24":"gap-2") + " fixed top-0 left-0 right-0 max-w-7xl w-[60vw] px-4 h-20 flex justify-evenly bg-amber-100 bg-opacity-10 rounded-full items-center border border-slate-50 backdrop-blur-lg z-10 mx-auto flex-nowrap"}>
        <a href="#AboutMe" className="flex" ><h4 identificador="AboutMe" className={generalLetras}>{windowWidth >= 1440 ? "About Me" : <svg className={iconosGeneral} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>}</h4></a>
        <a href="#Skills" ><h4 identificador="Skills" className={generalLetras}>{windowWidth >= 1440 ? "Skills" : <svg className={iconosGeneral} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M176 88l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 80c-4.4 0-8 3.6-8 8zm-48 40l0-40c0-30.9 25.1-56 56-56l144 0c30.9 0 56 25.1 56 56l0 40 28.1 0c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9l0 92.1-128 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L0 320l0-92.1c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1l28.1 0zM0 416l0-64 128 0c0 17.7 14.3 32 32 32s32-14.3 32-32l128 0c0 17.7 14.3 32 32 32s32-14.3 32-32l128 0 0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64z"/></svg>}</h4></a>
        {(windowWidth >= 1140 ? <svg className="w-16 min-h-16" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23.5" cy="23" r="23" fill="#FCD34D" />
            <path d="M14.6543 20.8847C14.1704 20.8847 13.9446 20.7431 13.9446 20.4599V14H39.0114V20.4599C39.0114 20.7431 38.7534 20.8847 38.3017 20.8847C37.9146 20.8847 37.4629 20.5838 36.8822 19.9467C36.3015 19.3272 35.7208 18.637 35.2046 17.8936C34.6562 17.1503 34.0432 16.4601 33.398 15.8229C32.7528 15.2035 32.2044 14.8849 31.7527 14.8849C31.0752 14.8849 30.7526 15.2743 30.7526 16.0176V29.61C30.7526 30.6011 31.1075 31.2913 31.8818 31.6984H21.0743C21.8163 31.2913 22.2034 30.6011 22.2034 29.61V16.0176C22.2034 15.2743 21.8486 14.8849 21.2033 14.8849C20.7517 14.8849 20.171 15.2035 19.5258 15.8229C18.8805 16.4601 18.2676 17.1503 17.7514 17.8936C17.203 18.637 16.6545 19.3272 16.0738 19.9467C15.4931 20.5838 15.0092 20.8847 14.6543 20.8847Z" fill="#FEF3C7" />
            <path d="M10.4993 31.9639C9.63629 31.9639 8.90607 31.8046 8.28649 31.486C7.6669 31.1675 7.35712 30.7958 7.35712 30.371C7.35712 30.1763 7.44563 30.0702 7.66691 30.0702C8.79543 30.0702 9.37075 29.4153 9.37075 28.1056L9.7165 16.0884C9.7165 15.115 7.86606 14.4248 7.35712 14H16.3549C15.8238 14.4248 15.5804 15.115 15.5804 16.0884V27.5039C15.5804 28.9552 15.1379 30.0702 14.2749 30.8312C13.3898 31.5922 11.9155 31.9639 10.4993 31.9639Z" fill="#FEF3C7" />
        </svg>:"")}
        <a href="#Projects" ><h4 identificador="Projects" className={generalLetras}>{windowWidth >= 1440 ? "Projects" : <svg className={iconosGeneral} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z"/></svg>}</h4></a>
        <a href="#Contact" ><h4 identificador="Contact" className={generalLetras}>{windowWidth >= 1440 ? "Contact" : <svg className={iconosGeneral} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>}</h4></a>
    </nav>
}