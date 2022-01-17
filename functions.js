var primary, secondary, melee;
var rifle;
var mod1 = "", mod2 = "", mod3 = "", mod4 = "", mod5 = "", mod6 = "", mod7 = "", mod8 = "";
var fr = 6, ms = 1, cd = 1.6, dmg = 58;
var split_chamber = false, vital_sense = false, vile_acceleration = false;

const slots = ["primary", "secondary", "melee"];

var mod_dict = {
  "bladed_rounds": {
    "type": "rifle",
    "subtype": "normal",
    "img": "mods/BladedRounds.png",
    "slotted": 0,
  },
  "critical_delay": {
    "type": "rifle",
    "subtype": "normal",
    "img": "mods/CriticalDelay.png",
    "slotted": 0,
  },
  "heavy_caliber": {
    "type": "rifle",
    "subtype": "normal",
    "img": "mods/HeavyCaliber.png",
    "slotted": 0,
  },
  "hellfire": {
    "type": "rifle",
    "subtype": "normal",
    "img": "mods/Hellfire.png",
    "slotted": 0,
  },
  "infected_clip": {
    "type": "rifle",
    "subtype": "normal",
    "img": "mods/InfectedClip.png",
    "slotted": 0,
  },
  "internal_bleeding": {
    "type": "rifle",
    "subtype": "normal",
    "img": "mods/InternalBleeding.png",
    "slotted": 0,
  },
  "serration": {
    "type": "rifle",
    "subtype": "normal",
    "img": "mods/Serration.png",
    "slotted": 0,
  },
  "split_chamber": {
    "type": "rifle",
    "subtype": "normal",
    "img": "mods/SplitChamber.png",
    "slotted": 0,
  },
  "stormbringer": {
    "type": "rifle",
    "subtype": "normal",
    "img": "mods/Stormbringer.png",
    "slotted": 0,
  },
  "vile_acceleration": {
    "type": "rifle",
    "subtype": "normal",
    "img": "mods/VileAcceleration.png",
    "slotted": 0,
  },
  "vital_sense": {
    "type": "rifle",
    "subtype": "normal",
    "img": "mods/VitalSense.png",
    "slotted": 0,
  },
  "galvanized_aptitude": {
    "type": "rifle",
    "subtype": "galvanized",
    "img": "mods/GalvanizedAptitude.png",
    "slotted": 0,
  },
  "galvanized_chamber": {
    "type": "rifle",
    "subtype": "galvanized",
    "img": "mods/GalvanizedChamber.png",
    "slotted": 0,
  },
  "galvanized_scope": {
    "type": "rifle",
    "subtype": "galvanized",
    "img": "mods/GalvanizedScope.png",
    "slotted": 0,
  },

  "primed_bane_of_corpus": {
    "type": "rifle",
    "subtype": "primed",
    "img": "mods/PrimedBaneOfCorpus.png",
    "slotted": 0,
  },
  "primed_bane_of_corrupted": {
    "type": "rifle",
    "subtype": "primed",
    "img": "mods/PrimedBaneOfCorrupted.png",
    "slotted": 0,
  },
  "primed_bane_of_grineer": {
    "type": "rifle",
    "subtype": "primed",
    "img": "mods/PrimedBaneOfGrineer.png",
    "slotted": 0,
  },
  "primed_bane_of_infested": {
    "type": "rifle",
    "subtype": "primed",
    "img": "mods/PrimedBaneOfInfested.png",
    "slotted": 0,
  },
  "primed_cryo_rounds": {
    "type": "rifle",
    "subtype": "primed",
    "img": "mods/PrimedCryoRounds.png",
    "slotted": 0,
  },
  "primed_fast_hands": {
    "type": "rifle",
    "subtype": "primed",
    "img": "mods/PrimedFastHands.png",
    "slotted": 0,
  },
  "primed_firestorm": {
    "type": "rifle",
    "subtype": "primed",
    "img": "mods/PrimedFirestorm.png",
    "slotted": 0,
  },
  "primed_magazine_warp": {
    "type": "rifle",
    "subtype": "primed",
    "img": "mods/PrimedMagazineWarp.png",
    "slotted": 0,
  },
  "primed_rifle_ammo_mutation": {
    "type": "rifle",
    "subtype": "primed",
    "img": "mods/PrimedRifleAmmoMutation.png",
    "slotted": 0,
  },
  "primed_shred": {
    "type": "rifle",
    "subtype": "primed",
    "img": "mods/PrimedShred.png",
    "slotted": 0,
  },

}


function generateMods(){
  for (var key in mod_dict) {
    generateMod(key);
  }
}

function generateMod(modName){
  var new_mod = document.getElementById("master_mod").cloneNode(true);
  new_mod.setAttribute("src", mod_dict[modName]["img"]);
  new_mod.setAttribute("id", modName);
  if(mod_dict[modName]["subtype"] == "normal"){
    document.getElementById("normal_mod_source").appendChild(new_mod);
  }
  else if(mod_dict[modName]["subtype"] == "primed"){
    document.getElementById("primed_mod_source").appendChild(new_mod);
  }
  else if(mod_dict[modName]["subtype"] == "galvanized"){
    new_mod.setAttribute("width", 145);
    new_mod.setAttribute("height", 188);
    document.getElementById("galvanzied_mod_source").appendChild(new_mod);
  }

}


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


  changeSingleStatVar(modID);

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

      if(modID.includes("prime")){
        document.getElementById("primed-mod-source").appendChild(document.getElementById(modID));
      }

      else if(modID.includes("galvanized")){
        document.getElementById("galvanzied-mod-source").appendChild(document.getElementById(modID));
      }

      else{
        document.getElementById("normal-mod-source").appendChild(document.getElementById(modID));
      }

      mod1 = ""; mod2 = ""; mod3 = ""; mod4 = ""; mod5 = ""; mod6 = ""; mod7 = ""; mod8 = "";
    }
  }
}

function modActions(mod){
  if(mod.parentElement.id == "normal_mod_source" || mod.parentElement.id == "primed_mod_source" || mod.parentElement.id == "galvanzied_mod_source"){
    for(let i = 1; i < 9; i++) {
      var modSlotID = 'mod' + i.toString();

      if(document.getElementById(modSlotID).childNodes.length == 0){
        document.getElementById(modSlotID).appendChild(mod);
        setModData(modSlotID, mod.id);
        break;
      }
    }
  }

  else if(mod.parentElement.id != "normal_mod_source" || mod.parentElement.id != "primed_mod_source" || mod.parentElement.id != "galvanzied_mod_source"){
    if(mod_dict[mod.id]["subtype"] == "normal"){
      document.getElementById("normal_mod_source").appendChild(mod);
    }

    else if(mod_dict[mod.id]["subtype"] == "primed"){
      document.getElementById("primed_mod_source").appendChild(mod);
    }

    else if(mod_dict[mod.id]["subtype"] == "galvanized"){
      document.getElementById("galvanzied_mod_source").appendChild(mod);
    }

    changeSingleStatVar(mod.id);

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

function changeSingleStatVar(modID){
  //eval(eval("modID") + " = " + !eval(eval("modID")));
  mod_dict[modID]["slotted"] = !(mod_dict[modID]["slotted"]);
  updateStats();
}

function updateStats(){
  document.getElementById("multishot").innerHTML = (ms * (1.0 + 0.9 * mod_dict["split_chamber"]["slotted"])).toFixed(2);
  document.getElementById("fire_rate").innerHTML = (fr * (1.0 + 0.9 * mod_dict["vile_acceleration"]["slotted"])).toFixed(2);
  document.getElementById("total_damage").innerHTML = (dmg * (1.0 + -.15 * mod_dict["vile_acceleration"]["slotted"])).toFixed(2);
  document.getElementById("critical_damage").innerHTML = (cd * (1.0 + 1.2 * mod_dict["vital_sense"]["slotted"])).toFixed(2);
}
