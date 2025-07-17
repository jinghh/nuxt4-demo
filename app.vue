// 主布局文件
<template>
  <div class="flex flex-col h-screen">
    <!-- 头部导航 -->
    <header class="bg-white shadow-md">
      <van-nav-bar title="移动商城" />
    </header>

    <!-- 页面内容 -->
    <main class="flex-grow overflow-y-auto">
      <NuxtPage />
    </main>

    <!-- 底部导航 -->
    <footer>
      <BottomNav />
    </footer>
  </div>
</template>

<script setup>
import BottomNav from '~/components/BottomNav.vue'
</script>