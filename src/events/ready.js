const colors = require('colors')

module.exports = {
  name: 'ready',
  once: true,
  async execute() {
    console.log(colors.green('Bot ready to keep it rolling!'))
  },
}
