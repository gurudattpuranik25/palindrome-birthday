let dob = document.getElementById("dob");
let form = document.getElementById("form");
let output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  splitDate = dob.value.split("-");

  const year = splitDate[0].toString();
  const month = splitDate[1].toString();
  const date = splitDate[2].toString();

  const formattedDate = date + month + year;
  checkForPalindrome(formattedDate);
});

const checkForPalindrome = (formattedDate) => {
  const dateArray = formattedDate.split("");
  var score = 0;
  for (let i = 0; i < dateArray.length; i++) {
    if (dateArray[i] == dateArray.reverse()[i]) {
      score += 1;
    }
  }
  if (score == dateArray.length) {
    output.innerText = "Wow...your birthday is a palindrome 🥳";
    output.style.display = "block";
  } else output.innerText = "Oops...your birthday is not a palindrome 😢";
  output.style.display = "block";
};

const instagram = document.querySelector(".fa-instagram-square");
const linkedin = document.querySelector(".fa-linkedin");
const twitter = document.querySelector(".fa-twitter-square");
const github = document.querySelector(".fa-github");

instagram.addEventListener("click", function () {
  location.href = "https://www.instagram.com/gurudatt_puranik/";
});

twitter.addEventListener("click", function () {
  location.href = "https://twitter.com/PuranikGurudatt";
});

linkedin.addEventListener("click", function () {
  location.href = "https://www.linkedin.com/in/gurudatt-puranik-0933b0195/";
});

github.addEventListener("click", function () {
  location.href = "https://github.com/gurudattpuranik25";
});
