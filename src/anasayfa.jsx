import logo from './assets/logo_2_2.png';
import sliderGorsel from './assets/slider_1.png';
import ornekGeziGorsel from './assets/ornek_gezi.png';
import istanbulGorsel from './assets/istanbul.png'; 
import edirneGorsel from './assets/edirne.png';
import nevsehirGorsel from './assets/nevsehir.png';

function Anasayfa() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1e293b] font-sans">
      
      {/*  ÜST MENÜ  */}
      <header className="ust-menu bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="menu-icerik max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="logo-alani flex items-center space-x-3">
            <img src={logo} alt="Seyyahname Logo" className="logo-resim w-12 h-12 object-contain rounded-full border border-amber-900/30 p-0.5" />
          </div>

          {/* Menü Linkleri */}
          <nav className="navigasyon-linkleri hidden md:flex space-x-10 text-gray-700 font-medium text-sm">
            <a href="#" className="aktif-link text-amber-900 font-semibold border-b-2 border-amber-900 pb-1">Ana Sayfa</a>
            <a href="#" className="hover:text-amber-900 transition">Şehirler</a>
            <a href="#" className="hover:text-amber-900 transition">Hakkımızda</a>
            <a href="#" className="hover:text-amber-900 transition">İletişim</a>
          </nav>

          {/* Dil & Giriş */}
          <div className="sag-menu-alan flex items-center space-x-6">
            <div className="dil-secenek text-xs font-semibold tracking-wider text-gray-500">
              <span className="text-amber-900 font-bold">TR</span> / <span className="hover:text-gray-800 cursor-pointer">EN</span>
            </div>

            <button className="giris-yap-buton border border-gray-300 hover:border-amber-900 text-gray-800 px-5 py-2 rounded-xl text-sm font-medium transition shadow-sm bg-white">
              Giriş Yap
            </button>
          </div>

        </div>
      </header>

      {/* Slider */}
      <section className="karsilama-alani relative text-white py-28 px-6 overflow-hidden">
        <div className="karsilama-icerik max-w-7xl mx-auto relative z-10 w-full">
          <p className="ust-baslik text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">SEYYAHNAME · MODERN SEYYAH</p>
          <h1 className="ana-baslik text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6 max-w-2xl leading-tight text-white">
            Bir şehri gezme.<br />Hikâyesine karış.
          </h1>
          <p className="alt-aciklama">
            Tarihin izinden yerel sofralara; keşfetmek, konaklamak ve kendi rotanı çizmek için şehir rehberin.
          </p>

          {/* Arama Kutusu */}
          <div className="arama-kutusu bg-white p-2 rounded-2xl shadow-2xl max-w-xl flex items-center justify-between">
            <div className="arama-input-alan flex items-center px-4 space-x-3 w-full">
              <span className="arama-ikon text-amber-800 font-bold">🔍</span>
              <div className="flex flex-col text-left w-full">
                <span className="arama-etiket text-[10px] uppercase font-bold text-gray-400 tracking-wider">SIRADAKI DURAĞIN</span>
                <input type="text" placeholder="Hangi şehri keşfetmek istersin?" className="arama-input outline-none text-sm text-gray-800 placeholder-gray-400 py-1 bg-transparent" />
              </div>
            </div>
            <button className="arama-buton bg-[#112233] hover:bg-[#1a334e] text-white px-6 py-4 rounded-xl font-medium text-sm flex items-center space-x-2 transition shrink-0">
              <span>Şehirleri Keşfet</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Rehber Tanıtım */}
      <section className="rehber-tanitim max-w-7xl mx-auto px-8 py-20 border-b border-gray-200/60">
        <div className="rehber-grid grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="rehber-sol">
            <span className="kucuk-baslik text-amber-800 text-xs font-bold tracking-widest uppercase">GEZGİN RUHLARA</span>
            <h2 className="ana-baslik text-3xl font-serif font-bold mt-1 text-gray-900">Kendi şehrinin rehberi ol.</h2>
          </div>
          <div className="rehber-orta text-gray-600 text-sm leading-relaxed">
            Dağınık öneriler yerine bir bütün: şehrin kültürünü tanı, ihtiyaçlarını aynı rehberde bul, sevdiğin duraklarla sana ait bir gezi planı oluştur.
          </div>
          <div className="rehber-sag flex flex-col space-y-3 text-sm font-medium text-gray-800 md:border-l md:border-gray-200 md:pl-8">
            <div className="madde flex items-center space-x-3"><span className="tik text-amber-700 font-bold">✓</span><span>Tematik keşif</span></div>
            <div className="madde flex items-center space-x-3"><span className="tik text-amber-700 font-bold">✓</span><span>Bütünleşik şehir rehberi</span></div>
            <div className="madde flex items-center space-x-3"><span className="tik text-amber-700 font-bold">✓</span><span>Sana ait rotalar</span></div>
          </div>
        </div>
      </section>

      {/* Temalar */}
      <section className="tema-bolumu max-w-7xl mx-auto px-8 py-16">
        <div className="tema-baslik-alan flex justify-between items-end mb-10">
          <div>
            <span className="kucuk-baslik text-amber-800 text-xs font-bold tracking-widest uppercase">BİR TEMA SEÇ, YOLA ÇIK</span>
            <h2 className="ana-baslik text-3xl font-serif font-bold text-gray-900 mt-1">Senin merakın, senin keşfin.</h2>
          </div>
          <a href="#" className="tumunu-gor text-sm font-semibold text-gray-800 hover:text-amber-900 flex items-center space-x-1">
            <span>Tüm temalar</span> <span>↗</span>
          </a>
        </div>

        <div className="tema-kart-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tema 1 */}
          <div className="tema-kart bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between h-72">
            <div>
              <div className="kart-ikon w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 mb-6 font-serif">🏛️</div>
              <h3 className="kart-baslik font-serif font-bold text-xl text-gray-900 mb-2">Dini Mimari</h3>
              <p className="kart-aciklama text-gray-500 text-xs leading-relaxed">İnançların izinde, şehrin ruhuna bir yolculuk.</p>
              <div className="kart-alt-etiket mt-4 text-[11px] text-gray-400 font-medium">Camiler · Kiliseler · Türbeler</div>
            </div>
            <a href="#" className="kart-link text-xs font-semibold text-gray-800 flex items-center justify-between pt-4 border-t border-gray-100 hover:text-amber-900">
              <span>Temayı keşfet</span> <span>→</span>
            </a>
          </div>

          {/* Tema 2 */}
          <div className="tema-kart bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between h-72">
            <div>
              <div className="kart-ikon w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 mb-6 font-serif">🏰</div>
              <h3 className="kart-baslik font-serif font-bold text-xl text-gray-900 mb-2">Tarihi Miras</h3>
              <p className="kart-aciklama text-gray-500 text-xs leading-relaxed">Sokakların, yapıların ve yüzyılların hafızası.</p>
              <div className="kart-alt-etiket mt-4 text-[11px] text-gray-400 font-medium">Çarşı · Hamam · Köprüler</div>
            </div>
            <a href="#" className="kart-link text-xs font-semibold text-gray-800 flex items-center justify-between pt-4 border-t border-gray-100 hover:text-amber-900">
              <span>Temayı keşfet</span> <span>→</span>
            </a>
          </div>

          {/* Tema 3 */}
          <div className="tema-kart bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between h-72">
            <div>
              <div className="kart-ikon w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 mb-6 font-serif">🌳</div>
              <h3 className="kart-baslik font-serif font-bold text-xl text-gray-900 mb-2">Doğa Alanları</h3>
              <p className="kart-aciklama text-gray-500 text-xs leading-relaxed">Şehrin ritminden uzak, doğayla yan yana.</p>
              <div className="kart-alt-etiket mt-4 text-[11px] text-gray-400 font-medium">Kent Ormanları · Denizler</div>
            </div>
            <a href="#" className="kart-link text-xs font-semibold text-gray-800 flex items-center justify-between pt-4 border-t border-gray-100 hover:text-amber-900">
              <span>Temayı keşfet</span> <span>→</span>
            </a>
          </div>

          {/* Tema 4 */}
          <div className="tema-kart bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between h-72">
            <div>
              <div className="kart-ikon w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 mb-6 font-serif">🏛️</div>
              <h3 className="kart-baslik font-serif font-bold text-xl text-gray-900 mb-2">Müzeler</h3>
              <p className="kart-aciklama text-gray-500 text-xs leading-relaxed">Geçmişi ve sanatı aynı çatı altında keşfet.</p>
              <div className="kart-alt-etiket mt-4 text-[11px] text-gray-400 font-medium">Arkeoloji · Sanat · Kent Kültürü</div>
            </div>
            <a href="#" className="kart-link text-xs font-semibold text-gray-800 flex items-center justify-between pt-4 border-t border-gray-100 hover:text-amber-900">
              <span>Temayı keşfet</span> <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Şehirler */}
      {/* 5. YENİ BİR ŞEHRE MERHABA (ŞEHİR KARTLARI) */}
      <section className="sehir-bolumu max-w-7xl mx-auto px-8 py-16">
        <div className="sehir-baslik-alan flex justify-between items-end mb-10">
          <div>
            <span className="kucuk-baslik text-amber-800 text-xs font-bold tracking-widest uppercase">YOLCULUĞA BİR ŞEHİRLE BAŞLA</span>
            <h2 className="ana-baslik text-3xl font-serif font-bold text-gray-900 mt-1">Yeni bir şehre merhaba.</h2>
            <p className="alt-aciklama text-gray-500 text-sm mt-1">Kimi zaman bir sokak, kimi zaman bir manzara. Bir sonraki keşfin için ilham al.</p>
          </div>
          <a href="#" className="tumunu-gor text-sm font-semibold text-gray-800 hover:text-amber-900 flex items-center space-x-1">
            <span>Tüm şehirler</span> <span>↗</span>
          </a>
        </div>

        <div className="sehir-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Şehir 1: İstanbul */}
          <div className="sehir-kart bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="sehir-gorsel relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${istanbulGorsel})` }}>
              <span className="favori-ikon absolute top-4 right-4 bg-white/80 p-2 rounded-full cursor-pointer hover:bg-white">🤍</span>
              <span className="sehir-etiket absolute bottom-4 left-4 bg-white px-4 py-1.5 rounded-xl font-serif font-bold text-sm shadow">İstanbul</span>
            </div>
            <div className="sehir-detay p-6">
              <span className="kategori-etiket text-[10px] font-bold text-amber-800 uppercase tracking-wider">TARİH & KÜLTÜR</span>
              <h3 className="sehir-baslik font-serif font-bold text-2xl text-gray-900 mt-1 mb-2">İki kıta, binbir hikâye.</h3>
              <p className="sehir-alt-metin text-gray-500 text-xs mb-6">Tarihi Yarımada · Boğaz · Hanlar</p>
              <a href="#" className="sehir-link text-xs font-semibold text-gray-800 flex items-center justify-between pt-4 border-t border-gray-100 hover:text-amber-900">
                <span>Şehir rehberini aç</span> <span>→</span>
              </a>
            </div>
          </div>

          {/* Şehir 2: Edirne */}
          <div className="sehir-kart bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="sehir-gorsel relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${edirneGorsel})` }}>
              <span className="favori-ikon absolute top-4 right-4 bg-white/80 p-2 rounded-full cursor-pointer hover:bg-white">🤍</span>
              <span className="sehir-etiket absolute bottom-4 left-4 bg-white px-4 py-1.5 rounded-xl font-serif font-bold text-sm shadow">Edirne</span>
            </div>
            <div className="sehir-detay p-6">
              <span className="kategori-etiket text-[10px] font-bold text-amber-800 uppercase tracking-wider">TARİH & MİMARİ</span>
              <h3 className="sehir-baslik font-serif font-bold text-2xl text-gray-900 mt-1 mb-2">Osmanlı'nın taç şehri.</h3>
              <p className="sehir-alt-metin text-gray-500 text-xs mb-6">Selimiye · Ali Paşa Çarşısı · Kırkpınar</p>
              <a href="#" className="sehir-link text-xs font-semibold text-gray-800 flex items-center justify-between pt-4 border-t border-gray-100 hover:text-amber-900">
                <span>Şehir rehberini aç</span> <span>→</span>
              </a>
            </div>
          </div>

          {/* Şehir 3: Nevşehir */}
          <div className="sehir-kart bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="sehir-gorsel relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${nevsehirGorsel})` }}>
              <span className="favori-ikon absolute top-4 right-4 bg-white/80 p-2 rounded-full cursor-pointer hover:bg-white">🤍</span>
              <span className="sehir-etiket absolute bottom-4 left-4 bg-white px-4 py-1.5 rounded-xl font-serif font-bold text-sm shadow">Nevşehir</span>
            </div>
            <div className="sehir-detay p-6">
              <span className="kategori-etiket text-[10px] font-bold text-amber-800 uppercase tracking-wider">DOĞA & KEŞİF</span>
              <h3 className="sehir-baslik font-serif font-bold text-2xl text-gray-900 mt-1 mb-2">Yeryüzünün başka bir hâli.</h3>
              <p className="sehir-alt-metin text-gray-500 text-xs mb-6">Göreme · Uçhisar · Ihlara Vadisi</p>
              <a href="#" className="sehir-link text-xs font-semibold text-gray-800 flex items-center justify-between pt-4 border-t border-gray-100 hover:text-amber-900">
                <span>Şehir rehberini aç</span> <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rota Oluşturma */}
      <section className="rota-olusturma-bolumu max-w-7xl mx-auto px-8 py-20">
        <div className="rota-kapsayici bg-[#F3EFE6] rounded-3xl p-12 border border-[#E5DFD3] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <span className="kucuk-baslik text-amber-800 text-xs font-bold tracking-widest uppercase">ROTANIN YAZARI SENSİN</span>
            <h2 className="ana-baslik text-4xl font-serif font-bold text-gray-900 mt-2 mb-4 leading-tight">
              Beğendiğin duraklar, sana ait bir rota.
            </h2>
            <p className="alt-aciklama text-gray-600 text-sm leading-relaxed mb-8">
              Merak ettiğin yerleri favorilerine ekle. Profilindeki favorilerden bir gezi planı oluştur, gününü kendi ritmine göre düzenle.
            </p>

            <div className="adimlar-listesi space-y-6 mb-10">
              <div className="adim flex items-start space-x-4">
                <span className="adim-sayi font-serif text-2xl font-bold text-amber-800">01</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Keşfet ve kaydet</h4>
                  <p className="text-gray-500 text-xs">Gitmek istediğin durakları favorile.</p>
                </div>
              </div>
              <div className="adim flex items-start space-x-4">
                <span className="adim-sayi font-serif text-2xl font-bold text-amber-800">02</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Planına ekle</h4>
                  <p className="text-gray-500 text-xs">Favorilerinden yolculuğunu bir araya getir.</p>
                </div>
              </div>
              <div className="adim flex items-start space-x-4">
                <span className="adim-sayi font-serif text-2xl font-bold text-amber-800">03</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Sırala ve yola çık</h4>
                  <p className="text-gray-500 text-xs">Duraklarını sana uygun bir akışa yerleştir.</p>
                </div>
              </div>
            </div>

            <button className="plan-btn">
              <span>Kendi Planını Oluştur</span>
              <span>→</span>
            </button>
          </div>

          {/* Ornek Gezi Görseli */}
          <div className="gezi">
            <img 
              src={ornekGeziGorsel} 
              alt="Edirne Gezi Planı Örneği" 
            />
          </div>

        </div>
      </section>
      {/* FOOTER */}
      <footer className="alt-bilgi-bolumu bg-[#F5F1E9] border-t border-gray-200 mt-20">
        <div className="alt-bilgi-icerik max-w-7xl mx-auto px-8 py-16">
          <div className="alt-cagri-kutusu flex flex-col md:flex-row justify-between items-center bg-[#FAF8F5] p-12 rounded-3xl border border-gray-200/60 mb-16">
            <div>
              <span className="kucuk-baslik text-amber-800 text-xs font-bold tracking-widest uppercase">MODERN SEYYAH</span>
              <h2 className="ana-baslik text-3xl font-serif font-bold text-gray-900 mt-1">Yeni bir hikâye hangi şehirde başlasın?</h2>
              <p className="alt-aciklama text-gray-500 text-sm mt-1">Merakını yanına al. Şehrini seç, kendi yolculuğunu yaz.</p>
            </div>
            <button className="cagri-buton mt-6 md:mt-0 bg-[#112233] hover:bg-[#1a334e] text-white px-8 py-4 rounded-xl font-medium text-sm flex items-center space-x-2 transition shadow-md">
              <span>Şehrini Keşfet</span> <span>→</span>
            </button>
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

export default Anasayfa;
