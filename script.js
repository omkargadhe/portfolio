// Dynamically load skills from assets folder for experience section
window.addEventListener('DOMContentLoaded', () => {
  const skillsContainer = document.getElementById('skills-container');
  if (!skillsContainer) return;

  // Dynamically fetch all image files from the assets folder for experience section
fetch('assets/images.json')
  .then(res => res.json())
  .then(imageFiles => {
    imageFiles.forEach(filename => {
      const name = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const article = document.createElement('article');
      const img = document.createElement('img');
      img.src = `assets/images/${filename}`;
      img.alt = `${name} icon`;
      img.className = 'icon';
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.textContent = name;
      div.appendChild(h3);
      article.appendChild(img);
      article.appendChild(div);
      skillsContainer.appendChild(article);
    });
  });
});
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark mode toggle logic





