import ProductCard from './ProductCard';
import './App.css';

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ProductCard
        name="Lego Indiana Jones"
        price="32"
        activibility="Polska"
        genre="adventure"
        imageSrc="https://upload.wikimedia.org/wikipedia/en/e/ed/Lego_Indiana_Jones_cover.jpg"
      />
      <ProductCard
        name="Lego Batman"
        price="30"
        activibility="Swiat"
        genre="adventure"
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxoW2ShuR5mlIWkSNNGFGep6RAWwP90pAQg&s"
      />
      <ProductCard
        name="Lego Batman 2"
        price="42"
        activibility="Europa"
        genre="adventure"
        imageSrc="https://cdn1.epicgames.com/offer/cb23c857ec0d42d89b4be34d11302959/batman_1200x1600-d388972fd0a20881901f3946cb1c97f9"
      />
      <ProductCard
        name="Fifa"
        price="240"
        activibility="Niemcy"
        genre="sport"
        imageSrc="https://s2.tvp.pl/images2/2/5/5/uid_255d05c3591c4ec8a0f5676a24dd064e_width_1200_play_0_pos_0_gs_0_height_678_na-okladce-ea-sports-fc-25-znalazl-sie-jude-bellingham-fot-xea-sports-fc.jpg"
      />
      <ProductCard
        name="Polytrack"
        price="0,06"
        activibility="Stany Zjednoczone"
        genre="Wyscigi"
        imageSrc="https://i.ytimg.com/vi/_EkSwZz0_Ls/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADUcEJEiY8McWeCDatRe4B7-WiRQ"
      />
      <ProductCard
        name="Call of duty"
        price="10"
        activibility="Rosja"
        genre="Strzelanka"
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRPf1F8j-hbOzAcRAQ4lkECicU8xbOqjE8Q&s"
      />
    </div>
  );
}

export default App;
