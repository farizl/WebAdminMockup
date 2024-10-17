import React from "react";

export const AuditTrail = () => {
    return(
        <div className='main_body'>
        <div className="head_body">
            <h3>Audit Trail</h3>
            <button className="btn">Export</button>
        </div>
    
    <table>
        <thead>
        <tr>
            <th>Created Date</th> {/*record_created_date*/ }
            <th>IP Address</th> {/*source_ip*/ }
            <th>Location</th> {/*location*/ }
            <th>Username</th> {/*user_name*/ }
            <th>FirstName</th> {/*user_first_name*/ }
            <th>LastName</th> {/*user_last_name*/ }
            <th>Source Module</th> {/*source_module*/ }
            <th>Error Code</th> {/*error_code*/ }
            <th>Description</th> {/*description*/ }
            <th>Event Type</th> {/*event_type*/ }
            <th>Transaction Status</th> {/*transaction_status*/}
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>2024-10-11 15:30:44</td>
            <td>192.168.1.20</td>
            <td>ปลายบาง,บางกรวย,นนทบุรี</td>
            <td>7H080001</td>
            <td>Paranee</td>
            <td>Koyta</td>
            <td>Login</td>
            <td>-</td>
            <td>User Login</td>
            <td>Login</td>
            <td>success</td>
        </tr>
        </tbody>
        <tfoot>
            
        </tfoot>
    </table>
</div>
    );
}