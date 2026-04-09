import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminDashboard from "./admin/AdminDashboard";
import VictimDashboard from "./victim/VictimDashboard";
import CounsellorDashboard from "./counsellor/CounsellorDashboard";
import LegalAdvisorDashboard from "./legal/LegalAdvisorDashboard";
import FileComplaint from "./victim/FileComplaint";
import BookCounsellor from "./victim/BookCounsellor";
import BookLegalAdvisor from "./victim/BookLegalAdvisor";
import TrackComplaints from "./victim/TrackComplaints";
import ManageComplaints from "./admin/ManageComplaints";
import ProtectedRoute from "./components/ProtectedRoute";
import CounsellorAppointments from "./counsellor/CounsellorAppointments";
import LegalAppointments from "./legal/LegalAppointments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/complaints"
          element={
            <ProtectedRoute allowedRole="ADMIN">
              <ManageComplaints />
            </ProtectedRoute>
          }
        />

        <Route
          path="/victim"
          element={
            <ProtectedRoute allowedRole="VICTIM">
              <VictimDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/victim/file-complaint"
          element={
            <ProtectedRoute allowedRole="VICTIM">
              <FileComplaint />
            </ProtectedRoute>
          }
        />

        <Route
          path="/victim/book-counsellor"
          element={
            <ProtectedRoute allowedRole="VICTIM">
              <BookCounsellor />
            </ProtectedRoute>
          }
        />

        <Route
          path="/victim/book-legal"
          element={
            <ProtectedRoute allowedRole="VICTIM">
              <BookLegalAdvisor />
            </ProtectedRoute>
          }
        />

        <Route
          path="/victim/track"
          element={
            <ProtectedRoute allowedRole="VICTIM">
              <TrackComplaints />
            </ProtectedRoute>
          }
        />

        <Route
          path="/counsellor"
          element={
            <ProtectedRoute allowedRole="COUNSELLOR">
              <CounsellorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/legal"
          element={
            <ProtectedRoute allowedRole="LEGAL_ADVISOR">
              <LegalAdvisorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
  path="/counsellor/appointments"
  element={
    <ProtectedRoute allowedRole="COUNSELLOR">
      <CounsellorAppointments />
    </ProtectedRoute>
  }
/>

<Route
  path="/legal/appointments"
  element={
    <ProtectedRoute allowedRole="LEGAL_ADVISOR">
      <LegalAppointments />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;