window.onload = function () {

    // No numbers in "Full Name"
    let fullName = document.getElementById('fullName');
    fullName.onkeydown = (e) => {
        let letter = e.key;
        if (letter >= 0) {
            return false
        }
    }

    // No dots or commas in "Username"
    let userName = document.getElementById('userName');
    userName.onkeydown = (e) => {
        let punctuation = e.key;
        if (punctuation === "." || punctuation === ",") {
            return false
        }
    }

    // Checkbox "Terms & Conditions". Agreed / disagreed
    let check = document.getElementById('checked');
    check.oninput = () => {
        if (check.checked === true) {
            console.log('Agreed');
        } else {
            console.log('Disagreed');
        }
    }

    // SIGN UP
    //INPUTS
    let email = document.getElementById('email');
    let pass = document.getElementById('password');
    let repPass = document.getElementById('repeatPassword');

    // POPUP
    let mainWindow = document.getElementById('main');
    let popup = document.getElementById('popup');

    // MAIN BUTTON ONCLICK
    let btn = document.getElementById('btn');
    btn.onclick = () => {
        if (fullName.value === "") {
            return alert("Full Name missing");
        }
        if (userName.value === "") {
            return alert("Username missing");
        }
        if (email.value === "") {
            return alert("Email missing");
        }
        if (pass.value === "") {
            return alert("Password missing");
        }
        if (repPass.value === "") {
            return alert("Repeat password");
        }

        // PASSWORD TOO SHORT + IS IDENTICAL
        if (pass.value.length < 8) {
            return alert('Password is too short');
        }
        if (pass.value !== repPass.value) {
            return alert('Error. Repeat password again');
        }

        // CHECKBOX / DISAGREED?
        if (check.checked !== true) {
            return alert('You must accept our terms and confidentiality policy');
        }

        // POPUP
        popup.style.display = 'Block';
        mainWindow.style.filter = 'Blur(6px)';
        mainWindow.scrollIntoView({behavior: "smooth"});
    }

    // CLOSE POPUP + ALREADY HAVE AN ACCOUNT
    let popupBtn = document.getElementById('popupBtn');

    let mainTitle = document.getElementById('mainTitle');
    let mainText = document.getElementById('mainText');
    let labelName = document.getElementById('labelName');
    let labelEmail = document.getElementById('labelEmail');
    let labelRepPass = document.getElementById('labelRepPassword');
    let checkText = document.getElementById('agreed');

    let accountLink = document.getElementById('link');

    let mainPhoto = document.getElementById('mainPhoto');

    // FUNCTION FOR REMOVING UNNECESSARY ELEMENTS
    function removeElements () {
        mainText.remove();
        labelName.remove();
        fullName.remove();
        userName.value = '';
        labelEmail.remove();
        email.remove();
        pass.value = '';
        labelRepPass.remove();
        repPass.remove();
        check.remove();
        checkText.remove();
        accountLink.remove();

        mainTitle.innerText = 'Log in to the system';
        mainPhoto.style.marginTop = '100px';
        btn.innerText = 'Sign in';
    }

    // BTN ONCLICK: AFTER REGISTRATION
    function loginHandler () {
        if (userName.value === "") {
            return alert("Enter username");
        } if (pass.value === "") {
            return alert("Enter password");
        }
        alert('Welcome, ' + userName.value);
    }

    popupBtn.onclick = () => {
        popup.style.display = 'none';
        mainWindow.style.filter = 'none';
        removeElements();
        
        btn.onclick = () => {
            loginHandler();
            removeElements();
        }
    }

    // BTN ONCLICK: IF YOU HAVE AN ACCOUNT
    accountLink.onclick = () => {
        removeElements();

        btn.onclick = () => {
            loginHandler();
            removeElements()
        }
    }
// Homework 12. Added first comment
}