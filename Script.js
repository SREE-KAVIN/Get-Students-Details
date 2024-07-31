var ul = document.getElementById("list");
        function add() {
            var name = document.getElementById("name").value;
            var num = document.getElementById("num").value;
            var age = document.getElementById("age").value;
            var gender = document.querySelector('input[name="gender"]:checked')?.value;
            var prolag = document.getElementById("prolag").value;

            if (name && num && age && gender && prolag && prolag !== "Select") {
                var li = document.createElement("li");
                li.className = 'task';
                li.innerHTML = `${name} ${num} ${age} ${gender} ${prolag} <button onclick="remove(event)">Delete</button>`;
                ul.append(li);
                clearForm();
            } else {
                alert("Please fill out all fields.");
            }
        }

        function remove(event) {
            event.target.parentElement.remove();
        }

        function clearForm() {
            document.getElementById("student-form").reset();
        }