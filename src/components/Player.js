import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Vector3 } from "three";

function Player() {
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
        api.velocity.set(0, 0, -1);
    });
    return <mesh ref={ref} />;
}

export default Player;
