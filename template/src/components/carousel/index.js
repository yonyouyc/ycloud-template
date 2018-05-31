import template from './index.html'
import ko from 'knockout'
import './index.less'
function init (params) {
  this.bannerList = ko.observableArray([{}, {}])
  this.handleClick = function () {

  }
}

export default {
  name: 'carousel',
  init,
  template
}
