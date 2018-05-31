import ko from 'knockout'
import pnav from './pnav'
import pfooter from './pfooter'
import pheader from './pheader'
import plink from './plink'
import carousel from './carousel'
import loginpanel from './loginpanel'
function register (model) {
  ko.components.register(model.name, {
    viewModel: model.init,
    template: model.template
  })
}
register(pnav)
register(pfooter)
register(pheader)
register(plink)
register(carousel)
register(loginpanel)
