/* EDIT THESE VALUES TO PERSONALIZE */
const PROFILE = {
  name: "Abdulloh Abdurahmonov",
  age: 15,
  focus: "Cybersecurity",
  location: "Uzbekistan",
  bio: `Hi — I'm Abdulloh, a 15-year-old developer building clever, practical projects. I focus on cybersecurity, embedded systems (Arduino), robotics, and web apps. I love solving hard problems and shipping useful stuff.`,
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "mailto:abdulloh@example.com",
  cv: "#"
};

/* DATA (projects, skills) - edit or add items here */
const PROJECTS = [
  {
    id: "smart-greenhouse",
    title: "Smart Green House",
    short: "IoT greenhouse: sensors, automation, and remote control.",
    tags: ["Arduino", "MQTT", "Flutter"],
    img: "https://via.placeholder.com/800x450?text=Smart+Green+House",
    link: "#"
  },
  {
    id: "saxaul-robot",
    title: "Saxaul Planting Robot",
    short: "Competition robot for reforestation and field-work.",
    tags: ["Robotics", "LEGO", "Autonomous"],
    img: "https://via.placeholder.com/800x450?text=Saxaul+Robot",
    link: "#"
  },
  {
    id: "wind-turbine",
    title: "Wind Turbine Optimization",
    short: "Design and sim improvements for O Wind Turbine project.",
    tags: ["Blender","CFD","Design"],
    img: "https://via.placeholder.com/800x450?text=Wind+Turbine",
    link: "#"
  }
];

const SKILLS = [
  { name: "Python", level: 85 },
  { name: "Arduino / Embedded", level: 80 },
  { name: "HTML/CSS/JS", level: 82 },
  { name: "Blender (3D)", level: 70 },
  { name: "Flutter", level: 65 },
  { name: "Cybersecurity", level: 60 }
];

/* DOM helpers and rendering */
function el(sel){ return document.querySelector(sel); }
function elAll(sel){ return Array.from(document.querySelectorAll(sel)); }

document.addEventListener("DOMContentLoaded", () => {
  // set dynamic header info
  document.title = `${PROFILE.name} — Portfolio`;
  el("#hero-bio").textContent = PROFILE.bio;
  el("#stat-age").textContent = PROFILE.age;
  el("#stat-focus").textContent = PROFILE.focus;
  el("#stat-location").textContent = PROFILE.location;

  el("#about-text").textContent = PROFILE.bio;
  el("#year").textContent = new Date().getFullYear();

  // social links
  el("#github-link").href = PROFILE.github;
  el("#cv-link").href = PROFILE.cv;
  el("#email-link").href = PROFILE.email;
  el("#contact-email").href = PROFILE.email;
  el("#plain-email").textContent = PROFILE.email.replace("mailto:","") || "abdulloh@example.com";
  el("#plain-github").href = PROFILE.github;
  el("#plain-github").textContent = PROFILE.github.replace(/^https?:\/\//,"");

  // render projects
  const grid = el("#projects-grid");
  grid.innerHTML = PROJECTS.map(p => `
    <article class="card">
      <img src="${p.img}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p class="muted">${p.short}</p>
      <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
        ${p.tags.map(t => `<span style="font-size:12px;padding:6px 10px;background:rgba(255,255,255,0.02);border-radius:999px;color:var(--muted)">${t}</span>`).join("")}
      </div>
      <div style="margin-top:12px;display:flex;justify-content:space-between;align-items:center">
        <a href="${p.link}" target="_blank" rel="noopener" style="color:#9fd3ff;text-decoration:underline">View</a>
        <small class="muted">Updated: 2025</small>
      </div>
    </article>
  `).join("");

  // render skills
  const skillsGrid = el("#skills-grid");
  skillsGrid.innerHTML = SKILLS.map(s => `
    <div>
      <div class="skill-row"><div style="font-weight:600">${s.name}</div><div class="muted">${s.level}%</div></div>
      <div class="progress"><span style="width:${s.level}%;"></span></div>
    </div>
  `).join("");

  // nav link behavior (smooth scroll + close mobile)
  elAll('[data-link]').forEach(a => {
    a.addEventListener('click', (ev) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith("#")) {
        ev.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // close mobile nav if open
        document.getElementById("nav-list").classList.remove("show");
        document.getElementById("nav-toggle").setAttribute("aria-expanded","false");
      }
    });
  });

  // mobile nav toggle
  const toggle = el("#nav-toggle");
  const navList = el("#nav-list");
  toggle.addEventListener("click", () => {
    const open = navList.classList.toggle("show");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // simple contact form handler (demo only)
  el("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks — message received (demo). Replace this with a backend or a mailto link to actually send messages.");
    e.target.reset();
  });
});
