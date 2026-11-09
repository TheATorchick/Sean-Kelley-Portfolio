document.addEventListener("DOMContentLoaded", () => {
	const menuButton = document.getElementById("pdfMenuBtn");
	const sidebar = document.getElementById("pdfSidebar");
	const overlay = document.getElementById("pdfOverlay");
	const viewer = document.getElementById("pdfViewer");
	const thumbnails = [...document.querySelectorAll("#pdfSidebar [data-pdf]")];

	if (!menuButton || !sidebar || !overlay || !viewer) return;

	const closeMenu = () => {
		sidebar.classList.remove("active");
		overlay.classList.remove("active");
		menuButton.classList.remove("hidden");
	};
	const openMenu = () => {
		sidebar.classList.add("active");
		overlay.classList.add("active");
		menuButton.classList.add("hidden");
	};
	const selectPdf = (thumbnail) => {
		viewer.data = thumbnail.dataset.pdf;
		thumbnails.forEach((item) => item.classList.toggle("active", item === thumbnail));
		closeMenu();
	};

	menuButton.addEventListener("click", openMenu);
	overlay.addEventListener("click", closeMenu);
	thumbnails.forEach((thumbnail) => {
		thumbnail.addEventListener("click", () => selectPdf(thumbnail));
		thumbnail.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				selectPdf(thumbnail);
			}
		});
	});
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") closeMenu();
	});
});
