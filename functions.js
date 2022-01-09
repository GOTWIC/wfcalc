var primary, secondary, melee;

const slots = ["primary", "secondary", "melee"];

function toggle(slot){

  if(slot == "primary"){
    if(primary == 0){
      document.getElementById(slot).style.display="none";
      changeButtonName("slotBTN", "Select Slot");
      return primary = 1;
    }

    else{
      document.getElementById(slot).style.display="inline-block";
      singleActive(slots, slot);
      changeButtonName("slotBTN", "Primary");
      return primary = 0, secondary = 1, melee = 1;
    }
  }

  if(slot == "secondary"){
    if(secondary == 0){
      document.getElementById(slot).style.display="none";
      changeButtonName("slotBTN", "Select Slot");
      return secondary = 1;
    }

    else{
      document.getElementById(slot).style.display="inline-block";
      singleActive(slots, slot);
      changeButtonName("slotBTN", "Secondary");
      return secondary = 0, primary = 1, melee = 1;
    }
  }

  if(slot == "melee"){
    if(melee == 0){
      document.getElementById(slot).style.display="none";
      changeButtonName("slotBTN", "Select Slot");
      return melee = 1;
    }

    else{
      document.getElementById(slot).style.display="inline-block"  ;
      singleActive(slots, slot);
      changeButtonName("slotBTN", "Melee");
      return melee = 0, primary = 1, secondary = 1;
    }
  }
}





function loadModEditor(slotBTN, weapon){
  changeButtonName(slotBTN, toTitleCase(weapon.replace(/_/g, " ")));
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
