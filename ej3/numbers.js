const Logger = require("logplease");
const logger = Logger.create("ej3");

const isEven = (number) => {
  if (number % 2 == 0) {
    return logger.info(`The number ${number} is even.`);
  } else {
    return logger.error(`The number ${number} is not even.`);
  }
};

exports.isEven = isEven;
