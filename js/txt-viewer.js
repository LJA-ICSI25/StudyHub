/**
 * Renders a CCNA-style sidebar + chapter panes from [{ id?, title, txt?, html? }, ...].
 * Use `html` for semantic markup (h3, ul, .note, .example, .key-concept) like CCNA chapters;
 * otherwise `txt` is shown in a monospace pre block.
 */
(function () {
  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalizeId(s) {
    const cleaned = String(s || "")
      .trim()
      .toLowerCase()
      .replaceAll(/[^a-z0-9]+/g, "-")
      .replaceAll(/(^-|-$)+/g, "");
    return cleaned || `chapter-${Math.random().toString(36).slice(2, 7)}`;
  }

  function safeDomId(rawId, title) {
    const base = String(rawId || normalizeId(title)).replaceAll(/[^a-zA-Z0-9_-]/g, "");
    return base || normalizeId(title);
  }

  function buildChapterHtml(chapter) {
    const id = safeDomId(chapter.id, chapter.title);
    const title = chapter.title || "(untitled)";
    const rawHtml = typeof chapter.html === "string" ? chapter.html.trim() : "";
    const txt = typeof chapter.txt === "string" ? chapter.txt : "";
    const body = rawHtml
      ? rawHtml
      : `<pre class="noteTxt">${escapeHtml(txt)}</pre>`;
    return `
      <section id="${id}" class="chapter" aria-label="${escapeHtml(title)}">
        <div class="chapter-content chapter-content--rich">
          <h2>${escapeHtml(title)}</h2>
          ${body}
        </div>
      </section>
    `;
  }

  window.StudyHubTxtViewer = {
    mount(notes, roots) {
      const chapters = Array.isArray(notes) ? notes : [];
      const homeScreen = roots.homeScreen;
      const content = roots.content;
      const chaptersNav = roots.chaptersNav;
      const chapterSearch = roots.chapterSearch;
      const tocFallback = roots.tocFallback;
      const brandHome = roots.brandHome;

      function hideAllMainViews() {
        homeScreen.classList.remove("active");
        content.querySelectorAll(".chapter").forEach((c) => c.classList.remove("active"));
      }

      function showHome() {
        hideAllMainViews();
        homeScreen.classList.add("active");
        roots.container.querySelectorAll(".nav a[data-chapter]").forEach((l) => l.classList.remove("active"));
        const homeLink = roots.container.querySelector('.nav a[data-chapter="home"]');
        if (homeLink) homeLink.classList.add("active");
      }

      function showChapter(chapterId) {
        hideAllMainViews();
        content.querySelectorAll(".chapter").forEach((c) => c.classList.remove("active"));
        const el = document.getElementById(chapterId);
        if (el) el.classList.add("active");
        homeScreen.classList.remove("active");
        roots.container.querySelectorAll(".nav a[data-chapter]").forEach((l) => {
          l.classList.toggle("active", l.dataset.chapter === chapterId);
        });
      }

      chaptersNav.innerHTML = "";
      if (chapters.length === 0) {
        if (tocFallback)
          tocFallback.textContent =
            "No chapters yet — edit the course file under Hubs/StudyHub/pages/<id>/ (see registry.js).";
        content.innerHTML = "";
        showHome();
        if (brandHome) {
          brandHome.onclick = (e) => {
            e.preventDefault();
            showHome();
          };
        }
        roots.container.querySelectorAll('.nav a[data-chapter="home"]').forEach((a) => {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            showHome();
          });
        });
        if (chapterSearch) chapterSearch.oninput = null;
        return;
      }

      if (tocFallback) tocFallback.textContent = "";

      const frag = document.createDocumentFragment();
      for (const ch of chapters) {
        const id = safeDomId(ch.id, ch.title);
        const title = ch.title || "(untitled)";
        const a = document.createElement("a");
        a.href = "#";
        a.dataset.chapter = id;
        a.className = "nav-chapter";
        a.textContent = title;
        frag.appendChild(a);
      }
      chaptersNav.appendChild(frag);

      content.innerHTML = chapters.map(buildChapterHtml).join("");

      roots.container.querySelectorAll('.nav a[data-chapter]').forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          const id = a.dataset.chapter;
          if (!id) return;
          if (id === "home") return showHome();
          showChapter(id);
        });
      });

      if (chapterSearch) {
        chapterSearch.oninput = () => {
          const q = chapterSearch.value.trim().toLowerCase();
          roots.container.querySelectorAll(".nav a.nav-chapter").forEach((a) => {
            const t = a.textContent.trim().toLowerCase();
            a.style.display = !q || t.includes(q) ? "" : "none";
          });
        };
      }

      if (brandHome) {
        brandHome.onclick = (e) => {
          e.preventDefault();
          showHome();
        };
      }

      const firstId = safeDomId(chapters[0].id, chapters[0].title);
      showChapter(firstId);
    },
  };
})();
