import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, date, numPeople });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page">
      {/* Navbar Hero Section */}
      <header className={`section page-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="rd-navbar-wrap">
          <nav className="rd-navbar rd-navbar-classic">
            <div className="rd-navbar-panel">
              <div className="rd-navbar-brand">
                <a href="/">
                  <img src="/images/BemViver.png" alt="Logo" width="140" height="57" />
                </a>
              </div>
            </div>
            <div className="rd-navbar-main-element">
              <ul className="rd-navbar-nav">
                <li className="rd-nav-item active"><a className="rd-nav-link" href="/">Home</a></li>
                <li className="rd-nav-item"><a className="rd-nav-link" href="/sobre">Sobre</a></li>
                <li className="rd-nav-item"><a className="rd-nav-link" href="/comunidades">Comunidades</a></li>
                <li className="rd-nav-item"><a className="rd-nav-link" href="/contato">Contato</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-main-bunner">
        <div className="main-bunner-inner">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Bem-vindo ao BemViver!</h1>
              <p className="hero-subtitle">Sua jornada para o bem-estar completo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques Section */}
      <section className="section bg-gray-1">
        <div className="container">
          <h2 className="section-title">Nossos Diferenciais</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="icon-heart"></i></div>
              <h3>Suporte 24h</h3>
              <p>Psicólogos disponíveis a qualquer momento</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="icon-book"></i></div>
              <h3>Conteúdo Exclusivo</h3>
              <p>Livros, receitas e exercícios atualizados</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="icon-users"></i></div>
              <h3>Comunidade Ativa</h3>
              <p>Grupos de apoio e compartilhamento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section portfolio-section">
        <div className="container">
          <h2 className="section-title">Nosso Portfólio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="/images/270X119 2.png" alt="Projeto 1" />
              <div className="portfolio-overlay">
                <h4>Saúde Mental</h4>
                <p>Programas de acompanhamento psicológico</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="/images/270X119 1.png" alt="Projeto 2" />
              <div className="portfolio-overlay">
                <h4>Nutrição</h4>
                <p>Receitas e planos alimentares</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="/images/270X119 3.png" alt="Projeto 3" />
              <div className="portfolio-overlay">
                <h4>Fitness</h4>
                <p>Rotinas de exercícios personalizadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section booking-section">
        <div className="container">
          <div className="booking-card">
            <h2 className="section-title">Agende uma Visita</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Seu Telefone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Número de Pessoas"
                  value={numPeople}
                  onChange={(e) => setNumPeople(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="cta-button">
                Agendar Agora
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">Depoimentos</h2>
          <div className="testimonials-carousel">
            <div className="testimonial-item">
              <img src="/images/avatar1.jpg" alt="Cliente 1" />
              <blockquote>
                "A BemViver transformou minha vida completamente. Recomendo para todos!"
              </blockquote>
              <cite>- Maria Silva</cite>
            </div>
            {/* Adicione mais depoimentos */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/images/BemViver.png" alt="Logo" />
              <p>Sua saúde em primeiro lugar</p>
            </div>
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="/sobre">Sobre Nós</a></li>
                <li><a href="/servicos">Serviços</a></li>
                <li><a href="/contato">Contato</a></li>
              </ul>
            </div>
            <div className="footer-social">
              <h4>Siga-nos</h4>
              <div className="social-icons">
                <a href="#"><i className="icon-facebook"></i></a>
                <a href="#"><i className="icon-instagram"></i></a>
                <a href="#"><i className="icon-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 BemViver. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;