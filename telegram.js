import fetch from "node-fetch";

function clean(text) {
  const replacements = {
    "\n": "%0A",
    "!": "\\!",
    "(": "\\(",
    ")": "\\)",
    ".": "\\.",
  };

  for (const find in replacements) {
    text = text.replaceAll(find, replacements[find]);
  }

  return text;
}

async function post(apiToken, chatId, title, content, disablePreview) {
  const apiBase = "https://api.telegram.org";
  const text = clean(`*${title}*\n\n\n${content}`);

  let urlString = `${apiBase}/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=MarkdownV2`;

  if (disablePreview) {
    urlString += "&disable_web_page_preview=True";
  }

  console.log(text, urlString);

  const res = await fetch(urlString);

  return await res.json();
}

export { post };
