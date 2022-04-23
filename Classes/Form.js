class Form
{
    constructor(){
        this.title = createImg("assets/IMG-5591.PNG")
        this.playButton = createButton("PLAY")
        this.settingButton = createButton("Settings")
        this.singlePlayerButton = createButton("Singleplayer")
        this.multiPlayerButton = createButton("Multiplayer")
    }

    position(){
        this.title.position(width/2-200,10)
        //this.title.class("title")
        this.title.size(600,600)
        this.playButton.position(width/2-40, height/2-20);
        this.playButton.class("customButton");
        this.settingButton.position(width/2-40, height/2+60);
        this.settingButton.class("customButton");
    }

    playerMode(){
        this.singlePlayerButton.position(width/2-40, height/2-20);
        this.singlePlayerButton.class("customButton");
        this.multiplayerButton.position(width/2-40, height/2+60);
        this.multiplayerButton.class("customButton");
    }

    handlePlayButton(){
        this.playButton.mouseClicked(()=>{
            this.playerMode();
        })
    }

    display(){
        this.position();
    }
}