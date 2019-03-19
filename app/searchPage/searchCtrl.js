app.controller("searchCtrl", function ($scope, lookupSrv) {


    $scope.regions = lookupSrv.getRegions();
    $scope.Treatments = lookupSrv.getTreatments();

});     