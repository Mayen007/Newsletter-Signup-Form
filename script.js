let subscribeButton = document.getElementById('subscribe');
subscribeButton.addEventListener('click', function () {
  let email = document.getElementById('email').value;
  // Regular expression to validate email address format
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailPattern.test(email)) {
    console.log(email);
  } else {
    alert('Please enter a valid email address.');
  }
}); 
// For the above code, the email value will be logged to the console when the subscribe button is clicked.