import { FC, useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"
import { useAppointments } from "./useAppointments"

interface AppointmentFormProps {
    closeModal: () => void
}

export const AppointmentForm: FC<AppointmentFormProps> = ({ closeModal }) => {
    const [customerName, setCustomerName] = useState('')
    const [appointmentTime, setAppointmentTime] = useState('')
    const {
        setSelectSalon,
        createAppointment,
        setSelectedServiceName,
        salons, services, selectedSalonId, selectedServiceName
    } = useAppointments()

    const shouldDisableButton = !customerName || !selectedSalonId || !selectedServiceName || !appointmentTime

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await createAppointment(customerName, appointmentTime)
        closeModal()
    }

    if (salons.length === 0) {
        return <Alert variant='danger'>At least one salon is required to create an appointment</Alert>
    }

    const isSalonWithoutServices = selectedSalonId > 0 && services.length === 0

    return (
        <Form className="text-dark" onSubmit={onSubmitForm}>
            <Form.Group className="mb-3">
                <Form.Label>Customer name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Salon</Form.Label>
                <Form.Select onChange={e => setSelectSalon(Number(e.target.value))} >
                    <option value={0}>Select a saloon to continue</option>
                    {salons.map(({ id, name }) => (
                        <option key={`${id}${name}`} value={id}>{name}</option>
                    ))}
                </Form.Select>
                {isSalonWithoutServices && (
                    <Form.Label className="my-2 w-100">
                        <Alert variant='warning' >Ops! This saloon does not have a registered service</Alert>
                    </Form.Label>
                )}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Service</Form.Label>
                <Form.Select onChange={e => setSelectedServiceName(e.target.value)}>
                    <option value={''}>Select a service to continue</option>
                    {services.map(({ id, name }) => (
                        <option key={`${id}${name}`} value={name}>{name}</option>
                    ))}
                </Form.Select>

            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Enter Name"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)} />
            </Form.Group>

            <div className="d-flex justify-content-center">
                <Button disabled={shouldDisableButton} type="submit">Save</Button>
            </div>
        </Form>
    )
}