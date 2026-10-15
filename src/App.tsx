import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { HomeView } from './views/HomeView';
import { WorkView } from './views/WorkView';
import { CaseStudyView } from './views/CaseStudyView';
import { ServicesView } from './views/ServicesView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { StudioView } from './views/StudioView';
import { ContactView } from './views/ContactView';
import { PROJECTS } from './data/projects';
import { SERVICES } from './data/services';
import { ServiceCategory } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path && path !== '' ? path : '/';
    }
    return '/';
  });

  // Synchronize browser history and popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProject = (slug: string) => {
    navigateTo(`/work/${slug}`);
  };

  const handleOpenService = (slug: string) => {
    navigateTo(`/services/${slug}`);
  };

  const handleStartProject = () => {
    navigateTo('/contact');
  };

  // ROUTE DISPATCHER
  const renderCurrentView = () => {
    // 1. Project Detail Route: /work/:slug
    if (currentPath.startsWith('/work/')) {
      const slug = currentPath.replace('/work/', '');
      const project = PROJECTS.find((p) => p.slug === slug);
      if (project) {
        return (
          <CaseStudyView
            project={project}
            onNavigate={navigateTo}
            onOpenProject={handleOpenProject}
          />
        );
      }
    }

    // 2. Service Detail Route: /services/:slug
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '') as ServiceCategory;
      const service = SERVICES.find((s) => s.slug === slug);
      if (service) {
        return (
          <ServiceDetailView
            service={service}
            onNavigate={navigateTo}
            onStartProject={handleStartProject}
          />
        );
      }
    }

    // 3. Work Index Route
    if (currentPath === '/work') {
      return (
        <WorkView
          onOpenProject={handleOpenProject}
          onStartProject={handleStartProject}
        />
      );
    }

    // 4. Services Overview Route
    if (currentPath === '/services') {
      return (
        <ServicesView
          onOpenService={handleOpenService}
          onStartProject={handleStartProject}
        />
      );
    }

    // 5. Studio Route
    if (currentPath === '/studio') {
      return <StudioView onStartProject={handleStartProject} />;
    }

    // 6. Contact Route
    if (currentPath === '/contact') {
      return <ContactView />;
    }

    // Default: Home Page
    return (
      <HomeView
        onNavigate={navigateTo}
        onOpenProject={handleOpenProject}
        onOpenService={handleOpenService}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#08080B] text-[#F5F3F8] flex flex-col justify-between selection:bg-[#B65CFF] selection:text-black">
      {/* Strict 3-zone Top Bar Contract */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onStartProject={handleStartProject}
      />

      {/* Main Dynamic Viewport */}
      <main className="flex-1 w-full">
        {renderCurrentView()}
      </main>

      {/* Comprehensive Editorial Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenContact={handleStartProject}
      />
    </div>
  );
}
