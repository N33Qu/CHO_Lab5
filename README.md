# Chmura Obliczeniowa Lab 5



## Table of Contents
- [Build](#build)
- [Screens](#screens)


## Build

Budowanie obrazu:

```bash
docker build -t cho_lab5:v1 .  
```

Uruchamianie kontenera:
```bash
docker run -p 80:80 --name=cho_lab5 -e VERSION=v1.0 cho_lab5:v1
```

Sprawdzenie kontenera:
```bash
docker ps -a  
```


## Screens
![Działająca aplikacja node](img%2Fpage_node.png)
![Zrzut ekranowy strony uruchomionej na nginx](img%2Fpage.png)!
