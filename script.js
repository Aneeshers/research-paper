(function renderPaperSite() {
  const data = window.PAPER_SITE;
  if (!data) {
    throw new Error("PAPER_SITE is not defined.");
  }

  const $ = (id) => document.getElementById(id);

  const nav = $("nav");
  const toc = $("toc");
  const hero = $("hero");
  const metaGrid = $("meta-grid");
  const sectionsRoot = $("sections");
  const footer = $("footer");

  function updateMetadata() {
    document.title = data.meta.title;
    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (description) description.setAttribute("content", data.meta.description);
    if (ogTitle) ogTitle.setAttribute("content", data.meta.title);
    if (ogDescription) ogDescription.setAttribute("content", data.meta.description);
    if (ogImage) ogImage.setAttribute("content", data.meta.ogImage);
  }

  function authorMarkup(author) {
    return `
      <div class="author">
        <span class="author-name">${author.name}</span>
        <span class="author-affiliation">${author.affiliation}</span>
      </div>
    `;
  }

  function linkMarkup(link) {
    return `<a class="paper-link" href="${link.href}">${link.label}</a>`;
  }

  function renderHero() {
    hero.innerHTML = `
      <div class="hero-copy">
        <p class="status">${data.paper.status}</p>
        <h1>${data.paper.title}</h1>
        <p class="subtitle">${data.paper.subtitle}</p>
        <p class="abstract-label">Abstract</p>
        <p class="abstract">${data.paper.abstract}</p>
        <div class="link-row">
          ${data.paper.links.map(linkMarkup).join("")}
        </div>
      </div>
      <div class="hero-side">
        <div class="authors-card">
          <p class="card-label">Authors</p>
          <div class="authors-list">
            ${data.paper.authors.map(authorMarkup).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderHighlights() {
    metaGrid.innerHTML = data.highlights
      .map(
        (item) => `
          <article class="metric-card">
            <p class="metric-value">${item.value}</p>
            <p class="metric-label">${item.label}</p>
          </article>
        `
      )
      .join("");
  }

  function renderBlock(block) {
    if (block.type === "prose") {
      return `
        <div class="block prose-block">
          ${block.paragraphs.map((p) => `<p>${p}</p>`).join("")}
        </div>
      `;
    }

    if (block.type === "list") {
      return `
        <div class="block list-block">
          ${block.title ? `<p class="block-title">${block.title}</p>` : ""}
          <ul>
            ${block.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    if (block.type === "equation") {
      return `
        <div class="block equation-block">
          ${block.title ? `<p class="block-title">${block.title}</p>` : ""}
          <div class="equation-display">$$${block.tex}$$</div>
          ${block.note ? `<p class="equation-note">${block.note}</p>` : ""}
        </div>
      `;
    }

    if (block.type === "figure") {
      return `
        <figure class="block figure-block">
          <img src="${block.src}" alt="${block.alt}" />
          <figcaption>${block.caption}</figcaption>
        </figure>
      `;
    }

    if (block.type === "figureGrid") {
      return `
        <div class="block figure-grid columns-${block.columns || 2}">
          ${block.items
            .map(
              (item) => `
                <figure class="figure-block">
                  <img src="${item.src}" alt="${item.alt}" />
                  <figcaption>${item.caption}</figcaption>
                </figure>
              `
            )
            .join("")}
        </div>
      `;
    }

    return "";
  }

  function renderSections() {
    nav.innerHTML = data.sections
      .map((section) => `<a href="#${section.id}">${section.label}</a>`)
      .join("");

    toc.innerHTML = data.sections
      .map(
        (section, index) => `
          <a class="toc-link" href="#${section.id}">
            <span class="toc-index">${String(index + 1).padStart(2, "0")}</span>
            <span>${section.label}</span>
          </a>
        `
      )
      .join("");

    sectionsRoot.innerHTML = data.sections
      .map(
        (section, index) => `
          <section class="paper-section" id="${section.id}">
            <div class="section-heading">
              <p class="section-index">${String(index + 1).padStart(2, "0")}</p>
              <div>
                <p class="section-label">${section.label}</p>
                <h2>${section.title}</h2>
              </div>
            </div>
            <div class="section-body">
              ${section.blocks.map(renderBlock).join("")}
            </div>
          </section>
        `
      )
      .join("");
  }

  function renderFooter() {
    footer.innerHTML = `
      <p>${data.footer.left}</p>
      <p>${data.footer.right}</p>
    `;
  }

  function renderMath() {
    if (typeof renderMathInElement !== "function") {
      return;
    }

    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
      ],
      throwOnError: false,
    });
  }

  updateMetadata();
  renderHero();
  renderHighlights();
  renderSections();
  renderFooter();
  renderMath();
})();
