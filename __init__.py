from flask import Flask


def create_app():
    app = Flask("web")
    app.register_blueprint
    from . import web
    app.register_blueprint(web.bp)
    return app
