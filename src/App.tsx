import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { TranslationProvider } from "./components/TranslationProvider";
import { trackPageView } from "./utils/analytics";
const Studio = () => {
  useEffect(() => {
    window.location.href = "https://squareway.sanity.studio";
  }, []);
  return null;
};
// Analytics wrapper component
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    trackPageView();
  }, [location]);

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <Router>
        <AnalyticsWrapper>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/studio" element={<Studio />} />
            </Routes>
          </Layout>
        </AnalyticsWrapper>
      </Router>
    </TranslationProvider>
  );
};

export default App;
