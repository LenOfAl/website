from flask import Blueprint, render_template

bp = Blueprint("web", "web", url_prefix="/")


@bp.route("/")
def index():
    return render_template("website.html")
