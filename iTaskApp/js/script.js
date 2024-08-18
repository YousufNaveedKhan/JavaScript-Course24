document.addEventListener("DOMContentLoaded", function () {
    var add = document.getElementById("add");
    add.addEventListener("click", addtolist);
    showdata();
});

function addtolist() {
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;

    if (title === "" || desc === "" || email === "" || date === "") {
        alert("Please fill all fields!");
        return;
    }

    let item = { title, desc, email, date };
    let items = JSON.parse(localStorage.getItem("ItemJSON")) || [];
    items.push(item);
    localStorage.setItem("ItemJSON", JSON.stringify(items));

    showdata();
}

function showdata() {
    let items = JSON.parse(localStorage.getItem("ItemJSON")) || [];
    let tbody = document.getElementById("tableBody");

    if (tbody) {
        tbody.innerHTML = "";

        items.forEach((item, index) => {
            tbody.innerHTML += `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${item.title}</td>
                        <td>${item.desc}</td>
                        <td>${item.email}</td>
                        <td>${item.date}</td>
                        <td><button type="button" class="btn btn-danger" onclick="deleted(${index})">Delete</button></td>
                    </tr>
            `
        });
    }
}

function deleted(index) {
    if (confirm("Are you sure you want to delete this record?")) {
        let items = JSON.parse(localStorage.getItem("ItemJSON")) || [];
        items.splice(index, 1);
        localStorage.setItem("ItemJSON", JSON.stringify(items));
        showdata();
    }
}

function clearAll() {
    if (confirm("Are you sure you want to clear records list?")) {
        localStorage.clear();
        showdata();
    }
}

