let paginationComponent = {
        template: require('./pagination.template.html'), 
        controller: paginationComponentController,
        // scope: {
        // },
        // bindToController:
        bindings:
        {
                itemsCount: '<',
                pageSize: '<'
        }
}

function paginationComponentController($scope){
        let self = this;

        self.current = 0;
        self.last = 0;
        self.pages = [];

        self.numberOfPages = (itemsCount, pageSize) => {
                 let n  = Math.ceil(itemsCount / pageSize)

                 self.pages = 

                 return n;
             };
}

export default paginationComponent;