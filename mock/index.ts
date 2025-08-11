import Mock from 'mockjs';

// 首页数据模板
const homeData = Mock.mock({
  banners: {
    'list|3': [{
      'id|+1': 1,
      url: '@image(800x200, @color, #fff, @word)',
      link: '@url'
    }]
  },
  hotProducts: {
    'list|4': [{
      'id|+1': 100,
      name: '@ctitle(5,10)',
      price: '@float(10, 1000, 2, 2)',
      stock: '@integer(1, 100)',
      image: '@image(80x80, @color, #fff, @word)'
    }]
  }
});

// 购物车数据模板
const cartData = Mock.mock({
  items: {
    'list|1-3': [{
      'id|+1': 1,
      productId: '@integer(1000, 9999)',
      product: {
        id: '@integer(1000, 9999)',
        name: '@ctitle(5,10)',
        price: '@float(10, 1000, 2, 2)',
        stock: '@integer(1, 100)',
        image: '@image(80x80, @color, #fff, @word)'
      },
      quantity: '@integer(1, 5)',
      price: '@float(10, 1000, 2, 2)'
    }]
  }
});

// 模拟请求延迟
const delay = <T>(data: T): Promise<T> => {
  console.log('mock delay',data)
  return new Promise(resolve => {
    setTimeout(() => resolve(data), Math.random() * 1000);
  });
};

// 添加详细的请求日志
const logRequest = (options: Mock.MockjsRequest) => {
  console.log('Mock请求详情:', {
    url: options.url,
    type: options.type,
    body: options.body,
    headers: options.headers
  });
};

// 首页API
Mock.mock('/api/home/banners', 'get', (options) => {
  logRequest(options);
  console.log('返回轮播图数据:', homeData.banners);
  return delay(homeData.banners);
});

Mock.mock('/api/home/products', 'get', (options) => {
  logRequest(options);
  console.log('返回热门商品数据:', homeData.hotProducts);
  return delay(homeData.hotProducts);
});

// 购物车API
Mock.mock('/api/cart/items', 'get', (options) => {
  logRequest(options);
  console.log('返回购物车数据:', cartData.items);
  return delay(cartData.items);
});

// 添加更详细的通配符匹配
Mock.mock('/api/(.*)', 'get', (options: Mock.MockjsRequest) => {
  console.warn('未匹配的API请求:', {
    url: options.url,
    referrer: options.headers['Referer'] || '无来源',
    timestamp: new Date().toISOString()
  });
  
  return delay({
    code: 404,
    message: `API未找到: ${options.url}`,
    timestamp: new Date().toISOString()
  });
});

export default Mock;
