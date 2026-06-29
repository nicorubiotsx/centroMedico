# Centro Médico San Francisco - Portal de Reservas 🏥

Aplicación web moderna y de alto rendimiento para el agendamiento de citas médicas del **Centro Médico San Francisco**. Diseñada con una arquitectura Backend for Frontend (BFF) para integrarse de forma segura con la API de gestión clínica de **Medilink 2 (Healthatom)**.

## 🚀 Características Principales

*   **Flujo de Reserva de 4 Pasos:** Experiencia de usuario (UX) guiada para elegir especialidad, médico, fecha/hora y confirmar datos del paciente.
*   **Diseño Premium y Dinámico:** Uso de Glassmorphism, micro-animaciones (Pulse, Shake), y un sistema visual limpio.
*   **Sistema de Temas Dinámico:** 3 paletas de colores intercambiables en tiempo real (Vanguardista, Confianza, Sanación) con persistencia en `localStorage`.
*   **Validación Estricta:** Validación en tiempo real del formato RUT chileno (Algoritmo Módulo 11) y teléfonos, tanto en el cliente como en el servidor.
*   **Seguridad:** El Token de la API de Medilink se maneja exclusivamente en el servidor (Next.js API Routes), nunca se expone al navegador del usuario.
*   **Responsive:** Diseño Mobile-first adaptado para funcionar a la perfección en smartphones, tablets y escritorios.

## 🛠️ Stack Tecnológico

*   **Framework Frontend:** React 19.2.4
*   **Framework Full-Stack:** Next.js 16.2.9 (App Router)
*   **Estilos:** CSS Vanilla + CSS Modules
*   **Tipografía:** Google Fonts (Outfit)
*   **Linter:** ESLint 9
*   **Despliegue Objetivo:** Vercel (Hobby Tier compatible)

## 🏗️ Arquitectura del Sistema

El proyecto utiliza un patrón **Backend for Frontend (BFF)**. 

1.  **Frontend (React Client Components):** Maneja la interfaz de usuario, estados y validaciones visuales.
2.  **Servidor Node (Next.js API Routes):** Actúa como proxy seguro en `/api/san-francisco/*`. Inyecta los headers de autenticación (`Authorization: Token`).
3.  **API Externa (Medilink 2):** Procesa la creación real de citas, lectura de agendas y validación final de datos.

## 📂 Estructura del Proyecto

```text
├── app/
│   ├── api/san-francisco/      # Rutas backend (Proxy hacia Medilink)
│   ├── reserva/                # Flujo completo de reserva (UI)
│   ├── globals.css             # Variables CSS globales y sistema de temas
│   ├── layout.js               # Layout raíz (Navbar, ThemeProvider, SEO)
│   └── page.js                 # Landing Page
├── components/                 # Componentes UI reutilizables
├── utils/
│   └── validation.js           # Lógica compartida de validación (RUT/Tel)
└── public/                     # Recursos estáticos
```

## 💻 Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/nicorubiotsx/centroMedico.git
   cd centroMedico
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env.local` en la raíz del proyecto y añade el token de Medilink:
   ```env
   MEDILINK_API_TOKEN=tu_token_de_acceso_aqui
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Próximos Pasos (Roadmap)
*   [ ] Integración real de creación de pacientes (`POST /pacientes`).
*   [ ] Panel de "Mis Citas" para los pacientes (`GET /pacientes/{id}/citas`).
*   [ ] Envío de correos automáticos y recordatorios.
