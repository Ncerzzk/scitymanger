var opener = document.getElementById("addOpener");
var editBtn = document.getElementsByClassName("indexNameEdit");
var indexNameOpener = document.getElementById("indexNameAdd");
var foodNameOpener = document.getElementById("foodNameAdd");
var eventNameOpener = document.getElementById("eventNameAdd");
var editStatus = 0;

function navBack(){
  history.go(-1);
}


if(opener != null){
  opener.addEventListener("click", function(){
    document.getElementById("addColumns").style.display = "block";
    this.style.display="none";
  });
}

if(editBtn != null){
  for(i=0;i<editBtn.length;i++){
    editBtn[i].addEventListener("click", function(){

      if(editStatus == 0){
        this.previousSibling.firstChild.style.display = "none";
        this.previousSibling.lastChild.style.display = "block";
        this.previousSibling.style.height="auto";
        this.previousSibling.style.cursor="default";
        this.style.display="none";
        editStatus = 1;
      }else{
        this.previousSibling.firstChild.style.display = "block";
        this.previousSibling.lastChild.style.display = "none";
        this.previousSibling.style.height="50pt";
        this.previousSibling.style.cursor="pointer";
        this.style.display="block";
        editStatus = 0;
      }


    },false);
  }

}

if(indexNameOpener != null){
  indexNameOpener.addEventListener("click", function(){
    document.getElementById("indexNameAddBlock").style.display = "block";
    this.style.display="none";
  });
}

if(foodNameOpener != null){
  foodNameOpener.addEventListener("click", function(){
    document.getElementById("foodNameAddBlock").style.display = "block";
    this.style.display="none";
  });
}


if(eventNameOpener != null){
  eventNameOpener.addEventListener("click", function(){
    document.getElementById("eventNameAddBlock").style.display = "block";
    this.style.display="none";
    console.log("000");
  });
}


function alertGreen(){
  //var overlay = document.getElementById('alertOverlay');
}
