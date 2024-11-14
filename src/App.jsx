import { NavBar } from "./components/NavBar.jsx"
import { BigName } from "./components/BigName.jsx"
 
export const App = () => {
    return <div className="bg-stone-800 h-screen box-border">
        <header>
            <NavBar />
        </header>
        <main>
            <BigName />
        </main>
    </div>
}