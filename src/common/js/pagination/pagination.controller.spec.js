import PaginationController from './pagination.controller';

describe('All of Pagination controller /', () => {
    let $ctrl;

    beforeEach(() => {
        $ctrl = new PaginationController();
        $ctrl.ltClicked = page => { return page; };
        spyOn($ctrl, 'ltClicked').and.callThrough();
    });

    it('should have a defined controller ...', () => {
        expect(PaginationController).toBeDefined();
    });

    it('should call first page of photos and set pagination variables on initial page load ...', () => {
        $ctrl.initialPage();
        expect($ctrl.ltClicked).toHaveBeenCalled();
        expect($ctrl.currentPage).toEqual(1);
        expect($ctrl.leftPage).toEqual(1);
        expect($ctrl.atFirstPage).toBeTruthy();
    });

    it('should set page groups by counting down ...', () => {
        const page = 3;
        const countdown = true;
        $ctrl.setPageGroups(page, countdown);
        expect($ctrl.leftPage).toEqual(1);
        expect($ctrl.middlePage).toEqual(2);
        expect($ctrl.rightPage).toEqual(3);
    });

    it('should set page groups by counting up ...', () => {
        const page = 4;
        const countdown = false;
        $ctrl.setPageGroups(page, countdown);
        expect($ctrl.leftPage).toEqual(4);
        expect($ctrl.middlePage).toEqual(5);
        expect($ctrl.rightPage).toEqual(6);
    });

    it('should check the left page number and set onFirstPage variable to false ...', () => {
        $ctrl.leftPage = 3;
        $ctrl.checkForBeginning();
        expect($ctrl.onFirstPage).toBeFalsy();
    });

    it('should check the left page number and set onFirstPage variable to true ...', () => {
        $ctrl.leftPage = 1;
        $ctrl.checkForBeginning();
        expect($ctrl.onFirstPage).toBeTruthy();
    });

    it('should check the right page number and set onLastPage variable to false ...', () => {
        $ctrl.rightPage = 3;
        $ctrl.checkForEnd();
        expect($ctrl.onLastPage).toBeFalsy();
    });

    it('should check the right page number and set onLastPage variable to true ...', () => {
        $ctrl.rightPage = 50;
        $ctrl.checkForEnd();
        expect($ctrl.onLastPage).toBeTruthy();
    });

    it('should set current page variable, and call component method that will initiate ajax call', () => {
        const page = 2;
        const updatePageGroups = false;
        const countdown = false;
        $ctrl.goToPage(page, updatePageGroups, countdown)
        expect($ctrl.currentPage).toEqual(page);
        expect($ctrl.ltClicked).toHaveBeenCalledWith({'page': page});
    })
});
