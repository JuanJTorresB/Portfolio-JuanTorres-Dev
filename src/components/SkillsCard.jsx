export const SkillsCard = ({Titulo, Icons}) => {

    const generalLetras = "font-tanNimbus font-normal text-wrap min-w-fit min-h-fit text-amber-300 text-5xl pt-5";

    let contador = 1

    return <section>
        <div className="bg-amber-100 bg-opacity-10 rounded-[60px] border border-slate-50 backdrop-blur-lg max-[520px]:w-[320px] w-[470px] h-[520px] min-h-fit">
        <h5 className={generalLetras + ""}>{Titulo}</h5>
        <ul className="flex flex-wrap px-12 pt-24 pb-6 gap-x-12 gap-y-12 items-center justify-center min-h-fit">
            {Icons.map((e)=> {
                return(<li key={contador++}>
                    {e}
                </li>)
            })}
        </ul>
        </div>
        </section>

}