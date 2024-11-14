import {Titulo} from "./Titulo.jsx"
import {TextAboutMe} from "./TextAboutMe.jsx"

export const AboutMe = () => {

    const generalLetras = "font-tanNimbus font-normal text-nowrap min-w-fit min-h-fit";

    return <section className="w-screen text-center">
        <Titulo titulo="About Me"/>
        <TextAboutMe text="I am always looking to improve my skills and contribute to innovative and creative projects. Through my experience and training, I have been able to consolidate knowledge in backend development and various frameworks that have strengthened my agile thinking, problem-solving abilities, and achievement-oriented mindset. in the ligth of that, my passion lies in creating creative, efficient, and scalable software solutions."/>
    </section>

}