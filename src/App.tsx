/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Features } from "./pages/Features";
import { Mentorship } from "./pages/Mentorship";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Onboarding } from "./pages/Onboarding";
import { StudentDashboard } from "./pages/StudentDashboard";
import { RecruiterDashboard } from "./pages/RecruiterDashboard";
import { LearningPortal } from "./pages/LearningPortal";
import { AITest } from "./pages/AITest";
import { PremiumLab } from "./pages/PremiumLab";
import { Institutions } from "./pages/Institutions";
import { ChatBot } from "./components/ChatBot";

import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, requireField = false }: { children: React.ReactNode, requireField?: boolean }) {
  const { isAuthenticated, profile, isLoading } = useAuth();
  
  if (isLoading) return null; // Or a loading spinner

  if (!isAuthenticated) return <Navigate to="/login" />;
  
  // Use profile from Firestore if available, fallback to localStorage for migration
  const fieldSelected = profile?.careerField || localStorage.getItem('student_career_field');
  
  if (requireField && !fieldSelected) return <Navigate to="/onboarding" />;

  return <>{children}</>;
}

function AppContent() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute requireField><StudentDashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute requireField><StudentDashboard /></ProtectedRoute>} />
          <Route path="/learning" element={<ProtectedRoute requireField><LearningPortal /></ProtectedRoute>} />
          <Route path="/ai-test" element={<ProtectedRoute requireField><AITest /></ProtectedRoute>} />
          <Route path="/recruiter" element={<ProtectedRoute><RecruiterDashboard /></ProtectedRoute>} />
          <Route path="/premium-lab" element={<ProtectedRoute requireField><PremiumLab /></ProtectedRoute>} />
          <Route path="/institutions" element={<Institutions />} />
        </Routes>
      </main>
      {/* Footer ONLY on Home page or if not logged in */}
      {(isHomePage || !isAuthenticated) && <Footer />}
      <ChatBot />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <AppContent />
          </Router>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

