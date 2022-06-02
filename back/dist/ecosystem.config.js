module.exports = {
    apps: [
        {
            name: 'Gaeki-sequelize-pm2',
            script: './server.js',
            watch: false,
            autorestart: true,
        }
    ]
}