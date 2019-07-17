// 为了便于在 this.code 变化或组件销毁时移除动态创建的<style></style> 标签
// 每个style标签都加上一个随机生成的id

// 生成随机字符串

export default function(len = 32) {
  const $chars = 'abcdefhijklmnopqrstuvwxyz'
  const maxPos = $chars.length
  let str= ''
  for(let i = 0; i < len; i++) {
    str +=$chars.charAt(Math.floor(Math.random() * maxPos))
  }
}