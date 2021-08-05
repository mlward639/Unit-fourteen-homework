// add new post
const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#updateTitle").value.trim();
  const content = document.querySelector("#updateContent").value.trim();
  //console.log("*******", title, content);
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  //console.log("@@@@", id);
  if (title && content) {
    const response = await fetch(`/api/post/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to edit post");
    }
  }
};
