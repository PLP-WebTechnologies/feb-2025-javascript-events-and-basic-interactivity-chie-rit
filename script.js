let currentSlide = 1;

showSlide(currentSlide);

function changeSlide(n) {
	showSlide(currentSlide += n);
}

function showSlide(n) {
	let i;
	let slides = document.querySelectorAll(".slider-image");
	if (n > slides.length) {
		currentSlide = 1;
	}

	if (n < 1) {
		currentSlide = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

    slides[currentSlide-1].style.display = "block"; 
}

// Shipping script
document.getElementById('shippingForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Get values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const address = document.getElementById('address').value;
      const city = document.getElementById('city').value;
      const county = document.getElementById('county').value;
      const contact = document.getElementById('email').value;

      // Update receipt
      document.getElementById('rName').textContent = `Name: ${firstName+ ' ' +lastName}`;
      document.getElementById('rAddress').textContent = `Address: ${address}`;
      document.getElementById('rCity').textContent = `City: ${city}, ${county}`;
      document.getElementById('rContact').textContent = `Contact: ${contact}`;

      // Show receipt
      document.getElementById('receipt').style.display = 'block';
    });

const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateEmail() {
      const email = emailInput.value.trim();
      if (!email) {
        emailError.textContent = "Email is required.";
        emailInput.classList.add("invalid");
        return false;
      } else if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        emailInput.classList.add("invalid");
        return false;
      } else {
        emailError.textContent = "";
        emailInput.classList.remove("invalid");
        emailInput.classList.add("valid");
        return true;
      }
    }

    function validatePassword() {
      const password = passwordInput.value;
      if (!password) {
        passwordError.textContent = "Password is required.";
        passwordInput.classList.add("invalid");
        return false;
      } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        passwordInput.classList.add("invalid");
        return false;
      } else {
        passwordError.textContent = "";
        passwordInput.classList.remove("invalid");
        passwordInput.classList.add("valid");
        return true;
      }
    }

    // Real-time feedback
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);

    // On form submit
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();

      if (isEmailValid && isPasswordValid) {
        alert("Login successful!");
        form.reset();
        emailInput.classList.remove("valid");
        passwordInput.classList.remove("valid");
      }
    });


