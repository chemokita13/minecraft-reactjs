import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Ground from "./components/Ground";
import FirstPointView from "./components/FirstPointView";
import Player from "./components/Player";
import { Cubes } from "./components/Cubes";
import Textures from "./components/Textures";

function App() {
    return (
        <>
            <Canvas>
                <Sky sunPosition={[100, 100, 20]} />
                <ambientLight intensity={0.5} />
                <FirstPointView />
                <Physics>
                    <Cubes />
                    <Player />
                    <Ground />
                </Physics>
            </Canvas>
            <Textures />
            <div className="pointer">+</div>
        </>
    );
}

export default App;
