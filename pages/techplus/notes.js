// Tech+ — Study Hub copy only. Edit this file here; it is independent of other folders.
// Chapters: { id, title, html } for CCNA-style markup, or { id, title, txt } for plain preformatted text.
window.TECHPLUS_NOTES = [
  {
    id: "chapter-1-tech",
    title: "Chapter 1",
    html : `
      <h3>No content here yet</h3>
      
    `

  },
  {
    id: "chapter-2-tech",
    title: "Chapter 2",
    html : `
      <h3>No content here yet</h3>
      
    `

  },
  {
    id: "chapter-3-tech",
    title: "Chapter 3",
    html : `
      <h3>No content here yet</h3>
      
    `

  },
  {
    id: "chapter-4-tech",
    title: "Chapter 4",
    html : `
      <h3>Operating System Fundamentals</h3>
      <ul>
        <li>An operating System (OS) provides a consistent enviroment for other software to run</li>
        <li>The OS is the interface between applications and the System hardware</li>
        <li>Users can give instructions via input devices (keyboard and mice)</li>
      </ul>
      <ul>
        <li>Application</li>
        <ul>
          <li>An application is a piece of software used to accomplish a specific task</li>
          <li>Applications are written for a specific OS on which it will run</li>
          <ul>
            <li>Applications made to run on Windows (An example of a OS) will not run on Mac (Apple's own OS)</li>
          </ul>
        </ul>
      </ul>
      <ul>
        <li>Driver</li>
        <ul>
          <li>A driver is a very specific application written to instruct the OS on how to use a specific piece of hardware</li>
          <li>Every piece of hardware has it's own driver. Everything from a printer to your mouse has a driver</li>
        </ul>
      </ul>
      <div class="note">
        <strong>Note:</strong> There is a chapter called "A brief history of Operating Systems". I did not go over it as it will not be tested. You are welcome to go through on your own time
      </div>
      <h3>Basic Functions of Operating Systems</h3>
      <ul>
        <li>Some key vocab for this section</li>
        <ul>
          <li>Kernal</li>
          <ul>
            <li>The central part of the OS</li>
            <li>Controls all actions of the OS (Including input and output)</li>
          </ul>
          <li>Version</li>
          <ul>
            <li>A particular revision of a piece of software</li>
            <li>Normally definded by a version number</li>
            <div class="example">
              <strong>Example:</strong> The current version of Notepad++ I use is 8.8.7
            </div>
          </ul>
          <li>Source</li>
          <ul>
            <li>The actual code that defines how a piece of software works</li>
            <li>Computer systems can be open source or closed source</li>
            <ul>
              <li>Open source means that anyone can view/modify the code on their own, either for free or a cost</li>
              <li>Closed source means that only the owner and/or a developer can view or modify the code</li>
            </ul>
          </ul>
          <li>Shell</li>
          <ul>
            <li>A program that runs on top of the OS and allows users to issue commands through a set of menus</li>
            <li>Shells make the OS easier to use by creating a user interface</li>
          </ul>
          <li>Graphical User Interface (GUI)</li>
          <ul>
            <li>
          </ul>
    `
  },
  {
    id: "chapter-5-tech",
    title: "Chapter 5",
    html : `
      <h3>No content here yet</h3>
      
    `

  },
  //Chapter 6 Tech+ study guide 
  {
    id: "chapter-6-tech",
    title: "Chapter 6",
    html: `
<h3>Assembly languages</h3>
<ul>
  <li>Lowest level</li>
  <li>Instructions directly to hardware</li>
  <li>Specific to processor</li>
</ul>

<h3>Notational systems</h3>
<div class="note">
  <strong>Note:</strong> Computers only understand 0's and 1's. Examples include light switches and binary
  language (base-2), which represents an on/off state.
</div>
<ul>
  <li>
    Humans count in base-10 (0–9).
    <ul>
      <li>If a number is larger than 9, add a new place value.</li>
    </ul>
  </li>
</ul>
<div class="example">
  <strong>Example:</strong> 8, 9, 10 — place values roll over as digits grow.
</div>

<h3>Compiled languages</h3>
<ul>
  <li>Easier to work in than assembly for most tasks.</li>
  <li>
    Use a compiler to translate source into machine code.
    <ul>
      <li>Common languages: Java, C++, C#</li>
      <li>Often produce <code>.exe</code> (or similar) output</li>
      <li>Less complicated than raw assembly commands, but can still be involved</li>
    </ul>
  </li>
</ul>

<h3>Interpreted languages</h3>
<ul>
  <li>
    Each line is read by an interpreter, line by line.
    <ul>
      <li>Evaluated every time the program runs</li>
      <li>Debugging can be easier: failures tend to point at the problem line</li>
    </ul>
  </li>
  <li>
    Two main types:
    <ul>
      <li>Markup</li>
      <li>Scripting</li>
    </ul>
  </li>
</ul>

<h3>Markup Languages</h3>
<ul>
  <li>Language that allows quick markup to text to change the output</li>
</ul>
<ul>
  <li>Most common is HTML
    <ul>
      <li>Hypertext Markup Language</li>
      <li>Allows for creation of web pages</li>
    </ul>
    <ul>
      <li>HTML uses tags for info</li>
      <div class="example">
        <strong>Example:</strong> &lt;tag&gt;Something&lt;/tag&gt;<br>
        <strong>Real use:</strong> &lt;h1&gt;This is a heading&lt;/h1&gt;
      </div>
      <li>Most tags need to be closed with a /</li>
    </ul>
</ul>

<h3>Scripting Languages</h3>
<ul>
  <li>Used to execute tasks faster/automatically</li>
</ul>
<ul>
  <li>Most common types</li>
  <ul>
    <li>JavaScript (JS)</li>
    <li>Virtual Basic (VB)</li>
    <li>PHP</li>
    <li>Perl</li>
    <li>PowerShell (ps1)</li>
    <li>Python (py)</li>
  </ul>
  <li>Most common use in HTML pages</li>
  <ul>
    <li>Uses &lt;script&gt; tag</li>
    <div class="example">
      <strong>Example:</strong><br>&lt;script&gt;<br>alert('Hello, world!');<br>&lt;/script&gt;
    </div>
  </ul>
  <li>HTML defaults to JS, but python can be easier to write in</li>
  <ul>
    <li>JS syntax can be confusing</li>
    <ul>
      <li>To get text to print in HTML, you would need this command: <code>document.write('Hello, world!');</code></li>
    </ul>
    <li>Python syntax can be much more clear, also could be easier to write</li>
    <ul>
      <li>To get the same result with Python, you would need this command: <code>print("Hello World!")</code></li>
  </ul>
  <li>All script for HTML needs the &lt;script&gt; tag
</ul>

<h3>Query Language</h3>
<ul>
  <li>Used to retrieve data from databases</li>
  <ul>
    <li>Most common is SQL (Structured Query Language)</li>
    <li>Another example is LDAP (Light-Query Directory Access Protocol)</li>
  </ul>
  <li>Basic SQL sytax is very simple</li>
  <ul>
    <li>SELECT column_name</li>
    <li>FROM table_name</li>
    <li>WHERE condition</li>
  </ul>
</ul>

`,
  },
  {
    id: "chapter-7-tech",
    title: "Chapter 7",
    html : `
      <h3>No content here yet</h3>
      
    `

  },
  {
    id: "chapter-8-tech",
    title: "Chapter 8",
    html : `
      <h3>No content here yet</h3>
      
    `

  },
  {
    id: "chapter-9-tech",
    title: "Chapter 9",
    html : `
      <h3>No content here yet</h3>
      
    `

  },{
    id: "chapter-10-tech",
    title: "Chapter 10",
    html : `
      <h3>No content here yet</h3>
      
    `

  },
  {
    id: "chapter-11-tech",
    title: "Chapter 11",
    html : `
      <h3>No content here yet</h3>
      
    `

  },
  {
    id: "chapter-12-tech",
    title: "Chapter 12",
    html : `
      <h3>No content here yet</h3>
      
    `

  }
];
