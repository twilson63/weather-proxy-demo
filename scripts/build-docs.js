const sh = require('shelljs')
const fs = require('fs')

// clean directory
sh.rm('-rf', 'docs/*')

const files = fs.readdirSync('lib')

files.map(name =>
  sh.exec(`jsdoc2md lib/${name} > docs/${name.replace('.js', '.md')}`)
)

// generate doc for readme
sh.cp('README.md', 'docs/README.md')

// generate swagger document
sh.exec('swagger-jsdoc -d swaggerDef.js')
// generate markdown from swagger
sh.exec('swagger-markdown -i swagger.json -o docs/api.md')
