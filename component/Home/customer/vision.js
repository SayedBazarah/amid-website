import Style from "./vision.module.css";

export default function Vision(props) {
  return (
    <div className={Style.container}>
      <h2>ما هيا روايتنا؟</h2>
      <p>{props.vision}</p>
    </div>
  );
}
