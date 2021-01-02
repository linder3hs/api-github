exports.response = (res, error = false, body = "", status = 200) => {
  res.status(status).json({
    error,
    status,
    body,
  });
};
