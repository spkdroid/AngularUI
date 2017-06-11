import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor() { }

    MOUNTAINS = [
  {"name":"Ramkumar Velmurugan","height":"Please Reply to this mail","country":"7:41 AM"},
  {"name":"Siddarth","height":"Please Reply to this mail","country":"4:31 AM"},
  {"name":"Mark Arum","height":"Please Reply to this mail","country":"1:24 AM"},
  {"name":"Mark","height":"Please Reply to this mail","country":"11:23 PM"},
  {"name":"TD Bank","height":"Please Reply to this mail","country":"10:41 AM"},
  {"name":"Scotia Bank","height":"Please Reply to this mail","country":"8:45 AM"},
  {"name":"Read","height":"Please Reply to this mail","country":"3:41 AM"}
];

  buildTable(data) {
    var table = document.createElement("table");
    table.className="table table-striped table-hover";
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var headRow = document.createElement("tr");
    ["Name","Subject","Time","Status"].forEach(function(el) {
      var th=document.createElement("th");
      th.appendChild(document.createTextNode(el));
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead); 
    data.forEach(function(el) {
      var tr = document.createElement("tr");
      var btn = document.createElement('input');
      btn.type="button";
      btn.value="Read"
      btn.className="btn btn-primary";
      for (var o in el) {  
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(el[o]));        
        tr.appendChild(td);        
    }
     var td = document.createElement("td");
     td.appendChild(btn);
     tbody.appendChild(tr); 
     tr.appendChild(td);     
    });
    table.appendChild(tbody);             
    return table;
}


  ngOnInit() {
    document.getElementById("content").appendChild(this.buildTable(this.MOUNTAINS));
  }

}
