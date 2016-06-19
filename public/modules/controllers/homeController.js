app.controller('homeController', ['$scope','$timeout',
    ($scope, $timeout) => {

    	const waitDomRender = $timeout;

    	waitDomRender( () => {
    		setTheme();    		
    	});

    }
]);
