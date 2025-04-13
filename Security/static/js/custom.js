// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

// Our clients section
document.addEventListener("DOMContentLoaded", function () {
    $('#teamCarousel').carousel({
        interval: 4000, // Matches the example's speed (4 seconds)
        pause: "hover",
        wrap: true
    });
});

// Statistics Section (About Page)
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 50; // Adjust this value to control speed

  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const increment = Math.ceil(target / speed);

          if (count < target) {
              counter.innerText = count + increment;
              setTimeout(updateCount, 20); // Smooth counting effect
          } else {
              counter.innerText = target + "+"; // Add plus sign after reaching target
          }
      };

      updateCount();
  });
});