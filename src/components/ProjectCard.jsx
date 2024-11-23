import {useEffect, useState} from "react"

export const ProjectCard = ({ name, imgUbi, description, Icons, Href }) => {

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

    const generalLetras = "font-Ysabeau font-normal text-wrap";

    let contador = 1;

    return <article className="bg-amber-100 bg-opacity-10 border border-slate-50 backdrop-blur-lg flex w-[320px] p-14 rounded-[60px] gap-x-7 items-center h-full">
        <a href={Href} target="_blank" className="flex justify-center items-center gap-8">
            <div className={"flex flex-col text-amberMine h-full justify-center w-max-screen"}>
                <h6 className={generalLetras + " font-bold text-[32px] text-wrap"}>{name}</h6>
                <p className={generalLetras + " text-justify tracking-wide font-extralight text-2xl leading-loose pt-5 text-slate-50"}>{description}</p>
                <ul className="flex flex-wrap gap-6 pt-5 justify-center items-cente">
                    {Icons.map((e) => {
                        return (<li key={contador++}>
                            {e}
                        </li>)
                    })}
                </ul>
            </div>
            {windowWidth <= 1100 ? "":<img src={imgUbi} className="h-[270px] max-w-[460px]" />}
        </a>
    </article>
}