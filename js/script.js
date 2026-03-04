/**
 * ================================================
 * 개발자 포트폴리오 - Vanilla JavaScript
 * 10개 기능 모듈 + 유틸리티
 * ================================================
 */

// ================================================
// 유틸리티 함수
// ================================================

/**
 * 함수 호출 횟수 제한 (성능 최적화)
 * @param {Function} fn - 실행할 함수
 * @param {Number} delay - 지연 시간 (밀리초)
 * @returns {Function}
 */
function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

// ================================================
// 모듈 1: Navbar 스크롤 효과
// ================================================

function initNavbar() {
    const navbar = document.getElementById('navbar');

    const handleScroll = throttle(() => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 100);

    window.addEventListener('scroll', handleScroll);
}

// ================================================
// 모듈 2: 모바일 메뉴 토글
// ================================================

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a');

    // 햄버거 버튼 클릭
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('hidden');

        if (isOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenuBtn.classList.add('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // 메뉴 링크 클릭 시 메뉴 닫기
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// ================================================
// 모듈 3: 부드러운 스크롤
// ================================================

function initSmoothScroll() {
    // 모든 앵커 링크 (nav + body)
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ================================================
// 모듈 4: 스크롤 애니메이션 (Intersection Observer)
// ================================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // 한 번만 애니메이션 실행 (선택사항)
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // fade-in-up 요소들 관찰
    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // 섹션 헤더들도 애니메이션
    const sectionHeaders = document.querySelectorAll('h2');
    sectionHeaders.forEach(header => {
        header.classList.add('fade-in-up');
        observer.observe(header);
    });
}

// ================================================
// 모듈 5: 상단 이동 버튼
// ================================================

function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // 스크롤 이벤트
    const handleScroll = throttle(() => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    // 버튼 클릭
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ================================================
// 모듈 6: 기술 카테고리 필터링
// ================================================

function initSkillsFilter() {
    const filterButtons = document.querySelectorAll('.skill-filter');
    const skillBadges = document.querySelectorAll('.skill-badge');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.getAttribute('data-category');

            // 버튼 활성화 상태 업데이트
            filterButtons.forEach(btn => {
                if (btn.getAttribute('data-category') === selectedCategory) {
                    btn.classList.add('bg-emerald-500', 'text-black');
                    btn.classList.remove('bg-transparent', 'text-gray-400', 'border-2', 'border-gray-700');
                } else {
                    btn.classList.remove('bg-emerald-500', 'text-black');
                    btn.classList.add('bg-transparent', 'text-gray-400', 'border-2', 'border-gray-700');
                }
            });

            // 기술 배지 필터링
            skillBadges.forEach(badge => {
                const badgeCategory = badge.getAttribute('data-category');

                if (selectedCategory === 'all' || badgeCategory === selectedCategory) {
                    badge.classList.remove('hidden');
                    badge.classList.add('show');
                } else {
                    badge.classList.add('hidden');
                }
            });
        });
    });
}

// ================================================
// 모듈 7: 포트폴리오 필터링
// ================================================

function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.portfolio-filter');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedTech = button.getAttribute('data-tech');

            // 버튼 활성화 상태 업데이트
            filterButtons.forEach(btn => {
                if (btn.getAttribute('data-tech') === selectedTech) {
                    btn.classList.add('bg-emerald-500', 'text-black');
                    btn.classList.remove('bg-transparent', 'text-gray-400', 'border-2', 'border-gray-700');
                } else {
                    btn.classList.remove('bg-emerald-500', 'text-black');
                    btn.classList.add('bg-transparent', 'text-gray-400', 'border-2', 'border-gray-700');
                }
            });

            // 프로젝트 카드 필터링
            projectCards.forEach(card => {
                const cardTechContainer = card.querySelector('[data-tech]');
                const cardTech = cardTechContainer ? cardTechContainer.getAttribute('data-tech') : 'all';

                if (selectedTech === 'all' || cardTech === selectedTech) {
                    card.classList.remove('hidden');
                    card.classList.add('show');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ================================================
// 모듈 8: 타이핑 애니메이션 (Hero 섹션)
// ================================================

function initTypingEffect() {
    const typingElement = document.querySelector('.typing-cursor');
    if (!typingElement) return;

    const texts = [
        'Frontend Developer',
        'Web Developer',
        'UI Developer'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100; // 타이핑 속도 (ms)
    const delayBetweenTexts = 2000; // 텍스트 간 딜레이 (ms)

    function type() {
        const currentText = texts[textIndex];

        if (!isDeleting) {
            // 입력
            if (charIndex < currentText.length) {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(type, speed);
            } else {
                // 다음 텍스트로 이동 (잠시 대기)
                isDeleting = true;
                setTimeout(type, delayBetweenTexts);
            }
        } else {
            // 삭제
            if (charIndex > 0) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, speed / 2);
            } else {
                // 다음 텍스트로
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            }
        }
    }

    type();
}

// ================================================
// 모듈 9: 연락처 폼 검증
// ================================================

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // 이메일 정규식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (e) => {
        const nameInput = form.querySelector('#name');
        const emailInput = form.querySelector('#email');
        const messageInput = form.querySelector('#message');

        let isValid = true;
        const errors = [];

        // 이름 검증
        if (!nameInput.value.trim()) {
            isValid = false;
            errors.push('이름을 입력해주세요.');
        }

        // 이메일 검증
        if (!emailInput.value.trim()) {
            isValid = false;
            errors.push('이메일을 입력해주세요.');
        } else if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            errors.push('유효한 이메일을 입력해주세요.');
        }

        // 메시지 검증
        if (!messageInput.value.trim()) {
            isValid = false;
            errors.push('메시지를 입력해주세요.');
        }

        if (!isValid) {
            e.preventDefault();
            alert(errors.join('\n'));
        }
    });
}

// ================================================
// 모듈 10: 이미지 지연 로딩 (Lazy Loading)
// ================================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
}

// ================================================
// 초기화 함수 (DOMContentLoaded)
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    // 모든 모듈 초기화
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initScrollToTop();
    initSkillsFilter();
    initPortfolioFilter();
    initTypingEffect();
    initContactForm();
    initLazyLoading();

    console.log('✅ 포트폴리오 초기화 완료!');
});
