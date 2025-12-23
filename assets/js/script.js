const toggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    toggle.classList.remove('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

const p1 = "ed";
const p2 = "valera";
const p3 = "work";
const p4 = "gmail";
const email = `${p1}.${p2}.${p3}@${p4}.com`;

document.getElementById("email").innerHTML = `
  <a href="mailto:${email}">${email}</a>
`;


/* ================= SERVICIOS - TOGGLE CARDS ================= */

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {

    // cerrar las demás tarjetas
    document.querySelectorAll('.service-card').forEach(other => {
      if (other !== card) {
        other.classList.remove('active');
      }
    });

    // alternar la actual
    card.classList.toggle('active');
  });
});
