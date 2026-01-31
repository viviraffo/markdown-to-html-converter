
let input = document.getElementById("markdown-input");
let htmlOutput = document.getElementById("html-output")
let preview = document.getElementById("preview");

function convertMarkdown() {
  let html = input.value;

html = html.replace(/^###\s+(.*)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s+(.*)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s+(.*)$/gm, '<h1>$1</h1>');

  html = html.replace(/^>\s+(.*)$/gm, '<blockquote>$1</blockquote>');

  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  html = html.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');

  html = html.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');


htmlOutput.textContent = html;
preview.innerHTML = html;

  return html;

}

input.addEventListener("input", convertMarkdown);


