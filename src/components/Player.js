import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { UseKeyboard } from "../hooks/UseKeyboard";

const PLAYER_SPEED = 2;
const PLAYER_JUMP = 4;

function Player() {
    const { moveBackward, moveForward, moveLeft, moveRight, jump } =
        UseKeyboard();

    //get camera from useThree hook
    const { camera } = useThree();
    //useSphere hook to create a physics body
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 5, 0],
    }));

    // Velocity subscriber
    const vel = useRef([0, 0, 0]);
    useEffect(() => {
        api.velocity.subscribe((V) => (vel.current = V));
    }, [api.velocity]);

    // Position subscriber
    const pos = useRef([0, 0, 0]);
    useEffect(() => {
        api.position.subscribe((P) => (pos.current = P));
    }, [api.position]);

    //useFrame hook to update the camera position
    useFrame(() => {
        //set camera position to the physics body position
        camera.position.copy(
            new Vector3(pos.current[0], pos.current[1], pos.current[2])
        );
        //api.velocity.set(0, 0, -1);

        const direction = new Vector3();
        const frontVector = new Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        ); //default front direction

        const sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
            0,
            0
        ); //default side direction

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(PLAYER_SPEED)
            .applyEuler(camera.rotation); //get direction

        api.velocity.set(direction.x, vel.current[1], direction.z);

        if (jump && Math.abs(vel.current[1].toFixed(2)) == 0) {
            api.velocity.set(vel.current[0], PLAYER_JUMP, vel.current[2]);
        }
    });
    return <mesh ref={ref} />;
}

export default Player;
