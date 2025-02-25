import { FC, ReactNode } from "react"
import { Modal } from "react-bootstrap"

interface AppointmentModalProps {
    isOpen: boolean
    handleClose: () => void
    children: ReactNode
}

export const AppointmentModal: FC<AppointmentModalProps> = ({ isOpen, handleClose, children }) => (
    <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title className="text-dark">Create Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>

    </Modal>
)
