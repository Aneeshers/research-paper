window.PAPER_SITE = {
  meta: {
    title: "Paper Template",
    description:
      "A minimal paper-style project page template with Berkeley Mono typography and flattened sections.",
    ogImage: "assets/figures/placeholder-wide.svg",
  },
  paper: {
    title: "Paper Template",
    authors: [
      { name: "First Author", href: "#" },
      { name: "Second Author", href: "#" },
      { name: "Third Author", href: "#" },
    ],
    links: [
      { label: "GitHub", href: "#", icon: "assets/icons/github.png" },
      { label: "arXiv", href: "#", icon: "assets/icons/arxiv-square.svg" },
      { label: "Colab", href: "#", icon: "assets/icons/colab.png" },
      { label: "Pypi", href: "#", icon: "assets/icons/python.png" },
    ],
    abstract:
      "A minimal static project page for technical papers. The layout stays flat, the typography stays monochrome, and the content is meant to read like a finished research artifact rather than a product site.",
  },
  highlight:
    "Edit `content.js` to swap the title, authors, links, and sections. The whole page stays flat, with Berkeley Mono across the UI and a single highlighted paragraph for emphasis.",
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This template keeps the first screen as quiet as possible: author links, small icon buttons, a short abstract, then the rest of the content in a single column.",
            "The goal is to stay close to a clean paper companion while keeping the page easy to reuse for different projects.",
          ],
        },
      ],
    },
    {
      id: "method",
      title: "Method",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Use plain prose, equations, and figures without boxed containers or decorative surfaces. The content should do the work, not the chrome around it.",
          ],
        },
        {
          type: "equation",
          tex: String.raw`\theta^\star = \arg\max_{\theta} \mathbb{E}\left[\sum_{t=0}^{T} r_t\right]`,
          note: "Inline and display math still render through KaTeX.",
        },
        {
          type: "code",
          language: "python",
          code: String.raw`from torch.optim import Adam

optimizer = start_trac(Adam)(model.parameters(), lr=1e-3)
optimizer.zero_grad()
optimizer.step()`,
        },
      ],
    },
    {
      id: "results",
      title: "Results",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Figures should sit directly in the flow. Keep them simple, wide, and unframed unless the image itself needs a boundary.",
          ],
        },
        {
          type: "figureGrid",
          columns: 2,
          items: [
            {
              src: "assets/figures/placeholder-results.svg",
              alt: "Placeholder results figure",
              caption: "Main quantitative result or comparison panel.",
            },
            {
              src: "assets/figures/placeholder-square.svg",
              alt: "Placeholder ablation figure",
              caption: "Ablation, failure case, or supporting visualization.",
            },
          ],
        },
      ],
    },
    {
      id: "notes",
      title: "Notes",
      blocks: [
        {
          type: "bullet",
          items: [
            "Replace the author links in `content.js` with real profiles.",
            "Swap the icon-button targets for GitHub, arXiv, and PDF URLs.",
            "Replace the placeholder figures with your project assets.",
          ],
        },
      ],
    },
  ],
  footer: {
    left: "Reusable static paper-site template.",
    right: "Edit `content.js` and replace the placeholder figures in `assets/figures/`.",
  },
};
