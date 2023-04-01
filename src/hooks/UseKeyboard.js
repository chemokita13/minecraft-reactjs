import { useState, useEffect } from "react";

const ACTIONS_KEYBOARD_MAP = {
    KeyW: "moveForward",
    KeyS: "moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
    Digit1: "Dirt",
    Digit2: "Glass",
    Digit3: "Grass",
    Digit4: "Log",
    Digit5: "Wood",
};

export const UseKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        Dirt: false,
        Glass: false,
        Grass: false,
        Log: false,
        Wood: false,
    });

    useEffect(() => {
        const handleKeyDown = (e) => {
            const { code } = e;
            const action = ACTIONS_KEYBOARD_MAP[code];
            if (action) {
                setActions((prevs) => ({ ...prevs, [action]: true }));
            }
        };
        document.addEventListener("keydown", handleKeyDown);

        const handleKeyUp = (e) => {
            const { code } = e;
            const action = ACTIONS_KEYBOARD_MAP[code];
            if (action) {
                setActions((prevs) => ({ ...prevs, [action]: false }));
            }
        };

        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return actions;
};
