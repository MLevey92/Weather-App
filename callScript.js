var lat=34.72;
var lon=-76.73;

//LA.



//current weather -- Main panel
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Morehead City&units=imperial&appid=ed7c52f35ab9c16faf66198f338f6a48", function(data){
    lon = data.coord.lon;
    lat = data.coord.lat;

    console.log(data);
    var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    $('.background-container').attr('class', weather);
    $('.weather').append(weather);
    $('.icon').attr('src', icon);
    $('.temp').append(temp+'°');

    $('#city').append(data.name + ', ');
    $('#city').append(data.sys.country);
    
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date(data.dt*1000);
    $('#date').append(dayString(d.getDay(),0)+ ', ' + months[d.getMonth()] + ' ' + d.getDate()); 
    $('#time').append(d.getHours() + ':' + d.getMinutes());   
});

//One call -- hourly and weekly bottom panels
$.getJSON(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=ed7c52f35ab9c16faf66198f338f6a48`, function(data){
console.log(data);
var d = new Date(1608152400*1000);

$('#low').append(Math.floor(data.daily[0].temp.min)+'°')
$('#hi').append(Math.floor(data.daily[0].temp.max)+'°')

//populate week day panels
for (i=0;i<7;i++) {
    var d = new Date(data.daily[i].dt*1000);
    $(`#day${i}`).append(dayString(d.getDay(),1));
    var icon = "http://api.openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png";
    $(`#d_icon${i}`).attr('src',icon);
    $(`#d_temp${i}`).append(Math.floor(data.daily[i].temp.day)+'°');
}

//populate hourly panels
for (i=0;i<24;i++) {
    var d = new Date(data.hourly[i].dt*1000);
    $(`#hour${i}`).append(formatHours(d.getHours()));
    var icon = "http://api.openweathermap.org/img/w/" + data.hourly[i].weather[0].icon + ".png";
    $(`#h_icon${i}`).attr('src',icon);
    $(`#h_temp${i}`).append(Math.floor(data.hourly[i].temp)+'°');
}

});


function formatHours (h) {
    let ap = '';
    if(h==0) {
        ap = 'am';
        h=12;
    }
    else if (h>12) {
        h=h-12;
        ap = 'pm';
    } else {
        ap='am';
    }

    return h+ap;
}
//date.getDay convert to string
//@Param d--int 0-7 to be converted
//@param s--int 0 or 1.. 0 returns full day, 1 returns shortened day
function dayString(d, s) {
    if(s==0) {
        switch(d) {
            case 0:
                return 'Sunday';
                break;
            case 1:
                return 'Monday';
                break;
            case 2:
                return 'Tuesday';
                break;
            case 3:
                return 'Wednesday';
                break;
            case 4:
                return 'Thursday';
                break;
            case 5:
                return 'Friday';
                break;
            case 6:
                return 'Saturday';
                break;
        }
    }
    else {
        switch(d) {
            case 0:
                return 'Sun';
                break;
            case 1:
                return 'Mon';
                break;
            case 2:
                return 'Tues';
                break;
            case 3:
                return 'Wed';
                break;
            case 4:
                return 'Thurs';
                break;
            case 5:
                return 'Fri';
                break;
            case 6:
                return 'Sat';
                break;
        }
    }
}

function monthString(m) {
    switch(m) {
        case 0:
            return 'January';
            break;
        case 1:
            return 'February';
            break;
        case 2:
            return 'March';
            break;
        case 3:
            return 'April';
            break;
        case 4:
            return 'May';
            break;
        case 5:
            return 'June';
            break;
        case 6:
            return 'July';
            break;
        case 7:
            return 'August';
            break;
        case 8:
            return 'September';
            break;
        case 9:
            return 'October';
            break;
        case 10:
            return 'November';
            break;
        case 11:
            return 'December';
            break;
    }
}



