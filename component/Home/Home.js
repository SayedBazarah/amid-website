import Hero from "./hero/hero";
import Customer from "./customer/customer";
import Vision from "./customer/vision";
import Projects from "../projects/projects";
import Gallery from "./gallery/gallery";
import ConcreteTypes from "./concrete-types/concrete-types";
import Advertising from "../ads/ads";

export default function Home(props) {
  const { projects } = props;
  const galleryImages = [
    "ارضيات-خرسانة-1.jpeg",
    "ارضيات-خرسانة-2.jpeg",
    "ارضيات-خرسانة-3.jpeg",
  ];
  return (
    <div>
      <Hero />
      <Customer />
      <Vision vision="نسعي ان نكون شركة متخصصة رائدة في تنفيذ اعمال الارضيات / لاندسكيب بالخرسانة سواء كانت مطبوعة او هليكوبتر و ارضيات الايبوكسي" />
      <Projects projects={projects} />
      <Gallery galleryImages={galleryImages} />
      <ConcreteTypes />
      <Advertising />
    </div>
  );
}
