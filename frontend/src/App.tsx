import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/NavBar'
import TableList from './components/TableList'
import { Client } from './assets/types'
import axios from 'axios'

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modalMode, setModalMode] = useState<string>('add')
  const [filter, setFilter] = useState<string>("")
  const [clientData, setClientData] = useState<Client>({
    id: 0,
    name: "",
    email: "",
    job: "",
    rate: 0,
    isactive: false
  })

  const handleOpen = (mode:string, client: Client) => {
    setClientData(client)
    setModalMode(mode)
    setIsOpen(true)
  }

  const handleSubmit = async (newClientData: Client) => {
    if (modalMode === 'add') {
      try {
        const response = await axios.post('http://localhost:3000/api/clients', newClientData)
        console.log('Client added', response.data)
      } catch (err) {
        console.error('Error adding client', err)
      }
      console.log('modal mode Add')
    } else {
      try {
        const response = await axios.put(`http://localhost:3000/api/clients/${clientData.id}`, newClientData)
        console.log('Client updated', response.data)
      } catch (err) {
        console.error('Error updating client', err)
      }
      console.log('modal mode Edit')
    }
  }

  return (
    <>
      <NavBar onOpen={() => handleOpen('add')} onFilterChange={setFilter}/>
      <TableList onOpen={handleOpen} filter={filter}/>
      <ModalForm 
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      OnSubmit={handleSubmit}
      mode={modalMode}
      clientData={clientData}  
      />
    </>
  )
}

export default App
