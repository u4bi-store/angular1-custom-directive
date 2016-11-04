app.directive('layout',layout);
app.directive('myCustomer',myCustomer);
app.directive('htmlCustomer',htmlCustomer);

function layout(){
    return{
        templateUrl: function(element, attrs) {
            return 'views/main/'+attrs.type+'.html';
        }
    }
}

function myCustomer(){
    return{
        template: '[my-customer] name: {{customer.name}} addr: {{customer.address}}'
    }
}

function htmlCustomer(){
    return{
        templateUrl: 'views/main/html-customer.html'
    }
}