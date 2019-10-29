<template>
  <div>
    <p style="color:green">/* Animation - transition */</p>
    <transition name="listWrap" mode="out-in">
      <div v-if="!isList" key="load">
        load...
      </div>
      <div v-if="isList" key="done">
        done &#10004;
      </div>
    </transition>
    <br><br><br>

    <!--  Инмация и директива  -->
    <p style="color:green">/* Animation - transition-group */</p>
    <transition-group name="list" key="listBox" tag="ul">
      <li v-for="(val, i) in list"
          :style="`transition-delay: ${i * 1.1}s`" :key="`${i}-l`">
        {{ `${i} - ${val}` }}
      </li>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: "Anim",
    beforeMount() {
      const vm = this;
      setTimeout(() => {
        this.isList = true;
        this.list = ['vue', 'react', 'angular'];
      }, 2500)
    },

    data() {
      return {
        list: [],
        isList: false
      }
    },
  }
</script>

<style scoped lang="sass">
  ul
    list-style: none

  .list-enter-active, .list-leave-active, .listWrap-enter-active, .listWrap-leave-active
    transition: .5s

  .list-enter, .list-leave-to
    opacity: 0
    transform: translateY(30px)

  .listWrap-enter, .listWrap-leave-to
    opacity: 0

</style>