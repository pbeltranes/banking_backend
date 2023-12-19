Challenge Xepelin

## Supuestos
Si se intenta ingresar con una cuenta que ya se encuentra registrada se llevará a transacciones siempre con el balance inicial con el que se creo al cuenta.

Se omite testing de dependencies dado que solo carga dependencias y sus componentes están testeados, también de omite archivos de base da datos porque son implementaciones de librería de mongodb.

Se incluye documentacion con dos diagramas de secuencia correspondientes a los endpoints.

Se incluye collecion de postman.

## Comandos

Para inicializar con una base de datos en mongodb (.env enviado al correo)
```bash
npm run dev 
```

Para inicializar con una base de datos en mockeada
```bash
npm run dev:mock 
```

## CURLS

### /accounts
```cURL
curl --location 'localhost:4000/accounts' \
--header 'Content-Type: application/json' \
--data '{
    "name": "nombre",
    "account_number": 42424242444,
    "initial_balance": 1100
}'
```

### /transaction
```cURL
 curl --location 'localhost:4000/transaction' \
--header 'Content-Type: application/json' \
--data '{
    "type": "nombre",
    "amount": 100,
    "account_id": 110021212,
}'
```

## Pendientes
- Validaciones de los parametros de entrada
- Mejoras en los mocks
- Creación de un errorHandler
