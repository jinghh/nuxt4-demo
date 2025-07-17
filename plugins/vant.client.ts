// 修复组件导入路径
import { defineNuxtPlugin } from '#app'
import { Button, Tabbar, TabbarItem, Icon, Cell, CellGroup, Swipe, SwipeItem, Grid, GridItem, Card, List, ActionBar, ActionBarIcon, ActionBarButton, Toast, Dialog } from 'vant/es'

export default defineNuxtPlugin((app) => {
  app.vueApp.use(Button)
  app.vueApp.use(Tabbar)
  app.vueApp.use(TabbarItem)
  app.vueApp.use(Icon)
  app.vueApp.use(Cell)
  app.vueApp.use(CellGroup)
  app.vueApp.use(Swipe)
  app.vueApp.use(SwipeItem)
  app.vueApp.use(Grid)
  app.vueApp.use(GridItem)
  app.vueApp.use(Card)
  app.vueApp.use(List)
  app.vueApp.use(ActionBar)
  app.vueApp.use(ActionBarIcon)
  app.vueApp.use(ActionBarButton)
  
  // 全局挂载Toast和Dialog
  app.vueApp.config.globalProperties.$toast = Toast
  app.vueApp.config.globalProperties.$dialog = Dialog
})