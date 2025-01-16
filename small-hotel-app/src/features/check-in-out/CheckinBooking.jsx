import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Row from '../../ui/Row'
import Heading from '../../ui/Heading'
import ButtonGroup from '../../ui/ButtonGroup'
import Button from '../../ui/Button'
import ButtonText from '../../ui/ButtonText'
import Spinner from '../../ui/Spinner'
import Checkbox from '../../ui/Checkbox'
import { formatCurrency } from '../../utils/helpers'
import BookingDataBox from '../../features/bookings/BookingDataBox'

import { useMoveBack } from '../../hooks/useMoveBack'
import { useBooking } from '../bookings/useBooking'
import { useCheckin } from './useCheckin'

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false)

  const { booking, isLoading } = useBooking()

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking])

  const moveBack = useMoveBack()
  const { checkin, isCheckingIn } = useCheckin()

  if (isLoading) return <Spinner />

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking

  function handleCheckin() {
    if (!confirmPaid) return

    checkin(bookingId)
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Box>
        <Checkbox
          id="confirm"
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
        >
          I confirm that {guests.fullname} has paid the total amount of{' '}
          {formatCurrency(totalPrice)}
        </Checkbox>

        <ButtonGroup>
          <Button
            onClick={handleCheckin}
            disabled={!confirmPaid || isCheckingIn}
          >
            Check in booking #{bookingId}
          </Button>
          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>
        </ButtonGroup>
      </Box>
    </>
  )
}

export default CheckinBooking
