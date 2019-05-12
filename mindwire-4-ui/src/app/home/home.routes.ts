export function routes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            name: 'home', url: '/', component: 'home'
        });
}
routes.$inject = ['$urlRouterProvider', '$stateProvider'];