INSERT INTO salons (name, location) VALUES 
('Luxury Cuts', 'New York, NY'),
('Elite Beauty Salon', 'Los Angeles, CA'),
('Glow Up Hair Studio', 'Chicago, IL'),
('Style & Grace Spa', 'Miami, FL'),
('The Hair Loft', 'San Francisco, CA'),
('Urban Chic Salon', 'Seattle, WA'),
('Pure Elegance Spa', 'Boston, MA'),
('Glamour Hub', 'Houston, TX');

INSERT INTO services (salon_id, name, price) VALUES
(1, 'Haircut', '25.00'),
(1, 'Hair Coloring', '60.00'),
(1, 'Manicure', '20.00'),
(2, 'Haircut', '30.00'),
(2, 'Perm', '70.00'),
(2, 'Facial', '50.00'),
(3, 'Haircut', '28.00'),
(3, 'Hair Treatment', '45.00'),
(3, 'Pedicure', '25.00');
 
INSERT INTO appointments (salon_id, customerName, serviceName, appointmentTime) VALUES
(1, 'John Doe', 'Haircut', '2025-03-01'),
(1, 'Jane Smith', 'Hair Coloring', '2025-03-02'),
(1, 'Alice Johnson', 'Manicure', '2025-03-03'),
(2, 'Bob Brown', 'Haircut', '2025-03-04'),
(2, 'Charlie Davis', 'Perm', '2025-03-05'),
(2, 'Diana Evans', 'Facial', '2025-03-06'),
(3, 'Eve Foster', 'Haircut', '2025-03-07'),
(3, 'Frank Green', 'Hair Treatment', '2025-03-08'),
(3, 'Grace Hall', 'Pedicure', '2025-03-09');