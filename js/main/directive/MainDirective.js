app.directive('layout',layout);
app.directive('myCustomer',myCustomer);
app.directive('htmlCustomer',htmlCustomer);
app.directive('attrCustomer',attrCustomer);
app.directive('restrictCustomer',restrictCustomer);
app.directive('isolatescopeCustomer',isolatescopeCustomer);
app.directive('manipulatesDomCustomer',manipulatesDomCustomer);

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

function isolatescopeCustomer(){
    return{
        restrict: 'E',
        scope: {
            customerInfo: '=info'
        },
        templateUrl: 'isolatescope-customer.html'
    }
}

function manipulatesDomCustomer($interval, dateFilter){
    return{
        'link': link
    }

    function link(scope, element, attrs) {
        var format, timeoutId;
        
        function updateTime() {
            element.text(dateFilter(new Date(), format));
        }

        scope.$watch(attrs.myCurrentTime, function(value) {
            format = value;
            updateTime();
        });

        element.on('$destroy', function() { $interval.cancel(timeoutId); });
        timeoutId = $interval(function() { updateTime(); }, 1000);
    }
    
}