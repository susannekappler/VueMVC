import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/components/NotFound'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/VueMVC',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/VueMVC/about',
			name: 'About',
			component: About
		},
		{ path: '*',
			component: NotFound
		}
	]
})
