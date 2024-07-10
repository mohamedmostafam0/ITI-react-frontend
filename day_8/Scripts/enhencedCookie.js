function setCookie(cookieName, cookieValue, expiryDate) {
  let expires = "";
  expires = "; expires=" + expiryDate;
  document.cookie = cookieName + "=" + cookieValue + expires;
  console.log(`Cookie "${cookieName}" set with value "${cookieValue}"`);
}


function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getAllCookies() {
  let associativeCookies = {};
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookieParts = cookies[i].split("=");
    if (cookieParts.length === 2) {
      let key = cookieParts[0].trim();
      let value = decodeURIComponent(cookieParts[1].trim());
      associativeCookies[key] = value;
    }
  }
  return associativeCookies;
}

function setGender(gender) {
  document.getElementById("gender").value = gender;
  let maleImg = document.getElementById("male");
  let femaleImg = document.getElementById("female");
  maleImg.classList.remove("selected");
  femaleImg.classList.remove("selected");
  if (gender === 'male') {
    maleImg.classList.add("selected");
  } else if (gender === 'female') {
    femaleImg.classList.add("selected");
  }
}

function registerUser() {
  let userName = document.getElementById("txt1").value;
  let age = document.getElementById("txt2").value;
  let gender = document.getElementById("gender").value;
  let color = document.getElementById("Color").value;
  let rememberMe = document.getElementById("k").checked;
  if (!userName || !age || !gender || !color) {
    alert("All fields are required.");
    return;
  }

  var date = new Date();
  if (rememberMe) {
    date.setMonth(date.getMonth() + 1);
  } else {
    date.setTime(date.getTime() + (1 * 1000));
  }

  setCookie("username", userName, date);
  setCookie("age", age, date);
  setCookie("gender", gender, date);
  setCookie("color", color, date);
  // var visits = (getCookie("visits") || 0);
  var visits = getCookie("visits");
  
  setCookie("visits", ++visits);
  location.assign("welcomePage.html");
}

function displayWelcome() {
  let cookies = getAllCookies();
  console.log(cookies);
  let userName = cookies.username;
  let visits = cookies.visits;
  let gender = cookies.gender;
  let color = cookies.color;
  setCookie("visits", ++visits);
  console.log("Username:", userName);
  console.log("Visits:", visits);
  console.log("Gender:", gender);
  console.log("Color:", color);

  let elem = document.getElementsByTagName("h1")[0];
  elem.textContent = `Welcome ${userName}, you have visited this site ${visits} times :)`;

  let profilePic = gender === "male" ? "Images/1.jpg" : "Images/2.jpg";
  let imgElem = document.getElementById("profile-pic");
  imgElem.src = profilePic;
  imgElem.alt = "Profile Picture";
  elem.style.color = color;
}

function deleteCookie() {
  let cookies = getAllCookies();
  for (let key in cookies) {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}
