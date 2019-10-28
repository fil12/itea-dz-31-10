<template>
  <div id="app">
<!--
    - refs
    - mixins
    - custom directive
    - animation
    - filters
-->

<!--------------------------------------MIXINS----------------------------------------------->

    <div class="tabs">
      <button type="button" :style="{'background-color': curTab === 'mix' ? 'green' : 'transparent'}" @click="curTab = 'mix'">Mixins</button>
      <button type="button" :style="{'background-color': curTab === 'dir' ? 'green' : 'transparent'}" @click="curTab = 'dir'">Directives + Animation</button>
      <button type="button" :style="{'background-color': curTab === 'filt' ? 'green' : 'transparent'}" @click="curTab = 'filt'">Filters</button>
      <button type="button" :style="{'background-color': curTab === 'slider' ? 'green' : 'transparent'}" @click="curTab = 'slider'">Slider</button>
    </div>
    <div class="tabs-content">
      <div id="mixins" v-show="curTab === 'mix'">
        <mixins></mixins>
      </div>

<!--------------------------------------DIRECTIVES + ANIMATION----------------------------------------------->

      <div id="directives" v-if="curTab === 'dir'">
        <directives></directives>
      </div>

<!--------------------------------------FILTERS----------------------------------------------->

      <div id="filters" v-if="curTab === 'filt'">
        <filters></filters>
      </div>

      <slider></slider>

    </div>
  </div>
</template>

<script>
import Mixins from './components/Mixins'
import Directives from './components/Directives'
import Filters from './components/Filters'

import Slider from './components/slider/Slider'

export default {
  name: 'app',

  components: {
    Mixins, Directives, Filters, Slider
  },
  data() {
    return {
      curTab: 'slider'
    }

  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px


</style>
