(function () {
  let person = prompt("Please enter the login id");
  let divContainer = document.getElementById("container").style.display;

  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const btnSignup = document.getElementById("btnSignup");
  const emailLabel = document.getElementById("email-label");
  const passwordLabel = document.getElementById("passowrd-label");
  // const confPasswordLabel = document.getElementById("Confpassowrd-label");
  const messageSuccess = document.getElementById("message-success");
  const messageInfo = document.getElementById("message-info");
  const messageError = document.getElementById("message-error");

  if (person === "sa-oth") {
    messageSuccess.style.display = "none";
    messageInfo.style.display = "none";
    messageError.style.display = "none";
    divContainer = "block";
  } else {
    alert("Invaid Auth");
    divContainer = "none";
    txtEmail.style.display = "none";
    txtPassword.style.display = "none";
    confirmPassword.style.display = "none";
    btnSignup.style.display = "none";
    emailLabel.style.display = "none";
    passwordLabel.style.display = "none";
    // confPasswordLabel.style.display = "none";
    messageSuccess.style.display = "none";
    messageInfo.style.display = "none";
    messageError.style.display = "none";
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
  // const db = firebase.firestore();
  // let numberOfUsers = 0;
  // db.collection("users")
  //   .get()
  //   .then((snap) => {
  //     numberOfUsers = snap.size + 1;
  //   });
  // console.log(numberOfUsers);

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
    const confirmPasswordval = confirmPassword.value;

    if (password === confirmPasswordval) {
      const auth = firebase.auth();
      const db = firebase.firestore();

      //sign in with firebase auth
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          let numberOfUsers = 0;

          db.collection("users")
            .get()
            .then((snap) => {
              numberOfUsers = snap.size;

              db.collection("users")
                .doc(user.user.email)
                .set({
                  email: user.user.email,
                  id: numberOfUsers + 1,
                  timer: "",
                })
                .then((docRef) => {
                  console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                  console.error("Error adding document: ", error);
                });
            });

          messageSuccess.style.display = "block";
          messageInfo.style.display = "none";
          messageError.style.display = "none";

          document.getElementById("message-success").innerHTML =
            user.user.email + " is successfully registered.";
        })
        .catch((err) => {
          console.log(err);
          messageSuccess.style.display = "none";
          messageInfo.style.display = "none";
          messageError.style.display = "block";
          document.getElementById("message-error").innerHTML = err.message;
        });
    } else {
      messageSuccess.style.display = "block";
      messageInfo.style.display = "none";
      messageError.style.display = "block";
      document.getElementById("message-error").innerHTML =
        "Passwords donot match";
    }
  });
})();
