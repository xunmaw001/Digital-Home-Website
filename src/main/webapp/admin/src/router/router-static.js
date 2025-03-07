import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import jiatingjiyu from '@/views/modules/jiatingjiyu/list'
    import jiatingqinzishipin from '@/views/modules/jiatingqinzishipin/list'
    import jiatingriji from '@/views/modules/jiatingriji/list'
    import news from '@/views/modules/news/list'
    import qinyoumokuai from '@/views/modules/qinyoumokuai/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryHuodongxinxiCollection from '@/views/modules/dictionaryHuodongxinxiCollection/list'
    import dictionaryJiatingqinzishipin from '@/views/modules/dictionaryJiatingqinzishipin/list'
    import dictionaryJiatingriji from '@/views/modules/dictionaryJiatingriji/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionaryQinyoumokuai from '@/views/modules/dictionaryQinyoumokuai/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShenfen from '@/views/modules/dictionaryShenfen/list'
    import dictionaryYonghu from '@/views/modules/dictionaryYonghu/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryHuodongxinxiCollection',
        name: '收藏表类型',
        component: dictionaryHuodongxinxiCollection
    }
    ,{
        path: '/dictionaryJiatingqinzishipin',
        name: '视频类型',
        component: dictionaryJiatingqinzishipin
    }
    ,{
        path: '/dictionaryJiatingriji',
        name: '日记类型',
        component: dictionaryJiatingriji
    }
    ,{
        path: '/dictionaryNews',
        name: '新闻类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionaryQinyoumokuai',
        name: '动态类型',
        component: dictionaryQinyoumokuai
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShenfen',
        name: '身份',
        component: dictionaryShenfen
    }
    ,{
        path: '/dictionaryYonghu',
        name: '家庭',
        component: dictionaryYonghu
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/jiatingjiyu',
        name: '家庭寄语',
        component: jiatingjiyu
      }
    ,{
        path: '/jiatingqinzishipin',
        name: '家庭亲子视频',
        component: jiatingqinzishipin
      }
    ,{
        path: '/jiatingriji',
        name: '家庭日记',
        component: jiatingriji
      }
    ,{
        path: '/news',
        name: '新闻信息',
        component: news
      }
    ,{
        path: '/qinyoumokuai',
        name: '亲友动态',
        component: qinyoumokuai
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
