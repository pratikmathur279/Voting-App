(function () {
    'use strict';

    angular
        .module('votingApp')
        .controller('MainController', MainController);

    MainController.$inject = ['snackService'];

    function MainController(snackService) {
        var mainVm = this;

        mainVm.title = "Voting Application";

        init();

        mainVm.sortSnack = {
            sortBy: 'votes',
            sortOrder: true
        };


        function init() {
            getAllSnacks();
        }

        mainVm.checkUser = function (name) {
            snackService.getAllSnacks()
                .then(function (data) {
                    if (name == data) {
                        console.log('true ' + name);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })

        }



        mainVm.voteSnack = function (id) {
            snackService.voteSnacks(id)
                .then(function (data) {
                    mainVm.snacks = data;
                })
                .catch(function (error) {
                    console.log(error);
                });

        };

        function getAllSnacks() {
            snackService.getAllSnacks()
                .then(function (data) {
                    mainVm.snacks = data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }




})();
