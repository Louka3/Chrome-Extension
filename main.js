// console.log("This is a popup!")



// const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";
// function searchWord(word) {
//   if (info.menuItemId !== CONTEXT_MENU_ID) {
//     return;
//   }
//   // let query = word.selectionText;
//   console.log(word);
//   let url = "https://api.dictionaryapi.dev/api/v2/entries/en/".concat(word.selectionText)
//   fetch(url)
//       .then(data => data.json())
//       .then(data => {
//         const meaning = data[0]["meanings"] // an array of all the objects inside of the meanings key
//         // need to get the length of the array, then loop through and extract the value at 'partOfSpeech'
//         // and the value at 'definition'
//         for(const obj of meaning){
//           const partOfSpeech = obj["partOfSpeech"] 
//           const definition = obj["definitions"]["definition"]
//           // create a string to display to the user. Contains the part of speech and the definition
//           const defString = `Part of Speech: ${partOfSpeech} \nDefinition: ${definition}`
//           console.log(defString);
//         }
//         /**
//          * How do we want to display the data? Our orignial idea was 
//          * to just edit the content of the initial popup from clicking on the extension, but that
//          * disappears from the screen.
//          * 
//          * - div with text content at the top?
//          * - browser alert?
//          * - can we somehow make a div appear close to the text selected by the user?
//          *    -> does javascipt somehow know the element of the word thats selected? 
//          * 
//          */
//       });
//     }

//     chrome.contextMenus.create({
//           title: "Search Definition",
//           contexts: ["selection"], // ContextType
//           id: CONTEXT_MENU_ID,
//         });

// chrome.contextMenus.onClicked.addListener(searchWord);