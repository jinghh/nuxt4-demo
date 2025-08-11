import { Product } from '../interfaces/product.interface';
import { CartItem } from '../interfaces/cart.interface';

// 创建统一的错误处理函数
const handleMockError = (error: any) => {
  console.error('API请求异常:', {
    error,
    stack: error.stack,
    timestamp: new Date().toISOString()
  });
  
  return Promise.reject({
    code: 500,
    message: `服务异常: ${error.message}`,
    originalError: error
  });
};

// 首页API
export const homeApi = {
  getBanners: (): Promise<string[]> => 
    fetch('/api/home/banners')
      .then(res => {
        console.log('轮播图接口响应:', {
          status: res.status,
          url: res.url
        });
        return res.json();
      })
      .catch(handleMockError),
  
  getHotProducts: (): Promise<Product[]> => 
    fetch('/api/home/products')
      .then(res => {
        console.log('热门商品接口响应:', {
          status: res.status,
          url: res.url
        });
        return res.json();
      })
      .catch(handleMockError)
};

// 购物车API
export const cartApi = {
  getCartItems: (): Promise<CartItem[]> => 
    fetch('/api/cart/items')
      .then(res => {
        console.log('购物车接口响应:', {
          status: res.status,
          url: res.url
        });
        return res.json();
      })
      .catch(handleMockError)
};

export default { homeApi, cartApi };