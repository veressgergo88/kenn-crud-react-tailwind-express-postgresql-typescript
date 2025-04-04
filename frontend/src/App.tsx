import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/NavBar'
import TableList from './components/TableList'

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modalMode, setModalMode] = useState<string>('add')
  const [filter, setFilter] = useState<string>("")

  const handleOpen = (mode:string) => {
    setModalMode(mode)
    setIsOpen(true)
  }

  return (
    <>
      <NavBar onOpen={() => handleOpen('add')} onFilterChange={setFilter}/>
      <TableList onOpen={handleOpen} filter={filter}/>
      <ModalForm 
      isOpen={isOpen}
      mode={modalMode}  
      onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default App
