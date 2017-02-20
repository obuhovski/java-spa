    fetch('/api/user')
        .then(res => res.json())
        .then(users => render(users))
        .catch(console.log)

    function render(users) {
        var result = '<table class="table">';
        result += '<tr><th>#</th><th>ID</th><th>Name</th></tr>';
        result += users.map((user, index) => '<tr><td>' + (index+1) + '</td><td>' + user.id + '</td><td>' + user.name + '</td></tr>').join('');
        result += '</table>';
        document.body.innerHTML = result;
    }
