$("dt").each(function (index) {   // determine the index number of the dt element
  var searchResult = $(this).text().trim();
  switch (searchResult) {
    case "timesets":
    case "optionGroups":
    case "prices":
    case "sizes":
      return console.log(index); 
      break;
  };
});



  // use $(this).text().trim() to get all the keywords
  // if the keyword matches one of the keywords that we're looking for,
  // do a console.log() of the matching <dd> (not the <dt>)


  // timesets, optionGroups, prices, sizes
