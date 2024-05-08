import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getPatrons } from "../../data/patronsData";
import { Link } from "react-router-dom";


export default function Patrons() {
    const [patrons, setPatrons] = useState([]);

    useEffect(() => {
        getPatrons().then(setPatrons);
    })

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Patrons</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>IsActive</th>
                    </tr>
                </thead>
                <tbody>
                    {patrons.map((p) => (
                        <tr key={`patrons-${p.id}`}>
                            <th scope="row">{p.id}</th>
                            <td>{p.firstName + " " + p.lastName}</td>
                            <td>{p.email}</td>
                            <td>{p.address}</td>
                            <td>{p.isActive ? "True" : "False"}</td>
                            <td>
                                <Link to={`${p.id}`}>Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}