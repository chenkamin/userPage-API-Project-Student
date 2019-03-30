// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance


let renderer = new Renderer()
let apiManager = new APIManager()

    
let loadData = function(){
    apiManager.loadData()
}

let renderData = function(){
    renderer.render(apiManager.data)
    
}

// let saveData = function(){
//     localStorage.
// }