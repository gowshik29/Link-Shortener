document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You should implement your own server-side authentication here.
    // For demonstration purposes, we're using a simple check here.
    if (username === 'user' && password === 'password') {
        // Redirect to the desired page after successful login
        window.location.href = 'welcome.html'; // Replace 'welcome.html' with your desired page URL
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});

