import app from './src/app'
import config from './src/config'

app.listen(config.PORT, () => console.info('Server on port 4000'))