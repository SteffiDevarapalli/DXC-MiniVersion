var app = angular.module("myApp", []);

		app.controller("myCtrl", function($scope, $location, $anchorScroll,$parse) {
			$scope.AbsoluteImageUrl = "../images/signin-20170425-02.jpg";						
		
			$scope.MobileImageUrl = "../images/mobile.png";
			$scope.TabImageUrl = "../images/tablet.png";
			$scope.DesktopImageUrl = "../images/desktop.png";
			$scope.ThemeImageUrl = "../images/index.png";
			$scope.Title = "KIFI Technology";
			$scope.Options = "Site";		
			
			$scope.siteList = {};
			$scope.siteList.activeItem = 'img1';
			$scope.siteitems = [{
				id: 'img1',
				title: 'District',
				imagename: '../images/District.png'
			}, {
				id: 'img2',
				title: 'District1',
				imagename: '../images/devo.png'
			}, {
				id: 'img3',
				title: 'District2',
				imagename: '../images/hero.png'
			}, {
				id: 'img4',
				title: 'District3',
				imagename: '../images/overview.png'
			}, {
				id: 'img5',
				title: 'District4',
				imagename: '../images/Preview.png'
			}];
					
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
			/*$scope.showDiv = function(x){
				$scope.falseDiv =  true;
				var yCoordinate = $("div.controller").offset().top + 200;
				var newHash = 'anchor' + x;
				  if ($location.hash() !== newHash) {
					$location.hash('anchor' + x);
				  } else {
					$anchorScroll();
				  }
			};*/
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
				title: 'KIFI Products'
			}, {
				id: 'item2',
				title: 'KIFI Achievements'
			}];
		});