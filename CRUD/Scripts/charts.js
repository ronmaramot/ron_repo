var chartDataTable = [
    ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average', 'Above Average'],
    ['2004/05', 165, 938, 522, 998, 450, 614.6, 714],
    ['2005/06', 135, 1120, 599, 1268, 288, 682, 782],
    ['2006/07', 157, 1167, 587, 807, 397, 623, 723],
    ['2007/08', 139, 1110, 615, 968, 215, 609.4, 709],
    ['2008/09', 136, 691, 629, 1026, 366, 569.6, 669]
];

function drawChart(title, vAxTitle, hAxTitle, type, target) {
    var data = new google.visualization.arrayToDataTable(chartDataTable);
    var options = '', chart = '', rows = chartDataTable.length;

    if (type === 'Combo') {
        options = {
            'title': title,
            'vAxis': { 'title': vAxTitle },
            'hAxis': { 'title': hAxTitle },
            'seriesType': 'bars',
            'series': { rows: { 'type': 'line' } }
        };

        chart = new google.visualization.ComboChart(document.getElementById(target));
    } else if (type === 'Pie') {
        options = {
            'title': title
        };

        chart = new google.visualization.PieChart(document.getElementById(target));
    } else if (type === "Area") {
        options = {
            'title': title
        };

        chart = new google.visualization.AreaChart(document.getElementById(target));
    }

    chart.draw(data, options);
}

window.onload = function () {
    if (document.getElementById("dboard")) {
        var btn = document.getElementById("c_load");

        btn.onclick = function () {
            drawChart("Chart", "", "", "Combo", "chart_div");
        };
    }
};