app.controller('main', mainController);

function mainController($scope, mainService){

    init();

    function init(){
        console.log('flog: '+mainService.flog(false));
    }
}