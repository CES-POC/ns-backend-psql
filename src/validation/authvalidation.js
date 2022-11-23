import Joi from "joi"
import {
  emailMessageFunction,
  stringMessageFunction,
  numberMessageFunction
} from "./validationMessage.js"

export const signupValidation = Joi.object().keys({
  fullname: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z ]+$/))
    .required()
    .max(16)
    .messages(stringMessageFunction("fullname")),
  username: Joi.string()
    .required()
    .min(3)
    .pattern(/^[a-zA-Z ]+$/)
    .messages(stringMessageFunction("username")),
  email: Joi.string()
    .required()
    .email()
    .regex(/@neosilica.com\s*$/)
    .messages(emailMessageFunction()),
  empid: Joi.string().required().messages(stringMessageFunction("empid")),
  phone: Joi.number()
    .integer()
    .min(10 ** 9)
    .max(10 ** 10 - 1)
    .required()
    .messages(numberMessageFunction("phone")),
  password: Joi.string()
    .required()
    .pattern(
      new RegExp(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!#.])[A-Za-zd$@$!%*?&.]{8,20}/
      )
    )
    .min(8)
    .messages(stringMessageFunction("password")),
});

export const loginValidation = Joi.object().keys({
  email: Joi.string().required().email().messages(emailMessageFunction()),
  password: Joi.string()
    .required()
    .pattern(
      new RegExp(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!#.])[A-Za-zd$@$!%*?&.]{8,20}/
      )
    )
    .min(8)
    .messages(stringMessageFunction("password")),
});


