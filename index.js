function getUserFollower() {
  let div = document.createElement("div");
  fetch("https://api.github.com/users/iqbalmmm/followers")
    .then(res => res.json())
    .then(follower => {
      console.log(follower);
      follower.map(data => {
        let image = document.createElement("figure");
        image.className = "figure m-5";

        let img = document.createElement("img");
        img.setAttribute("src", data.avatar_url);
        img.className = "figure-img img-fluid rounded-circle";
        img.style = "height: 250px";

        let link = document.createElement('a');
        link.className = "text-center";
        link.href = data.html_url;

        let text = document.createElement("figcaption");
        text.className = "figure-caption text-center m-3 ";
        text.style = "color: brown"
        text.innerText = data.login;

        link.append(img)
        link.append(text)
        image.append(link);
        // image.append(text);
        document.getElementById("div").append(image);
      });
    });
}
