import data from './data.json' assert {type: 'json'};

let searchbtn = document.getElementById("searchbtn")

let asc = document.getElementById("asc")
let desc = document.getElementById("desc")
let marksbtn = document.getElementById("marksbtn")
let genderbtn = document.getElementById("genderbtn")
let passingbtn = document.getElementById("passingbtn")
let classbtn = document.getElementById("classbtn")

var rows, switching, i, x, y, shouldSwitch;
const table = document.getElementById("myTable");


  data.forEach(function (item) {
      let row = table.insertRow();
      let id = row.insertCell();
      let fname = row.insertCell();
      let lname = row.insertCell();
      let email = row.insertCell();
      let gender = row.insertCell();
      let classn = row.insertCell();
      let marks = row.insertCell();
      let passing = row.insertCell();
      let city = row.insertCell();

      id.innerHTML = item.id;
      fname.innerHTML = item.first_name;
      lname.innerHTML = item.last_name;
      email.innerHTML = item.email;
      gender.innerHTML = item.gender;
      classn.innerHTML = item.class;
      marks.innerHTML = item.marks;
      passing.innerHTML = item.passing;
      city.innerHTML = item.city;
      
  });

asc.addEventListener('click', () => {
    var rows, switching, i, x, y, shouldSwitch;
    switching = true;
      
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
        
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("TD")[1];
    y = rows[i + 1].getElementsByTagName("TD")[1];
          
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
          
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
})

desc.addEventListener('click', () => {

    switching = true; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
        
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("TD")[1];
    y = rows[i + 1].getElementsByTagName("TD")[1];
          
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
          
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
})


marksbtn.addEventListener('click', () => {

    switching = true; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
        
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("TD")[6];
    y = rows[i + 1].getElementsByTagName("TD")[6];
          
      if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
          shouldSwitch = true;
          break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
})

classbtn.addEventListener('click', () => {

    switching = true; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
        
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("TD")[5];
    y = rows[i + 1].getElementsByTagName("TD")[5];
          
      if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
          shouldSwitch = true;
          break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
})

genderbtn.addEventListener('click', () => {

    switching = true; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
        
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("TD")[4];
    y = rows[i + 1].getElementsByTagName("TD")[4];
          
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
          
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
})


passingbtn.addEventListener('click', () => {

    switching = true; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
        
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("TD")[7];
    y = rows[i + 1].getElementsByTagName("TD")[7];
          
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
          
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
})


searchbtn.addEventListener('click', () => {

        var ipname = document.getElementById("ipname").value

        rows = table.rows
        for (var i = 1; i < rows.length; i++) {

        var name = rows[i].getElementsByTagName('td')[1]

        if (name.innerHTML == ipname) {
            alert('found')
            rows[i].style.backgroundColor = 'yellow';
        }
    }
})