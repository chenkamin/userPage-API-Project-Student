//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadData(){
        //you should make all your API requests here
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=7',
            success: (users) => { 
                this.data.users = users.results[0]
                this.data.friends = users.results.splice(1,6)
            }
            })
       
           
       $.ajax({
           method: "GET",
           url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 950) + 1}`,
           success:  (pokeData) => this.data.pokeData = pokeData
       })
        
        // $.ajax({
        //     method: "GET",
        //     url: "http://quotes.rest/qod.json",
        //     success:  (quote) => {
        //         let quoteInfo = {
        //             quote: quote.contents.quotes[0].quote,
        //             author: quote.contents.quotes[0].author
        //         }
        //         this.data.quoteInfo = quoteInfo
        //     } 
        // })
      

             $.ajax({
                 method: "GET",
                 url: "https://baconipsum.com/api/?type=all-meat&sentences=3&start-with-lorem=1",
                 success: (text) => this.data.text = text
            
            })
}
}

