app.factory('mainService', MainService);

function MainService(){
    return {
        'flog' : flog
    }

    function flog(bool){
        return bool=!bool;
    }
}