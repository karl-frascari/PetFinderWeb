app.controller('mapController', ['$scope', 'baseRest', '$mdDialog',

    ($scope, baseRest, $mdDialog) => {

        const map = new classService.ol3MapInstace();
        const baseUrl = window.location.host;

        map.generateDefaulMap();

        // mapApi.get({ url: '/points' }).then(data => {

        //     _(data.data).each(point => {
        //         if (point.position) {
        //             map.addPoint(point.position);
        //         }
        //     });
        // });

    }
]);
