 // Check if user is logged in
 document.addEventListener('DOMContentLoaded', function() {
    const loggedIn = localStorage.getItem('loggedIn');
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    
    if (!loggedIn || loggedIn !== 'true') {
        // Redirect to home page if not logged in
        window.location.href = 'index.html';
        return;
    }
    
    // Display user name
    const userNameElement = document.getElementById('user-name');
    userNameElement.textContent = userName || userEmail;
    
    // Logout functionality
    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        window.location.href = 'index.html';
    });
    
    // Resume creation option
    const createResumeCard = document.getElementById('create-resume');
    createResumeCard.addEventListener('click', function() {
        window.location.href = 'resumet.html';
    });
    
    // Resume upload option
    const uploadResumeCard = document.getElementById('upload-resume');
    uploadResumeCard.addEventListener('click', function() {
        window.location.href = 'resume.html';
    });
});
