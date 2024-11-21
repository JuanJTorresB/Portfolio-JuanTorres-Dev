import { NavBar } from "./components/NavBar.jsx"
import { BigName } from "./components/BigName.jsx"
import { Separator } from "./components/Separator.jsx";
import { AboutMe } from "./components/AboutMe.jsx";
import { SkillsSection } from "./components/SkillsSection.jsx";
import { ProjectSection } from "./components/ProjectSection.jsx";
import { ContactMeSection } from "./components/ContactMeSection.jsx";
import { initScrollObserver } from "./observerNav.js"
import { useEffect } from "react";

export const App = () => {

    useEffect(() => {
        // Llamar la función para inicializar el observer
        const cleanupObserver = initScrollObserver();

        // Limpiar el observer al desmontar el componente
        return cleanupObserver;
    }, []);

    return <div className="bg-stone-700 h-full box-border">
        <header>
            <NavBar />
        </header>
        <main>
            <BigName />
            <Separator />
            <AboutMe />
            <Separator />
            <SkillsSection />
            <Separator />
            <ProjectSection />
            <Separator />
            <ContactMeSection />
        </main>
    </div>
}