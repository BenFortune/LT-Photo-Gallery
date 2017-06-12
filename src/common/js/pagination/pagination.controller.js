export default class PaginationController {
    $onChanges(changesObj) {
        if (changesObj.ltModel.currentValue !== undefined) {
            return;
        } else {
            this.initialPage();
        }
    }

    initialPage() {
        this.ltClicked({'page': 1});
        this.currentPage = 1;
        this.leftPage = 1;
        this.atFirstPage = true;
        this.setPageGroups(this.currentPage);
    }

    setPageGroups(currentPage, countDown) {
        if (countDown) {
            this.leftPage = currentPage - 2;
            this.middlePage = currentPage - 1;
            this.rightPage = currentPage;
            this.currentPage = this.leftPage;
        } else {
            this.leftPage = currentPage;
            this.middlePage = currentPage + 1;
            this.rightPage = currentPage + 2;
        }
        this.checkForBeginning();
        this.checkForEnd();
    }

    checkForBeginning() {
        if (this.leftPage !== 1) {
            this.onFirstPage = false;
        } else {
            this.onFirstPage = true;
        }
    }

    checkForEnd() {
        if (this.rightPage !== 50) {
            this.onLastPage = false;
        } else {
            this.onLastPage = true;
        }
    }

    goToPage(page, updatePageGroups, countdown) {
        this.currentPage = page;
        this.ltClicked({page});
        if (updatePageGroups) {
            this.setPageGroups(page, countdown);
        }
    }

    newGroup(page) {
        if (page === this.leftPage) {
            this.goToPage(this.leftPage - 1, true, true);
        } else {
            this.goToPage(this.rightPage + 1, true, false);
        }
    }

}
