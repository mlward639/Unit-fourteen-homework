const commentFormHandler = async (event) => {
  event.preventDefault();
  console.log("RUNNINGGGGGGGGGG");

  const comment = document.querySelector("#addComment").value.trim();
  console.log("(((((", comment);
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log("@@@@", id);
  if (comment) {
    const response = await fetch(`/api/post/${id}`, {
      method: "PUT",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to add comment");
    }
  }
};
