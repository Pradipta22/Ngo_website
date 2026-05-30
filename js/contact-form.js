/* ============================================================
   CONTACT-FORM.JS — Contact Form Validation + EmailJS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Floating label effect
  const inputs = form.querySelectorAll('.form-input, .form-textarea');
  inputs.forEach(input => {
    // Check on load if input has value
    if (input.value.trim()) {
      input.classList.add('has-value');
    }

    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
      if (input.value.trim()) {
        input.classList.add('has-value');
      } else {
        input.classList.remove('has-value');
      }
    });

    // Clear error on input
    input.addEventListener('input', () => {
      clearFieldError(input);
    });
  });

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;

    const submitBtn = form.querySelector('.form-submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    // Show loading state
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-flex';

    try {
      // Simulate email sending (replace with EmailJS integration)
      // To use EmailJS:
      // 1. Sign up at https://www.emailjs.com/
      // 2. Create an email template
      // 3. Uncomment and configure the code below:
      //
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      //   from_name: form.querySelector('#name').value,
      //   from_email: form.querySelector('#email').value,
      //   phone: form.querySelector('#phone').value,
      //   subject: form.querySelector('#subject').value,
      //   message: form.querySelector('#message').value,
      // });

      // Simulated delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Success
      showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
      form.reset();
      inputs.forEach(input => input.classList.remove('has-value'));

    } catch (error) {
      showToast('Failed to send message. Please try again later.', 'error');
      console.error('Form submission error:', error);
    } finally {
      submitBtn.disabled = false;
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';
    }
  });
});

function validateForm(form) {
  let isValid = true;
  const fields = [
    { id: 'name', message: 'Please enter your full name' },
    { id: 'email', message: 'Please enter a valid email address', validate: validateEmail },
    { id: 'phone', message: 'Please enter a valid phone number', validate: validatePhone, optional: true },
    { id: 'subject', message: 'Please enter a subject' },
    { id: 'message', message: 'Please enter your message' },
  ];

  fields.forEach(field => {
    const input = form.querySelector(`#${field.id}`);
    if (!input) return;

    const value = input.value.trim();

    if (!field.optional && !value) {
      showFieldError(input, field.message);
      isValid = false;
    } else if (value && field.validate && !field.validate(value)) {
      showFieldError(input, field.message);
      isValid = false;
    }
  });

  return isValid;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  if (!phone) return true;
  return /^[\+]?[\d\s\-\(\)]{7,15}$/.test(phone);
}

function showFieldError(input, message) {
  const group = input.parentElement;
  group.classList.add('error');

  let errorEl = group.querySelector('.form-error');
  if (!errorEl) {
    errorEl = document.createElement('span');
    errorEl.className = 'form-error';
    group.appendChild(errorEl);
  }
  errorEl.textContent = message;

  // Shake animation
  input.style.animation = 'none';
  input.offsetHeight; // Trigger reflow
  input.style.animation = 'shake 0.4s ease';
}

function clearFieldError(input) {
  const group = input.parentElement;
  group.classList.remove('error');
  const errorEl = group.querySelector('.form-error');
  if (errorEl) errorEl.remove();
}
