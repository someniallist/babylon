// function() {
//  $("dt").each(function (index) {   // determine the index number of <dt>
//   $("dd").eq(index).each(function(index) { // match <dd>'s index with <dt>'s
//     var originalData = $(this);
//     return originalData;
//     console.log(originalData)
//   });
// });}
// 
// var visualDiffFunction = function() {
//     var audits = $("table.table.table-condensed > tbody > tr")
//
//     audits.each( function(auditIndex) {
//       var action = $(this).find("td")[1]
//       var auditType = $(action).find("div.muted")[1].textContent.trim()
//
//       var changesDt = $(this).find("td.changes > dl > dt")
//       var changesDd = $(this).find("td.changes > dl > dd")
//
//       if(auditType == "menu builder 3 update") {
//         changesDt.each( function(dtIndex) {
//
//           var change = $(changesDd).eq(dtIndex)
//           var hash = change.text().trim()
//
//                               debugger
//           var json = hashToJSON(hash)
//
//
//
//           $(change).html(jsondiffpatch.formatters.html.format(json));
//
//
//         })
//
//       }
//       else {
//         changesDt.each( function(dtIndex) {
//           var searchResult = $(this).text().trim();
//           switch (searchResult) {
//             case "optionGroups": // hash diffing
//             case "prices":
//             case "sizes":
//             case "options":
//             case "restriction":
//             case "timesets":
//               debugger
//               $(changesDd).eq(dtIndex).each(function(ddIndex) { // match <dd>'s index with <dt>'s
//                   var beforeData = $(this).attr("data-old");
//                   var afterData = $(this).attr("data-new");
//                   var $rubyHash = $(this).text().trim();
//                   if (beforeData == "") { // make data-old empty json object
//                     beforeData = "{}";
//                   }
//                   if (afterData == "") { // make data-new empty json object
//                     afterData = "{}";
//                   }
//


                  var left = hashToJSON(beforeData);
                  var right = hashToJSON(afterData);

                  if (beforeData != afterData){
                    // for (var i in left) {
                    //   if (left[i].hasOwnProperty('name')) {
                    //     right[i].identifier = left[i].name;
                    //     for (var j in left[i].options) {
                    //       if (left[i].options[j].hasOwnProperty('name')) {
                    //         right[i].options[j].identifier = left[i][j].options.name;
                    //       }
                    //     }
                    //   }
                    // }
                    var delta = jsondiffpatch.diff(left, right);
                    $(this).html(jsondiffpatch.formatters.html.format(delta));
                  }
                  else {
                    var delta = jsondiffpatch.diff(left, right);
                    $(this).html("No Change");
                  };

              });
              break;
            case "id": //string diffing name excluded
            case "name":
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
              }
              break;
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
            case "visible":
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
            case "created_at":
            case "updated_at":
            case "promotional_message":
            case "override_make_time":
            case "starts_on":
            case "ends_on":
            case "delivery_instructions":
            case "processing_fee":
            case "notification_phone":
            case "notification_email":
            case "ach_addenda":
            case "order_for_later_accepted":
              $(changesDd).eq(dtIndex).each(function(ddIndex) {
                var beforeData = $(this).attr("data-old");
                var afterData = $(this).attr("data-new");
                var marketTimeZone = determineTimeZone();
                  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(beforeData)) { // Date reformatting
                    beforeData = new Date(beforeData).toLocaleString('en-US', { timeZone: marketTimeZone });
                  }
                  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.000Z$/.test(afterData)) { // Date reformatting
                    afterData = new Date(afterData).toLocaleString('en-US', { timeZone: marketTimeZone });
                  }
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
                }
                else {
                  $(this).html("No Change");
                };
              });
              break;
          };
        })
      }
    })
  };

function hashToJSON(hash) {
  var jsonString = hash.replace(/(\[)(nil)(\])/g, function(match, p1, p2, p3) {
    return `${p1+"null"+p3}`
  }).replace(/(\[)(nil)(, .+\])/g, function(match, p1, p2, p3) {
    return `${p1+"null"+p3}`
  }).replace(/(\[)(.+, )(nil)(\])/g, function(match, p1, p2, p3, p4) {
    return `${p1+p2+"null"+p4}`
  }).replace(/(".*?)("=>)(nil)/g, function(match, p1, p2) {
    return `${p1+p2}null`
  }).replace(/(".*?)(")(=>)/g, function(match, p1, p2) {
    return `${p1+p2}:`
  });

  var jsonParse = JSON.parse(jsonString)

  return jsonParse

}

function determineTimeZone() {
  var market = $(".dropdown-toggle:first").text().trim()
  switch (market) {
    case "Baltimore, MD": //East Coast
    case "Boston, MA":
    case "BtownMenus":
    case "Buffalo, NY":
    case "Charlottesville, VA":
    case "Chesapeake, VA":
    case "Cincinnati, OH":
    case "Columbus, OH":
    case "Fayetteville, NC":
    case "Gloucester County, NJ":
    case "HungryBoiler":
    case "Indianapolis, IN":
    case "Morgantown, WV":
    case "New York, NY":
    case "Norfolk, VA":
    case "Northwest Atlanta, GA":
    case "Orlando, FL":
    case "Pittsburgh, PA":
    case "Providence, RI":
    case "Raleigh, NC":
    case "Richmond, VA":
    case "State College, PA":
    case "Towson, MD":
    case "Virginia Beach, VA":
    case "West Chester, PA":
    case "Williamsburg, VA":
      var marketZone = 'America/New_York';
      return marketZone;
      break;
    case "Austin, TX": // central markets
    case "Champaign, IL":
    case "Chicago, IL":
    case "College Station, TX":
    case "Columbia, MO":
    case "Iowa City, IA":
    case "Katy, TX":
    case "Lawrence, KS":
    case "Manhattan, KS":
    case "Nashville, TN":
    case "Norman, OK":
    case "Oklahoma City, OK":
    case "Stillwater, OK":
    case "St. Louis, MO":
    case "Sugar Land, TX":
      var marketZone = 'America/Indiana/Indianapolis';
      return marketZone;
      break;
    case "Phoenix, AZ": // MST markets
    case "Denver, CO":
    case "HungryBuffs":
    case "Northern, CO":
      var marketZone = 'America/Denver';
      return marketZone;
      break;
    case "HungryDucks": // PST markets
    case "Mission Valley, CA":
    case "Pacific Beach, CA":
    case "Palo Alto, CA":
    case "San Diego, CA":
    case "San Francisco, CA":
    case "San Jose, CA":
    case "SBmenus":
    case "Seattle, WA":
      var marketZone = 'America/Los_Angeles';
      return marketZone;
      break;
  };
  console.log("Market: " + market);
  console.log("Timezone: " + marketZone);
};

var tokyoDefaultFunction = function() {
  $("dt").each(function (index) {   // determine the index number of <dt>
        $("dd").eq(index).each(function(index) { // match <dd>'s index with <dt>'s
        var attr = $(this).attr('name');
        console.log(originalData);
        var originalData = unchangedFunction();
        // For some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
        if (typeof attr !== typeof undefined && attr !== false) {
          var beforeData = $(this).attr("data-old");
          var afterData = $(this).attr("data-new");
          $(this).html(beforeData + '<br><i class="glyphicon glyphicon-arrow-down"></i><br>' + afterData);
        }
        else {
          $(this).html(originalData);
        }
      });

    });
  };

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if(msg.request == "visualDiff") {
    visualDiffFunction();
  }
  if(msg.request == "tokyoDefault")
  {
    tokyoDefaultFunction();
  }

})

visualDiffFunction(); //run visualDiffFunction on page load.
