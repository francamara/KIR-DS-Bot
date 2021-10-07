const colors = require('colors')

module.exports = {
  name: 'ready',
  once: true,
  async execute() {
    console.log(colors.blue('Bot ready to keep it rolling!'))
  },
}
