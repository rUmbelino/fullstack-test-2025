import { useState } from "react"
import { Button } from "react-bootstrap"
import { AppointmentForm } from "./AppointmentForm"
import { AppointmentModal } from "./AppointmentModal"
import { useAppointments } from "./useAppointments"
import { Loading } from "../Loading"

export const AddAppointmentButton = () => {
    const { loading } = useAppointments()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onOpenModal = () => setIsModalOpen(true)
    const onCloseModal = () => setIsModalOpen(false)

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Button variant="primary" onClick={onOpenModal}>Add appointment</Button>
            <AppointmentModal isOpen={isModalOpen} handleClose={onCloseModal}>
                <AppointmentForm closeModal={onCloseModal} />
            </AppointmentModal>
        </>
    )
}