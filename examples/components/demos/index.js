export default{
    // 'basicExtend1': () => require.ensure([], require => require('./basic/extend1.vue'), 'basic'),
    'basicLayoutLayout1': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/layout/layout1'),
    'basicLayoutLayout2': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/layout/layout2'),
    'basicGridGrid1': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/grid/grid1'),
    'basicGridGrid2': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/grid/grid2'),
    'basicButtonButton1': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button1'),
    'basicButtonButton2': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button2'),
    'basicButtonButton3': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button3'),
    'basicButtonButton4': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button4'),
    'basicButtonButton5': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button5'),
    'basicButtonButton6': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button6'),
    'basicButtonButton7': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button7'),
    'basicButtonButton8': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button8'),
    'basicButtonButton9': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button9'),
    'basicButtonButton10': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button10'),
    'basicLinkLink1': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/link/link1'),
    'basicLinkLink2': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/link/link2'),
    
    'formFormForm1': () => import(/* webpackChunkName: "yo-component-form" */ './form/form/form1'),
    'formFormForm2': () => import(/* webpackChunkName: "yo-component-form" */ './form/form/form2'),
    
    'formInputInput1': () => import(/* webpackChunkName: "yo-component-form" */ './form/input/input1'),
    'formInputInput2': () => import(/* webpackChunkName: "yo-component-form" */ './form/input/input2'),
    
    'navigationBreadcrumbBreadcrumb1': () => import(/* webpackChunkName: "yo-component-navigation" */ './navigation/breadcrumb/breadcrumb1'),
    'navigationBreadcrumbBreadcrumb2': () => import(/* webpackChunkName: "yo-component-navigation" */ './navigation/breadcrumb/breadcrumb2'),
}