
import app from '../module';

app.controller('appCtrl', ['$scope', class {
	constructor ($scope) {
		$scope.test = true;
        console.log('teste');
	}
}]);