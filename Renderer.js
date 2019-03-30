// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
        $(".user-container").empty()
        let source = $("#user-template").html()
        let template = Handlebars.compile(source)
        let newHtml = template(users)
        $(".user-container").append(newHtml)
    }

    _renderFriends(friends) {
        $(".friends-container").empty()
        let source = $("#user-friends-template").html()
        let template = Handlebars.compile(source)
        let newHtml = template({friends})
        $(".friends-container").append(newHtml)
    }

    // _renderQuote(quoteInfo) {
    //     $(".quote-container").empty()
    //     let source = $("#quote-template").html()
    //     let template = Handlebars.compile(source)
    //     let newHtml = template({quoteInfo})
    //     $(".quote-container").append(newHtml)
    // }

    _renderPokemon(pokeData) {
        $(".pokemon-container").empty()
        let source = $("#pokemon-template").html()
        let template = Handlebars.compile(source)
        let newHtml = template(pokeData)
        $(".pokemon-container").append(newHtml)
    }

    _renderMeat(text) {
        $(".meat-container").empty()
       let source = $("#meat-template").html()
       let template = Handlebars.compile(source)
       let newHtml = template({text})
       $(".meat-container").append(newHtml)
    }

    render(data){
        //invokes all the individual _render method
        this._renderUsers(data.users)
        this._renderFriends(data.friends)
        this._renderPokemon(data.pokeData)
        this._renderMeat(data.text)
        // this._renderQuote(data.quoteInfo)

    }
}

