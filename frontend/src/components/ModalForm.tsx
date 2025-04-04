import { useState } from "react";
import { Client } from "../assets/types";

type ModalFormProps = {
    isOpen: boolean,
    mode: string,
    onClose: () => void,
}

const ModalForm = ({isOpen, onClose, mode}: ModalFormProps) => {
  const [rate, setRate] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [job, setJob] = useState<string>('')
  const [status, setStatus] = useState<boolean>(false)
  const [clientData, setClientData] = useState<Client>({
    id: 0,
    name: "",
    email: "",
    job: "",
    rate: "",
    isactive: false
  })
  
  const handleStatusChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value === 'Active')
  }

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    console.log(e)
    onClose()
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>  
          <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}
            <label className="input input-bordered flex items-center gap-2 my-4">
              Name
              <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
              Email
              <input type="text" className="grow" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
              Job
              <input type="text" className="grow" value={job} onChange={(e) => setJob(e.target.value)}/>
            </label>
            <div className="flex mb-4 justify-between gap-4">
              <label className="input input-bordered flex items-center">
                Rate
                <input type="number" className="grow" value={rate} onChange={(e) => setRate(e.target.value)}/>
              </label>
              <select className="select select-bordered" value={status ? 'Active' : 'Inactive'} onChange={handleStatusChange}>
                <option>Inactive</option>
                <option>Active</option>
              </select>
            </div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
            <button className="btn btn-success">{mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
