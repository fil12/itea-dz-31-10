<template >
  <div>
    <p style="color:green"></p>
    <img alt="Vue logo" src="../../assets/logo.png" v-tooltip:left="'test'">
  </div>
  
</template>

<script>
  export default {
    name: "ToolTip",
    directives: {
      tooltip(el, binding) {
        let {value, arg} = binding;
        let side = arg || 'bottom';
        el.addEventListener('click', (e) => {
          let target = e.target;
          let parent = target.parentElement;
          if(parent.querySelector('.c-tooltip')) return;
          let tooltipBox = document.createElement('div')
          tooltipBox.classList.add('c-tooltip', `side-${side}`)
          tooltipBox.innerText = value;
          parent.classList.add('p-relative');
          parent.appendChild(tooltipBox);
          setTimeout(() => {
            parent.removeChild(tooltipBox)
          }, 1000)
        })
      },
    }
  }
</script>

<style lang="sass">
  .p-relative
    position: relative

  .c-tooltip
    position: absolute
    z-index: 1
    border: 1px solid #41b883
    box-shadow: 0 0 0 1px #35495e
    padding: 5px

  .side
    &-left
      left: 0
    &-right
      right: 0
    &-top
      top: 0
    &-bottom
      bottom: 0
</style>