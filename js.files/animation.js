let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let animation = document.querySelector('.animation');
let animationList = animation.querySelector('.list');
let animationItems = animation.querySelectorAll('.list .item');

// Assuming there's a separate thumbnail container
let thumbnail = animation.querySelector('.thumbnail');

// Add event listeners for the next and previous buttons
nextBtn.onclick = function () {
    moveAnimation('next');
};

prevBtn.onclick = function () {
    moveAnimation('prev');
};

// Function to move the slider
function moveAnimation(direction) {
    let animationItems = animation.querySelectorAll('.list .item'); // Get updated items each time
    let thumbnailItems = thumbnail.querySelectorAll('.item'); // Ensure it's getting the latest thumbnail items

    if (direction === 'next') {
        // Move the first item to the end of the slider
        animationList.appendChild(animationItems[0]);

        // Update the thumbnails
        thumbnail.appendChild(thumbnailItems[0]);
        animation.classList.add('next');
       // animation.classList.remove('prev'); // Remove the 'prev' class if it exists
    } else if (direction === 'prev') {
        // Move the last item to the beginning of the slider
        animationList.insertBefore(animationItems[animationItems.length - 1], animationItems[0]);

        // Update the thumbnails
        thumbnail.insertBefore(thumbnailItems[thumbnailItems.length - 1], thumbnailItems[0]);
        animation.classList.add('prev');
        animation.classList.remove('next'); // Remove the 'next' class if it exists
    }
}


