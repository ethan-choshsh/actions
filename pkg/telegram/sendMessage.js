const request = require("request");

require("dotenv").config();

const url = `${process.env.URL}/sendMessage`;

const text = `*bold text*
_italic text_
[inline URL](http://www.example.com/)
[inline mention of a user](tg://user?id=123456789)
\`inline fixed-width code\`
\`\`\`bash
$ echo $(hostname)
\`\`\`
\`\`\`python
pre-formatted fixed-width code block written in the Python programming language
\`\`\``;

const params = {
  chat_id: -722367274,
  parse_mode: `Markdown`,
  text: text,
};

request.get({ uri: url, qs: params }, function (error, response, body) {
  //callback
  console.log(response.statusCode);
});
