module.exports = ({ github, context, core }) => {
  console.log(`github: ${JSON.stringify(github, null, 4)}`);
  console.log(`context: ${JSON.stringify(github, null, 4)}`);
  console.log(`context: ${JSON.stringify(core, null, 4)}`);
};
