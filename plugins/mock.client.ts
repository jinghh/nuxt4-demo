import Mock from '~/mock';

export default defineNuxtPlugin(() => {
  console.log('Mock.js initialized with:', {
    banners: '/api/home/banners',
    products: '/api/home/products',
    cartItems: '/api/cart/items'
  });
  
  // 添加详细的mock数据结构日志
  console.log('Mock数据结构:', {
    banners: Mock._mocked['/api/home/banners'],
    products: Mock._mocked['/api/home/products'],
    cartItems: Mock._mocked['/api/cart/items']
  });
  
  return { provide: { mock: Mock } };
});