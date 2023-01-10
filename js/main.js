document.addEventListener("click", (event) => {
  const element = event.target;

  const elementId = element.getAttribute("id");

  console.log(`You clicked on the element with ID: ${elementId}`);
});
