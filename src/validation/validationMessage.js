export const emailMessageFunction = () => {
  const object = {
    "string.email": `Please provide valid email address.`,
    "string.empty": `Email address field should not be empty`,
    "string.base": `Email should be a type of string`,
    "any.required": `Email is a required field`,
  };
  return object;
};

export const passwordMessageFunction = (value) => {
  const object = {
    "string.base": `${value} should be a type of string`,
    "string.empty": `${value} field should not be empty`,
    "string.max": `${value} must be at 8 to 16 characters`,
    "string.min": `${value} must be at 8 to 16 characters`,
    "string.pattern.base": `Please provide valid ${value}`,
    "any.required": `${value} is a required field`,
  };
  return object;
};

export const stringMessageFunction = (value) => {
  const object = {
    "string.pattern.base": `Please provide valid ${value}`,
    "string.base": `${value} should be a type of string`,
    "string.empty": `${value}  field should not be empty`,
    "string.min": `${value} should have a minimum length of {#limit}`,
    "string.max": `${value} should have a maximum length of {#limit}`,
    "string.length": `${value} should be the length of 10 digits`,
    "any.required": `${value} is a required field`,
  };
  return object;
};

export const numberMessageFunction = (value) => {
  const object = {
    "number.base": `${value} should be a type of number`,
    "any.required": `${value} is a required field`,
    "number.min": `${value} number should be 10 digit.`,
    "number.max": `${value} number should be 10 digit`,
  };
  return object;
};



