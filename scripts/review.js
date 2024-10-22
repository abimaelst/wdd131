document.addEventListener('DOMContentLoaded', () => {
    const reviewCountElement = document.getElementById('reviewCount');
    let reviewCount = localStorage.getItem('reviewCount') || '0';
    reviewCountElement.textContent = reviewCount;
});