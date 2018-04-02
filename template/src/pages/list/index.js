import ko from 'knockout'
import template from './index.html'
import BaseView from '@/base/baseview'
class View extends BaseView {
  data () {
    this.title = ko.observable('列表页面')
    this.rows = ko.observableArray()
    this.personSelected = ko.observable()
    this.handleOk = (selectedItem) => {
      alert(JSON.stringify(selectedItem))
    }
    this.columns = [
      {
        title: '',
        type: 'checkbox'
      },
      {
        title: '标题',
        field: 'title',
        width: '50%'
      }, {
        title: '内容',
        field: 'content',
        width: '40%'
      }
    ]
  }
  computed () {
    this.titlecomputed = ko.computed(function () {
      return this.title() + ' computed'
    }.bind(this))
  }
  watch () {
    this.rows.subscribe(function (val) {
      console.log(val)
    })
  }
  mounted () {
    setTimeout(() => {
      this.rows([
        {
          title: '这是一个标题',
          content: '内容很长很长的内容，内容很长很长的内容，内容很长很长的内容，内容很长很长的内容'
        }
      ])
    })
  }
}

export default {
  template,
  View
}
