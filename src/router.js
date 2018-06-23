import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import pickColor from '@/components/pickColor'
import workUpload from '@/components/workUpload'
import communicationModel from '@/components/communicationModel'
import fashionModel from '@/components/fashionModel'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/components/pickColor',
      name:'pickColor',
      component:pickColor,
      meta:{keepAlive:true}
    },
    {
      path:'/components/workUpload',
      name:'workUpload',
      component:workUpload,
      meta:{keepAlive:true}
    },
    {
      path:'/components/communicationModel',
      name:'communicationModel',
      component:communicationModel,
      meta:{keepAlive:true}
    },
    {
      path:'/components/fashionModel',
      name:'fashionModel',
      component:fashionModel,
      meta:{keepAlive:true}
    },
      {
        path:'/components/register',
          name:'register',
          component:register,
          meta:{keepAlive:true}
      },
    {
      path:'/',
      redirect:'/components/pickColor'
      //   redirect:'/components/register'
    }
  ]
})
