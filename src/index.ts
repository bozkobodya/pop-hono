import { Hono } from 'hono';

const app = new Hono()

app.get('/', (c) => {
  return c.html('<h1>Welcome to Hono!</h1>')
})

app.get('/api/data', (c) => {
  return c.json({ message: 'This is a JSON response' })
})

app.get('/image', async (c) => {
  const imageResponse = await fetch('https://bun.sh/logo_avatar.svg')
  const imageArrayBuffer = await imageResponse.arrayBuffer()

  return new Response(imageArrayBuffer, {
    headers: { 'Content-Type': 'image/svg+xml' }
  })
})



export default app