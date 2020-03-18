# Installation
```
npm install yande-api
```
# Usage
```javascript

const yande = require("yande-api")

const limit = 10000 // limit post 

const tags = ["nipples"] // require tag

let filter = {
    tags: ["kimono"], 
    score: 100,
    fileSize: 0,
    width: 3000, // minimum width and height
    height: 2000,
    hasChildren: false,
    rating: "q"
}

yande.getPost(tags, limit, filter, (post) => {
    console.log("https://yande.re/post/show/"+post.id)
})


```