// 主页组件
<template>
  <div>
    <!-- 首页内容 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in banners" :key="index">
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

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {getBanners} from '../api/index';
import { Product } from '~/interfaces/product.interface';

// 类型定义
interface HomePageData {
  banners: string[];
  products: Product[];
}

const banners = ref<string[]>([]);
const products = ref<Product[]>([]);

const loadHomeData = async () => {
  try {
    console.log('请求轮播图接口:', '/api/home/banners');
    const bannerData = await getBanners();
    console.log('轮播图数据:', bannerData);
    banners.value = bannerData;
    
    // console.log('请求热门商品接口:', '/api/home/products');
    // const productData = await API.getHotProducts();
    // products.value = productData;
  } catch (error) {
    console.error('数据加载失败:', {
      error,
      timestamp: new Date().toISOString()
    });
    
    // 显示友好的错误提示
    alert(`数据加载失败: ${error.message}`);
  }
};

onMounted(loadHomeData);
</script>