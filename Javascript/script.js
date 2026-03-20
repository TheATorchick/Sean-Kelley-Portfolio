document.addEventListener("DOMContentLoaded", () => {

	/* =======================
	   MENU SYSTEM
	======================= */
	const menu = document.getElementById("sideMenu");
	const openBtn = document.getElementById("menuBtn");
	const closeBtn = document.getElementById("closeBtn");
	const overlay = document.getElementById("overlay");

	if (menu && openBtn && closeBtn && overlay) {

		function openMenu() {
			menu.classList.add("active");
			overlay.classList.add("active");
			openBtn.classList.add("hidden");
		}

		function closeMenu() {
			menu.classList.remove("active");
			overlay.classList.remove("active");
			openBtn.classList.remove("hidden");
		}

		openBtn.addEventListener("click", openMenu);
		closeBtn.addEventListener("click", closeMenu);
		overlay.addEventListener("click", closeMenu);

		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && menu.classList.contains("active")) {
				closeMenu();
			}
		});

		/* ACTIVE PAGE HIGHLIGHT */
		const links = document.querySelectorAll("#sideMenu a");

		links.forEach(link => {
			if (link.pathname === window.location.pathname) {
				link.classList.add("active");
			}
		});

	}


	/* =======================
	   FOOTER SCROLL REVEAL
	======================= */
	const footer = document.getElementById("footer");
const handle = document.getElementById("footer-handle");

handle.addEventListener("click", () => {

  if (!footer.classList.contains("active")) {
    // OPEN
    footer.classList.add("active");

    // allow browser to register starting position
    requestAnimationFrame(() => {
      footer.classList.add("open");
    });

  } else {
    // CLOSE
    footer.classList.remove("open");

    // wait for animation to finish before resetting
    setTimeout(() => {
      footer.classList.remove("active");
    }, 400);
  }

});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && footer.classList.contains("active")) {
    footer.classList.remove("open");

    setTimeout(() => {
      footer.classList.remove("active");
    }, 400);
  }
});


});
