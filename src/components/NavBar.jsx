export const NavBar = ()=>{

    const generalLetras = "font-tanNimbus font-normal size-7 text-nowrap text-slate-50 min-w-fit min-h-fit";
    const seccionSeleccionada = "bg-amber-300 px-10 pt-5 pb-10 rounded-full";

    return <nav className="fixed top-0 left-0 right-0 max-w-7xl px-4 h-20 flex justify-evenly gap-32 mx-auto bg-amber-100 bg-opacity-10 rounded-full items-center border border-slate-50  backdrop-blur-xl">
        <h4 className={generalLetras + " " + seccionSeleccionada}>About Me</h4>
        <h4 className={generalLetras}>Skills</h4>
        <svg width="50" height="50" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="23.5" cy="23" r="23" fill="#FCD34D"/>
<path d="M14.6543 20.8847C14.1704 20.8847 13.9446 20.7431 13.9446 20.4599V14H39.0114V20.4599C39.0114 20.7431 38.7534 20.8847 38.3017 20.8847C37.9146 20.8847 37.4629 20.5838 36.8822 19.9467C36.3015 19.3272 35.7208 18.637 35.2046 17.8936C34.6562 17.1503 34.0432 16.4601 33.398 15.8229C32.7528 15.2035 32.2044 14.8849 31.7527 14.8849C31.0752 14.8849 30.7526 15.2743 30.7526 16.0176V29.61C30.7526 30.6011 31.1075 31.2913 31.8818 31.6984H21.0743C21.8163 31.2913 22.2034 30.6011 22.2034 29.61V16.0176C22.2034 15.2743 21.8486 14.8849 21.2033 14.8849C20.7517 14.8849 20.171 15.2035 19.5258 15.8229C18.8805 16.4601 18.2676 17.1503 17.7514 17.8936C17.203 18.637 16.6545 19.3272 16.0738 19.9467C15.4931 20.5838 15.0092 20.8847 14.6543 20.8847Z" fill="#FEF3C7"/>
<path d="M10.4993 31.9639C9.63629 31.9639 8.90607 31.8046 8.28649 31.486C7.6669 31.1675 7.35712 30.7958 7.35712 30.371C7.35712 30.1763 7.44563 30.0702 7.66691 30.0702C8.79543 30.0702 9.37075 29.4153 9.37075 28.1056L9.7165 16.0884C9.7165 15.115 7.86606 14.4248 7.35712 14H16.3549C15.8238 14.4248 15.5804 15.115 15.5804 16.0884V27.5039C15.5804 28.9552 15.1379 30.0702 14.2749 30.8312C13.3898 31.5922 11.9155 31.9639 10.4993 31.9639Z" fill="#FEF3C7"/>
        </svg>
        <h4 className={generalLetras}>Projects</h4>
        <h4 className={generalLetras}>Contact</h4>
    </nav>
}