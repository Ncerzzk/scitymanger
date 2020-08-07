import tornado.ioloop
import tornado.web

import uuid
import os

import base64


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")


if __name__=="__main__":
    app=tornado.web.Application([(r"/",MainHandler)],)
    

    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()