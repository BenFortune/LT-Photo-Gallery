export default class PaginationController {
    $onChanges(changesObj) {
        if (changesObj.ltModel.currentValue !== undefined) {
            return;
        } else {
            this.initialPage();
        }
    }

    // Set up pagination on initial page load
    initialPage() {
        this.ltClicked({'page': 1});
        this.currentPage = 1;
        this.leftPage = 1;
        this.atFirstPage = true;
        this.setPageGroups(this.currentPage);
    }

    // Set pagination variables after moving to the next or previous group of 3
    setPageGroups(currentPage, countDown) {
        this.leftPage = currentPage;
        this.middlePage = currentPage + 1;
        this.rightPage = currentPage + 2;

        if (countDown) {
            this.currentPage = this.leftPage;
        }

        this.checkForBeginning();
        this.checkForEnd();
    }

    // Check to see if at the very beginning of the groupings
    checkForBeginning() {
        if (this.leftPage !== 1) {
            this.onFirstPage = false;
        } else {
            this.onFirstPage = true;
        }
    }

    // Check to see if at the very end of the groupings
    checkForEnd() {
        if (this.rightPage !== 50) {
            this.onLastPage = false;
        } else {
            this.onLastPage = true;
        }
    }

    // Go to a specific page and retrieve that group of photos
    goToPage(page, updatePageGroups, countdown) {
        console.log('go to page called', page);
        this.currentPage = page;
        this.ltClicked({page});
        if (updatePageGroups) {
            this.setPageGroups(page, countdown);
        }
    }

    // Check to determine which next set of groupings to get
    newGroup(page) {
        if (page === this.leftPage) {
            this.goToPage(this.leftPage - 3, true, true);
        } else {
            this.goToPage(this.rightPage + 1, true, false);
        }
    }

}
