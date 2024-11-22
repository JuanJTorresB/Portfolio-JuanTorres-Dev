import { useGLTF } from '@react-three/drei';

export function ModelCertificade(props) {
    const { scene } = useGLTF('/3dModels/certificado3D.glb'); // Ruta al modelo
    return <primitive object={scene} {...props} />;
}

useGLTF.preload('/3dModels/certificado3D.glb');