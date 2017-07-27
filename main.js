var EatHealthy=angular.module('EatHealthy',['ngRoute']);


EatHealthy.config(function ($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'logincontroller'
	});
	$routeProvider.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'maincontroller'
	});
	$routeProvider.when('/restaurant/:index',{
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantcontroller'
	});
});


EatHealthy.controller('maincontroller', function($scope) {
$scope.Restaurants=[{
	name: 'Pizza Hut',
	address: 'S 32, Main Market, Green Park, New Delhi, Delhi 110016',
	location: 'Green Mark',
	phone: ' 011 3988 3988',
	vote: '4.2',
	cost: '400',
	hours: ' 11AM–11PM (Mon-Sun)',
	image: 'http://www.delhitourism.gov.in/delhitourism/images/pizzahut.jpg',
	bestDish : {
		name:'Veggie supreme pizza',
		image:'https://5.imimg.com/data5/NH/EG/GLADMIN-12767060/veggie-supreme-pizza-500x500.jpg'
	}
},
{
	name: 'Burger King',
	address: 'Community Centre, Community Center, Ashok Vihar, Saket, New Delhi, Delhi 110017',
	location: 'Saket',
	phone: '  011 4140 3240',
	vote: '4.0',
	cost: '275',
	hours: ' 11AM–10PM (Mon-Sun)',
	image: 'http://www.franchisezing.com/franchise/wp-content/uploads/2013/11/bk.jpg'
},
{
	name: 'Slice of Italy',
	address: 'E- 249, Rama Market, Munirka, New Delhi, Delhi 110067',
	location: 'Munirka',
	phone: '  011 4100 0959',
	vote: '3.8',
	cost: '510',
	hours: ' 10AM–10PM (Mon-Sun)',
	image: 'http://www.franchiseindia.com/images/tfc/slice-italy-156x156.jpg',
	bestDish : {
		name:'Tandoori Paneer',
		image:'https://i.ytimg.com/vi/n-8etlTdjOA/maxresdefault.jpg'
	}
},
{
	name: 'Karim',
	address: 'Jama Masjid, Gali Kababian, Old Delhi, New Delhi, Delhi 110006',
	location: 'Jama Masjid',
	phone: '011 2326 4981',
	vote: '4.8',
	cost: '850',
	hours: ' 9AM–12AM (Mon-Sun)',
	image: 'https://photos.asklaila.com/photos/qrE/2A334qrE/Restaurant-NCR-Karims-Mugal-Palace-2A334qrE-4f338ca275326_regular.jpg'
}];
});



EatHealthy.controller('logincontroller',function($scope , $location){
$scope.LoginToWebsite= function(){
	//console.log('jksdhaj');
	$location.url('home')
}

})

EatHealthy.controller('restaurantcontroller', function($scope,$routeParams,$http){
$scope.restaurantIndex=$routeParams.index;
var restaurants = [{
	name: 'Pizza Hut',
	address: 'S 32, Main Market, Green Park, New Delhi, Delhi 110016',
	location: 'Green Mark',
	phone: ' 011 3988 3988',
	vote: '4.2',
	cost: '400',
	hours: ' 11AM–11PM (Mon-Sun)',
	image: 'http://www.delhitourism.gov.in/delhitourism/images/pizzahut.jpg',
	bestDish : {
		name:'Veggie Supreme Pizza',
		image:'https://5.imimg.com/data5/NH/EG/GLADMIN-12767060/veggie-supreme-pizza-500x500.jpg'
	}
},
{
	name: 'Burger King',
	address: 'Community Centre, Community Center, Ashok Vihar, Saket, New Delhi, Delhi 110017',
	location: 'Saket',
	phone: '  011 4140 3240',
	vote: '4.0',
	cost: '275',
	hours: ' 11AM–10PM (Mon-Sun)',
	image: 'http://www.franchisezing.com/franchise/wp-content/uploads/2013/11/bk.jpg'
},
{
	name: 'Slice of Italy',
	address: 'E- 249, Rama Market, Munirka, New Delhi, Delhi 110067',
	location: 'Munirka',
	phone: '  011 4100 0959',
	vote: '3.8',
	cost: '510',
	hours: ' 10AM–10PM (Mon-Sun)',
	image: 'http://www.franchiseindia.com/images/tfc/slice-italy-156x156.jpg',
	bestDish : {
		name:'Tandoori Paneer',
		image:'https://i.ytimg.com/vi/n-8etlTdjOA/maxresdefault.jpg'
	}
},
{
	name: 'Karim',
	address: 'Jama Masjid, Gali Kababian, Old Delhi, New Delhi, Delhi 110006',
	location: 'Jama Masjid',
	phone: '011 2326 4981',
	vote: '4.8',
	cost: '850',
	hours: ' 9AM–12AM (Mon-Sun)',
	image: 'https://photos.asklaila.com/photos/qrE/2A334qrE/Restaurant-NCR-Karims-Mugal-Palace-2A334qrE-4f338ca275326_regular.jpg'

}];
$scope.ingredients = [];
$scope.restaurant=restaurants[$scope.restaurantIndex]
$scope.getIngredients = function(url) {
	console.log(url);
var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
$http({
	'method': 'POST',
	'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
	'headers': {
		'Authorization': 'Key fe4c0eda91be42309a039ad89e400bc1',
		'Content-Type': 'application/json',
	},
	'data': data
}).then(function (response) {
		var ingredients = response.data.outputs[0].data.concepts;
			console.log(response);
			var list='';
			for (var i =0;i < ingredients.length;i++)
			 {
				$scope.ingredients.push(ingredients[i].name);
	}	
		});
		};
    });
    

