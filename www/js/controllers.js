angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope) {

})

.controller('PlaylistsCtrl', function ($scope) {
    $scope.questionAsked = true;
    $scope.hasFinishedPlaying = false;
    $scope.score = 0;
    $scope.quizLength = 3;
    $scope.currQuizNumber = 0;


    //    $scope.currQuestion = "none";
    //    $scope.hasStartedPlaying = 'no';
    //    $scope.choice1Selected = false;
    //    $scope.choice2Selected = false;
    //    $scope.choice3Selected = false;
    //    $scope.choice4Selected = false;
    //    $scope.showAvatarAnswerMessage = false;
    //    $scope.youGotItRight = false;
    //    $scope.questionAnswered = false;
})

.controller('PlaylistCtrl', function ($scope) {});
