  const search = document.querySelector("#searchBar");
  const list = document.querySelector("#list");

  search.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const items = list.getElementsByTagName("li");
    Array.from(items).forEach(function(items){
      const name = items.firstElementChild.textContent;
      if(name.toLowerCase().indexOf(searchString) != -1) {
        items.style.display = "block";
      }
      else{
        items.style.display = "none";
      }
    })
  })

