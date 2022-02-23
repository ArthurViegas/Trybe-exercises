const BAD_REQ_STATUS = 400;

const nameValidation = (req, res, next) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) return res.status(BAD_REQ_STATUS).json({
    "error": true,
    "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  });

  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(BAD_REQ_STATUS).json({ 
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
     });
  }

  if (!email.includes('@') || !email.includes('.com')) {
    return res.status(BAD_REQ_STATUS).json({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }

  next();
};

const passValidation = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(BAD_REQ_STATUS).json({
    "error": true,
    "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  });

  next();
};

module.exports = {
  nameValidation,
  emailValidation,
  passValidation
}