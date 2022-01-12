var primary, secondary, melee;
var rifle;
var mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8;

const slots = ["primary", "secondary", "melee"];


window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
}, false);

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

  changeButtonName("typeBTN", weaponType.innerHTML);

  // Implement later!!!
  // resetTypeDropdownContents();

  var validElements = document.getElementsByClassName(weaponType.innerHTML.replace(/ /g, "_").toLowerCase());
  for(var i = 0; i < validElements.length; i++) {
    validElements[i].style.display="block";
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

function drop(ev, modSlotID) {
  var modSlot = document.getElementById(modSlotID);

  var data = ev.dataTransfer.getData("text");

  if(modSlot.childNodes.length == 0){
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    switch(modSlotID) {
      case "mod1":
        mod1 = document.getElementById(data).id;
        break;
      case "mod2":
        mod2 = document.getElementById(data).id;
        break;
      case "mod3":
        mod3 = document.getElementById(data).id;
        break;
      case "mod4":
        mod4 = document.getElementById(data).id;
        break;
      case "mod5":
        mod5 = document.getElementById(data).id;
        break;
      case "mod6":
        mod6 = document.getElementById(data).id;
        break;
      case "mod7":
        mod7 = document.getElementById(data).id;
        break;
      case "mod8":
        mod8 = document.getElementById(data).id;
        break;
    }
  }


  /*
    if(modSlot.childNodes.length > 0){


      var modID = modSlot.childNodes[0].id;
      document.getElementById("mod-source").appendChild(document.getElementById(modID));


      ev.preventDefault();

      switch(modSlotID) {
        case "mod1":
          document.getElementById("mod-source").appendChild(document.getElementById(mod1));
          insertMod(ev);
          break;
        case "mod2":
          document.getElementById("mod-source").appendChild(document.getElementById(mod2));
          break;
        case "mod3":
          document.getElementById("mod-source").appendChild(document.getElementById(mod3));
          break;
        case "mod4":
          document.getElementById("mod-source").appendChild(document.getElementById(mod4));
          break;
        case "mod5":
          document.getElementById("mod-source").appendChild(document.getElementById(mod5));
          break;
        case "mod6":
          document.getElementById("mod-source").appendChild(document.getElementById(mod6));
          break;
        case "mod7":
          document.getElementById("mod-source").appendChild(document.getElementById(mod7));
          break;
        case "mod8":
          document.getElementById("mod-source").appendChild(document.getElementById(mod8));
          break;
      }

    }
  */

}



function removeMods(){
  for(let i = 1; i < 9; i++) {
    var mod = 'mod' + i.toString();
    if(document.getElementById(mod).childNodes.length > 0){
      var modID = document.getElementById(mod).childNodes[0].id;
      document.getElementById("mod-source").appendChild(document.getElementById(modID));
    }
  }
}


function modActions(mod){
  if(mod.parentElement.id == "mod-source"){
    for(let i = 1; i < 9; i++) {
      var modSlot = 'mod' + i.toString();

      if(document.getElementById(modSlot).childNodes.length == 0){
        document.getElementById(modSlot).appendChild(mod);
        document.getElementById('test').innerHTML = modSlot;

        break;
      }
    }
  }

  else if(mod.parentElement.id != "mod-source"){
    document.getElementById("mod-source").appendChild(mod);
  }
}



function openModTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
