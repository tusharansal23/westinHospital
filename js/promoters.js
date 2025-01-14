function updateImage(imageSrc, doctorName, doctorDescription) {
    // Update the image source
    document.getElementById("active-image").src = imageSrc;

    // Optional: Update doctor information dynamically
    const infoContainer = document.querySelector(".txt-block");
    infoContainer.innerHTML = `
        <h3 class="h3-md steelblue-color">Our Doctors</h3>
        <div class="promot py-4">
            <h5 class="steelblue-color">${doctorName}</h5>
            <p>${doctorDescription}</p>
        </div>
    `;
}


document.addEventListener("DOMContentLoaded", () => {
    const starRatings = document.querySelectorAll(".star-rating");

    starRatings.forEach((ratingElement) => {
        const ratingValue = parseFloat(ratingElement.dataset.rating); // Get rating from data attribute
        const percentage = (ratingValue / 5) * 100; // Calculate percentage of stars to fill

        // Set the width of the filled stars dynamically
        const filledStars = ratingElement.querySelector(".filled");
        filledStars.style.width = `${percentage}%`;
    });
});
