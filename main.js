document.addEventListener("DOMContentLoaded", () => {
  // LIVE FEED FILTER LOGIC
  const cards = document.querySelectorAll(".uc-card");
  const statusButtons = document.querySelectorAll("[data-status-filter]");
  const categoryButtons = document.querySelectorAll("[data-category-filter]");

  let activeStatus = "all";
  let activeCategory = "all";

  function applyFilters() {
    cards.forEach((card) => {
      const cardStatus = card.getAttribute("data-status");
      const cardCategory = card.getAttribute("data-category");

      const statusMatch =
        activeStatus === "all" || cardStatus === activeStatus;
      const categoryMatch =
        activeCategory === "all" || cardCategory === activeCategory;

      if (statusMatch && categoryMatch) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

  statusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeStatus = btn.getAttribute("data-status-filter");

      statusButtons.forEach((b) => b.classList.remove("uc-chip-active"));
      btn.classList.add("uc-chip-active");

      applyFilters();
    });
  });

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.getAttribute("data-category-filter");

      categoryButtons.forEach((b) => b.classList.remove("uc-chip-active"));
      btn.classList.add("uc-chip-active");

      applyFilters();
    });
  });

  // MAP LOGIC (only runs on map.html)
  const mapEl = document.getElementById("map");
  if (mapEl) {
    const map = L.map("map").setView([-6.5, 15], 3);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const spots = [
      {
        coords: [-26.495, 31.388],
        title: "Illegal dump site blocking storm drain",
        status: "Resolved",
      },
      {
        coords: [8.5, 4.55],
        title: "Campus waste overflow near engineering block",
        status: "Claimed",
      },
      {
        coords: [-26.5, 31.4],
        title: "Polluted river stretch near Ngwane Park",
        status: "Unclaimed",
      },
      {
        coords: [8.51, 4.54],
        title: "Open burning of electronic waste",
        status: "In Progress",
      },
      {
        coords: [-26.49, 31.39],
        title: "Erosion and waste on hillside footpath",
        status: "Spotted",
      },
      {
        coords: [8.49, 4.56],
        title: "Plastic debris on Tanke riverbank",
        status: "Resolved",
      },
    ];

    spots.forEach((s) => {
      L.marker(s.coords)
        .addTo(map)
        .bindPopup(`<strong>${s.title}</strong><br>Status: ${s.status}`);
    });
  }
});
