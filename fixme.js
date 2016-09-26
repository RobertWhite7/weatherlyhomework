// You will use this Object for the answers
// DO NOT CHANGE THIS SECTION

var gsWeapons = "staff";
var gdWeapons = "dagger";
var caWeapons = "axe";
var cbWeapons = "+1 Arrows of Punishing!";
var cbaWeapons = "wooden arrow";
var gList = ("Gandalf" + gsWeapons + gdWeapons);
var cList = ("Conan" + caWeapons + cbWeapons);
var wizard = "Gandalf";
var warrior = "Conan";
var aDamage = caWeapons + 50;
var bowDamage = cbWeapons + 40;
var arrowDamage = cbaWeapons + 10;
var staffDamage = gsWeapons + 5;
var daggerDamage = gsWeapons + 1;


var adventuringParty = {
    wizard: {
        name: "Gandalf",
        class: "Wizard",
        health: 43,
        mana: 248,
        weapons: [
            { name: "Staff", damage: 5 },
            { name: "Dagger", damage: 1 }
        ]
    },
    warrior: {
        name: "Conan",
        class: "Warrior",
        health: 206,
        mana: 0,
        weapons: [
            { name: "Axe", damage: 50 },
            {
                name: "Bow", arrow: [
                    { name: "+1 Arrows of Punishing", damage: 40, qty: 3 },
                    { name: "Wooden Arrows", damage: 10, qty: 4 }
                ]
            }
        ]
    }
}

// MAKE CHANGES AFTER THIS

// This function lists all characters in the party
function listCharacters(name) {


    var result = (wizard + warrior);
    return result;

}
// This function should list all weapons for the character
function listWeapons(weapon) {

    var result2 = (cList + gList);
    return result2;


}


// This function should attack with the specified weapon
// It uses the weapon damage from the object to determine the maximum damage of this weapon
function weaponAttack(name, weapon) {
        if (name == "gandalf") {
            console.log(wizard);
        }
        if (name == "conan"){
            console.log(warrior);
            
        }
        if (weapon == "axe"){
            console.log(aDamage);
    }
   if (weapon == "+1 Arrows of Punishing") {
        console.log(bowDamage);
    }
    if (weapon == "Wooden Arrwos"){
        console.log(arrowDamage)
    }
    if (weapon== "staff") {
        console.log(staffDamage);

    }
    if(weapon == "dagger") {
        console.log(daggerDamage);

    function fight(){
        var result3= weaponAttack("axe")
        console.log(result3)
        return result3;
    }


    function doesItWork() {
        var workPlease = listCharacters(adventuringParty);
        console.log(workPlease);
        return workPlease;
        
    
    }
  
    function doesItWorkk() {
        var workPleasee = listWeapons(adventuringParty);
        console.log(workPleasee);
        return workPleasee;
    }
   
 }}
 