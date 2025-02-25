import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { Accordion } from "react-bootstrap";
import { APPOINTMENTS_QUERY } from '../../queries';
import { Loading } from "../Loading";
import { AppointmentDetails } from "../ListAppointments/AppointmentDetails";
import { AppointmentData } from "../../types";
import { AddAppointmentButton } from "../CreateAppointment/AddAppointment";

export const AppointmentsList = () => {
    const { loading, data } = useQuery<AppointmentData>(APPOINTMENTS_QUERY, { onError: e => toast.error(e.message) });

    if (loading) {
        return <Loading />
    }

    return (
        <div className="position-absolute p-5 w-100" style={{ left: 0, top: 0 }}>
            <header className="d-flex justify-content-between py-3">
                <h1>Appointments:</h1>
                <AddAppointmentButton />
            </header>
            <div>
                {data?.appointments.map((appointment, index) => {
                    const { customerName, service } = appointment
                    return (
                        <Accordion key={`${index}${customerName}`} defaultActiveKey="0">
                            <Accordion.Item className="rounded-0" eventKey={index.toString()}>
                                <Accordion.Header>{customerName} - {service.name} </Accordion.Header>
                                <Accordion.Body>
                                    <AppointmentDetails {...appointment} />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })}
            </div>
        </div>
    )
}