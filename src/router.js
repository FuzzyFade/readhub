import Vue from 'vue'
import Router from 'vue-router'
import Topic from './views/Topic.vue'
import News from './views/News.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/',
            name: 'homepage',
            component:Topic
        },
        {
            path: '/topic',
            name: 'topic',
            component: Topic
        },
        {
            path: '/news',
            name: 'news',
            meta: { title: 'Readhub - 科技动态' },
            component: News
        },
    ]
});

router.beforeEach(
    (to, from, next) => {
        to.meta.title && (document.title = to.meta.title);
        next()
    }
);

export default router