import "./entry.css";

export default function Entry() {
  return (
    <main>
      <section className="section1">
        <img
          src="/images/mount_fuji.jpg"
          alt="Mount Fuji"
          className="japanImg"
        />
        <img src="/images/marker.png" alt="pointy marker" className="marker" />
        <div>
          <span className="japanText">Japan</span>
          <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
            View on Google Maps
          </a>
          <h1 className="nameLabel">Mount Fuji</h1>
          <br />
          <span>12 Jan, 2021 - 24 Jan, 2021</span>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776{" "}
            <br />
            meters (12,380 feet). Mount Fuji is the single most popular tourist{" "}
            <br />
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </section>
    </main>
  );
}
