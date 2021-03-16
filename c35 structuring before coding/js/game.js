/*
1. read/get the gameState --> getState()/ readState()
2. update the gameState in the database --> update(state)
3. go to the wait state till all the players have logged in --> wait()
*/

class Game{

    constructor(){

    }

    getState(){
        //create a reference using database.ref() inside the variable gameStateRef
        var gameStateRef = database.ref('gameState');

        //create a listener to listen to the changes -->.on()
        gameStateRef.on("value", function (data){

        //to store the listened data inside the gameState variable
        gameState = data.val();
        })
    }

    update(state){
        //refer to the entire database ('/') and update the gameState
        database.ref('/').update({
            gameState: state
        })
    }

    wait(){
        //what happens in the wait state (gameState = 0)
        if(gameState === 0){
            //a new player object will be created for the Player class --> objectName = new className()
            player = new Player();

            //the no. of players should be read/get
            player.getCount();

            //a new form object created from the Form class
            form= new Form();

            //display the form
            form.displayTheForm();

        }
    }
}