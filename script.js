

// Item images 
// fetch('https://api.steamapis.com/image/items/730')
//   .then(response => response.json())
//   .then(data => console.log(data));



//   fetch('https://steamcommunity.com/market/search/render/?search_descriptions=0&sort_column=default&sort_dir=desc&appid=578080&norender=1&count=500')
//   .then(response => response.json())
//   .then(data => console.log(data));

    var a = document.getElementById("selectPistol");
    var b = document.getElementById("selectSMG");
    var c = document.getElementById("selectHeavy");
    var d = document.getElementById("selectRifle");

    a.setAttribute("hidden", "");
    b.setAttribute("hidden", "");
    c.setAttribute("hidden", "");
    d.setAttribute("hidden", "");

function checkValue (){
  let weaponCathegory = document.getElementById("selectType").value;
  displayWeapons();
  function displayWeapons(){
    var a = document.getElementById("selectPistol");
    var b = document.getElementById("selectSMG");
    var c = document.getElementById("selectHeavy");
    var d = document.getElementById("selectRifle");
  
    if(weaponCathegory == 1){
      a.removeAttribute("hidden", "");
      b.setAttribute("hidden", "");
      c.setAttribute("hidden", "");
      d.setAttribute("hidden", "");
    }
    
      else if(weaponCathegory == 2){
        a.setAttribute("hidden", "");
        b.removeAttribute("hidden", "");
        c.setAttribute("hidden", "");
        d.setAttribute("hidden", "");
    }
    
      else if(weaponCathegory == 3){
        a.setAttribute("hidden", "");
        b.setAttribute("hidden", "");
        c.removeAttribute("hidden", "");
        d.setAttribute("hidden", "");
    }
    
    else if(weaponCathegory == 4){
      a.setAttribute("hidden", "");
      b.setAttribute("hidden", "");
      c.setAttribute("hidden", "");
      d.removeAttribute("hidden", "");
    }
  }
  return weaponCathegory;
}
 
 




// var a = document.getElementById("selectPistol");
// if (a.style.display === "none") {
//   a.style.display = "block";
// } else {
//   a.style.display = "none";
// }

//   var b = document.getElementById("selectSMG");
//   if (b.style.display === "none") {
//     b.style.display = "block";
//   } else {
//     b.style.display = "none";
//   }

//   var c = document.getElementById("selectHeavy");
//   if (c.style.display === "none") {
//     c.style.display = "block";
//   } else {
//     c.style.display = "none";
//   }

//   var d = document.getElementById("selectRifle");
//   if (d.style.display === "none") {
//     d.style.display = "block";
//   } else {
//     d.style.display = "none";
//   }


    

  