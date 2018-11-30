const sh = require('shelljs')
const fs = require('fs')

sh.rm('-rf', 'docs/*')
sh.cp('-rf', 'README.md', 'docs/README.md')
const files = fs.readdirSync('lib')
files.map(name =>
  sh.exec(`jsdoc2md lib/${name} > docs/${name.replace('.js', '.md')}`)
)
