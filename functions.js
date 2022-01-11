var primary, secondary, melee;
var rifle;
var mod1 = false, mod2, mod3, mod4;

const slots = ["primary", "secondary", "melee"];

function loadWeaponTypes(weaponSlot){

  changeButtonName("typeBTN", "Select Type");

  if(weaponSlot == 'primary'){

    if(primary == 0){
      changeButtonName("slotBTN", toTitleCase("Select Slot"));
      return primary = 1;
    }

    else{
      changeButtonName("slotBTN", toTitleCase(weaponSlot));
      resetTypeDropdownContents();
      var validElements = document.getElementsByClassName("primaryType");
      for(var i = 0; i < validElements.length; i++) {
        validElements[i].style.display="block";
      }
      return primary = 0, secondary = 1, melee = 1;
    }
  }

  else if(weaponSlot == 'secondary'){

    if(secondary == 0){
      changeButtonName("slotBTN", toTitleCase("Select Slot"));
      return secondary = 1;
    }

    else{
      changeButtonName("slotBTN", toTitleCase(weaponSlot));
      resetTypeDropdownContents()
      var validElements = document.getElementsByClassName("secondaryType");
      for(var i = 0; i < validElements.length; i++) {
        validElements[i].style.display="block";
      }
      return primary = 1, secondary = 0, melee = 1;
    }
  }

  else if(weaponSlot == 'melee'){

    if(melee == 0){
      changeButtonName("slotBTN", toTitleCase("Select Slot"));
      return melee = 1;
    }

    else{
      changeButtonName("slotBTN", toTitleCase(weaponSlot));
      resetTypeDropdownContents()
      var validElements = document.getElementsByClassName("meleeType");
      for(var i = 0; i < validElements.length; i++) {
        validElements[i].style.display="block";
      }
      return primary = 1, secondary = 1, melee = 0;
    }
  }
}

function loadWeaponNames(weaponType){

  changeButtonName("nameBTN", "Select Weapon");

  if(weaponType == 'rifle'){

    if(rifle == 0){
      changeButtonName("nameBTN", toTitleCase("Select Weapon"));
      return rifle = 1;
    }

    else{
      changeButtonName("typeBTN", toTitleCase(weaponType.replace(/_/g, " ")));
      //resetTypeDropdownContents();
      var validElements = document.getElementsByClassName("rifle");
      for(var i = 0; i < validElements.length; i++) {
        validElements[i].style.display="block";
      }
      return rifle = 0;
    }
  }
}

function loadWeaponStats(weapon){
  //changeButtonName(typeBTN, toTitleCase(weapon.replace(/_/g, " ")));
  changeButtonName("nameBTN", toTitleCase(weapon.replace(/_/g, " ")));
}


function singleActive(array, activeItem){
  temp = array.filter(e => e !== activeItem);
  for (const nonActiveItem of temp) {
    document.getElementById(nonActiveItem).style.display="none";
  }
}

function changeButtonName(buttonID, name){
  document.getElementById(buttonID).innerHTML = name;
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function resetTypeDropdownContents(){
  var invalidElements1 = document.getElementsByClassName("primaryType");
  var invalidElements2 = document.getElementsByClassName("secondaryType");
  var invalidElements3 = document.getElementsByClassName("meleeType");

  for(var i = 0; i < invalidElements1.length; i++) {
    invalidElements1[i].style.display="none";
  }
  for(var i = 0; i < invalidElements2.length; i++) {
    invalidElements2[i].style.display="none";
  }
  for(var i = 0; i < invalidElements3.length; i++) {
    invalidElements3[i].style.display="none";
  }
}





function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev, mod) {
  if(document.getElementById(mod).childNodes.length == 0){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    //return 0;
  }
}
