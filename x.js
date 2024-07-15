let isModalOpen = false
let showSignUp = document.getElementById('sign-up-m')
let showSignIn = document.getElementById('sign-in-m')
let signUpDatabase = JSON.parse(localStorage.getItem('signUpDatabase')) || []
let emailregex = /^\w+[@][A-Za-z]+[.][a-zA-Z]+$/
let passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[#?$._!+])[A-Za-z0-9#?$._!+]{8,20}$/

function signModal(param) {
  if (!isModalOpen) {
    param.style.display='block'
    isModalOpen = true
  } else {
    param.style.display='none' 
    isModalOpen = false
  }
}

if (
    upname.value.trim() === '' && 
    upuname.value === '' &&
    upemail.value.trim() === '' && 
    uppass.value.trim() === '' &&
    confirmpassword.value.trim() === ''
  ) {
    signUpBtn.style.backgroundColor = "white";
  } else {
    signUpBtn.style.backgroundColor = "#787a7a";
  }

  function signUp() {
      if (upname.value.trim() === '' || 
          upuname.value === '' || 
          upemail.value.trim() === '' || 
          uppass.value.trim() === '' || 
          confirmpassword.value.trim() === ''
        ) {
          alert('all fields are mandatory')
      }
      else if (!emailregex.test(upemail.value.trim())) {
          alert('email format is incorrect')
      } else if (signUpDatabase.find((data) => data.email === upemail.value.trim())) {
          alert("user already exists")
      } else if (signUpDatabase.find((data) => data.username === upuname.value.trim())) {
        alert("username already exists")

      } else if (!passwordRegex.test(uppass.value.trim())) {
          alert('password should be atleast 8 chars, with a special char, a number , a lowercase & uppercase letter')
      } else if (confirmpassword.value.trim() !== uppass.value.trim()) {
          alert('passwords do not match')
      } 
      // else if (!checkbox.checked) {
      //     alert('please agree to terms & conditions')} 
          else {
          let userObj = {
              // id: generateId() ,
              name: upname.value,
              username: upuname.value,
              email: upemail.value,
              password: uppass.value,
              dateJoined: formatTime()
              // agreement: true
          }

          signUpDatabase.push(userObj)
          localStorage.setItem('signUpDatabase', JSON.stringify(signUpDatabase))
          showSignUp.style.display = 'none'
          showSignIn.style.display='block'
          console.log(signUpDatabase);


      }

  }


  function signIn() {
      if (inemail.value == '' || inpass.value == '') {
          alert('all fields are mandatory')
      } else if (signUpDatabase.find((data) => data.email === inemail.value && data.password !== inpass.value)) {
          alert('incorrect email or password')
      }
      else if (signUpDatabase.find((data) => data.email === inemail.value && data.password === inpass.value)) {
          let userIndex = signUpDatabase.findIndex((data) => data.email === inemail.value && data.password === inpass.value)
          localStorage.setItem('signedInUserIndex', userIndex)
          alert('login successful')
          window.location.href = 'profile.html'
      } else {
          alert('you do not have an account , sign up!')
           showSignIn.style.display = 'none'
          showSignUp.style.display='block'
      }

  }

  function formatTime() {
    let todaysDate = new Date();
    let month = todaysDate.getMonth();
    let year = todaysDate.getFullYear();
    let actualMonth = "";
  
    switch (true) {
      case month === 0:
        actualMonth = "January";
        break;
      case month === 1:
        actualMonth = "February";
        break;
      case month === 2:
        actualMonth = "March";
        break;
      case month === 3:
        actualMonth = "April";
        break;
      case month === 4:
        actualMonth = "May";
        break;
      case month === 5:
        actualMonth = "June";
        break;
      case month === 6:
        actualMonth = "July";
        break;
      case month === 7:
        actualMonth = "August";
        break;
      case month === 8:
        actualMonth = "September";
        break;
      case month === 9:
        actualMonth = "October";
        break;
      case month === 10:
        actualMonth = "November";
        break;
      case month === 11:
        actualMonth = "December";
        break;
      default:
        break;
    }
  
    return `${actualMonth} ${year}`;
  }