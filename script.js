document.addEventListener('DOMContentLoaded', () => {
  // Get references to the DOM elements
  const subscribeButton = document.getElementById('subscribe');
  const dismissButton = document.getElementById('dismiss');
  const emailInput = document.getElementById('email');
  const modal = document.getElementById('exampleModal');
  const successDescription = document.querySelector('.success-description .bold');
  const errorMessage = document.getElementById('error-message');
  const container = document.querySelector('.container');

  // Get CSS variable color
  const rootStyles = getComputedStyle(document.documentElement);
  const errorColor = rootStyles.getPropertyValue('--primary-tomato').trim();


  // Add event listener for the subscribe button
  subscribeButton.addEventListener('click', () => {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

    // Check if the email is valid
    if (emailRegex.test(email)) {
      successDescription.textContent = email; // Display the email in the success description
      modal.style.display = 'flex'; // Show the modal
      errorMessage.classList.add('hidden'); // Hide the error message
      emailInput.value = ''; // Clear the email input
      container.classList.add('hidden'); // Hide the container
    } else {
      errorMessage.classList.remove('hidden'); // Show the error message
      errorMessage.style.color = errorColor; // Set the error message color to the CSS variable color

      emailInput.style.border = `1px solid ${errorColor}`; // Set the border color of the email input
      emailInput.style.color = errorColor; // Set the text color of the email input
      emailInput.style.backgroundColor = 'rgba(255, 99, 71, 0.1)'; // Set the background color of the email input
    }
  });

  // Add event listener for the dismiss button
  dismissButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
    container.classList.remove('hidden'); // Show the container
  });
});