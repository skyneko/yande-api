"use strict"
const request = require("request-promise")
const cheeio = require("cheerio")
const fs = require("fs")

/**
 * @param {Int} page
 * @return {Array}  
 */
function getPostByPageID(page) {
    return new Promise((resolve,reject) => {

        const URL = "https://yande.re/post"

        request(URL)
            .then(html => {
                let result = []
                /**
                 * Tách các row trong html thành một String Array.
                 * lọc các đoạn "Post.register" và xử lý để chuyển về dạng JsonObject.  
                 */
                html.split("\n")
                    .forEach(row => {
                        if (row.indexOf("Post.register(") > -1) {
                            let post = JSON.parse(
                                    row.trim().slice("Post.register(".length, row.trim().length-1)
                                )
                            result.push(post)
                        }
                    })

                resolve(result)  
            })
            .catch(reject)
    })
}

module.exports = getPostByPageID