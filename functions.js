var primary, secondary, melee;
var rifle;
var mod1 = "", mod2 = "", mod3 = "", mod4 = "", mod5 = "", mod6 = "", mod7 = "", mod8 = "";

const slots = ["primary", "secondary", "melee"];

//Use the following line after an update to get information on what mods are equiped
//document.getElementById('TEST1').innerHTML = mod1 + (" ") + mod2 + (" ") + mod3 + (" ") + mod4 + (" ") + mod5 + (" ") + mod6 + (" ") + mod7 + (" ") + mod8 + (" ");

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
}, false);

function loadWeaponTypes(weaponSlot){

  changeButtonName("typeBTN", "Select Type");

  changeButtonName("nameBTN", "Select Weapon");

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

function drop(ev, modSlot) {
  if(modSlot.childNodes.length == 0){
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    setModData(modSlot.id, data);
  }
}

function setModData(modSlotID, modID) {

  cleanModData(modID);

  switch(modSlotID) {
    case "mod1":
      mod1 = modID;
      break;
    case "mod2":
      mod2 = modID;
      break;
    case "mod3":
      mod3 = modID;
      break;
    case "mod4":
      mod4 = modID;
      break;
    case "mod5":
      mod5 = modID;
      break;
    case "mod6":
      mod6 = modID;
      break;
    case "mod7":
      mod7 = modID;
      break;
    case "mod8":
      mod8 = modID;
      break;
  }
}

function cleanModData(modID){

  if(mod1 == modID){
    mod1 = "";
  }

  else if(mod2 == modID){
    mod2 = "";
  }

  else if(mod3 == modID){
    mod3 = "";
  }

  else if(mod4 == modID){
    mod4 = "";
  }

  else if(mod5 == modID){
    mod5 = "";
  }

  else if(mod6 == modID){
    mod6 = "";
  }

  else if(mod7 == modID){
    mod7 = "";
  }

  else if(mod8 == modID){
    mod8 = "";
  }

}

function removeMods(){
  for(let i = 1; i < 9; i++) {
    var mod = 'mod' + i.toString();
    if(document.getElementById(mod).childNodes.length > 0){
      var modID = document.getElementById(mod).childNodes[0].id;
      //document.getElementById("mod-source").appendChild(document.getElementById(modID));

      if(modID.includes("prime")){
        document.getElementById("primed-mod-source").appendChild(document.getElementById(modID));
      }

      else if(modID.includes("galvanized")){
        document.getElementById("galvanzied-mod-source").appendChild(document.getElementById(modID));
      }

      else{
        document.getElementById("normal-mod-source").appendChild(document.getElementById(modID));
      }
    }
  }
}

function modActions(mod){
  if(mod.parentElement.id == "normal-mod-source" || mod.parentElement.id == "primed-mod-source" || mod.parentElement.id == "galvanzied-mod-source"){
    for(let i = 1; i < 9; i++) {
      var modSlotID = 'mod' + i.toString();

      if(document.getElementById(modSlotID).childNodes.length == 0){
        document.getElementById(modSlotID).appendChild(mod);
        setModData(modSlotID, mod.id);
        break;
      }
    }
  }

  else if(mod.parentElement.id != "normal-mod-source" || mod.parentElement.id != "primed-mod-source" || mod.parentElement.id != "galvanzied-mod-source"){
    if(mod.id.includes("prime")){
      document.getElementById("primed-mod-source").appendChild(mod);
    }

    else if(mod.id.includes("galvanized")){
      document.getElementById("galvanzied-mod-source").appendChild(mod);
    }

    else{
      document.getElementById("normal-mod-source").appendChild(mod);
    }

    cleanModData(mod.id);

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
