import Header from "/components/Header";
import Entry from "/components/Entry";
import data from "/data.js";

export default function App() {
  console.log(data);
  const entryElements = data.map((element) => {
    return (
      <Entry
        key={element.id}
        img={element.img}
        title={element.title}
        country={element.country}
        googleMapsLink={element.googleMapsLink}
        text={element.text}
        dates={element.dates}
      />
    );
  });
  return (
    <>
      <Header />
      <main>
        {entryElements}

        {/*  
        <Entry
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji",
          }}
          title="Mount Fuji"
          country="Japan"
          googleMapsUrl="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          dates="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
        */}
      </main>
    </>
  );
}
