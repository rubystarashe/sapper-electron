import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV, ELECTRON } = process.env
const dev = NODE_ENV === 'development'
const electron = ELECTRON
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err)
		if (dev && electron) {
			var exec = require('child_process').exec
			exec(`cross-env NODE_ENV=DEV PORT=${PORT} electron .`)
		}
	})
