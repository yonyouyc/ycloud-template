import $ from 'jquery'
function getCurrentUser () {
  var user = localStorage.getItem('user')
  if (user) {
    user = JSON.parse(user)
    return user.user
  } else {
    $.ajax({
      url: '/yuncai/ebvplogin',
      type: 'get',
      async: false,
      success: function (data) {
        user = data.user
        localStorage.setItem('user', data)
      }
    })
    return user
  }
}
function getEnterpriseId () {
  var user = getCurrentUser()
  if (user) {
    try {
      return user.enterpriseId
    } catch (e) {
      console.error(e)
      return null
    }
  } else {
    return null
  }
}
export {
  getCurrentUser,
  getEnterpriseId
}
