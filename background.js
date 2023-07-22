/**
 * So I found some stack overflow answers saying we needed some sort of 
 * background script to run our contextMenu.create() method. I guess 
 * this is just something that has to do with chromes web api? I'm not entirely sure. 
 * The way stack overflow said to set up the background script was outdated, so
 * chrome gave an error saying to use the background.service_worker property in the manifest.json.
 * Then I ran into an issue where background.js could not use any of our code from the main.js
 * file. I tried an import/export approach but that also did not work. Therefore I had to move
 * all of our logic into the background.js file to get the extension to work.
 * 
 * https://developer.chrome.com/docs/extensions/mv3/service_workers/
 * The background_service worker cannot manipulate the DOM
 */


const CONTEXT_MENU_ID = "some ID";


function searchWord(word) {
  console.log(word);
  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/".concat(word.selectionText)
  fetch(url)
      .then(data => data.json())
      .then(data => {
        const meaning = data[0]["meanings"] // an array of all the objects inside of the meanings key
        // need to get the length of the array, then loop through and extract the value at 'partOfSpeech'
        // and the value at 'definition'
        for(const obj of meaning){
          const partOfSpeech = obj["partOfSpeech"] 
          const definition = obj["definitions"][0]["definition"]
          // create a string to display to the user. Contains the part of speech and the definition
          const defString = `Part of Speech: ${partOfSpeech} \nDefinition: ${definition}`
          
          console.log(defString);
          
          // this is not working
          chrome.notifications.create('', {
            title : 'Notify',
            message : defString,
            iconUrl: './definition.png',
            type : 'basic'
          }) 
          

        }
        /**
         * How do we want to display the data? Our orignial idea was 
         * to just edit the content of the initial popup from clicking on the extension, but that
         * disappears from the screen.
         * 
         * - div with text content at the top?
         * - browser alert?
         * - can we somehow make a div appear close to the text selected by the user?
         *    -> does javascipt somehow know the element of the word thats selected? 
         * 
         */
      });
}

chrome.runtime.onInstalled.addListener(function () {
  // Create the context menu item and add to right click options
  chrome.contextMenus.create({
    title: "Search Definition",
    contexts: ["selection"], // ContextType
    id: CONTEXT_MENU_ID,
  });
});

chrome.contextMenus.onClicked.addListener(searchWord); // this is what allows the clicking of search definition in options to obtain the data
