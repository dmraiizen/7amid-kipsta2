const theme = document.querySelectorAll(".theme");

theme.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    document.body.classList.remove("darkTheme", "brightTheme");
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "bright":
        document.body.classList.add("brightTheme");
        break;
      default:
        null;
    }
  });
});