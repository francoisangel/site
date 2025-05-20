import { createContext, useContext } from 'react';

export type Language = 'en' | 'pt' | 'fr';

interface Translations {
  navigation: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    contact: string;
    followUs: string;
    rights: string;
    createdBy: string;
  };
  common: {
    readMore: string;
    viewAll: string;
    sendMessage: string;
    sending: string;
    location: string;
    year: string;
    area: string;
    type: string;
    client: string;
    status: string;
    team: string;
    previous: string;
    next: string;
    backToProjects: string;
    noProjectsFound: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      discoverButton: string;
    };
    manifesto: {
      title: string;
      description1: string;
      description2: string;
      stats: {
        experience: string;
        projects: string;
        countries: string;
        awards: string;
      }
    };
    services: {
      title: string;
      subtitle: string;
      architecture: {
        title: string;
        description: string;
        details: {
          design: string;
          sustainability: string;
          timeless: string;
        }
      };
      supervision: {
        title: string;
        description: string;
        details: {
          quality: string;
          planning: string;
          tracking: string;
        }
      };
      realEstate: {
        title: string;
        description: string;
        details: {
          analysis: string;
          investment: string;
          surveys: string;
        }
      }
    }
  };
  projects: {
    title: string;
    subtitle: string;
    filters: {
      title: string;
      close: string;
      location: string;
      type: string;
      clearAll: string;
      filtersApplied: string;
    };
    testimonials: {
      title: string;
      cta: {
        title: string;
        description: string;
        button: string;
      };
    };
    types: {
      residential: string;
      commercial: string;
      cultural: string;
      educational: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    founder: {
      title: string;
      subtitle: string;
      description1: string;
      description2: string;
      cta: string;
    };
    expertise: {
      title: string;
      description: string;
      investment: {
        title: string;
        description: string;
      };
      risk: {
        title: string;
        description: string;
      };
      local: {
        title: string;
        description: string;
      };
      quality: {
        title: string;
        description: string;
      };
    };
    track: {
      title: string;
      description: string;
      stats: {
        experience: string;
        projects: string;
      };
    };
    quote: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      description: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      success: string;
    };
    office: {
      title: string;
      visit: string;
      call: string;
      email: string;
    };
    services: {
      investment: {
        title: string;
        description: string;
      };
      design: {
        title: string;
        description: string;
      };
      management: {
        title: string;
        description: string;
      };
    };
    quote: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    navigation: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact'
    },
    footer: {
      tagline: 'Architect • Consulting • Real Estate',
      navigation: 'Navigation',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
      createdBy: 'Created with'
    },
    common: {
      readMore: 'Read More',
      viewAll: 'View All',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      location: 'Location',
      year: 'Year',
      area: 'Area',
      type: 'Type',
      client: 'Client',
      status: 'Status',
      team: 'Team',
      previous: 'Previous',
      next: 'Next',
      backToProjects: 'Back to Projects',
      noProjectsFound: 'No projects found matching your filters.'
    },
    home: {
      hero: {
        title: 'Shaping the future of architecture',
        subtitle: 'Each project is a new opportunity to push the boundaries of architectural design.',
        discoverButton: 'Discover Our Projects'
      },
      manifesto: {
        title: 'Creating spaces that inspire and endure',
        description1: 'At Square Way, architectural projects come to life by solving challenges with clarity, creativity, and precision.',
        description2: 'Our strength lies not only in designing spaces, but in guiding them through every stage of realization—ensuring that each idea becomes a thoughtful, durable construction, fully supervised from start to finish.',
        stats: {
          experience: 'Years Experience',
          projects: 'Projects Completed',
          countries: 'Countries',
          awards: 'Award Won'
        }
      },
      services: {
        title: 'Envisioning tomorrow\'s living spaces',
        subtitle: 'Our holistic approach to architecture fuses innovative design, optimal functionality, and environmental sustainability.',
        architecture: {
          title: 'Architecture',
          description: 'Each project is a new opportunity to push the boundaries of architectural design, creating spaces that inspire and transform their environment.',
          details: {
            design: 'Design Excellence',
            sustainability: 'Sustainability',
            timeless: 'Timeless Design'
          }
        },
        supervision: {
          title: 'Construction Supervision',
          description: 'We oversee finishes, scheduling, and cost tracking to ensure the project is delivered under optimal conditions, both technically and financially.',
          details: {
            quality: 'Quality Control',
            planning: 'Planning Oversight',
            tracking: 'Invoice Tracking'
          }
        },
        realEstate: {
          title: 'Real Estate',
          description: 'We identify unique real estate opportunities for turnkey solutions, and support your purchase process through expert consulting.',
          details: {
            analysis: 'Market Analysis',
            investment: 'Investment',
            surveys: 'Surveys'
          }
        }
      }
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'Discover our portfolio of architectural projects across residential, commercial, and cultural spaces. Each project reflects our commitment to innovative design, functionality, and sustainability.',
      filters: {
        title: 'Explore Our Work',
        close: 'Close',
        location: 'Location',
        type: 'Type',
        clearAll: 'Clear all filters',
        filtersApplied: 'filters applied'
      },
      testimonials: {
        title: 'Client Experiences',
        cta: {
          title: 'Transform Your Vision into Reality',
          description: 'Let\'s collaborate to create exceptional spaces that inspire and endure. Our team is ready to bring your architectural dreams to life.',
          button: 'Start Your Project'
        }
      },
      types: {
        residential: 'Residential - Refurbishment',
        commercial: 'Commercial',
        cultural: 'Cultural',
        educational: 'Educational'
      }
    },
    about: {
      title: 'About Us',
      subtitle: 'Specializing in tailored investment solutions, architectural design, and construction supervision in Lisbon, bringing Swiss precision to the Portuguese market.',
      founder: {
        title: 'François Angel - Founder',
        subtitle: 'Swiss Architect & Investment Specialist',
        description1: 'With deep local expertise in Lisbon\'s real estate market and Swiss architectural precision, François Angel leads Square Way in delivering comprehensive, high-quality solutions that minimize risks and maximize returns for our clients.',
        description2: 'Our mission is to turn your visions into successful projects, perfectly tailored to meet your investment goals in Lisbon while maintaining the highest standards of architectural excellence and sustainability.',
        cta: 'Discuss Your Investment'
      },
      expertise: {
        title: 'Our Expertise',
        description: 'We combine Swiss architectural excellence with deep local market knowledge to provide comprehensive investment solutions in Lisbon\'s dynamic real estate market.',
        investment: {
          title: 'Investment Solutions',
          description: 'Strategic guidance for optimal returns in Lisbon\'s real estate market.'
        },
        risk: {
          title: 'Risk Management',
          description: 'Comprehensive risk assessment and mitigation strategies.'
        },
        local: {
          title: 'Local Expertise',
          description: 'Deep understanding of Lisbon\'s market dynamics and regulations.'
        },
        quality: {
          title: 'Quality Assurance',
          description: 'Swiss standards of precision in every project phase.'
        }
      },
      track: {
        title: 'Track Record',
        description: 'Our portfolio showcases successful investment projects across Lisbon, where we\'ve consistently delivered exceptional returns while maintaining the highest standards of architectural excellence and sustainability.',
        stats: {
          experience: 'Years Experience',
          projects: 'Projects Completed'
        }
      },
      quote: 'True architecture is born from the meeting of artistic vision and environmental responsibility, creating spaces that inspire future generations.'
    },
    contact: {
      title: "Let's Create Together",
      subtitle: "Whether you're envisioning a new architectural project or seeking investment opportunities in Lisbon, we're here to transform your aspirations into reality.",
      form: {
        title: "Get in Touch",
        description: "Share your vision with us, and let's begin crafting exceptional spaces together. Our team is ready to bring your architectural dreams to life.",
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        success: "Thank you for your message. We'll get back to you soon!"
      },
      office: {
        title: "Our Office",
        visit: "Visit Us",
        call: "Call Us",
        email: "Email Us"
      },
      services: {
        investment: {
          title: "Investment Solutions",
          description: "Expert guidance for real estate investments in Lisbon's dynamic market, maximizing returns while minimizing risks."
        },
        design: {
          title: "Architectural Design",
          description: "Innovative architectural solutions that blend aesthetics, functionality, and sustainability."
        },
        management: {
          title: "Project Management",
          description: "Comprehensive project oversight ensuring timely delivery and exceptional quality standards."
        }
      },
      quote: "Each collaboration is a new story to write together, an opportunity to create unique spaces that reflect your aspirations."
    }
  },
  pt: {
    navigation: {
      home: 'Início',
      projects: 'Projetos',
      about: 'Sobre',
      contact: 'Contacto'
    },
    footer: {
      tagline: 'Arquitetura • Consultoria • Imobiliário',
      navigation: 'Navegação',
      contact: 'Contacto',
      followUs: 'Siga-nos',
      rights: 'Todos os direitos reservados.',
      createdBy: 'Criado com'
    },
    common: {
      readMore: 'Ler Mais',
      viewAll: 'Ver Todos',
      sendMessage: 'Enviar Mensagem',
      sending: 'A enviar...',
      location: 'Localização',
      year: 'Ano',
      area: 'Área',
      type: 'Tipo',
      client: 'Cliente',
      status: 'Estado',
      team: 'Equipa',
      previous: 'Anterior',
      next: 'Seguinte',
      backToProjects: 'Voltar aos Projetos',
      noProjectsFound: 'Nenhum projeto encontrado com os filtros selecionados.'
    },
    home: {
      hero: {
        title: 'Moldando o futuro da arquitetura',
        subtitle: 'Cada projeto é uma nova oportunidade de expandir os limites do design arquitetônico.',
        discoverButton: 'Descobrir Nossos Projetos'
      },
      manifesto: {
        title: 'Criando espaços que inspiram e perduram',
        description1: 'Na Square Way, os projetos arquitetônicos ganham vida resolvendo desafios com clareza, criatividade e precisão.',
        description2: 'Nossa força está não apenas em projetar espaços, mas em guiá-los em cada etapa da realização—garantindo que cada ideia se torne uma construção pensada e durável, totalmente supervisionada do início ao fim.',
        stats: {
          experience: 'Anos de Experiência',
          projects: 'Projetos Concluídos',
          countries: 'Países',
          awards: 'Prêmio Conquistado'
        }
      },
      services: {
        title: 'Visualizando os espaços do amanhã',
        subtitle: 'Nossa abordagem holística à arquitetura combina design inovador, funcionalidade ideal e sustentabilidade ambiental.',
        architecture: {
          title: 'Arquitetura',
          description: 'Cada projeto é uma nova oportunidade de expandir os limites do design arquitetônico, criando espaços que inspiram e transformam seu ambiente.',
          details: {
            design: 'Excelência em Design',
            sustainability: 'Sustentabilidade',
            timeless: 'Design Atemporal'
          }
        },
        supervision: {
          title: 'Supervisão de Obras',
          description: 'Supervisionamos acabamentos, cronogramas e controle de custos para garantir que o projeto seja entregue em condições ideais, tanto técnica quanto financeiramente.',
          details: {
            quality: 'Controle de Qualidade',
            planning: 'Supervisão de Planejamento',
            tracking: 'Controle de Faturas'
          }
        },
        realEstate: {
          title: 'Imobiliário',
          description: 'Identificamos oportunidades imobiliárias únicas para soluções chave na mão e apoiamos seu processo de compra através de consultoria especializada.',
          details: {
            analysis: 'Análise de Mercado',
            investment: 'Investimento',
            surveys: 'Vistorias'
          }
        }
      }
    },
    projects: {
      title: 'Nossos Projetos',
      subtitle: 'Descubra nosso portfólio de projetos arquitetônicos em espaços residenciais, comerciais e culturais. Cada projeto reflete nosso compromisso com design inovador, funcionalidade e sustentabilidade.',
      filters: {
        title: 'Explore Nosso Trabalho',
        close: 'Fechar',
        location: 'Localização',
        type: 'Tipo',
        clearAll: 'Limpar todos os filtros',
        filtersApplied: 'filtros aplicados'
      },
      testimonials: {
        title: 'Experiências dos Clientes',
        cta: {
          title: 'Transforme Sua Visão em Realidade',
          description: 'Vamos colaborar para criar espaços excepcionais que inspiram e perduram. Nossa equipe está pronta para dar vida aos seus sonhos arquitetônicos.',
          button: 'Iniciar Seu Projeto'
        }
      },
      types: {
        residential: 'Residential - Refurbishment',
        commercial: 'Comercial',
        cultural: 'Cultural',
        educational: 'Educacional'
      }
    },
    about: {
      title: 'Sobre Nós',
      subtitle: 'Especialistas em soluções de investimento personalizadas, design arquitetônico e supervisão de construção em Lisboa, trazendo a precisão suíça para o mercado português.',
      founder: {
        title: 'François Angel - Fundador',
        subtitle: 'Arquiteto Suíço & Especialista em Investimentos',
        description1: 'Com profunda experiência local no mercado imobiliário de Lisboa e precisão arquitetônica suíça, François Angel lidera a Square Way na entrega de soluções abrangentes e de alta qualidade que minimizam riscos e maximizam retornos para nossos clientes.',
        description2: 'Nossa missão é transformar suas visões em projetos bem-sucedidos, perfeitamente adaptados para atender seus objetivos de investimento em Lisboa, mantendo os mais altos padrões de excelência arquitetônica e sustentabilidade.',
        cta: 'Discuta Seu Investimento'
      },
      expertise: {
        title: 'Nossa Expertise',
        description: 'Combinamos a excelência arquitetônica suíça com profundo conhecimento do mercado local para fornecer soluções abrangentes de investimento no dinâmico mercado imobiliário de Lisboa.',
        investment: {
          title: 'Soluções de Investimento',
          description: 'Orientação estratégica para retornos ideais no mercado imobiliário de Lisboa.'
        },
        risk: {
          title: 'Gestão de Risco',
          description: 'Avaliação abrangente de riscos e estratégias de mitigação.'
        },
        local: {
          title: 'Expertise Local',
          description: 'Profundo entendimento da dinâmica e regulamentações do mercado de Lisboa.'
        },
        quality: {
          title: 'Garantia de Qualidade',
          description: 'Padrões suíços de precisão em cada fase do projeto.'
        }
      },
      track: {
        title: 'Histórico',
        description: 'Nosso portfólio apresenta projetos de investimento bem-sucedidos em Lisboa, onde consistentemente entregamos retornos excepcionais mantendo os mais altos padrões de excelência arquitetônica e sustentabilidade.',
        stats: {
          experience: 'Anos de Experiência',
          projects: 'Projetos Concluídos'
        }
      },
      quote: 'A verdadeira arquitetura nasce do encontro entre visão artística e responsabilidade ambiental, criando espaços que inspiram as gerações futuras.'
    },
    contact: {
      title: "Vamos Criar Juntos",
      subtitle: "Seja você está visualizando um novo projeto arquitetônico ou buscando oportunidades de investimento em Lisboa, estamos aqui para transformar suas aspirações em realidade.",
      form: {
        title: "Entre em Contato",
        description: "Compartilhe sua visão conosco e vamos começar a criar espaços excepcionais juntos. Nossa equipe está pronta para dar vida aos seus sonhos arquitetônicos.",
        name: "Seu Nome",
        email: "Seu Email",
        subject: "Assunto",
        message: "Sua Mensagem",
        success: "Obrigado pela sua mensagem. Entraremos em contato em breve!"
      },
      office: {
        title: "Nosso Escritório",
        visit: "Visite-nos",
        call: "Ligue-nos",
        email: "Envie-nos um Email"
      },
      services: {
        investment: {
          title: "Soluções de Investimento",
          description: "Orientação especializada para investimentos imobiliários no mercado dinâmico de Lisboa, maximizando retornos e minimizando riscos."
        },
        design: {
          title: "Design Arquitetônico",
          description: "Soluções arquitetônicas inovadoras que combinam estética, funcionalidade e sustentabilidade."
        },
        management: {
          title: "Gestão de Projetos",
          description: "Supervisão abrangente do projeto garantindo entrega pontual e padrões excepcionais de qualidade."
        }
      },
      quote: "Cada colaboração é uma nova história para escrevermos juntos, uma oportunidade de criar espaços únicos que refletem suas aspirações."
    }
  },
  fr: {
    navigation: {
      home: 'Accueil',
      projects: 'Projets',
      about: 'À propos',
      contact: 'Contact'
    },
    footer: {
      tagline: 'Architecture • Conseil • Immobilier',
      navigation: 'Navigation',
      contact: 'Contact',
      followUs: 'Suivez-nous',
      rights: 'Tous droits réservés.',
      createdBy: 'Créé avec'
    },
    common: {
      readMore: 'Lire Plus',
      viewAll: 'Voir Tout',
      sendMessage: 'Envoyer',
      sending: 'Envoi en cours...',
      location: 'Emplacement',
      year: 'Année',
      area: 'Surface',
      type: 'Type',
      client: 'Client',
      status: 'Statut',
      team: 'Équipe',
      previous: 'Précédent',
      next: 'Suivant',
      backToProjects: 'Retour aux Projets',
      noProjectsFound: 'Aucun projet trouvé avec les filtres sélectionnés.'
    },
    home: {
      hero: {
        title: 'Façonner l\'avenir de l\'architecture',
        subtitle: 'Chaque projet est une nouvelle opportunité de repousser les limites du design architectural.',
        discoverButton: 'Découvrir Nos Projets'
      },
      manifesto: {
        title: 'Créer des espaces qui inspirent et perdurent',
        description1: 'Chez Square Way, les projets architecturaux prennent vie en résolvant les défis avec clarté, créativité et précision.',
        description2: 'Notre force réside non seulement dans la conception des espaces, mais dans leur accompagnement à chaque étape de la réalisation—assurant que chaque idée devient une construction réfléchie et durable, entièrement supervisée du début à la fin.',
        stats: {
          experience: 'Ans d\'Expérience',
          projects: 'Projets Réalisés',
          countries: 'Pays',
          awards: 'Prix Remporté'
        }
      },
      services: {
        title: 'Envisager les espaces de demain',
        subtitle: 'Notre approche holistique de l\'architecture fusionne design innovant, fonctionnalité optimale et durabilité environnementale.',
        architecture: {
          title: 'Architecture',
          description: 'Chaque projet est une nouvelle opportunité de repousser les limites du design architectural, créant des espaces qui inspirent et transforment leur environnement.',
          details: {
            design: 'Excellence du Design',
            sustainability: 'Durabilité',
            timeless: 'Design Intemporel'
          }
        },
        supervision: {
          title: 'Supervision de Chantier',
          description: 'Nous supervisons les finitions, le planning et le suivi des coûts pour garantir que le projet soit livré dans des conditions optimales, tant techniquement que financièrement.',
          details: {
            quality: 'Contrôle Qualité',
            planning: 'Supervision Planning',
            tracking: 'Suivi des Factures'
          }
        },
        realEstate: {
          title: 'Immobilier',
          description: 'Nous identifions des opportunités immobilières uniques pour des solutions clé en main et accompagnons votre processus d\'achat par une expertise conseil.',
          details: {
            analysis: 'Analyse de Marché',
            investment: 'Investissement',
            surveys: 'Expertises'
          }
        }
      }
    },
    projects: {
      title: 'Nos Projets',
      subtitle: 'Découvrez notre portfolio de projets architecturaux à travers les espaces résidentiels, commerciaux et culturels. Chaque projet reflète notre engagement envers le design innovant, la fonctionnalité et la durabilité.',
      filters: {
        title: 'Explorez Notre Travail',
        close: 'Fermer',
        location: 'Emplacement',
        type: 'Type',
        clearAll: 'Effacer tous les filtres',
        filtersApplied: 'filtres appliqués'
      },
      testimonials: {
        title: 'Expériences Clients',
        cta: {
          title: 'Transformez Votre Vision en Réalité',
          description: 'Collaborons pour créer des espaces exceptionnels qui inspirent et perdurent. Notre équipe est prête à donner vie à vos rêves architecturaux.',
          button: 'Démarrer Votre Projet'
        }
      },
      types: {
        residential: 'Residential - Refurbishment',
        commercial: 'Commercial',
        cultural: 'Culturel',
        educational: 'Éducatif'
      }
    },
    about: {
      title: 'À Propos',
      subtitle: 'Spécialisés dans les solutions d\'investissement sur mesure, le design architectural et la supervision de construction à Lisbonne, apportant la précision suisse au marché portugais.',
      founder: {
        title: 'François Angel - Fondateur',
        subtitle: 'Architecte Suisse & Spécialiste en Investissement',
        description1: 'Avec une expertise locale approfondie du marché immobilier de Lisbonne et la précision architecturale suisse, François Angel dirige Square Way dans la fourniture de solutions complètes et de haute qualité qui minimisent les risques et maximisent les rendements pour nos clients.',
        description2: 'Notre mission est de transformer vos visions en projets réussis, parfaitement adaptés pour atteindre vos objectifs d\'investissement à Lisbonne tout en maintenant les plus hauts standards d\'excellence architecturale et de durabilité.',
        cta: 'Discuter de Votre Investissement'
      },
      expertise: {
        title: 'Notre Expertise',
        description: 'Nous combinons l\'excellence architecturale suisse avec une connaissance approfondie du marché local pour fournir des solutions d\'investissement complètes sur le marché immobilier dynamique de Lisbonne.',
        investment: {
          title: 'Solutions d\'Investissement',
          description: 'Orientation stratégique pour des rendements optimaux sur le marché immobilier de Lisbonne.'
        },
        risk: {
          title: 'Gestion des Risques',
          description: 'Évaluation complète des risques et stratégies d\'atténuation.'
        },
        local: {
          title: 'Expertise Locale',
          description: 'Compréhension approfondie de la dynamique et des réglementations du marché de Lisbonne.'
        },
        quality: {
          title: 'Assurance Qualité',
          description: 'Standards suisses de précision à chaque phase du projet.'
        }
      },
      track: {
        title: 'Historique',
        description: 'Notre portfolio présente des projets d\'investissement réussis à travers Lisbonne, où nous avons constamment livré des rendements exceptionnels tout en maintenant les plus hauts standards d\'excellence architecturale et de durabilité.',
        stats: {
          experience: 'Années d\'Expérience',
          projects: 'Projets Réalisés'
        }
      },
      quote: 'La véritable architecture naît de la rencontre entre vision artistique et responsabilité environnementale, créant des espaces qui inspirent les générations futures.'
    },
    contact: {
      title: "Créons Ensemble",
      subtitle: "Que vous envisagiez un nouveau projet architectural ou recherchiez des opportunités d'investissement à Lisbonne, nous sommes là pour transformer vos aspirations en réalité.",
      form: {
        title: "Contactez-nous",
        description: "Partagez votre vision avec nous et commençons à créer des espaces exceptionnels ensemble. Notre équipe est prête à donner vie à vos rêves architecturaux.",
        name: "Votre Nom",
        email: "Votre Email",
        subject: "Sujet",
        message: "Votre Message",
        success: "Merci pour votre message. Nous vous répondrons bientôt !"
      },
      office: {
        title: "Notre Bureau",
        visit: "Visitez-nous",
        call: "Appelez-nous",
        email: "Envoyez-nous un Email"
      },
      services: {
        investment: {
          title: "Solutions d'Investissement",
          description: "Conseils d'experts pour les investissements immobiliers sur le marché dynamique de Lisbonne, maximisant les rendements tout en minimisant les risques."
        },
        design: {
          title: "Design Architectural",
          description: "Solutions architecturales innovantes alliant esthétique, fonctionnalité et durabilité."
        },
        management: {
          title: "Gestion de Projet",
          description: "Supervision complète du projet assurant une livraison dans les délais et des standards de qualité exceptionnels."
        }
      },
      quote: "Chaque collaboration est une nouvelle histoire à écrire ensemble, une opportunité de créer des espaces uniques qui reflètent vos aspirations."
    }
  }
};

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const TranslationContext = createContext<TranslationContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => ''
});

export const useTranslation = () => useContext(TranslationContext);