// 个人中心组件
<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">我的</h1>
    
    <van-cell-group>
      <van-cell title="我的订单" icon="orders-o" />
      <van-cell title="我的收藏" icon="like-o" />
      <van-cell title="地址管理" icon="location-o" />
      <van-cell title="设置" icon="setting-o" />
    </van-cell-group>
    
    <div class="mt-8 text-center">
      <van-button type="primary" block>退出登录</van-button>
    </div>
  </div>
</template>

<script setup>
// 个人中心逻辑代码
</script>