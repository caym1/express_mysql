const db = require( "../../../models");
const times = require( "lodash.times");
const faker =  require("faker");



function seed (qty) {
    return new Promise((resolve, reject) => {
        try {
            db.author.bulkCreate(
                times(qty, () => ({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName()
                }))
            );
            resolve('Autores cargados')
        }catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    seed
}
