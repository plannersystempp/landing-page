"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown,
  ArrowRight,
  Calendar, 
  Users, 
  DollarSign, 
  CheckCircle, 
  Play,
  Star,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Globe,
  Quote,
  Clock,
  BarChart,
  ShieldCheck,
  FileText,
  Target,
  ArrowUp,
  Lock,
  Check,
  Crown,
  Zap,
  CreditCard,
  Mail,
  User,
  Phone,
  Building,
  MessageSquare,
  MessageCircle
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // State for Privacy Widget (AdOpt)
  const [showPrivacyModal, setShowPrivacyModal] = useState(true);

  // State for Plans Modal
  const [showPlansModal, setShowPlansModal] = useState(false);

  // State for Contact Modal (Falar com Vendas)
  const [showContactModal, setShowContactModal] = useState(false);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- DADOS DOS SLIDES DO CARROSSEL (Basta trocar os links das imagens aqui) ---
  const slides = [
    {
      id: 1,
      title: "Dashboard de Gestão",
      description: "Visão macro de todos os seus eventos em tempo real. Acompanhe custos, staff e status.",
      type: "desktop",
      gradient: "from-blue-600 to-indigo-600",
      // Imagem placeholder de dashboard. Substitua pelo link da sua tela real.
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
    },
    {
      id: 2,
      title: "App do Staff",
      description: "Seu time de campo conectado. Check-in, check-out e comunicação direta pelo celular.",
      type: "mobile",
      gradient: "from-purple-600 to-pink-600",
      // Imagem placeholder de app mobile.
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Controle Financeiro",
      description: "Fechamento de caixa automático e relatórios de margem de lucro por evento.",
      type: "desktop",
      gradient: "from-emerald-600 to-teal-600",
      // Imagem placeholder de financeiro.
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "O PlannerSystem eliminou completamente o caos das nossas planilhas. Reduzimos o tempo de fechamento financeiro em 80% já no primeiro mês.",
      author: "Ricardo Mendes",
      role: "Diretor de Operações",
      company: "LAF TECH",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      quote: "A gestão de staff era nosso maior gargalo. Hoje, com o app, sabemos exatamente quem está no evento e o custo em tempo real. É libertador.",
      author: "Juliana Costa",
      role: "Gerente de Produção",
      company: "GlobalStage",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 3,
      quote: "Conseguimos escalar de 5 para 15 eventos simultâneos sem aumentar a equipe administrativa, apenas centralizando tudo na plataforma.",
      author: "Carlos Eduardo",
      role: "CEO",
      company: "EventPro",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  const solutionsMenu = [
    {
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
      title: "Gestão de Eventos",
      description: "Crie e gerencie eventos com datas precisas, controle de status e organização completa."
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "Controle Pessoal",
      description: "Cadastre funcionários fixos e freelancers, defina funções e gerencie alocações por divisão."
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      title: "Lançamento de Horas",
      description: "Registre horas trabalhadas com regras claras de HE e geração automática de cachês."
    },
    {
      icon: <DollarSign className="w-5 h-5 text-blue-600" />,
      title: "Folha de Pagamento",
      description: "Cálculo automático de pagamentos baseados em cachês diários e horas extras."
    },
    {
      icon: <BarChart className="w-5 h-5 text-blue-600" />,
      title: "Estimativa de Custos",
      description: "Visualize custos estimados por evento e acompanhe o orçamento em tempo real."
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: "Relatórios Inteligentes",
      description: "Gere relatórios completos de pagamentos com filtros avançados por período e profissional."
    }
  ];

  const plansData = [
    {
      title: "Básico",
      subtitle: "Para pequenas equipes",
      price: "99,90",
      icon: <Zap className="w-4 h-4" />,
      features: [
        "Gestão de até 5 eventos/mês",
        "Folha de pagamento simples",
        "Suporte por email",
        "1 Usuário Admin"
      ],
      popular: false,
      color: "blue"
    },
    {
      title: "Profissional",
      subtitle: "Para empresas em crescimento",
      price: "249,90",
      icon: <Star className="w-4 h-4" />,
      features: [
        "Eventos ilimitados",
        "Gestão completa de staff",
        "Controle financeiro avançado",
        "Suporte prioritário via chat",
        "Até 5 Usuários Admin",
        "App mobile para staff"
      ],
      popular: true,
      color: "purple"
    },
    {
      title: "Enterprise",
      subtitle: "Para grandes operações",
      price: "499,90",
      icon: <Crown className="w-4 h-4" />,
      features: [
        "Tudo do Profissional",
        "API de integração",
        "Gerente de conta dedicado",
        "Customização de relatórios",
        "SSO & Segurança avançada",
        "Usuários ilimitados"
      ],
      popular: false,
      color: "emerald"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank"); 
  };

  const togglePrivacy = () => {
    setShowPrivacyModal(!showPrivacyModal);
  };

  return (
    <div className="font-sans text-slate-600 bg-white selection:bg-blue-900 selection:text-white overflow-x-hidden relative">
      
      {/* Styles for hiding scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* --- PLANS MODAL (REFINED & COMPACT v2) --- */}
      {showPlansModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-slate-50 rounded-[1.5rem] w-full max-w-4xl max-h-[95vh] overflow-y-auto relative shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300 no-scrollbar overflow-hidden">
            
            <button 
              onClick={() => setShowPlansModal(false)}
              className="absolute top-4 right-4 p-1.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors z-20 text-white border border-white/30"
            >
              <X size={18} />
            </button>

            {/* Blue Header Section - More Compact */}
            <div className="bg-blue-600 px-6 py-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700"></div>
                {/* Decorative Circles */}
                <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 text-white">
                   <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-3">
                      Sistema Completo de Gestão de Eventos
                   </div>
                   <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">Eficiência Total em Eventos e Equipes</h2>
                   <p className="text-blue-100 text-sm font-light max-w-lg mx-auto leading-relaxed">
                      Potencialize sua operação com a ferramenta certa. Sem surpresas.
                   </p>
                </div>
            </div>

            <div className="p-6 md:px-10 md:pb-8 md:pt-8">
              
              {/* Cards Grid - Extra Compact */}
              <div className="grid md:grid-cols-3 gap-4 items-stretch mb-8">
                {plansData.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative p-5 rounded-xl border transition-all duration-500 flex flex-col group ${
                      plan.popular 
                        ? 'bg-white shadow-xl border-blue-500 transform md:-translate-y-2 z-10 ring-1 ring-blue-500/20' 
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-0.5 rounded-full text-[9px] font-bold shadow-md flex items-center gap-1 tracking-wide uppercase">
                        <Star size={8} fill="currentColor" /> Mais Popular
                      </div>
                    )}

                    <div className="mb-4 text-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 mx-auto transition-colors ${
                        plan.popular ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                      }`}>
                        {React.cloneElement(plan.icon, { className: "w-4 h-4" })}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-0.5">{plan.title}</h3>
                      <p className="text-[10px] text-slate-500">{plan.subtitle}</p>
                    </div>

                    <div className="mb-4 pb-4 border-b border-slate-100 text-center">
                      <div className="flex items-baseline justify-center gap-0.5">
                        <span className="text-xs text-slate-400 font-medium">R$</span>
                        <span className={`text-3xl font-bold tracking-tight ${plan.popular ? 'text-slate-900' : 'text-slate-700'}`}>{plan.price.split(',')[0]}</span>
                        <span className="text-lg font-bold text-slate-400">,{plan.price.split(',')[1]}</span>
                      </div>
                      <span className="text-slate-400 text-[9px] block">/mês</span>
                    </div>

                    <div className="space-y-2 mb-6 flex-1 px-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-slate-600 font-medium leading-tight">
                          <div className={`mt-0.5 min-w-[12px] h-3 rounded-full flex items-center justify-center ${plan.popular ? 'text-blue-600' : 'text-slate-400'}`}>
                            <Check size={10} strokeWidth={3} />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </div>

                    <button className={`w-full py-2.5 rounded-lg font-bold text-xs tracking-wide transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-blue-200/50' 
                        : 'border border-slate-200 text-slate-600 hover:border-slate-400 hover:bg-slate-50'
                    }`}>
                      Assinar Agora
                    </button>
                  </div>
                ))}
              </div>

              {/* NEW Footer Section in Modal - Compact */}
              <div className="text-center border-t border-slate-200 pt-6">
                 <h3 className="text-sm font-bold text-slate-900 mb-2">Planos que não limitam o seu crescimento!</h3>
                 
                 <div className="flex flex-col items-center gap-3 mt-3">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md shadow-green-100 hover:scale-105 flex items-center gap-1.5 group">
                       <Zap size={14} fill="currentColor" className="group-hover:animate-pulse" /> Teste Grátis
                    </button>
                    <p className="text-[10px] text-slate-400 font-medium flex items-center gap-1 bg-white border border-slate-100 px-3 py-1 rounded-full shadow-sm">
                       <CreditCard size={10} /> Teste agora sem inserir dados do seu cartão de crédito
                    </p>
                 </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* --- CONTACT MODAL (FALAR COM VENDAS) --- */}
      {showContactModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] w-full max-w-4xl overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col md:flex-row h-auto md:h-[600px]">
            
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-3 right-3 p-1.5 bg-white/50 backdrop-blur rounded-full hover:bg-slate-100 transition-colors z-20 shadow-sm"
            >
              <X size={18} className="text-slate-600" />
            </button>

            {/* Left Side: Info & Abstract */}
            <div className="w-full md:w-5/12 bg-blue-600 text-white p-6 md:p-10 flex flex-col justify-between relative overflow-hidden shrink-0">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600 to-indigo-700 z-0"></div>
               {/* Decorative circles */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
               <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>

               <div className="relative z-10">
                 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 md:mb-8">
                    <MessageSquare size={12} /> Contato Comercial
                 </div>
                 <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">Vamos levar seu evento para o próximo nível?</h2>
                 <p className="text-blue-100 text-xs md:text-sm leading-relaxed">
                    Nossa equipe de especialistas está pronta para entender seus desafios e apresentar a solução ideal para sua operação.
                 </p>
               </div>

               <div className="relative z-10 space-y-3 md:space-y-4 mt-6 md:mt-8">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Phone size={14} />
                     </div>
                     <span className="text-sm font-medium">+55 (11) 9999-9999</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Mail size={14} />
                     </div>
                     <span className="text-sm font-medium">comercial@plannersystem.com</span>
                  </div>
               </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-7/12 p-6 md:p-10 bg-slate-50 overflow-y-auto no-scrollbar">
               <div className="mb-5 md:mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">Fale com nossos especialistas</h3>
                  <p className="text-xs md:text-sm text-slate-500">Preencha o formulário abaixo e entraremos em contato em breve.</p>
               </div>

               <form className="space-y-3 md:space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                     <div className="space-y-1">
                        <label className="text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">Nome Completo</label>
                        <div className="relative">
                           <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                           <input type="text" className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300" placeholder="Seu nome" />
                        </div>
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">Telefone / WhatsApp</label>
                        <div className="relative">
                           <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                           <input type="tel" className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300" placeholder="(00) 00000-0000" />
                        </div>
                     </div>
                  </div>

                  <div className="space-y-1">
                     <label className="text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">E-mail Corporativo</label>
                     <div className="relative">
                        <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="email" className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300" placeholder="seuemail@empresa.com" />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                     <div className="space-y-1">
                        <label className="text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">Empresa</label>
                        <div className="relative">
                           <Building size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                           <input type="text" className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300" placeholder="Nome da empresa" />
                        </div>
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">Cargo</label>
                        <input type="text" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300" placeholder="Ex: Diretor, Produtor" />
                     </div>
                  </div>

                  <div className="space-y-1">
                     <label className="text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">Mensagem (Opcional)</label>
                     <textarea className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300 min-h-[60px]" placeholder="Conte um pouco sobre sua necessidade..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5 mt-2">
                     Enviar Solicitação
                  </button>
               </form>
            </div>

          </div>
        </div>
      )}

      {/* --- NAVBAR --- */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-md border-b border-slate-100/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative">
          
          {/* LOGO NAVBAR */}
          <div className="flex items-center gap-2">
            <img 
              src="/logo.svg" 
              alt="Planner System Logo" 
              className="h-8 w-auto object-contain" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-1">
            
            {/* --- MENU: SOLUÇÕES --- */}
            <div className="group relative">
              <button className="px-4 py-2 text-[15px] font-medium text-slate-600 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                Soluções <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-[700px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 z-50">
                 <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100 p-6 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                    <div className="grid grid-cols-2 gap-4">
                       {solutionsMenu.map((item, index) => (
                          <a key={index} href="#funcionalidades" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                             <div className="mt-1 p-2 bg-blue-50 rounded-lg group-hover/item:bg-blue-100 transition-colors">
                                {item.icon}
                             </div>
                             <div>
                                <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover/item:text-blue-600 transition-colors">{item.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                             </div>
                          </a>
                       ))}
                    </div>
                 </div>
              </div>
            </div>

            {/* --- MENU: SOBRE --- */}
            <div className="group relative">
              <button className="px-4 py-2 text-[15px] font-medium text-slate-600 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                Sobre <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-[650px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 z-50">
                 <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100 p-1 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                    <div className="flex">
                       <div className="w-3/5 p-8 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-4">
                             <Target size={18} className="text-blue-600" />
                             <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Nossa Missão</span>
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 mb-4 leading-tight">
                             Construímos tecnologia para simplificar a gestão de eventos.
                          </h4>
                          <p className="text-sm text-slate-500 leading-relaxed mb-4">
                             Nossa missão é eliminar o caos operacional e trazer eficiência real para equipes e finanças de eventos.
                          </p>
                          <p className="text-sm text-slate-500 leading-relaxed">
                             Oferecemos tecnologia acessível e poderosa para qualquer tamanho de operação, com transparência e eficiência.
                          </p>
                       </div>
                       
                       <div className="w-2/5 bg-slate-50 p-2">
                          <div className="h-full w-full rounded-xl overflow-hidden relative bg-gradient-to-br from-blue-600 to-slate-800 flex items-end p-6">
                             {/* Abstract Shapes in Background */}
                             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                             <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>
                             
                             <div className="relative z-10 text-white">
                                <div className="text-2xl font-bold mb-1">PlannerSystem</div>
                                <div className="text-xs text-blue-100 font-light opacity-80">Tecnologia de ponta para o seu evento.</div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            <button 
              onClick={() => setShowPlansModal(true)} 
              className="px-4 py-2 text-[15px] font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Planos
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-900 font-medium text-[15px] hover:text-blue-600 transition-colors">Login</button>
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium text-[15px] hover:bg-blue-700 transition-all shadow-sm"
            >
              Falar com vendas
            </button>
            <button className="flex items-center gap-1 text-slate-500 hover:text-slate-800">
               <Globe size={18} /> <span className="text-xs font-semibold">PT</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>

        {/* --- MOBILE MENU --- */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col space-y-6 shadow-xl animate-in slide-in-from-top-5 max-h-[85vh] overflow-y-auto">
            
            {/* Mobile Solutions */}
            <div>
              <span className="text-lg font-medium text-slate-800 mb-2 block">Soluções</span>
              <div className="pl-4 border-l-2 border-slate-100 space-y-3">
                 {solutionsMenu.map((item, idx) => (
                    <a key={idx} href="#funcionalidades" className="block py-2 group" onClick={() => setIsMenuOpen(false)}>
                       <span className="font-bold block text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</span>
                       <span className="text-xs text-slate-500">{item.description}</span>
                    </a>
                 ))}
              </div>
            </div>

            {/* Mobile About */}
            <div>
              <a href="#sobre" className="text-lg font-medium text-slate-800 mb-2 block" onClick={() => setIsMenuOpen(false)}>Sobre</a>
              <div className="pl-4 border-l-2 border-slate-100 py-2">
                  <p className="text-sm text-slate-600 italic">Construímos tecnologia para simplificar a gestão de eventos. Nossa missão é eliminar o caos operacional.</p>
              </div>
            </div>

            <button 
              onClick={() => {
                setIsMenuOpen(false);
                setShowPlansModal(true);
              }} 
              className="text-lg font-bold text-blue-600 text-left w-full"
            >
              Planos
            </button>
            
            <button 
              className="bg-blue-600 text-white py-3 rounded-lg font-medium w-full" 
              onClick={() => {
                setIsMenuOpen(false);
                setShowContactModal(true);
              }}
            >
              Falar com vendas
            </button>
            <button className="text-slate-600 font-medium w-full py-2" onClick={() => setIsMenuOpen(false)}>
              Login
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="sobre" className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden bg-white">
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            A evolução da gestão de eventos
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 max-w-4xl tracking-tight">
            Um ecossistema completo para a <span className="text-blue-600">gestão de eventos</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            SaaS definitivo para gestão de eventos corporativos. Substitua planilhas por controle total, da operação ao financeiro, em uma única plataforma.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mb-16">
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 min-w-[200px]"
            >
              Solicitar demonstração
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-medium text-base hover:bg-slate-50 transition-all flex items-center justify-center gap-2 min-w-[200px]">
              Ver vídeo do produto <Play size={14} fill="currentColor" />
            </button>
          </div>

          {/* --- CAROUSEL REPLACING STATIC IMAGE --- */}
          <div className="relative w-full max-w-[1600px] mx-auto h-[500px] md:h-[600px] flex items-center justify-center perspective-1000 mt-8">
              
              {/* Buttons */}
              <button onClick={prevSlide} className="absolute left-2 md:left-10 z-30 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 transition-all border border-slate-100">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="absolute right-2 md:right-10 z-30 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 transition-all border border-slate-100">
                <ChevronRight size={24} />
              </button>

              {/* Slides Track */}
              <div className="relative w-full h-full flex items-center justify-center">
                {slides.map((slide, index) => {
                    let position = "hidden"; 
                    if (index === currentSlide) position = "active";
                    else if (index === (currentSlide - 1 + slides.length) % slides.length) position = "prev";
                    else if (index === (currentSlide + 1) % slides.length) position = "next";

                    // Adjusted styles for Hero Context
                    const baseClasses = "absolute transition-all duration-700 ease-in-out rounded-[2rem] shadow-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 overflow-hidden border border-slate-100";
                    
                    let stateClasses = "";
                    if (position === "active") {
                      stateClasses = `z-20 w-[95%] md:w-[85%] h-[90%] opacity-100 scale-100 bg-gradient-to-br ${slide.gradient} text-white translate-x-0`;
                    } else if (position === "prev") {
                      stateClasses = "z-10 w-[80%] h-[80%] opacity-40 scale-95 bg-white text-slate-400 -translate-x-[60%] md:-translate-x-[55%] cursor-pointer hover:opacity-60";
                    } else if (position === "next") {
                      stateClasses = "z-10 w-[80%] h-[80%] opacity-40 scale-95 bg-white text-slate-400 translate-x-[60%] md:translate-x-[55%] cursor-pointer hover:opacity-60";
                    } else {
                      stateClasses = "z-0 opacity-0 scale-50";
                    }

                    return (
                      <div 
                          key={slide.id} 
                          className={`${baseClasses} ${stateClasses}`}
                          onClick={() => {
                            if (position === "prev") prevSlide();
                            if (position === "next") nextSlide();
                          }}
                      >
                          {/* Background Decor */}
                          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                          {/* Text Content */}
                          <div className="w-full md:w-1/3 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${position === 'active' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                Preview {index + 1}/{slides.length}
                            </div>
                            <h3 className={`text-2xl md:text-4xl font-bold mb-4 ${position === 'active' ? 'text-white' : 'text-slate-300'}`}>
                                {slide.title}
                            </h3>
                            <p className={`text-base md:text-lg mb-8 leading-relaxed ${position === 'active' ? 'text-blue-50' : 'text-slate-300'}`}>
                                {slide.description}
                            </p>
                            <button className={`px-6 py-3 rounded-full font-bold transition-all text-sm ${position === 'active' ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-slate-200 text-slate-400'}`}>
                                Ver detalhes
                            </button>
                          </div>

                          {/* Image/System Preview Placeholder */}
                          <div className="w-full md:w-2/3 h-full relative z-10 perspective-1000 flex items-center justify-center">
                            <div className={`relative w-full h-full bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-2 transform transition-all duration-700 ${position === 'active' ? 'rotate-y-[-5deg] translate-x-0' : 'rotate-y-0 scale-95'}`}>
                                
                                {/* Placeholder Content */}
                                <div className="w-full h-full bg-slate-50 rounded-lg overflow-hidden relative group">
                                  {slide.type === 'desktop' ? (
                                      <>
                                        <div className="h-8 bg-white border-b border-slate-200 flex items-center px-4 justify-between">
                                            <div className="flex gap-2">
                                              <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                            </div>
                                        </div>
                                        <div className="p-4 grid grid-cols-3 gap-3 h-full overflow-hidden">
                                            <div className="col-span-1 h-24 bg-white rounded border border-slate-100 p-3 shadow-sm">
                                              <div className="w-6 h-6 rounded bg-blue-100 mb-2"></div>
                                              <div className="w-12 h-3 bg-slate-200 rounded"></div>
                                            </div>
                                            <div className="col-span-1 h-24 bg-white rounded border border-slate-100 p-3 shadow-sm">
                                              <div className="w-6 h-6 rounded bg-purple-100 mb-2"></div>
                                              <div className="w-12 h-3 bg-slate-200 rounded"></div>
                                            </div>
                                            <div className="col-span-1 h-24 bg-white rounded border border-slate-100 p-3 shadow-sm">
                                              <div className="w-6 h-6 rounded bg-green-100 mb-2"></div>
                                              <div className="w-12 h-3 bg-slate-200 rounded"></div>
                                            </div>
                                            <div className="col-span-3 h-48 bg-white rounded border border-slate-100 shadow-sm p-4 flex items-end gap-2">
                                              {[...Array(12)].map((_, i) => (
                                                  <div key={i} className="flex-1 bg-slate-100 rounded-t" style={{height: `${((i * 33) % 80) + 20}%`}}></div>
                                              ))}
                                            </div>
                                        </div>
                                      </>
                                  ) : (
                                      <div className="flex items-center justify-center h-full bg-slate-100">
                                        <div className="w-40 h-72 bg-white border-4 border-slate-800 rounded-[2rem] shadow-xl overflow-hidden flex flex-col">
                                            <div className="h-6 bg-slate-800 w-full flex justify-center pt-1"><div className="w-10 h-2 bg-black rounded-b-xl"></div></div>
                                            <div className="flex-1 p-2 space-y-2">
                                              <div className="h-6 w-full bg-blue-100 rounded mb-1"></div>
                                              <div className="h-14 w-full bg-slate-50 rounded border border-slate-100"></div>
                                              <div className="h-14 w-full bg-slate-50 rounded border border-slate-100"></div>
                                            </div>
                                        </div>
                                      </div>
                                  )}
                                  
                                  {/* Overlay Label */}
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                      <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow font-bold text-slate-800 text-sm">
                                        Prévia do Sistema
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                    );
                })}
              </div>

              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'bg-white w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
                    />
                ))}
              </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-400/10 blur-[120px] -z-10 rounded-full"></div>
      </header>

      {/* --- LOGO STRIP --- */}
      <div className="border-y border-slate-100 bg-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-medium text-slate-500 mb-8">Empresas líderes confiam na PlannerSystem</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* SUBSTITUIR PELO CAMINHO REAL DAS LOGOS 
               Use o formato: <img src="caminho/para/logo.png" alt="Nome Empresa" className="h-8 md:h-10 w-auto object-contain" />
            */}
            <img src="https://placehold.co/140x50/e2e8f0/475569?text=LAF+TECH" alt="LAF TECH" className="h-8 md:h-10 w-auto object-contain" />
            <img src="https://placehold.co/140x50/e2e8f0/475569?text=EVENTPRO" alt="EVENTPRO" className="h-8 md:h-10 w-auto object-contain" />
            <img src="https://placehold.co/140x50/e2e8f0/475569?text=GlobalStage" alt="GlobalStage" className="h-8 md:h-10 w-auto object-contain" />
            <img src="https://placehold.co/140x50/e2e8f0/475569?text=AUDIO" alt="AUDIO" className="h-8 md:h-10 w-auto object-contain" />
          </div>
        </div>
      </div>

      {/* --- DARK BENTO GRID SECTION --- */}
      <section id="funcionalidades" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
           <div className="bg-[#0b1120] rounded-[2.5rem] p-8 md:p-16 lg:p-20 text-white relative overflow-hidden shadow-2xl mx-auto max-w-[1400px]">
              
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                  <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[100px]"></div>
                  <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[100px]"></div>
              </div>

              <div className="relative z-10">
                 <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-block mb-4 px-3 py-1 rounded-sm border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">
                       Tecnologia Enterprise
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                       Otimize os investimentos em eventos com um stack mais moderno
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                       Somos projetados para eficiência. Com nossa arquitetura SaaS, você elimina planilhas e domina seu financeiro.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-slate-300">
                       <div className="flex items-center gap-2.5"><div className="bg-blue-600 rounded-full p-0.5"><CheckCircle size={12} className="text-white" /></div> Plataforma unificada</div>
                       <div className="flex items-center gap-2.5"><div className="bg-blue-600 rounded-full p-0.5"><CheckCircle size={12} className="text-white" /></div> Serviços na nuvem</div>
                       <div className="flex items-center gap-2.5"><div className="bg-blue-600 rounded-full p-0.5"><CheckCircle size={12} className="text-white" /></div> Infraestrutura elástica</div>
                       <div className="flex items-center gap-2.5"><div className="bg-blue-600 rounded-full p-0.5"><CheckCircle size={12} className="text-white" /></div> TCO reduzido</div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    
                    <div className="col-span-1 row-span-2 bg-[#131b2e] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all group relative overflow-hidden flex flex-col justify-between h-[500px]">
                       <div className="relative z-10">
                          <h3 className="text-xl font-bold mb-3 text-white">Centralização Total</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">Centralize dezenas de arquivos em um painel unificado. Elimine a fragmentação de dados.</p>
                       </div>
                       <div className="mt-8 relative h-64 w-full">
                          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#131b2e] to-transparent z-20"></div>
                          <div className="absolute bottom-[-20px] left-[-20px] w-[120%] h-full grid grid-cols-4 gap-2 transform rotate-12 opacity-20">
                             {[...Array(20)].map((_,i) => <div key={i} className="h-16 bg-slate-700 rounded border border-slate-600"></div>)}
                          </div>
                          <div className="absolute bottom-10 left-6 right-6 h-32 bg-[#1e293b] rounded-xl border border-blue-500/30 shadow-2xl z-10 p-4 transform transition-transform group-hover:-translate-y-2 duration-500">
                              <div className="flex justify-between items-center mb-4">
                                 <div className="h-2 w-16 bg-blue-500 rounded"></div>
                                 <div className="h-6 w-6 rounded-full bg-slate-700"></div>
                              </div>
                              <div className="space-y-2">
                                 <div className="h-2 w-full bg-slate-700 rounded"></div>
                                 <div className="h-2 w-2/3 bg-slate-700 rounded"></div>
                              </div>
                          </div>
                       </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 bg-[#131b2e] border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all group overflow-hidden h-[240px] relative">
                         <div className="md:w-1/2 z-10 relative">
                            <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20">
                               <Users size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Equipes de Elite</h3>
                            <p className="text-slate-400 text-sm max-w-xs">Controle local, função e performance de cada operador com perfis detalhados e históricos.</p>
                         </div>
                         <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                               <div className="absolute right-[-20px] top-10 w-48 bg-[#1e293b] rounded-lg p-3 border border-slate-700 transform rotate-[-6deg] shadow-xl z-10 group-hover:rotate-[-8deg] transition-all duration-500">
                                   <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">AG</div>
                                      <div>
                                         <div className="h-2 w-20 bg-slate-600 rounded mb-1"></div>
                                         <div className="h-1.5 w-12 bg-slate-700 rounded"></div>
                                      </div>
                                   </div>
                               </div>
                               <div className="absolute right-12 top-24 w-48 bg-[#1e293b] rounded-lg p-3 border border-slate-700 transform rotate-[6deg] opacity-60 z-0">
                                   <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold">CD</div>
                                      <div>
                                         <div className="h-2 w-20 bg-slate-600 rounded mb-1"></div>
                                         <div className="h-1.5 w-12 bg-slate-700 rounded"></div>
                                      </div>
                                   </div>
                               </div>
                            </div>
                         </div>
                    </div>

                    <div className="col-span-1 bg-[#131b2e] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all group relative overflow-hidden h-[236px]">
                         <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white">Fornecedores</h3>
                            <DollarSign className="text-green-500" size={20} />
                         </div>
                         <p className="text-slate-400 text-sm mb-6">Controle de pagamentos e prazos.</p>
                         <div className="flex items-center gap-2">
                             <span className="text-3xl font-bold text-white">R$ 15.400</span>
                         </div>
                    </div>

                    <div className="col-span-1 bg-[#131b2e] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all group relative overflow-hidden h-[236px]">
                         <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white">Múltiplos Eventos</h3>
                            <Calendar className="text-purple-500" size={20} />
                         </div>
                         <p className="text-slate-400 text-sm mb-4">Gerencie múltiplos departamentos simultaneamente.</p>
                         <div className="space-y-2 mt-4">
                             <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-800/50 p-1.5 rounded border border-slate-700/50">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                <span>Workshop Fotografia</span>
                             </div>
                             <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-800/50 p-1.5 rounded border border-slate-700/50">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                <span>Festival Música</span>
                             </div>
                             <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-800/50 p-1.5 rounded border border-slate-700/50">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                <span>Stand Up Night</span>
                             </div>
                         </div>
                    </div>

                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- DETAILS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 space-y-32">
          
          {/* Feature Block 1 */}
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
             <div className="mb-12 max-w-2xl">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Gestão de Talentos Unificada</h3>
                <p className="text-lg text-slate-500 font-light">
                  Centralize seu banco de talentos. Histórico, avaliações e valores em um único lugar, facilitando a alocação perfeita para cada evento.
                </p>
             </div>
             
             <div className="w-full bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
                <div className="grid md:grid-cols-3 gap-6">
                   {[
                      { name: 'Aline Gomes', role: 'Freelancer', job: 'Técnica de Som', status: 'active', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
                      { name: 'Carlos Dias', role: 'Freelancer', job: 'Iluminação', status: 'busy', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
                      { name: 'Mariana Costa', role: 'Staff Fixo', job: 'Produção', status: 'active', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80' },
                   ].map((p, i) => (
                      <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-left">
                         <div className="flex items-center gap-4 mb-4">
                            {/* --- UPDATED: PROFILE PICTURE INSTEAD OF INITIALS --- */}
                            <img 
                              src={p.image} 
                              alt={p.name} 
                              className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-white"
                            />
                            <div>
                               <div className="font-bold text-slate-900">{p.name}</div>
                               <div className="text-xs text-slate-500 uppercase tracking-wide">{p.role}</div>
                            </div>
                         </div>
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-600 bg-white px-2 py-1 rounded border border-slate-200">{p.job}</span>
                            <div className={`w-2 h-2 rounded-full ${p.status === 'active' ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Feature Block 2 */}
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
             <div className="mb-12 max-w-2xl">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Inteligência Financeira em Tempo Real</h3>
                <p className="text-lg text-slate-500 font-light">
                  Dashboards que transformam dados em decisão. Monitore o impacto de horas extras e visualize a saúde financeira de cada projeto.
                </p>
             </div>
             
             <div className="w-full bg-slate-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="grid md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700">
                   <div className="pt-4 md:pt-0">
                      <div className="text-slate-400 text-xs font-bold uppercase mb-2">Custo Total</div>
                      <div className="text-3xl font-bold text-white">R$ 48.250</div>
                   </div>
                   <div className="pt-4 md:pt-0">
                      <div className="text-slate-400 text-xs font-bold uppercase mb-2">Cachês</div>
                      <div className="text-3xl font-bold text-white">R$ 48.250</div>
                   </div>
                   <div className="pt-4 md:pt-0">
                      <div className="text-slate-400 text-xs font-bold uppercase mb-2">Horas Extras</div>
                      <div className="text-3xl font-bold text-green-400">R$ 0,00</div>
                   </div>
                   <div className="pt-4 md:pt-0">
                      <div className="text-slate-400 text-xs font-bold uppercase mb-2">Fornecedores</div>
                      <div className="text-3xl font-bold text-blue-400">R$ 15.400</div>
                   </div>
                </div>
                {/* Decorative Chart Line */}
                <div className="mt-12 h-32 w-full flex items-end justify-between gap-1 opacity-50">
                   {[20, 40, 30, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-transparent rounded-t-sm" style={{height: `${h}%`}}></div>
                   ))}
                </div>
             </div>
          </div>

          {/* --- NEW TESTIMONIALS CAROUSEL (FIXED OVERLAP) --- */}
          <div className="pt-10 max-w-6xl mx-auto">
             <div className="relative bg-slate-50 rounded-[2rem] p-10 md:p-16 overflow-hidden border border-slate-100 shadow-sm">
                
                {/* Quote Icon Background */}
                <div className="absolute top-10 left-10 opacity-10">
                   <Quote size={120} className="text-blue-600" fill="currentColor" />
                </div>

                <div className="relative z-10">
                   <div className="flex flex-col items-center justify-center text-center">
                      
                      {/* Grid used here to stack items without fixed height issues */}
                      <div className="w-full grid grid-cols-1 place-items-center">
                         {testimonials.map((testi, index) => (
                            <div 
                               key={testi.id} 
                               className={`col-start-1 row-start-1 w-full flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out px-4 ${
                                  index === currentTestimonial 
                                    ? 'opacity-100 translate-x-0 scale-100 z-20' 
                                    : 'opacity-0 translate-x-10 scale-95 z-10 pointer-events-none'
                               }`}
                            >
                               <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-8 max-w-4xl">
                                  "{testi.quote}"
                               </p>
                               
                               <div className="flex flex-col items-center gap-2">
                                  
                                  {/* --- PROFILE PICTURE --- */}
                                  <img 
                                    src={testi.image} 
                                    alt={testi.author} 
                                    className="w-16 h-16 rounded-full object-cover mb-4 shadow-lg border-4 border-white"
                                  />
                                  
                                  <div>
                                     <h4 className="font-bold text-slate-900 text-lg">{testi.author}</h4>
                                     <p className="text-slate-500 text-sm">{testi.role}, <span className="font-semibold text-blue-600">{testi.company}</span></p>
                                  </div>
                               </div>
                            </div>
                         ))}
                      </div>

                      {/* Controls - now properly pushed down */}
                      <div className="flex gap-4 mt-12">
                         <button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all bg-white shadow-sm">
                            <ChevronLeft size={24} />
                         </button>
                         <button onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all bg-white shadow-sm">
                            <ChevronRight size={24} />
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section id="resultados" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Resultados que falam por si</h2>
             <p className="text-slate-500 font-light">
               Nossa tecnologia não apenas organiza, ela transforma a economia dos seus eventos.
             </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                 <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
                 <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">Eficiência Operacional</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                 <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">40%</div>
                 <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">Redução de Custos</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                 <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">60%</div>
                 <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">Ganho de Produtividade</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                 <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">4.9</div>
                 <div className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center justify-center gap-1">
                   Nota Média <Star size={12} fill="currentColor" className="text-yellow-500" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER WITH INTEGRATED FULL WIDTH CTA --- */}
      <footer className="bg-[#0f172a] text-slate-300">
        
        {/* --- FULL WIDTH CTA INTEGRATED INTO FOOTER --- */}
        <div className="w-full bg-gradient-to-r from-blue-700 to-[#0f172a] py-24 relative overflow-hidden">
             
            {/* Background Abstract Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                  Experimente o futuro da gestão de eventos.
                </h2>
                <p className="text-blue-100 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                  Agende um teste prático em um evento real e sinta a diferença na organização e no bolso. Sem compromisso.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => setShowContactModal(true)}
                    className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                  >
                    Agendar demonstração
                  </button>
                </div>
              </div>
            </div>
        </div>

        {/* --- FOOTER CONTENT --- */}
        <div className="container mx-auto px-6 pt-20 pb-12">
          <div className="flex flex-col items-center justify-center text-center mb-16 border-b border-slate-800 pb-12">
             
             {/* LOGO FOOTER */}
             <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo-white.svg" 
                  alt="Planner System Logo" 
                  className="h-10 w-auto object-contain" 
                />
             </div>

             <p className="text-lg text-slate-400 font-light max-w-xl mx-auto">
               A parceira oficial do produtor de eventos para simplificar a operação e maximizar resultados financeiros.
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20 text-center md:text-left justify-items-center md:justify-items-start max-w-6xl mx-auto">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white font-bold mb-6 text-sm">Produto</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sistema de Gestão</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">App para Staff</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Controle Financeiro</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Relatórios</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white font-bold mb-6 text-sm">Empresa</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Imprensa</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white font-bold mb-6 text-sm">Recursos</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Casos de Sucesso</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Desenvolvedores</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white font-bold mb-6 text-sm">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Cookies</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white font-bold mb-6 text-sm">Social</h4>
              <div className="flex gap-4">
                 <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Instagram size={18} /></a>
                 <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={18} /></a>
                 <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Youtube size={18} /></a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-slate-500">
             <span className="text-slate-600 text-center">© 2024 PlannerSystem Tecnologia para Eventos Ltda. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700">
         {/* Message Bubble - DESKTOP ONLY */}
         <div className="hidden md:block bg-white p-4 rounded-xl shadow-xl max-w-[250px] transform transition-all hover:scale-105 cursor-pointer border border-slate-100 relative group" onClick={openWhatsApp}>
            {/* Hidden arrow on mobile */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-b border-r border-slate-100 hidden md:block"></div> 
            <p className="font-bold text-slate-800 mb-1">Bem-vindo(a) de volta!</p>
            <p className="text-slate-500 text-xs">Como podemos ajudar você hoje?</p>
         </div>

         {/* Fake Input - DESKTOP ONLY */}
         <div className="hidden md:flex bg-white p-1.5 pl-4 rounded-full shadow-2xl items-center gap-2 w-[280px] cursor-pointer border border-slate-100 hover:shadow-xl transition-shadow" onClick={openWhatsApp}>
            <span className="text-sm text-slate-400 flex-1 select-none">Escreva uma mensagem...</span>
            <div className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors shadow-md">
               <ArrowUp size={16} /> 
            </div>
         </div>

         {/* Avatar - DESKTOP ONLY */}
         <div className="hidden md:block w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-2xl cursor-pointer hover:scale-110 transition-transform relative group" onClick={openWhatsApp}>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
              alt="Atendente" 
              className="w-full h-full object-cover"
            />
            {/* Online indicator */}
            <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
         </div>

         {/* MOBILE ONLY: Simple Blue Chat Icon */}
         <button 
           onClick={openWhatsApp}
           className="md:hidden w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-blue-700 transition-all hover:scale-110 active:scale-95"
         >
           <MessageCircle size={28} />
         </button>
      </div>

      {/* --- PRIVACY WIDGET (AdOpt Style) - DESKTOP ONLY --- */}
      <div className="fixed bottom-6 left-6 z-50 hidden md:flex flex-col gap-4">
        
        {/* Privacy Modal */}
        {showPrivacyModal && (
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[400px] border border-slate-100 animate-in slide-in-from-bottom-10 fade-in duration-500">
             <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-blue-600">Controle sua privacidade</h3>
                <span className="text-xs font-semibold text-slate-400">AdOpt</span>
             </div>
             
             <p className="text-sm text-slate-600 mb-4">
                Nosso site usa cookies para melhorar a navegação.
             </p>
             
             <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-4">
                <p className="text-xs text-slate-500 italic">
                   Usamos cookies para compartilhar dados de análise, publicidade, dados de usuários e personalização de anúncios com o Google.
                </p>
             </div>

             <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-blue-600 font-medium mb-6 underline-offset-2">
                <a href="#" className="hover:underline">Política de Privacidade</a>
                <a href="#" className="hover:underline">Política de Cookies</a>
                <a href="#" className="hover:underline">Termos de uso</a>
                <a href="#" className="hover:underline">Opt-out</a>
             </div>

             <div className="flex items-center justify-between gap-3">
                <button className="text-sm font-bold text-slate-600 hover:text-blue-600 underline decoration-slate-300 underline-offset-4">
                   Minhas opções
                </button>
                <div className="flex gap-2">
                   <button 
                      onClick={togglePrivacy}
                      className="px-4 py-2 rounded-full border border-slate-300 text-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors"
                   >
                      Rejeitar
                   </button>
                   <button 
                      onClick={togglePrivacy}
                      className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                   >
                      Aceitar
                   </button>
                </div>
             </div>
          </div>
        )}

        {/* Floating Lock Icon Button */}
        <button 
          onClick={togglePrivacy}
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform self-start ml-2"
        >
           <Lock size={20} />
        </button>
      </div>

    </div>
  );
}
