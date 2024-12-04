function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}
// Select all sections and navigation links
const sections = document.querySelectorAll(".section, #contact");
const navLinks = document.querySelectorAll(".nav-link");

// Scroll event to highlight active section link
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // Handle footer explicitly
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1) {
    current = "contact";
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Add smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Ensure the logic is also run on page load
window.onload = function () {
  console.log("Page has been loaded!");
  window.dispatchEvent(new Event("scroll")); // Trigger scroll event on load to highlight the correct section
};


// Function to handle image selection and display corresponding text
function myFunction(img) {
  // Get the full image container and image elements
  var fullImage = document.getElementById("full-image");
  var imageText = document.getElementById("image-text"); // Added for text display
  
  // Set the source of the full image
  fullImage.src = img.src;
  
  // Display corresponding text based on the selected image
  if (img.alt === "Html Certificate") {
    imageText.textContent = "Html Certificate";  // Change text for Mountain image
  } else if (img.alt === "CSS Certificate") {
    imageText.textContent = "CSS Certificate";  // Change text for Snow image
  } else if (img.alt === "Arduino Certificate") {
    imageText.textContent = "Arduino Certificate";  // Change text for Sea image
  } else if (img.alt === "SQL Certificate") {
    imageText.textContent = "SQL Certificate";  // Change text for Tree image
  }
  
  // Show the full image container
  document.getElementById("image-display").style.display = "block";
}

// Function to close the full-size image display
function closeImage() {
  document.getElementById("image-display").style.display = "none"; // Hide the full-size image container
}


