(function () {
  'use strict';

  angular
    .module('mindwireAdmin')
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

})();
