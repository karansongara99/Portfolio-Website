// let menuIcon = document.querySelector('#menu-icon')
// let navbar = document.querySelector('.navbar')
// let section = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll('header nav a')

// ///////aldef  All Windows Screen Scroll In Data/////

// window.onscroll = () => {
//   ///////aldef  All Windows Screen Scroll In Data/////
//   section.forEach(sec => {
//     let top = window.scrollY
//     let offset = sec.offsetTop
//     let height = sec.offsetHeight
//     let id = sec.getAttribute('id')

//     if (top >= offset && top <= offset + height) {
//       navLinks.forEach(links => {
//         links.classList.remove('active')
//         if (links.href === '#' + id) {
//           links.classList.add('active')
//           document
//             .querySelector('header nav a [href =' + id + ']')
//             .classList.add('active')
//         }
//       })
//     }
//   })
// }

// function validate () {
//   var UserName = document.getElementById('uname').value
//   var Email = document.getElementById('email').value

//   var userregx = /^[a-zA-Z0-9]+[a-zA-Z0-9]$/
//   var emailregx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/

//   if (userregx.test(UserName)) {
//     document.getElementById('exampleInputUsername').style.backgroundColor = 'lightgreen'
//     document.getElementById('error').style.visibility = 'hidden'
//   } else {
//     document.getElementById('exampleInputUsername').style.backgroundColor = 'red'
//     document.getElementById('error').style.visibility = 'visible'
//     document.getElementById('luser').innerHTML = 'Invalid'
//   }

//   if (emailregx.test(Email)) {
//     document.getElementById('email').style.backgroundColor = 'lightgreen'
//     document.getElementById('lemail').style.visibility = 'hidden'
//   } else {
//     document.getElementById('email').style.backgroundColor = 'lightcoral'
//     document.getElementById('lemail').style.visibility = 'visible'
//   }
// }

function validateForm () {
  const name = document.getElementById('exampleInputUsername').value
  const email = document.getElementById('exampleInputEmail').value
  const message = document.getElementById('exampleInputtextarea1').value

  const nameError = document.getElementById('name-error')
  const emailError = document.getElementById('email-error')
  const messageError = document.getElementById('message-error')

  nameError.textContent = ''
  emailError.textContent = ''
  messageError.textContent = ''

  let isValid = true

  if (name === '' || /\d/.test(name)) {
    nameError.textContent = 'Please enter your name.'
    isValid = false
  }

  if (message === '') {
    messageError.textContent = 'Please enter your message.'
    isValid = false
  }

  if (email === '' || !email.includes('@')) {
    emailError.textContent = 'Please enter a valid email address.'
    isValid = false
  }
  return isValid;
}
