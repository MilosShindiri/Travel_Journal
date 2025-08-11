import "./entry.css";

export default function Entry(props) {
  return (
    <section className="section1">
      <img src={props.img.src} alt={props.img.alt} className="japanImg" />
      <img src="./images/marker.png" alt="pointy marker" className="marker" />
      <div>
        <span className="japanText">{props.country}</span>
        <a href={props.googleMapsLink}>View on Google Maps</a>
        <h1 className="nameLabel">{props.title}</h1>
        <br />
        <span>{props.dates}</span>
        <p>{props.text}</p>
      </div>
    </section>
  );
}
