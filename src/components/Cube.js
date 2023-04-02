import { useBox } from "@react-three/cannon";
import * as textures from "../imgs/textures";
import React, { useState } from "react";
import { UseStore } from "../hooks/UseStore";

function Cube({ id, position, texture }) {
    const [removeCube, addCube] = UseStore((state) => [
        state.removeCube,
        state.addCube,
    ]);

    const [IsHovered, setIsHovered] = useState(false);

    const [ref] = useBox(() => ({
        type: "Static",
        position,
    }));

    const activeTexture = textures[texture + "Texture"];

    const handleClickCube = (e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((element) =>
            Math.ceil(element)
        );
        addCube(x, y, z);
    };

    return (
        <mesh
            key={id}
            ref={ref}
            onPointerMove={(e) => {
                e.stopPropagation();
                setIsHovered(true);
            }}
            onPointerOut={(e) => {
                e.stopPropagation();
                setIsHovered(false);
            }}
            onClick={(e) => {
                e.stopPropagation();
                if (e.altKey) {
                    // delete cube
                    removeCube(id);
                } else {
                    // put cube
                    handleClickCube(e);
                }
            }}
        >
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial
                map={activeTexture}
                attach={"material"}
                color={IsHovered ? "gray" : "white"}
            />
        </mesh>
    );
}

export default Cube;
