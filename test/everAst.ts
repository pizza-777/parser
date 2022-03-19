import fs from 'fs'
import * as parser from '../src/index'

describe('#parse', function () {
  it('parses test file correctly', function () {
    const content = fs.readFileSync(__dirname + '/ever.sol')
    const ast = parser.parse(content.toString())
    console.log(ast);
  })
})
