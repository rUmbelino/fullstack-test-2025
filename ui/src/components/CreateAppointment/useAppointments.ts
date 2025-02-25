import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { SalonsData, ServiceBySalonData, ServiceBySalonVars } from "../../types";
import { APPOINTMENT_MUTATION, SALONS_QUERY, SERVICES_BY_SALON_ID_QUERY } from "../../queries";

const handleError = (error: Error) => {
    toast.error(error.message);
};

export const useAppointments = () => {
    const [selectedSalonId, setSelectSalon] = useState<number>(0)
    const [selectedServiceName, setSelectedServiceName] = useState<string>('')
    const [createAppointmentQuery] = useMutation(APPOINTMENT_MUTATION, { onError: handleError })

    useEffect(() => {
        setSelectedServiceName('')
    }, [selectedSalonId])

    const { loading, data: salonsQuery } = useQuery<SalonsData>(SALONS_QUERY, { onError: handleError });

    const { data: servicesQuery } = useQuery<ServiceBySalonData, ServiceBySalonVars>(SERVICES_BY_SALON_ID_QUERY, {
        variables: {
            salonId: selectedSalonId
        },
        skip: !selectedSalonId
    });

    const createAppointment = async (customerName: string, appointmentTime: string) => {
        const { data } = await createAppointmentQuery({
            variables: {
                customerName, appointmentTime, salonId: selectedSalonId, serviceName: selectedServiceName
            }
        })
        toast.success(`Appointment #${data.createAppointment.id} created!`)
    }

    return {
        loading,
        setSelectSalon,
        createAppointment,
        setSelectedServiceName,
        selectedSalonId,
        selectedServiceName,
        salons: salonsQuery?.salons || [],
        services: servicesQuery?.servicesBySalonId || []
    }
}

