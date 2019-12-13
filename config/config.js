export default {
  singular: true, //设置page为单数
  plugins: [
    ['umi-plugin-react', {
      //目前先空，后面用到会配置
      antd: true,
      dva: true,
    }],
  ],

  // 这里的路由是如果想访问完整的页面，就要 /qwe/asd/hello
  // 如果/qwe/asd只能是最外层的网页，hello那个并不能访问到
  // 其实这样也是对的，可以在外层路由不变的情况下，外层的路由控制的页面可能是固定的
  // 这样就只需要改变/qwe/asd/xxxx，xxxx这路由，就可以改变需要改变的内容。
  // 根据路由控制变的页面的内容
  routes:[
    {
      path: '/qwe/asd',
      component: '../layout', 
      routes: [
        {
          path: 'hello',
          component: './HelloWorld',
        },
        {
          path:'todo',
          component: './TodoList',
        },
      ],
    }
  ]
};