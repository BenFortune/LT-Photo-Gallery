import PaginationController from './pagination.controller.js';

const component = {
    controller: PaginationController,
    template: require('./pagination.template.html'),
    bindings: {
        ltClicked: '&',
        ltModel: '<',
        ltShow: '<'
    }
};

export default component;
