(function () {
    'use strict';

    angular
        .module('votingApp')
        .service('snackService', snackService);

    snackService.$inject = ['$http', '$q'];

    function snackService($http, $q) {
        var self = this;

        self.getAllSnacks = getAllSnacks;
        self.voteSnacks = voteSnacks;

        function getAllSnacks() {
            return $http.get('http://localhost:3000/snacks/all')
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error.statusCode);
                });
        }

        function voteSnacks(id) {
            return $http.put('http://localhost:3000/snacks/' + id)
                .then(function (response) {
                    return getAllSnacks();
                }, function (error) {
                    return $q.reject(error.statusCode);
                });
        }
    }
})();
