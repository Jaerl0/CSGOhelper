
// Item images 
fetch('https://api.steamapis.com/image/items/730')
  .then(response => response.json())
  .then(data => console.log(data));


// sssss

  // fetch('https://api.steamapis.com/market/item/730/{ market_hash_name }?api_key={ YourSecretAPIKey }')
  // .then(response => response.json())
  // .then(data => console.log(data));

  fetch('https://steamcommunity.com/market/search/render/?search_descriptions=0&sort_column=default&sort_dir=desc&appid=578080&norender=1&count=500')
  .then(response => response.json())
  .then(data => console.log(data));