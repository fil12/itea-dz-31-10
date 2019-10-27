<template>
  <div :class="'col-'+cardSize">
    <div class="card">
      <img :src="getImg()" :alt="news.title" class="card-img-top">
      <div class="card-body">
        <div class="card-title">
          <span><b>{{ news.title }}</b></span>
          <br>
          <span><i>{{ news.date | formatDate }}</i></span>
        </div>
        <div class="card-text">{{ news.desc }}</div>
      </div>
      <div class="card-footer">
        <a :href="news.link" class="card-link">more</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      news: {
        type: Object,
        required: true
      },
      cardSize: {
        type: Number,
        default: 4
      }
    },
    filters: {
      /* filters - по своей сути те же функции/методы  */
      formatDate(val, lang, options) {
        let date = new Date(val);
        let lng = 'ru' || lang;
        const params = options || {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };
        return date.toLocaleString(lng, params)
      }
    },
    data() {
      return {
        defImg: 'https://cdn.ymaws.com/www.itsmfusa.org/resource/resmgr/images/more_images/news-3.jpg'
      }
    },
    methods: {
      getImg() {
        return this.news.img ? this.news.img : this.defImg
      }
    },
  }
</script>

<style lang="sass">

</style>