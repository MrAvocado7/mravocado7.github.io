function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("expandedImg");
    const caption = document.getElementById("caption");

    modal.style.display = "block"; // Show the modal
    modalImg.src = img.src; // Set the modal image source
    caption.innerHTML = img.alt; // Set the caption from the image's alt
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide the modal
}