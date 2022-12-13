const validateName = (req, res, next) => {
  const { name } = req.body;
  if(!name || name.length < 4) return res.status(400).json({ "message": "O campo name é obrigatório" });
  next();
};
