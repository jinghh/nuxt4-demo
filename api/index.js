// composables/useApi.ts

export const getBanners =  (params) => $fetch('/api/home/banners', {
  method: 'post',   params});
