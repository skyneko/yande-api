"use strict"
const request = require("request-promise")
const utils = require("./utils")

const baseURL = "https://yande.re/post?"

/**
 * @param {Int} page
 * @return {Array}  
 * @callback err
 */
async function getPostByPageNum(baseURL, page, err = () => {}) {

    page = (page > 0) ? page : 1

    const URL = baseURL + "&page=" + page

    console.log(URL)

    try {
        const html = await request(URL)
    
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
            
        return result    

    } catch (e) {
        return err(e)
    }

}

/**
 * @param {StringArray} tags 
 * @param {StringArray} filter 
 * @param {Int} limit 
 */
async function getPostData (tags = [], filter = {}, limit = 100) { // default value

    /* thêm tag vào url */
    const URL = baseURL + "&tags=" + tags.join("+")

    let data = await getPostByPageNum(URL, 5, console.log)

    return utils.filterPost(data, filter)

}

module.exports = getPostData