// 
//
//
// exports.postTweet = (req, res) => {
//   var screen_name = req.body.handle;
//   // console.log(screen_name);  //test in the Terminal
//   var screen_name = req.body.handle;
//   var users = userList(res, screen_name);
//   // res.render('list');
// };
//
// require('dotenv').config();
//
// var Twitter = require('twitter');
//
// module.exports = function(res, screen_name) {
//   var client = new Twitter({
//     consumer_key: process.env.CONSUMER_KEY,
//     consumer_secret: process.env.CONSUMER_SECRET,
//     access_token_key: process.env.ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.ACCESS_TOKEN_SECRET
//   });
//
//   var params = {screen_name: screen_name};
//   var one_way_following = [];
//   var users_to_display = [];
//
//
//   client.get('followers/ids', params, function(error, followers_results, response) {
//     if (error)
//       throw error;
//
//     var followers = followers_results.ids;
//
//     client.get('friends/ids', params, function(error, following_results, response) {
//        if (error)
//          throw error;
//
//        var following = following_results.ids;
//
//        following.forEach(function(person) {
//          if (followers.indexOf(person) === -1) {
//             one_way_following.push(person);
//           }
//        });
//
//
//          one_way_following = one_way_following.slice(0, 99);
//
//
//          var one_way_following_string = one_way_following.join();
//
//          client.get('users/lookup', {user_id: one_way_following_string}, function(error, users_results, response){
//
//             users_results.forEach(function(user){
//               var userObject = {
//                 name: user.name,
//                 screen_name: user.screen_name,
//                 avatar: user.profile_image_url
//               };
//                 users_to_display.push(userObject);
//             });
//
//               res.render('list', { users: users_to_display })
//          });
//      });
//   });
// }
