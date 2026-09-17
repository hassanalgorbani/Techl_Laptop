document.addEventListener('DOMContentLoaded', () => {
    // بيانات شرائح السلايدر (الصور، العناوين، والنصوص)
    const slides = [
        {
            image: "url('/img/mac3.png')",
            title: "Latest Gaming & High-Performance Laptops",
            text: "Get powerful processors and the latest graphics cards for 2026."
        },
        {
            image: "url('/img/lenveo 5.png')",
            title: "Professional Workstations for Creators",
            text: "Discover ultra-fast SSDs, stunning displays, and ultimate productivity."
        },
        
    ];

    let currentIndex = 0;
    const heroSlider = document.getElementById('heroSlider');
    const heroTitle = document.getElementById('heroTitle');
    const heroText = document.getElementById('heroText');
    const heroContent = document.querySelector('.hero-content');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // دالة تحديث السلايدر
    function updateSlide(index) {
        // تأثير اختفاء بسيط للنصوص
        heroContent.style.opacity = 0;
        heroContent.style.transform = "translateY(10px)";

        setTimeout(() => {
            // تغيير الخلفية والنصوص
            heroSlider.style.backgroundImage = slides[index].image;
            heroTitle.textContent = slides[index].title;
            heroText.textContent = slides[index].text;

            // إظهار النصوص بتأثير ناعم
            heroContent.style.opacity = 1;
            heroContent.style.transform = "translateY(0)";
        }, 300);

        // تحديث النقاط (Dots)
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // الانتقال للشريحة التالية
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
    }

    // الانتقال للشريحة السابقة
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide(currentIndex);
    }

    // ربط الأزرار بالوظائف
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // ربط النقاط بالشرائح عند الضغط عليها
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.getAttribute('data-index'));
            updateSlide(currentIndex);
        });
    });

    // تحريك السلايدر تلقائياً كل 4 ثوانٍ
    setInterval(nextSlide, 4000);

    // تفعيل الكود التفاعلي السابق للقوائم والأزرار
    const categories = document.querySelectorAll('.categories-list li');
    categories.forEach(cat => {
        cat.addEventListener('click', () => {
            alert('You selected category: ' + cat.textContent.trim());
        });
    });

    const detailButtons = document.querySelectorAll('.btn-details');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productTitle = btn.closest('.product-card').querySelector('h3').textContent;
            alert('Loading details for ' + productTitle + ' via Ajax...');
        });
    });
});





/**
 * دالة محاكاة لجلب تفاصيل الجهاز باستخدام تقنية AJAX (Fetch API)
 * تقوم بطباعة رسالة وهمية أو تفاعل عند النقر على زر تفاصيل الجهاز
 * @param {string} laptopName - اسم اللابتوب الذي تم الضغط عليه
 */
function showDetails(laptopName) {
    console.log(`Fetching details for: ${laptopName} via AJAX...`);
    
    // محاكاة طلب AJAX وهمي (يمكن استبداله بـ fetch حقيقي لـ API)
    setTimeout(() => {
        alert(`AJAX Request Successful!\nLoading detailed specifications for: ${laptopName}`);
    }, 200);
}






// الانتظار حتى يتم تحميل كامل محتوى الصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // الحصول على مرجع لعنصر النموذج
    const loginForm = document.getElementById('login-form');
    
    // إضافة مستمع لحدث إرسال النموذج (عند الضغط على زر Login)
    loginForm.addEventListener('submit', function(event) {
        // منع السلوك الافتراضي للنموذج (إعادة تحميل الصفحة)
        event.preventDefault();
        
        // الحصول على القيم المدخلة في الحقول
        const fullName = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember-me').checked;
        
        // --- هنا يمكنك تنفيذ منطق تسجيل الدخول الفعلي ---
        
        // مثال بسيط للتحقق (استبدله بطلب حقيقي لخادمك)
        if (email === "name@example.com" && password === "123") {
            alert('Login successful! Redirecting...');
            // window.location.href = 'dashboard.html'; // توجيه المستخدم
        } else {
            // تنبيه بسيط عند فشل تسجيل الدخول (قد ترغب في تحسين هذا بصرياً)
            alert('Login Failed: Invalid email or password.');
        }
        
        // مثال لطباعة البيانات في وحدة التحكم للتأكد
        console.log('Full Name:' ,fullName);
        console.log('Form Submitted');
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    });
});




// الانتظار حتى يتم تحميل كامل محتوى الصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // الحصول على مرجع لعنصر النموذج
    const RegisterForm = document.getElementById('Register-form');
    
    // إضافة مستمع لحدث إرسال النموذج (عند الضغط على زر Register)
    RegisterForm.addEventListener('submit', function(event) {
        // منع السلوك الافتراضي للنموذج (إعادة تحميل الصفحة)
        event.preventDefault();
        
        // الحصول على القيم المدخلة في الحقول
        const fullName = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // --- هنا يمكنك تنفيذ منطق تسجيل الدخول الفعلي ---
        
        // مثال بسيط للتحقق (استبدله بطلب حقيقي لخادمك)
        if (email === "name@example.com" && password === "123") {
            alert('Login successful! Redirecting...');
            // window.location.href = 'dashboard.html'; // توجيه المستخدم
        } else {
            // تنبيه بسيط عند فشل تسجيل الدخول (قد ترغب في تحسين هذا بصرياً)
            alert('Login Failed: Invalid email or password.');
        }
        
        // مثال لطباعة البيانات في وحدة التحكم للتأكد
        console.log('Full Name:' ,fullName);
        console.log('Form Submitted');
        console.log('Email:', email);
        console.log('Password:', password);
    });
});


/**
 * التعامل مع إرسال نموذج التواصل (Contact Us)
 */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // منع إعادة تحميل الصفحة الافتراضي
            e.preventDefault();

            // قراءة البيانات المدخلة
            const fullName = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // طباعة البيانات في وحدة التحكم للتأكد
            console.log('Contact Message Submitted:');
            console.log(`Name: ${fullName}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);

            // تنبيه نجاح الإرسال (يمكن استبداله بطلب API فعلي للخادم)
            alert(`Thank you ${fullName}, your message has been sent successfully!`);
            
            // تفريغ الحقول بعد الإرسال الناجح
            contactForm.reset();
        });
    }
});
