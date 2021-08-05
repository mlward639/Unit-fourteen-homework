// function plusNewPost() {
//   console.log("WORK 12345");
//   //   document.location.replace("/yourDashboardAdd");
// }

// const plusBtn = document.querySelector("#plusNewPost");
// plusBtn.addEventListener(plusNewPost);

// //WHY IS THIS PAGE NOT WORKING WITH DASHBOARD.HANDLEBARS??? I HAVE TO PASTE THE FUNCTION DIRECTLY INTO THE DASHBOARD.HANDLEBARS SCRIPT
// //*****************************

const delButtonHandler = async (event) => {
  console.log("HERE");
  if (event.target.hasAttribute("data-id")) {
    console.log("HERE2");
    const id = event.target.getAttribute("data-id");
    console.log("HERE3");
    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("HERE4");

      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};
