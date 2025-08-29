function showLoginPrompt() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 1000;

    // Create prompt box
    const box = document.createElement('div');
    box.style.background = '#fff';
    box.style.padding = '24px';
    box.style.borderRadius = '8px';
    box.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    box.style.display = 'flex';
    box.style.flexDirection = 'column';
    box.style.gap = '12px';
    box.style.minWidth = '250px';

    // Username input
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Username';

    // Password input
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';

    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Login';

    // Handle submit
    submitBtn.onclick = function() {
        const username = usernameInput.value;
        const password = passwordInput.value;
        overlay.remove();
        
        console.log(`Username: ${username}, Password: ${password}`);
        alert(`Username: ${username}\nPassword: ${password}`);
    };

    // Append elements
    box.appendChild(usernameInput);
    box.appendChild(passwordInput);
    box.appendChild(submitBtn);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
}

// Example usage:
showLoginPrompt();