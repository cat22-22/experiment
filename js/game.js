//fazer sempre import de um "nível" que faças, senao ele nao vai funcionar no jogo
//scripts como "player.js" ou "bola.js" nao contam, apenas "Scenes"
import {LoadScene} from "./LoadScene.js";
import {MainMenu} from "./MainMenu.js";
import {Level001} from "./Level001.js";
import { Victory } from "./victory.js";


const config = {
    //tamanho da tela de jogo que estejas a criar
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    //acrescentar sempre a "Scene" depois de ser criada em cima dentro dos parenteses
    //o nome a ser adicionado tem que ser o que fica a azul claro dentro de {} em cima
    scene: [LoadScene, MainMenu, Level001, Victory],
    
    //as physicas vao ser necessárias dependendo do jogo que estas a fazer, mas podes meter
    physics:{
        default: 'arcade',
        arcade: {
            gravity: {
                y:800
            },
            debug: true
        }
    },

    //pixelArt: true
    //serve para meter o jogo aos quadradinhos mas pode ficar mal
}

new Phaser.Game(config);