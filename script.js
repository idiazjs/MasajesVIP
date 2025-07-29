document.addEventListener('DOMContentLoaded', () => {
    // Traducciones
    const translations = {
        es: {
            'nav-home': 'Inicio',
            'nav-tantric': 'Masajes Tántricos',
            'nav-erotic': 'Masajes Eróticos',
            'nav-masseuses': 'Masajistas',
            'nav-contact': 'Contacto',
            'index-title': 'Inicio - Masajes VIP',
            'index-heading': 'Bienvenido a una experiencia que no se compara…',
            'index-p1': 'Aquí no solo vienes a relajarte… vienes a sentir, soltar, disfrutar y reconectar con tu cuerpo.<br>Ofrecemos masajes tántricos y eróticos diseñados para despertar tus sentidos, liberar tensiones y regalarte momentos que no se olvidan.',
            'index-p2': '🌹 Lencería, presencia, conexión, técnica y actitud.<br>Cada sesión está pensada para llevarte a un estado diferente, ya sea desde la calma profunda del tantra o la intensidad provocadora del masaje erótico.',
            'index-p3': 'Discreción, profesionalismo, belleza y ese toque que no se compra en ningún lado.<br>¿Quieres algo suave, energético, íntimo o atrevido? Aquí decides tú.',
            'index-p4': '🔻 Explora nuestras opciones en los siguientes apartados.<br>Y si aún no sabes por dónde empezar... déjate recomendar: el <a href="masajes-tantrico.html#tantra-c" class="text-blue-400 hover:text-blue-300">Tantra C</a> o el <a href="masajes-erotico.html#erotico-intenso" class="text-blue-400 hover:text-blue-300">Erótico Intenso</a> son nuestros favoritos.',
            'index-whatsapp': 'Contáctanos por WhatsApp',
            'index-schedule': 'Atención de lunes a sábado, 10:00 a 21 hrs. <br> Cita previa',
            'contact-title': 'Contacto - Masajes VIP',
            'contact-heading': 'Contáctanos',
            'contact-p1': '¿Interesado en nuestros servicios? ¡Escríbenos o visítanos!',
            'contact-whatsapp': 'Contáctanos por WhatsApp',
            'contact-schedule': 'Atención de lunes a sábado, 10:00 a 21 hrs.<br>Cita previa',
            'contact-location': '📍 Ubicación: Polanco',
            'contact-social': 'Correo: contacto@masajesvip.com (Opcional, actualiza si lo deseas)<br>Síguenos en nuestras redes sociales: <a href="#" class="text-blue-400 hover:text-blue-300">Instagram</a>, <a href="#" class="text-blue-400 hover:text-blue-300">Facebook</a>',
            'masseuses-title': 'Masajistas - Masajes VIP',
            'masseuses-heading': 'Nuestras Masajistas',
            'masseuses-p1': 'Conoce a nuestro equipo de profesionales dedicadas a ofrecerte una experiencia única, con técnica, presencia y profesionalismo.',
            'masseuse-ana': 'Ana',
            'masseuse-sofia': 'Sofía',
            'masseuse-luna': 'Luna',
            'book-masseuse': '¡La quiero!',
            'whatsapp-ana': 'Quiero hacer cita con esta masajista: Ana',
            'whatsapp-sofia': 'Quiero hacer cita con esta masajista: Sofía',
            'whatsapp-luna': 'Quiero hacer cita con esta masajista: Luna',
            'tantric-title': 'Masajes Tántricos - Masajes VIP',
            'tantric-heading': 'Masajes Tántricos',
            'tantric-schedule': 'Horario: Lunes a Sábado de 10:00 a 21:00 hrs.',
            'tantric-p1': 'Lo erótico te enciende. El tantra te conecta. ¿Cuál prefieres hoy?',
            'tantric-a-title': '🕉 Tantra A – Suave y energético',
            'tantric-a-desc': 'Una experiencia sutil, ideal para quienes se inician en el camino tántrico o prefieren algo ligero pero profundamente sensorial.<br>La sesión se realiza completamente acostado, con meditación guiada sencilla, respiración consciente y estimulación con plumas, cotonetes, aceites cálidos y tacto sutil, cuerpo a cuerpo solo con brazos y piernas.<br>La masajista trabaja en topless y no hay contacto hacia ella.<br>Incluye estimulación manual, sin masaje lingam.<br>Todo el enfoque está en relajar y energizar el cuerpo, sin intención de liberar.',
            'tantric-a-info': '🕐 60, 75, 90 o 120 min.<br>💵 Desde $1500<br>Masajista extra (4 manos) $500 adicionales.',
            'tantric-b-title': '🔥 Tantra B – Sensorial y envolvente',
            'tantric-b-desc': 'Un paso más profundo hacia la intimidad energética.<br>La experiencia incluye meditación activa, ejercicios de conexión visual, respiración compartida y estimulación sensorial más intensa, cuerpo a cuerpo (nuru) completo (con pechos, brazos, piernas, glúteos).<br>El cuerpo fluye entre estar acostado y posturas suaves que favorecen la apertura energética.<br>La masajista puede ser tocada con respeto en un nivel medio (brazos, espalda, piernas).<br>No incluye masaje lingam.',
            'tantric-b-info': '🕐 60, 75, 90 o 120 min.<br>💵 Desde $2000<br>Masajista extra (4 manos) $800 adicionales.',
            'tantric-c-title': '💫 Tantra C – Íntimo, total y transformador',
            'tantric-c-desc': 'Un ritual profundo, desnudo de cuerpo y mente.<br>Aquí el tiempo se detiene para entregarse por completo al arte del tacto, la respiración y la conciencia plena.<br>Se integran posturas conscientes, juegos energéticos, movimientos suaves y momentos de conexión desde distintas posiciones que favorecen la apertura corporal y emocional.<br>La masajista está completamente desnuda, y el contacto libre (respetuoso) es permitido, incluyendo torso y glúteos.<br>Incluye masaje lingam, con técnicas de respiración, enfoque y control energético, para alargar el placer y convertirlo en presencia.<br>Estimulación manual incluida.<br>Una experiencia intensa, expansiva y profundamente transformadora.',
            'tantric-c-info': '🕐 60, 75, 90 o 120 min.<br>💵 Desde $2500<br>Masajista extra (4 manos) $1000 adicionales.',
            'whatsapp-tantric-a': 'Quiero hacer cita para este masaje: Tantra A',
            'whatsapp-tantric-b': 'Quiero hacer cita para este masaje: Tantra B',
            'whatsapp-tantric-c': 'Quiero hacer cita para este masaje: Tantra C',
            'erotic-title': 'Masajes Eróticos - Masajes VIP',
            'erotic-heading': 'Masajes Eróticos',
            'erotic-schedule': 'Horario: Lunes a Sábado de 10:00 a 21:00 hrs.',
            'erotic-p1': 'Lo erótico te enciende. El tantra te conecta. ¿Cuál prefieres hoy?',
            'erotic-basic-title': '🍒 Erótico Básico – Clásico y provocador',
            'erotic-basic-desc': 'Perfecto si buscas algo directo y sin rodeos.<br>La sesión se realiza completamente acostado, sin cuerpo a cuerpo ni contacto hacia la masajista.<br>Ella trabaja en topless, pero entra con lencería y tacones.<br>Tacto sensual, mirada atrevida, y manos expertas.<br>Un viaje corto pero potente.',
            'erotic-basic-info': '🕐 30, 45, 60 o 75 min.<br>💵 Desde $1500',
            'erotic-shower-title': '💦 Erótico Ducha – Sensorial y juguetón',
            'erotic-shower-desc': 'Un nivel más íntimo y estimulante.<br>Comienza o finaliza con una ducha compartida, donde la masajista entra con parte inferior de lencería o tanga negra (se puede ajustar) y tú solo con agua y ganas.<br>Se incluye una exfoliación ligera y tacto en agua para preparar el cuerpo y elevar la tensión.<br>Después (o antes, a tu elección) se pasa al masaje con cuerpo a cuerpo parcial (piernas, brazos, antebrazos), con contacto permitido hacia la masajista (piernas, abdomen, espalda).<br>Todo con actitud provocadora y sensual, sin perder la elegancia.',
            'erotic-shower-info': '🕐 45 o 60 min.<br>💵 Desde $2000',
            'erotic-intense-title': '🔥 Erótico Intenso – Total y atrevido',
            'erotic-intense-desc': 'La experiencia más elevada y atrevida del masaje erótico.<br>Inicia con una respiración guiada sensual, para conectar con el momento.<br>Luego, baile privado erótico frente a ti, con lencería, mirada provocativa y movimientos diseñados para excitar sin tocar.<br>Durante el masaje, la masajista está completamente desnuda, y puedes tocarla con respeto (pechos y glúteos incluidos).<br>Cuerpo a cuerpo completo, juego de ritmo, piel, temperatura y deseo.<br>Sutilmente salvaje, y totalmente inolvidable.',
            'erotic-intense-info': '🕐 60, 75 o 90 min.<br>💵 Desde $2500',
            'erotic-note-title': '✅ Nota importante',
            'erotic-note-desc': 'Durante la sesión puedes solicitar aumentar el nivel de intensidad o duración directamente con la masajista.<br>Solo se puede aumentar, nunca reducir el tiempo ni el tipo de terapia.<br>Todo ajuste se paga al final. Pregunta con confianza dentro de cabina.',
            'ana-title': 'Ana - Masajes VIP',
            'ana-heading': 'Conoce a Ana',
            'ana-details-title': 'Detalles de Ana',
            'ana-details': '<strong>Edad:</strong> 28 años<br><strong>Altura:</strong> 1.65 m<br><strong>Medidas:</strong> 60-90-60<br><strong>Detalles:</strong> Ana es una experta en crear conexiones profundas, con una presencia cálida y seductora que te envuelve desde el primer momento. Su sonrisa magnética y su habilidad para leer tus deseos hacen de cada sesión un viaje inolvidable. Especialista en masajes tántricos, Ana combina técnica y sensualidad para despertar tus sentidos más profundos, ofreciendo una experiencia que equilibra relajación y excitación.',
            'sofia-title': 'Sofía - Masajes VIP',
            'sofia-heading': 'Conoce a Sofía',
            'sofia-details-title': 'Detalles de Sofía',
            'sofia-details': '<strong>Edad:</strong> 25 años<br><strong>Altura:</strong> 1.70 m<br><strong>Medidas:</strong> 58-88-60<br><strong>Detalles:</strong> Sofía combina elegancia y audacia, con una mirada penetrante que despierta la curiosidad y el deseo. Su cuerpo esculpido y su toque experto en masajes eróticos crean una experiencia intensa y provocadora. Con un carisma natural, Sofía te guía hacia un estado de placer puro, donde cada movimiento está diseñado para encender tus instintos más profundos.',
            'footer': '&copy; 2025 Masajes VIP. Todos los derechos reservados.',
            'book-service': '¡Lo quiero!'
        },
        en: {
            'nav-home': 'Home',
            'nav-tantric': 'Tantric Massages',
            'nav-erotic': 'Erotic Massages',
            'nav-masseuses': 'Masseuses',
            'nav-contact': 'Contact',
            'index-title': 'Home - Masajes VIP',
            'index-heading': 'Welcome to an unparalleled experience…',
            'index-p1': 'Here, you don’t just come to relax… you come to feel, let go, enjoy, and reconnect with your body.<br>We offer tantric and erotic massages designed to awaken your senses, release tension, and give you unforgettable moments.',
            'index-p2': '🌹 Lingerie, presence, connection, technique, and attitude.<br>Each session is designed to take you to a different state, whether through the deep calm of tantra or the provocative intensity of an erotic massage.',
            'index-p3': 'Discretion, professionalism, beauty, and that special touch you can’t buy anywhere else.<br>Do you want something gentle, energetic, intimate, or daring? You decide.',
            'index-p4': '🔻 Explore our options in the following sections.<br>If you’re not sure where to start, let us recommend: <a href="masajes-tantrico.html#tantra-c" class="text-blue-400 hover:text-blue-300">Tantra C</a> or <a href="masajes-erotico.html#erotico-intenso" class="text-blue-400 hover:text-blue-300">Erotic Intense</a> are our favorites.',
            'index-whatsapp': 'Contact us via WhatsApp',
            'index-schedule': 'Open Monday to Saturday, 10:00 AM to 9:00 PM. <br> By appointment only',
            'contact-title': 'Contact - Masajes VIP',
            'contact-heading': 'Contact Us',
            'contact-p1': 'Interested in our services? Write to us or visit us!',
            'contact-whatsapp': 'Contact us via WhatsApp',
            'contact-schedule': 'Open Monday to Saturday, 10:00 AM to 9:00 PM.<br>By appointment only',
            'contact-location': '📍 Location: Polanco',
            'contact-social': 'Email: contact@masajesvip.com (Optional, update if desired)<br>Follow us on social media: <a href="#" class="text-blue-400 hover:text-blue-300">Instagram</a>, <a href="#" class="text-blue-400 hover:text-blue-300">Facebook</a>',
            'masseuses-title': 'Masseuses - Masajes VIP',
            'masseuses-heading': 'Our Masseuses',
            'masseuses-p1': 'Meet our team of professionals dedicated to offering you a unique experience with technique, presence, and professionalism.',
            'masseuse-ana': 'Ana',
            'masseuse-sofia': 'Sofía',
            'masseuse-luna': 'Luna',
            'book-masseuse': 'I want her!',
            'whatsapp-ana': 'I want to book an appointment with this masseuse: Ana',
            'whatsapp-sofia': 'I want to book an appointment with this masseuse: Sofía',
            'whatsapp-luna': 'I want to book an appointment with this masseuse: Luna',
            'tantric-title': 'Tantric Massages - Masajes VIP',
            'tantric-heading': 'Tantric Massages',
            'tantric-schedule': 'Schedule: Monday to Saturday from 10:00 AM to 9:00 PM',
            'tantric-p1': 'Erotic ignites you. Tantra connects you. Which one do you prefer today?',
            'tantric-a-title': '🕉 Tantra A – Gentle and Energetic',
            'tantric-a-desc': 'A subtle experience, ideal for those new to tantric practices or who prefer something light yet deeply sensory.<br>The session is performed entirely lying down, with simple guided meditation, conscious breathing, and stimulation using feathers, cotton swabs, warm oils, and subtle touch, body-to-body only with arms and legs.<br>The masseuse works topless, with no contact allowed toward her.<br>Includes manual stimulation, without lingam massage.<br>The focus is on relaxing and energizing the body, without the intention of release.',
            'tantric-a-info': '🕐 60, 75, 90, or 120 min.<br>💵 From $1500<br>Extra masseuse (4 hands) $500 additional.',
            'tantric-b-title': '🔥 Tantra B – Sensory and Enveloping',
            'tantric-b-desc': 'A deeper step toward energetic intimacy.<br>The experience includes active meditation, visual connection exercises, shared breathing, and more intense sensory stimulation, full body-to-body (nuru) contact (with chest, arms, legs, buttocks).<br>The body flows between lying down and gentle postures that promote energetic opening.<br>The masseuse can be touched respectfully at a moderate level (arms, back, legs).<br>Does not include lingam massage.',
            'tantric-b-info': '🕐 60, 75, 90, or 120 min.<br>💵 From $2000<br>Extra masseuse (4 hands) $800 additional.',
            'tantric-c-title': '💫 Tantra C – Intimate, Total, and Transformative',
            'tantric-c-desc': 'A profound ritual, bare in body and mind.<br>Here, time stops to fully surrender to the art of touch, breathing, and full awareness.<br>It integrates conscious postures, energetic games, gentle movements, and moments of connection from various positions that promote physical and emotional opening.<br>The masseuse is fully nude, and respectful free contact is allowed, including torso and buttocks.<br>Includes lingam massage with breathing techniques, focus, and energetic control to prolong pleasure and transform it into presence.<br>Manual stimulation included.<br>An intense, expansive, and deeply transformative experience.',
            'tantric-c-info': '🕐 60, 75, 90, or 120 min.<br>💵 From $2500<br>Extra masseuse (4 hands) $1000 additional.',
            'whatsapp-tantric-a': 'I want to book an appointment for this massage: Tantra A',
            'whatsapp-tantric-b': 'I want to book an appointment for this massage: Tantra B',
            'whatsapp-tantric-c': 'I want to book an appointment for this massage: Tantra C',
            'erotic-title': 'Erotic Massages - Masajes VIP',
            'erotic-heading': 'Erotic Massages',
            'erotic-schedule': 'Schedule: Monday to Saturday from 10:00 AM to 9:00 PM',
            'erotic-p1': 'Erotic ignites you. Tantra connects you. Which one do you prefer today?',
            'erotic-basic-title': '🍒 Erotic Basic – Classic and Provocative',
            'erotic-basic-desc': 'Perfect if you’re looking for something direct and straightforward.<br>The session is performed entirely lying down, without body-to-body contact or touching the masseuse.<br>She works topless but starts in lingerie and heels.<br>Sensual touch, daring gaze, and expert hands.<br>A short but powerful journey.',
            'erotic-basic-info': '🕐 30, 45, 60, or 75 min.<br>💵 From $1500',
            'erotic-shower-title': '💦 Erotic Shower – Sensory and Playful',
            'erotic-shower-desc': 'A more intimate and stimulating level.<br>Starts or ends with a shared shower, where the masseuse wears lingerie bottoms or a black thong (adjustable) and you with just water and enthusiasm.<br>Includes light exfoliation and touch in water to prepare the body and heighten tension.<br>After (or before, your choice), the massage continues with partial body-to-body contact (legs, arms, forearms), with allowed touching of the masseuse (legs, abdomen, back).<br>All with a provocative and sensual attitude, without losing elegance.',
            'erotic-shower-info': '🕐 45 or 60 min.<br>💵 From $2000',
            'erotic-intense-title': '🔥 Erotic Intense – Total and Daring',
            'erotic-intense-desc': 'The most elevated and daring erotic massage experience.<br>Begins with guided sensual breathing to connect with the moment.<br>Followed by a private erotic dance in front of you, with lingerie, provocative gaze, and movements designed to excite without touching.<br>During the massage, the masseuse is fully nude, and respectful touching is allowed (including chest and buttocks).<br>Full body-to-body contact, playing with rhythm, skin, temperature, and desire.<br>Subtly wild and completely unforgettable.',
            'erotic-intense-info': '🕐 60, 75, or 90 min.<br>💵 From $2500',
            'erotic-note-title': '✅ Important Note',
            'erotic-note-desc': 'During the session, you can request to increase the intensity or duration directly with the masseuse.<br>Only increasing the time or type of therapy is allowed, never reducing.<br>All adjustments are paid at the end. Ask confidently in the session room.',
            'ana-title': 'Ana - Masajes VIP',
            'ana-heading': 'Meet Ana',
            'ana-details-title': 'Ana’s Details',
            'ana-details': '<strong>Age:</strong> 28 years<br><strong>Height:</strong> 1.65 m<br><strong>Measurements:</strong> 60-90-60<br><strong>Details:</strong> Ana is an expert in creating deep connections, with a warm and seductive presence that envelops you from the first moment. Her magnetic smile and ability to read your desires make each session an unforgettable journey. Specializing in tantric massages, Ana combines technique and sensuality to awaken your deepest senses, offering an experience that balances relaxation and excitement.',
            'sofia-title': 'Sofía - Masajes VIP',
            'sofia-heading': 'Meet Sofía',
            'sofia-details-title': 'Sofía’s Details',
            'sofia-details': '<strong>Age:</strong> 25 years<br><strong>Height:</strong> 1.70 m<br><strong>Measurements:</strong> 58-88-60<br><strong>Details:</strong> Sofía combines elegance and boldness, with a penetrating gaze that sparks curiosity and desire. Her sculpted body and expert touch in erotic massages create an intense and provocative experience. With natural charisma, Sofía guides you to a state of pure pleasure, where every movement is designed to ignite your deepest instincts.',
            'footer': '&copy; 2025 Masajes VIP. All rights reserved.',
            'book-service': '¡I want it!'
        }
    };

    // Cargar el header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            // Reasignar evento del menú móvil
            document.getElementById('menu-toggle').addEventListener('click', () => {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu.classList.toggle('hidden');
            });

            // Configurar el selector de idioma
            const languageToggle = document.getElementById('language-toggle');
            const savedLang = localStorage.getItem('language') || 'es';
            languageToggle.value = savedLang;
            translatePage(savedLang);

            languageToggle.addEventListener('change', (e) => {
                const selectedLang = e.target.value;
                localStorage.setItem('language', selectedLang);
                translatePage(selectedLang);
            });

            // Función para traducir la página
            function translatePage(lang) {
                document.querySelectorAll('[data-translate]').forEach(element => {
                    const key = element.getAttribute('data-translate');
                    if (translations[lang][key]) {
                        element.innerHTML = translations[lang][key];
                    }
                });

                // Actualizar enlaces de WhatsApp
                document.querySelectorAll('[data-whatsapp]').forEach(link => {
                    const key = link.getAttribute('data-whatsapp');
                    if (translations[lang][key]) {
                        const message = encodeURIComponent(translations[lang][key]);
                        link.setAttribute('href', `https://wa.me/5528403686?text=${message}`);
                    }
                });

                // Actualizar título de la página
                const titleKey = document.querySelector('title').getAttribute('data-translate');
                if (titleKey && translations[lang][titleKey]) {
                    document.querySelector('title').innerHTML = translations[lang][titleKey];
                }
            }
        })
        .catch(error => console.error('Error al cargar el header:', error));
});