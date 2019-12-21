/* 
 *  author :eric 
 *  created at:2019-12-12
 *  按钮组件
*/
// button
import YoButton from './components/basic/button'
import YoButtonGroup from './components/basic/button-group'
// grid
import YoRow from './components/basic/row'
import YoCol from './components/basic/col'
const components = [
	YoButton,
	YoButtonGroup,
	YoRow,
	YoCol,
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
	YoButton,
	YoButtonGroup,
	YoRow,
	YoCol,
}
