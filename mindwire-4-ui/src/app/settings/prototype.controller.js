import angular from 'angular';

angular
  .module('settingsModule')
  .controller('prototypeController', prototypeController);

  prototypeController.$inject = [];

/* @ngInject */
function prototypeController() {
  var vm = this;

  console.info('Prototype Test');

  ////////////////

  function TODO(model) {
    console.info('TODO Test');
  }

}


