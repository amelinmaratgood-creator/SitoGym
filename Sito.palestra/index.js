const elements = document.querySelectorAll('.conCont');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));
const sala = document.querySelectorAll('.conCont1');

const Pesi = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));
sala.forEach(el => Pesi.observe(el))

elements.forEach(el => observer.observe(el));
const cont = document.querySelectorAll('.conCont3');

const Cont = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));
cont.forEach(el => Cont.observe(el))



const elements1 = document.querySelectorAll('.conCont2');

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));
sala.forEach(el => Pesi.observe(el))
elements1.forEach(el => observer1.observe(el));

const items = document.querySelectorAll('.offerte');

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

items.forEach(el => observer2.observe(el));

elements.forEach(el => observer.observe(el));
sala.forEach(el => Pesi.observe(el))
elements1.forEach(el => observer1.observe(el));

const nyt = document.querySelectorAll('.nytri');

const nyt2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

nyt.forEach(el => nyt2.observe(el));

const pro = document.querySelectorAll('.prodot');

const pro2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

pro.forEach(el => pro2.observe(el));



const lenis = new Lenis({
    duration: 1.3,
    smooth: true,
    lerp: 0.08
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

