# Estructura de directorios con Lazyload

Lazy Load es un patrón de diseño que consiste en retrasar la carga o inicialización de un objeto hasta el momento de su utilización. Esto significa que obtiene los datos o procesa los objetos solamente cuando se necesitan. 

Ejemplo de estructura de directorios para un proyecto mediano/grande:

    ng new admin --routing=true --style=scss
    ng g m auth --routing
    ng g m core --routing
    ng g m shared

    ng g c auth/pages/login
    ng g c auth/pages/register
    ng g c auth/pages/recover

    ng g c core
    ng g c core/customers/pages/index
    ng g c core/customers/pages/create
    ng g c core/customers/pages/update
    ng g c core/products/pages/index
    ng g c core/products/pages/create
    ng g c core/products/pages/update

    ng g c shared/header
    ng g c shared/footer
    ng g c shared/sidebar
