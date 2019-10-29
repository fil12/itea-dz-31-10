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
      <button type="button" :style="{'background-color': curTab === 'dir' ? 'green' : 'transparent'}" @click="curTab = 'dir'">Directives</button>
      <button type="button" :style="{'background-color': curTab === 'filt' ? 'green' : 'transparent'}" @click="curTab = 'filt'">Filters</button>
      <button type="button" :style="{'background-color': curTab === 'anim' ? 'green' : 'transparent'}" @click="curTab = 'anim'">Animation</button>
      <button type="button" :style="{'background-color': curTab === 'slider' ? 'green' : 'transparent'}" @click="curTab = 'slider'" style="display: none;">Slider</button>
    </div>
    <div class="tabs-content">
      <div id="mixins" v-show="curTab === 'mix'">
        <mixins></mixins>
      </div>

<!--------------------------------------DIRECTIVES----------------------------------------------->

      <div id="directives" v-if="curTab === 'dir'">
        <directives></directives>
      </div>

<!--------------------------------------FILTERS----------------------------------------------->

      <div id="filters" v-if="curTab === 'filt'">
        <filters></filters>
      </div>

<!--------------------------------------ANIMATION----------------------------------------------->
      <div id="animation" v-if="curTab === 'anim'">
        <animation></animation>
      </div>

    </div>
  </div>

<!--  c/h work

    Создать миксин для кнопок:
    - props: type, label
    - метод с именем handler:
      - принимает два параметра $event и callback
      - добавить любой код, который будет общим для всех кнопок или вывести в консоль строку
      - callback вызывать до $emit и передавать в него $event

    -----------------------------------------------------

    СОздать директивы:

    1 afterLoop
       - должна вызывать переданный колбек в конце цикла
    ------
    2 classBuilder
       - создать несколько класов с одинаковым префиксом
       - директива дожна принимать модификатор класса
       - добавлять элементу соответствущий класс


    -----------------------------------------------------

    Создать фильтр
    - принемает число и массив слов
    - выводит склоненное слово в зависимости от числа

    -----------------------------------------------------

    Создать слайдер

    -----------------------------------------------------

    Рассширение функционала:

      - при запуске страницы, вывести формы регистрации/входа (использовать анимацию появления формы)
      - если юзеры отсутствуют таб "вход" должен быть неактивным
      - показать приветствие после регистрации/входа, скрыть форму и вывисти to-do-list (использовать анимацию вывода)
      - при регистрации создавать юзера и сохранять to-do-list к текущему юзеру
      - при входе найти юзера и вывести его to-do-list
      - написать метод определяющий у контента наличие разрешения картинк (.jpg .png), в конце строки.
        В случаи наличия таковых вывести как картинку и хранить в каждом тодо обьекте тип

      - выводить общее количество элементов списка в виде "number - элемет(а/ов)"

-->


</template>

<script>
import Mixins from './components/Mixins'
import Directives from './components/Directives'
import Filters from './components/Filters'
import Animation from './components/Anim'


export default {
  name: 'app',

  components: {
    Mixins, Directives, Filters, Animation
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
