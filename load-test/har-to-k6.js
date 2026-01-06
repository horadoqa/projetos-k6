const fs = require('fs')
const { liHARToK6Script } = require('har-to-k6')

const run = async (filePath) => {
  const harFile = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }))

  const ALLOWED_HEADERS = ['x-tenant-id', 'x-platform-id', 'x-client-version', 'authorization', 'x-user-id', 'x-device-id']

  const filterRequiredHeaders = ({ headers }) => headers.filter(header => ALLOWED_HEADERS.includes(header.name))

  const filteredEntries = harFile.log.entries
    .filter(({ request }) => request.url.includes('graphql') && request.method === 'GET')
    .map((entry) => ({
      ...entry,
      request: {
        ...entry.request,
        headers: filterRequiredHeaders(entry.request),
        url: decodeURIComponent(entry.request.url)
      }
    }))

  const parsedFile = { ...harFile, log: { ...harFile.log, entries: filteredEntries } }

  const { main } = await liHARToK6Script(parsedFile)
  fs.writeFileSync(`${filePath.split('.')[0]}-load-test.js`, main)
}

run(process.argv[2] || './globoplay.har')