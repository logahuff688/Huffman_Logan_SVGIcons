document.addEventListener("click", (event) => {
  const element = event.target;

  const elementAlt = element.getAttribute("alt");
  const elementId = element.getAttribute("id");

  event.target.classList.toggle("selected");

  console.log(
    `You clicked on the element with ID: ${elementId},\n that is a ${elementAlt}.`
  );
  console.log(
    `the class, "${event.target.classList}" has been added to ${elementId}`
  );
});
