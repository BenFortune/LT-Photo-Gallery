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
            this.checkForPhotos(success.data);
        }, error => {
            console.log('error', error);
        });
    }

    // Verify photo array has photos in it since api doesn't fail when none exist
    checkForPhotos(photoList) {
        if (photoList.length > 0) {
            this.photoList = photoList;
            this.noPhotosReturned = false;
        } else {
            this.noPhotosReturned = true;
        }
    }
}
