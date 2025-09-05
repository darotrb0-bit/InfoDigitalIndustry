document.addEventListener("DOMContentLoaded", function () {
  // --- Theme Switching Logic ---
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  function toggleTheme() {
    body.classList.toggle("dark-theme");
    const isDarkMode = body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    themeToggle.innerHTML = isDarkMode ? sunIcon : moonIcon;
  }

  function applyInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    const isNight = new Date().getHours() >= 18 || new Date().getHours() < 6;
    let useDarkMode = false;

    if (savedTheme) {
      useDarkMode = savedTheme === "dark";
    } else {
      useDarkMode = isNight;
    }

    if (useDarkMode) {
      body.classList.add("dark-theme");
    }

    themeToggle.innerHTML = body.classList.contains("dark-theme")
      ? sunIcon
      : moonIcon;
  }

  themeToggle.addEventListener("click", toggleTheme);
  applyInitialTheme();

  // --- Link Rendering Logic (no changes here) ---
  const linkData = {
    bot: [
      {
        name: "Chart Bot",
        url: "https://t.me/NewFormDI_bot",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect x="4" y="12" width="16" height="8" rx="2"/><path d="M2 12h20"/><path d="M17.5 12V8a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v4"/></svg>`,
      },
    ],
    personal: [
      { name: "ប៊ន ចន្ថា", url: "https://t.me/Ch_Tha002" },
      { name: "ឡោក ឆាណុន", url: "https://t.me/Maanon885" },
      { name: "រឿន ស្រីណែត", url: "https://t.me/roeurnsreyneth" },
      { name: "ប៉ី ថាវរី", url: "https://t.me/Peythavry" },
      { name: "សយ គឹមសុដានី", url: "https://t.me/Soykeomsodany" },
      { name: "ហឹន ចាន់ថៃ", url: "https://t.me/CHANTHAI6435" },
    ],
    group: [
      {
        name: "ក្រុមការងារ",
        url: "https://t.me/ITSupportKR",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      },
    ],
    system: [
      {
        name: "Link 1 (សូមដាក់ Link)",
        url: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="14" x2="21" y2="3"></line><path d="M21 3L11 3L11 14L21 3 Z"></path><path d="M21 14l-4 4h-7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h11"></path></svg>`,
      },
    ],
  };

  const personIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
  const navButtons = document.querySelectorAll(".nav-button");
  const linkDisplayBox = document.getElementById("link-display-box");

  function renderLinks(groupKey) {
    linkDisplayBox.innerHTML = "";
    linkDisplayBox.style.animation = "none";
    void linkDisplayBox.offsetWidth;
    linkDisplayBox.style.animation = "fadeIn 0.5s ease";
    const links = linkData[groupKey] || [];
    if (links.length === 0) {
      linkDisplayBox.innerHTML = "<p>គ្មានទិន្នន័យ</p>";
      return;
    }
    links.forEach((link) => {
      const linkElement = document.createElement("a");
      linkElement.href = link.url;
      linkElement.className = "link-item";
      linkElement.target = "_blank";
      linkElement.rel = "noopener noreferrer";
      let icon = link.icon;
      if (groupKey === "personal" && !icon) {
        icon = personIcon;
      }
      linkElement.innerHTML = `<div class="icon-wrapper">${icon}</div><span>${link.name}</span>`;
      linkDisplayBox.appendChild(linkElement);
    });
  }

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      navButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const group = button.dataset.group;
      renderLinks(group);
    });
  });

  renderLinks("bot");
});
