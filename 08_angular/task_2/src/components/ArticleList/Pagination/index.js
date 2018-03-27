let paginationComponent = {
        template: require('./pagination.template.html'),
        controller: paginationComponentController,
        bindings:
                {
                        total: '<'
                }
}

function paginationComponentController($scope) {
        let self = this;

        self.$onInint = activate();

        self.$onChanges = function (changes) {
                self.total = changes.total.currentValue;
                self.fillPages();
        };

        self.fillPages = () => {
                let pagesCount = self.total ? Math.ceil(self.total / self.pageSize) : 0;
                self.pages = Array(pagesCount).fill().map((x, i) => ({ value: i, name: i + 1 }));
                self.setCurrent(self.pages[0].value);
        };

        self.setCurrent = (pageNumber) => {
                self.current = pageNumber;
                $scope.$parent.current = pageNumber;
        }

        function activate() {                
                self.pageSize = $scope.$parent.pageSize || 10;
                self.current = $scope.$parent.current || 0;

                self.last = 0;
                self.pages = [];
        }
}

export default paginationComponent;