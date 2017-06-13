export default function Config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            template: '<photo-gallery></photo-gallery>'
        })
        // Add more routes here as more pages get built
        .otherwise({
            redirectTo: '/'
        });
}
