var numberOfDrumButtons =document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHtml = this.buttonInnerHtml;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });

    document.addEventListener("keypress",function(event){

        makeSound(event.key);
        buttonAnimation(event.key);

    });

    function makeSound(key){
        
    }
}