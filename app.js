const commentsList = document.getElementById("commentsList");
const btnComment = document.getElementById("btnComment");
const commentContent = document.getElementById("commentContent");
const btnLogout = document.getElementById("btnLogout");

let comments = [];

function renderComments() {
  commentsList.innerHTML = "";

  if (comments.length === 0) {
    commentsList.innerHTML = `<p class="empty">Aún no hay comentarios</p>`;
    return;
  }

  comments.forEach(c => {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `<strong>Usuario</strong><p>${c}</p>`;
    commentsList.appendChild(div);
  });
}

btnComment.onclick = () => {
  const text = commentContent.value.trim();
  if (!text) return;

  comments.push(text);
  commentContent.value = "";
  renderComments();
};

if (btnLogout) {
  btnLogout.onclick = () => {
    window.location.href = "index.html";
  };
}

renderComments();
