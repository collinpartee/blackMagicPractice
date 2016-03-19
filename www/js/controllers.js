angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope) {

})

.controller('PlaylistsCtrl', function ($scope) {
    $scope.questionAsked = true;
    $scope.hasFinishedPlaying = false;
    $scope.score = 0;
    $scope.quizLength = 3;
    $scope.currQuizNumber = 0;

    $scope.choice1Selected = false;
    $scope.choice2Selected = false;
    $scope.choice3Selected = false;
    $scope.choice4Selected = false;


    //    $scope.currQuestion = "none";
    //    $scope.hasStartedPlaying = 'no';
    //    $scope.showAvatarAnswerMessage = false;
    //    $scope.youGotItRight = false;
    //    $scope.questionAnswered = false;

    $scope.chooseChoice1 = function () {
        $scope.choice1Selected = true;
        $scope.choice2Selected = false;
        $scope.choice3Selected = false;
        $scope.choice4Selected = false;
    }
    $scope.chooseChoice2 = function () {
        $scope.choice1Selected = false;
        $scope.choice2Selected = true;
        $scope.choice3Selected = false;
        $scope.choice4Selected = false;
    }
    $scope.chooseChoice3 = function () {
        $scope.choice1Selected = false;
        $scope.choice2Selected = false;
        $scope.choice3Selected = true;
        $scope.choice4Selected = false;
    }
    $scope.chooseChoice4 = function () {
        $scope.choice1Selected = false;
        $scope.choice2Selected = false;
        $scope.choice3Selected = false;
        $scope.choice4Selected = true;
        $scope.showAvatarAnswerMessage = true;
    }

})

.controller('PlaylistCtrl', function ($scope) {});
