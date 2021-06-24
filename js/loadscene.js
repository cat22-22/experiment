export class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');
    }

    preload() {
        this.load.image('background', '/images/bg5.png');
        this.load.image('balls', './ball/zero.png');
        //fazer export de TODAS as imagens que vao ser necessárias para o jogo, exemplo:
        //this.load.image('nome_que_queres_dar', '/pasta/nome_da_imagem.png');

        this.load.spritesheet('player', 'player/ghost2.png', {
            frameWidth: 400,
            frameHeigh: 400,
        })
        //igual as imagens acima
        //this.load.spritesheet('nome_que_queres_dar', 'pasta/nome_da_sprite.png', {
        //frameWidth: tamanho do frame,
        //frameHeigh: tamanho do frame,
        //})
    }
    create() {
        //faz load da primeira cena do jogo que neste caso é o MainMenu
        this.scene.start('MainMenu');

        //para criar animações
        this.createAnimations();
    }

    createAnimations() {
        this.createAnimations.create({
            key: 'run',
            //'run' é o nome da animação que lhe queres dar
            frames: this.createAnimations.generateFrameNames('ghost2.png', {
                
            }),
            //'ghost2.png' estas a chamar a imagem que meteste no preload
            //no entanto esta funçao nao fucnionou comigo devo me ter enganado ent se conseguires
            //fazer com que funcione nice
            //ela pode existir na mesma sem estar comentada porque nao intrefere
            frameRate: 1,
            yoyo: true,
            repeat: -1
        });
    }
}



