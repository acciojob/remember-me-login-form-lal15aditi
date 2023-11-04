//your JS code here. If required.
// Check for saved details in local storage
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        // If saved details exist, show "Login as existing user" button
        if (savedUsername && savedPassword) {
            const existingUserButton = document.createElement('button');
            existingUserButton.id = 'existing';
            existingUserButton.textContent = 'Login as existing user';
            existingUserButton.addEventListener('click', () => {
                alert(`Logged in as ${savedUsername}`);
            });
            document.body.appendChild(existingUserButton);
			// existingUserButton.style.display = "hidden";
        }

        // Handle form submission
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Get input values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('checkbox').checked;

            if (rememberMe) {
                // Save details to local storage
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                // Remove saved details from local storage
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            // Show alert
            alert(`Logged in as ${username}`);
        });