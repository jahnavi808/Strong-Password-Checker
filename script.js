function checkStrength() {
    let password = document.getElementById("password").value;
    let strengthText = document.getElementById("strength");

    let length = password.length >= 8;
    let upper = /[A-Z]/.test(password);
    let lower = /[a-z]/.test(password);
    let number = /[0-9]/.test(password);
    let special = /[^A-Za-z0-9]/.test(password);

    update("length", length);
    update("upper", upper);
    update("lower", lower);
    update("number", number);
    update("special", special);

    let score = [length, upper, lower, number, special].filter(Boolean).length;

    if (score <= 2) {
        strengthText.textContent = "Strength: Weak ❌";
        strengthText.style.color = "red";
    } else if (score <= 4) {
        strengthText.textContent = "Strength: Medium ⚠️";
        strengthText.style.color = "orange";
    } else {
        strengthText.textContent = "Strength: Strong ✅";
        strengthText.style.color = "green";
    }
}

function update(id, condition) {
    let element = document.getElementById(id);
    if (condition) {
        element.className = "valid";
        element.textContent = "✅ " + element.textContent.slice(2);
    } else {
        element.className = "invalid";
        element.textContent = "❌ " + element.textContent.slice(2);
    }
}
