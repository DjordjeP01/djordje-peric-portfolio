           //----------CUSTOM CURSOR---------

           const cursorDot = document.querySelector("[data-cursor-dot]");

           if (cursorDot) {
               let mouseX = 0;
               let mouseY = 0;
               let cursorX = 0;
               let cursorY = 0;
               
               // Create cursor text element if it doesn't exist
               const cursorText = cursorDot.querySelector('.cursor-text') || document.createElement('span');
               if (!cursorDot.querySelector('.cursor-text')) {
                   cursorText.classList.add('cursor-text');
                   cursorText.textContent = 'View';
                   cursorDot.appendChild(cursorText);
               }
               
               // Track mouse position
               function updateCursor(e) {
                   mouseX = e.clientX;
                   mouseY = e.clientY;
               }
               
               // Smooth cursor animation (laggy effect)
               function animateCursor() {
                   cursorX += (mouseX - cursorX) * 0.15;
                   cursorY += (mouseY - cursorY) * 0.15;
                   
                   cursorDot.style.left = cursorX + 'px';
                   cursorDot.style.top = cursorY + 'px';
                   
                   requestAnimationFrame(animateCursor);
               }
               
               window.addEventListener("mousemove", updateCursor);
               animateCursor();
               
               // Regular hover elements (including logos)
               const interactiveElements = document.querySelectorAll('.main-btn, .faq, .service-heading, .pre-footer-btn, .hero-pic, .aboutme-text, .mail, .footer-link-wrap, .service-svg, .logo, #footer-logo, .project-link');
               
               interactiveElements.forEach(element => {
                   element.addEventListener("mouseenter", () => {
                       cursorDot.classList.remove("project-hover");
                       cursorDot.classList.add("hovered");
                   });
               
                   element.addEventListener("mouseleave", () => {
                       cursorDot.classList.remove("hovered");
                   });
               });
               
               // Logo links hover (works with both #hero-section and index.html#hero-section)
               const logoLinks = document.querySelectorAll('a[href*="#hero-section"], a[href*="hero-section"]');
               logoLinks.forEach(link => {
                   link.addEventListener("mouseenter", () => {
                       cursorDot.classList.remove("project-hover");
                       cursorDot.classList.add("hovered");
                   });
               
                   link.addEventListener("mouseleave", () => {
                       cursorDot.classList.remove("hovered");
                   });
               });
               
               // Project item hover - transform cursor into "View" circle
               const projectItems = document.querySelectorAll('.item');
               
               projectItems.forEach(item => {
                   item.addEventListener("mouseenter", () => {
                       cursorDot.classList.remove("hovered", "drag-hover");
                       cursorDot.classList.add("project-hover");
                       if (cursorText) cursorText.textContent = 'View';
                   });
               
                   item.addEventListener("mouseleave", () => {
                       cursorDot.classList.remove("project-hover");
                   });
               });
               
               // Slider hover - transform cursor into "Drag" circle
               const sliders = document.querySelectorAll('.slider');
               
               sliders.forEach(slider => {
                   slider.addEventListener("mouseenter", () => {
                       cursorDot.classList.remove("hovered", "project-hover");
                       cursorDot.classList.add("drag-hover");
                       if (cursorText) cursorText.textContent = 'Drag';
                   });
               
                   slider.addEventListener("mouseleave", () => {
                       cursorDot.classList.remove("drag-hover");
                   });
               });
               
               // Click effect
               document.addEventListener("mousedown", () => {
                   cursorDot.classList.add("click");
               });
               
               document.addEventListener("mouseup", () => {
                   cursorDot.classList.remove("click");
               });
           }
           
           //----------SLIDER DRAG SCROLL FUNCTIONALITY---------
           
           const sliders = document.querySelectorAll('.slider');
           
           sliders.forEach(slider => {
               let isDown = false;
               let startX;
               let scrollLeft;
               
               slider.addEventListener('mousedown', (e) => {
                   isDown = true;
                   slider.style.cursor = 'none';
                   startX = e.pageX - slider.offsetLeft;
                   scrollLeft = slider.scrollLeft;
               });
               
               slider.addEventListener('mouseleave', () => {
                   isDown = false;
                   slider.style.cursor = 'none';
               });
               
               slider.addEventListener('mouseup', () => {
                   isDown = false;
                   slider.style.cursor = 'none';
               });
               
               slider.addEventListener('mousemove', (e) => {
                   if (!isDown) return;
                   e.preventDefault();
                   const x = e.pageX - slider.offsetLeft;
                   const walk = (x - startX) * 2; // Scroll speed multiplier
                   slider.scrollLeft = scrollLeft - walk;
               });
           });


          // //-----------NAV BAR SCROLL HIDE/SHOW------------------
          let lastScrollTop = 0;
          const header = document.querySelector('header');
          let ticking = false;
          
          function handleScroll() {
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              
              if (scrollTop > lastScrollTop && scrollTop > 100) {
                  // Scrolling down - hide navbar
                  header.classList.add('hidden');
              } else {
                  // Scrolling up - show navbar
                  header.classList.remove('hidden');
              }
              
              lastScrollTop = scrollTop;
              ticking = false;
          }
          
          window.addEventListener('scroll', () => {
              if (!ticking) {
                  window.requestAnimationFrame(handleScroll);
                  ticking = true;
              }
          }, { passive: true });

          // //-----------NAV BAR------------------
          const mainMenu = document.querySelector('.mainMenu');
          const closeMenu = document.querySelector('.closeMenu');
          const openMenu = document.querySelector('.openMenu');
          const menuLinks = document.querySelectorAll('.mainMenu li a');


          menuLinks.forEach(link => {
              link.addEventListener('click', () => {
                setTimeout(() => {
                  mainMenu.style.top = '-100%';
                }, 300);
              });
            });

          openMenu.addEventListener('click' , show);
          closeMenu.addEventListener('click', close);


          function show() {
               mainMenu.style.top = '0';
           }

          function close() {
              setTimeout(() => {
                mainMenu.style.top = '-100%';
              }, 500);
          }