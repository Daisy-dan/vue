import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import ListInfo from '@/components/ListInfo'
import AddInfo from '@/components/AddInfo'
import Render from '@/components/Render'




export default [

  {
    path: '/index',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/web',
    name: 'Index',
    component: Index,
    redirect: { path: '/web/list'},
    children: [
      {
        path: '/web/list',
        name: 'ListInfo',
        component: ListInfo
      },
      {
        path: '/web/list/add',
        name: 'AddInfo',
        component: AddInfo,
      },
      {
        path: '/web/render',
        name: 'Render',
        component: Render,
      }
    ]
  }

]
