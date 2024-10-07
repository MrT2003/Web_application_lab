// // define a function that gets an HTML element
// function getElement(selector) {
//   return document.querySelector(selector);
// }

// // define a function that handles the click event of the Join button
// function joinButtonClick(event) {
//   // get user entries from text boxes
//   const email = getElement("#emailInput").value;
//   const phone = getElement("#phoneInput").value;

//   // check user entries
//   let invalid = false;
//   if (email == "") {
//     getElement("#email_1_error").textContent = "Email is required.";
//     invalid = true;
//   } else {
//     getElement("#email_1_error").textContent = "";
//   }

//   if (phone == "") {
//     getElement("#email_2_error").textContent = "Phone is required.";
//     invalid = true;
//   } else {
//     getElement("#email_2_error").textContent = "";
//   }
//   //   check Email
//   let isValid = false;
//   while (!isValid) {
//     if (email.startsWith("_") || email.startsWith(".")) {
//       alert("Email address may not start with a period or underscore.");
//     } else if (!email.includes("@")) {
//       alert("Email address must contain an @ symbol.");
//     } else if (!email.includes(".")) {
//       alert("Email address must contain a period.");
//     } else if (!email.includes(".", email.indexOf("@"))) {
//       alert("The period must come after the @ symbol.");
//     } else {
//       isValid = true;
//     }
//     return;
//   }

//   // cancel form submit if any user entries are invalid
//   if (invalid) {
//     event.preventDefault();
//   }
// }

// // add code that's run when the web page is loaded
// document.addEventListener("DOMContentLoaded", () => {
//   // specify the function that's run when the Join button is clicked
//   getElement("#join_button").addEventListener("click", joinButtonClick);
// });


// Function to set cookies
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  // Function to get a cookie by name
  function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArr = decodedCookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      let cookie = cookieArr[i].trim();
      if (cookie.indexOf(cname) == 0) {
        return cookie.substring(cname.length, cookie.length);
      }
    }
    return "";
  }
  
  // Function to get an HTML element by selector
  function getElement(selector) {
    return document.querySelector(selector);
  }
  
  // Function to handle the click event of the Join button
  function joinButtonClick(event) {
    // Get user entries from text boxes
    const email = getElement("#emailInput").value;
    const phone = getElement("#phoneInput").value;
  
    // Check user entries
    let invalid = false;
    if (email == "") {
      getElement("#email_1_error").textContent = "Email is required.";
      invalid = true;
    } else {
      getElement("#email_1_error").textContent = "";
    }
  
    if (phone == "") {
      getElement("#email_2_error").textContent = "Phone is required.";
      invalid = true;
    } else {
      getElement("#email_2_error").textContent = "";
    }
  
    // Check Email validity
    let isValid = false;
    while (!isValid) {
      if (email.startsWith("_") || email.startsWith(".")) {
        alert("Email address may not start with a period or underscore.");
      } else if (!email.includes("@")) {
        alert("Email address must contain an @ symbol.");
      } else if (!email.includes(".")) {
        alert("Email address must contain a period.");
      } else if (!email.includes(".", email.indexOf("@"))) {
        alert("The period must come after the @ symbol.");
      } else {
        isValid = true;
      }
      return;
    }
  
    // If the form is valid, store email and phone values into cookies
    if (!invalid && isValid) {
      setCookie("email", email, 7); // Store email for 7 days
      setCookie("phone", phone, 7); // Store phone for 7 days
      alert("Form submitted and values stored in cookies!");
    }
  
    // Cancel form submit if any user entries are invalid
    if (invalid) {
      event.preventDefault();
    }
  }
  
  // Code that runs when the web page is loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Pre-fill email and phone input fields from cookies
    getElement("#emailInput").value = getCookie("email");
    getElement("#phoneInput").value = getCookie("phone");
  
    // Specify the function that's run when the Join button is clicked
    getElement("#join_button").addEventListener("click", joinButtonClick);
  });
  