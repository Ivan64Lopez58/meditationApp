# Meditation User Story

## Ejercicio 2: Historias de usuario para la página de Inicio de sesión/Registro

### 1. Registro de usuario
**Como** usuario, **quiero** registrarme ingresando mi nombre de usuario, correo electrónico y contraseña, **para** poder crear una cuenta.

**Criterios de aceptación:**
1. Los usuarios pueden ingresar detalles válidos y hacer clic en “Registrarse” para crear una cuenta.
2. Se muestra un mensaje de error si algún dato es inválido o falta.
3. La cuenta se crea correctamente y el usuario recibe una confirmación de registro.

**Story Points:** 3

---

### 2. Inicio de sesión
**Como** usuario, **quiero** iniciar sesión usando mi correo electrónico y contraseña, **para** poder acceder a mi cuenta.

**Criterios de aceptación:**
1. Los usuarios pueden iniciar sesión con credenciales correctas y son redirigidos a su panel de control.
2. Se muestra un mensaje de error para credenciales incorrectas.
3. Si las credenciales son incorrectas, el usuario puede reintentar.

**Story Points:** 3

---

### 3. Retroalimentación en registro e inicio de sesión
**Como** usuario, **quiero** recibir retroalimentación cuando intento registrarme o iniciar sesión sin ingresar detalles, **para** poder corregir los errores.

**Criterios de aceptación:**
1. Se muestran mensajes de error para campos faltantes en intentos de registro o inicio de sesión.
2. El usuario puede corregir los errores sin perder los datos ingresados.
3. La interfaz es clara y fácil de entender.

**Story Points:** 2

---

### 4. Almacenamiento de datos del usuario
**Como** usuario, **quiero** que mis detalles se almacenen en el almacenamiento local, **para** que mis datos persistan entre sesiones.

**Criterios de aceptación:**
1. Los detalles del usuario se guardan en el almacenamiento local después del registro y se utilizan para la autenticación durante el inicio de sesión.
2. Los detalles se recuperan automáticamente al iniciar sesión.
3. El almacenamiento local es seguro y no expone información sensible.

**Story Points:** 5

---

## Ejercicio 3: Historias de usuario para la página de inicio

### 1. Saludo personalizado
**Como** usuario, **quiero** un saludo personalizado con mi nombre y un título, **para** sentirme bienvenido y motivado a meditar.

**Criterios de aceptación:**
1. Mostrar “Hola, [nombre de usuario]” seguido del título “Encuentra tu meditación perfecta.”
2. El saludo se actualiza cada vez que el usuario inicia sesión.
3. La presentación es clara y amigable.

**Story Points:** 2

---

### 2. Tarjetas de meditación populares
**Como** usuario, **quiero** ver tarjetas de meditación populares, **para** poder explorar opciones según mis preferencias.

**Criterios de aceptación:**
1. Mostrar tarjetas con imágenes, títulos, descripciones, categorías como calma, relajación y duraciones como 10 o 15 minutos.
2. Las tarjetas son interactivas y el usuario puede seleccionar cualquier meditación.
3. Las tarjetas se actualizan dinámicamente según las preferencias del usuario.

**Story Points:** 4

---

### 3. Meditación destacada diaria
**Como** usuario, **quiero** una meditación destacada diaria, **para** poder acceder rápidamente a una sesión recomendada.

**Criterios de aceptación:**
1. Mostrar una meditación con una imagen, título, categoría y duración en una sección dedicada.
2. La meditación destacada cambia cada día.
3. El usuario puede iniciar la meditación desde la misma tarjeta.

**Story Points:** 3

---

### 4. Navegación intuitiva
**Como** usuario, **quiero** íconos de navegación intuitivos, **para** poder moverme fácilmente por la aplicación.

**Criterios de aceptación:**
1. Mostrar un logo en la esquina superior izquierda y un ícono de configuración en la esquina superior derecha para la navegación.
2. Los íconos son claramente visibles y funcionales en todas las pantallas.
3. Los íconos están alineados con la estética de la aplicación.

**Story Points:** 2

---

## Ejercicio 4: Historias de usuario para la pantalla detallada

### 1. Sección "Acerca de" para el ejercicio
**Como** usuario, **quiero** una sección “Acerca de” para cada ejercicio, **para** que pueda entender sus beneficios y propósito.

**Criterios de aceptación:**
1. Mostrar una breve descripción del ejercicio, explicando su enfoque y beneficios para reducir el estrés.
2. El texto debe ser claro y accesible.
3. La sección debe ser fácilmente visible en la página.

**Story Points:** 3

---

### 2. Sección “Instrucciones” para el ejercicio
**Como** usuario, **quiero** una sección “Instrucciones” para cada ejercicio, **para** que pueda realizarlo correctamente.

**Criterios de aceptación:**
1. Proporcionar orientación paso a paso sobre la postura y las técnicas de respiración para el ejercicio.
2. Las instrucciones deben ser fáciles de seguir y claras.
3. Las instrucciones deben estar organizadas de manera secuencial.

**Story Points:** 4

---

### 3. Botón “Agregar a Favoritos”
**Como** usuario, **quiero** un botón “Agregar a Favoritos”, **para** que pueda guardar fácilmente un ejercicio para practicarlo en el futuro.

**Criterios de aceptación:**
1. Incluir un botón “Agregar a Favoritos” prominente en la parte inferior de la página.
2. El estado del botón debe cambiar según si el ejercicio está o no en favoritos.
3. Al hacer clic, el ejercicio se guarda en la lista de favoritos.

**Story Points:** 3

---

### 4. Navegación para regresar y compartir
**Como** usuario, **quiero** íconos de navegación para compartir y regresar, **para** que pueda gestionar fácilmente la página del ejercicio.

**Criterios de aceptación:**
1. Mostrar un ícono de regreso y un ícono de compartir en la parte superior de la página para una navegación fácil.
2. Los íconos son interactivos y accesibles en dispositivos móviles.
3. El ícono de compartir permite compartir el ejercicio en múltiples plataformas.

**Story Points:** 3

---

## Ejercicio 5: Historias de usuario para la funcionalidad de agregar a favoritos

### 1. Agregar a Favoritos
**Como** usuario, **quiero** añadir un elemento a mis Favoritos, **para** poder guardar actividades o artículos que me gusten para un acceso rápido más tarde.

**Criterios de aceptación:**
1. Se muestra un ícono de corazón con el texto “Agregar a Favoritos” junto a cada elemento.
2. El corazón contorneado indica que el elemento no está en Favoritos.
3. Tocar el botón añade el elemento a la lista de Favoritos, actualiza el texto del botón a “Eliminar de Favoritos” y cambia el ícono del corazón a lleno.

**Story Points:** 3

---

### 2. Eliminar de Favoritos
**Como** usuario, **quiero** eliminar un elemento de mis Favoritos, **para** poder gestionar mi contenido guardado.

**Criterios de aceptación:**
1. Se muestra el botón “Eliminar de Favoritos” con un corazón lleno para los elementos que ya están en Favoritos.
2. Tocar el botón elimina el elemento de la lista de Favoritos y revierte el ícono del corazón a contorneado.
3. Los usuarios pueden añadir o eliminar elementos en cualquier momento, y el texto del botón se actualiza en consecuencia.

**Story Points:** 3

---

### 3. Ver mis Favoritos
**Como** usuario, **quiero** una pantalla de “Mis Favoritos”, **para** poder ver y gestionar todos mis elementos guardados en un solo lugar.

**Criterios de aceptación:**
1. La pantalla de “Mis Favoritos” muestra una lista de elementos guardados con su título, categoría y duración.
2. Los usuarios pueden tocar cualquier elemento para ver detalles o iniciar la actividad.
3. La lista de Favoritos se mantiene organizada para una fácil navegación y acceso rápido.

**Story Points:** 4

---

## Ejercicio 6: Historias de usuario para recordatorios diarios

### 1. Ver calendario y navegar entre meses
**Como** usuario, **quiero** ver el calendario del mes actual y navegar entre meses, **para** que pueda seleccionar fácilmente fechas para recordatorios.

**Criterios de aceptación:**
1. Mostrar el mes actual con todos los días visibles.
2. Proporcionar flechas de navegación para mover entre meses.
3. El calendario debe ser fácil de usar y navegar.

**Story Points:** 3

---

### 2. Seleccionar fecha y hora
**Como** usuario, **quiero** seleccionar una fecha y hora para un recordatorio, **para** que pueda programarlo correctamente.

**Criterios de aceptación:**
1. Mostrar un texto predeterminado “Fecha Seleccionada: Ninguna” y “Hora Seleccionada: 20:44” para indicar que no se ha seleccionado una fecha pero se ha elegido una hora.
2. Permitir a los usuarios seleccionar una hora y fecha específicas.

**Story Points:** 3

---

### 3. Agregar recordatorio
**Como** usuario, **quiero** agregar un recordatorio después de seleccionar una hora, **para** que pueda programarlo para una fecha y hora futuras.

**Criterios de aceptación:**
1. Después de seleccionar una hora, los usuarios pueden hacer clic en el botón “Agregar Recordatorio” para programar el recordatorio.

**Story Points:** 3

---

### 4. Ver y gestionar recordatorios
**Como** usuario, **quiero** ver una lista de todos mis recordatorios, **para** que pueda gestionarlos fácilmente.

**Criterios de aceptación:**
1. Mostrar una lista de todos los recordatorios con la fecha y hora seleccionadas.
2. Proporcionar una opción para eliminar un recordatorio haciendo clic en el botón rojo “Eliminar” junto a él.

**Story Points:** 3

## Ejercicio 7: Historias de usuario para compartir los ejercicios

### 1. Compartir ejercicios recomendados
**Como** usuario, **quiero** compartir fácilmente ejercicios recomendados con amigos o familiares, **para** poder ayudar a otros a descubrir actividades útiles.

**Criterios de aceptación:**
1. Proporcionar un botón/icono de compartir claro en la página de detalles del ejercicio para facilitar el compartir.
2. Permitir a los usuarios compartir ejercicios a través de múltiples plataformas (por ejemplo, redes sociales, correo electrónico o aplicaciones de mensajería).
3. El icono de compartir debe ser accesible y visible en la página de detalles de cada ejercicio.

**Story Points:** 3

---

## Ejercicio 8: Historias de usuario para la funcionalidad de cierre de sesión

### 1. Cerrar sesión
**Como** usuario, **quiero** un botón de cierre de sesión claro y visible, **para** que pueda cerrar sesión fácilmente en mi cuenta cuando haya terminado de usar la aplicación.

**Criterios de aceptación:**
1. Mostrar un botón de “Cerrar sesión” claro y visible en la aplicación.
2. Al tocar el botón, se cierra la sesión del usuario y se redirige a la página de inicio de sesión.
3. Los datos de la sesión del usuario se borran al cerrar sesión para garantizar un acceso seguro.

**Story Points:** 3

---

## Ejercicio 9: Historia de usuario para cambiar configuraciones

### 1. Alternar entre temas claros y oscuros
**Como** usuario, **quiero** alternar entre temas claros y oscuros, **para** poder reducir la fatiga visual y personalizar la experiencia visual de la aplicación.

**Criterios de aceptación:**
1. Proporcionar un interruptor o palanca de “Tema” en la sección de configuración para las opciones de modo claro y oscuro.
2. Permitir que el usuario cambie entre el modo claro y oscuro sin problemas.
3. El tema debe cambiar inmediatamente sin necesidad de refrescar o reiniciar la aplicación.

**Story Points:** 3
