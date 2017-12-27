import ko from 'knockout'
import $ from 'jquery'
import views from './configs/views'
var routesList = {}
views.forEach((item) => {
  routesList[item.path ? item.path : ('/' + item.name)] = resolve => require(['./pages/' + item.name], resolve)
})

function initPage (page) {
  page(function (item) {
    ko.cleanNode(document.getElementById('bodycontent'))
    $('#app').html(item.default.template)
    /* eslint-disable no-new */
    new item.default.View()
  })
}

var routes = {}
Object.keys(routesList).forEach(item => {
  routes[item] = function () {
    initPage(routesList[item])
  }
})
var route = window.Router(routes)
route.init()
// 默认/ 跳转到首页
if (window.location.hash) {
} else {
  window.location.href = '#/index'
}
