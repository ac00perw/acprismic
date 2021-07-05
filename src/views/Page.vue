<template>
    <div>
        <h1 class="text-4xl font-bold mt-4" v-if="data.title[0]">{{ data.title[0].text }}</h1>
        <div class="home w-full flex flex-wrap container mx-auto" v-if="data">
            <div class="w-full md:w-1/2 pr-2">
                <picture v-if="data && data.hero_image">
                    <img :src="data.hero_image.url" />
                </picture>
            </div>
            <div class="w-full md:w-1/2 text-left">
                <template v-for="body, index in data.body">
                    <p v-html="body.text" :key="index"></p>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import htmlSerializer from './path-to-html-serializer'
// import linkResolver from '../linkResolver'

export default {
    name: 'Page',
    props: ['prismicPage'],
    components: {
        // HelloWorld
    },
    data() {
        return {
            data: null
        }
    },
    created() {
        console.log(this.$prismic);
        this.getContent();
    },
    methods: {
        getContent() {
            var vm = this;
            vm.$prismic.client.getByUID('page', vm.prismicPage)
                .then((d) => vm.data = d.data);

        }
    }
}
</script>