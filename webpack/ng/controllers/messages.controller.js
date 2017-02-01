basic.controller('MessagesCtrl',[
  '$scope', 'Restangular',
  function($scope, restangular){
    restangular.all('messages').getList().then(resp => {
      _setMessages(resp)
    })

    var _setMessages = function _setMessages(messages){
      $scope.messages = messages;
    }
  }
])
