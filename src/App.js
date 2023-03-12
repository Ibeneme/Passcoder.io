import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ResetPassword from "./components/ForgotPassword";
import { PasswordResetSuccessful } from "./components/PasswordResetSuccessful";
import SignUpFree from "./components/SignUpt";
import { Dashboard } from "./components/Home/Dashboard/Dashboard";
import BrowseApp from "./components/Home/BrowseApp/BrowseApp";
import { Profile } from "./components/Home/Profile/Profile";
import Setting from "./components/Home/Settings/Setting";
import Extended from "./components/Home/Verifications/Extended Verification/Extended";
import Medical from "./components/Home/Verifications/Medical Verification/Medical";
import { Credentials } from "./components/Home/Verifications/Credentials/Credentials";
import Govt from "./components/Home/Verifications/Govt Verification/Govt";
import { ExtendedAddress } from "./components/Home/Verifications/Extended Verification/ExtendedAddress";
import ExtendedSuccess from "./components/Home/Verifications/Extended Verification/ExtendedSuccess";
import NIMC from "./components/Home/Verifications/Extended Verification/NIMC";
import BVN from "./components/Home/Verifications/Extended Verification/BVN";
import VIN from "./components/Home/Verifications/Extended Verification/VIN";
import InternationalPassport from "./components/Home/Verifications/Extended Verification/InternationalPassport";
import { DriversLicense } from "./components/Home/Verifications/Extended Verification/DriversLicense";
import PHD from "./components/Home/Verifications/Credentials/PHD";
import Masters from "./components/Home/Verifications/Credentials/Masters";
import UndergraduateDegree from "./components/Home/Verifications/Credentials/UndergraduateDegree";
import FSL from "./components/Home/Verifications/Credentials/FSL";
import SSCE from "./components/Home/Verifications/Credentials/SSCE";
import Vitals from "./components/Home/Verifications/Medical Verification/Vitals";
import EmergencyContact from "./components/Home/Verifications/Medical Verification/EmergencyContact";
import HospitalHistory from "./components/Home/Verifications/Medical Verification/HospitalHistory";
import AddEmergencyContact from "./components/Home/Verifications/Medical Verification/AddEmergencyContact";
import AddHospitalHistory from "./components/Home/Verifications/Medical Verification/AddHospitalHistory";
import AddVitals from "./components/Home/Verifications/Medical Verification/AddVitals";
import { CredentialsDashboard } from "./components/Home/Credentials/CredentialsDashboard";
import { MedicalsDashboard } from "./components/Home/DashboardMedicals/MedicalsDashboard";
import EditProfile from "./components/Home/Profile/Right-slide/EditProfile";
import RequestsNotifications from "./components/Home/Notifications/RequestsNotifications";
import RequestsHistory from "./components/Home/Notifications/RequestsHistory";
import Offers from "./components/Home/Offers/Offers";
import Account from "./components/Account";
import { PidSignin } from "./components/PidSignin";
import Otp from "./components/otp";
import { DashboardGovt } from "./components/Home/DashboardGovt/DashboardGovt";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
         
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ResetPassword />} />
          <Route path="/" element={<SignUpFree />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
          <Route path="/Browse-Apps" element={<ProtectedRoute><BrowseApp /></ProtectedRoute>}/>
          <Route path="/Profile" element={  <ProtectedRoute> <Profile /> </ProtectedRoute>}/>
          <Route path="/Settings" element={ <ProtectedRoute> <Setting /> </ProtectedRoute>}/>
          <Route path="/reset" element={<PasswordResetSuccessful />} />
          <Route path="/ExtendedVerification" element={<ProtectedRoute><Extended /></ProtectedRoute>}/>
          <Route path="/MedicalVerification" element={  <ProtectedRoute> <Medical /> </ProtectedRoute>}/>
          <Route path="/CredentialVerification" element={ <ProtectedRoute> <Credentials /> </ProtectedRoute>}/>
          <Route path="/GovtVerification" element={ <ProtectedRoute> <Govt /> </ProtectedRoute>}/>
          <Route path="/ExtendedAddress" element={ <ProtectedRoute> <ExtendedAddress /> </ProtectedRoute>}/>
          <Route path="/AddressSuccess" element={ <ProtectedRoute> <ExtendedSuccess /> </ProtectedRoute>}/>
          <Route path="/NIMC" element={ <ProtectedRoute> <NIMC /> </ProtectedRoute>}/>
          <Route path="/BVN" element={ <ProtectedRoute> <BVN /> </ProtectedRoute>}/>
          <Route path="/DriversLicense" element={ <ProtectedRoute> <DriversLicense /> </ProtectedRoute>}/>
          <Route path="/InternationalPassport" element={ <ProtectedRoute> <InternationalPassport /> </ProtectedRoute>}/>
          <Route path="/VIN" element={ <ProtectedRoute> <VIN /> </ProtectedRoute>}/>
          <Route path="/SSCE" element={ <ProtectedRoute> <SSCE /> </ProtectedRoute>}/>
          <Route path="/FSL" element={ <ProtectedRoute> <FSL /> </ProtectedRoute>}/>
          <Route path="/Masters" element={ <ProtectedRoute> <Masters /> </ProtectedRoute>}/>
          <Route path="/UndergraduateDegree" element={ <ProtectedRoute> <UndergraduateDegree /> </ProtectedRoute>}/>
          <Route path="/PHD" element={ <ProtectedRoute> <PHD /> </ProtectedRoute>}/>
          <Route path="/EmergencyContact" element={ <ProtectedRoute> <EmergencyContact /> </ProtectedRoute>}/>
          <Route path="/vitals" element={ <ProtectedRoute> <Vitals /> </ProtectedRoute>}/>
          <Route path="/HospitalHistory" element={ <ProtectedRoute> <HospitalHistory /> </ProtectedRoute>}/>
          <Route path="/AddEmergencyContact" element={ <ProtectedRoute> <AddEmergencyContact /> </ProtectedRoute>}/>
          <Route path="/addHospitalHistory" element={ <ProtectedRoute> <AddHospitalHistory /> </ProtectedRoute>}/>
          <Route path="/DashboardCredentials" element={ <ProtectedRoute> < CredentialsDashboard/> </ProtectedRoute>}/>
          <Route path="/AddVitals" element={ <ProtectedRoute> <AddVitals /> </ProtectedRoute>}/>
          <Route path="/DashboardMedicals" element={ <ProtectedRoute> < MedicalsDashboard/> </ProtectedRoute>}/>
          <Route path="/EditProfile" element={ <ProtectedRoute> < EditProfile/> </ProtectedRoute>}/>
          <Route path="/RequestsNotifications" element={ <ProtectedRoute> < RequestsNotifications /> </ProtectedRoute>}/>
          <Route path="/RequestsHistory" element={ <ProtectedRoute> < RequestsHistory /> </ProtectedRoute>}/>
          <Route path="/Offers" element={ <ProtectedRoute> < Offers /> </ProtectedRoute>}/>
          <Route path="/logout" element={ <ProtectedRoute> <Account /> </ProtectedRoute>}/>
          <Route path="/PIDSignin" element={ <PidSignin /> }/>
          <Route path='/otp' element={ <Otp /> }/>
          <Route path="/dashboardGovt" element={ <ProtectedRoute> <DashboardGovt /> </ProtectedRoute>}/>
         
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
