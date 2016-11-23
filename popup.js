$(document).ready(function() {

  $("#visualbutton").on("click", function(event) {

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      chrome.tabs.sendMessage(tabs[0].id, {request: "visualDiff"})
    })

  })
  $("#defaultbutton").on("click", function(event) {

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      chrome.tabs.sendMessage(tabs[0].id, {request: "tokyoDefault"})
    })

  })

})
