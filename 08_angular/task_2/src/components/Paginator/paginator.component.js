let paginatorComponent = {
    bindings:{
        total: '=',
        template: require('./paginator.template.html'),
        controller: 'paginatorController as pgnCtrl'        
    }
}

export default paginatorComponent;