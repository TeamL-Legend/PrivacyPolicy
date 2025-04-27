document.addEventListener('DOMContentLoaded', () => {
    const privacyText = document.getElementById('privacy-text');
    const policyText = document.getElementById('policy-text');
    const appleLogo = document.querySelector('.apple-logo img');
    const privacyPolicyContent = document.querySelector('.privacy-policy-content');
    const privacyWord = 'Privacy';
    const policyWord = 'Policy';

    function animateText(element, text, isWholeWord = false) {
        return new Promise(resolve => {
            element.style.opacity = 1;
            
            if (isWholeWord) {
                // Animate the whole word at once with a fade-in effect
                element.textContent = text;
                element.style.transition = 'opacity 1s ease';
                element.style.opacity = 1;
                resolve();
                return;
            }

            let index = 0;
            const typing = setInterval(() => {
                if (index < text.length) {
                    // Slower and more gradual typing with longer delays
                    const delays = [150, 200, 180, 160, 190, 170, 210];
                    element.textContent += text[index];
                    index++;
                    
                    // Even softer opacity increase for smoother, slower appearance
                    element.style.transition = 'opacity 0.5s ease';
                    element.style.opacity = Math.min(1, parseFloat(element.style.opacity) + 0.05);
                } else {
                    clearInterval(typing);
                    resolve();
                }
            }, 150); // Significantly slower base interval
        });
    }

    async function showContent() {
        // More fluid Privacy text animation with subtle variation
        await animateText(privacyText, privacyWord);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Policy text now appears as a whole word with fade-in
        await animateText(policyText, policyWord, true);
        
        await new Promise(resolve => {
            setTimeout(() => {
                appleLogo.style.opacity = 1;
                resolve();
            }, 500);
        });

        await new Promise(resolve => {
            setTimeout(() => {
                privacyPolicyContent.style.opacity = 1;
                const listItems = privacyPolicyContent.querySelectorAll('li');
                listItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = 1;
                        item.style.transform = 'translateX(0)';
                    }, index * 200);
                });
                resolve();
            }, 500);
        });
    }

    // Detailed content for each privacy policy section
    const privacyDetails = {
        'ru': {
            'info-collection': {
                title: 'Сбор Информации',
                content: `
                    <h3>Как Мы Собираем Информацию</h3>
                    <p>Мы собираем информацию, которую вы предоставляете напрямую:</p>
                    <ul>
                        <li>Личные данные при создании аккаунта</li>
                        <li>Контактная информация при регистрации</li>
                        <li>Автоматически собираемая информация об устройстве</li>
                        <li>Данные о местоположении с вашего согласия</li>
                    </ul>
                    <p>Весь сбор данных прозрачен и добровольен.</p>
                `
            },
            'data-usage': {
                title: 'Использование Личных Данных',
                content: `
                    <h3>Как Мы Используем Ваши Данные</h3>
                    <p>Ваши личные данные используются для:</p>
                    <ul>
                        <li>Предоставления и улучшения услуг</li>
                        <li>Персонализации пользовательского опыта</li>
                        <li>Коммуникации важных обновлений</li>
                        <li>Усиления мер безопасности</li>
                        <li>Соблюдения юридических обязательств</li>
                    </ul>
                    <p>Мы никогда не продаем вашу личную информацию третьим лицам.</p>
                `
            },
            'data-protection': {
                title: 'Защита Данных',
                content: `
                    <h3>Обеспечение Безопасности Ваших Данных</h3>
                    <p>Мы реализуем надежные меры безопасности:</p>
                    <ul>
                        <li>Шифрование конфиденциальных данных</li>
                        <li>Регулярные аудиты безопасности</li>
                        <li>Строгий контроль доступа</li>
                        <li>Соблюдение международных стандартов</li>
                        <li>Постоянный мониторинг систем</li>
                    </ul>
                    <p>Ваша конфиденциальность и целостность данных являются нашими главными приоритетами.</p>
                `
            },
            'cookies-policy': {
                title: 'Политика Файлов Cookie',
                content: `
                    <h3>Использование Файлов Cookie</h3>
                    <p>Мы используем файлы cookie для:</p>
                    <ul>
                        <li>Улучшения функциональности сайта</li>
                        <li>Запоминания предпочтений пользователей</li>
                        <li>Анализа трафика сайта</li>
                        <li>Предоставления персонализированного контента</li>
                    </ul>
                    <p>Вы можете управлять настройками файлов cookie в настройках вашего браузера.</p>
                `
            },
            'third-party': {
                title: 'Сторонние Службы',
                content: `
                    <h3>Взаимодействие со Сторонними Службами</h3>
                    <p>Мы можем делиться данными с доверенными сторонними службами для:</p>
                    <ul>
                        <li>Улучшения услуг</li>
                        <li>Аналитики и исследований</li>
                        <li>Соблюдения юридических обязательств</li>
                        <li>Технической поддержки</li>
                    </ul>
                    <p>Мы гарантируем, что все взаимодействия со сторонними службами сохраняют вашу конфиденциальность.</p>
                `
            }
        },
        'en': {
            'info-collection': {
                title: 'Information Collection',
                content: `
                    <h3>How We Collect Information</h3>
                    <p>We collect information you provide directly to us, such as:</p>
                    <ul>
                        <li>Personal details when you create an account</li>
                        <li>Contact information during registration</li>
                        <li>Device and usage information automatically</li>
                        <li>Location data with your consent</li>
                    </ul>
                    <p>All data collection is transparent and consensual.</p>
                `
            },
            'data-usage': {
                title: 'Usage of Personal Data',
                content: `
                    <h3>How We Use Your Data</h3>
                    <p>Your personal data is used to:</p>
                    <ul>
                        <li>Provide and improve our services</li>
                        <li>Personalize user experience</li>
                        <li>Communicate important updates</li>
                        <li>Enhance security measures</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                    <p>We never sell your personal information to third parties.</p>
                `
            },
            'data-protection': {
                title: 'Data Protection',
                content: `
                    <h3>Ensuring Your Data Security</h3>
                    <p>We implement robust security measures:</p>
                    <ul>
                        <li>Encryption of sensitive data</li>
                        <li>Regular security audits</li>
                        <li>Strict access controls</li>
                        <li>Compliance with international standards</li>
                        <li>Continuous monitoring of systems</li>
                    </ul>
                    <p>Your privacy and data integrity are our top priorities.</p>
                `
            },
            'cookies-policy': {
                title: 'Cookies Policy',
                content: `
                    <h3>Our Cookie Usage</h3>
                    <p>We use cookies to:</p>
                    <ul>
                        <li>Improve site functionality</li>
                        <li>Remember user preferences</li>
                        <li>Analyze site traffic</li>
                        <li>Provide personalized content</li>
                    </ul>
                    <p>You can manage cookie preferences in your browser settings.</p>
                `
            },
            'third-party': {
                title: 'Third-Party Services',
                content: `
                    <h3>Interactions with Third-Party Services</h3>
                    <p>We may share data with trusted third parties for:</p>
                    <ul>
                        <li>Service improvement</li>
                        <li>Analytics and research</li>
                        <li>Legal compliance</li>
                        <li>Technical support</li>
                    </ul>
                    <p>We ensure all third-party interactions maintain your privacy.</p>
                `
            }
        }
    };

    // Language toggle functionality
    const langRuBtn = document.getElementById('lang-ru');
    const langEnBtn = document.getElementById('lang-en');
    let currentLanguage = 'ru';

    function updateLanguage(lang) {
        currentLanguage = lang;
        
        // Update button styles
        langRuBtn.classList.toggle('active', lang === 'ru');
        langEnBtn.classList.toggle('active', lang === 'en');

        // Update page title and headings
        document.title = lang === 'ru' 
            ? 'Политика Конфиденциальности' 
            : 'Privacy Policy';
        
        document.querySelector('.privacy-policy-content h2').textContent = 
            lang === 'ru' ? 'Политика Конфиденциальности' : 'Privacy Policy';

        // Update list item texts
        const listItems = {
            'ru': [
                'Сбор Информации', 
                'Использование Личных Данных', 
                'Защита Данных', 
                'Политика Файлов Cookie', 
                'Сторонние Службы'
            ],
            'en': [
                'Information Collection', 
                'Usage of Personal Data', 
                'Data Protection', 
                'Cookies Policy', 
                'Third-Party Services'
            ]
        };

        const listItemElements = document.querySelectorAll('.privacy-policy-content li');
        listItemElements.forEach((item, index) => {
            item.textContent = listItems[lang][index];
        });
    }

    // Language button event listeners
    langRuBtn.addEventListener('click', () => updateLanguage('ru'));
    langEnBtn.addEventListener('click', () => updateLanguage('en'));

    // Modify modal triggers to use language-specific content
    const modalTriggers = document.querySelectorAll('.privacy-policy-content li');
    const modal = document.getElementById('modal-content-container');
    const modalDetails = document.getElementById('modal-details');
    const closeBtn = document.querySelector('.close-btn');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const contentKey = trigger.getAttribute('data-content');
            const details = privacyDetails[currentLanguage][contentKey];
            
            modalDetails.innerHTML = `
                <h3>${details.title}</h3>
                ${details.content}
            `;
            
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal if clicked outside of content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initial language setup
    updateLanguage('ru');
    showContent();
});