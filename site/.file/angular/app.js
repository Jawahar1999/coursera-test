(function (){
'use strict';

angular.module('namecals',[])

.controller('NameCaculatorController', function($scope) {
	$scope.name = "";
	$scope.totalValue=0;


	$scope.displayNumeric =function () {
		var totalNameValue =calculateNumeric($scope.name);
		$scope.totalValue =totalNameValue;
	};


	function calculateNumeric(string) {
		var totalStringValue = 0;
		for (var i = 0; i < string.length; i++) {
			totalStringValue += string.charCodeAt(i);
		}

		return totalStringValue;
	}
});	


})();
