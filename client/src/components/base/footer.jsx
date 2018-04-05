import React from 'react'

const Footer = () =>{
  return (
    <div>
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>Company<span>logo</span></h3>
        <h4>Menu</h4>
        <p class="footer-links">
      <a href="#">Pagina Principal</a>·
      <a href="#">Nosotros</a>·
      <a href="#">Proyectos</a>.
      <a href="#">Produccion:</a>
      <a href="#">Realizacion de Contenidos</a>-
      <a href="#">Seguimiento de Obra</a>-
      <a href="#">Documentales</a>-
      <a href="#">Colaboraciones</a>·
      <a href="#">Formacion</a>·
      <a href="#">Contacto</a>
    </p>
  </div>

  <div class="footer-center">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span>WeWork Insurgentes Sur 601</span>Ciudad de México, CDMX</p>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.338605682004!2d-99.17358945010832!3d19.397770546756995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff6dbd937075%3A0xe55255e6e570ba47!2sWeWork+Insurgentes+Sur+601!5e0!3m2!1sen!2smx!4v1522857467658" width="280" height="200"></iframe>
  </div>

  <div class="footer-right">
    <p class="footer-company-about">
      <span>Síguenos en:</span></p>
    <div class="footer-icons">
      <a href="https://www.youtube.com/channel/UCngt8ZTe2wlAAUnQtjNK4Sw"><img src="Logos/play-button-silhouette.png" height="50" width="50"/></a>
      <a href="https://www.facebook.com/opuslabmx/"><img src="Logos/facebook-logo-button.png" height="50" width="50"/></a><br />
      <a href="https://www.instagram.com/opuslabmx/"><img src="Logos/instagram-logo.png" height="50" width="50"/></a>
      <a href="https://vimeo.com/opuslabmx"><img src="Logos/social-vimeo-in-a-circle-logo.png" height="50" width="50"/></a>
      <a href="https://twitter.com/Opuslabmx"><img src="Logos/twitter.png" height="50" width="50"/></a>
    </div>
    <p class="footer-company-name">OpusLab Mx &copy; 2018</p>
  </div>
</footer>
</div>
  )
}

export default Footer;
