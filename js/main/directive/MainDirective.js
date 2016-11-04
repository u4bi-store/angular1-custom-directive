app.directive('layout',layout);
app.directive('myCustomer',myCustomer);
app.directive('htmlCustomer',htmlCustomer);
app.directive('attrCustomer',attrCustomer);
app.directive('restrictCustomer',restrictCustomer);

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

function attrCustomer(){
    return{
        templateUrl: function(elem, attr) {
            return 'views/main/customer-' + attr.type + '.html';
        }
    }
}

function restrictCustomer(){
    return{
        restrict: 'E',
        templateUrl: 'restrict-customer.html'
    }
}

/**
 * @restrict : 지시자 선언타입 이라고함.
    E - Element name: <my-directive></my-directive>
    A - Attribute: <div my-directive="exp"> </div>
    C - Class: <div class="my-directive: exp;"></div>
    M - Comment: <!-- directive: my-directive exp -->
 */