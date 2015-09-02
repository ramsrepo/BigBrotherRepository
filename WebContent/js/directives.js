angular.module('pocApp.directives', []).

directive('ngConfirmClick', [
     function($dialog){
         return {
             priority: 1,
             terminal: true,
             link: function (scope, element, attr) {
                 var msg = attr.ngConfirmClick || "Are you sure?";
                 var clickAction = attr.ngClick;
                 
                 element.bind('click',function (event) {
                     if ( window.confirm(msg) ) {
                         scope.$eval(clickAction);
                     }
                 });
             },
             controller: function ($scope)
             {            
                 $scope.opts = {
                     backdrop: true,
                     keyboard: true,
                     backdropClick: true,
                     templateUrl: 'popups/addgroupmember.html'
                 };

                 $scope.openDialog = function () {
                     var d = $dialog.dialog($scope.opts);
                     d.open().then(function (result) {
                         if (result) {
                             alert('dialog closed with result: ' + result);
                         }
                     });
                 }
             }
         };
 }]);
