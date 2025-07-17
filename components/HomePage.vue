// 主页组件
<template>
  <div>
    <!-- 首页内容 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="w-full h-40 object-cover">
      </van-swipe-item>
    </van-swipe>
    
    <van-grid>
      <van-grid-item icon="shop-o" text="商品分类" />
      <van-grid-item icon="cart-o" text="购物车" />
      <van-grid-item icon="user-o" text="我的订单" />
    </van-grid>
    
    <van-cell-group title="热门商品">
      <van-card
        v-for="product in products"
        :key="product.id"
        :num="product.stock"
        :price="product.price"
        :title="product.name"
        :thumb="product.image"
      />
    </van-cell-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = [
  'https://via.placeholder.com/800x200',
  'https://via.placeholder.com/800x200',
  'https://via.placeholder.com/800x200'
]

const products = [
  { id: 1, name: '商品1', price: 99.9, stock: 10, image: 'https://via.placeholder.com/80' },
  { id: 2, name: '商品2', price: 199.9, stock: 5, image: 'https://via.placeholder.com/80' }
]
</script>