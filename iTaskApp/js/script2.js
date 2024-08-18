add = document.getElementById("add");
add.addEventListener("click", addtolist);
showdata();

function addtolist() {
  title = document.getElementById("title").value;
  desc = document.getElementById("desc").value;
  email = document.getElementById("email").value;
  date = document.getElementById("date").value;

  if (title === "" || desc === "" || email === "" || date === "") {
    alert("Please fill all text fields!")
  }
  else if (localStorage.getItem("ItemJSON") == null) {
    ItemJSONArray = [];
    ItemJSONArray.push([title, desc, email, date])
    localStorage.setItem("ItemJSON", JSON.stringify(ItemJSONArray))
  } else {
    ItemJSONArrayStr = localStorage.getItem("ItemJSON")
    ItemJSONArray = JSON.parse(ItemJSONArrayStr)
    ItemJSONArray.push([title, desc, email, date])
    localStorage.setItem("ItemJSON", JSON.stringify(ItemJSONArray))
  }
  showdata();
}

function deleted(item) {
  ItemJSONArrayStr = localStorage.getItem("ItemJSON")
  ItemJSONArray = JSON.parse(ItemJSONArrayStr)
  ItemJSONArray.splice(item, 1)
  localStorage.setItem("ItemJSON", JSON.stringify(ItemJSONArray))
  showdata();
}

function showdata() {

  if (localStorage.getItem("ItemJSON") == null) {
    ItemJSONArray = [];
    localStorage.setItem("ItemJSON", JSON.stringify(ItemJSONArray))
  } else {
    ItemJSONArrayStr = localStorage.getItem("ItemJSON")
    ItemJSONArray = JSON.parse(ItemJSONArrayStr)
    localStorage.setItem("ItemJSON", JSON.stringify(ItemJSONArray))
  }

  TBody = document.getElementById("tableBody");
  Str = "";
  ItemJSONArray.forEach((element, index) => {
    Str += `
    <tr>
              <td>${index + 1}</td>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td>${element[2]}</td>
              <td>${element[3]}</td>
              <td><button class="btn btn-danger" type="button" onclick="deleted(${index})">Delete</button></td>

            </tr>
    `
  });
  TBody.innerHTML = Str;

  showdata();
}

function clearAll() {
  if (confirm("Are you sure you want to delete?")) { 
  localStorage.clear(); 
  showdata(); }
}