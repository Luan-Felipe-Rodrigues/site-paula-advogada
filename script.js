    // Dados dos serviços
    const servicesData = [
      {
        title: "Aposentadoria por Idade",
        icon: "fas fa-birthday-cake",
        subtitle: "Análise completa para identificar o melhor momento para solicitar sua aposentadoria.",
        fullDescription: "Você pode ter direito à aposentadoria por idade se já completou a idade mínima exigida e tem o tempo de contribuição necessário. A idade mínima varia conforme o tipo de atividade e sexo da pessoa.",
        targetAudience: [
            "Já passou dos 60 anos",
            "Já trabalhou com registro ou contribuiu como autônomo",
            "Está inseguro sobre quanto tempo tem de contribuição"
        ]
      },
      {
        title: "Aposentadoria por Tempo de Contribuição",
        icon: "fas fa-clock",
        subtitle: "Verificação detalhada do seu tempo de contribuição e orientação sobre as regras de transição.",
        fullDescription: "Mesmo com a Reforma da Previdência, quem já contribuía antes de 2019 pode ter direito à aposentadoria por tempo de contribuição com regras de transição. Isso pode significar aposentadoria mais rápida e com valor maior.",
        targetAudience: [
            "Trabalhou por muitos anos com ou sem registro",
            "Está perto de completar 30 (mulher) ou 35 (homem) anos de contribuição",
            "Contribuiu como autônomo, MEI, rural ou servidor público"
        ]
      },
      {
        title: "Aposentadoria por Invalidez",
        icon: "fas fa-heart",
        subtitle: "Assessoria completa para casos de aposentadoria por invalidez, incluindo perícias e recursos.",
        fullDescription: "Esse benefício é para quem, por motivo de doença ou acidente, perdeu totalmente a capacidade de trabalhar. É necessário passar por perícia médica do INSS e apresentar documentos bem estruturados.",
        targetAudience: [
            "Está em tratamento médico contínuo e afastado do trabalho",
            "Já recebe auxílio-doença, mas a recuperação não é possível",
            "Precisa de ajuda para preparar laudos e documentos"
        ]
      },
      {
        title: "Benefícios por Incapacidade",
        icon: "fas fa-medkit",
        subtitle: "Auxílio-doença, auxílio-acidente e outros benefícios com acompanhamento especializado.",
        fullDescription: "Inclui auxílio-doença (quando você está temporariamente incapaz) e auxílio-acidente (quando fica com sequelas permanentes). É essencial comprovar o impacto da doença ou acidente no seu trabalho.",
        targetAudience: [
            "Está doente ou sofreu um acidente e precisou se afastar do trabalho",
            "Foi afastado mas o INSS negou o benefício",
            "Precisa renovar o auxílio-doença ou recorrer"
        ]
      },
      {
        title: "Revisão de Benefícios",
        icon: "fas fa-search",
        subtitle: "Análise de benefícios já concedidos para identificar possíveis revisões e correções de valores.",
        fullDescription: "Você já recebe um benefício do INSS? É possível que o valor esteja errado ou que tenham deixado de considerar períodos ou contribuições. A revisão pode corrigir isso — e gerar pagamento retroativo.",
        targetAudience: [
            "Já recebe um benefício e desconfia que o valor está baixo",
            "Mudou de contador ou teve vínculos antigos não considerados",
            "Quer revisar o cálculo feito pelo INSS"
        ]
      },
      {
        title: "Consultoria Previdenciária",
        icon: "fas fa-chart-line",
        subtitle: "Orientação personalizada para planejamento previdenciário e estratégias de contribuição.",
        fullDescription: "Se você ainda não tem direito à aposentadoria, mas quer se planejar, essa consultoria é essencial. A Dra. Paula analisa o seu histórico e orienta sobre quanto, quando e como contribuir para garantir o melhor benefício possível.",
        targetAudience: [
            "Está longe de se aposentar, mas quer garantir um futuro seguro",
            "Tem dúvidas sobre qual valor contribuir por conta própria",
            "Trabalha informalmente ou presta serviços como MEI/autônomo"
        ]
      }
    ];

    document.addEventListener('DOMContentLoaded', () => {
        // Navegação fixa
        const nav = document.getElementById('nav');
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 100);
        });

        // Botão voltar ao topo
        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 300);
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Menu mobile
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const mobileNavClose = document.querySelector('.mobile-nav-close');
        const mobileNavMenu = document.querySelector('.mobile-nav-menu');

        const openMobileMenu = () => {
            mobileNavMenu.classList.add('open');
            document.body.classList.add('mobile-nav-active');
        };

        const closeMobileMenu = () => {
            mobileNavMenu.classList.remove('open');
            document.body.classList.remove('mobile-nav-active');
        };

        mobileNavToggle.addEventListener('click', openMobileMenu);
        mobileNavClose.addEventListener('click', closeMobileMenu);

        mobileNavMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Modal de Contato
        const contactModal = document.getElementById('contactModal');
        const emailLinks = document.querySelectorAll('.email-link');
        const modalCloseBtn = document.getElementById('modalCloseBtn');

        const openContactModal = () => contactModal.classList.add('visible');
        const closeContactModal = () => contactModal.classList.remove('visible');

        emailLinks.forEach(link => link.addEventListener('click', openContactModal));
        modalCloseBtn.addEventListener('click', closeContactModal);
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) closeContactModal();
        });

        // Toast Notification
        const toast = document.getElementById('toast-notification');
        const showToast = (message) => {
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        };

        // Supabase config
        const SUPABASE_URL = 'https://xdmpicnibjrvozdxqwgs.supabase.co';
        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkbXBpY25pYmpydm96ZHhxd2dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2MDM1ODIsImV4cCI6MjA4OTE3OTU4Mn0.CO3pyvt3AKGoaKl5Ouix2LxAq5nztKEImok6tT_k_Ug';

        // Chat Widget
        const chatToggle = document.getElementById('chatToggle');
        const chatWindow = document.getElementById('chatWindow');
        const chatClose = document.getElementById('chatClose');
        const chatMessages = document.getElementById('chatMessages');
        const chatInput = document.getElementById('chatInput');
        const chatSend = document.getElementById('chatSend');
        let chatHistory = [];
        let chatOpened = false;

        function addMessage(text, sender) {
            const div = document.createElement('div');
            div.className = 'chat-msg ' + sender;
            div.innerHTML = text.replace(/https:\/\/wa\.me\/\d+/g, '<a href="$&" target="_blank">$&</a>');
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function showTyping() {
            const div = document.createElement('div');
            div.className = 'chat-typing';
            div.id = 'typing';
            div.textContent = 'Digitando...';
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function removeTyping() {
            const el = document.getElementById('typing');
            if (el) el.remove();
        }

        async function sendChat(text) {
            addMessage(text, 'user');
            chatHistory.push({ role: 'user', content: text });
            chatInput.value = '';
            showTyping();

            try {
                const res = await fetch(SUPABASE_URL + '/functions/v1/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + SUPABASE_KEY
                    },
                    body: JSON.stringify({ messages: chatHistory })
                });
                const data = await res.json();
                removeTyping();

                if (data.reply) {
                    chatHistory.push({ role: 'assistant', content: data.reply });
                    addMessage(data.reply, 'bot');
                } else {
                    addMessage('Desculpe, tive um problema. Fale conosco pelo <a href="https://wa.me/5511971146150" target="_blank">WhatsApp</a>.', 'bot');
                }
            } catch (err) {
                removeTyping();
                addMessage('Erro de conexão. Fale conosco pelo <a href="https://wa.me/5511971146150" target="_blank">WhatsApp</a>.', 'bot');
            }
        }

        chatToggle.addEventListener('click', () => {
            chatWindow.classList.toggle('open');
            if (!chatOpened) {
                chatOpened = true;
                chatHistory = [{ role: 'user', content: 'Olá' }];
                showTyping();
                fetch(SUPABASE_URL + '/functions/v1/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + SUPABASE_KEY
                    },
                    body: JSON.stringify({ messages: chatHistory })
                })
                .then(r => r.json())
                .then(data => {
                    removeTyping();
                    if (data.reply) {
                        chatHistory.push({ role: 'assistant', content: data.reply });
                        addMessage(data.reply, 'bot');
                    }
                })
                .catch(() => {
                    removeTyping();
                    addMessage('Olá! Sou a assistente da Dra. Paula Cesare. Como posso ajudar? Se preferir, fale pelo <a href="https://wa.me/5511971146150" target="_blank">WhatsApp</a>.', 'bot');
                });
            }
        });

        chatClose.addEventListener('click', () => chatWindow.classList.remove('open'));

        chatSend.addEventListener('click', () => {
            const text = chatInput.value.trim();
            if (text) sendChat(text);
        });

        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const text = chatInput.value.trim();
                if (text) sendChat(text);
            }
        });

        // Formulário de contato
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(SUPABASE_URL + '/rest/v1/rpc/submit_lead', {
                    method: 'POST',
                    headers: {
                        'apikey': SUPABASE_KEY,
                        'Authorization': 'Bearer ' + SUPABASE_KEY,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        p_nome: document.getElementById('name').value,
                        p_email: document.getElementById('email').value,
                        p_telefone: document.getElementById('phone').value,
                        p_assunto: 'Consulta via site',
                        p_mensagem: document.getElementById('message').value
                    })
                });

                if (!response.ok) throw new Error('Erro ao enviar');

                contactForm.reset();
                closeContactModal();
                showToast('Mensagem enviada com sucesso! Retornaremos em breve.');
            } catch (err) {
                showToast('Erro ao enviar. Tente pelo WhatsApp.');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });

        // Navegação suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animações ao scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.service-card, .feature-item, .about-content > div, .about-image').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        // Contador animado
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const updateCount = () => {
                            const count = +counter.innerText.replace('+', '');
                            const inc = target / 100;

                            if (count < target) {
                                counter.innerText = Math.ceil(count + inc) + '+';
                                setTimeout(updateCount, 20);
                            } else {
                                counter.innerText = target + '+';
                            }
                        };
                        updateCount();
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsContainer = document.querySelector('.about-stats');
        if (statsContainer) {
            statsContainer.querySelectorAll('.stat-number').forEach(counter => {
                const value = counter.textContent.replace('+', '');
                counter.setAttribute('data-target', value);
                counter.innerText = '0+';
            });
            statsObserver.observe(statsContainer);
        }

        // Modal de Serviços
        const serviceModal = document.getElementById('serviceModal');
        const serviceModalClose = document.getElementById('serviceModalClose');
        const prevServiceBtn = document.getElementById('prevServiceBtn');
        const nextServiceBtn = document.getElementById('nextServiceBtn');
        const serviceCounter = document.getElementById('serviceCounter');
        const serviceProgressBar = document.getElementById('serviceProgressBar');

        let currentServiceIndex = 0;
        let touchStartX = 0;
        let touchEndX = 0;

        const updateServiceModalContent = (index) => {
            currentServiceIndex = index;
            const service = servicesData[index];
            document.getElementById('modalServiceIcon').innerHTML = `<i class="${service.icon}"></i>`;
            document.getElementById('modalServiceTitle').textContent = service.title;
            document.getElementById('modalServiceSubtitle').textContent = service.subtitle;
            document.getElementById('modalServiceBody').innerHTML = `
                <p>${service.fullDescription}</p>
                <h4>Para quem é este serviço?</h4>
                <ul>
                    ${service.targetAudience.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
        };

        const updateServiceModalUI = () => {
            const progress = ((currentServiceIndex + 1) / servicesData.length) * 100;
            serviceProgressBar.style.width = `${progress}%`;
            serviceCounter.textContent = `${currentServiceIndex + 1} de ${servicesData.length}`;

            prevServiceBtn.disabled = currentServiceIndex === 0;
            nextServiceBtn.disabled = currentServiceIndex === servicesData.length - 1;
        };

        const openServiceModal = (serviceIndex) => {
            updateServiceModalContent(serviceIndex);
            updateServiceModalUI();

            serviceModal.classList.add('visible');
            document.body.style.overflow = 'hidden';

            const modalBody = document.getElementById('modalServiceBody');
            modalBody.style.opacity = '0';
            modalBody.style.transform = 'translateY(20px)';
            setTimeout(() => {
                modalBody.style.opacity = '1';
                modalBody.style.transform = 'translateY(0)';
            }, 50);
        };

        const closeServiceModal = () => {
            serviceModal.classList.remove('visible');
            document.body.style.overflow = '';
        };

        const navigateToService = (direction) => {
            if (direction === 'prev' && currentServiceIndex > 0) {
                currentServiceIndex--;
            } else if (direction === 'next' && currentServiceIndex < servicesData.length - 1) {
                currentServiceIndex++;
            }

            const modalBody = document.getElementById('modalServiceBody');
            modalBody.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            modalBody.style.opacity = '0';
            modalBody.style.transform = 'translateY(20px)';

            setTimeout(() => {
                updateServiceModalContent(currentServiceIndex);
                updateServiceModalUI();
                modalBody.style.opacity = '1';
                modalBody.style.transform = 'translateY(0)';
            }, 200);
        };

        // Event listeners para o modal de serviços
        serviceModalClose.addEventListener('click', closeServiceModal);
        serviceModal.addEventListener('click', (e) => {
            if (e.target === serviceModal) closeServiceModal();
        });

        prevServiceBtn.addEventListener('click', () => navigateToService('prev'));
        nextServiceBtn.addEventListener('click', () => navigateToService('next'));

        // Event listeners para os cards de serviço
        document.querySelectorAll('.service-card').forEach(card => {
            const button = card.querySelector('.card-toggle-btn');

            const openModalAction = () => {
                const serviceIndex = parseInt(card.dataset.service, 10);
                openServiceModal(serviceIndex);
            };

            card.addEventListener('click', openModalAction);
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                openModalAction();
            });
        });

        // Navegação por teclado
        document.addEventListener('keydown', (e) => {
            if (!serviceModal.classList.contains('visible')) return;

            if (e.key === 'Escape') {
                closeServiceModal();
            } else if (e.key === 'ArrowLeft' && !prevServiceBtn.disabled) {
                navigateToService('prev');
            } else if (e.key === 'ArrowRight' && !nextServiceBtn.disabled) {
                navigateToService('next');
            }
        });

        // Swipe para mobile
        serviceModal.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        serviceModal.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0 && !nextServiceBtn.disabled) {
                    navigateToService('next');
                } else if (diff < 0 && !prevServiceBtn.disabled) {
                    navigateToService('prev');
                }
            }
        };

        // Efeito de ripple no botão
        document.querySelectorAll('.btn, .service-nav-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');

                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;

                if (this.contains(ripple)) {
                    this.removeChild(ripple);
                }
                this.appendChild(ripple);
            });
        });

        // Adiciona CSS para animação de ripple
        const style = document.createElement('style');
        style.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.4);
                transform: scale(0);
                animation: ripple-effect 0.6s linear;
                pointer-events: none;
            }
            @keyframes ripple-effect {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    });
