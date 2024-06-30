import './footer.css'

function Footer() {
  return (
    <section className='footer-container'>

      <article className='footer-links'>
        <a href="https://www.omdbapi.com/">
          <img className='img-one' src="src/assets/omdbapi.png" alt="logo" />
        </a>
        <a href="https://www.filmstaden.se/karlstad/?date=2024-04-18">
          <img className='img-two' src="src/assets/filmstaden.png" alt="logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=wg_AuKmgj5I">
          <img className='img-three' src="src/assets/youtube-ikon.png" alt="logo" />
        </a>
      </article>

      <article className='footer-about'>
        <h3>Developer Team</h3>

        <article className='developer-container'>
          <aside>
            <p>Rindert Van Dijk</p>
            <img className='flag' src="src/assets/swe.png" alt="swedishflag"/>
            <img className='flag' src="src/assets/holland.png" alt="Hollandflag" />
          </aside>

          <aside>
            <p>Jonas Stenelind</p>
            <img className='flag' src="src/assets/swe.png" alt="swedishflag"/>
          </aside>

          <aside>
            <p>Niklas Nilsson</p>
            <img className='flag' src="src/assets/swe.png" alt="swedishflag"/>
          </aside>
        </article>
      </article>
    </section>
  )
}

export default Footer
