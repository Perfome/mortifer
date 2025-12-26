// ===========================================
// NEXUS AI - ULTRA ADVANCED JAVASCRIPT
// Version: 3.0 | 120 FPS Optimized
// Author: Perfome
// ===========================================

'use strict';

class NexusAI {
    constructor() {
        this.initialize();
        this.bindEvents();
        this.startAnimations();
    }

    // ==================== INITIALIZATION ====================
    initialize() {
        console.log('🚀 Nexus AI System Initializing...');
        
        // DOM Elements
        this.dom = {
            introOverlay: document.getElementById('introOverlay'),
            progressFill: document.getElementById('progressFill'),
            chatMessages: document.getElementById('chatMessages'),
            userInput: document.getElementById('userInput'),
            sendBtn: document.getElementById('sendBtn'),
            typedElement: document.getElementById('typed'),
            navLinks: document.querySelectorAll('.nav-link'),
            featureCards: document.querySelectorAll('.feature-card'),
            threeCanvas: document.getElementById('threeCanvas')
        };

        // AI Configuration
        this.aiConfig = {
            name: 'NEXUS AI',
            version: '3.0',
            intelligenceLevel: 'Quantum',
            responseSpeed: 120, // FPS
            personality: {
                tone: 'professional',
                humor: 'moderate',
                empathy: 'high',
                creativity: 'max'
            }
        };

        // AI Knowledge Base
        this.knowledgeBase = {
            greetings: [
                "Merhaba! Ben Nexus AI. Size nasıl yardımcı olabilirim? 🌟",
                "Selam! Geleceğin yapay zekası Nexus burada. Sorunuz nedir? 🚀",
                "Hoş geldiniz! 120 FPS optimizasyonlu AI asistanınız hazır. 💎"
            ],
            capabilities: [
                "Görüntü işleme ve computer vision",
                "Doğal dil işleme ve anlama",
                "Makine öğrenimi ile tahmin analizi",
                "Kod yazma ve debugging",
                "Sanatsal içerik üretimi",
                "Veri analizi ve görselleştirme"
            ],
            responses: {
                default: "İlginç bir soru! Derin öğrenme modelim şunu analiz ediyor...",
                question: "Bu konuda nöral ağım şu cevabı veriyor:",
                tech: "Teknoloji hakkında konuşmayı seviyorum!",
                future: "Gelecek AI ile daha da heyecan verici olacak!",
                learning: "Her gün yeni şeyler öğreniyorum. Şu anda öğrendiklerim..."
            }
        };

        // Chat History
        this.chatHistory = [];
        this.isThinking = false;
        
        // Performance Metrics
        this.fps = 0;
        this.frameCount = 0;
        this.lastTime = performance.now();
        
        console.log('✅ Nexus AI Initialized:', this.aiConfig);
    }

    // ==================== EVENT BINDING ====================
    bindEvents() {
        // Send Message
        this.dom.sendBtn.addEventListener('click', () => this.sendMessage());
        this.dom.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Navigation
        this.dom.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e));
        });

        // Scroll Animations
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Resize
        window.addEventListener('resize', () => this.handleResize());
        
        // Intro Animation
        this.initializeIntro();
        
        // Initialize Three.js if available
        if (typeof THREE !== 'undefined') {
            this.initializeThreeJS();
        }
    }

    // ==================== INTRO ANIMATION ====================
    initializeIntro() {
        const progress = this.dom.progressFill;
        const overlay = this.dom.introOverlay;
        
        // Simulate loading with realistic progress
        let progressValue = 0;
        const interval = setInterval(() => {
            progressValue += Math.random() * 20;
            progress.style.width = `${Math.min(progressValue, 100)}%`;
            
            if (progressValue >= 100) {
                clearInterval(interval);
                
                // Add completion effects
                progress.style.transition = 'all 0.5s ease';
                progress.style.width = '100%';
                
                // Hide overlay with style
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    overlay.style.transform = 'scale(1.1)';
                    
                    setTimeout(() => {
                        overlay.style.display = 'none';
                        this.onIntroComplete();
                    }, 1000);
                }, 500);
            }
        }, 100);
    }

    onIntroComplete() {
        console.log('🎉 Intro Complete - Site Ready!');
        
        // Initialize Typed.js
        this.initializeTyped();
        
        // Start FPS counter
        this.startFPSCounter();
        
        // Animate features
        this.animateFeatures();
        
        // Welcome message
        this.addAIMessage(this.getRandomResponse('greetings'));
    }

    // ==================== TYPED.JS INIT ====================
    initializeTyped() {
        if (typeof Typed === 'undefined') return;
        
        this.typed = new Typed(this.dom.typedElement, {
            strings: [
                'Geleceğin Zekası Burası',
                '120 FPS Smooth Experience',
                'Glassmorphism + Neumorphism',
                'Quantum AI Computing',
                'Real-time Neural Networks',
                'Advanced Machine Learning'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            contentType: 'html',
            onStringTyped: () => {
                this.createParticleEffect(this.dom.typedElement);
            }
        });
    }

    // ==================== THREE.JS 3D BACKGROUND ====================
    initializeThreeJS() {
        try {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({
                canvas: this.dom.threeCanvas,
                alpha: true,
                antialias: true,
                powerPreference: "high-performance"
            });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            
            // Advanced particles system
            const particleCount = 8000;
            const particles = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);
            const sizes = new Float32Array(particleCount);
            
            for (let i = 0; i < particleCount * 3; i += 3) {
                // Sphere distribution
                const radius = 15;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                
                positions[i] = radius * Math.sin(phi) * Math.cos(theta);
                positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
                positions[i + 2] = radius * Math.cos(phi);
                
                // Gradient colors
                colors[i] = 0.1 + Math.random() * 0.4; // Blue
                colors[i + 1] = 0.1 + Math.random() * 0.3; // Purple
                colors[i + 2] = 0.5 + Math.random() * 0.5; // Pink
                
                sizes[i / 3] = Math.random() * 0.05 + 0.01;
            }
            
            particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
            
            const particleMaterial = new THREE.PointsMaterial({
                size: 0.02,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });
            
            const particleSystem = new THREE.Points(particles, particleMaterial);
            scene.add(particleSystem);
            
            camera.position.z = 20;
            
            // Mouse interaction
            let mouseX = 0;
            let mouseY = 0;
            
            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            });
            
            // Animation loop with FPS optimization
            const clock = new THREE.Clock();
            
            const animate = () => {
                requestAnimationFrame(animate);
                
                const time = clock.getElapsedTime();
                const delta = clock.getDelta();
                
                // Smooth rotation with mouse interaction
                particleSystem.rotation.x = time * 0.1 + mouseY * 0.5;
                particleSystem.rotation.y = time * 0.15 + mouseX * 0.5;
                
                // Pulsing effect
                const scale = 1 + Math.sin(time * 0.5) * 0.1;
                particleSystem.scale.setScalar(scale);
                
                // Color shift
                const colors = particleSystem.geometry.attributes.color;
                for (let i = 0; i < colors.count; i++) {
                    colors.setX(i, 0.2 + Math.sin(time + i * 0.01) * 0.3);
                }
                colors.needsUpdate = true;
                
                renderer.render(scene, camera);
            };
            
            animate();
            
            // Handle resize
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
            
            console.log('✅ Three.js 3D Background Initialized');
            
        } catch (error) {
            console.warn('⚠️ Three.js failed to initialize:', error);
        }
    }

    // ==================== AI CHAT SYSTEM ====================
    sendMessage() {
        const message = this.dom.userInput.value.trim();
        if (!message || this.isThinking) return;
        
        // Add user message
        this.addUserMessage(message);
        this.dom.userInput.value = '';
        
        // AI thinking
        this.showThinking();
        
        // Simulate AI processing (in real app,
