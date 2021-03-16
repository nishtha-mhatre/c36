/*
1. read/get the number of players --> readCount()/getCount()
2. update the number of players --> update(count)
3. update the name of the players ==> updateName(name)
*/
class Player{
    constructor(){

    }

    getCount(){
         //create a reference using database.ref() inside the variable playerCountRef
        var playerCountRef = database.ref('playerCount');

         //create a listener to listen to the changes -->.on()
        playerCountRef.on("value", function (data){

       //to store the listened data inside the playerCount variable
        playerCount=data.val();
        })
         }
    
    update(count){
    datadase.ref('/').update({
        playerCount: count
    })
    }
    updateName(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }
}