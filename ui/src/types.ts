export interface Salon {
    id: number;
    name: string;
    location: string;
}

export interface SalonsData {
    salons: Salon[];
}

export interface Service {
    id: number
    name: string
    price: string
}

export interface Appointment {
    id: number
    customerName: string
    appointmentTime: string
    salon: Salon
    service: Service
}

export interface AppointmentData {
    appointments: Appointment[]
}

export interface ServiceBySalonData {
    servicesBySalonId: Service[]
}

export interface ServiceBySalonVars {
    salonId: number
}