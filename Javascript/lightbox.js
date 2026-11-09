document.addEventListener("DOMContentLoaded", () => {
	const images = [...document.querySelectorAll(".main img")];
	const lightbox = document.getElementById("lightbox");
	const lightboxImage = document.getElementById("lightbox-img");
	const closeButton = document.getElementById("lightbox-close");
	const previousButton = document.getElementById("prevBtn");
	const nextButton = document.getElementById("nextBtn");
	const thumbnails = document.getElementById("lightbox-thumbs");

	if (!lightbox || !lightboxImage || images.length === 0) return;

	let currentIndex = 0;
	const updateImage = (index) => {
		currentIndex = (index + images.length) % images.length;
		lightboxImage.src = images[currentIndex].src;
		lightboxImage.alt = images[currentIndex].alt;
		thumbnails?.querySelectorAll("img").forEach((thumbnail, thumbnailIndex) => {
			thumbnail.classList.toggle("active", thumbnailIndex === currentIndex);
		});
	};
	const closeLightbox = () => lightbox.classList.remove("show");

	images.forEach((image, index) => {
		image.addEventListener("click", () => {
			updateImage(index);
			lightbox.classList.add("show");
		});
	});

	if (thumbnails) {
		images.forEach((image, index) => {
			const thumbnail = document.createElement("img");
			thumbnail.src = image.src;
			thumbnail.alt = image.alt;
			thumbnail.addEventListener("click", (event) => {
				e.stopPropagation();
				updateImage(index);
			});
			thumbnails.append(thumbnail);
		});
	}

	previousButton?.addEventListener("click", (event) => {
		event.stopPropagation();
		updateImage(currentIndex - 1);
	});
	nextButton?.addEventListener("click", (event) => {
		event.stopPropagation();
		updateImage(currentIndex + 1);
	});
	closeButton?.addEventListener("click", closeLightbox);
	lightbox.addEventListener("click", (event) => {
		if (event.target === lightbox) closeLightbox();
	});
	document.addEventListener("keydown", (event) => {
		if (!lightbox.classList.contains("show")) return;
		if (event.key === "Escape") closeLightbox();
		if (event.key === "ArrowRight") updateImage(currentIndex + 1);
		if (event.key === "ArrowLeft") updateImage(currentIndex - 1);
	});
});
