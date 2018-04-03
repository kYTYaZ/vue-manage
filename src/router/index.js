import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/search',
            component: resolve => require(['@/components/common/index.vue'], resolve),
            children: [{
                    path: '',
                    component: resolve => require(['@/components/common/search.vue'], resolve)
                },
                {
                    path: '/backof:id',
                    component: resolve => require(['@/components/common/search.vue'], resolve)
                },
                {
                    path: '/increase',
                    component: resolve => require(['@/components/page/increase.vue'], resolve)
                },
                {
                    path: '/manage',
                    component: resolve => require(['../components/page/manage.vue'], resolve)
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/editor/markdown/markdown-editor.vue'], resolve)
                },
                {
                    path: '/mavon',
                    component: resolve => require(['../components/page/mavon.vue'], resolve)
                },
                {
                    path: '/link:id',
                    component: resolve => require(['../components/page/question.vue'], resolve)
                },
                {
                    path: '/transfer',
                    component: resolve => require(['../components/page/transfer.vue'], resolve)
                },
                {
                    path: '/notice',
                    component: resolve => require(['../components/common/notice.vue'], resolve)
                },
                {
                    path: '/notice_detail:id',
                    component: resolve => require(['../components/page/notice_detail.vue'], resolve)
                },
                {
                    path: '/achievements',
                    component: resolve => require(['../components/page/achievements.vue'], resolve)
                },
                {
                    path: '/record:id',
                    component: resolve => require(['../components/page/record_detail.vue'], resolve)
                },

            ]
        },
        {
            path: '/login',
            component: resolve => require(['@/components/common/login.vue'], resolve)
        },
    ]
})
