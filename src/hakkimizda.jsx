import logo from './assets/logo_2_2.png';
import { Link } from 'react-router-dom';

function Hakkimizda() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1e293b] font-sans">

    {/* Hakkımızda Yazı Bölümü*/}
    <section className= "hakkimizda-yazi">  
        <div> 
        <h2>Biz Kimiz?</h2>
        <br />
        <p>Seyyahname; sadece turistik noktaları listeleyen sıradan bir rehber değil, gezgin ruhlar için kültür, keşif ve günlük ihtiyaçları tek bir çatı altında birleştiren modern bir şehir rehberidir.</p>
        <br />
        <h2>Yolculuğumuz Nasıl Başladı?</h2>
        <br />
        <p>Bu hikâye, Trakya Üniversitesi Yönetim Bilişim Sistemleri bölümündeki akademik bir proje dersinin heyecanıyla ve "Yeni bir hikâye hangi şehirde başlasın?" meraka dayalı sorusuyla doğdu. Edirne başta olmak üzere Trakya’nın köklü tarihini, gizli kalmış lezzetlerini ve kültürel mirasini dijital dünya ile buluşturma hayalimiz, gün geçtikçe büyüyen dinamik bir platforma dönüştü.</p>
        <br />
        <h2>Ne Yapıyoruz?</h2>
        <br />
        <p>Şehir içerisinde size rehber olacak Seyyahname; gittiğiniz şehirde neleri gezebileceğinizi, nerede konaklayabileceğinizi, en popüler yemek noktalarını ve tüm temel ihtiyaçlarınızı kolayca bulmanızı sağlar. Amacımız, seyahat planlarınızı zahmetsiz hale getirmek ve size kendi şehrinizde bile keşif heyecanı yaşatmaktır.</p>
        <br />
        <i>“Yolculuk geçer, hikâyesi kalır. Biz de bu hikâyeyi sizinle yazmak için buradayız.”</i>
        </div>
    </section>

{/* Ekip */}
<section className="max-w-7xl mx-auto px-8 my-20">

  <div className="ekip-baslik text-center max-w-2xl mx-auto mb-12">
    <br />
    <h2 className="text-3xl font-serif font-bold text-gray-900 mt-1">Seyyahname'yi Kimler Kurdu?</h2>
    <br />
  </div>

  <div className="ekip-grid">
    
    {/* 1. Kişi */}
    <div className="ekip-kart">
      <h3 className="font-bold text-gray-900 text-base">Tezcan Hasan Terzi</h3>
      <p className="text-amber-800 text-xs font-semibold mt-1">Frontend & UI/UX</p>
      <p className="text-gray-500 text-xs mt-3 leading-relaxed">Seyyahname arayüzünün ve mimarisinin geliştirilmesi.</p>
    </div>

    {/* 2. Kişi */}
    <div className="ekip-kart">
      <h3 className="font-bold text-gray-900 text-base">Ayşe Kaçakoğlu</h3>
      <p className="text-amber-800 text-xs font-semibold mt-1">Backend & Database</p>
      <p className="text-gray-500 text-xs mt-3 leading-relaxed">Supabase entegrasyonu ve veri tabanı yönetimi.</p>
    </div>

    {/* 3. Kişi */}
    <div className="ekip-kart">
      <h3 className="font-bold text-gray-900 text-base">Zeynep Beyza Erdoğan</h3>
      <p className="text-amber-800 text-xs font-semibold mt-1">Tasarım & İçerik</p>
      <p className="text-gray-500 text-xs mt-3 leading-relaxed">Görsel kimlik, slaytlar ve içerik yönetimi.</p>
    </div>

    {/* 4. Kişi */}
    <div className="ekip-kart">
      <h3 className="font-bold text-gray-900 text-base">Sılanur Özhan</h3>
      <p className="text-amber-800 text-xs font-semibold mt-1">Test & Raporlama</p>
      <p className="text-gray-500 text-xs mt-3 leading-relaxed">Proje testleri, süreç takibi ve sunum hazırlığı.</p>
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

export default Hakkimizda;
