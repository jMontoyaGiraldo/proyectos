import estilos from "./about.module.css";
import imagen from "../rick-and-morty/detectiveMorty.png";

export default function About() {
  return (
    <div className={estilos.contenedor}>
      <img src={imagen} alt="detective morty" />
      <h1>rick and morty investigations</h1>
      <div className={estilos.texto}>
        <p>
          Yo Detective Morty, me sumerjo en un vasto multiverso donde los Ricks
          reinan con su intelecto descomunal.
          <br />
          <br /> Mi dedicación inquebrantable me impulsa a investigar los
          secretos ocultos de este cosmos aparentemente
          caótico.
          <br />
          <br /> Consciente de la implacable realidad que nos rodea, busco
          compartir mis descubrimientos, esperando que brinden comprensión y
          consuelo en un mundo tan complejo, rato de encontrar sentido en un universo donde aquellos que
          no somos Ricks enfrentamos desafíos constantes.
          <br />
          <br />
          mantengo la perspectiva sabiendo que cada descubrimiento cuenta y puede aportar una
          chispa de esperanza en medio de la adversidad.
        </p>
      </div>
    </div>
  );
}
