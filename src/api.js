import axios from 'axios'

// you can override this via a .env file
const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:8000'

console.log('▶️ API baseURL:', baseURL)

export default axios.create({ baseURL })
