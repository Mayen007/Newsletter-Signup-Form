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
    successDescription.textContent = email;
    modal.style.display = 'flex';
    errorMessage.classList.add('hidden');
    emailInput.value = '';
    container.classList.add('hidden');
  } else {
    errorMessage.classList.remove('hidden');
    errorMessage.style.color = errorColor;

    emailInput.style.border = `1px solid ${errorColor}`;
    emailInput.style.color = errorColor;
    emailInput.style.backgroundColor = 'rgba(255, 99, 71, 0.1)';
  }
});

// Add event listener for the dismiss button
dismissButton.addEventListener('click', () => {
  modal.style.display = 'none';
  container.classList.remove('hidden');
});