function openBookDetails(title, image, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalDescription').textContent = description;
  
    document.getElementById('bookModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('bookModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('bookModal');
    if (event.target === modal) {
        closeModal();
    }
}
