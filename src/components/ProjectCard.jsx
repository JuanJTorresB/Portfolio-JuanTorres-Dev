export const ProjectCard = ({ name, imgUbi, description, Icons, Href }) => {

    const generalLetras = "font-Ysabeau font-normal text-wrap";

    let contador = 1;

    return <article className="bg-amber-100 bg-opacity-10 border border-slate-50 backdrop-blur-lg flex w-[966px] p-14 rounded-[60px] gap-x-7 items-center h-full">
        <a href={Href} target="_blank" className="flex justify-center items-center gap-8">
            <div className={"flex flex-col text-amberMine h-full justify-center max-w-[390px]"}>
                <h6 className={generalLetras + " font-bold text-[32px] text-nowrap"}>{name}</h6>
                <p className={generalLetras + " text-justify tracking-wide font-extralight text-2xl leading-loose pt-5 text-slate-50"}>{description}</p>
                <ul className="flex flex-wrap gap-6 pt-5 justify-center items-center">
                    {Icons.map((e) => {
                        return (<li key={contador++}>
                            {e}
                        </li>)
                    })}
                </ul>
            </div>
            <img src={imgUbi} className="h-[270px] max-w-[460px]" />
        </a>
    </article>
}