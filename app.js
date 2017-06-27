
'use strict';

//var vid = document.getElementById("myVideo"); 
//vid.play(); 
var myVideo = document.getElementById('myVideo');
if (typeof myVideo.loop == 'boolean') { // loop supported
  myVideo.loop = true;
} else { // loop property not supported
  myVideo.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
}
//...
myVideo.play();

var app = angular.module("myApp",  ["ngRoute"]);

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
							'height': (newValue.h - 70) + 'px',
							'width': (newValue.w ) + 'px' 
						};
					};
					
				}, true);
			
				w.bind('resize', function () {
					scope.$apply();
				});
			}
		});
	
		app.controller("myCtrl", function($scope, $location, $anchorScroll,$parse,$injector,$compile,$timeout,$window,$route) {
			
			$scope.AbsoluteImageUrl = "../images/signin-20170425-02.jpg";	
			
			$scope.ThemeImageUrl = "../images/index.png";
			$scope.menuImg = "../images/menu-toggle-thin.png";
			$scope.menuCloseImg = "../images/close-white.png";
			$scope.struckImg = "../images/struck-light1.png";
			$scope.imageshow = true;
			$scope.overlay = true;		
			var slideheight = screen.availHeight - 70;
								
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
			
			/*code for sliding images */

				var slidesInSlideshow = 4;
				var slideshow = 1;				
				var slidesTimeIntervalInMs = 8000;
				
				 $scope.imgdisp1 = true;
				 $scope.disp1 = {'color':'#00a498'};
				 $scope.menubar = {'color':'#dcdcdc'};
				 var slideTimer =
				 $timeout(function interval() {
					slideshow = (slideshow % slidesInSlideshow) + 1;
					if(slideshow != 1){
						slidesTimeIntervalInMs = 4000;
						$scope.overlay = false;
					}else{
						slidesTimeIntervalInMs = 8000;
						$scope.overlay = true;
					}
					for (var i = 1; i <= 4; i++) {
						var strImg = 'imgdisp'+i;
						if(eval(slideshow) == eval(i)){
							$parse(strImg).assign($scope, true);											
						}else{
							$parse(strImg).assign($scope, false);
						}					
					};
					
					if(eval(slideshow) == 1){
						$scope.disp1 = {'color':'#00a498'};
						$scope.disp2 = {'color':'#fff'};
						$scope.disp3 = {'color':'#fff'};
						$scope.disp4 = {'color':'#fff'};
						$scope.menubar = {'color':'#dcdcdc'};
						$scope.struckImg = "../images/struck-light1.png";
						$scope.menuImg = "../images/menu-toggle-thin.png";
						$scope.menuCloseImg = "../images/close-white.png";
					}else if(eval(slideshow) == 2){
						$scope.disp2 = {'color':'#00a498'};
						$scope.disp1 = {'color':'#fff'};
						$scope.disp3 = {'color':'#fff'};
						$scope.disp4 = {'color':'#fff'};
						$scope.menubar = {'color':'#dcdcdc'};
						$scope.struckImg = "../images/struck-light1.png";
						$scope.menuImg = "../images/menu-toggle-thin.png";
						$scope.menuCloseImg = "../images/close-white.png";
					}else if(eval(slideshow) == 3){
						$scope.disp3 = {'color':'#00a498'};
						$scope.disp1 = {'color':'#fff'};
						$scope.disp2 = {'color':'#fff'};
						$scope.disp4 = {'color':'#fff'};
						$scope.menubar = {'color':'#dcdcdc'};
						$scope.struckImg = "../images/struck-light1.png";
						$scope.menuImg = "../images/menu-toggle-thin.png";
						$scope.menuCloseImg = "../images/close-white.png";
					}else{
						$scope.disp4 = {'color':'#00a498'};
						$scope.disp1 = {'color':'#fff'};
						$scope.disp2 = {'color':'#fff'};
						$scope.disp3 = {'color':'#fff'};
						$scope.menubar = {'color':'#000'};
						$scope.struckImg = "../images/struck-dark1.png";
						$scope.menuImg = "../images/menu4.png";
						$scope.menuCloseImg = "../images/close.png";
					}
					 slideTimer = $timeout(interval, slidesTimeIntervalInMs);
				}, slidesTimeIntervalInMs);
					/*code for sliding images - ends*/

			$scope.hideOverlay = function(){
				$scope.slidestyle = {
					"margin-top" : "-'eval(slideheight)'",	
					"-moz-transition":"ease-in-out",
					"-webkit-transition":"ease-in-out"
				}
			}
			
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
					$scope.imageshow = false;
					$scope.imageshowclose = true;					
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
					$scope.imageshow = true;
					$scope.imageshowclose = false;
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
			
			$scope.imgitem1 = true;
			$scope.imgitem3 = true;
			$scope.item1 = true;
			$scope.item2 = true;
			$scope.item3 = true;
			$scope.item4 = true;
			$scope.toggleList = {};
			$scope.toggleList.activeItem = 'item1';
			$scope.toggleItems = [{
				id: 'item1',
				title: 'About'
			}, {
				id: 'item2',
				title: 'News'
			}, {
				id: 'item3',
				title: 'Expertise'
			}, {
				id: 'item4',
				title: 'Contact'			
			}];
			
			$scope.compile = function(element){
			  var el = angular.element(element);    
			  $scope = el.scope();
				$injector = el.injector();
				$injector.invoke(function($compile){
				   $compile(el)($scope)
				});     
			};
			
			
			$scope.showSubContent = function(x,y){
				var list = [];
				if( x == "item1" ){	
					list = [2,3,4];		
					$scope.imgLeftitem1 = true;
					$scope.imgitem1 = false;					
					$scope.navObj1 = $scope.navObj1 ? false : true;					
					$scope.navObj3 = false;		
					$scope.item2 = false;
					$scope.item3 = false;
					$scope.item4 = false;
					$scope.styleitem1 = { 'color' : '#777', 'font-size' : '0.80em'};
					if(eval($scope.navObj1) == false){
						$scope.imgLeftitem1 = false;
						$scope.imgitem1 = true;
						$scope.item1 = true;
						$scope.item2 = true;
						$scope.item3 = true;
						$scope.item4 = true;
						$scope.styleitem1 = { 'color' : '#dcdcdc', 'font-size' : '0.85em'};
					}
				} 
				else if(x == "item3"){
					list = [1,2,4];		
					$scope.imgLeftitem3 = true;
					$scope.imgitem3 = false;
					$scope.navObj3 = $scope.navObj3 ? false : true;					
					$scope.navObj1 = false;	
					$scope.item1 = false;
					$scope.item2 = false;
					$scope.item4 = false;	
					$scope.styleitem3 = { 'color' : '#777', 'font-size' : '0.80em'};
					if(eval($scope.navObj3) == false){
						$scope.imgLeftitem3 = false;
						$scope.imgitem3 = true;
						$scope.item1 = true;
						$scope.item2 = true;
						$scope.item3 = true;
						$scope.item4 = true;
						$scope.styleitem3 = { 'color' : '#dcdcdc', 'font-size' : '0.85em'};
					}					
				} 
				else {
					list = [];					
						
					//$location.path('/'+y);
					$route.reload();
					$scope.navObj1 = false;
					$scope.navObj3 = false;					
				}
								
			};
		});
