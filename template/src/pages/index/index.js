import ko from 'knockout'
import template from './index.html'
function init () {
  var viewmodel = {
    title: ko.observable('列表页面')
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}

export default {
  template,
  init
}
