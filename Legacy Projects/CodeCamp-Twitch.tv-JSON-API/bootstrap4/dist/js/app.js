// Define the `phonecatApp` module
var twitchApp = angular.module('twitchApp', []);


twitchApp.controller('ChannelController', function ChannelController($scope){
  //needs to be array
  $scope.channels = [
    {
      "status": "Some GoLang Today #go #golang #youtube",
      "display_name": "FreeCodeCamp",
       "name": "freecodecamp",
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
       "url": "https://www.twitch.tv/freecodecamp",
       "views": 189385,
       "followers": 10989,
       live: true
    },
    {
      "status": "Some GoLang Today #go #golang #youtube",
      "display_name": "FreeCodeCamp",
       "name": "freecodecamp",
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
       "url": "https://www.twitch.tv/freecodecamp",
       "views": 189385,
       "followers": 10989,
       live: true
    },
    {
      "status": "Some GoLang Today #go #golang #youtube",
      "display_name": "FreeCodeCamp",
       "name": "freecodecamp",
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
       "url": "https://www.twitch.tv/freecodecamp",
       "views": 189385,
       "followers": 10989,
       live: true
    },
  ]

  //functions online, offline, all
});
streamComponent.controller('StreamComponent', function StreamComponent($scope){
  /*
  $http.get('phones/phones.json').then(function(response) {
        self.phones = response.data;
      });
      */
  //needs to be array
  $scope.PreviewImage = '';
  $scope.LogoImage = '';
  $scope.channelName = '';
  $scope.playGame = '';
  $scope.followers = '';
  $scope.views = '';
});
favGameComponent.controller('FavGameComponent', function FavGameComponent($scope){
  //needs to be array
  $scope.GameImage = '';
  $scope.GameTitle = '';
});
