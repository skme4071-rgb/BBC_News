


import { body, validationResult as expressValidationResult } from "express-validator";

export function registerValidator() {
  return [
    body("firstName")
      .trim()
      .notEmpty()
      .withMessage("First name is required"),

    body("lastName")
      .trim()
      .notEmpty()
      .withMessage("Last name is required"),

    body("email")
      .isEmail()
      .withMessage("Invalid email")
      .normalizeEmail(),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),

    body("agree")
      .isBoolean()
      .custom(v => v === true)
      .withMessage(
        "You must agree to the Terms of Service and Privacy Policy"
      ),
  ];
}

export function loginValidator() {
  return [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ];
}

// ✅ renamed middleware
export function validate(req, res, next) {
  const errors = expressValidationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return res.status(422).json({
    success: false,
    errors: errors.mapped(),
  });
}
