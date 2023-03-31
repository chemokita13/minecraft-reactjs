import React from "react";
import { usePlane } from "@react-three/cannon";
import { GroundTexture } from "../imgs/textures";

function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0],
    }));

    GroundTexture.repeat.set(100,100)
    
    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" map={GroundTexture}/>
        </mesh>
    );
}

export default Ground;
