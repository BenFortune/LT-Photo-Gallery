import PhotoGalleryController from './photo-gallery.controller';

describe('All of Photo Gallery controller /', () => {
    let $ctrl;
    const PhotoGalleryService = jasmine.createSpyObj('PhotoGalleryService', ['getPhotos']);

    beforeEach(() => {
        PhotoGalleryService.getPhotos.and.callFake((e) => {
            return {
                then: (success, error) => {
                    if (e) {
                        return success({
                            data: [{'albumId': 1, 'id': 1, 'title': 'accusamus beatae ad facilis cum similique qui sunt', 'url': 'http://placehold.it/600/92c952', 'thumbnailUrl': 'http://placehold.it/150/92c952'}]
                        });
                    } else {
                        return error({
                            data: {'status': '404', 'message': 'some error'}
                        });
                    }
                }
            };
        });

        $ctrl = new PhotoGalleryController(PhotoGalleryService);
    });

    it('should have a defined controller ...', () => {
        expect(PhotoGalleryController).toBeDefined();
    });

    it('should have a defined photo gallery service ...', () => {
        expect(PhotoGalleryService).toBeDefined();
    });

    it('should return an array of photo data ...', () => {
        $ctrl.getPhotos(1);
        expect(PhotoGalleryService.getPhotos).toHaveBeenCalled();
        expect($ctrl.photoList.length).toEqual(1);
    });

    it('should not return an array of photo data ...', () => {
        $ctrl.getPhotos();
        expect(PhotoGalleryService.getPhotos).toHaveBeenCalled();
        expect($ctrl.photoList).toBe(undefined);
    });
});
