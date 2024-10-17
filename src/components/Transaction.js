import React from "react";

export const Transaction = () => {
    return (
        <div className='main_body'>
            <div className="head_body">
                <h3>Transaction</h3>
                <button className="btn">Export</button>
            </div>
        
        <table>
            <thead>
            <tr>
                <th>Transaction Id</th> {/*transaction_id*/}
                <th>Transaction Reference Number</th> {/*transaction_reference_number*/}
                <th>Username</th> {/*user_name*/}
                <th>Device Name</th> {/*device_name*/}
                <th>Location</th> {/*location*/}
                <th>First Name</th> {/*user_first_name*/}
                <th>Last Name</th> {/*user_first_name*/}
                <th>Document No.</th> {/*cif_no*/}
                <th>Document Type</th> {/*doc_type*/}
                <th>Dopa Response</th> {/*doc_type*/}
                <th>Dopa Result</th> {/*doc_type*/}
                <th>Face Result</th> {/*face_compare_result*/}
                <th>Similarity</th> {/*face_compare_result*/}
                <th>Transaction Status</th> {/*transaction_status*/}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>7H080002240909153025</td>
                <td>463652</td>
                <td>7H080002</td>
                <td>Device001</td>
                <td>HQ</td>
                <td>Krungsri</td>
                <td>Praram3</td>
                <td>19608001xxxxx</td>
                <td>TH</td>
                <td>0</td>
                <td>true</td>
                <td>Success</td>
                <td>0.9991</td>
                <td>used</td>
            </tr>
            </tbody>
            <tfoot>
                
            </tfoot>
        </table>
    </div>
    )
} 