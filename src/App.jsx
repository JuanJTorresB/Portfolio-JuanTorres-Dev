import { NavBar } from "./components/NavBar.jsx"
import { BigName } from "./components/BigName.jsx"
import { Separator } from "./components/Separator.jsx";
import { AboutMe } from "./components/AboutMe.jsx";
import { SkillsSection } from "./components/SkillsSection.jsx";
import { ProjectSection } from "./components/ProjectSection.jsx";
import { ContactMeSection } from "./components/ContactMeSection.jsx";
import { initScrollObserver } from "./observerNav.js"
import { ModelCertificade } from "./components/ModelCertificade.jsx"
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useRef, useState } from "react";
import { Titulo } from "./components/Titulo.jsx";
export const App = () => {

    const [isInteracting, setIsInteracting] = useState(false);

    useEffect(() => {
        const cleanupObserver = initScrollObserver();
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
            <article className="text-center main-section mt-16">
                <Titulo titulo="English Certification" />
                <div style={{ width: '70vw', height: '100vh' }} className="mx-auto">
                    <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
                        {/* Luz ambiental */}
                        <ambientLight intensity={1} />
                        {/* Luz direccional */}
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        {/* Modelo 3D */}
                        <RotatingModel isInteracting={isInteracting} />
                        {/* Controles de cámara */}
                        <OrbitControls
                            minPolarAngle={Math.PI / 3}
                            maxPolarAngle={Math.PI / 1.5}
                            minAzimuthAngle={-Math.PI / 4}
                            maxAzimuthAngle={Math.PI / 4}
                            enableDamping={true}
                            dampingFactor={0.1}
                            onStart={() => setIsInteracting(true)} // Detecta inicio de interacción
                            onEnd={() => setIsInteracting(false)} // Detecta fin de interacción
                        />
                    </Canvas>
                </div>
            </article>
            <Separator />
            <SkillsSection />
            <Separator />
            <ProjectSection />
            <Separator />
            <ContactMeSection />
        </main>
    </div>
}
const RotatingModel = ({ isInteracting }) => {
    const modelRef = useRef();

    // Rotación inicial
    const initialRotation = [0, 0, 0];

    // Interpolación para devolver el modelo a la rotación inicial cuando no se interactúa
    useFrame(() => {
        if (!isInteracting && modelRef.current) {
            modelRef.current.rotation.x = initialRotation[0];
            modelRef.current.rotation.y = initialRotation[1];
            modelRef.current.rotation.z = initialRotation[2];
        }
    });

    return (
        <ModelCertificade ref={modelRef} />
    );
};