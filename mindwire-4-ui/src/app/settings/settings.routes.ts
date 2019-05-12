export function routes($urlRouterProvider, $stateProvider) {
    $stateProvider
    .state({ name: 'settings', url: '/settings', component: 'settings' })
    .state({ name: 'moresettings', url: '/moresettings', component: 'moresettings' })
    // .state('moresettings', {
    //     url: '/moresettings',

    //     templateUrl: './app/settings/moresettings.html',
    //     controller: 'MoreSettingsController as vm'
    //     // views: {
    //     //   'content@app': {
    //     //     templateUrl: './moresettings.html',
    //     //     controller: 'MoreSettingsController as vm'
    //     //   }
    //     // }
    // })

    ;
}
