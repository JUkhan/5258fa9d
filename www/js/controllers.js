angular.module('your_app_name.controllers', [])

.controller('AuthCtrl', function($scope, $ionicConfig) {

})

// APP
.controller('AppCtrl', function($scope, $ionicConfig) {

})

.controller('HomeCtrl', function ($scope, $ionicLoading, $state, OfferService) {
    $scope.offers = [];
    $scope.search={};
    var latestOffers=null,bestOffers=null;
    $scope.offerCategory='latest';
    
    $scope.clicked = function(offer) {
        $scope.offerCategory = offer;
        (offer==="ltest")?$scope.offers =latestOffers||$scope.doRefresh():      
            $scope.offers =bestOffers||$scope.doRefresh();
    }
    $scope.doRefresh = function() {
		$ionicLoading.show({
			template: 'Loading '+$scope.offerCategory+' offers...'
		});
		OfferService.getOffers($scope.offerCategory)
		.then(function(data){
			($scope.offerCategory==='latest')?latestOffers=data:bestOffers=data;
            $scope.offers=data;
            $ionicLoading.hide();
			$scope.$broadcast('scroll.refreshComplete');
		})
	}
    $scope.gotoOfferDetil=function (id) {
        $state.go('app.offerdetail',{id:id})
    }
    $scope.doRefresh();
})

.controller('OfferDetailCtrl', function ($scope, $state,$ionicLoading, OfferService) {
    
    $ionicLoading.show({
			template: 'Loading offer...'
	});
    OfferService.getOfferById($state.params)
    .then(function (data) {
        $scope.offer=data;
        $ionicLoading.hide();
    });
})

.controller('StoresCtrl', function ($scope, $state,$ionicLoading, StoresService) {
    
    $ionicLoading.show({
			template: 'Loading offer...'
	});
    StoresService.getStores()
    .then(function (data) {
        $scope.stores=data;
        $ionicLoading.hide();
    });
    
    $scope.geDetail=function (id) {
        $state.go('app.storeDetail',{id:id});
    }
})
.controller('StoreDetailCtrl', function ($scope, $state, $ionicLoading, StoresService) {
    $scope.store={};
    $scope.category='offers';
    StoresService.getStore($state.id).then(function (data) {
          $scope.store=data;
    });
    $scope.clicked = function(category) {
        $scope.category = category;
        (category==="products")?$scope.products =$scope.products||$scope.doRefresh():      
            $scope.offers =$scope.offers||$scope.doRefresh();
    }
    $scope.doRefresh = function() {
		$ionicLoading.show({
			template: 'Loading '+$scope.category
		});
		 $scope.category==='products'?
          StoresService.getProducts($state.id)
            .then(function(data){			
                $scope.products=data;
                hide();
            })
        :StoresService.getOffers($state.id)
            .then(function(data){			
                $scope.offers=data;console.log(data)
                hide();
            })
	};
    
    function hide() {
        $ionicLoading.hide();
        $scope.$broadcast('scroll.refreshComplete');
    }
   
    $scope.doRefresh();
})
.controller('CategoryCtrl', function ($scope, $state, $ionicLoading, CategoryService) {
    
    $scope.geDetail=function (idparams) {
        
    };
    $ionicLoading.show({
			template: 'Loading categories'
	});
    CategoryService.getCategories()
        .then(function (data) {
            $scope.categories=data;
            $ionicLoading.hide();
        })
})