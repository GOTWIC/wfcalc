var primary, secondary, melee;

const slots = ["primary", "secondary", "melee"];

function loadWeaponTypes(slot){

  changeButtonName("typeBTN", "Select Type");

  if(slot == 'primary'){

    if(primary == 0){
      changeButtonName("slotBTN", toTitleCase("Select Slot"));
      return primary = 1;
    }

    else{
      changeButtonName("slotBTN", toTitleCase(slot));
      resetTypeDropdownContents();
      var validElements = document.getElementsByClassName("primaryTypes");
      for(var i = 0; i < validElements.length; i++) {
        validElements[i].style.display="block";
      }
      return primary = 0, secondary = 1, melee = 1;
    }
  }

  if(slot == 'secondary'){

    if(secondary == 0){
      changeButtonName("slotBTN", toTitleCase("Select Slot"));
      return secondary = 1;
    }

    else{
      changeButtonName("slotBTN", toTitleCase(slot));
      resetTypeDropdownContents()
      var validElements = document.getElementsByClassName("secondaryTypes");
      for(var i = 0; i < validElements.length; i++) {
        validElements[i].style.display="block";
      }
      return primary = 1, secondary = 0, melee = 1;
    }
  }

  if(slot == 'melee'){

    if(melee == 0){
      changeButtonName("slotBTN", toTitleCase("Select Slot"));
      return melee = 1;
    }

    else{
      changeButtonName("slotBTN", toTitleCase(slot));
      resetTypeDropdownContents()
      var validElements = document.getElementsByClassName("meleeTypes");
      for(var i = 0; i < validElements.length; i++) {
        validElements[i].style.display="block";
      }
      return primary = 1, secondary = 1, melee = 0;
    }
  }
}

function loadWeaponNames(weaponType){
  //changeButtonName(typeBTN, toTitleCase(weapon.replace(/_/g, " ")));
  changeButtonName("typeBTN", toTitleCase(weaponType.replace(/_/g, " ")));
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
  var invalidElements1 = document.getElementsByClassName("primaryTypes");
  var invalidElements2 = document.getElementsByClassName("secondaryTypes");
  var invalidElements3 = document.getElementsByClassName("meleeTypes");

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
