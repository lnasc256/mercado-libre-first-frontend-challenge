import express from 'express'

export type Middleware = ((router: express.Router) => void)

export type Controller = (req: express.Request, res: express.Response) => Promise<void> | void

export type Route = {
  path: string
  method?: 'get' | 'post' | 'put' | 'patch' | 'delete',
  controller: Controller
}

export type Routes = Array<Route>
