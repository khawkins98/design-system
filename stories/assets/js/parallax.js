import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SlowMo } from "gsap/EasePack";
import * as utility from './resize';
import './viewport';

// Register GSAP required plugins and effects.
gsap.registerPlugin(ScrollTrigger, SlowMo);

// parallaxEffect
export function parallaxEffect(selector, direction) {

  'use strict';

  // Parallax selector
  let parallaxSelector = $(selector);
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
  let desktop = window.matchMedia('(min-width: 768px)');
  // Check if horizontal or vertical.
  direction = direction ? direction : 'horizontal';
  // Enable mobile incase of mobile device.
  let mobileEnabled = (direction == 'horizontal') ?  false : true;
  const num = (window.UNDP.dir == 'rtl') ? 1 : 0;

  // parallaxInit function.
  const parallaxInit = () => {
    // This will only init on Desktop, unless specified to also init on mobile.
    if (desktop.matches || mobileEnabled) {
      let parallaxSlideElem = undefined;
      let transformStart = 'top-=100 center';
      let transformEnd = "bottom+=50 center";
      let offsetHeight;

      if (direction == 'horizontal') {
        // Incase of swiper slides we wrap slides in group of 3.
        const swiperSlides = $(parallaxSelector).find('.swiper-slide');
        if (swiperSlides.parent('.swiper-wrapper').length) {
          let idx = 0;
          for (let j = 0; j < swiperSlides.length; j += 3) {
            idx = (j == 3) ? 1 : 0;
            swiperSlides.slice(j, j + 3).wrapAll("<div class='stats-card-parallax parallax-slide-"+`${idx}`+"'></div>");
          }
        }
        parallaxSlideElem = $('[class*="parallax-slide-"]');
      } else {
        transformEnd = 'bottom+=85 center';
      }

      // Incase of vertical direction we enable mobile media query as well.
      let scrollMedia = mobileEnabled ? "all" : "(min-width: 768px)";

      // ScrollTrigger Function.
      ScrollTrigger.matchMedia({
        // desktop
        [scrollMedia]: function() {
          const triggerTimeline = (elem, triggerElem, start, end, reverse) => {
            // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...
            const scrollSlide = gsap.utils.toArray(elem);
            scrollSlide.forEach((element, k) => {
              const timeline = gsap.timeline({
                // Define scrollTrigger options.
                scrollTrigger: {
                  trigger: triggerElem,
                  start: start,
                  end: end,
                  scrub: true,
                  ease: 'SlowMo',
                  // 'PreventOverlaps' stutters on vertical parallax so turn it off.
                  preventOverlaps: (direction == 'horizontal') ? true : false,
                  fastScrollEnd: 1,
                }
              });
              // Incase of 2 slides we add mirror transforms in negative for the other.
              reverse = (k + 1) % 2 != num;
              if (direction == 'horizontal') {
                // Define timeline from and to parameters.
                timeline.from(element, {
                  xPercent: 70 * (reverse ? -1 : 1), duration: 4, ease: "SlowMo",
                }).to(element, {
                  xPercent: 10 * (reverse ? 1 : -1), duration: 4, ease: "SlowMo",
                });
              } else {
                timeline.from(element, {
                  yPercent: 10 * (reverse ? -1 : 1), duration: 2, ease: "SlowMo",
                }).to(element, {
                  yPercent: 10 * (reverse ? 1 : -1), duration: 2, ease: "SlowMo",
                });
              }
              // This is required when the page refreshes and scrolltrigger is broken.
              ScrollTrigger.refresh();
            });

          }

          const parallaxSlideArr = gsap.utils.toArray(parallaxSelector);
          let reverse = false;
          let trigger;
          parallaxSlideArr.forEach((trigger, i) => {
            trigger = trigger;
            // Add class based on index incase of multiple parallax.
            $(trigger).addClass("parallax-slider-" + i);
            if (direction == 'horizontal') {
              transformStart = 'top-=50px center'
            } else {
              parallaxSlideElem = $(trigger).find('.column');
            }
          });

          // Trigger Timeline for scrollTrigger.
          if (parallaxSlideElem) {
            triggerTimeline(parallaxSlideElem, trigger, transformStart, transformEnd, reverse);
          }

          // This will pause all instances of gsap globaltimeline incase if the ScrollTrigger.matchMedia condition does not satisfy.
          return function() {
            if (!gsap.globalTimeline.paused()) {
              gsap.globalTimeline.pause();
            }
          };

        }
      });
    }
  }

  // Init parallax for first time.
  let init = false;
  if (!init) {
    parallaxInit();
    init = true;
  }

  // Custom windowResize;
  utility.windowResize($(window), function() {
    // Scroll bug needs to be reset on resize.
    ScrollTrigger.refresh();
    if (desktop.matches && gsap.globalTimeline.paused()) {
      parallaxInit();
    }
  });
}

// parallaxlines Function.
export function parallaxlines() {
  $(window).scroll(() => {
    // variables
    var $sticky = $('.parallax .glide__slides');
    var stickyTop = $sticky.offset().top;
    var windowTop = $(window).scrollTop();
    var diff = windowTop + 500;
    // calculates the window width
    const windowWidth = $(window).width();
    $('.parallax .glide__slides').each(function () {
      if (windowWidth > window.UNDP.breakpoints.SMALL) {
        $('.parallax').removeClass('lines-background');
        if ($(this).isInViewport()) {
          if (stickyTop < diff) {
            $('.parallax').toggleClass('lines-background');
          }
        }
      }
    });
  });
}
