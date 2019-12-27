/* 
 *  author :eric 
 *  created at:2019-12-12
 *  按钮组件
*/
// layout
import YoContainer from './components/basic/container'
import YoSide from './components/basic/side'
import YoHeader from './components/basic/header'
import YoMain from './components/basic/main'
import YoFooter from './components/basic/footer'
// grid
import YoRow from './components/basic/row'
import YoCol from './components/basic/col'

// button
import YoButton from './components/basic/button'
import YoButtonGroup from './components/basic/button-group'
// link
import YoLink from './components/basic/link'

// breadcrumb
import YoBreadcrumbItem from './components/basic/breadcrumb'
import YoBreadcrumb from './components/basic/breadcrumb-item'

const components = [
	YoContainer,
	YoSide,
	YoHeader,
	YoMain,
	YoFooter,

	YoRow,
	YoCol,

	YoButton,
	YoButtonGroup,

	YoBreadcrumb,
	YoBreadcrumbItem,

	YoLink,
]

const install = function(Vue, opts = {}) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})
	let config=opts.config||{}
	Vue.prototype.$YOUI={
		size:config.size|'',//组件大小
		zIndex:config.zIndex||1000,//弹出框索引
	}
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  	install(window.Vue)
}

export default {
	version: '1.0.0',
	install,

	YoContainer,
	YoSide,
	YoHeader,
	YoMain,
	YoFooter,

	YoButton,
	YoButtonGroup,

	YoRow,
	YoCol,
	
	YoLink,

	YoBreadcrumb,
	YoBreadcrumbItem,
}
