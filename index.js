// function validateZipCode(zipCode) {
        
//   if (parseInt(zipCode, 10) > 99950) {
//   // Invalid zip code
//   console.log('Invalid zip code:', zipCode);
//   alert('Please enter a valid U.S. zip code below 99951.');
//   return false; // Prevent form submission
//   }
  
  
//   // Regular expression for validating U.S. zip codes
//   const zipCodePattern = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  
//   if (!zipCodePattern.test(zipCode)) {
//   // Invalid zip code
//   console.log('Invalid zip code:', zipCode);
//   alert('Please enter a valid U.S. zip code.');
//   return false; // Prevent form submission
//   }
//   // Valid zip code
//   console.log('Valid zip code:', zipCode);
//   // Continue with form submission or take other actions
//   return true; // Proceed with form submission
//   }
  
//   // Attach the validation function to the form submission event
//   document.getElementById('hs-form-58aa731e-a644-43b3-9389-c9e2cfe99b44-ec884374-a6e7-4ab9-8fc8-57fbc3824a80').addEventListener('submit', function(event) {
//   const zipCodeInput = document.getElementById('zip-input'); // Replace 'zip-input' with the actual ID of the zip code field
//   const zipCode = zipCodeInput.value.trim();
  
//   // Perform regex pattern validation only if the zip code field is not empty
//   if (zipCode !== '') {
//   if (!validateZipCode(zipCode)) {
//     event.preventDefault(); // Prevent form submission
//   }
//   }
//   });




//   window.addEventListener('DOMContentLoaded', function() {
//     // IMPORTANT: Fill in your client key
//     var clientKey = "YHmp2v9Fnx1ZUVK099YvW943i9AhxhlFvKkNZsiBu5zr1HOjdm1GzxzH8Cl5ZzXR ";

//     var cache = {};
//     var container = $("#hs-form-58aa731e-a644-43b3-9389-c9e2cfe99b44-ec884374-a6e7-4ab9-8fc8-57fbc3824a80");
//     var errorElem = container.find(".label-error");
//         console.log(container)
//     /** Handle successful response */
//     function handleResp(data)
//     {
//         // Check for error
//         if (data.error_msg)
//             errorElem.text(data.error_msg);
//         else if ("city" in data)
//         {
//             // Set city and state
//             container.find("input[id='city-input']").val(data.city);
//             container.find("input[id='state-input']").val(data.state);
//         }
//     }

//     // Set up event handlers
//     container.find("input[id='zip-input']").on("keyup change", function() {
//         // Get zip code
//         var zipcode = $(this).val().substring(0, 5);
//         if (zipcode.length == 5 && /^[0-9]+$/.test(zipcode))
//         {
//             // Clear error
//             errorElem.empty();

//             // Check cache
//             if (zipcode in cache)
//             {
//                 handleResp(cache[zipcode]);
//             }
//             else
//             {
//                 // Build url
             
//                 var url = "https://www.zipcodeapi.com/rest/"+clientKey+"/info.json/" + zipcode + "/radians";

//                 // Make AJAX request
//                 $.ajax({
//                     url: url,
//                     CORS: true,
//                     contentType: 'application/json',
//                     dataType: "json",
//                     headers:{
//                         'Access-Control-Allow-Origin': '*'
//                     }
//                 }).done(function(data) {
//                     handleResp(data);

//                     // Store in cache
//                     cache[zipcode] = data;
//                 }).fail(function(data) {
//                     if (data.responseText && (json = $.parseJSON(data.responseText)))
//                     {
//                         // Store in cache
//                         cache[zipcode] = json;

//                         // Check for error
//                         if (json.error_msg)
//                             errorElem.text(json.error_msg);
//                     }
//                     else
//                         errorElem.text('Request failed.');
//                 });
//             }
//         }
//     }).trigger("change");
// })


