Algoritmo calculadoraPrecio
	
	
	Definir producto, modoEntrega, aplicaDespacho, aplicaCupon Como Caracter
	Definir i, costoUnitarioReal, cantidad, valorDescuento, costoUnitarioDescuento, subtotal, ivaCompra, idEntrega, valorUnitarioDespacho, valorDespacho, total, idCupon, valorCupon, totalFinal Como Entero
	Definir porcentajeDescuento, iva, porcentajeCupon Como Real
	Dimension costoUnitarioReal[2]
	
	
	peso1 <- 1
	peso2 <- 2
	iva <- 0.2
	valorUnitarioDespacho <- 300
	
	
	Escribir "Bienvenido(a), este programa te permitirá calcular el costo total de la miel que compres." 
	Escribir "Hay en dos formatos, de 1 kg ($ 1000 el pote) y de 2 kg ($ 1800 el pote)."
	Escribir "Primero necesitamos que nos ayudes a registrar ambos valores en nuestro sistema."
	
	// Ingresar los dos valores del arreglo "costoUnitarioReal"
	Para i <- 1 Hasta 2 Con Paso 1 Hacer
		Escribir "Ingresa el valor N° ", i
		leer costoUnitarioReal[i]
	Fin Para
	
	
	Escribir "El primer precio ingresado es: $ ", costoUnitarioReal[1]
	Escribir "El segundo precio ingresado es: $ ", costoUnitarioReal[2]
	Escribir "¿Cuál es el precio del formato que deseas? Debe ser 1 o 2"
	
	
	// Validar selección de precio correcto
	Repetir
		leer i
		si i <> 1 y i <> 2 Entonces
			Escribir "Debes escribir 1 o 2."
		FinSi
	Hasta Que i = 1 o i = 2
	

	Escribir "¿Cuántos potes necesitas? Mínimo debe ser 1. Dependiendo la cantidad, se te otorga un descuento sobre el valor del producto, no el total de la compra"
	Escribir "5 o más el descuento es del 20%" 
	
	
	// Validar cantidad
	Repetir
		leer cantidad
		Si cantidad < 1 Entonces
			Escribir "La cantidad mínima es 1 pote, vuelve a ingresar un número"
		FinSi
	Hasta Que cantidad >= 1
	
	
	Escribir "Indicar forma de entrega:"
	Escribir "(1) Retiro en tienda (costo $ 0)"
	Escribir "(2) Despacho en Región Metropolitana (costo $ 300 por kilo)"
	Escribir "Ingresa un número según la opción que desees"
	
	
	// Validar ingreso de entrega correcto
	Repetir
		leer idEntrega
		si idEntrega <> 1 y idEntrega <> 2 Entonces
			Escribir "Debes ingresar 1 o 2"
		FinSi
	Hasta Que idEntrega = 1 o idEntrega = 2
	
	
	// Definir tipo de producto
	Si costoUnitarioReal[i] = 1000 Entonces
		producto = "Pote de 1kg"
	SiNo producto = "Pote de 2 kg"
	FinSi
	
	
	// Descuento por cantidad y precio unitario considerando el descuento
	Si cantidad < 5 Entonces
		porcentajeDescuento = 0
		costoUnitarioDescuento = costoUnitarioReal[i] * (1 - porcentajeDescuento)
	SiNo
		porcentajeDescuento = 0.2
		costoUnitarioDescuento = costoUnitarioReal[i] * (1 - porcentajeDescuento)
	FinSi
	
	
	// Calcular subtotal 
	subtotal = costounitarioDescuento * cantidad
	
	
	// IVA de la compra
	ivaCompra = subtotal * iva
	
	
	// Definir modo de entrega
	Si idEntrega = 1 Entonces
		modoEntrega = "Retiro en tienda (costo $ 0)"
		aplicaDespacho = "No"
	SiNo
		modoEntrega = "Despacho en Región Metropolitana (costo $ 300 por kilo)"
		aplicaDespacho = "Sí"
	FinSi
	
	
	// Valor del despacho
	Si aplicaDespacho = "Sí" Entonces
		Si producto = "Pote de 1kg" Entonces
			valorDespacho = valorUnitarioDespacho * cantidad * peso1
		SiNo
			valorDespacho = valorUnitarioDespacho * cantidad * peso2
		FinSi
	SiNo 	valorDespacho = 0
	FinSi
	
	
	// Total a pagar (valor por productos + IVA + Despacho)
	total = subtotal + ivaCompra + valorDespacho
	
	
	Escribir "Cupón de descuento:"
	Escribir "Ingresa 0 si no tienes cupón de descuento"
	Escribir "Ingresa 30 si tienes cupón de descuento (30%)"
	
	
	// Validar ingreso de cupón correcto
	Repetir
		leer idCupon
		si idCupon <> 0 y idCupon <> 30 Entonces
			Escribir "Debes ingresar 0 o 30"
		FinSi
	Hasta Que idCupon = 0 o idCupon = 30
	
	
	// Definir si aplica cupón, porcentaje cupón y valor cupón
	Si idCupon = 0 Entonces
		aplicaCupon = "No"
		porcentajeCupon = 0
		valorCupon = 0
	SiNo
		aplicaCupon = "Sí"
		porcentajeCupon = 0.3
		valorCupon = total * porcentajeCupon
	FinSi
	
	
	// Definir total a pagar final (total menos el descuento de cupón)
	totalFinal = total - valorCupon
	
	
	Escribir "-------------------"
	Escribir "Resumen de la compra"
	Escribir "Producto seleccionado: ", producto
	Escribir "Costo unitario real: $ ", costoUnitarioReal[i]
	Escribir "Cantidad: ", cantidad
	Escribir "Descuento por cantidad: ", (porcentajeDescuento * 100), "%"
	Escribir "Costo unitario con descuento: $ ", costoUnitarioDescuento
	Escribir "Subtotal: $ ", subtotal
	Escribir "IVA: $ ", ivaCompra, " (", (iva * 100), "%)"
	Escribir "Tipo de entrega: ", modoEntrega
	Escribir "Despacho: ", aplicaDespacho
	Escribir "Costo del despacho: $ ", valorDespacho
	Escribir "Total a pagar: $ ", total
	Escribir "Cupón de descuento: ", aplicaCupon
	Escribir "Valor cupón: $ ", valorCupon, " (", (porcentajeCupon * 100), "%)"
	Escribir "Total final: $ ", totalFinal

FinAlgoritmo

