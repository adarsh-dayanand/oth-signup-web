(function () {
  let person = prompt("Please enter the login id");
  let divContainer = document.getElementById("container").style.display;

  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  // const btnLogin = document.getElementById("btnLogin");
  const btnSignup = document.getElementById("btnSignup");
  const emailLabel = document.getElementById("email-label");
  const passwordLabel = document.getElementById("passowrd-label");

  if (person === "sa-oth") {
    divContainer = "block";
  } else {
      alert('Invaid Auth')
    divContainer = "none";
    txtEmail.style.display = "none";
    txtPassword.style.display = "none";
    // btnLogin.style.display = "none";
    btnSignup.style.display = "none";
    emailLabel.style.display = "none";
    passwordLabel.style.display = "none";
  }

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBdvg80FoKCxrRJrNnHJZCmVqeHg9BPQCU",
    authDomain: "sa-oth-ada18.firebaseapp.com",
    projectId: "sa-oth-ada18",
    storageBucket: "sa-oth-ada18.appspot.com",
    messagingSenderId: "305380503193",
    appId: "1:305380503193:web:03a3b89e993b620a1f9208",
    measurementId: "G-7C0N7S4151",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Get Elements

  //Add Login Event
  // btnLogin.addEventListener('click', e => {
  //     const email = txtEmail.value;
  //     const password = txtPassword.value;

  //     const auth = firebase.auth();

  //     //sign in with firebase auth
  //     auth.signInWithEmailAndPassword(email, password).then(user =>{
  //         alert("Login Successful :)");
  //     }).catch(err => {
  //         alert(err.message);
  //     });

  // });

  //Add Signup Event
  btnSignup.addEventListener("click", (e) => {
    //get email and password
    const email = txtEmail.value;
    const password = txtPassword.value;

    const auth = firebase.auth();

    //sign in with firebase auth
    const promise = auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        alert("Signup Successful :)");
      })
      .catch((err) => {
        alert(err.message);
      });
  });
})();
