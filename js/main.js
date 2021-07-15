$(".about__card").on("mouseenter", (e) => {
  const className = e.target.children[0].classList[1];
  const getElement = $(`.${className}`);

  getElement.addClass("card-up");
  getElement.append("<a href='#' class='link-text'> Look Around → </a>");
});

$(".about__card").on("mouseleave", (e) => {
  const className = e.target.children[0].classList[1];
  const getElement = $(`.${className}`);

  getElement.removeClass("card-up");
  $(".link-text").remove();
});

$(".project__images").on("mouseenter", (e) => {
  const className = e.target.nextElementSibling.classList[1];
  const getElement = $(`.${className}`);

  getElement.animate({
    top: "58%",
    opacity: 1
  });
});

$(".project__images").on("mouseleave", (e) => {
  const className = e.target.nextElementSibling.classList[1];
  const getElement = $(`.${className}`);

  getElement.animate({
    top: "80%",
    opacity: 0
  });
});
