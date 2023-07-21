// console.log("This is a popup!")

searchWord = function(word){
  // let query = word.selectionText;
  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/".concat(word.selectionText)
  fetch(url)
      .then(data => data.json())
      .then(data => {
        const meaning = data[0]["meanings"]
        
      });


chrome.contextMenus.create({
title: "Search Definition",
contexts:["selection"],  // ContextType
onclick: searchWord // A callback function
});