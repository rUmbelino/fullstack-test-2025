import { gql } from "@apollo/client"

export const APPOINTMENTS_QUERY = gql`
    query ExampleQuery {
        appointments {
            id
            customerName
            appointmentTime
            salon {
                id
                location
                name
            }
            service {
                id
                name
                price
            }
        }
    }
`

export const SALONS_QUERY = gql`
  query {
    salons {
      id
      name
      location
    }
  }
`;

export const SERVICES_BY_SALON_ID_QUERY = gql`
  query ServicesBySalonId($salonId: Int!) {
    servicesBySalonId(salonId: $salonId) {
      id
      name
      price
    }
  }
`

export const APPOINTMENT_MUTATION = gql`
  mutation CreateAppointment($customerName: String!, $serviceName: String!, $appointmentTime: Date!, $salonId: Int!) {
  createAppointment(customerName: $customerName, serviceName: $serviceName, appointmentTime: $appointmentTime, salonId: $salonId) {
    id
  }
}
`
