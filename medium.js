function adjustTitle() {
  const titleElement = document.querySelector('.title');
  if (window.innerWidth < 1000) {
      titleElement.innerHTML = "Pamela<br>Morris-Perez"; // Use innerHTML to include <br>
  } else {
      titleElement.innerHTML = "Pamela Morris-Perez"; // Use innerHTML to include <br>
  }
}

// Initial check
adjustTitle();

// Adjust title on window resize
window.addEventListener('resize', adjustTitle);