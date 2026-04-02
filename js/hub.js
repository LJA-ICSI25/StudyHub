(function () {
  var courses = Array.isArray(window.STUDY_HUB_COURSES) ? window.STUDY_HUB_COURSES : [];

  var landing = document.getElementById("landing");
  var workspace = document.getElementById("workspace");
  var courseGrid = document.getElementById("course-grid");
  var hubBack = document.getElementById("hub-back");
  var hubCurrent = document.getElementById("hub-current");
  var iframeHost = document.getElementById("iframe-host");
  var courseIframe = document.getElementById("course-iframe");
  var txtWorkspace = document.getElementById("txt-workspace");
  var placeholderHost = document.getElementById("placeholder-host");
  var placeholderText = document.getElementById("placeholder-text");
  var txtCourseBlurb = document.getElementById("txt-course-blurb");

  function showLanding() {
    landing.classList.remove("hidden");
    workspace.classList.add("hidden");
    hubBack.classList.add("hidden");
    hubCurrent.classList.add("hidden");
    courseIframe.src = "about:blank";
  }

  function hideLanding() {
    landing.classList.add("hidden");
    workspace.classList.remove("hidden");
    hubBack.classList.remove("hidden");
    hubCurrent.classList.remove("hidden");
  }

  function hideAllModes() {
    iframeHost.classList.add("hidden");
    txtWorkspace.classList.add("hidden");
    placeholderHost.classList.add("hidden");
  }

  function openIframe(course) {
    hideAllModes();
    iframeHost.classList.remove("hidden");
    courseIframe.src = course.src || "about:blank";
  }

  function openTxtChapters(course) {
    hideAllModes();
    txtWorkspace.classList.remove("hidden");
    var key = course.notesGlobal;
    var notes = key && window[key] ? window[key] : [];
    if (txtCourseBlurb && course.description) {
      txtCourseBlurb.textContent = course.description;
    }
    window.StudyHubTxtViewer.mount(notes, {
      container: document.getElementById("txt-main-layout"),
      homeScreen: document.getElementById("txt-home-screen"),
      content: document.getElementById("txt-content"),
      chaptersNav: document.getElementById("txt-chaptersNav"),
      chapterSearch: document.getElementById("txt-chapterSearch"),
      tocFallback: document.getElementById("txt-tocFallback"),
      brandHome: null,
    });
  }

  function openPlaceholder(course) {
    hideAllModes();
    placeholderHost.classList.remove("hidden");
    if (placeholderText) {
      placeholderText.textContent =
        course.description ||
        "Add Hubs/StudyHub/pages/<id>/ and a registry entry. For txt-chapters, add a <script> in index.html for that page’s notes.js.";
    }
  }

  function openCourse(courseId) {
    var course = courses.find(function (c) {
      return c.id === courseId;
    });
    if (!course) return;

    hideLanding();
    hubCurrent.textContent = course.title || courseId;

    if (course.type === "iframe") {
      openIframe(course);
    } else if (course.type === "txt-chapters") {
      openTxtChapters(course);
    } else {
      openPlaceholder(course);
    }

    try {
      var url = new URL(window.location.href);
      url.searchParams.set("course", courseId);
      window.history.replaceState({}, "", url);
    } catch (e) {
      /* ignore file:// */
    }
  }

  function renderCards() {
    courseGrid.innerHTML = "";
    courses.forEach(function (course) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "course-card";
      btn.setAttribute("role", "listitem");

      var h2 = document.createElement("h2");
      h2.textContent = course.title || course.id;
      btn.appendChild(h2);

      var p = document.createElement("p");
      p.textContent = course.description || "";
      btn.appendChild(p);

      var badge = document.createElement("span");
      badge.className = "badge";
      if (course.type === "iframe") badge.textContent = "HTML site";
      else if (course.type === "txt-chapters") badge.textContent = "TXT chapters";
      else badge.textContent = "Placeholder";
      btn.appendChild(badge);

      btn.addEventListener("click", function () {
        openCourse(course.id);
      });

      courseGrid.appendChild(btn);
    });
  }

  hubBack.addEventListener("click", function () {
    showLanding();
    try {
      var url = new URL(window.location.href);
      url.searchParams.delete("course");
      window.history.replaceState({}, "", url);
    } catch (e) {
      /* ignore */
    }
  });

  renderCards();

  try {
    var params = new URLSearchParams(window.location.search);
    var initial = params.get("course");
    if (initial) openCourse(initial);
  } catch (e) {
    /* ignore */
  }
})();
