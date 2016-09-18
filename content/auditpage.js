$("dt").each(function (index) {   // determine the index number of <dt>
  var searchResult = $(this).text().trim();
  switch (searchResult) {
    case "timesets":
    case "optionGroups": // for existing items
    case "prices":
    case "sizes":
    case "options": // for new items
      var keywordIndex = index;
        $("dd").each(function(index) { // match <dd>'s index with <dt>'s
          if (index === keywordIndex) {
            var beforeData = $(this).attr("data-old");
            var afterData = $(this).attr("data-new");
            var $rubyHash = $(this).text().trim();
            if (beforeData == "") { // make data-old obvious
              beforeData = "Blank";
            }
            if (afterData == "") { // make data-new obvious
              afterData = "Blank";
            }

          var beforeJSON = hashToJSON(beforeData);
          var afterJSON = hashToJSON(afterData);
          $(this).text("before: " + beforeJSON + "\n" + "after:" + afterJSON);
          };
        });
      break;
  };
});


function hashToJSON(hash) {
  var jsonString = hash.replace(/(".*?)("=>)(nil)/g, function(match, p1, p2) {
    return `${p1+p2}null`
  }).replace(/(".*?)(")(=>)/g, function(match, p1, p2) {
    return `${p1+p2}:`
  });

  var jsonParse = JSON.parse(jsonString)

  return jsonParse

}
