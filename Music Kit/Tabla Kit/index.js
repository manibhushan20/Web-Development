document.body.style.backgroundImage="url('tabla5.png')"
 
var numberOfTablaButtons=document.querySelectorAll(".btn").length;
for(var i=0;i<numberOfTablaButtons;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
   buttonInnerHTML=this.innerHTML;
   makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
   });
}

function makeSound(key){
     switch(key){
          
        case "G":
            var gsound=new Audio("Audio/da_test01-82487.mp3");
            gsound.play();
            break;

        case "C":
                var csound=new Audio("Audio/da_test07-103036.mp3");
                csound.play();
                break;
    
         case "D":
              var gsound=new Audio("Audio/tabla_na-100585.mp3");
               gsound.play();
               break;

        case "E":
            var esound=new Audio("Audio/ghe_6-107142.mp3");
            esound.play();
            break;

      case "F":
          var fsound=new Audio("Audio/da_test02-82488.mp3");
          fsound.play();
         break;

         case "A":
           var asound=new Audio("Audio/da_test03-82489.mp3");
           asound.play();
         break;

        case "B":
          var bsound=new Audio("Audio/057553_tabla-loop-shuffle-4-bars-88917.mp3");
          bsound.play();
            break;
      
            default:
                console.log(key);
                break;
     }
  }

function buttonAnimation(currentKey){

  var  activeButton=document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");

   },500);
}




