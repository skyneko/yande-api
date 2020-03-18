
const yande = require("./index")

const limit = 10000

const tags = ["nipples"]

let filter = {
    tags: ["kimono"],
    score: 100,
    fileSize: 0,
    width: 1200,
    height: 700,
    hasChildren: false,
    rating: "q"
}

yande.getPost(tags, limit, filter, (post) => {
    //console.log(post)
    console.log("https://yande.re/post/show/"+post.id)
})
