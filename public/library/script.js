(function(){

	var app = angular.module("routedTabs", ["ui.router", "ui.bootstrap"]);

	app.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/main/tab1");

		$stateProvider
			.state("main", { abtract: true, url:"/main", templateUrl:"/main" })
				.state("main.tab1", { url: "/tab1", templateUrl: "/tab1" })
				.state("main.tab2", { url: "/tab2", templateUrl: "/tab2" })
				.state("main.tab3", { url: "/tab3", templateUrl: "/tab3" })
				.state("main.tab4", { url: "/tab4", templateUrl: "/tab4" })
				.state("main.tab5", { url: "/tab5", templateUrl: "/video" })
				.state("main.tab6", { url: "/tab6", templateUrl: "/member" })
				.state("main.tab7", { url: "/tab7", templateUrl: "/contact" })
				.state("main.tab8", { url: "/tab8", templateUrl: "/apiendpoints" })
				.state("main.tab9", { url: "/tab9", templateUrl: "/doc" });

	});

	app.controller("mainController", function($rootScope, $scope, $state) {

		$scope.go = function(route){
			$state.go(route);
		};

		$scope.active = function(route){
			return $state.is(route);
		};

		$scope.tabs = [
			{ heading: "Home", route:"main.tab1", active:false },
			{ heading: "About Drug Abuse", route:"main.tab2", active:false },
			{ heading: "Types of Drugs", route:"main.tab3", active:false },
			{ heading: "Services for Young Drug Abusers", route:"main.tab4", active:false },
			{ heading: "Videos", route:"main.tab5", active:false },
			{ heading: "MemberZone", route:"main.tab6", active:false },
			{ heading: "Contact Us", route:"main.tab7", active:false },
			{ heading: "API Endpoints", route:"main.tab8", active:false },
			{ heading: "Documentations", route:"main.tab9", active:false },
		];

		$scope.$on("$stateChangeSuccess", function() {
			$scope.tabs.forEach(function(tab) {
				tab.active = $scope.active(tab.route);
			});
		});
	});

}());
