import React from "react";
import { usePlane } from "@react-three/cannon";

function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [0, 0, 0],
        position: [0, 0, 0],
    }));
    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" color="green" />
        </mesh>
    );
}

export default Ground;
