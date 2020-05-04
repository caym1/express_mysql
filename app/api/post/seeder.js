const random = require ("lodash.random");
const db = require( "../../../models");
const times = require( "lodash.times");
const faker =  require("faker");

function seed (qty, qtyAuthors) {
    return new Promise((resolve, reject) => {
        try{
            const rows = times(qty, () => ({
                title: faker.lorem.sentence(),
                content: faker.lorem.paragraph(),
                authorId: random(1, qtyAuthors)
            }))
            db.post.bulkCreate(rows);
            resolve('Post creados')
        }catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    seed
}
