// 购物车组件
<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">购物车</h1>
    <van-empty v-if="cartItems.length === 0" description="购物车为空">
      <van-button round type="primary" class="mt-4">去逛逛</van-button>
    </van-empty>
    
    <div v-else>
      <van-card
        v-for="item in cartItems"
        :key="item.id"
        :title="item.name"
        :price="item.price"
        :thumb="item.image"
        class="mb-4"
      >
        <template #footer>
          <van-stepper v-model="item.quantity" />
        </template>
      </van-card>
      
      <van-submit-bar
        :price="totalPrice * 100"
        button-text="结算"
        @submit="onSubmit"
      >
        <van-checkbox v-model:checked="allSelected" @click.stop>全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { cartApi } from '~/services/api';

const cartItems = ref([]);
const loadCartData = async () => {
  try {
    const res = await cartApi.getCartItems();
    console.log(345,res);
  } catch (error) {
  }
};

// 计算总价
const totalPrice = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

// 全选状态
const allSelected = ref(false);

// 提交事件
const onSubmit = () => {
  alert(`结算金额：$${totalPrice.value}`);
};

onMounted(loadCartData);
</script>