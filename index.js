function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground') //form container background
const modalBtn = document.querySelectorAll('.modal-btn') // sign up now button
const formData = document.querySelectorAll('.formData')
const myxBt = document.querySelector('.close') //my contribution on javascript
const go = document.querySelector('.btn-submit')
const form = document.getElementById('form')

const location1 = document.getElementById('location1')
const location2 = document.getElementById('location2')
const location3 = document.getElementById('location3')
const location4 = document.getElementById('location4')
const location5 = document.getElementById('location5')
const location6 = document.getElementById('location6')
const radioerror = document.getElementById('radio-error')
const error = document.querySelector('.error-messages')
const firstSub = document.getElementById('openpopup')
const lasterror = document.getElementById('last-error')
const emailerror = document.getElementById('email-error')
const birtherror = document.getElementById('birth-error')
const quantityerror = document.getElementById('quantity-error')
const termerror = document.getElementById('term-error')
const closePopup = document.getElementById('close-popup')
const popup = document.getElementById('pop-upmessage')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  // code for first input box
  if (form.first.value < 2) {
    validateFirstname(first)
  } else {
    error.style.display = 'none'
  }
  // code for last input box

  if (form.last.value < 2) {
    validateLastname(last)
  } else {
    lasterror.style.display = 'none'
  }

  // code for email input box
  if (form.email.value < 2) {
    validateEmail(email)
  } else {
    emailerror.style.display = 'none'
  }

  // code for birthdate input box

  if (form.birthdate.value.length > 10) {
    validateBirthdate(birth)
  }

  // code for quantity input box
  if (form.quantity.value < 1) {
    validateQuantity(quantity)
  } else {
    quantityerror.style.display = 'none'
  }

  // code for radio button box
  if (form.location) {
    allLocation()
  }

  // code for checkbox input
  const checkBox = document.getElementById('checkbox1')
  if ((allchecked(checkBox) = false)) {
    termerror.style.display = 'block'
  }
})

function openPopup() {
  popup.classList.add('open-popup')
}

closePopup.addEventListener('click', function () {
  popup.style.display = 'none'
  modalbg.style.display = 'none'
})

//firstname functionality
function validateFirstname(first) {
  if (first.value.length < 2) {
    error.style.display = 'block'
  }
}

// lastname functionality

function validateLastname(last) {
  if (last.value.length < 2) {
    lasterror.style.display = 'block'
  }
}

//email functionality
function validateEmail(email) {
  if (email.value.length < 2) {
    emailerror.style.display = 'block'
  }
}
// birthdate functionality

function validateBirthdate(birth) {
  if (birth.value.length < 2) {
    birtherror.style.display = 'block'
  }
}

// Quantity of tornament
function validateQuantity(quantity) {
  if (quantity.value.length < 1) {
    quantityerror.style.display = 'block'
  }
}

//checked box function for terms and condition

function allchecked(checkBox) {
  if (checkBox.checked) {
    termerror.style.display = 'none'
    openPopup()
  } else {
    termerror.style.display = 'block'
  }
}

//radio button box function for location: newyork,chicago, portland,
//seattle, boston, san fransisco
function allLocation() {
  if (location1.checked) {
    radioerror.style.display = 'none'
  } else if (location2.checked) {
    radioerror.style.display = 'none'
  } else if (location3.checked) {
    radioerror.style.display = 'none'
  } else if (location4.checked) {
    radioerror.style.display = 'none'
  } else if (location5.checked) {
    radioerror.style.display = 'none'
  } else if (location6.checked) {
    radioerror.style.display = 'none'
  } else {
    radioerror.style.display = 'block'
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}

//my contribution on javascript
myxBt.addEventListener('click', function () {
  modalbg.style.display = 'none'
})
