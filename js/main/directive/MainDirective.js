app.directive('layout',layout);
app.directive('myCustomer',myCustomer);

function layout(){
    return{
        templateUrl: function(element, attrs) {
            return 'views/main/'+attrs.type+'.html';
        }
    }
}

function myCustomer(){
    return{
        template: 'name: {{customer.name}} addr: {{customer.address}}'
    }
}