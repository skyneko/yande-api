
const yande = require("./index")

const limit = 10000

const tags = []

let filter = {
    tags: [],
    score: 100,
    //fileSize: 0,
    //width: 0,
    //height: 0,
    //hasChildren: true,
    //rating: "q"
}

yande.getPost(tags, limit, filter, (post) => {
    console.log("https://yande.re/post/show/"+post.id)
})
