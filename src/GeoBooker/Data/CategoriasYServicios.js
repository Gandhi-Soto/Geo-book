// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 13/06/2024      #
//   --# Descripcion General : Informacion que usa el formulario                      #
//   ---------------------------------------------------------------------------------#-->
export const categorias = [
    {
        value: 'Atención médica',
        label: 'Atención médica',
        servicios: [
            { name: 'Cardiología', label: 'Cardiología' },
            { name: 'Centro de especialidades', label: 'Centro de especialidades' },
            { name: 'Consultorio médico', label: 'Consultorio médico' },
            { name: 'Cuidados paliativos', label: 'Cuidados paliativos' },
            { name: 'Dermatología', label: 'Dermatología' },
            { name: 'Endocrinología', label: 'Endocrinología' },
            { name: 'Enfermería', label: 'Enfermería' },
            { name: 'Farmacia', label: 'Farmacia' },
            { name: 'Fisioterapia', label: 'Fisioterapia' },
            { name: 'Gastroenterología', label: 'Gastroenterología' },
            { name: 'Geriatría', label: 'Geriatría' },
            { name: 'Gimnasio', label: 'Gimnasio' },
            { name: 'Ginecología y Obstetricia', label: 'Ginecología y Obstetricia' },
            { name: 'Hematología', label: 'Hematología' },
            { name: 'Hospital General', label: 'Hospital General' },
            { name: 'Hospital Privado', label: 'Hospital Privado' },
            { name: 'Laboratorio de análisis clínico', label: 'Laboratorio de análisis clínico' },
            { name: 'Neurología', label: 'Neurología' },
            { name: 'Nutriólogía', label: 'Nutriólogía' },
            { name: 'Odontología', label: 'Odontología' },
            { name: 'Oncología', label: 'Oncología' },
            { name: 'Optometría / Oftalmólogo', label: 'Optometría / Oftalmólogo' },
            { name: 'Ortopedista', label: 'Ortopedista' },
            { name: 'Pediatra', label: 'Pediatra' },
            { name: 'Podólogo', label: 'Podólogo' },
            { name: 'Psicólogo', label: 'Psicólogo' },
            { name: 'Psiquiatra', label: 'Psiquiatra' },
            { name: 'Radiología/Imagenología', label: 'Radiología/Imagenología' },
            { name: 'Traumatología', label: 'Traumatología' },
            { name: 'Urología', label: 'Urología' },
            { name: 'Quiropráctico', label: 'Quiropráctico' },
            { name: 'Veterinaria', label: 'Veterinaria' }
        ]
    },
    {
        value: 'Salud y belleza',
        label: 'Salud y belleza',
        servicios: [
            { name: 'Barbería', label: 'Barbería' },
            { name: 'Aplicación de bótox', label: 'Aplicación de bótox' },
            { name: 'Depilación', label: 'Depilación' },
            { name: 'Estética', label: 'Estética' },
            { name: 'Manicura / pedicura', label: 'Manicura / pedicura' },
            { name: 'Peinado / maquillaje', label: 'Peinado / maquillaje' },
            { name: 'Masajista', label: 'Masajista' },
            { name: 'Nails / lashes', label: 'Nails / lashes' },
            { name: 'Peluquería', label: 'Peluquería' },
            { name: 'Perfilado', label: 'Perfilado' },
            { name: 'Spa', label: 'Spa' },
            { name: 'Tratamientos faciales', label: 'Tratamientos faciales' },
            { name: 'Salón de belleza', label: 'Salón de belleza' },
            { name: 'Implante / injerto capilar', label: 'Implante / injerto capilar' },
            { name: 'Operaciones estéticas', label: 'Operaciones estéticas' },
            { name: 'Prótesis capilar', label: 'Prótesis capilar' }
        ]
    },
    {
        value: 'Alimentos y bebidas',
        label: 'Alimentos y bebidas',
        servicios: [
            { name: 'Alimentos ecológicos', label: 'Alimentos ecológicos' },
            { name: 'Alimentos veganos / vegetarianos', label: 'Alimentos veganos / vegetarianos' },
            { name: 'Bares', label: 'Bares' },
            { name: 'Cafetería', label: 'Cafetería' },
            { name: 'Catering', label: 'Catering' },
            { name: 'Camión de comida', label: 'Camión de comida' },
            { name: 'Comida china', label: 'Comida china' },
            { name: 'Comida japonesa', label: 'Comida japonesa' },
            { name: 'Comida corrida y antojitos mexicanos', label: 'Comida corrida y antojitos mexicanos' },
            { name: 'Comida internacional', label: 'Comida internacional' },
            { name: 'Comida rápida', label: 'Comida rápida' },
            { name: 'Dark Kitchen', label: 'Dark Kitchen' },
            { name: 'Heladería / fuente de sodas', label: 'Heladería / fuente de sodas' },
            { name: 'Jugos y snacks', label: 'Jugos y snacks' },
            { name: 'Restaurante', label: 'Restaurante' },
            { name: 'Panadería / pastelería', label: 'Panadería / pastelería' }
        ]
    },
    {
        value: 'Diversión y entretenimiento',
        label: 'Diversión y entretenimiento',
        servicios:[
            { name: 'Animador', label: 'Animador' },
            { name: 'Autobuses turísticos', label: 'Autobuses turísticos' },
            { name: 'Botargas', label: 'Botargas' },
            { name: 'Cine', label: 'Cine' },
            { name: 'Convención / exposición', label: 'Convención / exposición' },
            { name: 'DJ', label: 'DJ' },
            { name: 'Juegos de arcade', label: 'Juegos de arcade' },
            { name: 'Gotcha', label: 'Gotcha' },
            { name: 'Música en vivo', label: 'Música en vivo' },
            { name: 'Organizador', label: 'Organizador' },
            { name: 'Parque acuático', label: 'Parque acuático' },
            { name: 'Parque temático', label: 'Parque temático' },
            { name: 'Renta de audio y video', label: 'Renta de audio y video' },
            { name: 'Renta de juegos inflables', label: 'Renta de juegos inflables' },
            { name: 'Salón de eventos', label: 'Salón de eventos' },
            { name: 'Teatro', label: 'Teatro' }
        ]
    },
    {
        value: 'Servicios profesionales',
        label: 'Servicios profesionales',
        servicios: [
            { name: 'Albañilería', label: 'Albañilería' },
            { name: 'Animación', label: 'Animación' },
            { name: 'Arquitectura', label: 'Arquitectura' },
            { name: 'Asesor financiero', label: 'Asesor financiero' },
            { name: 'Asesoría fiscal', label: 'Asesoría fiscal' },
            { name: 'Bufete de abogados', label: 'Bufete de abogados' },
            { name: 'Carpintería', label: 'Carpintería' },
            { name: 'Ciberseguridad', label: 'Ciberseguridad' },
            { name: 'Community manager', label: 'Community manager' },
            { name: 'Consultor legal', label: 'Consultor legal' },
            { name: 'Consultoría en TI', label: 'Consultoría en TI' },
            { name: 'Contador', label: 'Contador' },
            { name: 'Contratista / Construcción', label: 'Contratista / Construcción' },
            { name: 'Crematorio', label: 'Crematorio' },
            { name: 'Desarrollo de software', label: 'Desarrollo de software' },
            { name: 'Diseño de interiores', label: 'Diseño de interiores' },
            { name: 'Diseño gráfico', label: 'Diseño gráfico' },
            { name: 'Diseño web', label: 'Diseño web' },
            { name: 'Editor de audio y video', label: 'Editor de audio y video' },
            { name: 'Electricista', label: 'Electricista' },
            { name: 'Embalsamador', label: 'Embalsamador' },
            { name: 'Funeraria', label: 'Funeraria' },
            { name: 'Gestión y asesoría de proyectos', label: 'Gestión y asesoría de proyectos' },
            { name: 'Guía turístico', label: 'Guía turístico' },
            { name: 'Herrería', label: 'Herrería' },
            { name: 'Ingeniería ambiental', label: 'Ingeniería ambiental' },
            { name: 'Ingeniería civil', label: 'Ingeniería civil' },
            { name: 'Marketing digital', label: 'Marketing digital' },
            { name: 'Notario', label: 'Notario' },
            { name: 'Plomería', label: 'Plomería' },
            { name: 'Programación', label: 'Programación' },
            { name: 'Traductor / interpretador', label: 'Traductor / interpretador' },
            { name: 'Urbanista', label: 'Urbanista' }
        ]
    },
    {
        value: 'Servicios vehiculares',
        label: 'Servicios vehiculares',
        servicios: [
            { name: 'Compra venta de autos', label: 'Compra venta de autos' },
            { name: 'Grúa', label: 'Grúa' },
            { name: 'Hojalatera', label: 'Hojalatera' },
            { name: 'Laminado y pintura', label: 'Laminado y pintura' },
            { name: 'Llantera', label: 'Llantera' },
            { name: 'Talachera', label: 'Talachera' },
            { name: 'Taller mecánico', label: 'Taller mecánico' },
            { name: 'Venta de partes para coches', label: 'Venta de partes para coches' }
        ]
    },
    {
        value: 'Mantenimiento y construcción',
        label: 'Mantenimiento y construcción',
        servicios: [
            { name: 'Carpintería y reparación de muebles', label: 'Carpintería y reparación de muebles' },
            { name: 'Climatización y aire acondicionado', label: 'Climatización y aire acondicionado' },
            { name: 'Control de plagas', label: 'Control de plagas' },
            { name: 'Drenajes y tuberías', label: 'Drenajes y tuberías' },
            { name: 'Electricidad', label: 'Electricidad' },
            { name: 'Fontanería', label: 'Fontanería' },
            { name: 'Jardinería y paisajismo', label: 'Jardinería y paisajismo' },
            { name: 'Limpieza doméstica o empresarial', label: 'Limpieza doméstica o empresarial' },
            { name: 'Mantenimiento de equipos y celulares', label: 'Mantenimiento de equipos y celulares' },
            { name: 'Mantenimiento de piscinas', label: 'Mantenimiento de piscinas' },
            { name: 'Pintura y decoración', label: 'Pintura y decoración' },
            { name: 'Reparación de electrodomésticos', label: 'Reparación de electrodomésticos' },
            { name: 'Reparación de techos', label: 'Reparación de techos' }
        ]
    },
    {
        value: 'Educación y capacitación',
        label: 'Educación y capacitación',
        servicios: [
            { name: 'Consultoría educativa', label: 'Consultoría educativa' },
            { name: 'Cursos de formación profesional', label: 'Cursos de formación profesional' },
            { name: 'Cursos de manejo', label: 'Cursos de manejo' },
            { name: 'Cursos de Verano', label: 'Cursos de Verano' },
            { name: 'Educación para adultos', label: 'Educación para adultos' },
            { name: 'Entrenamiento para exámenes', label: 'Entrenamiento para exámenes' },
            { name: 'Escuelas privadas', label: 'Escuelas privadas' },
            { name: 'Orientación vocacional', label: 'Orientación vocacional' },
            { name: 'Programas de educación a distancia', label: 'Programas de educación a distancia' },
            { name: 'Seminarios', label: 'Seminarios' },
            { name: 'Tutorías académicas', label: 'Tutorías académicas' },
            { name: 'Tutorías musicales', label: 'Tutorías musicales' },
            { name: 'Clases de cocina', label: 'Clases de cocina' },
            { name: 'Educación de pueblos originarios (Indígenas)', label: 'Educación de pueblos originarios (Indígenas)' },
            { name: 'Educación especial', label: 'Educación especial' }
        ]
    },
    {
        value: 'Comercios - mayoreo y menudeo',
        label: 'Comercios - mayoreo y menudeo',
        servicios: [
            { name: 'Artículos de colección', label: 'Artículos de colección' },
            { name: 'Artículos para niños.', label: 'Artículos para niños.' },
            { name: 'Comestibles.', label: 'Comestibles.' },
            { name: 'Decoración del hogar.', label: 'Decoración del hogar.' },
            { name: 'Deportes y equipamiento deportivo.', label: 'Deportes y equipamiento deportivo.' },
            { name: 'Electrónicos y tecnológicos.', label: 'Electrónicos y tecnológicos.' },
            { name: 'Guardería', label: 'Guardería' },
            { name: 'Joyería y relojería.', label: 'Joyería y relojería.' },
            { name: 'Lavandería / tintorería', label: 'Lavandería / tintorería' },
            { name: 'Librerías', label: 'Librerías' },
            { name: 'Mascotas y suministros para animales.', label: 'Mascotas y suministros para animales.' },
            { name: 'Mueblería', label: 'Mueblería' },
            { name: 'Papelerías.', label: 'Papelerías.' },
            { name: 'Ropa y accesorios.', label: 'Ropa y accesorios.' },
            { name: 'Tiendas de juguetes.', label: 'Tiendas de juguetes.' },
            { name: 'Venta / renta de inmuebles', label: 'Venta / renta de inmuebles' },
            { name: 'Zapatería', label: 'Zapatería' }
        ]
    }
];
