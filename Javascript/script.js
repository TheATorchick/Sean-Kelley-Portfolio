document.addEventListener("DOMContentLoaded", () => {
	const menu = document.getElementById("sideMenu");
	const openButton = document.getElementById("menuBtn");
	const closeButton = document.getElementById("closeBtn");
	const overlay = document.getElementById("overlay");

	if (menu && openButton && closeButton && overlay) {
		const openMenu = () => {
			menu.classList.add("active");
			overlay.classList.add("active");
			openButton.classList.add("hidden");
		};
		const closeMenu = () => {
			menu.classList.remove("active");
			overlay.classList.remove("active");
			openButton.classList.remove("hidden");
		};

		openButton.addEventListener("click", openMenu);
		closeButton.addEventListener("click", closeMenu);
		overlay.addEventListener("click", closeMenu);
		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape" && menu.classList.contains("active")) closeMenu();
		});

		menu.querySelectorAll("a").forEach((link) => {
			if (link.pathname === window.location.pathname) link.classList.add("active");
		});
	}

	const footer = document.getElementById("footer");
	const footerHandle = document.getElementById("footer-handle");
	if (!footer || !footerHandle) return;

	let closeTimer;
	const closeFooter = () => {
		footer.classList.remove("open");
		window.clearTimeout(closeTimer);
		closeTimer = window.setTimeout(() => footer.classList.remove("active"), 400);
	};
	const toggleFooter = () => {
		window.clearTimeout(closeTimer);
		if (footer.classList.contains("active")) {
			closeFooter();
			return;
		}
		footer.classList.add("active");
		requestAnimationFrame(() => footer.classList.add("open"));
	};

	footerHandle.addEventListener("click", toggleFooter);
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && footer.classList.contains("active")) closeFooter();
	});
});
