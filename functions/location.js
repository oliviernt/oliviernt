exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 302,
    headers: {
      location: 'https://osm.org/go/0DKQmjg--'
    },
    body: 'Redirecting...'
  });
};
