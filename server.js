module.exports = (req, res, next) => {
  if (req.headers['x-api-key'] === 'thisisapikey') {
    if (req.method === 'POST') {
      req.body = req.body || {};
      req.body.createdAt = new Date();
    }
    next();
  } else {
    res.sendStatus(401);
  }
};
