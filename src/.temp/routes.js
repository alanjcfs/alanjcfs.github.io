const c1 = () => import(/* webpackChunkName: "page--src--pages--a11y-vue" */ "/Users/alan/Documents/alanjcfs.github.io/src/pages/A11y.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/alan/Documents/alanjcfs.github.io/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/alan/Documents/alanjcfs.github.io/src/pages/Index.vue")

export default [
  {
    path: "/a11y/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
