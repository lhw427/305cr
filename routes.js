var Pages = require('./pages');
var Static = require('./static');
var Authentication = require('./authentication');

/**
 * Contains the list of all routes, i.e. methods, paths and the config functions
 * that take care of the actions
 */
exports.endpoints = [

//routes to dynamic pages
	//loads different search pages for visitors and members respectively
	{ method: 'GET',  path: '/videosearch', 	 config: Pages.videosearch	},

	//for members login
	{ method: 'GET',   path: '/login',          							config: Pages.login},
	{ method: 'POST',   path: '/login',          config: Authentication.login },

	//for members registration
	{ method: 'GET',   path: '/register',      							  config: Pages.register 	},
	{ method: 'POST',   path: '/register',       config: Authentication.register },

	//for email verfication
	{ method: 'GET',   path: '/verify/{vericode*}',        config: Pages.verify 		},
	{ method: 'POST',   path: '/verify/verify',   config: Authentication.Verification },

	//loads when user logged in successfully
	{ method: 'GET',   path: '/success', 											config: Pages.secret   	},

//retrieve items from fav list
	{ method: 'GET',  path: '/editfavlist/', 					 config: Authentication.editfavlist 	},
	//add/remove items in fav list
	{ method: 'PUT',   path: '/removefavlist/{videoId*}',  config: Authentication.removefav },
	{ method: 'PUT',   path: '/addfavlist/{videoId*}',  config: Authentication.addfav },

	{ method: 'GET',    path: '/logout',         							config: Authentication.logout },


	//routes to static pages
	{ method: 'GET',    path: '/',               	 config: Pages.index  	},
	{ method: 'GET',  path: '/public/{param*}',    config: Static.public 	},
	{ method: 'GET',  path: '/member', 						 config: Static.member 	},
	{ method: 'GET',  path: '/doc', 					 		 config: Static.doc },
	{ method: 'GET',  path: '/apiendpoints',			 config: Static.apiendpoints },
	{ method: 'GET',  path: '/main', 					 config: Static.main	},
	{ method: 'GET',  path: '/tab1', 					 config: Static.tab1	},
	{ method: 'GET',  path: '/tab2', 					 config: Static.tab2  },
	{ method: 'GET',  path: '/tab3', 					 config: Static.tab3	},
	{ method: 'GET',  path: '/tab4', 					 config: Static.tab4	},
	{ method: 'GET',  path: '/video', 				 config: Static.video	},
	{ method: 'GET',  path: '/contact', 				 config: Static.contact},

	//loads Google map API
	{ method: 'GET',  path: '/map', 							 config: Static.map 		},
	{ method: 'GET',  path: '/map1', 							 config: Static.map1 		},
	{ method: 'GET',  path: '/map2', 							 config: Static.map2		},
	{ method: 'GET',  path: '/map3', 							 config: Static.map3 		},
	{ method: 'GET',  path: '/map4', 							 config: Static.map4		},
	{ method: 'GET',  path: '/map5', 							 config: Static.map5 		},
	{ method: 'GET',  path: '/map6', 							 config: Static.map6 		},
];
