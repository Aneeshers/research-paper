window.PAPER_SITE = {
  meta: {
    title: "Project Title",
    description:
      "A reusable static template for technical paper websites with clean typography, KaTeX support, and a research-code aesthetic.",
    ogImage: "assets/figures/placeholder-wide.svg",
  },
  paper: {
    status: "Conference 20XX submission",
    title: "Project Title: A Clean, Technical Paper Page Template",
    subtitle:
      "A reusable template for research project pages with minimal styling, math support, and figure-first storytelling.",
    abstract:
      "This template is designed for papers that benefit from a simple, technical presentation. It avoids gradients, oversized marketing blocks, and ornamental styling. Instead, it emphasizes equations, figures, concise prose, and a layout that feels closer to a research artifact than a product page.",
    authors: [
      { name: "First Author", affiliation: "Institution A" },
      { name: "Second Author", affiliation: "Institution B" },
      { name: "Third Author", affiliation: "Institution C" },
    ],
    links: [
      { label: "Paper", href: "#" },
      { label: "Code", href: "#" },
      { label: "arXiv", href: "#" },
    ],
  },
  highlights: [
    { value: "1", label: "single content file to edit for a new paper" },
    { value: "0", label: "gradients, shadows, or decorative hero effects" },
    { value: "\\(\\LaTeX\\)", label: "math rendering via KaTeX" },
    { value: "HTML", label: "static output deployable on GitHub Pages" },
  ],
  sections: [
    {
      id: "overview",
      label: "Overview",
      title: "What this template is for",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Use this template for project pages that should feel like a paper companion rather than a promotional landing page. The default layout is narrow, white, typographic, and figure-focused.",
            "Most customization happens in <code>content.js</code>. Replace the title, abstract, authors, links, and sections, then swap in your own figures under <code>assets/figures/</code>.",
          ],
        },
        {
          type: "list",
          title: "Default design constraints",
          items: [
            "White background with thin gray rules and restrained accents.",
            "Berkeley Mono for titles, labels, and technical metadata.",
            "IBM Plex Sans for body copy and readable explanatory text.",
            "KaTeX support for inline math like $V^\\pi(s)$ and display math.",
          ],
        },
      ],
    },
    {
      id: "method",
      label: "Method",
      title: "A math-first section can mix prose, equations, and diagrams",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This section demonstrates the intended tone. You can explain the core mechanism, add a compact equation card, and place a figure nearby without needing a build step or framework.",
          ],
        },
        {
          type: "equation",
          title: "Example objective",
          tex: String.raw`\pi^\star = \arg\max_{\pi \in \Pi} \mathbb{E}_{\tau \sim p_\pi(\tau)} \left[\sum_{t=0}^{T} r_t \right]`,
          note:
            "Equation blocks render with KaTeX automatically. Inline math also works in paragraph text.",
        },
        {
          type: "figure",
          src: "assets/figures/placeholder-diagram.svg",
          alt: "Placeholder diagram",
          caption:
            "Replace this with your method figure, system diagram, or algorithm overview.",
        },
      ],
    },
    {
      id: "results",
      label: "Results",
      title: "Figures should lead the page",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The default result layout favors large figures and short interpretation. For most papers, that is a better ratio than dense marketing copy.",
          ],
        },
        {
          type: "figureGrid",
          columns: 2,
          items: [
            {
              src: "assets/figures/placeholder-results.svg",
              alt: "Placeholder results chart",
              caption: "Main quantitative result.",
            },
            {
              src: "assets/figures/placeholder-square.svg",
              alt: "Placeholder ablation figure",
              caption: "Ablation, interpretability, or failure case.",
            },
          ],
        },
      ],
    },
    {
      id: "discussion",
      label: "Discussion",
      title: "Keep the ending concise and technical",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A clean project page usually ends with a short takeaway, limitations, or deployment note. It does not need a second hero section or a large call-to-action.",
            "If you want appendix material, add another section with extra figures instead of forcing everything into the top of the page.",
          ],
        },
      ],
    },
  ],
  footer: {
    left: "Reusable static paper-site template.",
    right: "Edit content in <code>content.js</code> and replace assets in <code>assets/figures/</code>.",
  },
};
