class Mode
{
    constructor(){
        this.singlePlayerButtonClicked = false
        this.multiPlayerButtonClicked = false
    }

    singlePlayerSelection(){
        //form.handlePlayerButton()
        form.singlePlayerButton.mouseClicked(
            this.singlePlayerButtonClicked = true
        )
    }

    multiPlayerSelection(){
        form.multiPlayerButton.mouseClicked(
            this.multiPlayerButtonClicked = true
        )
    }

    update(mode){
        database.ref("/").update({playerMode:mode})
    }
}