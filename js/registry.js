/**
 * Study Hub course registry.
 *
 * Each course has its own copy under pages/ — independent of originals elsewhere.
 *
 * Types:
 * - iframe: e.g. pages/ccna/index.html (copy your HTML site into pages/<id>/).
 * - txt-chapters: load a script under pages/<id>/ that sets a global array (see techplus).
 * - placeholder: “coming soon” card.
 */
window.STUDY_HUB_COURSES = [
  {
    id: "ccna",
    title: "CCNA",
    description: "Hub copy in pages/ccna/ — update this copy by hand; not linked to CCNA_Notes.html.",
    type: "iframe",
    src: "./pages/ccna/index.html?embed=1",
  },
  {
    id: "techplus",
    title: "Tech+",
    description: "Hub copy: TXT chapters in pages/techplus/notes.js (edit only this Study Hub file).",
    type: "txt-chapters",
    notesGlobal: "TECHPLUS_NOTES",
  },
  {
    id: "more",
    title: "More courses",
    description:
      "Add pages/your-course/ with index.html (iframe) or notes.js + registry txt-chapters entry.",
    type: "placeholder",
  },
];
