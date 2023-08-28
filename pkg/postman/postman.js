const postmanToOpenApi = require('postman-to-openapi');

const { POSTMAN_COLLECTION, OUTPUT_FILE } = process.env;

module.exports = () => {
  if (!isValidate()) {
    console.error('Please check your input (OS env)');
    process.exit(1);
  }

  postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    .then((result) => {
      console.error('done');
    })
    .catch((err) => {
      console.error(err);
    });
};

const isValidate = () => {
  if (!POSTMAN_COLLECTION || !OUTPUT_FILE) {
    return false;
  }
  return true;
};
