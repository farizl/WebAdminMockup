import './App.css';
import Login from './components/Login.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './components/Main.js';
import { Thaiid } from './components/Thaiid.js';
import { Passport } from './components/Passport.js';
import { AuditTrail } from './components/AuditTrail.js';
import { Transaction } from './components/Transaction.js';
import { ActivityLog } from './components/ActivityLog.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Login/>}/>
        <Route path='/main' element={<Main/>}>
          <Route path='/main/thaiid' element={<Thaiid/>}></Route>
          <Route path='/main/passport' element={<Passport/>}></Route>
          <Route path='/main/auditTrail' element={<AuditTrail/>}></Route>
          <Route path='/main/transaction' element={<Transaction/>}></Route>
          <Route path='/main/activityLog' element={<ActivityLog/>}></Route>
          <Route path='/main/userManagement' element={<Thaiid/>}></Route>
          <Route path='/main/settings' element={<Thaiid/>}></Route>
        </Route>
      </Routes>   
    </BrowserRouter>
);
}

