const words = [
    " A Graphic Designer",
    "A Web Developer",
    "A Student",
];
let i = 0;
setInterval(() => {
    document.getElementById("typing").innerHTML = words[i];
    i++;
    if (i >= words.length) {
        i = 0;
    }
}, 2000);

// Animate skill bars when the skills section scrolls into view
function animateSkills(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const fills = document.querySelectorAll('.skills-grid .skill');
            fills.forEach((skill) => {
                const percent = skill.getAttribute('data-fill') || '0';
                const fillEl = skill.querySelector('.fill');
                const percentLabel = skill.querySelector('.skill-percent');
                fillEl.style.width = percent + '%';
                percentLabel.textContent = percent + '%';
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(animateSkills, { threshold: 0.3 });
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) observer.observe(skillsSection);
});