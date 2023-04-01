import React from "react";
import { usePlane } from "@react-three/cannon";
import { GroundTexture } from "../imgs/textures";
import { UseStore } from "../hooks/UseStore";

function Ground() {
    const [addCube] = UseStore((state) => [state.addCube]);

    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0],
    }));

    GroundTexture.repeat.set(100, 100);

    const handleClickGround = (e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((element) =>
            Math.ceil(element)
        );
        addCube(x, y, z);
    };

    return (
        <mesh ref={ref} onClick={(e) => handleClickGround(e)}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" map={GroundTexture} />
        </mesh>
    );
}

export default Ground;
