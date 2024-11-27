import flags from "../../../src/assets/image/flags.png";
import logo from "../../../src/assets/image/logo.png";
const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <main className="hero">
        <div className="container">
          <div className="hero-con">
            <div className="hero-nav">
              <div className="logo-block">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 col-12">
                <div data-aos="fade-right" className="hero-left">
                  <p>Uğura gedən yol buradan başlayır!</p>
                  <span>Peşəkar təlimlərlə gələcəyini qur!</span> <br />
                  {/* <img src="https://skillgro-react.netlify.app/assets/img/banner/banner_shape01.png" alt="" /> */}
                  <button className="btn">Indi Qoşul</button>
                  <img
                    className="banner-1"
                    src="https://thepixelcurve.com/edubin/lp/wp-content/uploads/sites/2/2024/04/EDUBIN0603-1.png"
                    alt=""
                  />
                  <img
                    className="banner-4 rp-none"
                    src="https://thepixelcurve.com/edubin/lp/wp-content/uploads/sites/2/2024/04/EDUBIN0602-1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <div className="hero-right">
                  <div className="flags-img">
                    <img data-aos="fade-left" src={flags} alt="" />
                  </div>
                  <div>
                    <img
                      className="banner-2"
                      src="https://skillgro-react.netlify.app/assets/img/banner/banner_shape02.png"
                      alt=""
                    />
                    <img
                      className="banner-3 dp-none"
                      src="https://thepixelcurve.com/edubin/lp/wp-content/uploads/sites/2/2024/04/EDUBIN0602-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="service">
        <h3 className="text-center">Xidmətlər</h3>
        <div className="container">
          <div className="cards">
            <div className="row g-5">
              <div className="col-md-4 col-sm-6 col-12">
                <div data-aos="zoom-out-right" className="card p-2">
                  <div>
                    <img
                      src="https://media.istockphoto.com/id/880562092/vector/great-britain-united-kingdom-flag.jpg?s=612x612&w=0&k=20&c=z6Qg_O-2pIcreAK3Fb8X003h2HRIFiRWNT8cg7hDfFo="
                      alt=""
                    />
                  </div>
                  <div>
                    <h2>Ingilis Dili</h2>
                    <p>
                      Bu kurs sizə ingilis dilində ünsiyyət qurmaq, məqalə
                      oxumaq və iş yerində daha effektiv olmaq imkanı verəcək.
                      Başlanğıc və orta səviyyələr üçün uyğundur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="card p-2"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"
                    alt=""
                  />
                  <h2>Rus Dili</h2>
                  <p>
                    Bu kurs vasitəsilə rus dilinin əsaslarını öyrənəcək,
                    gündəlik danışıqlarda istifadə edə biləcək və rus dilində
                    yazışma bacarıqlarınızı inkişaf etdirəcəksiniz. Həmçinin,
                    rus mədəniyyəti və adətləri haqqında da bilgilər əldə
                    edəcəksiniz.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div data-aos="zoom-out-left" className="card p-2">
                  <img
                    src="https://tercuman.az/wp-content/uploads/Alman-diline-tercume.jpg"
                    alt=""
                  />
                  <h2>Alman Dili</h2>
                  <p>
                    Bu kurs sizə alman dilində ünsiyyət qurmaq, əsas dil
                    qrammatikası və lüğətini mənimsəmək imkanı verəcək. Kurs,
                    həm yazılı həm də şifahi ünsiyyət bacarıqlarınızı artırmaq
                    üçün dizayn edilmişdir. Başlanğıc və orta səviyyələr üçün
                    idealdır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
