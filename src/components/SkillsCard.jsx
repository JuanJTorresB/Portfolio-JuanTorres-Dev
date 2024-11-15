export const SkillsCard = ({Titulo, Icons}) => {

    const generalLetras = "font-tanNimbus font-normal text-nowrap min-w-fit min-h-fit text-amber-300 text-5xl";

    let contador = 1

    return <section className="w-screen text-center">
        <div className="bg-amber-100 bg-opacity-10 rounded-2xl border border-slate-50 backdrop-blur-lg max-w-lg h-1/2">
        <h5 className={generalLetras + ""}>{Titulo}</h5>
        <ul>
            {Icons.map((e)=> {
                return(<li key={contador++}>
                    {e}
                </li>)
            })}
        </ul>
        </div>
        </section>

}