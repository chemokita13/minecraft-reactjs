import create from "zustand";
import { nanoid } from "nanoid";

export const UseStore = create((set) => ({
    texture: "dirt",
    cubes: [
        {
            id: nanoid(),
            position: [1, 1, 1],
            texture: "Dirt",
        },
        {
            id: nanoid(),
            position: [1, 15, 1],
            texture: "Log",
        },
    ],
    addCube: () => {},
    removeCube: () => {},
    setTexture: (texture) => {},
    saveWorld: () => {},
    loadWorld: () => {},
    deleteWorld: () => {},
}));
