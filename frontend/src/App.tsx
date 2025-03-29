import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/NavBar'
import TableList from './components/TableList'


function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modalMode, setModalMode] = useState<string>('add')

  const handleOpen = (mode:string) => {
    setModalMode(mode)
    setIsOpen(true)
  }

  const handleSubmit = () => {
    if (modalMode === 'add') {
      console.log('modal mode Add')
    } else {
      console.log('modal mode Edit')
    }
  }

  return (
    <>
      <NavBar onOpen={() => handleOpen('add')}/>
      <TableList onOpen={handleOpen}/>
      <ModalForm 
      isOpen={isOpen}
      mode={modalMode}  
      onSubmit={handleSubmit} 
      onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default App
