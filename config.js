module.exports = {
    name: process.env.APP_NAME || 'app1',
    version: process.env.APP_VERSION || '1.0.0.',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    base_url: process.env.BASE_URL || 'http://localhost:3000',
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/api',
    },
};
