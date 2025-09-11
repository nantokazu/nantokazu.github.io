document.getElementById('tokenForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const redirectUrl = document.getElementById('redirectUrl').value;
    const verifyUrl = document.getElementById('verifyUrl').value;

    // Redirect the user to the Discord login page with the specified redirect URL
    window.location.href = `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=${encodeURIComponent(redirectUrl)}&response_type=token&scope=identify`;

    // Listen for the token in the URL after redirect
    window.addEventListener('hashchange', function() {
        const urlParams = new URLSearchParams(window.location.hash.substring(1));
        const token = urlParams.get('access_token');

        if (token) {
            // Send the token to the verification URL
            fetch(verifyUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: token })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    });
});
