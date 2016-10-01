

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

          for (var i in delta) {
            var name = JSON.stringify(delta[i].name);
            console.log(name);
          }
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
    case "notified_by_phone":
    case "status":
    case "sourceRestaurantID":
    case "registration_status":
    case "icons":
    case "restaurant_id":
    case "theme":
    case "domain_name":
    case "palette":
    case "registration_status":
    case "logo_file_name":
    case "logo_content_type":
    case "logo_file_size":
    case "logo_fingerprint":
    case "logo_updated_at":
    case "yelp_id":
    case "latitude":
    case "longitude":
    case "delivery_service_id":
    case "order_for_later_min_minutes_from_open":
    case "order_for_later_max_days_ahead":
    case "order_for_later_max_orders_per_time_slot":
    case "processing_type":
    case "loyalty_cash_accrual_rate":
    case "tax_group_id":
    case "salesforce_rep_email":
    case "time_zone":
    case "primary_color":
    case "secondary_color":
    case "exposure":
    case "city":
    case "override_ready_at":
    case "zip_code":
    case "state":
    case "restaurant_category_id":
    case "orderForLaterLeadTime":
    case "descriptors":
    case "address_1":

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

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if(msg.request == "logTime") {
    console.log(Date.now())
  }

})
