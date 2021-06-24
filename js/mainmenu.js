export class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    init(){
        //no init ficam sempre os controlos
        //mudar de nível com tecla E
        this.controls2 = this.input.keyboard.addKeys({
            'down' : Phaser.Input.Keyboard.KeyCodes.E});
    }

    create(){
        //adicionar imagens carregadas na loadscene na preload(), exemplo:
        //this.add.image(0, 0, 'nome_dada_a_imagem).setOrigin(0).setScale(0.6);
        //os (0, 0, ...) servem para estabalecer a posição/localizaçao da imagem
    }

    update(time) {
        //update necessário senão nao funciona
        //a tecla E muda para a cena Level001
        if (this.controls2.down.isDown)
        {
            this.scene.start('Level001');
        }
    }
}

//esta scene é simplesmente visual como a da Vistory, pode ser feito Copy_Paste~
//CUIDADO com o nome das imagens, nao te esqueças de as mudar de copiares