import { useEffect, useState } from "react"
import { getCheckouts, returnCheckout } from "../../data/checkoutsData"
import { Table } from "reactstrap";


export default function Checkouts() {
    const [checkouts, setCheckouts] = useState([]);

    useEffect(() => {
        getCheckouts().then(setCheckouts);
    }, []);

    useEffect(() => {
        getCheckouts().then(setCheckouts);
    }, [checkouts])

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Checkouts</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Material</th>
                        <th>Patron</th>
                        <th>Checkout</th>
                        <th>Return</th>
                    </tr>
                </thead>
                <tbody>
                    {checkouts.map((c) => (
                        <tr key={`checkouts-${c.id}`}>
                            <th scope="row">{c.id}</th>
                            <td>{c.material.materialName}</td>
                            <td>{c.patron.firstName + " " + c.patron.lastName}</td>
                            <td>{c.checkoutDate}</td>
                            <td>{c.returnDate}</td>
                            <td>
                                {c.returnDate === null && (
                                    <button type="button" onClick={() => {
                                        returnCheckout(c.id)
                                    }}>Return</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
