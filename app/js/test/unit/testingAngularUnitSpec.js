describe('Testing AngularJs test suit', function() {
    beforeEach(module('testingApp'));

    describe('Testing AngularJs Controller', function() {
        let scope, ctrl;

        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('testController', {$scope: scope});
        }));
        afterEach(function () {
           //cleanup code
        });
        it('Should initialize title in the scope', function(){
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Testing Billbong application");
        });

        it('should add 2 destinations to the destination list', function(){
            expect(scope.destinations).toBeDefined();
            expect(scope.destinations.length).toBe(0);

            scope.newDestination = {
                city: "Amsterdam",
                country: "Netherlands"
            }

            scope.addDestination();

            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe("Amsterdam");
            expect(scope.destinations[0].country).toBe("Netherlands");

            scope.newDestination = {
                city: "Ibiza",
                country: "Spain"
            }
            scope.addDestination();

            expect(scope.destinations.length).toBe(2);
            expect(scope.destinations[1].city).toBe("Ibiza");
            expect(scope.destinations[1].country).toBe("Spain");
        });
    });
});