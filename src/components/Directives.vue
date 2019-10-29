<template>
  <div>
    <h1 style="color:red">/* Directives */</h1>
    <div>
      <p style="color:green"></p>
      <img alt="Vue logo" src="../assets/logo.png" v-tooltip:left="'test'">
    </div>

  </div>

</template>

<script>

  export default {
    name: "Directives",

    /* Пользовательские директивы */
    directives: {


      directiveName: {/* может быть методом, автоматически навешивается на два хука: bind и update */
        /* вне зависимости от испоьзования принимают все два параметра
        * el - элемент к которому привязана директива
        * binding - обьект с кучей свойств (подробно - https://ru.vuejs.org/v2/guide/custom-directive.html)
        *  */
        /* хуки жизненного цикла */
        bind() {}, /*вызывается однократно, при первичном связывании директивы с элементом. Здесь можно поместить код инициализации*/
        inserted(el) { /*вызывается после вставки связанного элемента внутрь элемента родителя (заметьте, что сам родитель может на этот момент и не принадлежать ещё основному дереву элементов).*/

        },
        update() {},/*вызывается после обновления VNode компонента-контейнера, но, возможно, до обновления дочерних элементов. Значение директивы к этому моменту может измениться, а может и нет. Сравнивая текущее и прошлое значения, вы можете избежать избыточных операций*/
        componentUpdated() {},/*вызывается после обновления как VNode компонента-контейнера, так и VNode его потомков.*/
        unbind() {}/*вызывается однократно, при отвязывании директивы от элемента*/
      },

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
    display: inline-block

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