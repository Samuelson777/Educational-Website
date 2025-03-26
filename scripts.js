document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript is loaded");

    // Learn More Button
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            alert('Explore our resources to start your knowledge seeking journey!');
        });
    }

    // Comment Form Submission
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from submitting normally

            const name = document.getElementById('name').value;
            const comment = document.getElementById('comment').value;

            // Create a new list item for the comment
            const commentsList = document.getElementById('commentsList');
            const newComment = document.createElement('li');
            newComment.textContent = `${name}: ${comment}`;
            commentsList.appendChild(newComment);

            // Clear the form fields
            commentForm.reset();
        });
    }
});