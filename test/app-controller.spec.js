
//import angular from 'angular'
import 'angular-mocks';

import '/public/app/controllers/app-controller';

let module = angular.mock.module;
let inject = angular.mock.inject;

describe('AppCtrl test suite ::', () => {

	let $scope;

	beforeEach(module('app'));

	beforeEach(inject(($rootScope, $controller) => {
		$scope = $rootScope.$new();
		$controller('appCtrl', {$scope});
	}));

    it('test should be true', () => {
        expect($scope.test).to.be.true;
    });
});