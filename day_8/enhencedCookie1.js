function setCookie() {
  var date = new Date();
  if (document.getElementById("k").checked) {
    date.setMonth(date.getDate() + 1);
  }
  
  var key1 = document.getElementById("txt1").name;
  var key2 = document.getElementById("txt2").name;
  var val1 = document.getElementById("txt1").value;
  var emailval = document.getElementById("txt2").value;
  document.cookie = key1 + "=" + val1 + ";expires=" + date.toUTCString();
  document.cookie = key2 + "=" + emailval + ";expires=" + date.toUTCString();
}

function getAllCookies() {
  var associativeCookies = [];
  // console.log(document.cookie);
  var cookies = document.cookie.split(";");
  console.log(cookies);
  for (var i = 0; i < cookies.length; i++) {
    associativeCookies[cookies[i].split("=")[0].trim()] = cookies[i]
      .split("=")[1]
      .trim();
  }
  return associativeCookies;
}

// var result = getAllCookies();
// console.log(result);
// console.log(result.fname);
// console.log(result["fname"]);

// console.log(result.email);
function displayWelcome() {
  var cookies = getAllCookies();
  var name = cookies.fname;
  var email = cookies.email;
  var elem = document.getElementsByTagName("h1")[0];
  elem.innerHTML =
    "Thanks for Registration <br>" +
    "your name is:" +
    name +
    "<br>" +
    "your email is : " +
    email;
  elem.style.color = "blue";
}

function deleteCookie() {
  var cookies = getAllCookies();
  for (var key in cookies) {
    document.cookie = key + "=;expires=03-03-2002";
  }
}
