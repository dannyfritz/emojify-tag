const test = require("tape")
const emojify = require("./index")

test("emojify-tag", (t) => {
  t.equal(emojify`:smile:`, "😄")
  t.equal(emojify`:smile::poop:`, "😄💩")
  t.equal(emojify`Hello :wave:`, "Hello 👋")
  t.end()
})
