//class className --> "Form"
//input, button, element (text --> title, greeting)

class Form{

    constructor(){

    }

    displayTheForm(){          //to display the form to the players

        //create an element inside the variable "title" --> createElement(heading size)
        var title = createElement('h1');

        //mention the words for the title --> variableName.html("Text to be displayed")
        title.html("Car Racing Game");

        //to position the title --> variableName.position(x,y);
        title.position(150,10);

        //create an input inside the variable "input" --> createInput('word to be displayed')
        var input = createInput('Name');

        //position the input --> variableName.position(x,y);
        input.position(160,200);

        //create a button insode the variable "button" --> createButton('word to be displayed')
        var button = createButton('Submit');

        //position the button
        button.position(200,240);

        //create an element inside the variable "greeting"
        var greeting = createElement('h3');

          //.mousePressed() --> when button is pressed

    button.mousePressed(function(){
        //hide the input & button using the hide()
        input.hide();
        button.hide();

        //create a variable called name and store the name entered by the user--> input.value()
        var name = input.value();

        //playerCount is increased
        playerCount += 1; //playerCount = playerCount + 1

        //update the name of the player in the database
        player.updateName(name);

        //update the playerCount 
        player.update(playerCount);

        //greeting the player with the word "Hello"
        greeting.html("Hello " + name)

        //position the greeting
        greeting.position(130,160);
    })

    }

  

}