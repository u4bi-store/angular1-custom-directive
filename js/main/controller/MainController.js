app.controller('main', mainController);

function mainController($scope, mainService){

    init();

    function init(){
        console.log('flog: '+mainService.flog(false));

        $scope.customer = {
            name: 'u4bi',
            address: 'south korea'
        };

        $scope.myungsoo = { name: 'Myungsoo', address: 'south korea' };
        $scope.chunsoo = { name: 'Chunsoo', address: 'north korea' };

    }
}