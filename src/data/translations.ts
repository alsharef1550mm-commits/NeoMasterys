import type { Language, Translations } from "@/types";

export const translations: Record<Language, Translations> = {
  ar: {
    meta: {
      title: "NeoMasterys | نيوماستريز للذكاء الاصطناعي والاستشارات الإدارية",
      description:
        "حلول الذكاء الاصطناعي، الأتمتة، والاستشارات وهندسة العمليات الإدارية",
    },
    brand: {
      name: "نيوماستريز",
      slogan: "حلول الذكاء الاصطناعي والاستشارات الإدارية",
      mission:
        "نساعد المؤسسات على استثمار الذكاء الاصطناعي وإعادة هندسة عملياتها لتحقيق تحول رقمي وإداري مستدام.",
    },
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      about: "من نحن",
      contact: "اتصل بنا",
    },
    layout: {
      getInTouch: "تواصل معنا",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      footer: {
        quickLinks: "روابط سريعة",
        servicesHeading: "خدماتنا",
        contactHeading: "تواصل معنا",
        socialHeading: "تابعنا",
        tagline: "هندسة المستقبل، اليوم.",
      },
    },
    services: {
      heading: "خدماتنا الأساسية",
      subheading:
        "مجموعة متكاملة من الحلول الهندسية والاستشارية المبنية على أحدث تقنيات الذكاء الاصطناعي.",
      items: [
        {
          id: "ai-training",
          title: "تدريب الذكاء الاصطناعي وتمكين الفرق",
          description:
            "برامج تدريبية متخصصة لتأهيل الفرق والمؤسسات على أدوات وتقنيات الذكاء الاصطناعي.",
        },
        {
          id: "automation",
          title: "أتمتة سير العمل والعمليات",
          description:
            "أتمتة العمليات التشغيلية والإدارية لرفع الكفاءة وتقليل الجهد اليدوي.",
        },
        {
          id: "management-consulting",
          title: "الاستشارات الإدارية",
          description:
            "استشارات إدارية استراتيجية تدعم القرارات المؤسسية وتحقق النمو المستدام.",
        },
        {
          id: "business-process-reengineering",
          title: "إعادة هندسة العمليات الإدارية",
          description:
            "إعادة تصميم وهندسة العمليات الإدارية لتحقيق أقصى قدر من الفعالية والمرونة.",
        },
        {
          id: "ml-predictive-models",
          title: "النماذج التنبؤية والتعلم الآلي والعميق",
          description:
            "نماذج تعلم آلي وتعلم عميق متقدمة لاستخلاص رؤى تنبؤية تدعم اتخاذ القرار.",
        },
      ],
    },
    portfolio: {
      heading: "أعمالنا",
      subheading: "استعراض شامل لمبادراتنا التقنية المنجزة والجارية والمستقبلية.",
      completed: {
        title: "أعمال منجزة",
        description: "مشاريع تم تسليمها بنجاح لعملائنا بمعايير جودة عالية.",
      },
      inProgress: {
        title: "أعمال جارية",
        description: "مبادرات قيد التنفيذ حالياً ضمن خارطة طريق واضحة.",
      },
      future: {
        title: "مبادرات مستقبلية",
        description: "رؤية استراتيجية لمشاريع قادمة تواكب تطورات الذكاء الاصطناعي.",
      },
    },
    home: {
      hero: {
        eyebrow: "الذكاء الاصطناعي × الأتمتة × الاستشارات الإدارية",
        headline: "حيث يلتقي الذكاء الاصطناعي بالتميز الإداري",
        subheadline:
          "نصمم أنظمة ذكاء اصطناعي، ونؤتمت العمليات، ونقدّم استشارات إدارية استراتيجية تعيد هندسة طريقة عمل مؤسستكم.",
        ctaPrimary: "استكشف خدماتنا",
        ctaSecondary: "تواصل معنا",
        stats: ["حلول الذكاء الاصطناعي", "هندسة العمليات", "الحوكمة الاستراتيجية"],
      },
      servicesPreview: {
        heading: "خدماتنا الأساسية",
        subheading:
          "خمس ركائز متكاملة تجمع بين الهندسة التقنية والاستشارات الإدارية.",
        viewAll: "عرض جميع الخدمات",
      },
      portfolioPreview: {
        heading: "أبرز أعمالنا",
        subheading: "من المشاريع المنجزة إلى المبادرات المستقبلية — هذا مسار عملنا.",
        viewAll: "عرض كل الأعمال",
        statusCompleted: "مكتمل",
        statusInProgress: "قيد التنفيذ",
        statusFuture: "قادم",
      },
      valueProps: {
        heading: "لماذا نيوماستريز",
        subheading: "خبرة هندسية وتقنية تلتقي بانضباط استشاري إداري.",
        items: [
          {
            title: "خبرة تقنية عميقة",
            description:
              "فرق متخصصة في الذكاء الاصطناعي والتعلم الآلي وهندسة الأنظمة.",
          },
          {
            title: "انضباط استشاري",
            description: "منهجية إدارية صارمة تربط التقنية بأهداف العمل.",
          },
          {
            title: "هندسة العمليات",
            description: "إعادة تصميم سير العمل لتحقيق أعلى كفاءة تشغيلية.",
          },
          {
            title: "نتائج قابلة للقياس",
            description: "حلول مبنية على البيانات مع مؤشرات أداء واضحة.",
          },
        ],
      },
      finalCta: {
        heading: "هل أنت مستعد لهندسة المستقبل؟",
        subheading: "احجز استشارة مع فريقنا وابدأ مشروعك اليوم.",
        ctaSecondary: "احجز استشارة",
      },
    },
    common: {
      switchLanguageTo: "English",
      ctaPrimary: "ابدأ مشروعك",
      ctaSecondary: "اكتشف المزيد",
      comingSoon: "قريباً",
      backHome: "العودة للرئيسية",
      contactForm: {
        heading: "تواصل معنا",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        submit: "إرسال",
      },
      footer: {
        rights: "جميع الحقوق محفوظة",
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام",
      },
    },
  },
  en: {
    meta: {
      title: "NeoMasterys | AI Engineering & Management Consulting",
      description:
        "AI solutions, automation, management consulting, and business process engineering.",
    },
    brand: {
      name: "NeoMasterys",
      slogan: "AI & Management Consulting Solutions",
      mission:
        "We help organizations harness artificial intelligence and re-engineer their operations for sustainable digital and managerial transformation.",
    },
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About Us",
      contact: "Contact Us",
    },
    layout: {
      getInTouch: "Get in Touch",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      footer: {
        quickLinks: "Quick Links",
        servicesHeading: "Services",
        contactHeading: "Contact",
        socialHeading: "Follow Us",
        tagline: "Engineering the future, today.",
      },
    },
    services: {
      heading: "Our Core Services",
      subheading:
        "A complete suite of engineering and consulting solutions built on modern AI technology.",
      items: [
        {
          id: "ai-training",
          title: "AI Training & Enablement",
          description:
            "Specialized training programs that equip teams and organizations with AI tools and skills.",
        },
        {
          id: "automation",
          title: "Workflow & Process Automation",
          description:
            "Automating operational and administrative workflows to boost efficiency and cut manual effort.",
        },
        {
          id: "management-consulting",
          title: "Management Consulting",
          description:
            "Strategic management consulting that supports institutional decisions and sustainable growth.",
        },
        {
          id: "business-process-reengineering",
          title: "Business Process Re-engineering (BPR)",
          description:
            "Redesigning and re-engineering administrative processes for maximum effectiveness and agility.",
        },
        {
          id: "ml-predictive-models",
          title: "Predictive Models, Deep Learning & ML",
          description:
            "Advanced machine learning and deep learning models that deliver predictive insight for decision-making.",
        },
      ],
    },
    portfolio: {
      heading: "Portfolio",
      subheading:
        "A full overview of our completed, in-progress, and future technical initiatives.",
      completed: {
        title: "Completed Works",
        description: "Projects delivered successfully to our clients to a high standard of quality.",
      },
      inProgress: {
        title: "In-Progress Works",
        description: "Initiatives currently underway on a clear delivery roadmap.",
      },
      future: {
        title: "Future Initiatives",
        description: "A strategic vision for upcoming projects that track the evolution of AI.",
      },
    },
    home: {
      hero: {
        eyebrow: "AI × Automation × Management Consulting",
        headline: "Where Artificial Intelligence Meets Management Excellence",
        subheadline:
          "We design AI systems, automate operations, and deliver strategic management consulting that re-engineers the way your organization works.",
        ctaPrimary: "Explore Services",
        ctaSecondary: "Contact Us",
        stats: ["AI Solutions", "Process Engineering", "Strategic Governance"],
      },
      servicesPreview: {
        heading: "Our Core Services",
        subheading:
          "Five integrated pillars combining technical engineering with management consulting.",
        viewAll: "View All Services",
      },
      portfolioPreview: {
        heading: "Featured Work & Roadmap",
        subheading: "From delivered projects to future initiatives — this is our roadmap.",
        viewAll: "View Full Portfolio",
        statusCompleted: "Completed",
        statusInProgress: "In Progress",
        statusFuture: "Upcoming",
      },
      valueProps: {
        heading: "Why NeoMasterys",
        subheading: "Deep technical expertise meets disciplined management consulting.",
        items: [
          {
            title: "Deep Technical Expertise",
            description:
              "Specialist teams across AI, machine learning, and systems engineering.",
          },
          {
            title: "Consulting Discipline",
            description:
              "A rigorous management methodology that ties technology to business goals.",
          },
          {
            title: "Process Engineering",
            description:
              "Redesigning workflows to achieve the highest operational efficiency.",
          },
          {
            title: "Measurable Outcomes",
            description:
              "Data-driven solutions with clear, trackable performance indicators.",
          },
        ],
      },
      finalCta: {
        heading: "Ready to Engineer the Future?",
        subheading: "Book a consultation with our team and start your project today.",
        ctaSecondary: "Book a Consultation",
      },
    },
    common: {
      switchLanguageTo: "العربية",
      ctaPrimary: "Start Your Project",
      ctaSecondary: "Learn More",
      comingSoon: "Coming Soon",
      backHome: "Back to Home",
      contactForm: {
        heading: "Get in Touch",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Submit",
      },
      footer: {
        rights: "All rights reserved",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
  },
};
