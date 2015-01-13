/** Directivas **/

var module = angular.module("ngDirectivas", []);

module.directive('ngAlt', [function(){
    return {
        restrict: 'A',                     
        scope: {}, 
        link: function(scope, element, attrs){
            angular.element(element).attr('alt', attrs.ngAlt || '');
        }
    }
}]);
