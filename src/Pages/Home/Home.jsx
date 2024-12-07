import { useState } from "react";
import flags from "../../../src/assets/image/flags.png";
import logo from "../../../src/assets/image/logo.png";
import aboutImg from "../../../src/assets/image/about-img.jpg";
import Slider from "react-slick";
import Responsive from "../../Components/Slider";
const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 30;
    const y = (e.clientY - window.innerHeight / 2) / 30;
    setPosition({ x, y });
  };

  return (
    <div style={{ overflow: "hidden" }} onMouseMove={handleMouseMove}>
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
                  <button className="btn">Indi Qoşul</button>
                  <img
                    className="banner-1"
                    src="https://thepixelcurve.com/edubin/lp/wp-content/uploads/sites/2/2024/04/EDUBIN0603-1.png"
                    alt=""
                    style={{
                      transform: `translate(${position.x}px, ${position.y}px)`,
                      transition: "transform 0.1s ease",
                    }}
                  />
                  {/* <img
                    className="banner-4 rp-none"
                    src="https://thepixelcurve.com/edubin/lp/wp-content/uploads/sites/2/2024/04/EDUBIN0602-1.png"
                    alt=""
                    style={{
                      transform: `translate(${-position.x}px, ${-position.y}px)`,
                      transition: "transform 0.1s ease",
                    }}
                  /> */}
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <div className="hero-right">
                  <div className="flags-img">
                    <img
                      data-aos="fade-left"
                      src={flags}
                      alt=""
                      style={{
                        transform: `translate(${position.x / 2}px, ${
                          position.y / 2
                        }px)`,
                        transition: "transform 0.1s ease",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="about">
        <div className="container">
          <div className="about-con">
            <div className="row">
              <div data-aos="fade-right" className="col-md-6 col-sm-12 col-12">
                <div>
                  <img className="about-img " src={aboutImg} alt="" />
                </div>
              </div>
              <div data-aos="fade-left" className="col-md-6 col-sm-12 col-12">
                <div className="right">
                  <h2>Haqqımızda</h2>
                  <p>
                    Kursumuz 2019-cu ildən fəaliyyət göstərir və bu müddət
                    ərzində 2000-dən çox tələbə xidmətimizdən yararlanıb. Biz
                    tələbələrimizə fərdi yanaşma, müasir tədris metodikaları və
                    yüksək standartlara uyğun keyfiyyətli təhsil təqdim edirik.
                    Kurslarımız həm başlanğıc səviyyəsində olanlar, həm də
                    biliklərini peşəkar səviyyədə artırmaq istəyən şəxslər üçün
                    nəzərdə tutulub. Tədris prosesini peşəkar müəllimlər və
                    ixtisaslı mütəxəssislər həyata keçirir. Onların hər biri öz
                    sahəsində geniş təcrübəyə malikdir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Responsive />
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
      <footer>
        <div className="container">
          <div className="footer-con">
            <img src={logo} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
