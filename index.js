var numberofbutton = document.querySelectorAll(".drum").length;

for(var i=0; i<numberofbutton ;i++ )
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttoninnerhtml = this.innerHTML;

      makesound(buttoninnerhtml);

      //buttonanimation(buttoninnerhtml);
  });

}

document.addEventListener("keypress", function(event){
makesound (event.key);

//buttonanimation(event.key);
})

function makesound(key)
{
  switch (key) {
    case "w":
    var tom1 = new Audio('tom-1.mp3');
    tom1.play();
      break;

      case "a":
      var tom2 = new Audio('tom-2.mp3');
      tom2.play();
      break;

      case "s":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
        break;

      case "d":
        var tom4 = new Audio('tom-4.mp3');
        tom4.play();
        break;

      case "j":
        var  snare= new Audio('snare.mp3');
        snare.play();
          break;

       case "k":
       var  sn= new Audio('kick-bass.mp3');
       sn.play();
         break;

         case "l":
         var crash = new Audio('crash.mp3');
         crash.play();
           break;


    default:

  }
}


/*function buttonanimation(currentkey){
  var activebutton = document.querySelector("." + currentkey);
  activebutton.classlist.add("pressed");

  setTimeout(funtion() {
  activebutton.classlist.remove("pressed");
} , 100);
}





/*var audio = new Audio('tom-1.mp3');
audio.play();*/
