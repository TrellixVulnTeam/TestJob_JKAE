let sendButton = document.querySelector(".consultation__sendButton");
let nameInput = document.querySelector(".nameInput");
let mobileInput = document.querySelector(".mobileInput");
let emailInput = document.querySelector(".emailInput");

let nameCheck = /^[A-Z]{1,1}[a-z]{1,15}$/;
let emailCheck =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let mobileCheck = /^\+\d{1}\(\d{3,3}\)\d{3,3}\-\d{2,2}\-\d{2,2}$/;

let nameTest;
let emailTest;
let mobileTest;

sendButton.style.opacity = 0.5;

function addEvents() {
  nameInput.addEventListener("input", function () {
    nameTest = nameCheck.test(nameInput.value);

    if (!nameTest) {
      nameInput.style.border = "3px solid red";
    } else nameInput.style.border = "3px solid #BBBBBB";
  });

  mobileInput.addEventListener("input", function () {
    mobileTest = mobileCheck.test(mobileInput.value);
    if (!mobileTest) {
      mobileInput.style.border = "3px solid red";
    } else mobileInput.style.border = "3px solid #BBBBBB";

    if (nameTest && mobileTest) {
      sendButton.disabled = false;
      sendButton.style.opacity = 1;
    } else {
      sendButton.disabled = true;
      sendButton.style.opacity = 0.5;
    }
  });

  emailInput.addEventListener("input", function () {
    emailTest = emailCheck.test(emailInput.value);

    if (emailTest) {
      emailInput.style.border = "3px solid #BBBBBB";
    } else emailInput.style.border = "3px solid red";
  });
}

addEvents();

let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");
let banner = document.querySelector(".page__banner");

slide1.addEventListener("click", function () {
  banner.style.backgroundPositionX = "0%";
  slide1.style.background = "#F79900";
  slide2.style.background = "transparent";
  slide3.style.background = "transparent";
});

slide2.addEventListener("click", function () {
  banner.style.backgroundPositionX = "50%";
  slide2.style.background = "#F79900";
  slide1.style.background = "transparent";
  slide3.style.background = "transparent";
});

slide3.addEventListener("click", function () {
  banner.style.backgroundPositionX = "100%";
  slide3.style.background = "#F79900";
  slide2.style.background = "transparent";
  slide1.style.background = "transparent";
});
