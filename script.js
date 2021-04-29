

// // Item images 
// fetch("https://api.steamapis.com/image/items/730/")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .then(console.log("Test" + response));

   
fetch('https://api.steamapis.com/image/items/730/')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    document.querySelector("#test").innerHTML = myJson 
    console.log(myJson)
  });


  // document.querySelector("form").addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   let inputData = document.querySelector("#inputData").value 
  //   let encode = encodeURI(inputData)
  //   fetch("https://api.steamapis.com/image/items/730/" + encode)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))});



//   fetch('https://steamcommunity.com/market/search/render/?search_descriptions=0&sort_column=default&sort_dir=desc&appid=578080&norender=1&count=500')
//   .then(response => response.json())
//   .then(data => console.log(data));

    var a = document.getElementById("selectPistol");
    var b = document.getElementById("selectSMG");
    var c = document.getElementById("selectHeavy");
    var d = document.getElementById("selectRifle");
    var e = document.getElementById("quality");

    a.setAttribute("hidden", "");
    b.setAttribute("hidden", "");
    c.setAttribute("hidden", "");
    d.setAttribute("hidden", "");
    e.setAttribute("hidden", "");

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
      e.removeAttribute("hidden", "");
    }
    
      else if(weaponCathegory == 2){
        a.setAttribute("hidden", "");
        b.removeAttribute("hidden", "");
        c.setAttribute("hidden", "");
        d.setAttribute("hidden", "");
        e.removeAttribute("hidden", "");
    }
    
      else if(weaponCathegory == 3){
        a.setAttribute("hidden", "");
        b.setAttribute("hidden", "");
        c.removeAttribute("hidden", "");
        d.setAttribute("hidden", "");
        e.removeAttribute("hidden", "");
    }
    
    else if(weaponCathegory == 4){
      a.setAttribute("hidden", "");
      b.setAttribute("hidden", "");
      c.setAttribute("hidden", "");
      d.removeAttribute("hidden", "");
      e.removeAttribute("hidden", "");
    }
  }
}
 


    

  