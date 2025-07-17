// 底部导航组件更新
<template>
  <van-tabbar v-model:active="active">
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o" to="/user">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>