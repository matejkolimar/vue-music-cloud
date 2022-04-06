import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("passwords_mismatch", confirmed);

    configure({
      generateMessage: (context) => {
        const messages = {
          require: `The field ${context.field} is required.`,
          min: `The field ${context.field} is too short`,
          max: `The field ${context.field} is too long`,
          alpha_spaces: `The field ${context.field} may only contain alphabecit characters and spaces.`,
          email: `The field ${context.field} must be a valid email.`,
          min_value: `The field ${context.field} is too low`,
          max_value: `The field ${context.field} is too high`,
          passwords_mismatch: "The passwords don't match.",
          tos: "You must accept the Terms of Service.",
        };

        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${context.field} is invalid.`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
