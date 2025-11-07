// Mobile menu functionality
const mobileMenuButton = document.querySelector('.md\:hidden');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu fixed top-16 left-0 w-full bg-white shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out md:hidden';
mobileMenu.innerHTML = `
    <div class="py-4 px-6 space-y-4">
        <a href="#about" class="block font-medium hover:text-primary transition">About</a>
        <a href="#projects" class="block font-medium hover:text-primary transition">Projects</a>
        <a href="#skills" class="block font-medium hover:text-primary transition">Skills</a>
        <a href="#contact" class="block font-medium hover:text-primary transition">Contact</a>
    </div>
`;
document.body.appendChild(mobileMenu);

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-x-full');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('-translate-x-full');
    }
});
