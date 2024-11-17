import { NavBar } from "./components/NavBar.jsx"
import { BigName } from "./components/BigName.jsx"
import { Separator } from "./components/Separator.jsx";
import { AboutMe } from "./components/AboutMe.jsx";
import { SkillsSection } from "./components/SkillsSection.jsx";
import { ProjectSection } from "./components/ProjectSection.jsx";
 
export const App = () => {
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
            </main>
    </div>
}