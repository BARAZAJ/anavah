document.addEventListener('DOMContentLoaded', (event) => {
    // Set current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
});

// Function to adjust sidebar (if needed)
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const button = document.getElementById('toggle-button');
    
    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
        mainContent.classList.remove('expanded');
        button.textContent = 'Hide Menu';
    } else {
        sidebar.classList.add('hidden');
        mainContent.classList.add('expanded');
        button.textContent = 'Menu';
    }
}
