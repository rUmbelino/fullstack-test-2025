import { FC } from "react"
import { ListGroup } from "react-bootstrap"
import { Appointment } from "../../types"

export const AppointmentDetails: FC<Appointment> = ({ customerName, appointmentTime, salon, service }) => {
    return (
        <ListGroup horizontal className="justify-content-center">
            <ListGroup.Item>
                <p>Customer:</p>
                <p>{customerName}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>Appointment Time:</p>
                <p>{appointmentTime}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>Salon:</p>
                <p>{salon.name}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>Location:</p>
                <p>{salon.location}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>Service:</p>
                <p>{service.name}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>Price:</p>
                <p>{service.price} USD</p>
            </ListGroup.Item>
        </ListGroup>
    )
}