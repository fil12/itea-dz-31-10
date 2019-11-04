<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 style="color:red">/* filters */</h1>
            </div>
            <card v-for="news in newsArr" :key="`news_${news.id}`" :news="news"></card>
        </div>
        <my-input
                v-model="FilterForm.element"
                placeholder="Введите кол-во элементов"
                type="text"/>
        <p>Вы ввели {{FilterForm.element}} {{FilterForm.element | formatEnding(text_forms)}}</p>
    </div>

</template>

<script>
    import Card from './Card'
    import MyInput from "./MyInput";

    export default {
        name: "Filters",
        components: {Card, MyInput},
        filters: {
            formatEnding(val, text_forms) {
                console.log(val);
                val = Math.abs(val) % 100;
                var val1 = val % 10;
                if (val > 10 && val < 20) {
                    return text_forms[2];
                }
                if (val1 > 1 && val1 < 5) {
                    return text_forms[1];
                }
                if (val1 == 1) {
                    return text_forms[0];
                }
                return text_forms[2];
            }
        },
        data() {
            return {
                FilterForm: {
                    element: null
                },

                text_forms: [
                  'элемент', 'элемента', 'элементов'
                ],
                newsArr: [
                    {
                        id: 1,
                        date: '2019-06-30T18:09:01+00:00',
                        title: 'news 1',
                        desc: 'description of news 1',
                        img: 'https://media.wsls.com/photo/2017/04/24/Whats%20News%20Today_1493062809311_9576980_ver1.0_1280_720.png',
                        link: '#'
                    },
                    {
                        id: 2,
                        date: '2018-03-15T18:08:04+00:00',
                        title: 'news 2',
                        desc: 'description of news 2',
                        img: '',
                        link: '#'
                    },
                    {
                        id: 3,
                        date: '2016-08-22T18:08:04+00:00',
                        title: 'news 3',
                        desc: 'description of news 3',
                        img: 'https://www.ctvnews.ca/polopoly_fs/1.4344128.1553095687!/httpImage/image.png_gen/derivatives/landscape_620/image.png',
                        link: '#'
                    }
                ]
            }
        },
    }
</script>

<style lang="sass">

</style>