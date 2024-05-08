import { useEffect, useState } from "react"
import { editPatron, getPatron, updatePatronActiveStatus } from "../../data/patronsData"
import { useNavigate, useParams } from "react-router-dom"
import { Table } from "reactstrap";


export default function PatronDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [patron, setPatron] = useState({});
    const [makeEdit, setMakeEdit] = useState(true);

    useEffect(() => {
        getPatron(id).then(setPatron);
    }, [id]);

    useEffect(() => {
        getPatron(id).then(setPatron);
    }, [patron])

    const handleEmailChange = (e) => {
        setPatron(prevPatron => ({
            ...prevPatron,
            email: e.target.value
        }));
    };

    const handleAddressChange = (e) => {
        setPatron(prevPatron => ({
            ...prevPatron,
            address: e.target.value
        }));
    };

    const handleSubmit = () => {
        editPatron(patron);
        setMakeEdit(true);
        // Perform any additional logic like submitting data to the server if needed
    };

    return (
        makeEdit ? (
            <div className="container">
                <h2>wtf</h2>
                <Table>
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{patron.firstName + " " + patron.lastName}</td>
                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>{patron.email}</td>
                        </tr>
                        <tr>
                            <th scope="row">Address</th>
                            <td>{patron.address}</td>
                        </tr>
                        <tr>
                            <th scope="row">IsActive</th>
                            <td>{patron.isActive ? "True" : "False"}</td>
                            <td>
                                {patron.isActive ? <button type="button" onClick={() => {
                                    updatePatronActiveStatus(patron.id)
                                }}>Deactivate</button> : <button type="button" onClick={() => {
                                    updatePatronActiveStatus(patron.id)
                                }}>Activate</button>}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <button onClick={() => setMakeEdit(false)}>Edit</button>
            </div>
        ) : (
            <form>
                <fieldset>
                    <legend>Edit Patron</legend>
                    <label>Email:</label>
                    <input type="text" onChange={handleEmailChange} value={patron.email || ''} />
                    <label>Address:</label>
                    <input type="text" onChange={handleAddressChange} value={patron.address || ''} />
                    <button type="button" onClick={handleSubmit}>Submit</button>
                </fieldset>
            </form>
        )
    );
}
