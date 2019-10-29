function scrollTo(elemTo, dur, timeFn, callback) {
  let duration = dur || 2000;
  let destination = elemTo;
  let easing = timeFn || 'easeOutCubic';
  const easings = {
    linear(t) {
      return t;
    },
    easeOutCubic(t) {///
      return (--t) * t * t + 1;
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (Math.ceil(window.pageYOffset) === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    window.requestAnimationFrame(scroll);
  }

  window.requestAnimationFrame(scroll);
}

export default {
  methods: {
    scrollTo
  }
}