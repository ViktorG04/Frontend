import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import UserContext from './context/UserContext';
import Accounts from './views/Accounts';
import { LoginFormWithControlled } from './views/Login';
import { RegisterFormWithControlled } from './views/Register';
import Profile from './views/Profile';
import { AddAccountFormWithControlled } from './components/accounts/AddAccount';


function App() {

  const [userLogin, setUserLogin] = useLocalStorage('userLogin', '')

  return (
    <div className='container'>
      <UserContext.Provider value={{ userLogin, setUserLogin }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<LoginFormWithControlled />} />
            <Route path='/register' element={<RegisterFormWithControlled />} />
            <Route path='/dashboard' element={<div>dashboard</div>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/accounts/*' element={<Accounts />}>
              <Route path='AddAccount/:id' element={<AddAccountFormWithControlled/>} />
              <Route path='edit/:id' element={<div>edit account</div>} />
            </Route>
            <Route path='/expenses-income' element={<div>expenses or income view</div>} />
            <Route path='/transfers' element={<div>local account Transfers view</div>} />
            <Route path='/history' element={<div>history view</div>} />
            <Route path='*' element={<div>404 NOT FOUND</div>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
