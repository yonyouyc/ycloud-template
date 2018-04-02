import ycloud from 'ycloud'
import 'ycloud-refer'
import 'ycloud/dist/bootstrap.css'
import 'ycloud/dist/ycloud.min.css'
import './router'
import {getCurrentUser} from './base/util'
// 确保本地有localstorage信息
getCurrentUser()
window.ycloud = ycloud

