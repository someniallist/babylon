$("dt").each(function (index) {   // determine the index number of <dt>
  var searchResult = $(this).text().trim();
  switch (searchResult) {
    case "optionGroups": // for existing items
    case "prices":
    case "sizes":
    case "options": // for new items
    case "restriction":
    case "timesets":
        $("dd").eq(index).each(function(index) { // match <dd>'s index with <dt>'s
            var beforeData = $(this).attr("data-old");
            var afterData = $(this).attr("data-new");
            var $rubyHash = $(this).text().trim();
            if (beforeData == "") { // make data-old empty json object
              beforeData = "{}";
            }
            if (afterData == "") { // make data-new empty json object
              afterData = "{}";
            }

          var left = hashToJSON(beforeData);
          var right = hashToJSON(afterData);
          var delta = jsondiffpatch.diff(left, right);
          $(this).html(jsondiffpatch.formatters.html.format(delta));
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

// restriction, timesets do not have a "name" property
