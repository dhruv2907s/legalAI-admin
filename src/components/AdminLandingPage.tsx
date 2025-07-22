import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaGavel, FaHandsHelping, FaRocket, FaBrain, FaLock } from 'react-icons/fa';
import { Search, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-legal-ai.jpg';
import LoginModal from './LoginModal';


const modules = [
  {
    icon: FaGavel,
    title: "VaadVivaad",
    desc: "A debate and discussion platform fostering structured legal argumentation."
  },
  {
    icon: FaHandsHelping,
    title: "NyayaDoot", 
    desc: "A volunteer-based legal aid system bridging communities with legal help."
  },
  {
    icon: FaBalanceScale,
    title: "NyayaVaad",
    desc: "An intelligent suite for managing, analyzing, and preparing case files."
  }
];

const features = [
  {
    icon: FaRocket,
    title: "Automated Case Filing",
    desc: "Streamline initial case entry with prefilled fields, templates, and recommendations."
  },
  {
    icon: FaBrain,
    title: "AI-Powered Drafting", 
    desc: "Generate structured legal drafts tailored to case data and precedent."
  },
  {
    icon: FaLock,
    title: "Verdict Insights",
    desc: "Predict probable verdicts using past cases and judge profiles."
  },
  {
    icon: Search,
    title: "Contextual Search",
    desc: "Search documents with legal context-aware AI to fetch most relevant results."
  },
  {
    icon: Users,
    title: "Client Interaction Portal",
    desc: "Allow clients to submit, track and chat securely on legal matters."
  },
  {
    icon: Shield,
    title: "KYC and ID Verification", 
    desc: "Built-in OCR and validation for seamless onboarding."
  }
];

const testimonials = [
  {
    name: "Dhruv Shah",
    role: "Developer, LegalAI",
    quote: "Crafting LegalAI has been a journey of merging code with cause. We built not just a product, but a purpose."
  },
  {
    name: "Dr. Aarti Karande",
    role: "Mentor",
    quote: "This platform has revolutionized how we approach legal research and justice delivery."
  }
];

const AdminLandingPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="floating-orb w-64 h-64 top-20 -right-32 animate-float" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-48 h-48 top-1/2 -left-24 animate-float" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-32 h-32 bottom-20 right-1/4 animate-float" style={{ animationDelay: '4s' }} />

      {/* Header */}
      <motion.header 
        className="glass-card relative z-50 px-6 py-4 mx-4 mt-4 rounded-2xl"
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.h2 
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            LegalAI
          </motion.h2>
          <nav className="flex gap-8 items-center">
            <button 
              onClick={() => scrollToSection(featuresRef)}
              className="text-primary hover:text-accent transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="text-primary hover:text-accent transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection(teamRef)}
              className="text-primary hover:text-accent transition-colors duration-300"
            >
              Team
            </button>
            <Button 
              variant="outline" 
              className="glass border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft"
              onClick={() => setShowLoginModal(true)}
            >
              Login →
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="relative px-6 py-20 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6 gradient-text breathe"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Empowering Justice with 
            <span className="gradient-text animate-gradient-shift"> Artificial Intelligence</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            A centralized interface for managing intelligent legal solutions that bridge the gap between law and technology.
          </motion.p>

          <motion.div
            className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden glass-card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={heroImage} 
              alt="LegalAI Hero" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
        </div>
      </motion.section>

      {/* Main Modules */}
      <motion.section 
        ref={featuresRef}
        className="px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 gradient-text"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Core Modules
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5
                }}
                className="card-3d"
              >
                <Card className="glass-card h-full hover:shadow-depth transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="bg-gradient-teal text-primary-foreground p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                      <module.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-primary">{module.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{module.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Info Section */}
      <motion.section 
        className="px-6 py-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto glass-card p-12 rounded-3xl shadow-depth">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Law Meets Intelligence</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            LegalAI blends expert legal reasoning with machine intelligence to reduce workload, 
            enhance access to justice, and empower legal practitioners with cutting-edge technology.
          </p>
        </div>
      </motion.section>

      {/* Advanced Features */}
      <motion.section 
        ref={aboutRef}
        className="px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 gradient-text"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Advanced AI Features
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="card-3d"
              >
                <Card className="glass-card h-full hover:shadow-soft transition-all duration-500">
                  <CardContent className="p-6">
                    {feature.icon && (
                      <div className="bg-gradient-purple text-card-foreground p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                        <feature.icon size={20} />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        ref={teamRef}
        className="px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-16 gradient-text"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Meet the Team
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {testimonials.map((person, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="card-3d"
              >
                <Card className="glass-card hover:shadow-depth transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-teal rounded-full mx-auto mb-4 flex items-center justify-center shadow-soft">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-2">{person.name}</h4>
                    <p className="text-accent mb-4">{person.role}</p>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{person.quote}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-4 rounded-2xl p-8 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} LegalAI | All rights reserved | 
          <span className="text-primary"> Courtroom in the Cloud</span>
        </p>
      </footer>
      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
};

export default AdminLandingPage;