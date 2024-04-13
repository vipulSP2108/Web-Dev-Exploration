import {createScene} from './scene.js';
import {orbitCamera} from './camera.js';
import {createCity} from './city.js';
import buildingModels from './building.js';

const count = 0;

export function createGame() {

    const citysize = 20;

    window.scene = createScene();
    window.orbit = orbitCamera();
    window.city = createCity(citysize);

    window.scene.renderer.shadowMap.enabled = true;
    
    window.scene.initialize(window.city);

    window.scene.onObjectSelected = (currentobject) => {
        // console.log(currentobject);
        // if (userData){
        let { i , j } = currentobject.userData;
        const tile =  window.city.data[i][j];
        console.log(tile);
        // }
        if (activeToolID === 'bulldozer'){
            tile.buildings = undefined;
            scene.update(window.city);
        }
        else if (!tile.buildings){
            tile.buildings = buildingModels[activeToolID]();
            scene.update(window.city);
        }
    }

    document.addEventListener('mousedown', window.scene.onmousedownscene.bind(window.scene), false);

    document.addEventListener('mousedown', window.orbit.onmousedown.bind(window.orbit), false);
    document.addEventListener('mouseup', window.orbit.onmouseup.bind(window.orbit), false);
    document.addEventListener('mousemove', window.orbit.onmousemove.bind(window.orbit), false);

    let activeToolID = undefined;

    function setActiveToolID(toolid) {
        activeToolID = toolid;
        console.log(activeToolID);
    }

    let ispause = false;
    function isPause(pause){
        ispause = pause;
        console.log(ispause);
    }
   

    const game = {
        update () {
            window.city.update();
            window.scene.update(city);
        },
        
        // setActiveToolID(toolid) {
        //     activeToolID = toolid;
        //     console.log(activeToolID);
        // }
    }

    setInterval (() => {
        game.update();
    }, 10)

    window.scene.start();

    return{
        setActiveToolID,
        game,
        isPause
    }
}