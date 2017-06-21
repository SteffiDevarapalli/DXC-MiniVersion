'use strict';

var app = angular.module("myApp", []);

		app.directive('resize', function ($window) {
			return function (scope, element) {
				var w = angular.element($window);
				scope.getWindowDimensions = function () {
					return { 'h': screen.availHeight, 'w': screen.availWidth };
				};
				scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
					//scope.windowHeight = newValue.h;
					//scope.windowWidth = newValue.w;					
					scope.style = function () {
						return { 
							'height': (newValue.h - 75) + 'px',
							'width': (newValue.w ) + 'px' 
						};
					};
					
				}, true);
			
				w.bind('resize', function () {
					scope.$apply();
				});
			}
		})

		app.controller("myCtrl", function($scope, $location, $anchorScroll,$parse,$injector,$compile,$timeout,$window) {
			       
			/*angular.element('.controller').bind('resize', function(){       
				$scope.width = screen.availWidth; 
				$scope.height = screen.availHeight; 				
				// manuall $digest required as resize event
				// is outside of angular
				$scope.$digest();
			});	*/		
			
			$scope.AbsoluteImageUrl = "../images/signin-20170425-02.jpg";	
			
			$scope.ThemeImageUrl = "../images/index.png";
			$scope.menuImg = "../images/menu-toggle-thin.png";
			
			var slidesInSlideshow = 4;
			var slidesTimeIntervalInMs = 4000; 

			/*code for sliding images */
			var slideshow = 1;
			 $scope.imgdisp1 = true;
			 var slideTimer =
			 $timeout(function interval() {
				 slideshow = (slideshow % slidesInSlideshow) + 1;
				 for (var i = 1; i <= 4; i++) {
					var strImg = 'imgdisp'+i;
					if(eval(slideshow) == eval(i)){
						var model = $parse(strImg);	
						model.assign($scope, true);							
					}else{
						var model = $parse(strImg);	
						model.assign($scope, false);
					}
					/*if(slideshow == 4){
						var el = angular.element( document.querySelector( '.itemsdisp') ).attr('ng-style','color: #000 !important');
					}else{
						var el = angular.element( document.querySelector( '.itemsdisp') ).attr('ng-style','color: #dcdcdc !important');
					}*/
					
				 };
				 slideTimer = $timeout(interval, slidesTimeIntervalInMs);
				 }, slidesTimeIntervalInMs);
				/*code for sliding images - ends*/			
					
			// Must use a wrapper object, otherwise "activeItem" won't work			
			$scope.menuBarList = {};
			$scope.menuBarList.activeItem = 'item1';
			$scope.menuitems = [{
				id: 'item1',
				title: 'work'
			}, {
				id: 'item2',
				title: 'features'
			}, {
				id: 'item3',
				title: 'admin'
			}];

			$scope.scrollImageLeft = function(){
				$scope.checkFirstImage = false;
				$scope.checkLastImage = false;
				for (i = 1; i <= 5; i++) {
					var strImg = 'img'+i;
					if(eval(('$scope.img'+i)) == true && $scope.checkFirstImage == false){
						var model = $parse(strImg);	
						model.assign($scope, false);			
						$scope.checkFirstImage = true;
					}else if(eval(('$scope.img'+i)) == false && $scope.checkLastImage == false){
						var model = $parse(strImg);	
						model.assign($scope, true);
						$scope.checkLastImage = true;
					}
				}
			};
			$scope.scrollImageRight = function(){
				$scope.checkFirstImage = false;
				$scope.checkLastImage = false;
				for (i = 5; i >= 1; i--) {
					var strImg = 'img'+i;
					if(eval(('$scope.img'+i)) == true && $scope.checkFirstImage == false){
						var model = $parse(strImg);	
						model.assign($scope, false);			
						$scope.checkFirstImage = true;
					}else if(eval(('$scope.img'+i)) == false && $scope.checkLastImage == false){
						var model = $parse(strImg);	
						model.assign($scope, true);
						$scope.checkLastImage = true;
					}
				}
			};
			
			$scope.showDiv = function(){
				$scope.img1 = true;
				$scope.img2 = true;
				$scope.img3 = true;			
				$scope.img4 = true;
				$scope.img5 = false;
				$scope.display = $scope.display ? false : true;
			};
			$scope.slideDiv = function(){
				$scope.show = $scope.show ? false : true;
				if(eval($scope.show) == true){
					$scope.myObj = {						
						"margin-left" : "-225px",	
						"-moz-transition":"ease-in-out",
						"-webkit-transition":"ease-in-out"
					}
					$scope.myObj1 = {	
						"-moz-transition":"ease-in-out",
						"-webkit-transition":"ease-in-out"
					}
					$scope.menuImg = "../images/close.png";
				}else{
					$scope.myObj = {
						"margin-left" : "0px",
						"-moz-transition":"ease-in-out",
						"-webkit-transition":"ease-in-out"						
					}
					$scope.myObj1 = {	
						"-moz-transition":"ease-in-out",
						"-webkit-transition":"ease-in-out"
					}
					$scope.menuImg = "../images/menu-toggle-thin.png";
				}
			};
						
			$scope.showContent = function(divValue){
				if(divValue == "admin"){
					$scope.admin = true;
					$scope.features = false;
				}
				else if(divValue == "features"){
					$scope.features = true;
					$scope.admin = false;
				}				
				else{
					$scope.admin = false;
					$scope.features = false;
					$scope.work = false;
				}
				
			};

			$scope.hideContent = function(){
				$scope.admin = false;
				$scope.features = false;
				$scope.work = false;
			};
				
			// Must use a wrapper object, otherwise "activeItem" won't work			
			$scope.adminList = {};
			$scope.adminList.activeItem = 'item1';
			$scope.adminitems = [{
				id: 'item1',
				title: 'Change Background Image'
			}, {
				id: 'item2',
				title: 'Change Font Style'
			}, {
				id: 'item3',
				title: 'Change Font color'
			}];
				
			// Must use a wrapper object, otherwise "activeItem" won't work			
			$scope.featureList = {};
			$scope.featureList.activeItem = 'item1';
			$scope.featureitems = [{
				id: 'item1',
				title: 'Images'
			}, {
				id: 'item2',
				title: 'Links'
			}];
			
			// Must use a wrapper object, otherwise "activeItem" won't work			
			$scope.workList = {};
			$scope.workList.activeItem = 'item1';
			$scope.workitems = [{
				id: 'item1',
				title: 'KIFI Products'
			}, {
				id: 'item2',
				title: 'KIFI Achievements'
			}];
			
			$scope.toggleList = {};
			$scope.toggleList.activeItem = 'item1';
			$scope.toggleItems = [{
				id: 'item1',
				title: 'About',
				display: true,
				displayLi: true
			}, {
				id: 'item2',
				title: 'News',
				display: false,
				displayLi: true
			}, {
				id: 'item3',
				title: 'Expertise',
				display: true,
				displayLi: true
			}, {
				id: 'item4',
				title: 'Contact',
				display: false,
				displayLi: true
			}, {
				id: 'item5',
				title: 'The Team',
				display: false,
				displayLi: false
			}, {
				id: 'item6',
				title: 'About Me',
				display: false,
				displayLi: false
			}, {
				id: 'item7',
				title: 'Branding',
				display: false,
				displayLi: false
			}, {
				id: 'item8',
				title: 'Photography',
				display: false,
				displayLi: false
			}, {
				id: 'item9',
				title: 'Product Design',
				display: false,
				displayLi: false
			}];
			
			$scope.compile = function(element){
			  var el = angular.element(element);    
			  $scope = el.scope();
				$injector = el.injector();
				$injector.invoke(function($compile){
				   $compile(el)($scope)
				});     
			};
			/*$scope.routeProvider = function(x) {
			  $routeProvider
				.when('/', {
				  templateUrl: '/home',
				  controller: 'HomeController',
				  activeTab: 'home'
				}).
				when('/help', {
				  templateUrl: '/help',
				  controller: 'HelpController',
				  activeTab: 'help'
				}).
				when('/donate', {
				  templateUrl: '/donate',
				  controller: 'DonateController',
				  activeTab: 'donate'
				}).
				when('/server', {
				  templateUrl: '/server',
				  controller: 'ServerController',
				  activeTab: 'server'
				}).
				when('/server/new', {
				  templateUrl: '/server/new',
				  controller: 'NewServerController',
				  activeTab: 'serverNew'
				}).
				otherwise({
				  redirectTo: '/'
				});
			};*/
			
			$scope.showSubContent = function(x,y){
				var list = [];
				if( x == "item1" ){	
					list = [1,5,6];
					/*$scope.liText = {						
						"color" : "#777"
					}*/					
					angular.element( document.querySelector( '#imgLeftitem1') ).attr('ng-show',"true");
					angular.element( document.querySelector( '#imgitem1') ).attr('ng-show',"false");
				} else if(x == "item3"){
					list = [3,7,8,9];
					/*$scope.liText = {						
						"color" : "#777"
					}*/
					angular.element( document.querySelector( '#imgLeftitem3') ).attr('ng-show',"true");
					angular.element( document.querySelector( '#imgitem3') ).attr('ng-show',"false");
				} else {
					list = [1,2,3,4];					
					/*$scope.liText = {						
						"color" : "#dcdcdc"
					}*/	
					//$location.path('/'+y);
//$route.reload();
					angular.element( document.querySelector( '#imgLeftitem1') ).attr('ng-show',"false");
					angular.element( document.querySelector( '#imgLeftitem3') ).attr('ng-show',"false");					
					angular.element( document.querySelector( '#imgitem1') ).attr('ng-show',"true");
					angular.element( document.querySelector( '#imgitem3') ).attr('ng-show',"true");
				}
				for(i=1; i<=9; i++){
					if(list.indexOf(i) !== -1) {
						var myEl = angular.element( document.querySelector( '#item'+i ) ).attr('ng-show',"true");
						/*if(i == 1 || i ==3){
							var myElement = angular.element( document.querySelector( '#aitem'+i) ).attr('ng-style','color: #777 !important');
							$scope.compile(myElement);
						}*/
						angular.element( document.querySelector( '#item'+i ) ).removeAttr("compile");
						angular.element( document.querySelector( '#item'+i ) ).removeAttr("ng-repeat");						
						$scope.compile(myEl);	
						
					}else{
						var myEl = angular.element( document.querySelector( '#item'+i ) ).attr('ng-show',"false");
						/*if(i == 1 || i ==3){
							var myElement = angular.element( document.querySelector( '#aitem'+i) ).attr('ng-style','color: #dcdcdc  !important');
							$scope.compile(myElement);
						}*/
						angular.element( document.querySelector( '#imgitem'+i ) ).attr('ng-show',"false");
						angular.element( document.querySelector( '#item'+i ) ).removeAttr("compile");
						angular.element( document.querySelector( '#item'+i ) ).removeAttr("ng-repeat");							
						$scope.compile(myEl);
						
					}
				}				
			};
		});
