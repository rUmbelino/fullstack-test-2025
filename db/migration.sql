CREATE TABLE salons (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL
);
 
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  salon_id INT,
  name VARCHAR(255) NOT NULL,
  price VARCHAR(255) NOT NULL,
  CONSTRAINT fk_salon
      FOREIGN KEY(salon_id)
        REFERENCES salons(id)
);
 
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  salon_id INT,
  customerName VARCHAR(255) NOT NULL,
  serviceName VARCHAR(255) NOT NULL,
  appointmentTime DATE NOT NULL,
  CONSTRAINT fk_salon
      FOREIGN KEY(salon_id)
        REFERENCES salons(id)
);