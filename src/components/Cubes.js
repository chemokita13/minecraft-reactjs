import { UseStore } from "../hooks/UseStore";
import Cube from "./Cube";

export const Cubes = () => {
    const cubes = UseStore((state) => state.cubes);

    return cubes.map(({ id, position, texture }) => {
        return <Cube id={id} position={position} texture={texture} />;
    });
};
