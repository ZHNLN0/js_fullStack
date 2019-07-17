## vs 
// hashRouter #
// historyRouter 不带 #
刷新这个行为
/#a -> /#b  js 刷新 /#b
/a -> /b 刷新  请求后端的 /b 后端肯定没有 /b 后端再次交给前端处理
1. nginx
2. 后端的代码