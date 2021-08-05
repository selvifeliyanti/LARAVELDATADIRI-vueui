import { createRouter, createWebHashHistory } from 'vue-router'
import Tentang from '../views/tentang/Tentang.vue'
import Createtentang from '../views/tentang/Createtentang.vue'
import Edittentang from '../views/tentang/Editprofil.vue'
import Profil from '../views/profil/.vue'
import Createprofil from '../views/profil/Createprofil.vue'
import Editprofil from '../views/profil/Editprofil.vue'
import History from '../views/history/.vue'
import Createhistory from '../views/history/Createhistory.vue'
import Edithistory from '../views/history/Edithistory.vue'
import Hubungi from '../views/hubungi/.vue'
import Createhubungi from '../views/hubungi/Createhubungi.vue'
import Edithubungi from '../views/hubungi/Edithubungi.vue'

const routes = [
  {
    path: '/',
    name: 'Tentang',
    component: Tentang
  },
  {
    path: '/createtentang',
    name: 'Createtentang',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createtentang
  },
{
  path: '/edittentang/:id',
  name: 'Edittentang',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Edittentang
},
{
  path: '/profil',
  name: 'profil.index',
  component: Profil
},
{
  path: '/profiltentang',
  name: 'Profiltentang',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Profiltentang
},
{
  path: '/createprofil',
  name: 'Createprofil',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createprofil
},
{
path: '/editprofil/:id',
name: 'Editprofil',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editprofil
},
{
  path: '/',
  name: 'History',
  component: History
},
{
  path: '/createhistory',
  name: 'Createhistory',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createhistory
},
{
path: '/edithistory/:id',
name: 'Edithistory',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Edithistory
},
{
  path: '/',
  name: 'Pengalaman',
  component: Pengalaman
},
{
  path: '/createpengalaman',
  name: 'Createpengalaman',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createpengalaman
},
{
path: '/editpengalaman/:id',
name: 'Editpengalaman',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Edipengalaman
},
{
  path: '/',
  name: 'Hubungi',
  component: Hubungi
},
{
  path: '/createhubungi',
  name: 'Createhubungi',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createhubungi
},
{
path: '/edithubungi/:id',
name: 'Edithubungi',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Edithubungi
},
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router



