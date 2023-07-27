

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); 

      navLinks.forEach((navLink) => navLink.classList.remove('active'));

      link.classList.add('active');

      if (link.id === 'signUpLink') {
        const signUpSection = document.querySelector('.signup-form');
        signUpSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const signUpForm = document.getElementById('signupForm');
  signUpForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const username = signUpForm.elements['username'].value;
    const password = signUpForm.elements['password'].value;

    
    console.log('Username:', username);
    console.log('Password:', password);

    signUpForm.reset();
  });
});
