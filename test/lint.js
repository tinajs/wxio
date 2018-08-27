import test from 'ava'
import { Linter } from 'eslint'
import fs from 'fs-extra'
import path from 'path'
import eslintrc from './helpers/eslintrc.json'

test('cjs file should be verified by linter', async t => {
  let source = await fs.readFileSync(path.resolve(__dirname, '../cjs/wxio.js'), 'utf8')

  let linter = new Linter()

  let messages = linter.verify(source, eslintrc)

  t.deepEqual(messages, [], JSON.stringify(messages, null, 2))

  t.pass()
})
