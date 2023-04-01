///import './App.css';
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Ground from "./components/Ground";
import FirstPointView from "./components/FirstPointView";
import Player from "./components/Player";

function App() {
    return (
        <>
            <Canvas>
                <Sky sunPosition={[100, 100, 20]} />
                <ambientLight intensity={0.5} />
                <FirstPointView />
                <Physics>
                    <Player />
                    <Ground />
                </Physics>
            </Canvas>
            <div className="pointer">+</div>
        </>
    );
}

export default App;
