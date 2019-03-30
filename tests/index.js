console.log("dd")


//users
// $.ajax({
//     method: "GET",
//     url: 'https://randomuser.me/api/?results=7',
//     success: function (data) {
//         let friends = (data.results);
//         let mainUser = (data.results)
//         //console.log(friends)
//         let friends = friends.map(f =>  {return { 
//             firstName: f.name.first
//             , lastName: f.name.last }})

//         let users = mainUser.map(m => { return { 
//             firstName: m.name.first, 
//             lastName: m.name.last, 
//             city: m.location.city, 
//             state: m.location.state, 
//             picture: m.picture.medium } })
//         console.log(user)
//     }
// });


//BACON
$.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    success: function (data){
        console.log(data[0])
    }
})


