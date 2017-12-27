import ko from 'knockout'
import template from './index.html'
function init () {
  var viewmodel = {
    title: ko.observable('列表页面'),
    rows: ko.observableArray(),
    columns: [
      {
        title: '',
        type: 'checkbox'
      },
      {
        title: '标题',
        field: 'title',
        width: '200'
      }, {
        title: '内容',
        field: 'content',
        width: '400'
      }
    ]
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
  // 模拟异步请求
  setTimeout(function () {
    viewmodel.rows([
      {
        title: '这是一个标题',
        content: '内容很长很长的内容，内容很长很长的内容，内容很长很长的内容，内容很长很长的内容'
      }
    ])
  })
}

export default {
  template,
  init
}
