import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'

function HomePage() {
  const [toggleModal, setToggleModal] = useState<boolean>(false)

  return (
    <div>
      <h1>Home Page</h1>

      <Button onClick={() => setToggleModal(true)}>Toggle modal</Button>

      <Modal
        show={toggleModal}
        onClose={() => setToggleModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>

        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy
              laws for its citizens, companies around the world are updating their terms of service
              agreements to comply.
            </p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setToggleModal(false)}>I accept</Button>

          <Button
            color="gray"
            onClick={() => setToggleModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default HomePage
