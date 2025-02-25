import db from './db';
import { CreateAppointmentParams } from './utils';

export default {

  createSalon: async (name: string, location: string) => {
    try {
      const query = `
        INSERT INTO salons (name, location) 
        VALUES ($1, $2) RETURNING *;
      `;
      const values = [name, location];

      const result = await db.query(query, values);
      return result.rows[0];

    } catch (error) {
      console.error('Error creating salon:', error);
      throw new Error('Failed to create salon');
    }
  },

  listSalons: async () => {
    try {
      const query = 'SELECT * FROM salons ORDER BY id ASC;';
      const result = await db.query(query);
      return result.rows;

    } catch (error) {
      console.error('Error retrieving salons:', error);
      throw new Error('Failed to retrieve salons');
    }
  },

  createAppointment: async ({ salonId, customerName, serviceName, appointmentTime }: CreateAppointmentParams) => {
    try {
      console.log({ salonId, customerName, serviceName, appointmentTime })
      const query = `
        INSERT INTO appointments (salon_id, customername, servicename, appointmenttime) 
        VALUES ($1, $2, $3, $4) RETURNING *;
      `;
      const values = [salonId, customerName, serviceName, appointmentTime];

      const result = await db.query(query, values);
      return result.rows[0];

    } catch (error) {
      console.error('Error creating appointment:', error);
      throw new Error('Failed to create appointment');
    }
  },

  fetchAppointments: async () => {
    try {
      const query = `
        SELECT DISTINCT
          a.id AS id, 
          a.customername as customer_name,
          a.salon_id AS appointment_salon_id, 
          a.appointmenttime as appointment_time, 
          s.id as salon_id,
          s.name AS salon_name, 
          s.location AS salon_location, 
          sc.id AS service_id, 
          sc.name AS service_name, 
          sc.price AS service_price
        FROM appointments a 
        JOIN salons s ON a.salon_id = s.id
        JOIN services sc ON a.servicename = sc.name
        ORDER BY a.id
      `;

      const result = await db.query(query);
      const ids = new Set();
      const uniqueAppointmentsList = result.rows.filter(({ id }) => !ids.has(id) && ids.add(id));

      return uniqueAppointmentsList.map(row => ({
        id: row.id,
        customerName: row.customer_name,
        serviceName: row.service_name,
        appointmentTime: row.appointment_time,
        salon: {
          id: row.salon_id,
          name: row.salon_name,
          location: row.salon_location,
        },
        service: {
          id: row.service_id,
          name: row.service_name,
          price: row.service_price
        }
      }));
    } catch (error) {
      console.error('Error retrieving appointments:', error);
      throw new Error('Failed to retrieve appointments');
    }
  },

  async fetchServiceById(salonId: number) {
    try {
      const query = `
        SELECT se.* FROM services se
        JOIN salons sa ON se.salon_id = sa.id
        WHERE sa.id = $1
      `;

      const result = await db.query(query, [salonId]);
      return result.rows;

    } catch (error) {
      console.error('Error retrieving service:', error);
      throw new Error('Failed to service');
    }
  }

};

