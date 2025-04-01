import { useEffect, useState } from "react";
import { Client } from "../assets/types";
import axios from 'axios'

type TableListProps = {
  onOpen: (mode:string) => void
  searchTerm: string | number
}

const TableList = ({onOpen, searchTerm}: TableListProps) => {
    const [tableData, setTableData] = useState<Client[]>([])
    const [error, setError] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/clients')
          setTableData(response.data)
        } catch (err) {
          setError(err.message)
        }
      }

      fetchData()
    }, [])

    const filterData = tableData.filter(client => 
      client.name.toLowerCase().includes(searchTerm.toString().toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toString().toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toString().toLowerCase())
    )

    return (
      <>
      {error && <div className="alert alert-error">{error}</div>}  

      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover">
            {/* row 1 */}
            {filterData.map((client) => (
              <tr>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button className={`btn rounded-full w-20 ${client.isactive ? `btn-primary` : `btn-outline btn-primary`}`}>
                    {client.isactive ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td>
                  <button className="btn btn-secondary" onClick={() => onOpen('edit')}>Update</button>
                </td>
                <td>
                  <button className="btn btn-accent">Delete</button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
      </>
  );
};

export default TableList;
