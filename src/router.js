import Vue from 'vue'
import Router from 'vue-router'
import Topic from './views/Topic.vue'
import News from './views/News.vue'
import Tech from './views/Tech.vue'
import Blockchain from './views/Blockchain.vue'
import Jobs from './views/Jobs.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/',
            redirect: '/topic'
        },
        {
            path: '/topic',
            name: 'topic',
            meta: { title: 'Readhub'},
            component: Topic
        },
        {
            path: '/news',
            name: 'news',
            meta: { title: 'Readhub - 科技动态' },
            component: News
        },
        {
            path: '/tech',
            name: 'tech',
            meta: { title: 'Readhub - 开发者资讯' },
            component: Tech
        },
        {
            path: '/blockchain',
            name: 'blockchain',
            meta: { title: 'Readhub - 区块链快讯' },
            component: Blockchain
        },
        {
            path: '/jobs',
            name: 'jobs',
            meta: { title: 'Readhub - 招聘行情' },
            component: Jobs
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