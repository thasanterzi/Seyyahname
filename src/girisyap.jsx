import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import logo from './assets/logo_2_2.png';

function GirisYap() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Giriş Yap Butonuna Basıldığında Çalışacak Fonksiyon
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setLoading(false);

    if (error) {
      setErrorMessage("Giriş başarısız: " + error.message);
    } else {
      alert("Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz.");
      navigate('/'); // Giriş başarılıysa ana sayfaya gönder
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1e293b] font-sans">
      
      {/* GİRİŞ FORMU İÇERİK ALANI */}
      <main className="max-w-md mx-auto px-8 my-auto w-full py-12">
        <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm">
          
          <div className="text-center mb-8">
            <span className="text-amber-800 text-xs font-bold tracking-widest uppercase">HOŞ GELDİNİZ</span>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-1">Hesabınıza Giriş Yapın</h2>
            <p className="text-gray-500 text-sm mt-1">Yolculuğunuza kaldığınız yerden devam edin.</p>
          </div>

          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">E-posta Adresi</label>
              <input 
                type="email" 
                placeholder="E-posta adresinizi giriniz" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-900 text-sm bg-[#FAF8F5]" 
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Şifre</label>
              <input 
                type="password" 
                placeholder="Şifrenizi giriniz" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-900 text-sm bg-[#FAF8F5]" 
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="bg-[#112233] hover:bg-[#1a334e] text-white py-3 rounded-xl font-medium text-sm transition shadow-md mt-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </button>
          </form>

          <div className="text-center mt-6 text-xs text-gray-500">
            Hesabınız yok mu?{' '}
            <Link to="/kayitol" className="text-amber-900 font-bold hover:underline">
              Üye Olun
            </Link>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="alt-bilgi-bolumu bg-[#F5F1E9] border-t border-gray-200 mt-20">
        <div className="alt-bilgi-icerik max-w-7xl mx-auto px-8 py-16">
          <div className="alt-cagri-kutusu flex flex-col md:flex-row justify-between items-center bg-[#FAF8F5] p-12 rounded-3xl border border-gray-200/60 mb-16">
            <div>
              <span className="kucuk-baslik text-amber-800 text-xs font-bold tracking-widest uppercase">MODERN SEYYAH</span>
              <h2 className="ana-baslik text-3xl font-serif font-bold text-gray-900 mt-1">Yeni bir hikâye hangi şehirde başlasın?</h2>
              <p className="alt-aciklama text-gray-500 text-sm mt-1">Merakını yanına al. Şehrini seç, kendi yolculuğunu yaz.</p>
            </div>
          <Link  to="/girisyap" style={{ textDecoration: 'none' }}
            className="cagri-buton mt-6 md:mt-0 bg-[#112233] hover:bg-[#1a334e] text-white px-8 py-4 rounded-xl font-medium text-sm flex items-center space-x-2 transition shadow-md inline-flex cursor-pointer">
            <span>Şehrini Keşfet</span> 
            <span>→</span>
          </Link>
          </div>

          <div className="alt-linkler-grid grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
            <div className="alt-hakkinda">
              <img src={logo} alt="Logo" className="logo-resim w-10 h-10 object-contain rounded-full border border-amber-900/30 p-0.5 mb-4" />
              <p className="alt-aciklama text-gray-500 text-xs leading-relaxed">Gezgin ruhlar için kültür, keşif ve günlük ihtiyaçları bir araya getiren şehir rehberi.</p>
            </div>
            <div className="alt-kategori">
              <h4 className="alt-baslik font-bold text-gray-900 mb-4 text-xs tracking-wider uppercase">Keşfet</h4>
              <ul className="alt-liste space-y-2.5 text-gray-600 text-xs">
                <li><a href="#" className="hover:text-amber-900">Şehirler</a></li>
                <li><a href="#" className="hover:text-amber-900">Tematik Keşif</a></li>
                <li><a href="#" className="hover:text-amber-900">Edirne</a></li>
              </ul>
            </div>
            <div className="alt-kategori">
              <h4 className="alt-baslik font-bold text-gray-900 mb-4 text-xs tracking-wider uppercase">Şehir Rehberi</h4>
              <ul className="alt-liste space-y-2.5 text-gray-600 text-xs">
                <li><a href="#" className="hover:text-amber-900">Gezilecek Yerler</a></li>
                <li><a href="#" className="hover:text-amber-900">Konaklama Yerleri</a></li>
                <li><a href="#" className="hover:text-amber-900">Popüler Yemek Noktaları</a></li>
                <li><a href="#" className="hover:text-amber-900">Alışveriş Merkezleri</a></li>
              </ul>
            </div>
            <div className="alt-kategori">
              <h4 className="alt-baslik font-bold text-gray-900 mb-4 text-xs tracking-wider uppercase">Seyyahname</h4>
              <ul className="alt-liste space-y-2.5 text-gray-600 text-xs">
                <li><a href="#" className="hover:text-amber-900">Profil</a></li>
                <li><a href="#" className="hover:text-amber-900">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-amber-900">İletişim</a></li>
              </ul>
            </div>
          </div>

          <div className="telif-alan border-t border-gray-300/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p className="telif-metin">© 2026 Seyyahname · Modern Seyyah</p>
            <p className="slogan font-serif italic text-amber-900 my-4 md:my-0 text-sm">Yolculuk geçer, hikâyesi kalır.</p>
            <div className="gizlilik-linkler space-x-6">
              <a href="#" className="hover:text-amber-900">Gizlilik Politikası</a>
              <a href="#" className="hover:text-amber-900">Kullanım Koşulları</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default GirisYap;
