import { observer } from "mobx-react-lite";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Main from "components/pages/Main";
import Company from "components/pages/Company";
import Services from "components/pages/Services";
import ContactUs from "components/pages/ContactUs";
import Careers from "components/pages/Careers";
import Certifications from "components/pages/Certifications";
import News from "components/pages/News";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="company" element={<Company />} />
        <Route path="services" element={<Services />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="careers" element={<Careers />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default observer(Router);
