export default {
  routes: [
    {
      path:'/',
      name: "layout",
      component (resolve) {
        require(['../components/layout/acticon-box'], resolve)
      }
    }
  ]
}
