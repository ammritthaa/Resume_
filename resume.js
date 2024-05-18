// JavaScript to add interactivity if needed
document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = '#e0f7fa';
        });

        cell.addEventListener('mouseout', () => {
            cell.style.backgroundColor = '#f9f9f9';
        });
    });
});
