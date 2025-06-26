const sections = {
  "Início": {
    title: "Bem-vindo ao Frutiger Aero",
    body: `<p>Frutiger Aero , também conhecido como Web 2.0 Gloss (frequentemente chamado erroneamente de "Fruitiger Aero" ou "Fruitger Aero"), foi um estilo de design amplamente difundido que dominou diversos campos, incluindo publicidade, mídia, banco de imagens e tecnologia, de aproximadamente 2004 a 2013. Surgido após a estética do Y2K , o Frutiger Aero se distingue pelo uso extensivo de skeuomorphism , texturas brilhantes, paletas de cores vibrantes (especialmente verdes e azuis) e elementos inspirados na natureza, como céus nublados, peixes tropicais, água e bolhas. A estética também apresenta reflexos de lente, efeitos bokeh, padrões Abstract Tech , gradientes inspirados na aurora e o uso frequente da fonte Frutiger.</p>
           <img src="https://f4.bcbits.com/img/0037021825_71.jpg"
                alt="" style="width:100%;border-radius:12px;box-shadow:0 4px 8px rgba(0,0,0,0.2);">`
  },
  "Características": {
    title: "A estética da internet nos anos 2000",
    body: `
      <div class="card"><h3></h3><p>Com interfaces semitransparentes, acabamentos translúcidos e efeito de brilho<br></br> Há pouco mais de 20 anos surgia a internet dos anos 2000, ou melhor, o seu desing único</p></div>
      <div class="card"><h3>A internet nos anos 2000</h3><p>Nos anos 2000, a internet era lenta (discada), cheia de blogs, fóruns e mensageiros como MSN. Surgiram redes sociais como Orkut e MySpace, e o YouTube começou. <br></br> Foi uma era de criatividade, pirataria digital e descoberta online.</p></div>`
  },
  "Inspiraçoes": {
    title: "Exemplo de site",
    body: `<form id="formContato">
    <a href="https://frutiger-aero.org/frutiger-aero" target="_blank">https://frutiger-aero.org/frutiger-aero</a>
           </form><div id="resp" style="margin-top:10px;"></div>`
  }
};

function init() {
  const root = document.getElementById('root');
  root.innerHTML = `
    <div class="container">
      <header><h1>Frutiger Aero Dinâmico</h1>
        <nav>${Object.keys(sections).map(s=>`<button>${s}</button>`).join('')}</nav>
      </header>
      <main id="main"></main>
      <footer>© 2025 Frutiger Aero</footer>
    </div>`;
  
  document.querySelectorAll('nav button').forEach(btn => {
    btn.addEventListener('click', () => renderSection(btn.textContent));
  });
  
  renderSection("Início");
}

function renderSection(name)  {
  const sec = sections[name];
  const main = document.getElementById('main');
  main.innerHTML = `<h2>${sec.title}</h2>${sec.body}`;
  if(name === "Contato") setupForm();
}

function setupForm() {
  const form = document.getElementById('formContato');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const resp = document.getElementById('resp');
    resp.innerHTML = `<p style="background:var(--card-bg);padding:10px;border-radius:8px;">
      Obrigado, ${form.nome.value}! Recebemos sua mensagem.</p>`;
    form.reset();
  } );
}

window.addEventListener('DOMContentLoaded', init);
