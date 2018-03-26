import './paginator.service.js'

paginatorFilter.$inject = ['paginatorService'];

export default function paginatorFilter(paginatorService){

	 return function (collection, itemsPerPage) {
	 // return function (collection, itemsPerPage, paginationId) {
            // if (typeof (paginationId) === 'undefined') {
            //     paginationId = DEFAULT_ID;
            // }
            // if (!paginatorService.isRegistered(paginationId)) {
            //     throw 'pagination directive: the itemsPerPage id argument (id: ' + paginationId + ') does not match a registered pagination-id.';
            // }
            var end;
            var start;
            if (collection instanceof Array) {
                itemsPerPage = parseInt(itemsPerPage) || 10;
                // if (paginatorService.isAsyncMode(paginationId)) {
                //     start = 0;
                // } else {
                    // start = (paginatorService.getCurrentPage(paginationId) - 1) * itemsPerPage;

                    start = (paginatorService.getCurrentPage() - 1) * itemsPerPage;
                // }
                end = start + itemsPerPage;
                // paginatorService.setItemsPerPage(paginationId, itemsPerPage);

                paginatorService.setItemsPerPage(itemsPerPage);

                return collection.slice(start, end);
            } else {
                return collection;
            }
        };

}