module.exports = ({ github, context, core }) => {
  console.log(`context: ${JSON.stringify(context, null, 4)}`);
  console.log(`core: ${JSON.stringify(core, null, 4)}`);
};
