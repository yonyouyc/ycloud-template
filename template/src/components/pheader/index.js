import template from './index.html'
import './index.less'
import apis from '../../configs/apis'
function init (params) {
  this.logourl = require('../../assert/logo.png')
  this.wechaturl = require('../../assert/qrcode/wechat.jpg')
  this.purchaserurl = require('../../assert/qrcode/purchaser.png')
  this.supplierurl = require('../../assert/qrcode/supplier.png')
  this.slogan = apis.slogan
}

export default {
  name: 'p-header',
  init,
  template
}
