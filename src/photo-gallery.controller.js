export default class PhotoGalleryController {
    // INJECT DEPENDENCIES AS SOON AS CONTROLLER IS INSTANTIATED
    constructor(PhotoGalleryService) {
        this.PhotoGalleryService = PhotoGalleryService;
    }

    // CONTROLLER METHODS
    getPhotos(page) {
        // Call method in service that will return our photo list array
        this.PhotoGalleryService.getPhotos(page).then(success => {
            //TODO handle no photos returning
            this.photoList = success.data;
        }, error => {
            console.log('error', error);
        });
    }
}
