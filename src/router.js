import Vue from 'vue'
import Router from 'vue-router'
import Topic from './views/Topic.vue'
import News from './views/News.vue'
import Tech from './views/Tech.vue'
import Blockchain from './views/Blockchain.vue'
import Jobs from './views/Jobs.vue'
import Toolbar from "@/components/Toolbar"
import Error from  '@/views/Error'
import Details from  '@/views/Details'

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
            components: {
                default:Topic,
                toolbar:Toolbar
            }
        },
        {
            path: '/news',
            name: 'news',
            meta: { title: 'Readhub - 科技动态' },
            components: {
                default:News,
                toolbar:Toolbar
            }
        },
        {
            path: '/tech',
            name: 'tech',
            meta: { title: 'Readhub - 开发者资讯' },
            components: {
                default:Tech,
                toolbar:Toolbar
            }
        },
        {
            path: '/blockchain',
            name: 'blockchain',
            meta: { title: 'Readhub - 区块链快讯' },
            components: {
                default:Blockchain,
                toolbar:Toolbar
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            meta: { title: 'Readhub - 招聘行情' },
            components: {
                default:Jobs,
                toolbar:Toolbar
            }
        },{
            path: '/topic/:id',
            name: 'details',
            components: {
                default:Details,
                toolbar:Toolbar
            }
        },{
            path: '*',
            name: 'error',
            meta: { title: '404-找不到页面'},
            components: {
                error:Error
            },
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