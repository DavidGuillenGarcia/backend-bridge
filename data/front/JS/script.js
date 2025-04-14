let endpoint = prompt("Enter an URL");

fetch(`http://localhost:8080/${endpoint}`).then((res) =>
  res.json().then((data) => {
    console.log(data);
  })
);
