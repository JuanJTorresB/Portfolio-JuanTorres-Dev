export const Titulo = ({titulo}) => {

    const generalLetras = "font-tanNimbus font-normal text-nowrap min-w-fit min-h-fit";

    return <>
        <h4 className={generalLetras + " text-8xl text-amberMine"}>{titulo}</h4>
    </>

}