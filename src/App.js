import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AdminRoutes, {routes} from './Routes/Adminroutes';

function App() {
  return <BrowserRouter> 
{AdminRoutes(routes)}
  </BrowserRouter>
}

export default App;