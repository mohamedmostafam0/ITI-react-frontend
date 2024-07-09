function show() {
  // console.log(document.getElementById("id1"));
  // console.log(document.getElementsByTagName("div"));
  // console.log(document.getElementsByClassName("c1")[0]);
  document.getElementById("id1").innerHTML = "hello from inner";
  document.getElementById("id1").style.color = "red";
  document.getElementsByTagName("h1")[0].style.color = "green";
  var input = document.getElementsByTagName("input")[0];
  //   input.type = "text";
  //   input["type"]="text"
  console.log(document.querySelectorAll(".c1")[1]);
  document.querySelectorAll(".c1")[1].style.color = "green";
}

function changeSource(myimg) {
  myimg.src = "../images/marshall_c.jpg";
}

function returnOrginal(myimg) {
  myimg.src = "../images/marshall_bw.jpg";
}

// this ===> element that called it
