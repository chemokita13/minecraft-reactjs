import React, { useEffect, useState } from "react";
import { UseStore } from "../hooks/UseStore.js";
import { UseKeyboard } from "../hooks/UseKeyboard.js";

import * as images from "../imgs/imgs.js";

function Textures() {
    const [texture, setTexture] = UseStore((state) => [
        state.texture,
        state.setTexture,
    ]);

    const { Grass, Glass, Dirt, Wood, Log } = UseKeyboard();

    useEffect(() => {
        const options = { Grass, Glass, Dirt, Wood, Log };

        const selectedTexture = Object.entries(options).find(
            ([texture, isEnabled]) => isEnabled
        );

        if (selectedTexture) {
            const [textureName] = selectedTexture;
            setTexture(textureName);
            console.log("textureName", textureName);
        }
    }, [Grass, Glass, Dirt, Wood, Log]);

    return (
        <div className="textures">
            {Object.entries(images).map(([imgKey, Img]) => {
                return (
                    <img
                        key={imgKey}
                        src={Img}
                        alt={imgKey}
                        className={
                            texture === imgKey.replace("Img", "")
                                ? "selected"
                                : ""
                        }
                    />
                );
            })}
        </div>
    );
}

export default Textures;
