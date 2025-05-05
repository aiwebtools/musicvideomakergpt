
import { AboutSection } from "./AboutSection";
import { QuickLinksSection } from "./QuickLinksSection";
import { LegalSection } from "./LegalSection";
import { ContactSection } from "./ContactSection";
import { FooterCopyright } from "./FooterCopyright";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-neon-purple/30 bg-cyber-dark">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <AboutSection />
          <QuickLinksSection />
          <LegalSection />
          <ContactSection />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
