let signUpDatabase = JSON.parse(localStorage.getItem('signUpDatabase'))
let signedInUserIndex = localStorage.getItem('signedInUserIndex')

let postImage = document.getElementById('uploadimage')
let dateJoined = document.getElementById('dateJoined')
let profileName = document.querySelectorAll('.pfrName')
let userName = document.querySelectorAll('.pfrusrName')
let profilePic = document.querySelectorAll('.pfrpp')
// console.log(profileName);

let postArr = JSON.parse(localStorage.getItem('signUpDatabase'))[signedInUserIndex].posts || []
// let arrOfPost = JSON.parse(localStorage.getItem('arrOfPost')) || []
let upimg;
let isModalOpen = false
let myName;
let myUsername;
let profPic;

let showPost = document.getElementById('post')

postLen.innerText = `${postArr.length} posts`

function showModal(param) {
  if (!isModalOpen) {
    param.style.display='block'
    isModalOpen = true
  } else {
    param.style.display='none' 
    isModalOpen = false
  }
}

function uploadPfp(ev) {
  let file = ev.target.files[0]
  if (file.size > 1 * 1024 *1024) {
    alert('file is too large. upload file less than 1mb')
    return
  }
  let myReader = new FileReader()

    if (file) {
      myReader.readAsDataURL(file)
    }

    myReader.addEventListener('load', (ev)=>{
      profilePic.forEach((pic) => {
        pic.src = ev.target.result
        // profPic = ev.target.result
      });

      signUpDatabase[signedInUserIndex].profilePicture = ev.target.result
      localStorage.setItem('signUpDatabase', JSON.stringify(signUpDatabase))

      console.log(signUpDatabase);

      window.location.reload()
    })
}


if (signedInUserIndex === null) {
    alert('you need to login')
    window.location.href = 'sign-in.html'
} else {
    let user = signUpDatabase[signedInUserIndex]

    profileName.forEach((data) => {
      data.innerText = user.name
      myName = user.name
    });

    userName.forEach((data) => {
      data.innerText = `@${user.username}`
      myUsername = user.username
    });

    // if (user.profilePicture) {
      profilePic.forEach((pic) => {
        pic.src = user.profilePicture
        profPic = user.profilePicture
      });
    

    dateJoined.innerText = `Joined ${user.dateJoined}`
    
}

function chooseFile(ev) {
  let file = ev.target.files[0]
  let myReader = new FileReader()

    if (file) {
      myReader.readAsDataURL(file)
    }

    myReader.addEventListener('load', (ev)=>{
      upimg = ev.target.result
      postImage.src = upimg
    })
    
}


function displayPost() {
  let todoHTML = "";

  postArr.forEach((data, i) => {
    if (data.txt === '' && data.imgsrc === '') {
      return console.log('empty');
    }
    let html = `
        <div class="mc-pst">
                    <div class="hb-img">
                      <img src="${profPic}" alt="" class="pfrpp" />
                    </div>
                    <div class="mc-pss">
                      <div class="mc-pni">
                        <div class="mc-pn">
                          <div class="mc-ptxt">
                            <div class="mc-btw">
                              <div class="mc-tw">
                                <p>
                                  <span class="pn-tt pfrName">${myName} </span>
                                  <span>
                                    <svg
                                      viewBox="0 0 22 22"
                                      aria-label="Verified account"
                                      role="img"
                                      class="blue-tick"
                                      data-testid="icon-verified"
                                    >
                                      <g>
                                        <path
                                          d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                                        ></path>
                                      </g>
                                    </svg>
                                  </span>
                                  <span class="pn-lt pfrusrName">@${myUsername}
                                     </span
                                  >
                                </p>
                              </div>
                              <div class="mc-picn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 -960 960 960"
                                  class="more-i"
                                >
                                  <path
                                    d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p class="mc-ptx">
                              ${data.txt} </p>
                          </div>
                          <div class="mc-pimg">
                            <img src="${data.imgsrc}" alt="" />
                          </div>
                        </div>
                      </div>
                      <div class="pb-is">
                        <div class="pb-i">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="pst-i blue"
                          >
                            <g>
                              <path
                                d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                              ></path>
                            </g>
                          </svg>

                          <p class="blue-p">0</p>
                        </div>
                        <div class="pb-i">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="pst-i green"
                          >
                            <g>
                              <path
                                d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                              ></path>
                            </g>
                          </svg>
                          <p class="green-p">0</p>
                        </div>
                        <div class="pb-i">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="pst-i red"
                          >
                            <g>
                              <path
                                d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                              ></path>
                            </g>
                          </svg>
                          <p class="red-p">0</p>
                        </div>
                        <div class="pb-i">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="pst-i blue"
                          >
                            <g>
                              <path
                                d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                              ></path>
                            </g>
                          </svg>
                          <p class="blue-p">0</p>
                        </div>
                        <div class="pb-i">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="pst-i blue"
                          >
                            <g>
                              <path
                                d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <div class="pb-i">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="pst-i blue"
                          >
                            <g>
                              <path
                                d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
      `;
    todoHTML += html;
  });

  document.getElementById("mainPostDiv").innerHTML = todoHTML;
}


displayPost()


function post() {
  let postText = postInputVal.value

  if (!postText && !upimg) {
    alert('post can not be empty')
  } else {
    // console.log(postText);

  // postArr.unshift({text: postText,
  //   imgsrc: upimg
  // })

  let postObj = {txt: postText, imgsrc: upimg}

  postArr.unshift(postObj)
  signUpDatabase[signedInUserIndex].posts = postArr
  localStorage.setItem('signUpDatabase', JSON.stringify(signUpDatabase))

// console.log(signUpDatabase);

  displayPost()

  showPost.style.display ='none'
  isModalOpen = false

  postInputVal.value =''
  postImage.src = ''
  upimg =""
  }

}






function logout() {
    localStorage.removeItem('signedInUserIndex')
    alert('logout successful')
    window.location.href = 'sign-in.html'
}