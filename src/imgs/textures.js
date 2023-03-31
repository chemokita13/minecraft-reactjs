import {TextureLoader , RepeatWrapping, NearestFilter} from 'three'
import { GrassImg , DirtImg, WoodImg, LogImg, GlassImg} from './imgs'

const GroundTexture = new TextureLoader().load(GrassImg)
GroundTexture.wrapS = RepeatWrapping
GroundTexture.wrapT = RepeatWrapping
GroundTexture.magFilter = NearestFilter


const DirtTexture = new TextureLoader().load(DirtImg)
DirtTexture.magFilter = NearestFilter

const WoodTexture = new TextureLoader().load(WoodImg)
WoodTexture.magFilter = NearestFilter

const LogTexture = new TextureLoader().load(LogImg)
LogTexture.magFilter = NearestFilter

const GlassTexture = new TextureLoader().load(GlassImg)
GlassTexture.magFilter = NearestFilter

// export all textures
export {GlassTexture, GroundTexture, DirtTexture, WoodTexture, LogTexture}