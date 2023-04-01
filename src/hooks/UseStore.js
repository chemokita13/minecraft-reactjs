import create from "zustand";
import { nanoid } from "nanoid";

export const UseStore = create((set) => ({
    texture: "Dirt",
    cubes: [],
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
