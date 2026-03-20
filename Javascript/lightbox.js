document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".main img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const thumbsContainer = document.getElementById("lightbox-thumbs");

  let currentIndex = 0;

  if (!lightbox || !lightboxImg || images.length === 0) return;

  function showImage(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    updateThumbnails();
  }

  function updateThumbnails() {
    if (!thumbsContainer) return;

    const thumbs = thumbsContainer.querySelectorAll("img");

    thumbs.forEach((thumb, index) => {
      thumb.classList.toggle("active", index === currentIndex);
    });
  }

  function createThumbnails() {
    if (!thumbsContainer) return;

    images.forEach((img, index) => {
      const thumb = document.createElement("img");
      thumb.src = img.src;

      thumb.addEventListener("click", (e) => {
        e.stopPropagation();
        showImage(index);
      });

      thumbsContainer.appendChild(thumb);
    });
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      lightbox.classList.add("show");
      showImage(index);
    });
  });

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      nextImage();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      prevImage();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      lightbox.classList.remove("show");
    });
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.classList.remove("show");
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });

  createThumbnails();

});
