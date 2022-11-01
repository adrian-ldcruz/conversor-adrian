function conversorTemperatura (){
    let input=[];
    let temperatura=parseInt(document.querySelector("#temperatura").value);
    let opcao=document.querySelector('#temperaturas').value;
    let fahrenheit;
    let celsius;
    let kelvin;
    let rankine;

    
    if(temperatura!=NaN){ 
        input.push(temperatura);
    }
    
    if(opcao!=0){
        input.push(opcao);
    }

    if(opcao=='Fahrenheit')
    {
        fahrenheit=temperatura.toFixed(2);
        celsius=((temperatura-32)/1.8).toFixed(2);
        kelvin=((temperatura-32)*(5/9)+273).toFixed(2);
        rankine=((temperatura+459.67).toFixed(2));
    }
    if(opcao=='Celsius')
    {
        fahrenheit=(temperatura*1.8+32).toFixed(2);
        celsius=temperatura.toFixed(2);
        kelvin=(temperatura+273).toFixed(2);
        rankine=(temperatura+273.15*1.8).toFixed(2);
    }
    if(opcao=='Kelvin')
    {
        fahrenheit=((temperatura-32)*(5/9)+273).toFixed(2);
        celsius=(temperatura-273).toFixed(2);
        kelvin=temperatura.toFixed(2);
        rankine=(temperatura+459.67).toFixed(2);
    }
    if(opcao=='Rankine')
    {
        fahrenheit=(temperatura-459.67).toFixed(2);
        celsius=(temperatura-491.67/1.8).toFixed(2);
        kelvin=(temperatura/1.8).toFixed(2);
        rankine=temperatura.toFixed(2);
    }

    if(parseInt(input.length)==2){
        document.querySelector('input').value="";
        document.querySelector('select').value="";
        if(opcao.value!=0){
    
    let tbody = document.querySelector('tbody');
    let tr = document.createElement('tr');
    let tdFahrenheit = document.createElement('td');
    tdFahrenheit.append(fahrenheit);
    tr.append(tdFahrenheit);
 
    let tdCelsius = document.createElement('td');
    tdCelsius.append(celsius);
    tr.append(tdCelsius);
 
    let tdKelvin = document.createElement('td');
    tdKelvin.append(kelvin);
    tr.append(tdKelvin);
 
    let tdRankine = document.createElement('td');
    tdRankine.append(rankine);
    tr.append(tdRankine);
 
    tbody.append(tr);
        }
    }
    
}
