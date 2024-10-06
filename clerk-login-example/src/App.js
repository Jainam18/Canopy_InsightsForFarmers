// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Datatable from './Components/Datatable/Datatable';
import Header from './Components/Header/Header';
import Breadcrumbs from './Components/Breadcrumbs/breadcrumbs';
import Home from './Components/Home/Home';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import StateSelectionMap from './Components/MapSelector/StateSelectionMap';
import FarmSelectionMap from './Components/MapSelector/FarmSelectionMap';
import FarmView from './Components/MapSelector/FarmView';
import { useEffect, useState } from 'react';
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {

  const userInfo = useState(null);
  // useEffect(() => {
  //   data = respons
  // }, [])

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
    <div className="App">
      <BrowserRouter>
                <div className="app-main-body-container">
                  <div className="app-main-left-body-container">
                  {/* <GlobalStyles /> */}

                    <Header />
                    {/* <Breadcrumbs /> */}
                    { <Navigation />}
                  </div>
                  <div className="app-main-right-body-container">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/sidebar-types" element={<h1>This is /sidebar-types</h1>} />
                      <Route path="/ui-features" element={<h1>This is /ui-features</h1>} />
                      <Route path="/charts" element={<h1>This is /charts</h1>} />
                      <Route path="/icons" element={<h1>This is /icons</h1>} />
                      <Route path="/tables" element={<Datatable />} />
                      <Route path="/state-selection" element={<StateSelectionMap />} />
                      <Route path="/farm-selection/:stateName" element={<FarmSelectionMap />} />
                      <Route path="/farm-view/:stateName" element={<FarmView />} />
                      <Route path="/invoice-summary" element={<h1>This is /invoice-summary</h1>} />
                      <Route path="/Pages" element={<h1>This is /Pages</h1>} />
                      <Route path="/multi-level-menu" element={<Datatable />} />
                    </Routes>
                  </div>
                </div>
      </BrowserRouter>
    </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;
