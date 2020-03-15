"use strict"

module.exports = {
    /**
     * Filter cho post Object
     * @param {Object} filter
     * + {Array} filter.tags : loại bỏ các post không có tag này
     * + {Int} filter.score : lọc post có score nhỏ hơn
     * + {Int} filter.fileSize : lọc filesize lớn hơn 
     * + {Int} filter.width: lọc width bé hơn
     * + {Int} filter.height: lọc height bé hơn  
     * + {Boolean} filter.has_children
     * + {Char} filter.rating 
     * @param {Array} postArray
     * @return {Array}
     */
    filterPost : function (postArray, filter) {

        let result = postArray.map(post => {

            /* filter by tag */
            if (filter.tags !== [] && filter.tags !== undefined) {

                for (let i=0; i<filter.tags.length; ++i) {
                    if (post.tags.split(" ").includes(filter.tags[i])) 
                        return;
                }       
            }

            /* filter by score */
            if (filter.score !== undefined && filter.score > post.score) return;

            /* filter by filesize */
            if (filter.fileSize !== undefined && filter.fileSize < post.file_size) return;

            /* filter by width */
            if (filter.width !== undefined && filter.width > post.width) return;

            /* filter by height */
            if (filter.height !== undefined && filter.height > post.height) return;

            /* filter by children */
            if (filter.hasChildren !== undefined && filter.hasChildren !== post.has_children) return;

            /* filter by rating */
            if (filter.rating !== undefined && filter.rating !== post.rating) return;

            return post
        })

        /* loại bỏ các phần tử undefined */
        result = result.filter((el) => el != null);
        //console.log(result)
        return result
    },

    /**
     * @param {Array} post
     * @return {Array} imageUrl 
     */
    getImageUrlFromPostObj : function (post) {
        return post.map((e) => e.file_url)
    }

}