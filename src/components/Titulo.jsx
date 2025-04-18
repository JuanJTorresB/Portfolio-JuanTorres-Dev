export const Titulo = ({titulo}) => {

    const generalLetras = "font-tanNimbus font-normal min-w-fit min-h-fit leading-relaxed";

    return <>
        <h4 className={generalLetras + " text-[10vw] text-amberMine text-wrap"}>{titulo}</h4>
    </>

}