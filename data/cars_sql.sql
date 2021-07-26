CREATE TABLE cars_db (
index_col INT PRIMARY KEY,
make TEXT,
model TEXT,
year FLOAT,
engine_fuel_type TEXT,
engine_hp FLOAT,
engine_cylinders FLOAT,
transmission_type TEXT,
driven_wheels TEXT,
number_of_doors FLOAT,
market_category TEXT,
vehicle_size TEXT,
vehicle_style TEXT,
highway_mpg FLOAT,
city_mpg FLOAT,
popularity FLOAT,
msrp FLOAT
);
Select * from cars_db


CREATE TABLE used_cars_db (
	index INT Primary Key,
	current_price FLOAT, 
	make TEXT,
	model TEXT,
	year FLOAT,
	title_status TEXT,
	mileage FLOAT
	);

Select * from used_cars_db