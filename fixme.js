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
var aDamage = "Conans SMASHES Gandolf with his " + caWeapons + "for " + 50;
var bowDamage = cbWeapons + 40;
var arrowDamage = cbaWeapons + 10;
var staffDamage = "Gandolf hits Conan with his " + gsWeapons + " for " + 5;
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
    console.log(name);
    var result = (wizard + warrior);
    return result;

}
listCharacters(wizard);
listCharacters(warrior);
listCharacters(wizard);
listCharacters(gsWeapons);
listCharacters(gdWeapons);
listCharacters(warrior);
listCharacters(caWeapons);
listCharacters(cbWeapons);
listCharacters(cbaWeapons);
listCharacters(warrior);
listCharacters(aDamage);
listCharacters(wizard);
listCharacters(staffDamage);
/*This function should list all weapons for the character
Characters:                                                                                                                                                                                                  
 * Gandalf                                                                                                                                                                                                   
 * Conan                                                                                                                                                                                                     
Listing weapons for Gandalf:                                                                                                                                                                                 
 * Staff                                                                                                                                                                                                     
 * Dagger                                                                                                                                                                                                    
Listing weapons for Conan:                                                                                                                                                                                   
 * Axe                                                                                                                                                                                                       
 * Bow                                                                                                                                                                                                       
Conan attacks with his axe                                                                                                                                                                                   
He hits for 17 damage                                                                                                                                                                                        
Gandalf attacks with his STAFF                                                                                                                                                                               
He hits for 3 damage         
 */
function listWeapons(weapons) {

    var result2 = (cList + gList);
    return result2;


}




// This function should attack with the specified weapon
// It uses the weapon damage from the object to determine the maximum damage of this weapon
function weaponAttack(name, weapon) {
        if (onClick == "gandalf") {
            console.log(wizard);
        }
        if (onClick  == "conan"){
            console.log(warrior);
            
        }
        if (onClick  == "axe"){
            console.log(aDamage);
    }
   if (onClick == "+1 Arrows of Punishing") {
        console.log(bowDamage);
    }
    if (onClick  == "Wooden Arrwos"){
        console.log(arrowDamage)
    }
    if (onClick == "staff") {
        console.log(staffDamage);

    }
    if(onClick  == "dagger") {
        console.log(daggerDamage);

    function fight(){
        var result3= weaponAttack("")
        console.log(result3)
        return result3;
        
    }
     weaponAttack();


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
    function fightOnClick(){
        var pcode = $("#listWeapons").val();
        listCharacters(pcode);
        console.log(fight());

    }
     $(function () {
                $("#fight").on("click", fightOnClick)
                
                console.log(fight());
            });
 }}

 