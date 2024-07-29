document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');
        window.location.href = 'chat.html';
    });
});