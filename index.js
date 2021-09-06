var i;
i=0;
while(i<document.querySelectorAll(".drum").length)
{
document.querySelectorAll("button")[i].addEventListener("click",function()
{
     var innerButton=this.innerHTML;
     makesound(innerButton);
     addanimi(innerButton);
});
i++;
};
function makesound(key)
{
switch(key)
{
  case "w":
  var a1=new Audio("sounds/tom-1.mp3");
  a1.play();
  break;
  case "a":
  var a2=new Audio("sounds/tom-2.mp3");
  a2.play();
  break;
  case "s":
  var a3=new Audio("sounds/tom-3.mp3");
  a3.play();
  break;
  case "d":
  var a4=new Audio("sounds/tom-4.mp3");
  a4.play();
  break;
  case "j":
  var a5=new Audio("sounds/crash.mp3");
  a5.play();
  break;

  case "k":
  var a6=new Audio("sounds/kick-bass.mp3");
  a6.play();
  break;
  case "l":
  var a7=new Audio("sounds/snare.mp3");
  a7.play();
  break;
  default:
  console.log("None");



}
}
document.addEventListener("keypress",function(event){
   makesound(event.key);
   addanimi(event.key);
});
function addanimi(currentkey)
{
  var c=document.querySelector("."+currentkey);
  c.classList.add("pressed");
  setTimeout(function()
  {
    document.querySelector("."+currentkey).classList.remove("pressed");
  },100)
};
