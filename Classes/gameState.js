class Gamestate
{
    constructor(){

    }

    update(state){
        database.ref("/").update({gameState:state})
    }
}