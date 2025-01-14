import styled from 'styled-components'
import { HiSquare2Stack, HiPencil, HiTrash } from 'react-icons/hi2'

import CreateCabinForm from './CreateCabinForm'
import { useDeleteCabin } from './useDeleteCabin'
import { useCreateCabin } from './useCreateCabin'
import { formatCurrency } from '../../utils/helpers'
import Modal from '../../ui/Modal'
import Table from '../../ui/Table'
import ConfirmDelete from '../../ui/ConfirmDelete'
import Menus from '../../ui/Menus'

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin()
  const { isCreating, createCabin } = useCreateCabin()

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    })
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div> Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <button onClick={handleDuplicate} disabled={isCreating}>
          <HiSquare2Stack />
        </button>

        <Modal>
          <Modal.Open opens="editCabin">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name="editCabin">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>
        </Modal>

        <Modal>
          <Modal.Open opens="deleteCabin">
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name="deleteCabin">
            <ConfirmDelete
              resourceName="cabins"
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>

        <Menus.Menu>
          <Menus.Toggle id={cabinId} />
          <Menus.List id={cabinId}>
            <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
              Duplicate
            </Menus.Button>
            <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </div>
    </Table.Row>
  )
}

export default CabinRow
