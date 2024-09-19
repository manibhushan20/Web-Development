document.body.style.backgroundImage="url('guitar1.png')";


var numberOfGuitarButtons= document.querySelectorAll(".guitar-button").length;
for(var i=0;i<numberOfGuitarButtons;i++){
    document.querySelectorAll(".guitar-button")[i].addEventListener("click", function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    } );
  }


  function makeSound(key){
    switch(key) {
        case "E":
          var esounds=new Audio("sounds/1st_String_E_64kb.mp3");
          esounds.play();
          break;

        case "B":
          var bsounds=new Audio("sounds/D_64kb.mp3");
          bsounds.play();
          break;

       case "G":
          var gsounds=new Audio("sounds/3rd_String_G_64kb.mp3");
          gsounds.play();
          break;

         case "A":
            var asounds=new Audio("sounds/5th_String_A_64kb.mp3");
            asounds.play();
            break;

        case "F":
         var fsounds=new Audio("sounds/6th_String_F_64kb.mp3");
         fsounds.play();
         break;

         case "D":
         var dsounds=new Audio("sounds/4th_String_D_64kb.mp3");
         dsounds.play();
         break;

         case "C":
         var csounds=new Audio("sounds/C_64kb.mp3");
         csounds.play();
         break;

         case "Dm":
         var dmsounds=new Audio("sounds/Dm_64kb.mp3");
         dmsounds.play();
         break;

        default:
        console.log(key);
      }
  }
  



  function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 500);
  
  }
    