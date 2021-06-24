export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        //collider para o player nao cair do mapa i guess
        this.setCollideWorldBounds(true);
        this.setScale(0.9);

        //velocidade do joador
        this.horizontal_velocity = 300;

        //input das teclas das SETAS para mexer o personagem
        this.controls = scene.input.keyboard.createCursorKeys();

        //input das TECLAS A e D para mexer o personagem
        this.esquerda = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.direita = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        //dependendo se queres as setas ou as outras teclas nao te esqueças de deixar
        //o codigo oposto comentado caso tentes usar ambos
    }

    update(time) {
            //ESQUERDA

        //colocar player a andar e a virar quando anda com as SETAS
        if(this.controls.left.isDown) {
            this.setVelocityX(-this.horizontal_velocity);
            this.flipX = true;

            //para animações no entanto este código pareçe nao funcionar
            //if(!this.anims.isPlaying)
            //{
                //this.anims.play('run');
            //}
        } 

        //colocar player a andar e a virar quando anda com as TECLAS A e D
        if(this.esquerda.isDown) {
            this.setVelocityX(-this.horizontal_velocity);
            this.flipX = true;
        }

            //DIREITA

        //colocar player a andar e a virar quando anda com as SETAS
        else if (this.controls.right.isDown) {
            this.setVelocityX(this.horizontal_velocity);
            this.flipX = false;

            //o codigo das animaçoes pode ser colocado aqui tambem caso funcione
        } 

        //colocar player a andar e a virar quando anda com as TECLAS A e D
        else if (this.direita.isDown) {
            this.setVelocityX(this.horizontal_velocity);
            this.flipX = false;
        }
        
        else  {
            //velocidade em que anda?? tem o mesma na linha 12, experimenta mexer a ver qual funciona cause idk
            this.setVelocityX(1);
            
        }
    }
}