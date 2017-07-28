module.exports = {
	server: {
    host: '127.0.0.1',
    port: process.env.PORT || 8888
  },
  mongo: {
  	host: '127.0.0.1',
    port: 27017,
    db: 'AntiDrugAbuse',
    username: 'jl',
    password: '123456',
    url : 'mongodb://<user>:<password>@<url>'
  }
};
