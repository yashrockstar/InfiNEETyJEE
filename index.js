gsap.registerPlugin(CustomEase);

const customEaseIn = CustomEase.create('custom-ease-in', '0.52, 0.00, 0.48, 1.00');
const fourtyFrames = 1.3333333;
const fiftyFrames = 1.66666;
const twoFrames = 0.666666;
const fourFrames = 0.133333;
const sixFrames = 0.2;

const video = document.querySelector('.hero-video');
const header = document.querySelector('.header');
const book = document.querySelector('.first-desc span');
const open = document.querySelector('.second-desc span');
const copy = document.querySelector('.copyright span');
const scrollToRows = document.querySelectorAll('.scroll-to .scroll-to__row span');
const btnCircle = document.querySelector('.book-btn__circle');
const btnText = document.querySelector('.btn-text span');
const we = document.querySelector('#eve span');
const he = document.querySelector('#ry span');
const lp = document.querySelector('#fo span');
const yo = document.querySelector('#yo span');
const u = document.querySelector('#u span');
const go = document.querySelector('#go span');
const limit = document.querySelector('#limit span');
const less = document.querySelector('#less span');

const showElements = () => {
  const timeline = gsap.timeline();
  timeline
        .fromTo(btnCircle, { autoAlpha: 0 }, { autoAlpha: 1, duration: fourtyFrames, ease: customEaseIn}, 0)
        .fromTo(btnCircle, { scale: 0.417 }, { scale: 1, duration: fourtyFrames, ease: customEaseIn}, 0)
        .fromTo(header, {y: '-0.5rem'}, {y: '0rem', duration: fourtyFrames, ease: customEaseIn}, 0)
        .fromTo(we, {x: '2.7rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, 0)
        .fromTo(book, {y: '0.5rem'}, {y: '0rem', duration: fourtyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(lp, {x: '2.1rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(go, {x: '-1.2rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(less, {x: '-3.2rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(open, {y: '0.3rem'}, {y: '0rem', duration: fourtyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(btnText, {y: '0.4rem'}, {y: '0rem', duration: fourtyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(he, {x: '-2rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(yo, {x: '-3.1rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(u, {x: '4.3rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(limit, {x: '1.9rem'}, { x: '0rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(copy, {y: '0.4rem'}, {y: '0rem', duration: fourtyFrames, ease: customEaseIn}, sixFrames)
        .fromTo(scrollToRows, {y: '0.5rem'}, {y: '0rem', duration: fourtyFrames, ease: customEaseIn}, sixFrames);
  
  return timeline;
}

const hideElements = () => {
  const timeline = gsap.timeline();
  
  timeline
        .fromTo(copy, {y: '0rem'}, {y: '0.4rem', duration: fourtyFrames, ease: customEaseIn}, 0)
        .fromTo(scrollToRows, {y: '0rem'}, {y: '0.5rem', duration: fourtyFrames, ease: customEaseIn}, 0)
        .fromTo(open, {y: '0rem'}, {y: '0.3rem', duration: fourtyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(btnText, {y: '0rem'}, {y: '0.4rem', duration: fourtyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(he, {x: '0rem'}, { x: '-2rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(yo, {x: '0rem'}, { x: '-3.1rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(u, {x: '0rem'}, { x: '4.3rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(limit, {x: '0rem'}, { x: '1.9rem', duration: fiftyFrames, ease: customEaseIn}, twoFrames)
        .fromTo(book, {y: '0rem'}, {y: '0.5rem', duration: fourtyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(lp, {x: '0rem'}, { x: '2.1rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(go, {x: '0rem'}, { x: '-1.2rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(less, {x: '0rem'}, { x: '-3.2rem', duration: fiftyFrames, ease: customEaseIn}, fourFrames)
        .fromTo(btnCircle, { autoAlpha: 1 }, { autoAlpha: 0, duration: fourtyFrames, ease: customEaseIn}, sixFrames)
        .fromTo(btnCircle, { scale: 1 }, { scale: 0.417, duration: fourtyFrames, ease: customEaseIn}, sixFrames)
        .fromTo(header, {y: '0rem'}, {y: '-100%', duration: fourtyFrames, ease: customEaseIn}, sixFrames)
        .fromTo(we, {x: '0rem'}, { x: '2.7rem', duration: fiftyFrames, ease: customEaseIn}, sixFrames);
  
  return timeline;
}

document.addEventListener('DOMContentLoaded', () => {
  showElements();
});

