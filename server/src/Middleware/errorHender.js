import createError from "http-errors";

// 404 Not Found middleware
const notFound = (req, res, next) => {
  next(createError(404, `${req.url} Route Not Found`));
};

// Common Error Handler middleware
const common = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({
    success: false,
    status,
    message,
  });
};


export default { notFound, common };
