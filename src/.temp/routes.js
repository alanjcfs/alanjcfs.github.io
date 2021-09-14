const c1 = () => import(/* webpackChunkName: "page--src--pages--cochlear-implant-vue" */ "/Users/alan/Documents/alanjcfs.github.io/src/pages/CochlearImplant.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--a11y-vue" */ "/Users/alan/Documents/alanjcfs.github.io/src/pages/A11y.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/alan/Documents/alanjcfs.github.io/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/alan/Documents/alanjcfs.github.io/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/alan/Documents/alanjcfs.github.io/src/pages/Index.vue")

export default [
  {
    path: "/cochlear-implant/",
    component: c1
  },
  {
    path: "/a11y/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
