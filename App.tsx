
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto px-6 md:px-12 py-20 flex-grow">
                <Hero />
                <Skills />
                <Projects />
            </main>
            <Footer />
        </div>
    );
};

export default App;
