export default class PhotoGalleryService {
    // INJECT DEPENDENCIES AS SOON AS SERVICE IS INSTANTIATED
    constructor($http) {
        this.$http = $http;
    }

    // SERVICE METHODS *SET CONFIG IN CONSTRUCTOR IF ADDING MORE API CALLS EXPECTED IN JSON*
    getPhotos(pageNumber) {
        const config = {
            'headers': {
                'Content-Type': 'application/json'
            }
        };
        return this.$http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${pageNumber}`, config);
    }
}
