var primary, secondary, melee;

const slots = ["primary", "secondary", "melee"];

function toggle(slot){

  if(slot == "primary"){
    if(primary == 0){
      document.getElementById(slot).style.display="none";
      return primary = 1;
    }

    else{
      document.getElementById(slot).style.display="inline";
      singleActive(slots, slot);
      return primary = 0;
    }
  }

  if(slot == "secondary"){
    if(secondary == 0){
      document.getElementById(slot).style.display="none";
      return secondary = 1;
    }

    else{
      document.getElementById(slot).style.display="inline";
      singleActive(slots, slot);
      return primary = 0;
    }
  }

  if(slot == "melee"){
    if(melee == 0){
      document.getElementById(slot).style.display="none";
      return melee = 1;
    }

    else{
      document.getElementById(slot).style.display="inline";
      singleActive(slots, slot);
      return melee = 0;
    }
  }


}

function singleActive(array, activeItem){
  temp = array.filter(e => e !== activeItem);
  for (const nonActiveItem of temp) {
    document.getElementById(nonActiveItem).style.display="none";
  }
}
