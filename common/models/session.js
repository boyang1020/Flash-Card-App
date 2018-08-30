'use strict';

module.exports = function (Session) {
  Session.newDeck = function (id, newDeck) {
    var cards;
    Session.app.models.Card
      .find({ where: { score: 0 }, limit: 8 })
      .then(res => {
        var scoreZero = res;
        Session.app.models.Card
          .find({ where: { score: 1 || 2 }, limit: 2 })
          .then(res => {
            return newDeck(null, cards = scoreZero.concat(res));
          })
      })
  }

  Session.remoteMethod('newDeck',
    {
      http: { path: '/:id/newDeck', verb: 'get' },
      description: 'Returns cards for the new session',
      accepts: [{ arg: 'id', type: 'string' }],
      returns: {
        arg: 'newDeck', type: 'object'
      }
    });
};
