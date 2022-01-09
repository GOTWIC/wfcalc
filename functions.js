var primary, secondary, melee;

const slots = ["primary", "secondary", "melee"];

function toggle(slot){



  if(slot == "primary"){
    if(primary == 0){
      document.getElementById(slot).style.display="none";
      document.getElementById("slotbtn").innerHTML = "Select Slot";
      return primary = 1;
    }

    else{
      document.getElementById(slot).style.display="inline-block";
      singleActive(slots, slot);
      document.getElementById("slotbtn").innerHTML = "Primary";
      return primary = 0, secondary = 1, melee = 1;
    }
  }

  if(slot == "secondary"){
    if(secondary == 0){
      document.getElementById(slot).style.display="none";
      document.getElementById("slotbtn").innerHTML = "Select Slot";
      return secondary = 1;
    }

    else{
      document.getElementById(slot).style.display="inline-block";
      singleActive(slots, slot);
      document.getElementById("slotbtn").innerHTML = "Secondary";
      return secondary = 0, primary = 1, melee = 1;
    }
  }

  if(slot == "melee"){
    if(melee == 0){
      document.getElementById(slot).style.display="none";
      document.getElementById("slotbtn").innerHTML = "Select Slot";
      return melee = 1;
    }

    else{
      document.getElementById(slot).style.display="inline-block";
      singleActive(slots, slot);
      document.getElementById("slotbtn").innerHTML = "Melee";
      return melee = 0, primary = 1, secondary = 1;
    }
  }
}

function singleActive(array, activeItem){
  temp = array.filter(e => e !== activeItem);
  for (const nonActiveItem of temp) {
    document.getElementById(nonActiveItem).style.display="none";
  }
}



function changeSlot(){
  document.getElementById("slotbtn").innerHTML = "Primary";
}
