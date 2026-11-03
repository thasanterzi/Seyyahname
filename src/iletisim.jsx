import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from './supabaseClient';
import logo from './assets/logo_2_2.png';

function Iletisim() {
  const [adSoyad, setAdSoyad] = useState('');
  const [email, setEmail] = useState('');
  const [mesaj, setMesaj] = useState('');
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from('iletisim') // Tablo adını 'iletisim' olarak güncelledik
      .insert([
        { 
          ad_soyad: adSoyad, 
          "e-posta": email, 
          mesaj: mesaj,
          gonderilme_tarihi: new Date().toISOString() 
        }
      ]);

    setLoading(false);

    if (error) {
      alert("Mesaj gönderilemedi: " + error.message);
    } else {
      alert("Mesajınız başarıyla gönderildi! Teşekkür ederiz.");
      setAdSoyad('');
      setEmail('');
      setMesaj('');
    }
  };
  
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1e293b] font-sans">

      {/* İLETİŞİM İÇERİK ALANI */}
      <main className="max-w-5xl mx-auto px-8 my-16 w-full">
        <div className="text-center mb-12">
          <span className="text-amber-800 text-xs font-bold tracking-widest uppercase">BİZE ULAŞIN</span>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mt-1">Yolculuğa Dair Bir Soru mu Var?</h2>
          <p className="text-gray-500 text-sm mt-2">Önerileriniz veya sorularınız için bizimle her zaman iletişime geçebilirsiniz.</p>
          <br />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-10 rounded-3xl border border-gray-200/80 shadow-sm">
          
          {/* Sol: İletişim Bilgileri */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">İletişim Bilgileri</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                <br />
                Edirne'nin gizli kalmış rotalarını keşfederken bizimle paylaşmak istediğiniz her detay için buradayız.
                <br /><br />
              </p>
              
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-center space-x-3">
                  <span className="text-amber-900 font-bold">📍</span>
                  <span>Trakya Üniversitesi, Edirne / Türkiye</span>
                  <br /><br />
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-amber-900 font-bold">✉️</span>
                  <span>iletisim@seyyahname.com</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <p className="text-xs font-serif italic text-amber-900">“Yolculuk geçer, hikâyesi kalır.”</p>
            </div>
          </div>

          {/* Sağ: Form Alanı */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Ad Soyad</label>
              <input 
                type="text" 
                value={adSoyad}
                onChange={(e) => setAdSoyad(e.target.value)}
                placeholder="Adınızı giriniz" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-900 text-sm bg-[#FAF8F5]" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">E-posta Adresi</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresinizi giriniz" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-900 text-sm bg-[#FAF8F5]" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mesajınız</label>
              <textarea 
                rows="4" 
                value={mesaj}
                onChange={(e) => setMesaj(e.target.value)}
                placeholder="Mesajınızı buraya yazın..." 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-900 text-sm bg-[#FAF8F5] resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="bg-[#112233] hover:bg-[#1a334e] text-white py-3 rounded-xl font-medium text-sm transition shadow-md mt-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? "Gönderiliyor..." : "Mesajı Gönder"}
            </button>
          </form>

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
           <Link 
  to="/girisyap" 
  style={{ textDecoration: 'none' }}
  className="cagri-buton mt-6 md:mt-0 bg-[#112233] hover:bg-[#1a334e] text-white px-8 py-4 rounded-xl font-medium text-sm flex items-center space-x-2 transition shadow-md inline-flex cursor-pointer"
>
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

export default Iletisim;