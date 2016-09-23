$("dt").each(function (index) {   // determine the index number of <dt>
  var searchResult = $(this).text().trim();
  switch (searchResult) {
    case "optionGroups": // hash diffing
    case "prices":
    case "sizes":
    case "options":
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
    case "visible": //string diffing
    case "name":
    case "available":
    case "orderType":
    case "description":
    case "discountable":
    case "combinable":
    case "special":
    case "couponOnly":
    case "fulfilledByDeliveryService":
    case "sizeType":
    case "override_ready_at":
    case "ends_at":
    case "hours_owner_id":
    case "hours_owner_type":
    case "hours_text":
    case "order_type":
    case "starts_at":
    case "perOrderLimit":
    case "perAccountOrderLimit":
    case "orderForLaterLeadTime":
    case "id":
    case "delivery_days":
      $("dd").eq(index).each(function(index) {
        var beforeData = $(this).attr("data-old");
        var afterData = $(this).attr("data-new");
        if (beforeData == "") { // make data-old empty json object
          beforeData = "{}";
        }
        if (afterData == "") { // make data-new empty json object
          afterData = "{}";
        }
        var left = JSON.parse(JSON.stringify({val: beforeData}));
        var right = JSON.parse(JSON.stringify({val: afterData}));
        var delta = jsondiffpatch.diff(left, right);
        if (beforeData != afterData){
          $(this).html(jsondiffpatch.formatters.html.format(delta));
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

// restriction, timesets do not have a "name" property
