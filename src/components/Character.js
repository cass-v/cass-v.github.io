import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './Model'

function Character(){
    return (
        <Canvas>
        <ambientLight intensity={1} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <Suspense fallback={null}>
            <Model />
            </Suspense>
        </Canvas>    
        );
}

export default Character;