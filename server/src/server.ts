import { app } from './api/app'
import { config } from './config/config'
import { dbConnect } from './config/db'

const PORT = config.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
  dbConnect()
})