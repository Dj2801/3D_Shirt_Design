import { proxy } from "valtio";
const state =proxy({
intro:true, // IF ARE AT HOME OR NOT
color:'#EFBD48',
isLogoTexture:true,
isFullTexture:false,
logoDecal:'./threejs.png',//before uploading any logo or texture
fullDecal:'./threejs.png',
});

export default state;