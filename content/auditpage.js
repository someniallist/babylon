$("dt").each(function (index) {   // determine the index number of <dt>
  var searchResult = $(this).text().trim();
  switch (searchResult) {
    case "timesets":
    case "optionGroups":
    case "prices":
    case "sizes":
      var keywordIndex = index;
        $("dd").each(function(index) { // match <dd>'s index with <dt>'s
          if (index === keywordIndex) {
            var beforeData = $(this).attr("data-old");
            var afterData = $(this).attr("data-new");
            if (beforeData == "") { // make data-old obvious
              beforeData = "Blank";
            }
            if (afterData == "") { // make data-new obvious
              afterData = "Blank";
            }
            console.log("audit type: " + searchResult);
            console.log("before:")
            console.log(beforeData);
            console.log("after:")
            console.log(afterData);
          };
        });
      break;
  };
});



  // use $(this).text().trim() to get all the keywords
  // if the keyword matches one of the keywords that we're looking for,
  // do a console.log() of the matching <dd> (not the <dt>)


  // timesets, optionGroups, prices, sizes
