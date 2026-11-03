import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import logo from './assets/logo_2_2.png';
import './Header.css';

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
      }
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/');
  };

  return (
    <header className="seyyah-header">
      <div className="seyyah-header-container">
        
        {/* Logo */}
        <div className="seyyah-logo">
          <Link to="/">
            <img src={logo} alt="Seyyahname Logo" />
          </Link>
        </div>

        {/* Menü Linkleri */}
        <nav className="seyyah-nav">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/sehirler">Şehirler</Link>
          <Link to="/hakkimizda">Hakkımızda</Link>
          <Link to="/iletisim">İletişim</Link>
          
          {user && (
            <>
              <Link to="/favoriler" className="ozel-link">Favorilerim</Link>
              <Link to="/rota-olustur" className="ozel-link">Rota Oluştur</Link>
            </>
          )}
        </nav>

        {/* Sağ Bölüm (Dil ve Kullanıcı/Giriş) */}
        <div className="seyyah-sag-menu">
          <div className="dil-secenek">
            <span className="dil-aktif">TR</span> / <span className="dil-pasif">EN</span>
          </div>

          {user ? (
            <div className="kullanici-kutu">
              <span className="kullanici-isim">
                👋 {user.user_metadata?.ad_soyad || user.email.split('@')[0]}
              </span>
              <button onClick={handleLogout} className="cikis-buton">
                Çıkış Yap
              </button>
            </div>
          ) : (
            <Link to="/girisyap" className="giris-buton">
              Giriş Yap
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}

export default Header;