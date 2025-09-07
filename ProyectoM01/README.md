
# Calculadora de Precios




## Reglas de negocio

- Local que vende miel en potes de 1 kg y 2 kg. 
- El de 1 kg tiene un precio de $ 1.000.
- El de 2 kg tiene un precio de $ 1.800.
- Existen 2 formas de entrega:
- (1) Retiro en tienda (costo $ 0).
- (2) Despacho en Región Metropolitana ($ 300 por kg).
- Descuentos:
- Descuento por cantidad: Si se compran 5 o más unidades, se aplica un descuento del 20% al precio unitario del producto. Por ejemplo el pote de 1 kg en vez de valer $ 1.000 la unidad, valdrá $ 800.
- Descuento por cupón: En caso de que el comprador tenga un cupón de descuento, se aplicará un 30% de descuento al total de la compra (considera precio del producto, IVA y despacho).
- IVA: Para simplificar el cálculo, se considerará un IVA de un 20% el cual se aplica solo sobre lo pagado por producto (el despacho no tiene IVA). 


## Proceso

- Usuario: Ingresar los dos valores del arreglo "costoUnitarioReal" de dimensión 2.
- Usuario: Seleccionar cual de los dos precios desea.
- Usuario: Ingresar cantidad.
- Usuario: Ingresar tipo de entrega. 
- Sistema: Definir tipo de producto (según el precio)
- Sistema: Definir descuento por cantidad (0% o 20%) y precio con descuento por cantidad.
- Sistema: Calcular subtotal (precio con descuento aplicado, por cantidad).
- Sistema: Calcular IVA de la compra (sobre el subtotal).
- Sistema: Definir el modo de entrega (dada la opción ingresada, se guarda como cadena el modo). 
- Sistema: Calcular valor del despacho.
- Sistema: Calcular total a pagar (subtotal + IVA + despacho)
- Usuario: Ingresar cupón.
- Sistema: Definir si aplica cupón, porcentaje cupón y valor cupón.
- Sistema: Definir total a pagar final (total – descuento por cupón).


## Resultado Esperado

Pantalla que indique:

Producto seleccionado:
- Variables: producto
- Pantalla: Mostrar si es 1 kg o 2 kg
Costo unitario real:
- Variables: costoUnitarioReal
- Pantalla: Mostrar precio sin descuentos ($ 1.000 o $ 1.800)
Cantidad:
- Variables: cantidad
- Pantalla: Indicar cantidad a llevar
Descuento por cantidad:
- Variables porcentajeDescuento
- Pantalla: Porcentaje de descuento
Costo unitario con descuento:
- Variables: costoUnitarioDescuento
- Pantalla: Mostrar precio con el descuento aplicado
Subtotal de la compra:
- Variables: subtotal
- Pantalla: Mostrar el valor subtotal (precio por cantidad)
IVA:
- Variables: iva, ivaCompra
- Mostrar porcentaje del IVA y el valor del IVA en la compra
Entrega:
- Variables: idEntrega, modoEntrega
- Pantalla: Retiro en tienda o Despacho RM
Despacho:
- Variables: aplicaDespacho, valorDespacho
- Constantes: valorUnitarioDespacho, peso1, peso2
- Pantalla: Indicar si requiere despacho o no, y mostrar el valor del despacho.
Total a pagar:
Variables: total
- Pantalla: Suma de subtotal + IVA + Despacho
Cupón de descuento:
- Variables: idCupon, aplicaCupon, porcentajeCupon, valorCupon
- Pantalla: Si aplica un cupón, porcentaje cupón, valor de descuento por cupón.
Total a pagar final:
- Variables: totalFinal
- Pantalla: Total menos descuento Cupón

## Comandos para publicar en Git Hub

Windows PowerShell
Copyright (C) Microsoft Corporation. Todos los derechos reservados.

Instale la versión más reciente de PowerShell para obtener nuevas características y mejoras. https://aka.ms/PSWindows

PS C:\Users\Mauricio UDD> cd ".\OneDrive - udd.cl\Escritorio\Bootcamp DWFS\Módulo 01\Proyecto\CodigoPSeint\"
PS C:\Users\Mauricio UDD\OneDrive - udd.cl\Escritorio\Bootcamp DWFS\Módulo 01\Proyecto\CodigoPSeint> git init
Reinitialized existing Git repository in C:/Users/Mauricio UDD/OneDrive - udd.cl/Escritorio/Bootcamp DWFS/Módulo 01/Proyecto/CodigoPSeint/.git/
PS C:\Users\Mauricio UDD\OneDrive - udd.cl\Escritorio\Bootcamp DWFS\Módulo 01\Proyecto\CodigoPSeint> git status
On branch main
nothing to commit, working tree clean
PS C:\Users\Mauricio UDD\OneDrive - udd.cl\Escritorio\Bootcamp DWFS\Módulo 01\Proyecto\CodigoPSeint> git add .
PS C:\Users\Mauricio UDD\OneDrive - udd.cl\Escritorio\Bootcamp DWFS\Módulo 01\Proyecto\CodigoPSeint> git status
On branch main
nothing to commit, working tree clean
PS C:\Users\Mauricio UDD\OneDrive - udd.cl\Escritorio\Bootcamp DWFS\Módulo 01\Proyecto\CodigoPSeint> git remote add origin https://github.com/mlarrondom/ProyectoModulo1.git
error: remote origin already exists.
PS C:\Users\Mauricio UDD\OneDrive - udd.cl\Escritorio\Bootcamp DWFS\Módulo 01\Proyecto\CodigoPSeint> git push -u origin main
To https://github.com/mlarrondom/ProyectoModulo1.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/mlarrondom/ProyectoModulo1.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
PS C:\Users\Mauricio UDD\OneDrive - udd.cl\Escritorio\Bootcamp DWFS\Módulo 01\Proyecto\CodigoPSeint> git pull origin main --rebase
From https://github.com/mlarrondom/ProyectoModulo1
 * branch            main       -> FETCH_HEAD
Successfully rebased and updated refs/heads/main.
PS C:\Users\Mauricio UDD\OneDrive - udd.cl\Escritorio\Bootcamp DWFS\Módulo 01\Proyecto\CodigoPSeint> git push origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 1.79 KiB | 1.79 MiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/mlarrondom/ProyectoModulo1.git
   e17ce02..3a73aba  main -> main
PS C:\Users\Mauricio UDD\OneDrive - udd.cl\Escritorio\Bootcamp DWFS\Módulo 01\Proyecto\CodigoPSeint>

