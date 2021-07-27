import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
engine = create_engine('postgresql://postgres:postgres@localhost:5432/car_data')

Base = automap_base()
Base.prepare(engine,reflect = True)

new_car = Base.classes.cars_db


#################################################
# Flask Setup
#################################################


app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def data():
    session = Session(engine)
    print(engine.table_names())
    results = session.query(new_car.make,new_car.model,new_car.year,new_car.highway_mpg,new_car.city_mpg,new_car.popularity,new_car.msrp).all()

    session.close()

    all_cars = []
    for make,model,year,highway_mpg,city_mpg,popularity,msrp in results:
        car_dict = {}
        car_dict["make"] = make
        car_dict["model"] = model
        car_dict["year"] = year
        car_dict["highway_mpg"] = highway_mpg
        car_dict["city_mpg"] = city_mpg
        car_dict["popularity"] = popularity
        car_dict["msrp"] = msrp
        all_cars.append(car_dict)

    return jsonify(all_cars)

if __name__ == '__main__':
    app.run(debug=True)
