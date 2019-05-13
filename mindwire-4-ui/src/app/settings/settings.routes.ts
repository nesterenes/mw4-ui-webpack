export function routes($urlRouterProvider, $stateProvider) {
    $stateProvider
    .state({ name: 'settings', url: '/settings', component: 'settings' })
    .state({ name: 'moresettings', url: '/moresettings', component: 'moresettings' })
    .state('prototype', {
        url: '/prototype',
        templateUrl: './app/settings/prototype.html',
        controller: 'prototypeController as vm'
    })

    ;
}
