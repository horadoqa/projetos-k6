const { createReadStream, createWriteStream } = require('fs')
const { pipeline } = require('stream/promises')
const { parse } = require('csv-parse')
const { Transform } = require('stream')

const toJsonStream = new Transform({
  objectMode: true,
  transform({ globoid, glbid }, _encoding, callback) {
    if (!this.count) this.push('[')

    const jsonElement = JSON.stringify({ userId: globoid, authorization: glbid }, null, 2)

    this.count += 1

    callback(null, this.count === 1 ? jsonElement : `,${jsonElement}`)
  },
  final(callback) {
    if (this.count) {
      this.push(']')
    }
    callback()
  }
})

toJsonStream.count = 0

const run = async (file) => {

  await pipeline(
    createReadStream(file),
    parse({ delimiter: ';', columns: true }),
    toJsonStream,
    createWriteStream('users.json')
  )
}

run(process.argv[2] || 'glbids_tmp.csv')