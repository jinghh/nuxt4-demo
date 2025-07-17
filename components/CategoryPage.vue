// 商品分类组件
<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">商品分类</h1>
    
    <van-grid>
      <van-grid-item icon="fruit" text="水果生鲜" />
      <van-grid-item icon="gift-o" text="礼品箱包" />
      <van-grid-item icon="cosmetic" text="美妆护肤" />
      <van-grid-item icon="sport" text="运动户外" />
    </van-grid>
    
    <div class="mt-8">
      <van-card
        v-for="product in products"
        :key="product.id"
        :title="product.name"
        :price="product.price"
        :thumb="product.image"
        class="mb-4"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = [
  { id: 1, name: '苹果', price: 5.99, image: 'https://via.placeholder.com/80' },
  { id: 2, name: '玫瑰花', price: 19.99, image: 'https://via.placeholder.com/80' },
  { id: 3, name: '洗面奶', price: 29.99, image: 'https://via.placeholder.com/80' },
  { id: 4, name: '登山鞋', price: 129.99, image: 'https://via.placeholder.com/80' }
]
</script>