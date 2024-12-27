# **Task Manager Frontend**

Este es el frontend para la aplicación **Task Manager**, desarrollado con **Vite**, **React**, y **TypeScript**. La aplicación permite gestionar tareas de forma interactiva, integrándose con una API backend basada en **Supabase**.

La Aplicación está desplegada y disponible en la siguiente URL:
App: https://cdcm-task-manager.netlify.app/

---

## **Características**

- Gestión de tareas: crear, leer, actualizar y eliminar.
- Autenticación con **Supabase** y **OAuth**.
- Validación de formularios con **React Hook Form** y **Zod**.
- Estilización moderna con **TailwindCSS**.
- Navegación fluida mediante **React Router**.
- Estado global manejado con **Redux Toolkit**.
- Arquitectura tipada y mantenible gracias a **TypeScript**.

---

## **Requisitos**

Antes de comenzar, asegúrate de tener instalado:

- **Node.js**: versión 22 o superior.
- **npm**: versión 10 o superior.
- Backend configurado y desplegado (ver [Task Manager API](https://github.com/123CarlosDaniel/task-manager-api)).

---

## **Estructura del Proyecto**
```plaintext
src/
├── components/      # Componentes reutilizables
├── hooks/           # Hooks personalizados
├── layouts/         # Layouts de la aplicación
├── lib/             # Funciones y utilidades
├── pages/           # Páginas principales del proyecto
├── services/        # Comunicación con la API y Supabase
├── store/           # Manejador de estado global
├── supabase/        # Configuración de Supabase
├── types/           # Tipos de datos
├── App.tsx          # Componente principal de la aplicación, contiene el enrutamiento
└── main.tsx         # Archivo principal de la aplicación
```

## **Configuración de la Aplicación**

### 1. **Clonar el Repositorio**
```bash
git clone https://github.com/123CarlosDaniel/task-manager-frontend.git
cd task-manager-frontend
```

### 2. **Configurar Variables de Entorno**
Crea un archivo .env.local en la raíz del proyecto y agrega las siguientes variables:

```plaintext
VITE_API_URL=<url_de_tu_api_backend>
VITE_APP_URL=<tu_url_de_la_aplicacion>
VITE_SUPABASE_PROJECT_URL=<tu_supabase_project_url>
VITE_SUPABASE_ANON_KEY=<tu_supabase_anon_key>
```

#### ¿Dónde obtener las claves de Supabase?
Consulta la sección de configuración en el [Task Manager API README](https://github.com/123CarlosDaniel/task-manager-api).

### 3. Instala las dependencias:
```bash
npm install
```

### 4. Ejecuta el modo de desarrollo:
```bash
npm run dev
```
Esto iniciará un servidor de desarrollo en http://localhost:5173.

### 5. Compila el proyecto:
```bash
npm run build
```
Los archivos de producción se generarán en la carpeta dist/.


