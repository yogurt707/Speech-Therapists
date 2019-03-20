app.factory("lookupSrv", function ($http, $q) {


    function Clin(clinObject) {

        this.fname = clinObject.fname;
        this.lname = clinObject.lname;
        this.image = clinObject.image;
        this.therapyType= clinObject.therapyType;
        this.hasClinic = clinObject.hasClinic;
        this.id = clinObject.id;
        this.isWillingToAriveHome = clinObject.isWillingToAriveHome;
        this.email = clinObject.email;
        this.phone = clinObject.phone;
        this.availableDates = clinObject.availableDates;
        this.city = clinObject.city;
        this.region = clinObject.region;
        this.ismale = clinObject.ismale;
    }


    //Brings all data from json (Regions data)
    function getRegions() {
        var async = $q.defer();
        var Regions = [];

        // Get All Regions 
        $http.get("app/service/regions.json").then(function (res) {
            // success
            for (var i = 0; i < res.data.length; i++) {
                Regions.push(res.data[i]);
            }
            async.resolve(Regions); // resolving the promise with the Regions array      
        }, function (err) {
            // error
            console.error(err);
            async.reject(err);  // rejecting the promise
        });
        return async.promise;
    }


    //Brings all data from json (Treatments data)
    function getTreatments() {
        var async = $q.defer();
        var treatments = [];

        // Get All treatments 
        $http.get("app/service/treatments.json").then(function (res) {
            // success
            for (var i = 0; i < res.data.length; i++) {
                treatments.push(res.data[i]);
            }
            async.resolve(treatments); // resolving the promise with the treatments array      
        }, function (err) {
            // error
            console.error(err);
            async.reject(err);  // rejecting the promise
        });
        return async.promise;
    }
    

    //Brings all data from json (clinList data)
    function getClinList() {
        var async = $q.defer();
        var clinList = [];

        // Get All clinList 
        $http.get("app/service/clinList.json").then(function (res) {
            // success
            for (var i = 0; i < res.data.length; i++) {
                clinList.push(new Clin(res.data[i]));
            }
            async.resolve(clinList); // resolving the promise with the clinList array      
        }, function (err) {
            // error
            console.error(err);
            async.reject(err);  // rejecting the promise
        });
        return async.promise;
    }


    return {
        getRegions: getRegions,
        getTreatments: getTreatments,
        getClinList: getClinList
    }

});
