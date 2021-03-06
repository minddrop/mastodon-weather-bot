import Mastodon from 'megalodon'

const BASE_URL = process.env.BASE_URL
const access_token = process.env.MASTODON_ACCESS_TOKEN

if (!access_token || !BASE_URL) {
  console.log('invalid: environment variables')
}

const client = new Mastodon(access_token, BASE_URL + '/api/v1')

const stream = client.stream('/streaming/public')
stream.on('connect', _ => {
  console.log('connect')
})

stream.on('not-event-stream', mes => {
  console.log('not-event-stream', mes)
})

stream.on('update', status => {
  console.log('update: ', status)
})

stream.on('notification', notification => {
  console.log('notification: ', notification)
})

stream.on('delete', id => {
  console.log(`delete: ${id}`)
})

stream.on('error', err => {
  console.error(err)
})

stream.on('heartbeat', msg => {
  console.log('thump.')
})

stream.on('connection-limit-exceeded', err => {
  console.error(err)
})
