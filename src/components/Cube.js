import { useBox } from "@react-three/cannon";
import * as textures from "../imgs/textures";
import React from "react";

function Cube({ id, position, texture }) {
    const [ref] = useBox(() => ({
        type: "Static",
        position,
    }));

    const activeTexture = textures[texture + "Texture"];
    console.log(activeTexture);

    return (
        <mesh key={id} ref={ref}>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial map={activeTexture} attach={"material"} />
        </mesh>
    );
}

export default Cube;
