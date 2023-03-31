import React from "react";
import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

function FirstPointView() {
    const { camera, gl } = useThree();
    return <PointerLockControls args={[camera, gl.domElement]} />;
}

export default FirstPointView;
