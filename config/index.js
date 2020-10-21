// import config from './config.json'

export default {
    // will be used to connect to mongoDB (mlab) via mongoose
    getDbConnectionString: function() {
        return `mongodb://testuser:testuser1@ds255768.mlab.com:55768/nodetodo`
    }
}