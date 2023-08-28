const postmanToOpenApi = require('postman-to-openapi');

const { POSTMAN_COLLECTION, OUTPUT_FILE } = process.env;

module.exports = async () => {
  if (!isValidate()) {
    console.error('Please check your input (OS env)');
    process.exit(1);
  }

  try {
    await postmanToOpenApi(POSTMAN_COLLECTION, OUTPUT_FILE, { defaultTag: 'General' });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const isValidate = () => {
  if (!POSTMAN_COLLECTION || !OUTPUT_FILE) {
    return false;
  }
  return true;
};
