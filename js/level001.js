//fazer import dos scripts que sejam usados nesta cena como por exemplo: "player.js" ou "bola.js"
import {Player} from "./player.js";
import {Balls} from "./balls.js";

export class Level001 extends Phaser.Scene {
    constructor() {
        super('Level001');
    }

    init() {
        this.controls = this.input.keyboard.createCursorKeys();

        this.lives = 3;
        //vida do jogador, pode ser criada uma segunda vida por exemplo:
        //this.lives2 = 3;

        //controla o E para mudar de nível
        this.controls2 = this.input.keyboard.addKeys({
            'down': Phaser.Input.Keyboard.KeyCodes.E});
    }

    create() {
        //local para adicionar imagens e controlar a posição, exemplo:
        //this.add.image(0, 0, 'background').setOrigin(0).setScale(0.6);
        //o 'background' é o nome dado á imagem na LoadScene

        //sistema de vida por texto, Fonte, Tamanho...
        this.lives2Text = this.add.text(
            100, 15,
            `${this.lives}`,
            {
                fontFamily: 'Arial',
                fontSize: 50,
                color: '#ffff',
            }
        );

        //para adicionar uma segunda vida fazer copy paste disto e mudar:
        //this.livesText = this.add... para:
        //this.lives2Text = this... como está em cima (linha 14)

        this.player = new Player(
            this,
            this.game.config.width * 0.7,
            this.game.config.height,
            'player', 1
            //o "1" serve para descrever o frame em que começa da spritesheet
            //se for pgn é igual mete 1 na mesma
        ).setScale(0.2);

        this.balls = new Balls(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'balls',
        );

        //este código serve para que os colliders com a bola funcionem, caso tenhas uma em cena
        this.physics.add.collider(this.player, this.balls, this.PlayerHitBalls2, null, this);
    }


    //representa as vidas do jogador, caso elas acabem o nível recomeça automaticamente
    PlayerHitBalls2(){
        if(this.lives2 == 1){
            this.scene.restart();
        }
    }

    update(time) {
        //update necessário senão nao funciona
        this.player.update(time);
        this.balls.update(time);
        this.lives2Text.text = `${this.lives2}`;
        //a tecla E muda para a Victory
        if (this.controls2.down.isDown)
        {
            this.scene.start('victory');
        }
    }
}