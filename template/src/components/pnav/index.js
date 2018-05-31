import template from './index.html'
import './index.less'
import api from '../../configs/apis'
function init (params) {
  this.workbenchurl = api.workbenchurl
  this.homepage = api.homepage
  this.logouturl = api.logouturl
}

export default {
  name: 'p-nav',
  init,
  template
}
