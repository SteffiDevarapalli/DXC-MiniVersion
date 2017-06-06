var app = angular.module("myApp", []);

		app.controller("myCtrl", function($scope) {
			$scope.AbsoluteImageUrl = "images/signin-20170425-02.jpg";			
		});
		app.controller('menubar', function ($scope) {
			$scope.MobileImageUrl = "images/mobile.png";
			$scope.TabImageUrl = "images/tablet.png";
			$scope.DesktopImageUrl = "images/desktop.png";
			$scope.ThemeImageUrl = "images/index.png";
			$scope.Title = "DXC Technology";
			$scope.Options = "Site";			
		});
		app.controller('menufunctions', function ($scope) {	
			$scope.admin = false;	
			$scope.features = false;	
			$scope.work = false;		
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
			//toggle functions
			$scope.showContent = function(divValue){
				if(divValue == "admin"){
					$scope.admin = true;
					$scope.features = false;
					$scope.work = false;
				}
				if(divValue == "features"){
					$scope.features = true;
					$scope.admin = false;
					$scope.work = false;
				}
				if(divValue == "work"){
					$scope.work = true;
					$scope.features = false;
					$scope.admin = false;
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
				title: 'DXC Products'
			}, {
				id: 'item2',
				title: 'DXC Achievements'
			}];
		});
