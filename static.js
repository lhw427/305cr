'use strict';

//loads mimetype files
exports.public = {
  handler: {
    directory: {
        path: './public',
        listing: false,
        index: false
    }
}
};

exports.main = {
          handler: function (request, reply) {
          return reply.view('main');
          }
        };

exports.tab1 = {
                  handler: function (request, reply) {
                  return reply.view('tab1');
                  }
                };

exports.tab2 = {
                handler: function (request, reply) {
                return reply.view('tab2');
                }
                                };

exports.tab3 = {
                handler: function (request, reply) {
                return reply.view('tab3');
                  }
                                                };
exports.tab4 = {
                handler: function (request, reply) {
                return reply.view('tab4');
                }
              };
exports.video = {
                  handler: function (request, reply) {
                  return reply.view('video');
                  }
              };
exports.contact = {
                    handler: function (request, reply) {
                  return reply.view('contact');
                                }
                            };

//the following handles routing to static pages
exports.home = {
      handler: function (request, reply) {
      return reply.view('home');
      }
    };

exports.member = {
              handler: function (request, reply) {
              return reply.view('memberzone');
              }
            };

exports.contact = {
                  handler: function (request, reply) {
                  return reply.view('contact');
                  }
                };

exports.doc = {
                  handler: function (request, reply) {
                  return reply.view('documentation');
                  }
              };

exports.apiendpoints = {
                  handler: function (request, reply) {
                  return reply.view('apiendpoints');
                  }
              };

exports.map = {
                                handler:  (request, reply) => {
                                                  return reply.view('map');
                                                  }
                                                };
exports.map1 = {
                                handler:  (request, reply) => {
                                                  return reply.view('map1');
                                                }
                                                };
exports.map2 = {
                                handler:  (request, reply) => {
                                                  return reply.view('map2');
                                }
                  };
exports.map3 = {
                              handler:  (request, reply) => {
                                                  return reply.view('map3');
                  }
                  };
exports.map4 = {
                            handler:  (request, reply) => {
                                                  return reply.view('map4');
                  }
                  };
exports.map5 = {
                            handler:  (request, reply) => {
                                                  return reply.view('map5');
                  }
                  };
exports.map6 = {
                            handler:  (request, reply) => {
                                                  return reply.view('map6');
                  }
                  };
