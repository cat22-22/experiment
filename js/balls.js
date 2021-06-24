export class Balls extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.initialFrame = frame;
        this.setCollideWorldBounds(true);
        this.setScale(0.4);
        this.setBounce(1,1);
        this.initial_velocity = {
            min: {
                x: -1000,
                y: -1000,
            },
            max: {
                x: 500,
                y: -50,
            }
        }
        this.setVelocity(
            Phaser.Math.Between(
                this.initial_velocity.min.x,
                this.initial_velocity.max.x
        ),
            Phaser.Math.Between(
                this.initial_velocity.min.y,
                this.initial_velocity.max.y
            )
        );
    }
}

//caso exista algo relativamente parecido com este codigo nao tem muito que te consiga dizer porque
//eu mesma nao percebo o que é suposto ser feito aqui só sei que serve para criar uma bola que se mexe