app.directive('layout',layout);

function layout(){
    return{
        templateUrl: function(element, attrs) {
            return 'views/main/'+attrs.type+'.html';
        }
    }
}