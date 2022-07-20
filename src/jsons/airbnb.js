
// State: stay (crudl) , trip => order.

const db = {
  "stay": [
    {
      "_id": "10006546",
      "name": "Ribeira Charming Duplex",
      "type": "House",
      "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 8,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "host": {
        "_id": "51399391",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Porto",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers" : ['mini-user'] // for user-wishlist : use $in
    }
  ],
  "order": [
    {
      "_id": "o1225",
      "hostId": "u102",
      "createdAt": 9898989,
      "buyer": {
        "_id": "u101",
        "fullname": "User 1"
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
        "adults": 2,
        "kids": 1
      },
      "stay": {
        "_id": "h102",
        "name": "House Of Uncle My",
        "price": 80.00
      },
      "status": "pending"
    }    
  ],
  "user": [
    {
      "_id": "u101",
      "fullname": "User 1",
      "imgUrl": "/img/img1.jpg",
      "isAdmin": false,
      "username" : "user1",
      "password" : "secret"
    },
    {
      "_id": "u102",
      "fullname": "User 2",
      "imgUrl": "/img/img2.jpg",
      "isAdmin": false,
      "username" : "user2",
      "password" : "secret"
    }
  ]  
}


// Homepage: TOP categories: Best Rate / Houses / Kitchen
// Renders a <StayList> with <StayPreview> with Link to <StayDetails>   url: /stay/123
// See More => /explore?topRate=true
// See More => /explore?type=House
// See More => /explore?amenities=Kitchen
// Explore page:
// stayService.query({type: 'House'})

const stays = [{}, {}]
// HomePage
//  list of stays with link to stay-details
//  CSS Infra, Master CSS
// UserDetails 
//  basic info
//  visitedStays => orderService.query({userId: 'u101'})
//  myStayOrders => orderService.query({hostId: 'u101'})
//  ownedStays => stayService.query({hostId: 'u103'})
// StayEdit - make it super easy to add Stay for development
// StayList, StayPreview
// Order, confirm Order
// Lastly: StayExplore, Filtering