paginatorService.$inject = [];

export default function paginatorService(){
        var instances = {};
        var lastRegisteredInstance;
        var itemsPerPage = 10;
        var currentPage = 1;

        this.setCurrentPage = function (val) {
            currentPage = val;
        };
        this.getCurrentPage = function (instanceId) {
            return currentPage;
        };

        this.setItemsPerPage = function (val) {
            itemsPerPage = val;
        };
        this.getItemsPerPage = function () {
            return itemsPerPage;
        };
}