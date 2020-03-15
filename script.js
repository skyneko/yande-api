const utils = require("./src/utils")
const getPost = require("./src/getPageData");

(async () => {
    
    let filter = {
        tags: [],
        score: 0,
        //fileSize: 0,
        //width: 0,
        //height: 0,
        hasChildren: true,
        //rating: "q"
    }
    let data = await getPost(["pantsu", "shirt_lift"], filter)

    console.log(data.map(el => ("https://yande.re/post/show/" + el.id)))
})()