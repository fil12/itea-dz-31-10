<template>
  <div class="container">
    <div class="row">
      <div class="col-12" style="position: relative">
<!--        <div class="wrap">-->
<!--          <transition-group tag="div" name="slider" class="img-container" :style="{width: params.imgContainerWidth + 'px'}">-->
<!--            <div v-for="(img, i) in imgs" :key="img">-->
<!--              <img :src="img" alt="">-->
<!--            </div>-->
<!--          </transition-group>-->
<!--          <div class="buttons">-->
<!--            <button @click="prev">prev</button>-->
<!--            <button @click="next">next</button>-->
<!--          </div>-->
<!--        </div>-->

        <div class="slides">
          <transition-group
                  name="slide"
                  enter-class="slide-in"
                  leave-class="slide-out"
                  enter-active-class="animated slide-in-active"
                  leave-active-class="animated slide-out-active"
          >
            <div
                    v-for="(img, i) in imgs"
                    v-if="i === active"
                    :key="i"
            >
              <img :src="img" alt="">
            </div>
          </transition-group>
        </div>
        <span
                class="prev"
                @click="move(-1)"
        >
          prev
        </span>
        <span
                class="next"
                @click="move(1)"
        >
          next
        </span>
      </div>
    </div>
  </div>

  
</template>

<script>
  export default {
    name: "Slider",

    data() {
      return {
        imgContainerWidth: 500,
        active: 0,
        imgs: [
          'https://cdn.cnn.com/cnnnext/dam/assets/190121090951-04-blood-moon-global-01212019-exlarge-169.jpg',
          'https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg',
          'https://cdn.eso.org/images/thumb300y/eso1907a.jpg'
        ]
      }
    },
    methods: {
      next() {
        this.slides.push(this.imgs.shift())
      },
      prev() {
        this.slides.unshift(this.imgs.pop())
      },

      move(amount) {
        let newActive
        const newIndex = this.active + amount
        if (newIndex > this.imgs.length-1) newActive = 1
        if (newIndex === 0) newActive = this.imgs.length-1
        this.active = newActive || newIndex
      },
    },
  }
</script>

<style lang="sass" scoped>


  .slides
    font-size: 40px
    display: flex
    height: auto
    align-items: center
    justify-content: center
    font-weight: bold

    img
      max-width: 500px

    .animated
      transition: all .4s
      position: absolute
      transform: translateX(-50%)


    .slide-in
      opacity: 0
      transform: translateX(50%)


    .slide-in-active
      transition-delay: 150ms


    .slide-out
      opacity: 1


    .slide-out-active
      opacity: 0
      transform: translateX(-50%)


  .prev,
  .next
    display: inline-block
    width: 50px
    height: 50px
    border: 2px solid #221e21
    color: #221e21
    border-radius: 50%
    margin-left: 25px
    cursor: pointer
    line-height: 48px
    text-align: center
    text-indent: -2px
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)

    &:hover
      background: #221e21
      color: #fff
      transform: scale(1.2)


    &:active
      transform: translate(0, 3px) scale(1.2)

  .next
    margin-left: auto
    margin-right: 25px
    text-indent: 2px





</style>