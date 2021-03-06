import Router from "koa-router"
import config from '../config'
import sha1 from "sha1"

export const router = app => {
	const router = new Router()

	router.get('/wechat-hear', (ctx, next) => {
		console.log('ctx.query:')
		console.log(ctx.query)
		const token = config.wechat.token
		const {
			signature,
			nonce,
			timestamp,
			echostr
		} = ctx.query


		const str = [token, timestamp, nonce].sort().join('');
		const sha = sha1(str)

		if(sha == signature){
			ctx.body == echostr
		}else{
			ctx.body = "Failed"
			
		}

	})
	// router.post('/wechat-hear', (ctx, next) => {
		
	// })

	app.use(router.routes())
	app.use(router.allowedMethods())
}