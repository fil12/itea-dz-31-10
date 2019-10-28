<template>
  <div id="app">
<!--
    - refs
    - mixins
    - custom directive
    - animation
    - filters
-->

    <btn></btn>

<!--------------------------------------MIXINS----------------------------------------------->

    <div class="tabs">
      <button type="button" @click="curTab = 'mix'">Mixins</button>
      <button type="button" @click="curTab = 'dir'">Directives + Animation</button>
      <button type="button" @click="curTab = 'filt'">Filters</button>
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

    </div>
  </div>
</template>

<script>
import Mixins from './components/Mixins'
import Directives from './components/Directives'
import Filters from './components/Filters'

import Btn from './components/ripple/Btn'

export default {
  name: 'app',

  components: {
    Mixins, Directives, Filters, Btn
  },
  data() {
    return {
      curTab: 'mix'
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
