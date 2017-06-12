export default function Config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            template: '<photo-gallery></photo-gallery>'
        })
        // .when('/new', {
        //     template: '<edit-letter></edit-letter>',
        //     resolve: newLetterResolve
        // })
        // .when('/edit/:letterId?', {
        //     template: '<edit-letter></edit-letter>',
        //     resolve: editLetterResolve
        // })
        .otherwise({
            redirectTo: '/'
        });
}
//
// const newLetterResolve = {
//     customerResolve: function getCustomer(EditLetterService) {
//         'ngInject';
//         return EditLetterService.getCustomer();
//     },
//     newOrEdit: function newOrEdit() {
//         return true;
//     }
// };
//
// const editLetterResolve = {
//     customerResolve: function getCustomer(EditLetterService) {
//         'ngInject';
//         return EditLetterService.getCustomer();
//     },
//     newOrEdit: () => {
//         return false;
//     }
// };
