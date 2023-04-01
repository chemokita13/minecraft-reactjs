import create from "zustand";
import { nanoid } from "nanoid";

export const UseStore = create((set) => ({
    texture: "Dirt",
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
    addCube: (x, y, z) => {
        set((state) => ({
            cubes: [
                ...state.cubes,
                {
                    id: nanoid(),
                    position: [x, y, z],
                    texture: state.texture,
                },
            ],
        }));
    },
    removeCube: (id) => {
        set((state) => ({
            cubes: state.cubes.filter((cube) => cube.id !== id),
        }));
    },
    setTexture: (texture) => {
        set(() => {
            return { texture };
        });
    },
    saveWorld: () => {},
    loadWorld: () => {},
    deleteWorld: () => {},
}));
