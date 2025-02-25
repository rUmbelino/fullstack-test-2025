export interface CreateAppointmentParams {
    salonId: number
    customerName: string
    serviceName: string
    appointmentTime: string
}

export interface FetchSalonParams {
    salonId: number
}
