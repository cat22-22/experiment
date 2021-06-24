export class Victory extends Phaser.Scene {
    constructor() {
        super('victory');    
    }

    init(){
        //mudar de nível com tecla E
        this.controls2 = this.input.keyboard.addKeys({ 
            'down': Phaser.Input.Keyboard.KeyCodes.E});
    }

    create(){
        //adicionar imagens carregadas na loadscene no Create, exemplo:
        //this.add.image(0, 0, 'nome_da_imagem).setOrigin(0).setScale(0.6);
    }

    update(time){
        //a tecla E muda para o MainMenu
        if (this.controls2.down.isDown)
        {
            this.scene.start('MainMenu');
        }
    }
}

