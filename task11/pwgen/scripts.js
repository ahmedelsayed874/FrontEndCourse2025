let characterLengthLbl = document.getElementById("length-value");
let characterLengthInput = document.getElementById("length");
characterLengthInput.addEventListener("input", function () {
  characterLengthLbl.textContent = characterLengthInput.value;
});

document.getElementById("generate").addEventListener("click", function () {
    console.log("Generate button clicked");
    
  let length = characterLengthInput.value;
  if (length == 0) {
    alert("Please select a password length greater than 0.");
    return;
  }

  let includeUppercase = document.getElementById("uppercase").checked;
  let includeLowercase = document.getElementById("lowercase").checked;
  let includeNumbers = document.getElementById("numbers").checked;
  let includeSymbols = document.getElementById("symbols").checked;

  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let numberChars = "0123456789";
  let symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  /* i commented this because it's not granted that at least one character of each selected type will be in the password
  let allChars = "";
  if (includeUppercase) allChars += uppercaseChars;
  if (includeLowercase) allChars += lowercaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  if (allChars === "") {
    //allChars += lowercaseChars;
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }*/

    /* these code lead me to new idea which will have less code and better randomize pw
    let selCount = 0;
    if (includeUppercase) selCount++;
    if (includeLowercase) selCount++;
    if (includeNumbers) selCount++;
    if (includeSymbols) selCount++;
    console.log("selCount:", selCount);
    if (selCount === 0) {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";
    while (password.length < length) {
        //i added these flags to randomize the order of character types in the password in case of lenth < 4, so that it's not always the same order
        let a = true, b = true, c = true, d = true;
        
        if (selCount > 0 && length < selCount) {
            //reset all flags
            if (includeUppercase) a = false;
            if (includeLowercase) b = false;
            if (includeNumbers) c = false;
            if (includeSymbols) d = false;
            
            let rand = Math.floor(Math.random() * 4);
            console.log("rand:", rand);

            if (rand === 0) a = true;
            else if (rand === 1) b = true;
            else if (rand === 2) c = true;
            else d = true;
        }

        if (a && includeUppercase) {
            password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
            if (password.length >= length) break;
        }
        if (b && includeLowercase) {
            password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
            if (password.length >= length) break;
        }
        if (c && includeNumbers) {
            password += numberChars[Math.floor(Math.random() * numberChars.length)];
            if (password.length >= length) break;
        }
        if (d && includeSymbols) {
            password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
            if (password.length >= length) break;
        }

        console.log("Current password:", "'" + password + "'", ", Length:", password.length, "type:", typeof password);

        // if (password === "") {
        //     alert("Please select at least one character type.");
        //     return;
        // }
    }*/

    /* this is the beter solution but it doesn't grantee one char type at least
    let password = "";
    while (password.length < length) {
        let functions = [];
        if (includeUppercase) {
            functions.push(() => {
                password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
            });
        }
        if (includeLowercase) {
            functions.push(() => {
                password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
            });
        }
        if (includeNumbers) {
            functions.push(() => {
                password += numberChars[Math.floor(Math.random() * numberChars.length)];
            });
        }
        if (includeSymbols) {
            functions.push(() => {
                password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
            });
        }

        console.log("functions:", functions);

        if (functions.length === 0) {
            alert("Please select at least one character type.");
            return;
        }

        let idx = Math.floor(Math.random() * functions.length);
        console.log("idx:", idx);
        functions[idx]();
    }*/

    //the following solution introduced the BEST solution that achived these rules:
    //- at least one type of each select char. type.
    //- randomize charaters order
    let passwordChars = [];
    while (passwordChars.length < length) {
        if (includeUppercase) {
            passwordChars.push( uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)] );
            if (passwordChars.length >= length) break;
        }
        if (includeLowercase) {
            passwordChars.push( lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)] );
            if (passwordChars.length >= length) break;
        }
        if (includeNumbers) {
            passwordChars.push( numberChars[Math.floor(Math.random() * numberChars.length)] );
            if (passwordChars.length >= length) break;
        }
        if (includeSymbols) {
            passwordChars.push( symbolChars[Math.floor(Math.random() * symbolChars.length)] );
            if (passwordChars.length >= length) break;
        }

        if (passwordChars.length === 0) {
            alert("Please select at least one character type.");
            return;
        }
    }

    console.log("generated password characters:", passwordChars, ", Length:", passwordChars.length);

    let password = '';
    while (passwordChars.length > 0) {
        let randIdx = Math.floor(Math.random() * passwordChars.length);
        console.log("passwordChars.length:", passwordChars.length ,", randIdx:", randIdx);
        password += passwordChars[randIdx];
        
        let deleted = passwordChars.splice(randIdx, 1);
        console.log('deleted:', deleted);
    }

    console.log("password:", password);
    
    document.getElementById("password").value = password;
});

function copyPassword() {
    let value = document.getElementById('password').value;
    navigator.clipboard.writeText(value);
    alert('Password coppied (' + value + ')');
}