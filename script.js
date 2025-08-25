// Dynamically load skills from assets folder for experience section
window.addEventListener('DOMContentLoaded', () => {
  const skillsContainer = document.getElementById('skills-container');
  if (!skillsContainer) return;

  // Dynamically fetch all image files from the assets folder for experience section
  fetch('./assets/images')
    .then(response => response.text())
    .then(html => {
      // Create a DOM parser to extract file names from the directory listing
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      // This works if the server provides a directory listing (works in some dev servers)
      const links = Array.from(doc.querySelectorAll('a'));
      const imageFiles = links
        .map(link => link.getAttribute('href'))
        .filter(file => file && (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.gif') || file.endsWith('.svg')));

      imageFiles.forEach(file => {
        // Extract only the filename, not the path
        const filename = file.split('/').pop();
        const name = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.src = `./assets/images/${filename}`;
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
    })
});
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark mode toggle logic





