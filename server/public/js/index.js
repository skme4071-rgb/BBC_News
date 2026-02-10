// import utils from "./utils.js";
// import "./Authentication.js";


// // Breaking News headline
// (async () => {
//     try {
//         const headlineELI = document.getElementById("breaking-banner-news")
//         const stoploadding = utils.showLoadingState(headlineELI)
//         const data = await utils.fetchAPI({
//             router: "headline"
//         });

//         if (!Array.isArray(data)) return

//         const spans = data.map(v => {
//             const text = v?.message?.slice(0, 50) || "";
//             return `<span class="text-sm font-medium hidden sm:inline">${text} </span>`;
//         });



//         headlineELI.innerHTML = spans.join("")
//     } catch (error) {
//         utils.showNotification(error.message, "error")
//     }
// })();





// User authentication state
let currentUser = null;
let isLoggedIn = false;

// Authentication functions
function openAuthModal(formType) {
    const modal = document.getElementById('auth-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Show the correct form
    switchAuthForm(formType);

    // Add entrance animation
    setTimeout(() => {
        modal.querySelector('.auth-form').style.transform = 'scale(1)';
        modal.querySelector('.auth-form').style.opacity = '1';
    }, 10);
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.querySelector('.auth-form').style.transform = 'scale(0.95)';
    modal.querySelector('.auth-form').style.opacity = '0';

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        clearFormErrors();
    }, 200);
}

function switchAuthForm(formType) {
    // Hide all forms
    document.getElementById('signin-form').classList.add('hidden');
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('account-form').classList.add('hidden');

    // Show selected form
    document.getElementById(formType + '-form').classList.remove('hidden');

    // Clear any previous errors
    clearFormErrors();
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);

    // Add visual feedback
    input.style.transform = 'scale(1.02)';
    setTimeout(() => input.style.transform = 'scale(1)', 200);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + '-error');

    field.classList.add('error');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.add('show');
    }

    // Remove error after 3 seconds
    setTimeout(() => {
        field.classList.remove('error');
        if (errorDiv) {
            errorDiv.classList.remove('show');
        }
    }, 3000);
}

function clearFormErrors() {
    document.querySelectorAll('.form-input').forEach(input => {
        input.classList.remove('error');
    });
    document.querySelectorAll('.validation-message').forEach(msg => {
        msg.classList.remove('show');
        msg.textContent = '';
    });
}

function showLoadingState(buttonSelector, textSelector) {
    const button = document.querySelector(buttonSelector);
    const text = document.querySelector(textSelector);
    const spinner = button.querySelector('.loading-spinner');

    text.style.opacity = '0';
    spinner.classList.remove('hidden');
    button.disabled = true;

    return () => {
        text.style.opacity = '1';
        spinner.classList.add('hidden');
        button.disabled = false;
    };
}

function handleSignIn(event) {
    event.preventDefault();

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    // Validation
    let hasErrors = false;

    if (!validateEmail(email)) {
        showFieldError('signin-email', 'Please enter a valid email address');
        hasErrors = true;
    }

    if (password.length < 6) {
        showFieldError('signin-password', 'Password must be at least 6 characters');
        hasErrors = true;
    }

    if (hasErrors) return;

    // Show loading state
    const hideLoading = showLoadingState('button[type="submit"]', '.signin-btn-text');

    // Simulate API call
    setTimeout(() => {
        hideLoading();

        // Simulate successful login
        currentUser = {
            firstName: 'John',
            lastName: 'Doe',
            email: email,
            avatar: 'JD'
        };

        loginUser(currentUser);
        closeAuthModal();

        // Show success message
        showNotification('Welcome back, John! You have successfully signed in.', 'success');
    }, 2000);
}

function handleRegister(event) {
    event.preventDefault();

    const firstName = document.getElementById('register-firstname').value;
    const lastName = document.getElementById('register-lastname').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Validation
    let hasErrors = false;

    if (!validateEmail(email)) {
        showFieldError('register-email', 'Please enter a valid email address');
        hasErrors = true;
    }

    if (!validatePassword(password)) {
        showFieldError('register-password', 'Password must be at least 8 characters with numbers and letters');
        hasErrors = true;
    }

    if (hasErrors) return;

    // Show loading state
    const hideLoading = showLoadingState('button[type="submit"]', '.register-btn-text');

    // Simulate API call
    setTimeout(() => {
        hideLoading();

        // Simulate successful registration
        currentUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            avatar: firstName.charAt(0) + lastName.charAt(0)
        };

        loginUser(currentUser);
        closeAuthModal();

        // Show success message
        showNotification(`Welcome to BBC News, ${firstName}! Your account has been created successfully.`, 'success');
    }, 2500);
}

function loginUser(user) {
    isLoggedIn = true;
    currentUser = user;

    // Update UI
    document.getElementById('auth-buttons').classList.add('hidden');
    document.getElementById('user-section').classList.remove('hidden');

    // Update user info
    document.getElementById('user-avatar').textContent = user.avatar;
    document.getElementById('user-name').textContent = user.firstName + ' ' + user.lastName;
    document.getElementById('dropdown-avatar').textContent = user.avatar;
    document.getElementById('dropdown-name').textContent = user.firstName + ' ' + user.lastName;
    document.getElementById('dropdown-email').textContent = user.email;

    // Show notification badge
    document.getElementById('notification-badge').classList.remove('hidden');

    // Store in localStorage (in real app, use secure storage)
    localStorage.setItem('bbcUser', JSON.stringify(user));
}

function logout() {
    isLoggedIn = false;
    currentUser = null;

    // Update UI
    document.getElementById('auth-buttons').classList.remove('hidden');
    document.getElementById('user-section').classList.add('hidden');

    // Hide dropdown
    document.getElementById('user-dropdown').classList.remove('show');

    // Clear localStorage
    localStorage.removeItem('bbcUser');

    // Show success message
    showNotification('You have been successfully signed out. See you soon!', 'info');
}

function toggleUserDropdown() {
    const dropdown = document.getElementById('user-dropdown');
    dropdown.classList.toggle('show');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-all duration-300`;

    // Set colors based on type
    const colors = {
        success: 'bg-green-600 text-white',
        error: 'bg-red-600 text-white',
        info: 'bg-blue-600 text-white',
        warning: 'bg-yellow-600 text-white'
    };

    notification.className += ` ${colors[type]}`;

    // Set content
    notification.innerHTML = `
    <div class="flex items-start space-x-3">
        <div class="flex-shrink-0">
            ${type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️'}
        </div>
        <div class="flex-1">
            <p class="text-sm font-medium">${message}</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="flex-shrink-0 text-white/80 hover:text-white">
            <span class="text-lg">×</span>
        </button>
    </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(full)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Enhanced mobile functionality
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');

    // Add smooth animation
    if (!menu.classList.contains('hidden')) {
        menu.style.maxHeight = '0px';
        menu.style.overflow = 'hidden';
        setTimeout(() => {
            menu.style.maxHeight = '400px';
            menu.style.transition = 'max-height 0.3s ease-in-out';
        }, 10);
    }
}

function toggleMobileSearch() {
    const search = document.getElementById('mobile-search');
    search.classList.toggle('hidden');
    if (!search.classList.contains('hidden')) {
        const input = search.querySelector('input');
        setTimeout(() => {
            input.focus();
            input.style.transform = 'scale(1.02)';
            setTimeout(() => input.style.transform = 'scale(1)', 200);
        }, 100);
    }
}

// Enhanced navigation with loading states
function showSection(sectionName, element) {
    const sections = document.querySelectorAll('.section');

    // Update nav styling
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');

    // Fade out current section
    sections.forEach(section => {
        section.classList.remove('active');
        setTimeout(() => {
            section.classList.add('hidden');
        }, 200);
    });

    // Show loading for non-home sections
    if (sectionName !== 'home' && sectionName !== 'uk') {
        setTimeout(() => {
            const targetSection = document.getElementById(sectionName + '-section');
            if (targetSection) {
                targetSection.classList.remove('hidden');
                setTimeout(() => {
                    targetSection.classList.add('active');
                }, 50);
            }
        }, 200);
    } else {
        // Fade in new section
        setTimeout(() => {
            const targetSection = document.getElementById(sectionName + '-section');
            if (targetSection) {
                targetSection.classList.remove('hidden');
                setTimeout(() => {
                    targetSection.classList.add('active');
                }, 50);
            }
        }, 200);
    }

    // Close mobile menu
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden');

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Enhanced article data with richer content
const articles = {
    'climate': {
        title: 'Climate summit reaches historic $500bn global agreement',
        content: `
    <div class="mb-8">
        <div class="bg-gradient-to-br from-green-500 to-blue-600 h-80 rounded-xl flex items-center justify-center mb-6 shadow-lg">
            <span class="text-8xl text-white drop-shadow-lg">🌍</span>
        </div>
        <div class="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <span class="bg-red-600 text-white px-3 py-1 rounded-full font-bold">BREAKING</span>
            <span class="font-medium">Environment</span>
            <span>•</span>
            <span>2 hours ago</span>
            <span>•</span>
            <span>By Sarah Johnson</span>
        </div>
    </div>

    <div class="text-xl leading-relaxed mb-6 text-gray-700 font-light">
        In an unprecedented display of global cooperation, 195 nations have signed the most comprehensive climate agreement in history, committing $500 billion to combat climate change over the next decade.
    </div>

    <p class="mb-6 text-lg leading-relaxed">The landmark agreement, reached at the COP29 summit in Geneva, includes binding targets for carbon emission reductions, renewable energy adoption, and comprehensive support for developing nations transitioning to clean energy.</p>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
        <p class="text-lg italic text-blue-900">"This moment will be remembered as the turning point in our fight against climate change. We have moved from promises to action."</p>
        <p class="text-sm text-blue-700 mt-2">— UN Secretary-General Maria Santos</p>
    </div>

    <h3 class="text-2xl font-bold mb-4 text-gray-800">Key commitments include:</h3>
    <div class="bg-gray-50 rounded-xl p-6 mb-6">
        <ul class="space-y-3">
            <li class="flex items-start space-x-3">
                <span class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span class="text-white text-xs">✓</span>
                </span>
                <span>50% reduction in global carbon emissions by 2034</span>
            </li>
            <li class="flex items-start space-x-3">
                <span class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span class="text-white text-xs">✓</span>
                </span>
                <span>Complete phase-out of coal power by 2030</span>
            </li>
            <li class="flex items-start space-x-3">
                <span class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span class="text-white text-xs">✓</span>
                </span>
                <span>$500 billion climate adaptation fund for developing nations</span>
            </li>
            <li class="flex items-start space-x-3">
                <span class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span class="text-white text-xs">✓</span>
                </span>
                <span>Mandatory renewable energy targets for all signatory nations</span>
            </li>
            <li class="flex items-start space-x-3">
                <span class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span class="text-white text-xs">✓</span>
                </span>
                <span>Enhanced biodiversity protection and reforestation programs</span>
            </li>
        </ul>
    </div>

    <p class="mb-6 text-lg leading-relaxed">Environmental groups worldwide have praised the agreement as a "game-changing moment" for climate action, while business leaders express cautious optimism about the economic opportunities presented by the green transition.</p>

    <div class="border-t border-gray-200 pt-6 mt-8">
        <div class="flex items-center justify-between text-sm text-gray-500">
            <div class="flex items-center space-x-4">
                <span>Share this article:</span>
                <div class="flex space-x-2">
                    <button class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">f</button>
                    <button class="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">t</button>
                    <button class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors">📧</button>
                </div>
            </div>
            <span>2.4k views • 156 shares</span>
        </div>
    </div>
    `
    },
    'markets': {
        title: 'Global markets surge following tech earnings beat',
        content: `
    <div class="mb-8">
        <div class="bg-gradient-to-br from-green-500 to-blue-600 h-64 rounded-xl flex items-center justify-center mb-6">
            <span class="text-6xl text-white">📈</span>
        </div>
        <div class="text-sm text-gray-500 mb-4">Business • 3 hours ago • By Market Analyst</div>
    </div>
    <p class="text-lg mb-4 leading-relaxed">Major technology companies have exceeded analyst expectations in their latest earnings reports, driving a surge in global markets and renewed investor confidence in the sector.</p>
    <p class="mb-4">The FTSE 100 rose 2.1%, while the Dow Jones gained 1.8% in early trading following the positive results from several tech giants including Apple, Microsoft, and Google.</p>
    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
        <p class="italic">"These results demonstrate the resilience of the technology sector and its ability to adapt to changing market conditions."</p>
        <p class="text-sm text-green-700 mt-2">— Sarah Johnson, Senior Market Analyst</p>
    </div>
    `
    },
    'parliament': {
        title: 'Parliament approves major infrastructure spending bill',
        content: `
    <div class="mb-6">
        <div class="bg-gradient-to-br from-red-600 to-blue-600 h-64 rounded-xl flex items-center justify-center mb-4">
            <span class="text-6xl text-white">🏛️</span>
        </div>
        <div class="text-sm text-gray-500 mb-4">Politics • 1 hour ago • Westminster</div>
    </div>
    <p class="text-lg mb-4 leading-relaxed">MPs have voted to approve a £50 billion infrastructure investment package that will modernise transport networks and digital infrastructure across the UK.</p>
    <p class="mb-4">The bill passed with a majority of 89 votes after three days of intense debate in the House of Commons, with cross-party support for the ambitious spending plans.</p>
    <p class="mb-4">The investment will focus on rail improvements, nationwide broadband expansion, and renewable energy infrastructure development across England, Scotland, Wales, and Northern Ireland.</p>
    `
    }
};

// Enhanced modal functions
function openArticle(articleId) {
    const article = articles[articleId];
    if (article) {
        document.getElementById('modal-title').textContent = article.title;
        document.getElementById('modal-content').innerHTML = article.content;
        const modal = document.getElementById('article-modal');
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Add entrance animation
        setTimeout(() => {
            modal.querySelector('.bg-white').style.transform = 'scale(1)';
            modal.querySelector('.bg-white').style.opacity = '1';
        }, 10);
    }
}

function closeArticle() {
    const modal = document.getElementById('article-modal');
    modal.querySelector('.bg-white').style.transform = 'scale(0.95)';
    modal.querySelector('.bg-white').style.opacity = '0';

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 200);
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Enhanced search functionality
document.querySelectorAll('input[type="search"]').forEach(input => {
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value.trim();
            if (searchTerm) {
                // Simulate search
                this.style.background = 'linear-gradient(45deg, #1f2937, #374151)';
                this.value = 'Searching...';
                this.disabled = true;

                setTimeout(() => {
                    alert(`Searching BBC News for: "${searchTerm}"\n\nFound 247 results across all sections.`);
                    this.value = '';
                    this.disabled = false;
                    this.style.background = '';
                    this.focus();
                }, 1500);
            }
        }
    });
});

// Close modals when clicking outside
document.getElementById('article-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeArticle();
    }
});

document.getElementById('auth-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeAuthModal();
    }
});

// Close user dropdown when clicking outside
document.addEventListener('click', function (e) {
    const userSection = document.getElementById('user-section');
    const dropdown = document.getElementById('user-dropdown');

    if (!userSection.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});

// Show/hide mobile FAB based on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    const fab = document.querySelector('.mobile-fab');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 300) {
        fab.style.opacity = '1';
        fab.style.transform = 'scale(1)';
    } else {
        fab.style.opacity = '0';
        fab.style.transform = 'scale(0.8)';
    }

    lastScrollTop = scrollTop;
});

// Initialize page with enhanced animations
document.addEventListener('DOMContentLoaded', function () {
    // Check for stored user session
    const storedUser = localStorage.getItem('bbcUser');
    if (storedUser) {
        try {
            const user = JSON.parse(storedUser);
            loginUser(user);
        } catch (e) {
            localStorage.removeItem('bbcUser');
        }
    }

    // Set initial active section
    document.getElementById('home-section').classList.add('active');

    // Add loading animation to page
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);

    // Initialize intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe story cards for scroll animations
    document.querySelectorAll('.story-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const articleModal = document.getElementById('article-modal');
        if (!articleModal.classList.contains('hidden')) {
            closeArticle();
        }

        const authModal = document.getElementById('auth-modal');
        if (!authModal.classList.contains('hidden')) {
            closeAuthModal();
        }

        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }

        const userDropdown = document.getElementById('user-dropdown');
        if (userDropdown.classList.contains('show')) {
            userDropdown.classList.remove('show');
        }
    }
});

(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9b48795931f98c28',t:'MTc2NjgzNDkwMi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
