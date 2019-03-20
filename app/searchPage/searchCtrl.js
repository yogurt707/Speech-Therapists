app.controller("searchCtrl", function ($scope, lookupSrv) {


    //loads all data from SRV
    
    lookupSrv.getRegions().then(function(results){
        $scope.regions = results;
        // console.log(JSON.stringify($scope.regions))  //Checks if all data returned after the promiss
    });

    lookupSrv.getTreatments().then(function(results){
        $scope.Treatments = results;
        // console.log(JSON.stringify($scope.Treatments))  //Checks if all data returned after the promiss
    });

    lookupSrv.getClinList().then(function(results){
        $scope.clinList = results;
        // console.log(JSON.stringify($scope.clinList))  //Checks if all data returned after the promiss
    });

   
});     