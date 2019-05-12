
class MoreSettingsController {
  constructor(
      private $rootScope: ng.IRootScopeService
  ) {
  }

  $onInit() {
    console.info('test');
  }
}

MoreSettingsController.$inject = ["$rootScope"];

export default {
  bindings: {},
  templateUrl: require("./settings.html"),
  controller: MoreSettingsController
}