import { Routes, Route } from 'react-router-dom';
import Header from './header.jsx'; // Dosya adın küçük harfle 'header.jsx' görünüyorsa bu şekilde import edilir
import Anasayfa from './anasayfa.jsx';
import Hakkimizda from './hakkimizda.jsx';
import Iletisim from './iletisim.jsx';
import GirisYap from './girisyap.jsx';
import Kayitol from './kayitol.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1e293b] font-sans flex flex-col justify-between">
      {/* Header tüm sayfalarda en üstte otomatik görünür */}
      <Header />

      {/* Sayfalar buraya dinamik olarak yüklenir */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/girisyap" element={<GirisYap />} />
          <Route path="/kayitol" element={<Kayitol />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;