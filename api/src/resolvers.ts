import repository from './repository';
import { CreateAppointmentParams, FetchSalonParams } from './utils';

export default {
  Query: {
    salons: async () => {
      return await repository.listSalons();
    },
    appointments: async () => {
      return await repository.fetchAppointments();
    },
    servicesBySalonId: async (_: any, params: FetchSalonParams) => {
      return await repository.fetchServiceById(params.salonId);
    },
  },
  Mutation: {
    createAppointment: async (_: any, params: CreateAppointmentParams) => {
      return await repository.createAppointment(params)
    }
  }

};


