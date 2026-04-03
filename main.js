document.addEventListener("DOMContentLoaded", () => {
  const mapEl = document.getElementById("map");
  if (!mapEl) return;

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
      coords: [8.500, 4.550],
      title: "Campus waste overflow near engineering block",
      status: "Claimed",
    },
    {
      coords: [-26.5, 31.40],
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
});