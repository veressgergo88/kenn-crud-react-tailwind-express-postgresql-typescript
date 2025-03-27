import { Client } from "../assets/types";

const Tablelist = () => {
  
    const clients: Client[] = [
        {name: "John Doe", email: "John.Doe@gmail.com" , job: "Developer", rate:"100", isactive: true},
        {name: "John1 Doe", email: "John1.Doe@gmail.com" , job: "Developer1", rate:"101", isactive: true},
        {name: "John2 Doe", email: "John2.Doe@gmail.com" , job: "Developer2", rate:"102", isactive: false}
    ]

    return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody className="hover">
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tablelist;
