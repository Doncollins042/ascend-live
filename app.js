// ============================================================
// ASCEND v0.2 — Single-file Application
// Features: listings + action hub (CV/essay/cover letter generator)
// Data sources researched April 2026 via official pages
// ============================================================

// ============================================================
// SCHOLARSHIPS — with rich application_schema for the Action Hub
// ============================================================
const SCHOLARSHIPS = [
  {
    id:'chevening-2026-27', slug:'chevening', name:'Chevening Scholarship',
    provider:'UK Government (FCDO)', country:'United Kingdom', flag:'🇬🇧',
    funding_type:'fully_funded', degree_level:"Master's", duration:'1 year',
    benefits:{tuition:true,stipend:true,travel:true,health:false,visa:true},
    stipend_text:'~£1,200/month + allowances',
    eligibility:[
      'Nigerian citizenship (and commit to return for 2 years post-study)',
      '2,800+ hours of work experience (~2 years full-time) after your undergraduate degree',
      'Undergraduate degree at 2:1 equivalent',
      'Apply to 3 eligible UK Master\'s courses; secure at least one unconditional offer by 9 July 2026'
    ],
    deadline:'2026-11-04',
    application_url:'https://www.chevening.org/apply',
    last_verified:'2026-04-18',
    steps:[
      {title:'Confirm eligibility',detail:'Use the official Chevening eligibility checker. Your 2,800 hours can come from up to 15 separate jobs combined.'},
      {title:'Research and shortlist 3 UK courses',detail:'Must be 3 *different* eligible courses (can be at the same university). Use the Chevening course search. Align all 3 with one clear career story.'},
      {title:'Prepare documents',detail:'Passport, undergraduate transcripts, details of 2 referees (who will submit references during the application, not before).'},
      {title:'Write 4 essays (300 words each)',detail:'Leadership & influence, networking, career plan, studying in the UK. Note: Chevening reduced the word limit from 500 to 300 words for the 2026-27 cycle — every word counts.'},
      {title:'Submit online between August and early November',detail:'Portal opens early August 2026 for the 2027-28 cycle. Don\'t wait — technical issues on deadline day are common.'},
      {title:'Interview at British High Commission (Feb–Apr)',detail:'Shortlisted candidates interview at the British High Commission in Abuja or Lagos. Preparation matters — practice telling your leadership story concisely.'},
      {title:'Secure unconditional university offer by July 9, 2027',detail:'You must have at least one unconditional offer from your three chosen courses by this date.'}
    ],
    application_schema:{
      documents_required:[
        {name:'Valid international passport',note:'Must be valid for the full duration of study',tier:'required'},
        {name:'Undergraduate transcript (all years)',note:'Official transcript from your university — may need to request from records office',tier:'required'},
        {name:'Undergraduate degree certificate',note:'Required at interview stage, not application',tier:'required'},
        {name:'Two referees\' contact details',note:'Professional references; they submit directly through the portal if you\'re shortlisted',tier:'required'},
        {name:'English language test (if applicable)',note:'Needed only if your university degree was not taught in English. IELTS 6.5+ typical',tier:'conditional'},
        {name:'CV (not uploaded but useful)',note:'For your own reference when filling the work-experience section',tier:'recommended'}
      ],
      essays:[
        {id:'leadership',title:'Leadership & Influence',word_limit:300,prompt:'Demonstrate how you have influenced others and brought about positive change. Use specific examples with measurable outcomes.'},
        {id:'networking',title:'Networking',word_limit:300,prompt:'Describe how you build and maintain professional networks and how you will use them to create positive change.'},
        {id:'career',title:'Career Plan',word_limit:300,prompt:'Where do you see yourself in 5, 10, and 15 years? How does Chevening fit into that plan and how will you benefit Nigeria?'},
        {id:'study',title:'Studying in the UK',word_limit:300,prompt:'Why did you choose your three courses? How do they work together toward your career goal?'}
      ]
    }
  },
  {
    id:'daad-epos-2026-27', slug:'daad-epos', name:'DAAD EPOS Scholarship',
    provider:'German Academic Exchange Service', country:'Germany', flag:'🇩🇪',
    funding_type:'fully_funded', degree_level:"Master's / PhD", duration:'12–24 months',
    benefits:{tuition:true,stipend:true,travel:true,health:true,visa:false},
    stipend_text:'€992/month + health insurance',
    eligibility:[
      'Nigerian citizenship (Nigeria is on the DAC list of eligible countries)',
      'Bachelor\'s degree (normally 4 years) not older than 6 years at application time',
      'Minimum 2 years of relevant professional experience AFTER your degree',
      'English (TOEFL/IELTS 6.0+) or German proficiency, depending on program',
      'Upper-third (2:1) or better academic results'
    ],
    deadline:'2026-10-15',
    application_url:'https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/',
    last_verified:'2026-04-18',
    steps:[
      {title:'Browse the EPOS database',detail:'Pick from 40+ development-focused Master\'s/PhD programs. Narrow by field: Public Health, Engineering, Economics, Governance, etc.'},
      {title:'Choose up to 3 programs',detail:'You can apply to a maximum of 3 EPOS programs — but must rank them in order of priority. One shared motivation letter must explain why you chose those 3 and why in that order.'},
      {title:'Apply directly to each university (NOT to DAAD)',detail:'This is the #1 mistake Nigerians make. Applications go through each university, which then forwards selected candidates to DAAD.'},
      {title:'Submit documents in Europass CV format',detail:'DAAD requires the standardised Europass CV. Use the free Europass tool at europa.eu/europass.'},
      {title:'Program-specific interviews (if shortlisted)',detail:'Some programs interview via video call. Others rely purely on documents.'},
      {title:'Results 3–5 months after deadline',detail:'Each program has its own timeline. Most announce between March and July for October starts.'}
    ],
    application_schema:{
      documents_required:[
        {name:'International passport',note:'Valid throughout study duration',tier:'required'},
        {name:'Bachelor\'s degree certificate',note:'Certified English translation if not originally in English/German',tier:'required'},
        {name:'Full academic transcript',note:'All years — include grading scale for conversion',tier:'required'},
        {name:'CV in Europass format',note:'Download template from europa.eu/europass — non-Europass CVs are rejected',tier:'required'},
        {name:'Letter of Motivation (max 2 pages)',note:'One letter covering all 3 programs — academic, professional, personal reasons',tier:'required'},
        {name:'Certificate(s) of Employment',note:'Proving 2+ years of professional experience after degree',tier:'required'},
        {name:'IELTS 6.0+ or TOEFL equivalent',note:'Most programs require it. Book at British Council Lagos/Abuja — costs ~₦130,000',tier:'required'},
        {name:'Two recommendation letters',note:'One academic, one professional — on letterhead with contact info',tier:'required'}
      ],
      essays:[
        {id:'motivation',title:'Letter of Motivation',word_limit:800,prompt:'Why these 3 programs in this priority order? Tie to your current work, your development mission, and concrete post-study plans in Nigeria.'}
      ]
    }
  },
  {
    id:'mext-2027', slug:'mext', name:'MEXT Scholarship',
    provider:'Government of Japan', country:'Japan', flag:'🇯🇵',
    funding_type:'fully_funded', degree_level:"Master's / PhD / Research", duration:'2–5 years',
    benefits:{tuition:true,stipend:true,travel:true,health:false,visa:true},
    stipend_text:'¥143,000–145,000/month',
    eligibility:[
      'Nigerian citizenship',
      'Under 35 years of age at time of application',
      'Undergraduate degree (2:1 minimum)',
      'Willingness to learn basic Japanese'
    ],
    deadline:'2026-06-15',
    application_url:'https://www.ng.emb-japan.go.jp',
    last_verified:'2026-04-18',
    steps:[
      {title:'Wait for Embassy announcement (April–May)',detail:'The Japanese Embassy Nigeria announces the MEXT cycle each April/May. Sign up to their mailing list.'},
      {title:'Submit application to Embassy in Abuja',detail:'Physical submission usually required. Print and send certified copies.'},
      {title:'Written exams (June/July)',detail:'English + Japanese (basic) + subject exam at the Embassy. Past papers available on MEXT website.'},
      {title:'Interview (August)',detail:'Held at the Embassy. Be ready to discuss your research plan in detail.'},
      {title:'Indicate 3 preferred Japanese universities',detail:'MEXT matches you based on availability and fit.'},
      {title:'Final decision January; departure April or October',detail:'Successful candidates receive final placement in early January.'}
    ],
    application_schema:{
      documents_required:[
        {name:'Completed MEXT application form',note:'Download from the Japanese Embassy Nigeria website',tier:'required'},
        {name:'Field of study and research plan',note:'Most critical document — 2-3 pages, specific and detailed',tier:'required'},
        {name:'Bachelor\'s (and Master\'s if applicable) transcripts',note:'All years, stamped by your university',tier:'required'},
        {name:'Degree certificate(s)',note:'Certified copies',tier:'required'},
        {name:'Two recommendation letters',note:'One from a professor, one from an employer',tier:'required'},
        {name:'Certificate of health',note:'Specific MEXT medical form filled by a licensed doctor',tier:'required'},
        {name:'Recent passport-size photographs',note:'6 photos, specific dimensions (check current form)',tier:'required'},
        {name:'Abstract of thesis (if you have one)',note:'For Master\'s and research students',tier:'recommended'}
      ],
      essays:[
        {id:'research_plan',title:'Field of Study & Research Plan',word_limit:1000,prompt:'Research topic, background, objectives, methodology, expected contribution. Be specific — this is the document that decides most acceptances.'}
      ]
    }
  },
  {
    id:'commonwealth-2027', slug:'commonwealth', name:'Commonwealth Scholarship',
    provider:'Commonwealth Scholarship Commission', country:'United Kingdom', flag:'🇬🇧',
    funding_type:'fully_funded', degree_level:"Master's / PhD", duration:'1–3 years',
    benefits:{tuition:true,stipend:true,travel:true,health:false,visa:false},
    stipend_text:'~£1,347/month (London rate higher)',
    eligibility:[
      'Nigerian citizenship; resident in Nigeria',
      '2:1 undergraduate minimum',
      'Unable to fund UK study without scholarship (means-tested)',
      'Return to Nigeria post-study'
    ],
    deadline:'2026-10-15',
    application_url:'https://cscuk.fcdo.gov.uk',
    last_verified:'2026-04-18',
    steps:[
      {title:'Register on the CSC online application system',detail:'Self-service portal at cscuk.fcdo.gov.uk. Opens early September annually.'},
      {title:'Apply to UK universities in parallel',detail:'You need admission to a UK university before Commonwealth will finalise. Apply to 2-3 UK programs separately.'},
      {title:'Complete CSC application',detail:'Personal statement focused on development impact for Nigeria. Academic references submitted directly by your referees.'},
      {title:'Nominating body (NUC) endorsement',detail:'Applications are nominated through the National Universities Commission. The CSC selection is two-stage.'},
      {title:'Shortlist interview',detail:'Held in March–April 2027, usually virtual.'},
      {title:'Final offer in June; tenure begins September/October',detail:''}
    ],
    application_schema:{
      documents_required:[
        {name:'International passport',tier:'required'},
        {name:'Undergraduate transcripts and degree certificate',note:'Original or certified English translation',tier:'required'},
        {name:'Personal statement (development focus)',note:'Strongest statements focus on what you\'ll change in Nigeria',tier:'required'},
        {name:'Details of 3 referees',note:'At least 2 academic; they submit online when invited',tier:'required'},
        {name:'UK university offer (can be conditional)',note:'Must have at least one by interview stage',tier:'required'},
        {name:'Development impact plan',note:'Specific plan for how your UK study will benefit Nigeria',tier:'required'},
        {name:'IELTS 6.5+ (if degree not in English)',tier:'conditional'}
      ],
      essays:[
        {id:'development_impact',title:'Development Impact Statement',word_limit:500,prompt:'How will your chosen Master\'s / PhD contribute to sustainable development in Nigeria? Be specific about the problem, your approach, and measurable outcomes.'},
        {id:'career',title:'Career Plan',word_limit:300,prompt:'Your career path post-scholarship. Must include a commitment to return to Nigeria.'}
      ]
    }
  },
  {
    id:'mastercard-2027', slug:'mastercard', name:'Mastercard Foundation Scholars Program',
    provider:'Mastercard Foundation', country:'Multiple (US, CA, UK, Africa)', flag:'🌍',
    funding_type:'fully_funded', degree_level:"Undergraduate / Master's", duration:'2–4 years',
    benefits:{tuition:true,stipend:true,travel:true,health:true,visa:true},
    stipend_text:'Full living costs covered',
    eligibility:[
      'Nigerian (or African) citizenship',
      'Strong academic record',
      'Demonstrated leadership and community service',
      'Financial need (means-tested)'
    ],
    deadline:'2026-12-01',
    application_url:'https://mastercardfdn.org/all/scholars',
    last_verified:'2026-04-18',
    steps:[
      {title:'Choose a partner institution',detail:'Partners include U of Toronto, UBC, Michigan State, Edinburgh, AIMS, Ashesi, Kwame Nkrumah University. Each has own process.'},
      {title:'Apply through partner\'s system',detail:'Partner institutions run their own Mastercard Foundation scholar tracks. Deadlines differ by institution.'},
      {title:'Submit academic application',detail:'Standard university application — transcripts + recommendations.'},
      {title:'Mastercard Scholar supplement',detail:'Separate essays on leadership, community service, giving-back commitment.'},
      {title:'Interview',detail:'Usually virtual, conducted by the partner institution\'s committee.'},
      {title:'Pre-arrival orientation',detail:'Selected scholars join extensive pre-arrival training and ongoing mentorship.'}
    ],
    application_schema:{
      documents_required:[
        {name:'International passport',tier:'required'},
        {name:'Secondary school results (WAEC/NECO)',note:'For undergraduate applicants',tier:'conditional'},
        {name:'Undergraduate transcripts',note:'For Master\'s applicants',tier:'conditional'},
        {name:'Partner institution application',note:'Varies — U of Toronto uses their standard UG/grad application, Ashesi uses theirs, etc.',tier:'required'},
        {name:'Two recommendation letters',note:'Usually one academic, one from a community leader / employer',tier:'required'},
        {name:'Financial need documentation',note:'Parents\' income statement or affidavit',tier:'required'},
        {name:'Leadership/community service portfolio',note:'Evidence of volunteer, activism, or student-leader work',tier:'required'}
      ],
      essays:[
        {id:'leadership',title:'Leadership & Impact',word_limit:500,prompt:'Describe a specific time you led change in your community. What was the outcome? What did you learn?'},
        {id:'giveback',title:'Give-Back Commitment',word_limit:500,prompt:'How will you use your degree to transform African (particularly Nigerian) communities? This is non-negotiable for Mastercard Scholars.'}
      ]
    }
  },
  {
    id:'erasmus-mundus-2027', slug:'erasmus-mundus', name:'Erasmus Mundus Joint Masters',
    provider:'European Commission', country:'European Union', flag:'🇪🇺',
    funding_type:'fully_funded', degree_level:"Master's", duration:'1–2 years',
    benefits:{tuition:true,stipend:true,travel:true,health:true,visa:false},
    stipend_text:'€1,400/month + travel',
    eligibility:[
      'Open to all nationalities (Nigerians very welcome)',
      'Completed undergraduate degree',
      'English proficiency (program-specific requirements)',
      'Each EMJMD has additional specific requirements'
    ],
    deadline:'2027-01-15',
    application_url:'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue',
    last_verified:'2026-04-18',
    steps:[
      {title:'Browse the EMJMD catalogue',detail:'150+ joint Master\'s programs across fields. Filter by your field and countries you\'d like to study in.'},
      {title:'Apply to the program directly',detail:'Each program consortium has its own application system. Deadlines vary (Oct–Feb most common).'},
      {title:'Submit documents + motivation letter',detail:'Transcripts, CV, motivation letter, language proof, recommendations.'},
      {title:'Program-specific assessments',detail:'Some require interviews, written tests, or portfolios. Check the specific EMJMD page.'},
      {title:'Admission + scholarship together',detail:'Scholarship is awarded with admission in March–May. You can\'t apply for the scholarship separately.'},
      {title:'Mobility across 2+ EU countries',detail:'You\'ll study in at least 2 different countries during the program.'}
    ],
    application_schema:{
      documents_required:[
        {name:'International passport',tier:'required'},
        {name:'Undergraduate transcripts',note:'Certified English translation if not originally in English',tier:'required'},
        {name:'Degree certificate',tier:'required'},
        {name:'Europass CV',tier:'required'},
        {name:'Motivation letter',note:'Program-specific; check the EMJMD\'s requirements',tier:'required'},
        {name:'Two recommendation letters',note:'Usually academic',tier:'required'},
        {name:'IELTS 6.5+ or equivalent',note:'Some programs accept TOEFL or Cambridge tests',tier:'required'},
        {name:'GRE scores',note:'Only some programs require (check specifically)',tier:'conditional'}
      ],
      essays:[
        {id:'motivation',title:'Motivation Letter',word_limit:700,prompt:'Why this program, why these countries, why now? Tie to your academic background and future goals.'}
      ]
    }
  },
  {
    id:'alberta-grad-2027', slug:'alberta-grad', name:'University of Alberta Graduate Award',
    provider:'University of Alberta', country:'Canada', flag:'🇨🇦',
    funding_type:'partially_funded', degree_level:"Master's / PhD", duration:'Varies',
    benefits:{tuition:true,stipend:false,travel:false,health:false,visa:false},
    stipend_text:'Tuition + partial living allowance',
    eligibility:[
      'Admitted to a U of Alberta graduate program',
      'Minimum GPA 3.5 / 4.0',
      'International students eligible'
    ],
    deadline:'2026-12-15',
    application_url:'https://www.ualberta.ca/graduate-studies',
    last_verified:'2026-04-18',
    steps:[
      {title:'Apply to a U of A graduate program',detail:'Award is linked to admission — apply to the program first.'},
      {title:'Meet department nomination criteria',detail:'Most awards are departmentally nominated — no separate scholarship application.'},
      {title:'Top-up applications',detail:'Additional awards (Alberta Graduate Excellence Scholarship, etc.) require separate application.'},
      {title:'Combined offer of admission + funding',detail:''}
    ],
    application_schema:{
      documents_required:[
        {name:'International passport',tier:'required'},
        {name:'Undergraduate transcripts (and Master\'s if applicable)',tier:'required'},
        {name:'Statement of purpose',note:'Tailored to the specific program and supervisor',tier:'required'},
        {name:'Three recommendation letters',note:'Academic preferred',tier:'required'},
        {name:'IELTS 6.5+ or TOEFL 88+',tier:'required'},
        {name:'GRE (for some programs)',tier:'conditional'},
        {name:'Research proposal',note:'PhD applicants',tier:'conditional'}
      ],
      essays:[
        {id:'sop',title:'Statement of Purpose',word_limit:1000,prompt:'Your academic background, research interests, why U of A, specific faculty you want to work with, and career goals.'}
      ]
    }
  },
  {
    id:'clarendon-2027', slug:'clarendon', name:'Clarendon Scholarship',
    provider:'University of Oxford', country:'United Kingdom', flag:'🇬🇧',
    funding_type:'fully_funded', degree_level:"Master's / PhD", duration:'1–4 years',
    benefits:{tuition:true,stipend:true,travel:false,health:false,visa:false},
    stipend_text:'£18,622/year grant',
    eligibility:[
      'Admission to an Oxford graduate program',
      'Outstanding academic merit (top 2-3% of applicants)',
      'No separate application — automatic for all eligible Oxford applicants'
    ],
    deadline:'2027-01-10',
    application_url:'https://www.ox.ac.uk/clarendon',
    last_verified:'2026-04-18',
    steps:[
      {title:'Apply to an Oxford graduate program',detail:'All Oxford graduate applicants who apply by the January deadline are automatically considered.'},
      {title:'Meet the January deadline',detail:'Usually the 2nd week of January. Not all courses have this date — check your specific course.'},
      {title:'Academic excellence is decisive',detail:'Clarendon awards based on academic record and the strength of your Oxford application.'},
      {title:'Outcome comes with admission decision',detail:''}
    ],
    application_schema:{
      documents_required:[
        {name:'International passport',tier:'required'},
        {name:'Undergraduate transcripts',tier:'required'},
        {name:'Personal statement',note:'Part of Oxford graduate application',tier:'required'},
        {name:'Research proposal',note:'For research degrees only',tier:'conditional'},
        {name:'Three recommendation letters',tier:'required'},
        {name:'Writing sample',note:'Humanities and social sciences usually require',tier:'conditional'},
        {name:'IELTS 7.0+ / TOEFL 100+',note:'Higher than most UK universities',tier:'required'},
        {name:'CV',tier:'required'}
      ],
      essays:[
        {id:'sop',title:'Personal Statement (Oxford application)',word_limit:1000,prompt:'Academic interests, preparation, why Oxford for this course, future plans. Must be original and show clear fit with specific faculty at Oxford.'}
      ]
    }
  }
];

// ============================================================
// JOBS — with rich application_schema
// ============================================================
const JOBS = [
  {
    id:'stripe-be-eng', title:'Senior Backend Engineer', company:'Stripe', logo:'S', logo_color:'#635bff',
    salary:'$140k – $180k', employment:'Full-time', experience:'Senior', timezone:'Americas / EMEA overlap',
    skills:['Go','Ruby','PostgreSQL','Distributed Systems'], posted:'2 days ago',
    description:'Build and scale the payments infrastructure used by millions of businesses globally. Work across languages and systems with a team that ships production code every day.',
    application_url:'https://stripe.com/jobs/search?query=backend',
    employment_model:'Full-time employee (EOR arrangement for Nigeria — Deel or similar)',
    interview_stages:[
      'Recruiter screen (30 min)','Technical phone screen (60 min, coding)','System design interview (60 min)','Take-home or pair programming','Onsite: 4-5 rounds including culture fit'
    ]
  },
  {
    id:'gitlab-dx', title:'Product Designer, Developer Experience', company:'GitLab', logo:'G', logo_color:'#fc6d26',
    salary:'$95k – $135k', employment:'Full-time', experience:'Mid-Senior', timezone:'Any',
    skills:['Figma','Design Systems','User Research'], posted:'4 days ago',
    description:'Shape the developer tools experience for over 30 million users. All-remote company — our handbook is the single source of truth.',
    application_url:'https://about.gitlab.com/jobs/',
    employment_model:'Full-time employee via GitLab\'s global hiring (contractor status in Nigeria)',
    interview_stages:[
      'Recruiter screen','Hiring Manager screen','Portfolio review','Practical design exercise','Peer interviews'
    ]
  },
  {
    id:'andela-cs', title:'Customer Success Manager — Africa', company:'Andela', logo:'A', logo_color:'#16a34a',
    salary:'$55k – $75k', employment:'Full-time', experience:'Mid', timezone:'Africa / Europe',
    skills:['Account Management','SaaS','Communication'], posted:'1 day ago',
    description:'Drive success for enterprise clients across Africa. Lagos- or Abuja-based preferred, but fully remote.',
    application_url:'https://andela.com/careers/',
    employment_model:'Full-time employee in Nigeria (Andela has Nigerian entity)',
    interview_stages:[
      'Recruiter call','Hiring manager interview','Case study','Team interview','Reference check'
    ]
  },
  {
    id:'buffer-content', title:'Content Marketing Manager', company:'Buffer', logo:'B', logo_color:'#2c4bff',
    salary:'$70k – $90k', employment:'Full-time', experience:'Mid', timezone:'Any',
    skills:['SEO','Content Strategy','Writing'], posted:'1 week ago',
    description:'Fully distributed team building social media tools. Four-day work week.',
    application_url:'https://buffer.com/journey',
    employment_model:'Full-time employee via Remote.com EOR',
    interview_stages:[
      'Application review','Writing exercise','Hiring manager interview','Team interviews','Values interview'
    ]
  },
  {
    id:'deel-data', title:'Senior Data Analyst', company:'Deel', logo:'D', logo_color:'#0d0d0d',
    salary:'$85k – $115k', employment:'Full-time', experience:'Senior', timezone:'Any',
    skills:['SQL','Python','dbt','Looker'], posted:'3 days ago',
    description:'Global payroll platform hiring across 100+ countries. Nigeria-friendly contractor arrangements.',
    application_url:'https://www.deel.com/careers',
    employment_model:'Full-time employee via Deel\'s own EOR (they pioneered this space)',
    interview_stages:[
      'Recruiter screen','Technical assessment (SQL + case study)','Hiring manager','Cross-functional interviews'
    ]
  },
  {
    id:'zapier-devops', title:'DevOps Engineer', company:'Zapier', logo:'Z', logo_color:'#ff4a00',
    salary:'$120k – $160k', employment:'Full-time', experience:'Senior', timezone:'EMEA / Americas',
    skills:['AWS','Kubernetes','Terraform','CI/CD'], posted:'5 days ago',
    description:'All-remote since 2011. Building automation infrastructure for millions of users.',
    application_url:'https://zapier.com/jobs',
    employment_model:'Full-time employee via Zapier\'s global hiring infrastructure',
    interview_stages:[
      'Application + video intro','Technical screen','Architecture interview','Values interview','Team fit'
    ]
  }
];

// ============================================================
// STATE + UTILITIES
// ============================================================
const state = {view:'home', selectedScholarship:null, selectedJob:null, filter:'all', search:'', jobSearch:'', modalStep:0, modalData:{}, modalKind:null};
const TODAY = new Date('2026-04-18');
const daysUntil = d => Math.ceil((new Date(d) - TODAY) / 86400000);
const fmtDate = d => new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
const esc = s => String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function toast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'), 2500);
}

// ============================================================
// ICONS
// ============================================================
const icon = (name, size=16) => {
  const map = {
    arrow:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    arrowOut:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`,
    search:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    clock:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    grad:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    check:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
    x:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    shield:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
    back:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    ext:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
    alert:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`,
    award:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>`,
    sparkle:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>`,
    wand:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8 19 13"/><path d="M15 9h0"/><path d="M17.8 6.2 19 5"/><path d="m3 21 9-9"/><path d="M12.2 6.2 11 5"/></svg>`,
    download:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    copy:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`
  };
  return map[name] || '';
};

// ============================================================
// HEADER / NAV
// ============================================================
function renderHeader(){
  const items = [
    {id:'home',label:'Home'},
    {id:'jobs',label:'Remote Jobs'},
    {id:'scholarships',label:'Scholarships'},
    {id:'about',label:'About'}
  ];
  const isDetail = state.view === 'scholarship-detail' || state.view === 'job-detail';
  const activeView = isDetail ? (state.view === 'scholarship-detail' ? 'scholarships' : 'jobs') : state.view;
  document.getElementById('nav-links').innerHTML = items.map(i =>
    `<button class="nav-link ${activeView===i.id?'active':''}" onclick="goto('${i.id}')">${i.label}</button>`
  ).join('');
  document.getElementById('mobile-menu').innerHTML = items.map(i =>
    `<button class="${activeView===i.id?'active':''}" onclick="goto('${i.id}');toggleMenu(true)">${i.label}</button>`
  ).join('') + `<button class="btn-primary" style="margin-top:.5rem" onclick="goto('scholarships');toggleMenu(true)">Start applying</button>`;
}

function toggleMenu(close){
  const menu = document.getElementById('mobile-menu');
  const iconEl = document.getElementById('menu-icon');
  if (close === true){
    menu.classList.remove('open');
    iconEl.innerHTML = `<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>`;
    return;
  }
  menu.classList.toggle('open');
  iconEl.innerHTML = menu.classList.contains('open')
    ? `<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`
    : `<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>`;
}

// ============================================================
// COMMON RENDERERS
// ============================================================
function fundingBadge(type){
  return type === 'fully_funded'
    ? `<span class="badge badge-full">${icon('award',12)} Fully Funded</span>`
    : `<span class="badge badge-partial">${icon('sparkle',12)} Partially Funded</span>`;
}

function deadlineTag(date){
  const d = daysUntil(date);
  const cls = d < 30 ? 'urgent' : d < 90 ? 'warning' : 'safe';
  return `<div class="deadline ${cls}">${icon('clock',14)}<span>${d > 0 ? d + ' DAYS LEFT' : 'CLOSED'}</span><span class="deadline-sep">· ${fmtDate(date)}</span></div>`;
}

function scholarshipCard(s){
  return `<button class="card" onclick="openScholarship('${s.id}')">
    <div class="card-head">
      <div class="country-tag"><span class="flag">${s.flag}</span><span class="country-code">${esc(s.country)}</span></div>
      ${fundingBadge(s.funding_type)}
    </div>
    <div class="card-body">
      <h3 class="card-title">${esc(s.name)}</h3>
      <p class="card-sub">${esc(s.provider)}</p>
      <div class="info-row">
        <div class="info-item">${icon('grad',14)} ${esc(s.degree_level)}</div>
        <div class="info-item">${icon('clock',14)} ${esc(s.duration)}</div>
      </div>
      <div class="card-deadline">${deadlineTag(s.deadline)}</div>
    </div>
    <div class="card-foot">
      <span class="verified">${icon('shield',12)} Verified ${s.last_verified}</span>
      <span class="arrow-out">${icon('arrowOut',16)}</span>
    </div>
  </button>`;
}

function jobRow(j){
  return `<button class="job-row" onclick="openJob('${j.id}')">
    <div class="job-main">
      <div class="job-logo" style="background:${j.logo_color}">${j.logo}</div>
      <div style="min-width:0">
        <div class="job-title">${esc(j.title)}</div>
        <div class="job-sub">${esc(j.company)} · ${esc(j.posted)}</div>
      </div>
    </div>
    <div class="chip-group">${j.skills.slice(0,3).map(s=>`<span class="chip">${esc(s)}</span>`).join('')}</div>
    <div class="job-salary">${esc(j.salary)}</div>
    <div class="job-meta"><span class="ng-ok">${icon('check',12)} NG OK</span><span class="arrow-out">${icon('arrowOut',16)}</span></div>
  </button>`;
}

// ============================================================
// PAGES
// ============================================================
function renderHome(){
  const featured = SCHOLARSHIPS.slice(0,3);
  const featuredJobs = JOBS.slice(0,4);
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="fade-up">
          <div class="pill"><span class="pill-dot"></span>Live · ${SCHOLARSHIPS.length} scholarships · ${JOBS.length} jobs</div>
          <h1 class="hero-title">Global opportunity,<em>curated for Nigerians.</em></h1>
          <p class="hero-sub">Remote jobs that actually hire from Nigeria. Scholarships that fully fund your degree abroad. And <strong>tools to draft your CV, essays, and cover letters</strong> tailored to each opportunity.</p>
          <div class="btn-group">
            <button class="btn btn-dark" onclick="goto('scholarships')">Explore scholarships ${icon('arrow',16)}</button>
            <button class="btn btn-outline" onclick="goto('jobs')">Browse remote jobs ${icon('arrowOut',16)}</button>
          </div>
        </div>
        <div class="stats-panel fade-up" style="animation-delay:.15s">
          <div class="stats-label">— What's new</div>
          <div class="stat"><div class="stat-row"><span class="stat-key">Scholarships</span><span class="stat-value">${SCHOLARSHIPS.length}</span></div><div class="stat-sub">${SCHOLARSHIPS.filter(s=>s.funding_type==='fully_funded').length} fully funded</div></div>
          <div class="stat"><div class="stat-row"><span class="stat-key">Remote jobs</span><span class="stat-value">${JOBS.length}</span></div><div class="stat-sub">All verified Nigeria-eligible</div></div>
          <div class="stat"><div class="stat-row"><span class="stat-key">Action Hub</span><span class="stat-value">Live</span></div><div class="stat-sub">Draft CV / essays / cover letters</div></div>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="container">
        <div class="section-header">
          <div><div class="eyebrow">01 — Scholarships</div><h2>Featured this week</h2></div>
          <button class="view-all" onclick="goto('scholarships')">All scholarships ${icon('arrow',14)}</button>
        </div>
        <div class="grid-3">${featured.map(scholarshipCard).join('')}</div>
      </div>
    </section>
    <section class="content section-white">
      <div class="container">
        <div class="section-header">
          <div><div class="eyebrow">02 — Remote Jobs</div><h2>Hiring from Nigeria, <em>right now</em></h2></div>
          <button class="view-all" onclick="goto('jobs')">All jobs ${icon('arrow',14)}</button>
        </div>
        <div class="jobs-list">${featuredJobs.map(jobRow).join('')}</div>
      </div>
    </section>
    <section class="section-dark">
      <div class="container">
        <div class="eyebrow">03 — How it works</div>
        <h2 style="max-width:56rem;margin-top:1.5rem">Three steps. <em>No fluff.</em></h2>
        <div class="how-grid">
          <div><div class="how-num">01</div><h3 class="how-title">Browse with Nigerian filters</h3><p class="how-desc">Every listing is checked for Nigeria eligibility. Scholarships tagged fully or partially funded.</p></div>
          <div><div class="how-num">02</div><h3 class="how-title">Open the Action Hub</h3><p class="how-desc">Answer a short intake. We generate a tailored CV, essay drafts, and cover letter using your real background.</p></div>
          <div><div class="how-num">03</div><h3 class="how-title">Apply on the official site</h3><p class="how-desc">Use our checklist and step-by-step guide to submit with confidence.</p></div>
        </div>
      </div>
    </section>`;
}

function renderScholarships(){
  const filtered = SCHOLARSHIPS.filter(s => {
    if (state.filter !== 'all' && s.funding_type !== state.filter) return false;
    const q = state.search.toLowerCase();
    if (q && !s.name.toLowerCase().includes(q) && !s.country.toLowerCase().includes(q) && !s.provider.toLowerCase().includes(q)) return false;
    return true;
  });
  const counts = {
    all: SCHOLARSHIPS.length,
    fully_funded: SCHOLARSHIPS.filter(s=>s.funding_type==='fully_funded').length,
    partially_funded: SCHOLARSHIPS.filter(s=>s.funding_type==='partially_funded').length
  };
  const tabs = [{id:'all',label:'All'},{id:'fully_funded',label:'Fully Funded'},{id:'partially_funded',label:'Partially Funded'}];
  return `
    <section class="page-head">
      <div class="container">
        <div class="eyebrow">— Scholarships index</div>
        <h1 class="page-title">Every funded scholarship <em>open to Nigerians.</em></h1>
        <div class="search-box">${icon('search',16)}<input type="text" placeholder="Search by name, country, or provider..." value="${esc(state.search)}" oninput="updateSearch(this.value)" /></div>
        <div class="filter-tabs">${tabs.map(t=>`<button class="tab ${state.filter===t.id?'active':''}" onclick="setFilter('${t.id}')">${t.label}<span class="tab-count">${counts[t.id]}</span></button>`).join('')}</div>
      </div>
    </section>
    <section class="listing">
      <div class="container">
        <div class="listing-meta">Showing <strong>${filtered.length}</strong> scholarship${filtered.length!==1?'s':''}</div>
        ${filtered.length===0 ? `<div style="padding:5rem 0;text-align:center;color:var(--ink-soft)">No scholarships match your search.</div>` : `<div class="grid-3">${filtered.map(scholarshipCard).join('')}</div>`}
      </div>
    </section>`;
}

function renderJobs(){
  const filtered = JOBS.filter(j => {
    const q = state.jobSearch.toLowerCase();
    if (q && !j.title.toLowerCase().includes(q) && !j.company.toLowerCase().includes(q)) return false;
    return true;
  });
  return `
    <section class="page-head">
      <div class="container">
        <div class="eyebrow">— Remote jobs</div>
        <h1 class="page-title">Remote work that <em>actually hires</em> from Nigeria.</h1>
        <div class="search-box">${icon('search',16)}<input type="text" placeholder="Search by title or company..." value="${esc(state.jobSearch)}" oninput="updateJobSearch(this.value)" /></div>
      </div>
    </section>
    <section class="listing">
      <div class="container">
        <div class="listing-meta">Showing <strong>${filtered.length}</strong> job${filtered.length!==1?'s':''}</div>
        <div class="jobs-list">${filtered.map(jobRow).join('')}</div>
      </div>
    </section>`;
}

function renderAbout(){
  return `<main><div class="about">
    <div class="eyebrow">— About</div>
    <h1 class="page-title" style="margin-bottom:2rem">Built for the <em>ambitious.</em></h1>
    <p>ASCEND is a curated index of global scholarships and verified remote jobs, specifically filtered for Nigerian applicants.</p>
    <p class="soft">Every listing is verified for Nigeria eligibility. Every scholarship has a step-by-step application guide and — through our Action Hub — we generate tailored CV drafts, essay starters, and cover letters based on your real background. You still do the thinking; we give you a solid first draft to work from.</p>
    <p class="soft">About the Action Hub: we generate content locally in your browser — your information never leaves your device. The drafts are <strong>starting points</strong>, not finished products. Edit, personalise, and rewrite to reflect your real voice before submitting anything.</p>
    <p class="soft">Data refreshes: jobs every 6 hours, scholarships every 24 hours. Listings flagged as broken by users are re-verified weekly.</p>
  </div></main>`;
}


// ============================================================
// SCHOLARSHIP DETAIL — with Action Hub
// ============================================================
function renderScholarshipDetail(){
  const s = state.selectedScholarship;
  if (!s) return '';
  const benefits = [
    {key:'tuition',label:'Tuition'},
    {key:'stipend',label:'Living stipend'},
    {key:'travel',label:'Travel allowance'},
    {key:'health',label:'Health insurance'},
    {key:'visa',label:'Visa fees'}
  ];
  const urgentCls = daysUntil(s.deadline) < 60 ? 'urgent' : '';
  return `<main><div class="detail">
    <button class="back-link" onclick="goto('scholarships')">${icon('back',14)} All scholarships</button>
    <div class="detail-meta">
      <span class="flag" style="font-size:2rem">${s.flag}</span>
      <span class="country-code" style="font-size:.75rem;letter-spacing:.15em">${esc(s.country)}</span>
      ${fundingBadge(s.funding_type)}
    </div>
    <h1 class="detail-title">${esc(s.name)}</h1>
    <p class="detail-provider">Offered by ${esc(s.provider)}</p>

    <div class="info-grid">
      <div class="info-cell"><div class="info-cell-label">Degree</div><div class="info-cell-value">${esc(s.degree_level)}</div></div>
      <div class="info-cell"><div class="info-cell-label">Duration</div><div class="info-cell-value">${esc(s.duration)}</div></div>
      <div class="info-cell"><div class="info-cell-label">Stipend</div><div class="info-cell-value">${esc(s.stipend_text)}</div></div>
      <div class="info-cell"><div class="info-cell-label">Deadline</div><div class="info-cell-value ${urgentCls}">${fmtDate(s.deadline)}</div></div>
    </div>

    <!-- ACTION HUB -->
    <div class="action-hub">
      <div class="action-hub-head">
        <div class="action-hub-icon">${icon('wand',24)}</div>
        <div>
          <h2 class="action-hub-title">Get started with the Action Hub</h2>
          <p class="action-hub-sub">Personalised draft of everything you need to apply for <em>${esc(s.name)}</em> — built from your answers to a short intake.</p>
        </div>
      </div>
      <div class="action-hub-bullets">
        <div class="action-bullet">${icon('check',16)}<span><strong>Tailored CV</strong> formatted for this scholarship's requirements</span></div>
        <div class="action-bullet">${icon('check',16)}<span><strong>Essay drafts</strong> for each required prompt — starting points you refine</span></div>
        <div class="action-bullet">${icon('check',16)}<span><strong>Document checklist</strong> specific to this program</span></div>
        <div class="action-bullet">${icon('check',16)}<span><strong>Step-by-step filing guide</strong> with Nigeria-specific notes</span></div>
      </div>
      <button class="action-btn" onclick="openActionHub('scholarship','${s.id}')">${icon('wand',16)} Start the intake (3 minutes)</button>
    </div>

    <h2 class="sub">What's covered</h2>
    <div class="benefits-grid">${benefits.map(b => {
      const covered = s.benefits[b.key];
      return `<div class="benefit ${covered?'':'inactive'}">${covered?icon('check',18):icon('x',18)}<span style="color:${covered?'var(--ink)':'var(--ink-faded)'};font-weight:${covered?500:400}">${b.label}</span></div>`;
    }).join('')}</div>

    <h2 class="sub">Eligibility</h2>
    <ul class="eligibility">${s.eligibility.map(e=>`<li class="elig-item">${icon('check',18)}<span>${esc(e)}</span></li>`).join('')}</ul>

    <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:2rem;gap:1rem;flex-wrap:wrap">
      <h2 class="sub" style="margin-bottom:0">Step-by-step application guide</h2>
      <span class="step-count">${s.steps.length} steps</span>
    </div>
    <ol class="steps">${s.steps.map((st,i)=>`<li class="step"><div class="step-num">${String(i+1).padStart(2,'0')}</div><h3 class="step-title">${esc(st.title)}</h3><p class="step-detail">${esc(st.detail)}</p></li>`).join('')}</ol>

    <div class="cta-box">
      <div>
        <h3 class="cta-title">Ready to apply?</h3>
        <p class="cta-sub">Applications submit on the official program website.</p>
      </div>
      <a href="${s.application_url}" target="_blank" rel="noopener" class="btn btn-terra">Apply on official site ${icon('ext',14)}</a>
    </div>

    <div class="detail-foot">
      <span class="verified">${icon('shield',12)} Verified ${s.last_verified}</span>
      <button class="report-btn">${icon('alert',12)} Report an issue</button>
    </div>
  </div></main>`;
}

// ============================================================
// JOB DETAIL — with Action Hub
// ============================================================
function renderJobDetail(){
  const j = state.selectedJob;
  if (!j) return '';
  return `<main><div class="detail detail-job">
    <button class="back-link" onclick="goto('jobs')">${icon('back',14)} All jobs</button>
    <div class="job-head">
      <div class="job-logo" style="background:${j.logo_color}">${j.logo}</div>
      <div>
        <h1 class="detail-job-title">${esc(j.title)}</h1>
        <p class="detail-provider" style="margin-bottom:0">${esc(j.company)}</p>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-cell"><div class="info-cell-label">Salary</div><div class="info-cell-value">${esc(j.salary)}</div></div>
      <div class="info-cell"><div class="info-cell-label">Type</div><div class="info-cell-value">${esc(j.employment)}</div></div>
      <div class="info-cell"><div class="info-cell-label">Level</div><div class="info-cell-value">${esc(j.experience)}</div></div>
      <div class="info-cell"><div class="info-cell-label">Timezone</div><div class="info-cell-value">${esc(j.timezone)}</div></div>
    </div>

    <div class="ng-banner">${icon('shield',20)}<div><div class="ng-banner-title">Nigeria-eligible · Verified</div><div class="ng-banner-sub">${esc(j.employment_model)}</div></div></div>

    <!-- ACTION HUB -->
    <div class="action-hub">
      <div class="action-hub-head">
        <div class="action-hub-icon">${icon('wand',24)}</div>
        <div>
          <h2 class="action-hub-title">Apply with confidence</h2>
          <p class="action-hub-sub">Tailored CV + cover letter for <em>${esc(j.company)}</em> — plus a prep guide for each interview stage.</p>
        </div>
      </div>
      <div class="action-hub-bullets">
        <div class="action-bullet">${icon('check',16)}<span><strong>CV optimised</strong> for this role's skills and seniority</span></div>
        <div class="action-bullet">${icon('check',16)}<span><strong>Cover letter draft</strong> that addresses ${esc(j.company)} specifically</span></div>
        <div class="action-bullet">${icon('check',16)}<span><strong>Interview prep</strong> for each stage in this company's process</span></div>
        <div class="action-bullet">${icon('check',16)}<span><strong>Nigeria payment + 2026 tax guide</strong> for remote workers</span></div>
      </div>
      <button class="action-btn" onclick="openActionHub('job','${j.id}')">${icon('wand',16)} Start the intake (3 minutes)</button>
    </div>

    <h2 class="sub">About the role</h2>
    <p style="line-height:1.7;margin-bottom:2.5rem">${esc(j.description)}</p>

    <h2 class="sub">Key skills</h2>
    <div class="skill-list">${j.skills.map(s=>`<span class="skill">${esc(s)}</span>`).join('')}</div>

    <h2 class="sub">Interview process</h2>
    <ol class="steps">${j.interview_stages.map((stage,i)=>`<li class="step"><div class="step-num">${String(i+1).padStart(2,'0')}</div><h3 class="step-title">${esc(stage)}</h3></li>`).join('')}</ol>

    <div class="cta-box">
      <div>
        <h3 class="cta-title">Ready to apply?</h3>
        <p class="cta-sub">Application goes to ${esc(j.company)}'s careers page.</p>
      </div>
      <a href="${j.application_url}" target="_blank" rel="noopener" class="btn btn-terra">Apply now ${icon('ext',14)}</a>
    </div>
  </div></main>`;
}


// ============================================================
// ACTION HUB — the core value-add
// Intake form -> generates CV, essays/cover letter, checklist, guide
// ============================================================

function openActionHub(kind, id){
  state.modalKind = kind;
  state.modalStep = 1;
  state.modalData = {
    kind, id,
    opportunity: kind === 'scholarship' ? SCHOLARSHIPS.find(s=>s.id===id) : JOBS.find(j=>j.id===id),
    fullName:'', email:'', phone:'', city:'Lagos',
    degree:'', institution:'', graduationYear:'', gpa:'',
    currentRole:'', currentCompany:'', yearsExperience:'',
    keyAchievements:'',
    careerGoal:'',
    leadershipExample:'',
    whyThisOpportunity:'',
    skills:'',
    portfolioLinks:''
  };
  document.getElementById('action-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderModal();
}

function closeModal(){
  document.getElementById('action-modal').classList.remove('open');
  document.body.style.overflow = '';
  state.modalStep = 0;
}

function renderModal(){
  const d = state.modalData;
  const totalSteps = 4; // 3 intake + 1 results
  const progress = Array.from({length:totalSteps},(_,i)=>{
    const cls = i+1 < state.modalStep ? 'done' : i+1 === state.modalStep ? 'active' : '';
    return `<div class="step-dot ${cls}"></div>`;
  }).join('');

  const opp = d.opportunity;
  const title = opp.name || opp.title;
  const org = opp.provider || opp.company;
  document.getElementById('modal-kicker').textContent = `— ${d.kind === 'scholarship' ? 'Scholarship' : 'Job'} Helper`;
  document.getElementById('modal-title').textContent = `${title} — ${org}`;

  let body = `<div class="step-progress">${progress}</div>`;

  if (state.modalStep === 1){
    body += renderIntakeStep1();
  } else if (state.modalStep === 2){
    body += renderIntakeStep2();
  } else if (state.modalStep === 3){
    body += renderIntakeStep3();
  } else if (state.modalStep === 4){
    body += renderResults();
  }

  document.getElementById('modal-body').innerHTML = body;

  // Scroll modal to top when step changes
  document.querySelector('.modal').scrollIntoView({behavior:'instant',block:'start'});
}

// --- INTAKE STEP 1: Basics + Education ---
function renderIntakeStep1(){
  const d = state.modalData;
  return `
    <div class="step-meta">Step 1 of 3 · Your basics</div>
    <h2 class="step-heading">Tell us who you are</h2>
    <p class="step-intro">All generated locally in your browser — nothing is stored or sent anywhere. Use your real details.</p>

    <div class="form-field">
      <label class="form-label">Full name <span class="required">*</span></label>
      <input class="form-input" type="text" placeholder="e.g. Adaeze Obioma Nwosu" value="${esc(d.fullName)}" oninput="updateField('fullName',this.value)" />
    </div>
    <div class="form-field">
      <label class="form-label">Email <span class="required">*</span></label>
      <input class="form-input" type="email" placeholder="you@example.com" value="${esc(d.email)}" oninput="updateField('email',this.value)" />
    </div>
    <div class="form-field">
      <label class="form-label">Phone (with country code)</label>
      <div class="form-help">Include +234 for Nigeria</div>
      <input class="form-input" type="tel" placeholder="+234 803 123 4567" value="${esc(d.phone)}" oninput="updateField('phone',this.value)" />
    </div>
    <div class="form-field">
      <label class="form-label">City, Nigeria <span class="required">*</span></label>
      <input class="form-input" type="text" placeholder="Lagos" value="${esc(d.city)}" oninput="updateField('city',this.value)" />
    </div>
    <div class="form-field">
      <label class="form-label">Highest degree earned <span class="required">*</span></label>
      <input class="form-input" type="text" placeholder="e.g. BSc Economics" value="${esc(d.degree)}" oninput="updateField('degree',this.value)" />
    </div>
    <div class="form-field">
      <label class="form-label">University / Institution <span class="required">*</span></label>
      <input class="form-input" type="text" placeholder="e.g. University of Lagos" value="${esc(d.institution)}" oninput="updateField('institution',this.value)" />
    </div>
    <div class="form-field">
      <label class="form-label">Year graduated <span class="required">*</span></label>
      <input class="form-input" type="text" placeholder="2022" value="${esc(d.graduationYear)}" oninput="updateField('graduationYear',this.value)" />
    </div>
    <div class="form-field">
      <label class="form-label">Classification / GPA</label>
      <div class="form-help">e.g. "Second Class Upper (2:1)" or "4.2/5.0"</div>
      <input class="form-input" type="text" placeholder="Second Class Upper (2:1)" value="${esc(d.gpa)}" oninput="updateField('gpa',this.value)" />
    </div>

    <div class="form-nav">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-dark" onclick="nextStep()">Continue ${icon('arrow',14)}</button>
    </div>
  `;
}

// --- INTAKE STEP 2: Experience + Skills ---
function renderIntakeStep2(){
  const d = state.modalData;
  const opp = d.opportunity;
  const skillsHint = d.kind === 'job' ? `Especially relevant: ${opp.skills.join(', ')}` : 'Technical, leadership, language — whatever\'s most relevant';

  return `
    <div class="step-meta">Step 2 of 3 · Your experience</div>
    <h2 class="step-heading">What have you done?</h2>
    <p class="step-intro">Be specific with numbers and examples. This is where most applications lose — vague statements don't win scholarships or jobs.</p>

    <div class="form-field">
      <label class="form-label">Current (or most recent) role <span class="required">*</span></label>
      <input class="form-input" type="text" placeholder="e.g. Product Analyst" value="${esc(d.currentRole)}" oninput="updateField('currentRole',this.value)" />
    </div>
    <div class="form-field">
      <label class="form-label">Current company / organisation <span class="required">*</span></label>
      <input class="form-input" type="text" placeholder="e.g. Paystack" value="${esc(d.currentCompany)}" oninput="updateField('currentCompany',this.value)" />
    </div>
    <div class="form-field">
      <label class="form-label">Years of full-time professional experience <span class="required">*</span></label>
      <div class="form-help">For Chevening: you need 2,800+ hours (~2 years) post-undergrad. For DAAD: at least 2 years.</div>
      <input class="form-input" type="text" placeholder="3" value="${esc(d.yearsExperience)}" oninput="updateField('yearsExperience',this.value)" />
    </div>
    <div class="form-field">
      <label class="form-label">Top 3 measurable achievements <span class="required">*</span></label>
      <div class="form-help">Numbers beat adjectives. "Led a team of 5 that grew signups by 40%" is stronger than "I'm a great leader".</div>
      <textarea class="form-textarea" rows="5" placeholder="1. Grew our product's waitlist from 500 to 3,200 in 6 months by...&#10;2. Led a 5-person team to deliver...&#10;3. Cut reporting time by 60% by automating..." oninput="updateField('keyAchievements',this.value)">${esc(d.keyAchievements)}</textarea>
    </div>
    <div class="form-field">
      <label class="form-label">Key skills <span class="required">*</span></label>
      <div class="form-help">${skillsHint}</div>
      <input class="form-input" type="text" placeholder="Comma separated" value="${esc(d.skills)}" oninput="updateField('skills',this.value)" />
    </div>
    <div class="form-field">
      <label class="form-label">Portfolio / LinkedIn / GitHub links</label>
      <div class="form-help">Optional but strongly recommended for jobs</div>
      <textarea class="form-textarea" rows="2" placeholder="linkedin.com/in/yourname&#10;github.com/yourname&#10;your-portfolio.com" oninput="updateField('portfolioLinks',this.value)">${esc(d.portfolioLinks)}</textarea>
    </div>

    <div class="form-nav">
      <button class="btn btn-ghost" onclick="prevStep()">${icon('back',14)} Back</button>
      <button class="btn btn-dark" onclick="nextStep()">Continue ${icon('arrow',14)}</button>
    </div>
  `;
}

// --- INTAKE STEP 3: Goals + Context ---
function renderIntakeStep3(){
  const d = state.modalData;
  const opp = d.opportunity;
  const isScholarship = d.kind === 'scholarship';

  return `
    <div class="step-meta">Step 3 of 3 · Your story</div>
    <h2 class="step-heading">Why this opportunity?</h2>
    <p class="step-intro">These answers become your essays and cover letter. Write naturally — we'll polish structure and grammar. Your real voice matters more than fancy words.</p>

    <div class="form-field">
      <label class="form-label">${isScholarship ? 'Your career goal (5–10 years ahead)' : 'Your career goal (3–5 years ahead)'} <span class="required">*</span></label>
      <div class="form-help">Be specific about what you want to build, change, or become.</div>
      <textarea class="form-textarea" rows="3" placeholder="${isScholarship ? 'e.g. I want to lead climate adaptation policy at Nigeria\'s Federal Ministry of Environment within 8 years...' : 'e.g. I want to lead a payments infrastructure team, shipping products used by millions across Africa...'}" oninput="updateField('careerGoal',this.value)">${esc(d.careerGoal)}</textarea>
    </div>

    <div class="form-field">
      <label class="form-label">A specific time you led change <span class="required">*</span></label>
      <div class="form-help">Situation → Action → Result. Even small wins count if you describe them well.</div>
      <textarea class="form-textarea" rows="4" placeholder="e.g. When COVID hit, my team at UNILAG volunteer group had to move our tutoring program online. I proposed a WhatsApp-based structure, recruited 12 tutors, and we kept reaching 200+ SS3 students through 2020–2021..." oninput="updateField('leadershipExample',this.value)">${esc(d.leadershipExample)}</textarea>
    </div>

    <div class="form-field">
      <label class="form-label">Why ${isScholarship ? esc(opp.name) : esc(opp.company)} specifically? <span class="required">*</span></label>
      <div class="form-help">${isScholarship
        ? `What about the UK / Germany / Japan / etc., this provider, or the program structure fits your goal? Be concrete — "great education" won't cut it.`
        : `Reference something specific: their product, their culture, a recent blog post or launch, a value they hold. Generic cover letters get rejected fast.`}</div>
      <textarea class="form-textarea" rows="4" placeholder="${isScholarship ? `e.g. The UK\'s governance and policy ecosystem is where I can learn from... ${esc(opp.name)} specifically aligns with...` : `e.g. ${esc(opp.company)}'s recent launch of... their approach to...`}" oninput="updateField('whyThisOpportunity',this.value)">${esc(d.whyThisOpportunity)}</textarea>
    </div>

    <div class="form-nav">
      <button class="btn btn-ghost" onclick="prevStep()">${icon('back',14)} Back</button>
      <button class="btn btn-terra" onclick="generateDocs()">${icon('wand',14)} Generate my documents</button>
    </div>
  `;
}

function updateField(key, value){
  state.modalData[key] = value;
}

function nextStep(){
  const d = state.modalData;
  const step = state.modalStep;
  // Light validation
  if (step === 1){
    if (!d.fullName || !d.email || !d.degree || !d.institution || !d.graduationYear){
      toast('Fill in the required fields first');
      return;
    }
  } else if (step === 2){
    if (!d.currentRole || !d.currentCompany || !d.yearsExperience || !d.keyAchievements || !d.skills){
      toast('Fill in the required fields first');
      return;
    }
  }
  state.modalStep++;
  renderModal();
}

function prevStep(){
  state.modalStep--;
  renderModal();
}

function generateDocs(){
  const d = state.modalData;
  if (!d.careerGoal || !d.leadershipExample || !d.whyThisOpportunity){
    toast('Fill in all three story fields to generate your documents');
    return;
  }
  state.modalStep = 4;
  renderModal();
}


// ============================================================
// DOCUMENT GENERATOR — builds all output from intake data
// ============================================================

function renderResults(){
  const d = state.modalData;
  const isScholarship = d.kind === 'scholarship';
  const tabs = isScholarship
    ? [{id:'cv',label:'Tailored CV'},{id:'essays',label:'Essay drafts'},{id:'checklist',label:'Document checklist'},{id:'guide',label:'Filing guide'}]
    : [{id:'cv',label:'Tailored CV'},{id:'cover',label:'Cover letter'},{id:'interview',label:'Interview prep'},{id:'payment',label:'Payment & tax'}];

  return `
    <div class="step-meta">Your personalised pack · generated just now</div>
    <h2 class="step-heading">Here are your drafts.</h2>
    <p class="step-intro">These are <strong>starting points</strong> — not finished applications. Copy, personalise, rewrite, add your voice. Review every sentence before you submit.</p>

    <div class="doc-tabs">${tabs.map((t,i)=>`<button class="doc-tab ${i===0?'active':''}" onclick="switchDocTab('${t.id}',this)">${t.label}</button>`).join('')}</div>

    ${tabs.map((t,i)=>`<div class="doc-panel ${i===0?'active':''}" id="panel-${t.id}">${generateDocContent(t.id)}</div>`).join('')}

    <div class="form-nav">
      <button class="btn btn-ghost" onclick="prevStep()">${icon('back',14)} Edit my answers</button>
      <button class="btn btn-terra" onclick="closeModal()">Done ${icon('check',14)}</button>
    </div>
  `;
}

function switchDocTab(id, btn){
  document.querySelectorAll('.doc-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.doc-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-'+id).classList.add('active');
}

function generateDocContent(tabId){
  if (tabId === 'cv') return renderCV();
  if (tabId === 'essays') return renderEssays();
  if (tabId === 'checklist') return renderChecklist();
  if (tabId === 'guide') return renderGuide();
  if (tabId === 'cover') return renderCoverLetter();
  if (tabId === 'interview') return renderInterviewPrep();
  if (tabId === 'payment') return renderPaymentGuide();
  return '';
}

// ============================================================
// CV (both tracks)
// ============================================================
function renderCV(){
  const d = state.modalData;
  const opp = d.opportunity;
  const isScholarship = d.kind === 'scholarship';
  const skills = (d.skills || '').split(',').map(s=>s.trim()).filter(Boolean);
  const achievements = (d.keyAchievements || '').split('\n').map(a=>a.replace(/^\d+[\.\)]\s*/,'').trim()).filter(Boolean);
  const links = (d.portfolioLinks || '').split('\n').map(l=>l.trim()).filter(Boolean);
  const isDAAD = opp.name && opp.name.includes('DAAD');

  const profileText = isScholarship
    ? `${esc(d.currentRole)} at ${esc(d.currentCompany)} with ${esc(d.yearsExperience)} years' experience in ${esc(skills.slice(0,3).join(', ') || 'my field')}. Committed to returning to Nigeria after study to apply what I learn.`
    : `${esc(d.currentRole)} with ${esc(d.yearsExperience)} years of experience in ${esc(skills.slice(0,3).join(', ') || opp.skills.slice(0,3).join(', '))}. Seeking to join ${esc(opp.company)} as ${esc(opp.title)}.`;

  const cvHtml = `<h4>${esc(d.fullName || 'Your name')}</h4>
<p>${esc(d.city)}, Nigeria · ${esc(d.phone || '+234 XXX XXX XXXX')} · ${esc(d.email || 'you@example.com')}${links.length ? ' · ' + links.map(esc).join(' · ') : ''}</p>

<h4>Profile</h4>
<p>${profileText}</p>

<h4>Experience</h4>
<p><strong>${esc(d.currentRole)}</strong> — ${esc(d.currentCompany)}<br><em>${esc(d.yearsExperience)} years · Present</em></p>
<ul>
${achievements.slice(0,5).map(a=>`<li>${esc(a)}</li>`).join('\n')}
</ul>

<h4>Education</h4>
<p><strong>${esc(d.degree)}</strong> — ${esc(d.institution)}<br><em>Graduated ${esc(d.graduationYear)}${d.gpa ? ' · ' + esc(d.gpa) : ''}</em></p>

<h4>Skills</h4>
<p>${skills.map(esc).join(' · ')}</p>

${links.length ? `<h4>Links</h4><p>${links.map(esc).join('<br>')}</p>` : ''}`;

  const formatNote = isDAAD
    ? `DAAD requires the official Europass CV template. Download the form at <strong>europa.eu/europass</strong> and paste these sections in — DAAD rejects non-Europass CVs.`
    : isScholarship
    ? `Most scholarship applications want 1–2 pages. Paste into Google Docs and polish formatting. Keep the "Profile" section under 3 sentences.`
    : `For remote roles, keep to 1 page. Paste into a clean template — Google Docs has good free resume templates. Put links at the top so recruiters see them immediately.`;

  return `
    <div class="doc-content">${cvHtml}</div>
    <div class="doc-actions">
      <button class="btn btn-dark" onclick="copyDoc('cv')">${icon('copy',14)} Copy to clipboard</button>
      <button class="btn btn-ghost" onclick="downloadDoc('cv','${esc((d.fullName||'cv').replace(/ /g,'_'))}-CV.txt')">${icon('download',14)} Download .txt</button>
    </div>
    <div class="doc-disclaimer"><strong>Format note:</strong> ${formatNote}</div>
  `;
}

// ============================================================
// ESSAYS (scholarship-specific generator)
// ============================================================
function renderEssays(){
  const d = state.modalData;
  const opp = d.opportunity;
  const essays = (opp.application_schema && opp.application_schema.essays) || [];

  if (essays.length === 0){
    return `<div class="doc-content"><p>This scholarship doesn't require structured essays. Focus on your CV and the step-by-step guide.</p></div>`;
  }

  const drafts = essays.map(e => {
    const body = buildEssayDraft(e, d, opp);
    return `
      <h4>${esc(e.title)} <span style="font-weight:400;color:var(--ink-soft);font-size:.875rem">· ${e.word_limit} words max</span></h4>
      <p style="color:var(--ink-soft);font-size:.875rem;margin-bottom:1rem"><em>Prompt: ${esc(e.prompt)}</em></p>
      ${body.split('\n\n').map(p=>`<p>${esc(p)}</p>`).join('')}
    `;
  }).join('<hr style="border:none;border-top:1px solid var(--line);margin:1.5rem 0">');

  return `
    <div class="doc-content">${drafts}</div>
    <div class="doc-actions">
      <button class="btn btn-dark" onclick="copyDoc('essays')">${icon('copy',14)} Copy all essays</button>
      <button class="btn btn-ghost" onclick="downloadDoc('essays','${esc((d.fullName||'essays').replace(/ /g,'_'))}-Essays.txt')">${icon('download',14)} Download .txt</button>
    </div>
    <div class="doc-disclaimer"><strong>Critical:</strong> Admissions panels read thousands of applications — they spot AI-generic prose in seconds. Rewrite every sentence in your voice. Add your real stories, real specifics, real vulnerabilities. Good essays feel like <em>you</em>.</div>
  `;
}

function buildEssayDraft(essay, d, opp){
  const achievements = (d.keyAchievements || '').split('\n').map(a=>a.replace(/^\d+[\.\)]\s*/,'').trim()).filter(Boolean);
  const firstAch = achievements[0] || `a project I led at ${d.currentCompany || 'my current organisation'}`;
  const firstSkill = (d.skills || '').split(',')[0]?.trim() || 'my field';

  if (essay.id === 'leadership'){
    return `Throughout my career as ${d.currentRole || 'a professional'} at ${d.currentCompany || 'my organisation'}, I have consistently sought opportunities to lead change — not because of a title, but because the work needed doing.

${d.leadershipExample || 'In my most significant leadership experience, I identified a gap and acted to close it — turning a stalled effort into a measurable win.'} This taught me that leadership is less about authority and more about rallying others toward a shared purpose.

I want to use ${opp.name} to sharpen these skills and extend my impact. ${d.careerGoal || 'My career vision'} requires me to operate at a level I cannot reach without this opportunity — and I plan to return to Nigeria to apply what I learn where it matters most.

[Draft — aim for ${essay.word_limit} words. Rewrite in your voice, add one more specific example with numbers, cut anything generic.]`;
  }
  if (essay.id === 'networking'){
    return `My approach to building networks is practical: I connect with people whose work I genuinely respect, offer help before asking for it, and follow through on what I promise.

My current network includes colleagues at ${d.currentCompany || 'my organisation'}, peers from ${d.institution}, and mentors I met through ${firstSkill} communities. ${firstAch.length > 30 ? 'For example: ' + firstAch + ' — which happened because of a connection I had invested in for two years.' : ''}

Through ${opp.name}, I will connect with fellow scholars and alumni across many countries — a network directly relevant to ${d.careerGoal || 'my long-term goals'}. My plan is to maintain these connections through collaborative work: cross-border projects, alumni events, and specific initiatives tied to Nigeria's development.

[Draft — ${essay.word_limit} words target. Replace abstract statements with 2–3 real people or groups you've invested in. Specifics win.]`;
  }
  if (essay.id === 'career'){
    return `My career goal is ${d.careerGoal || 'to lead meaningful change in Nigeria'}.

I'm currently ${d.currentRole} at ${d.currentCompany}, where ${firstAch}. The next step requires skills and networks I cannot build in Nigeria alone — specifically in the expertise concentrated at institutions in ${opp.country}.

After ${opp.name}, within 5 years I plan to [specific role / project]. Within 10 years, [bigger scale]. Within 15 years, [national-scale impact]. Each step builds on the previous one, and each step sends value back to Nigeria.

[Draft — ${essay.word_limit} words. The more specific your 5/10/15 year plan, the more convincing. Vague plans get rejected.]`;
  }
  if (essay.id === 'study'){
    return `I chose my three ${opp.country === 'United Kingdom' ? 'UK' : opp.country} courses carefully, with one clear thread: ${d.careerGoal || 'my career goal'}.

Course 1: [university + course + 1 sentence on why it fits].
Course 2: [university + course + 1 sentence on why it fits].
Course 3: [university + course + 1 sentence on why it fits].

All three share a focus on ${firstSkill} but differ in approach — theoretical (Course 1), applied (Course 2), interdisciplinary (Course 3). This gives me flexibility if my top choice is unavailable, while keeping the academic direction unified.

${d.whyThisOpportunity || `Studying in ${opp.country}`} specifically positions me to ${d.careerGoal || 'achieve my goals'} because the relevant expertise, institutions, and networks are concentrated there.

[Draft — ${essay.word_limit} words. Fill in the 3 specific courses you've chosen. Chevening weights this essay heavily.]`;
  }
  if (essay.id === 'motivation'){
    return `My work as ${d.currentRole} at ${d.currentCompany} showed me exactly where the gap is: ${firstAch}.

My motivation for ${opp.name} connects to this directly. ${d.whyThisOpportunity || `Studying in ${opp.country} gives me tools I cannot build in Nigeria alone`}. Specifically, I chose these programs in this order because:

1. [First program — why it's my top choice]
2. [Second program — complementary angle]
3. [Third program — fallback that still fits]

All three build toward the same goal: ${d.careerGoal}. After the scholarship, I will return to Nigeria to apply this directly in [specific sector / project].

[Draft — aim for ${essay.word_limit} words. DAAD EPOS requires ONE motivation letter covering all 3 ranked programs in one document. This is non-negotiable.]`;
  }
  if (essay.id === 'development_impact'){
    return `Nigeria's ${firstSkill} sector faces a specific gap: [describe the problem in concrete terms — statistics, lived examples, why it matters].

My work as ${d.currentRole} at ${d.currentCompany} exposed me to this gap directly: ${firstAch}. The more I worked on it, the clearer it became that solving it at scale requires expertise I cannot build in Nigeria alone.

${opp.name} positions me to ${d.careerGoal}. After my degree, within 5 years I plan to [specific plan with measurable outcomes]. Within 10 years, [bigger impact]. This is not abstract ambition — it's a specific response to a specific problem I've already committed to.

[Draft — ${essay.word_limit} words. Commonwealth specifically rewards essays that tie learning in the UK to concrete Nigerian outcomes. Avoid vague "I want to help Nigeria" — name the problem, name the solution, name your role.]`;
  }
  if (essay.id === 'research_plan'){
    return `RESEARCH TOPIC: [Your proposed title — concise, specific]

BACKGROUND:
${d.currentRole} at ${d.currentCompany} exposed me to [specific gap or problem]. Existing research in ${firstSkill} focuses on [current state], but leaves unaddressed [your specific angle].

RESEARCH OBJECTIVES:
1. [First specific, measurable objective]
2. [Second objective]
3. [Third objective]

METHODOLOGY:
I plan to use [qualitative / quantitative / mixed methods]. Specifically, [data source or experimental setup]. Analysis will use [specific technique].

EXPECTED CONTRIBUTION:
This research will [theoretical contribution] and provide [practical application for Nigeria]. It builds on the work of [name 1–2 scholars] while extending into [your novel area].

[Draft — ${essay.word_limit} words target. For MEXT especially, this is the most important document. Vague research plans get rejected — be concrete about methodology and cite specific scholars whose work you'll build on.]`;
  }
  if (essay.id === 'giveback'){
    return `I am African before I am anything else. ${opp.name} is not a personal achievement — it's a responsibility to my community, Nigeria, and the continent.

Concretely, here is my give-back commitment:

During the scholarship: I will [specific activity — mentoring peers, running workshops for Nigerian students, contributing to African student publications].

Immediately after: I will return to Nigeria and work on ${d.careerGoal} for at least 3 years, focused on [specific challenge].

Long-term: I plan to [build / found / lead] something that creates opportunities for other Africans — for example, [a specific type of program, company, or initiative]. ${d.leadershipExample ? 'My commitment is credible because ' + d.leadershipExample.slice(0, 180) + '...' : 'I have already started this work in smaller forms.'}

[Draft — ${essay.word_limit} words. Mastercard evaluates sincerity here heavily. Generic promises fail. Specific, checkable commitments win.]`;
  }
  if (essay.id === 'sop'){
    return `I am applying to ${opp.host_institution || opp.provider} for ${opp.degree_level} because ${d.careerGoal || 'my specific goal requires exactly this training'}.

Academic background: I hold a ${d.degree} from ${d.institution} (${d.gpa || 'graduated ' + d.graduationYear}). My coursework focused on [2–3 relevant areas]. My final project addressed [topic].

Research interests: I want to work on [specific research question]. This builds on my undergraduate work in [area] and my professional experience as ${d.currentRole} at ${d.currentCompany}, where ${firstAch}.

Why this institution: ${d.whyThisOpportunity || `${opp.host_institution || opp.country}'s strengths in my area`}. I'm particularly interested in working with [name a specific professor and describe their work].

After the program: ${d.careerGoal}. Within 3 years I aim to [first milestone], within 5 years [next milestone].

[Draft — ${essay.word_limit} words. Naming a specific professor and citing their recent work is what separates top SOPs from the pile. Do your research.]`;
  }
  return `[Draft content for ${essay.title} — will appear here based on your intake answers.]`;
}

// ============================================================
// DOCUMENT CHECKLIST (scholarship)
// ============================================================
function renderChecklist(){
  const d = state.modalData;
  const opp = d.opportunity;
  const docs = (opp.application_schema && opp.application_schema.documents_required) || [];
  if (docs.length === 0) return `<div class="doc-content"><p>No specific checklist available. Visit the official site: <a href="${opp.application_url}" target="_blank" rel="noopener">${esc(opp.application_url)}</a></p></div>`;

  const byTier = {required:[],conditional:[],recommended:[]};
  docs.forEach(doc => (byTier[doc.tier || 'required']).push(doc));

  const section = (title, list, keyPrefix) => list.length ? `
    <div class="checklist-section">
      <div class="checklist-section-title">${title}</div>
      ${list.map((doc,i) => `
        <div class="checklist-item">
          <input type="checkbox" id="${keyPrefix}-${i}" />
          <label for="${keyPrefix}-${i}">${esc(doc.name)}${doc.note ? `<span class="meta">${esc(doc.note)}</span>` : ''}</label>
        </div>
      `).join('')}
    </div>` : '';

  return `
    <div class="doc-content" style="padding:.5rem">
      ${section('Required — cannot submit without these', byTier.required, 'req')}
      ${section('Conditional — depends on your situation', byTier.conditional, 'con')}
      ${section('Recommended — strengthens your application', byTier.recommended, 'rec')}
    </div>
    <div class="doc-disclaimer"><strong>Tick as you gather each document.</strong> Start with 3rd-party items (references, transcripts, IELTS booking) — they take the longest in Nigeria. Do the rest last.</div>
  `;
}

// ============================================================
// FILING GUIDE (scholarship)
// ============================================================
function renderGuide(){
  const d = state.modalData;
  const opp = d.opportunity;
  const needsIELTS = (opp.application_schema && opp.application_schema.documents_required || [])
    .some(doc => /IELTS|TOEFL/.test(doc.name));

  return `
    <div class="doc-content">
      <h4>Your 4-week filing plan for ${esc(opp.name)}</h4>

      <h4>Week 1 — Start the slow things</h4>
      <ul>
        <li><strong>Request transcripts</strong> from ${esc(d.institution || 'your university')}. Many Nigerian universities take 2–3 weeks.</li>
        ${needsIELTS ? `<li><strong>Book IELTS Academic</strong> at British Council (Lagos/Abuja/Port Harcourt/Ibadan). Costs ~₦130,000. Test dates fill fast — book 6–8 weeks ahead.</li>` : ''}
        <li><strong>Ask your 2–3 referees.</strong> Give them your CV, the scholarship info, and a draft of what you'd like them to highlight. Don't just dump a form on them.</li>
        <li><strong>Renew your passport</strong> if it expires within study duration. Nigeria Immigration takes 3–6 weeks.</li>
      </ul>

      <h4>Week 2 — Draft your essays</h4>
      <ul>
        <li>Use the essay drafts we generated (the other tab) as structure. Rewrite every paragraph in your own voice.</li>
        <li>Read your essays aloud. If they don't sound like you talking, rewrite.</li>
        <li>Get one trusted friend to read your drafts. Fresh eyes catch vagueness.</li>
      </ul>

      <h4>Week 3 — Complete the application form</h4>
      <ul>
        <li>Create your account on <strong>${esc(opp.application_url)}</strong></li>
        <li>Fill work experience <em>exactly</em> — dates, weekly hours, paid/unpaid status${opp.name.includes('Chevening') ? ' (Chevening needs 2,800+ hours documented across up to 15 jobs)' : ''}</li>
        <li>Upload draft essays — you can keep editing until final submit</li>
        <li>Double-check referee contact info (common failure point)</li>
      </ul>

      <h4>Week 4 — Polish and submit</h4>
      <ul>
        <li>Have someone proofread for typos. Spelling errors reduce credibility fast.</li>
        <li>Don't wait for deadline day — submit at least 48 hours before. Portals crash in the final 24 hours.</li>
        <li>Download a PDF of your submitted application for your records.</li>
      </ul>

      <h4>Nigeria-specific tips</h4>
      <ul>
        <li><strong>Transcripts:</strong> Get them stamped and sealed even for digital upload. You may need originals at interview.</li>
        <li><strong>References:</strong> Nigerian referees often don't respond to email invitations on time. Follow up politely by phone after 48 hours.</li>
        <li><strong>Don't pay "agents".</strong> Chevening, DAAD, Commonwealth, MEXT — all completely free to apply for. Anyone charging you for "Chevening agent services" is a scam.</li>
        <li><strong>At interview:</strong> Practice in English with the accent you're comfortable with. Confidence and clarity beat imitation. British High Commission interviewers for Chevening are based in Abuja/Lagos — they hear Nigerian English daily and judge content, not accent.</li>
      </ul>
    </div>
    <div class="doc-actions">
      <button class="btn btn-dark" onclick="copyDoc('guide')">${icon('copy',14)} Copy this plan</button>
      <button class="btn btn-ghost" onclick="downloadDoc('guide','Filing-Plan.txt')">${icon('download',14)} Download .txt</button>
    </div>
  `;
}

// ============================================================
// COVER LETTER (job)
// ============================================================
function renderCoverLetter(){
  const d = state.modalData;
  const opp = d.opportunity;
  const firstAch = (d.keyAchievements || '').split('\n')[0]?.replace(/^\d+[\.\)]\s*/,'').trim() || 'I delivered strong results in my current role';
  const firstLink = (d.portfolioLinks || '').split('\n')[0]?.trim() || '';

  const letter = `<p>${esc(d.fullName || 'Your name')}<br>${esc(d.city)}, Nigeria<br>${esc(d.email)} · ${esc(d.phone || '+234 XXX XXX XXXX')}</p>

<p>Hiring team<br>${esc(opp.company)}</p>

<p>Dear ${esc(opp.company)} team,</p>

<p>I'm applying for the ${esc(opp.title)} role because ${d.whyThisOpportunity ? esc(d.whyThisOpportunity.slice(0, 220)) : 'your work aligns with what I\'ve been building toward in my career'}.</p>

<p>I'm currently ${esc(d.currentRole)} at ${esc(d.currentCompany)} with ${esc(d.yearsExperience)} years of relevant experience. Most directly relevant to this role: ${esc(firstAch)}. The skills I've built in ${esc((d.skills || '').split(',').slice(0,3).join(', '))} map to what ${esc(opp.company)} needs — especially ${esc(opp.skills.slice(0,2).join(' and '))}.</p>

<p>On the practical side: I'm based in ${esc(d.city)}, work comfortably in ${esc(opp.timezone)} hours, and have professional remote infrastructure (dual internet, backup power, dedicated workspace). ${esc(opp.company)} handles Nigeria hiring through ${esc(opp.employment_model)}, which works for me.</p>

<p>I'd welcome a conversation. ${firstLink ? 'Portfolio: ' + esc(firstLink) : 'Portfolio available on request.'}</p>

<p>Best,<br>${esc(d.fullName || 'Your name')}</p>`;

  return `
    <div class="doc-content">${letter}</div>
    <div class="doc-actions">
      <button class="btn btn-dark" onclick="copyDoc('cover')">${icon('copy',14)} Copy letter</button>
      <button class="btn btn-ghost" onclick="downloadDoc('cover','CoverLetter.txt')">${icon('download',14)} Download</button>
    </div>
    <div class="doc-disclaimer"><strong>Before sending:</strong> Add one specific reference to ${esc(opp.company)} — a recent product launch, a blog post, a value of theirs. Generic cover letters fail; specific ones win. Hiring managers read hundreds — your specifics matter.</div>
  `;
}

// ============================================================
// INTERVIEW PREP (job)
// ============================================================
function renderInterviewPrep(){
  const d = state.modalData;
  const opp = d.opportunity;
  const stages = opp.interview_stages || [];
  const firstSkill = (d.skills || '').split(',')[0]?.trim() || 'my area';

  return `
    <div class="doc-content">
      <h4>Interview stages at ${esc(opp.company)}</h4>
      <ul>${stages.map((s,i)=>`<li><strong>Stage ${i+1}:</strong> ${esc(s)}</li>`).join('')}</ul>

      <h4>Prep checklist — 1 week before each stage</h4>
      <ul>
        <li><strong>Research ${esc(opp.company)} cold:</strong> their product, recent launches, public values. Aim to quote one recent decision back to them.</li>
        <li><strong>Prepare 5–7 STAR stories:</strong> Situation → Task → Action → Result. Draw from your ${esc(d.currentRole)} work. Each story ~90 seconds max.</li>
        <li><strong>Practice "Why ${esc(opp.company)}?" aloud</strong> — your intake answer was: "${d.whyThisOpportunity ? esc(d.whyThisOpportunity.slice(0, 150)) + '...' : '[develop this]'}"</li>
        <li><strong>Prepare 3+ questions to ask:</strong> team structure, first 90 days, success metrics. "No questions" is a red flag.</li>
      </ul>

      <h4>The "Why hire from Nigeria?" question</h4>
      <p>You may get asked this directly or indirectly. Don't be defensive. Answer simply:</p>
      <p><em>"My track record at ${esc(d.currentCompany)} proves the output. Nigeria's timezone has 4–6 hours of overlap with Europe and Americas so I handle real-time collaboration comfortably. My home setup is enterprise-grade — dual ISPs, backup power, dedicated workspace. I've been delivering remote work at this level already."</em></p>

      <h4>Remote-specific prep</h4>
      <ul>
        <li><strong>Test your video setup</strong> before every call. Zoom + good microphone + decent lighting. Backup device charged.</li>
        <li><strong>Internet stability:</strong> Mention your dual ISPs — eliminates the #1 concern employers have about Nigerian remote workers.</li>
        <li><strong>Timezone questions:</strong> Nigeria is GMT+1. Offer specific overlap hours you're happy to commit to.</li>
        <li><strong>Salary negotiation:</strong> Research ${esc(opp.title)} pay on levels.fyi or Glassdoor. Don't undersell because you're in Nigeria — global roles pay global rates when the employer is serious. The ${esc(opp.salary)} range is your anchor.</li>
      </ul>

      <h4>Specific to ${esc(opp.title)} roles</h4>
      <ul>
        <li>Expect deep technical questions on ${esc(opp.skills.slice(0,3).join(', '))}</li>
        <li>Be ready to walk through ${firstSkill} work you've done. Keep a code/design portfolio on hand during the call.</li>
        <li>${esc(opp.company)} experience level: ${esc(opp.experience)} — they expect you to discuss trade-offs, not just "what", so practice the "why I chose X over Y" framing.</li>
      </ul>
    </div>
    <div class="doc-actions">
      <button class="btn btn-dark" onclick="copyDoc('interview')">${icon('copy',14)} Copy prep notes</button>
      <button class="btn btn-ghost" onclick="downloadDoc('interview','${esc(opp.company.replace(/ /g,'_'))}-Interview-Prep.txt')">${icon('download',14)} Download</button>
    </div>
  `;
}

// ============================================================
// PAYMENT & TAX GUIDE (job) — critical for 2026 Nigerian law
// ============================================================
function renderPaymentGuide(){
  const d = state.modalData;
  const opp = d.opportunity;

  return `
    <div class="doc-content">
      <h4>Receiving your salary from ${esc(opp.company)}</h4>
      <p>${esc(opp.company)} uses: <strong>${esc(opp.employment_model)}</strong>. Common payment paths for Nigerian remote workers:</p>
      <ul>
        <li><strong>Deel / Remote.com (EOR)</strong> — Employer handles everything; you receive monthly USD payments to your linked account. Most professional option. 1–2% fees typically absorbed by employer.</li>
        <li><strong>Wise Business</strong> — Multi-currency account, direct USD/GBP/EUR receive, competitive conversion. ~0.5% fees.</li>
        <li><strong>Payoneer</strong> — Industry standard for contractors. US bank details you can give employers. Fees ~1–2%.</li>
        <li><strong>Grey.co / Geegpay</strong> — Nigerian-focused; gives you US, UK, and EU virtual bank accounts linked to your Naira account. Growing in popularity.</li>
      </ul>
      <p><strong>Recommendation:</strong> Set up at least 2 options before your first payment. If your primary fails, you have a backup. Never accept payment via only PayPal — PayPal Nigeria has restrictions that cause problems.</p>

      <div class="tax-callout">
        <div class="tax-callout-title">⚠️ Nigeria's 2026 Tax Law — what you need to know</div>
        <p>Since <strong>January 1, 2026</strong>, Nigeria's Tax Reform Acts require every remote worker earning from foreign companies to register with the Nigeria Revenue Service (NRS), file annual returns, and pay Personal Income Tax (PIT).</p>
        <p><strong>The rates:</strong> First ₦800,000/year is tax-exempt. Above that, progressive tax from 15% up to 25% for top earners. A typical remote worker earning $2,000/month pays roughly 23% after deductions.</p>
        <p><strong>Penalties:</strong> ₦50,000 first-month fine plus ₦25,000 monthly for failing to register. ₦100,000 first-month plus ₦50,000 monthly for failing to file returns.</p>
      </div>

      <h4>Your 2026 tax compliance checklist</h4>
      <ul>
        <li><strong>1. Get a Tax Identification Number (TIN)</strong> — apply free on the Nigeria Revenue Service portal (formerly FIRS). Without a TIN, banks can restrict your accounts from January 2026 onward.</li>
        <li><strong>2. Register with your state tax authority</strong> — Lagos State Internal Revenue (LIRS), FCT Internal Revenue Service for Abuja, etc. Your PIT is paid to the state.</li>
        <li><strong>3. Track all income in Naira</strong> — record the CBN exchange rate on each payment date. The NRS uses that rate, not the day-of-filing rate.</li>
        <li><strong>4. Keep receipts for allowable deductions</strong> — internet bills, home office costs, software subscriptions, laptop purchases. These reduce your taxable income.</li>
        <li><strong>5. File annual returns</strong> by the deadline (typically end of March for the previous year).</li>
        <li><strong>6. Get a tax professional</strong> for your first year — costs ₦50,000–150,000, saves you much more in deductions you'd miss alone.</li>
      </ul>

      <h4>Allowable deductions you can claim</h4>
      <ul>
        <li>Internet and phone bills (portion used for work)</li>
        <li>Home office rent portion (rent relief up to 20%, capped at ₦500,000)</li>
        <li>Equipment — laptop, monitor, ergonomic chair, cameras, microphones</li>
        <li>Software subscriptions — Adobe, Figma, GitHub, etc.</li>
        <li>Professional development — online courses, books, conferences</li>
        <li>Pension contributions (8% minimum of your income)</li>
      </ul>

      <p style="margin-top:1.5rem"><strong>Tax calculation preview (rough estimate):</strong> On ${esc(opp.salary)}, your effective Nigerian tax rate after deductions is likely <strong>18–23%</strong>, depending on your situation. Budget for this — don't spend your gross as if it's net.</p>
    </div>
    <div class="doc-actions">
      <button class="btn btn-dark" onclick="copyDoc('payment')">${icon('copy',14)} Copy guide</button>
      <button class="btn btn-ghost" onclick="downloadDoc('payment','Payment-Tax-Guide.txt')">${icon('download',14)} Download</button>
    </div>
    <div class="doc-disclaimer"><strong>Not legal or tax advice.</strong> Nigeria's 2026 tax reforms are new and still being interpreted. Consult a Nigerian-licensed tax professional for your specific situation. This guide is a starting point, not a substitute for professional advice.</div>
  `;
}

// ============================================================
// COPY / DOWNLOAD HELPERS
// ============================================================
function copyDoc(tabId){
  const panel = document.getElementById('panel-'+tabId);
  if (!panel) return;
  const text = panel.querySelector('.doc-content')?.innerText || '';
  if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(()=>toast('Copied to clipboard')).catch(()=>fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}
function fallbackCopy(text){
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); toast('Copied'); } catch(e){ toast('Copy failed — select and copy manually'); }
  document.body.removeChild(ta);
}
function downloadDoc(tabId, filename){
  const panel = document.getElementById('panel-'+tabId);
  if (!panel) return;
  const text = panel.querySelector('.doc-content')?.innerText || '';
  const blob = new Blob([text], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Downloaded');
}

// ============================================================
// ROUTING
// ============================================================
function render(){
  let html = '';
  switch(state.view){
    case 'home': html = renderHome(); break;
    case 'jobs': html = renderJobs(); break;
    case 'scholarships': html = renderScholarships(); break;
    case 'scholarship-detail': html = renderScholarshipDetail(); break;
    case 'job-detail': html = renderJobDetail(); break;
    case 'about': html = renderAbout(); break;
  }
  document.getElementById('app').innerHTML = html;
  renderHeader();
}

function goto(view){
  state.view = view;
  render();
  window.scrollTo({top:0, behavior:'instant'});
  const menu = document.getElementById('mobile-menu');
  if (menu.classList.contains('open')){
    menu.classList.remove('open');
    const iconEl = document.getElementById('menu-icon');
    iconEl.innerHTML = `<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>`;
  }
}

function openScholarship(id){
  state.selectedScholarship = SCHOLARSHIPS.find(s=>s.id===id);
  goto('scholarship-detail');
}
function openJob(id){
  state.selectedJob = JOBS.find(j=>j.id===id);
  goto('job-detail');
}
function setFilter(f){ state.filter = f; render(); }
function updateSearch(v){
  state.search = v;
  const filtered = SCHOLARSHIPS.filter(s => {
    if (state.filter !== 'all' && s.funding_type !== state.filter) return false;
    const q = v.toLowerCase();
    if (q && !s.name.toLowerCase().includes(q) && !s.country.toLowerCase().includes(q) && !s.provider.toLowerCase().includes(q)) return false;
    return true;
  });
  const listing = document.querySelector('.listing .container');
  if (listing){
    listing.innerHTML = `<div class="listing-meta">Showing <strong>${filtered.length}</strong> scholarship${filtered.length!==1?'s':''}</div>` +
      (filtered.length===0 ? `<div style="padding:5rem 0;text-align:center;color:var(--ink-soft)">No scholarships match your search.</div>` : `<div class="grid-3">${filtered.map(scholarshipCard).join('')}</div>`);
  }
}
function updateJobSearch(v){
  state.jobSearch = v;
  const filtered = JOBS.filter(j => {
    const q = v.toLowerCase();
    if (q && !j.title.toLowerCase().includes(q) && !j.company.toLowerCase().includes(q)) return false;
    return true;
  });
  const listing = document.querySelector('.listing .container');
  if (listing){
    listing.innerHTML = `<div class="listing-meta">Showing <strong>${filtered.length}</strong> job${filtered.length!==1?'s':''}</div><div class="jobs-list">${filtered.map(jobRow).join('')}</div>`;
  }
}

// Escape key closes modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('action-modal').classList.contains('open')){
    closeModal();
  }
});

// INIT
render();
