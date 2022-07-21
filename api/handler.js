"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Value: ${process.env.arn} and param is ${process.env.param}`,
        input: event,
      },
      null,
      2
    ),
  };
};
