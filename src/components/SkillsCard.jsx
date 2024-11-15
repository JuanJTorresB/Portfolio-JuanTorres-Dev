export const SkillsCard = ({Titulo, Icons}) => {

    const generalLetras = "font-tanNimbus font-normal text-nowrap min-w-fit min-h-fit text-amber-300 text-5xl pt-5";

    let contador = 1

    return <section>
        <div className="bg-amber-100 bg-opacity-10 rounded-2xl border border-slate-50 backdrop-blur-lg max-w-[470px] min-w-fit min-h-fit">
        <h5 className={generalLetras + ""}>{Titulo}</h5>
        <ul className="flex flex-wrap px-12 pt-24 pb-6 gap-x-12 gap-y-12 w-[470px] h-[500px] items-center justify-center">
            {Icons.map((e)=> {
                return(<li key={contador++}>
                    {e}
                </li>)
            })}
        </ul>
        </div>
        </section>

}