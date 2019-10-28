export default {
  directives: {
    ripple(el, bind) {
      let { color } = bind;
      el.style.position = 'relative'
      el.style.overflow = 'hidden'
      const span = document.createElement('span')
      let styles = `width:0;height:0;position:absolute;left:0;right:0;transform:translate(-50%, -50%);border-radius:50%;background-color:${color};transition:.3s ease`
      span.setAttribute(
        'style',
        styles)
      el.appendChild(span)
      el.addEventListener('click', function () {
        this.children[0].setAttribute('style', styles)
      })
    }
  }
}