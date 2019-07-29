function App() {
  return (
    <div className="app">
      <header>
        <h1>Sally Student Resume</h1>
      </header>
      <main>
  <h2>Saly's Information</h2>
  <img width="200px" src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="Saly's Photo" />
</main>

<address>
  <a href="mailto:fabianlemac@gmail.com">fabianlemac@gmail.com</a>
  <a href="tel:+16128075426">(612) 807-5426</a>
</address>

<section>
  <h1>Education</h1>
  <ul>
    <li>
      <h3>College</h3>
      <p>Sally's College
      Mineapolis, MN</p>

    </li>
  </ul>
</section>

<section>
  <h1>Employment History</h1>
  <ul>
    <li>
      <h3>Company 1</h3>
      <p>Role 1, 01/2011 - 12/2015</p>
      <p>There should be a section for Sally's employment history, and it should contain at least two entries. Each entry should show the company name, job title, dates of employment, and a short description of the job (for this last bit, feel free to use lorem ipsum filler text).</p>
    </li>
    <li>
      <h3>Company 2</h3>
      <p>Role 2, 01/2016 - 12/2019</p>
      <p lang="es">Este parrafo solo es un aprueba de lectura en lenguaje diferente.</p>
    </li>
  </ul>
</section>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('application-root')
);
