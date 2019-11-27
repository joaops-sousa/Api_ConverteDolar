from django.shortcuts import render
import requests


# Create your views here.
def home(request):
    aux = requests.get("https://economia.awesomeapi.com.br/usd")
    aux = aux.json()[0]

    dolar = format(float(aux["ask"]), ".2f")
    # dolar = float(dolar)

    return render(request, 'home.html', {'dolar': dolar})
