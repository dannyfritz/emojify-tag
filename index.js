const emojione = require("emojione")

function emojify (strings, ...interpolates) {
  let i = 0
  const output = []
  for (; i<interpolates.length; i++) {
    output.push(strings[i])
    output.push(interpolates[i])
  }
  output.push(strings[i])
  return emojione.shortnameToUnicode(output.join(""))
}

module.exports = emojify
