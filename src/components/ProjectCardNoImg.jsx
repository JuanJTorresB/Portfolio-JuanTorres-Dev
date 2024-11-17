export const ProjectCardNoImg = ({name, description, Icons})=>{

    const generalLetras = "font-Ysabeau font-normal text-wrap";
    
    let contador = 1;

    return <article className="bg-amber-100 bg-opacity-10 border border-slate-50 backdrop-blur-lg flex w-[460px] p-14 rounded-[60px] gap-x-7 items-center">
        <div className={"flex flex-col text-amberMine h-full justify-center" }>
            <h6 className={generalLetras + " font-bold text-[30px]"}>{name}</h6>
            <p  className={generalLetras + " text-justify tracking-wide font-extralight text-2xl leading-loose pt-5"}>{description}</p>
            <ul className="flex gap-x-6  pt-5">
            {Icons.map((e)=> {
                return(<li key={contador++}>
                    {e}
                </li>)
            })}
            </ul>
        </div>
    </article>
}