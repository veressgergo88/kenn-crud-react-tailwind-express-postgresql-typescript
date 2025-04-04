import { useEffect, useState } from "react";
import { Client } from "../assets/types";
import axios from 'axios'

type TableListProps = {
  onOpen: (mode:string) => void
  filter: string
}

const TableList = ({onOpen, filter}: TableListProps) => {
    const [tableData, setTableData] = useState<Client[]>([])
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/clients')
          setTableData(response.data)
        } catch (err) {
          console.error('The list cannot be displayed', err)
        }
      }

      fetchData()
    }, [])

    const filterData = tableData.filter(client => 
      client.name.toLowerCase().includes(filter.toLowerCase()) ||
      client.email.toLowerCase().includes(filter.toLowerCase()) ||
      client.job.toLowerCase().includes(filter.toLowerCase()) ||
      client.rate.toString().toLowerCase().includes(filter.toLowerCase())
    )

    return (
      <>
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
