const expressLoader = require('./express')
module.exports = async (app) => {
    const {expressApp} = app
    await expressLoader(expressApp)
}