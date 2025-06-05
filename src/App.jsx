import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Company from './pages/Company';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
// Service Pages
import AcademicExcellence from './pages/ServicesPages/AcademicExcellence';
import CampusRecruitment from './pages/ServicesPages/CampusRecruitment';
import Certifications from './pages/ServicesPages/Certifications';
import SoftwareDevelopment from './pages/ServicesPages/SoftwareDevelopment';
import DigitalMarketing from './pages/ServicesPages/DigitalMarketing';
import WebDevelopment from './pages/ServicesPages/WebDevelopment';
import MobileAppDevelopment from './pages/ServicesPages/MobileAppDevelopment';
import ITStaffing from './pages/ServicesPages/ITStaffing';
import ERPSoftware from './pages/ServicesPages/ERPSoftware';
import PayrollManagement from './pages/ServicesPages/PayrollManagement';
import CeoFounder from './pages/CeoFounder';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/academic-excellence" element={<AcademicExcellence />} />
          <Route path="services/campus-recruitment" element={<CampusRecruitment />} />
          <Route path="services/certifications" element={<Certifications />} />
          <Route path="services/software-development" element={<SoftwareDevelopment />} />
          <Route path="services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="services/it-staffing" element={<ITStaffing />} />
          <Route path="services/erp-software" element={<ERPSoftware />} />
          <Route path="services/payroll-management" element={<PayrollManagement />} />
          <Route path="company" element={<Company />} />
          <Route path="ceo-founder" element={<CeoFounder />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;