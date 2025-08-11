export default defineEventHandler((event) => {
  // 检查 token
  const token = getHeader(event, 'Authorization');
  if (!token) {
    throw createError({ statusCode: 401, statusMessage: "未授权" });
  }
  // 可继续验证 token 有效性...
});