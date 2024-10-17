import React from "react";

export const ActivityLog = () => {
    return (
        <div className='main_body'>
            <div className="head_body">
                <h3>Activity Log</h3>
                <button className="btn">Export</button>
            </div>
        
        <table>
            <thead>
            <tr>
                <th>Created Date</th> {/*record_created_date*/ }
                <th>Device Name</th> {/*device_name*/ }
                <th>Location</th> {/*location*/ }
                <th>Username</th> {/*user_name*/ }
                <th>FirstName</th> {/*user_first_name*/ }
                <th>LastName</th> {/*user_last_name*/ }
                <th>Source Module</th> {/*source_module*/ }
                <th>Error Code</th> {/*error_code*/ }
                <th>Description</th> {/*description*/ }
                <th>Event Type</th> {/*event_type*/ }
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>2024-11-11 13:23:44</td>
                <td>IPAD001</td>
                <td>ทุ่งสองห้อง,หลักสี่,กทม</td>
                <td>7H080002</td>
                <td>Janjira</td>
                <td>Kummin</td>
                <td>Data Saving</td>
                <td>500</td>
                <td>Database Server Error</td>
                <td>API Sending</td>
            </tr>
            </tbody>
            <tfoot>
                
            </tfoot>
        </table>
    </div>
    )
}