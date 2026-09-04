/**
 * RANJU SAH (रन्जु साह) - OFFICIAL WEBSITE
 * Interactive Frontend Engine: Bilingual Dictionary, Dark Mode,
 * Scroll Progress, Modal Lightbox with Nav, PWA Service Worker & Realtime NPT Status
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dual-Language Translation Dictionary
  const translations = {
    en: {
      // Navigation
      nav_brand_title: "Ranju Sah",
      nav_brand_sub: "Aam Janata Party (AJP)",
      nav_home: "Home",
      nav_about: "About",
      nav_campaigns: "Movements & Work",
      nav_news: "News & Press",
      nav_media: "Media & Hub",
      nav_connect: "Direct Connect",
      nav_quick_contact: "Direct Connect",

      // Hero Section
      hero_badge: "Central Office Secretary & Women Leader — Aam Janata Party (AJP)",
      hero_symbol_tag: "Election Symbol: Mobile Phone",
      hero_title_p1: "Working for the ",
      hero_title_highlight: "People, Justice,",
      hero_title_p2: " and Real Change in Madhesh.",
      hero_subtext: "Master's graduate in Sociology from Nepal's renowned University, Tribhuvan University (TU), rooted in Yamunamai, Rautahat. Coordinator of the Bhansar (Customs) Reform Movement who endured police arrest and detention while fearlessly defending the rights and livelihoods of border residents across Parsa-2 and Madhesh Province.",
      hero_cta_work: "View Work & Agenda",
      hero_cta_connect: "Direct Connect",
      hero_stat1_title: "M.A. Sociology",
      hero_stat1_desc: "Tribhuvan University (TU)",
      hero_stat2_title: "Bhansar Movement Leader",
      hero_stat2_desc: "Arrested for Border Justice",
      hero_stat3_title: "Mobile Phone",
      hero_stat3_desc: "AJP Election Symbol",
      hero_portrait_status_title: "Active Grassroots Public Service",
      hero_portrait_status_sub: "Directly accessible for citizens of Madhesh",

      // Vision Quote Banner
      vision_quote: "True democracy remains incomplete until the voices of farmers, small border traders, and marginalized women are firmly rooted in public policy.",
      vision_author: "— Ranju Sah, Central Office Secretary (AJP)",

      // About Section
      about_badge: "Dedicated Profile",
      about_title_p1: "About ",
      about_title_highlight: "Ranju Sah",
      about_subtitle: "Grassroots dedication, academic insight, and relentless public advocacy for working families.",
      about_lead: "Ranju Sah (Ranju Kumari Sah) is a dynamic political leader, sociologist, and Central Office Secretary of the Aam Janata Party (AJP).",
      about_p1: "Born and raised in Yamunamai Rural Municipality, Rautahat, Ranju completed her Master's Degree in Sociology from Nepal's renowned University, Tribhuvan University (TU). Her academic background provides her with deep analytical clarity regarding socioeconomic disparities, regional marginalization, and the institutional barriers facing rural communities in Madhesh.",
      about_p2: "As Coordinator of the Customs Law Reform Struggle Committee, she fearlessly led the frontline Bhansar Movement against extortionate 45% bounty commissions and administrative harassment targeting border residents, facing police batons and detention. Contesting from Parsa-2 for the Federal Parliament, she champions transparent grassroots governance and civic equality.",
      about_origin_label: "Permanent Roots: Yamunamai, Rautahat",
      about_constituency_label: "Electoral Focus: Parsa-2, Madhesh",
      about_edu_label: "Academic: M.A. Sociology (TU)",

      // About Pillars
      pillar1_title: "Academic Qualification",
      pillar1_desc: "Master's in Sociology from Tribhuvan University, applying grounded social research to public policy and community welfare.",
      pillar2_title: "Grassroots Advocacy",
      pillar2_desc: "Unwavering commitment to farmers, daily wage laborers, youth employment, and marginalized families across Madhesh.",
      pillar3_title: "Bhansar Movement & Border Justice",
      pillar3_desc: "Spearheaded the customs reform movement and endured police arrest while standing up for the economic dignity and rights of border communities.",
      pillar4_title: "Transparent Governance",
      pillar4_desc: "Fighting corruption, demanding efficient service delivery, and holding public institutions accountable to every citizen.",

      // Key Campaigns & Movements
      campaigns_badge: "Key Movements & Agenda",
      campaigns_title_p1: "Campaigns For ",
      campaigns_title_highlight: "The People",
      campaigns_subtitle: "Turning principles into fearless, on-the-ground action for justice and civic rights.",
      
      camp1_tag: "Customs Reform",
      camp1_title: "Bhansar Bibhag Andolan (Customs Movement)",
      camp1_arrest_badge: "Police Arrest & Frontline Struggle",
      camp1_desc: "Led the historic 8-month Bhansar Bibhag Andolan and Customs Reform Struggle Committee, enduring police crackdown and arrest for speaking up for families living along the border.",
      camp1_p1: "Endured police detention and baton charges during the Customs Department gherao while defending daily wage earners and small border commuters.",
      camp1_p2: "Fought relentlessly to abolish the predatory 45% bounty/commission provision in customs law used to harass innocent border citizens.",
      camp1_p3: "Advocating for humane, transparent border regulations that protect working-class livelihoods rather than treating border families like criminals.",

      camp2_tag: "Civic Equality",
      camp2_title: "Social Justice & Women's Leadership",
      camp2_desc: "Building equitable institutions where underprivileged communities and women have a genuine voice in decision-making.",
      camp2_p1: "Championing vocational education and localized job creation for Madhesh youth.",
      camp2_p2: "Empowering women through political participation, legal awareness, and safety initiatives.",
      camp2_p3: "Standing in frontline solidarity with Aarti Sah's family demanding justice and legal accountability.",

      camp3_tag: "Representation",
      camp3_title: "Grassroots Governance in Parsa-2",
      camp3_desc: "A direct, accessible model of parliamentary representation rooted in people's real daily struggles.",
      camp3_p1: "Continuous public town halls and doorstep listening tours across Parsa-2 wards.",
      camp3_p2: "Transparent, corruption-free public works and infrastructural oversight in Madhesh.",
      camp3_p3: "Organizing under the Mobile Phone election symbol to give power back to Aam Janata.",

      banner_title: "Standing With Daily Wage Earners & Commuters",
      banner_desc: "The Bhansar Bibhag movement has awakened national attention to border fairness and civic dignity in Madhesh. Join our cause today.",
      banner_btn: "Connect on WhatsApp",

      // News & Media Coverage
      news_badge: "Media & Press Coverage",
      news_title_p1: "Ranju Sah in the ",
      news_title_highlight: "National News",
      news_subtitle: "Verified news reports, press conferences, and media coverage spotlighting Ranju Sah's fearless public leadership.",
      news_read_full: "Read Full Article",
      news_source_ratopati: "Ratopati",
      news_source_reporters: "Reporters Nepal",
      news_source_suryadainik: "Surya Dainik",
      news_source_onlinekhabar: "OnlineKhabar",

      news1_tag: "Child Safety & Justice",
      news1_date: "August 2026",
      news1_title: "Women's Front Demands Suspension of Bara Security Chiefs Over Garima Chaudhary Case",
      news1_desc: "Women's Front In-charge Ranju Sah issued a stern press release demanding the immediate suspension and investigation of the Bara CDO and Police SP for gross security negligence in the tragic rape and murder of 3-year-old Garima Chaudhary in Jitpur-Simara.",

      news2_tag: "Bhansar Movement & Republic",
      news2_date: "15 Jestha 2082 (May 2025)",
      news2_title: "Party-cracy Shattered Achievements Gained from People's Sacrifice: AJP Leader Sah",
      news2_desc: "Addressing a national symposium on Republic Day at Reporters Club, Ranju Sah highlighted their 8-month-long relentless struggle against predatory customs provisions and issued a direct challenge to the government to honor its agreement with the people.",

      news3_tag: "Madhesh Drought & Water Crisis",
      news3_date: "16 Saun 2082 (August 2025)",
      news3_title: "AJP Leader Sah Warns PM: Madhesh Will Not Stay Silent Without Immediate Relief",
      news3_desc: "Fiercely condemning government inaction during severe drought, Ranju Sah demanded immediate relief packages and 500 deep tube-wells for drinking water and irrigation for the parched communities of Madhesh.",

      news4_tag: "Parsa-2 Grassroots Outreach",
      news4_date: "19 Poush 2082 (January 2026)",
      news4_title: "Intensive Election Outreach in Parsa-2: Leader Ranju Sah Mobilizing Village Communities",
      news4_desc: "Intensive door-to-door public consultation in Birgunj-26 Sugauli Birta, forming a 61-member grassroots committee to champion transparent development, good governance, and responsive civic leadership.",

      news5_tag: "Official Candidate Profile",
      news5_date: "Election 2082 Tracking",
      news5_title: "Ranju Kumari Sah — Federal Parliamentary Candidate, Parsa-2 | OnlineKhabar",
      news5_desc: "Official candidate tracking and profile on Nepal's leading national portal OnlineKhabar, documenting Ranju Sah contesting the Federal Parliament from Parsa-2 under Aam Janata Party (Mobile Phone symbol).",

      // Media & Social Hub
      media_badge: "Public Hub",
      media_title_p1: "Media & ",
      media_title_highlight: "Social Hub",
      media_subtitle: "Follow official updates, press statements, community rallies, and field engagements.",
      social_fb_action: "Follow Facebook Page",
      social_ig_action: "View Instagram Feed",
      social_tt_action: "Watch TikTok Videos",

      gallery_filter_all: "All",
      gallery_filter_speech: "Public Speeches",
      gallery_filter_rally: "Rallies & Movements",
      gallery_filter_press: "Community & Press",

      gal1_badge: "Press Conference",
      gal1_title: "Addressing National Press at Reports Club Nepal",
      gal1_desc: "Ranju Sah addressing the media on public governance, social justice, and citizen rights at Face to Face Gallery, Reports Club.",
      gal2_badge: "Grassroots Movement",
      gal2_title: "Bhansar Customs Reform & Anti-Corruption Rally",
      gal2_desc: "Leading frontline demonstrations against border customs exploitation, enduring police crackdown and detention while defending border residents.",
      gal3_badge: "Justice & Human Rights",
      gal3_title: "Solidarity for Aarti Sah's Family: Fight for Justice",
      gal3_desc: "Sitting in public protest alongside Aarti Sah's family, demanding justice, legal accountability, and an end to violence against women.",
      gal4_badge: "Women Empowerment",
      gal4_title: "Dialogue with Rural Women & Mothers in Madhesh",
      gal4_desc: "Engaging directly with village women and elders in Madhesh, advocating for accessible education, healthcare, and female leadership.",
      gal5_badge: "Doorstep Outreach",
      gal5_title: "Door-to-Door Grassroots Campaigning in Parsa-2",
      gal5_desc: "Meeting village elders and voters with folded hands, presenting AJP's vision under the Mobile Phone election symbol.",
      gal6_badge: "Public Address",
      gal6_title: "Ranju Sah Addressing Public Forum & Citizens",
      gal6_desc: "Delivering an impassioned speech advocating for grassroots civic empowerment, youth employment, and fair governance.",

      // Direct Connect
      connect_badge: "No Middlemen",
      connect_title_p1: "Direct ",
      connect_title_highlight: "Contact Access",
      connect_subtitle: "No contact forms or delayed tickets. Reach Ranju Sah directly via phone, WhatsApp, or email.",
      avail_open_text: "Office Currently Open (NPT)",
      avail_closed_text: "Office Hours: 9:00 AM – 6:00 PM NPT",
      avail_badge: "Nepal Time: 9:00 AM – 6:00 PM",

      card_wa_title: "WhatsApp Message",
      card_wa_desc: "Send instant messages, documents, or event invitations directly.",
      card_wa_btn: "Open WhatsApp",
      card_call_title: "Phone Call",
      card_call_desc: "Direct voice line for urgent public matters and constituency dialogue.",
      card_call_btn: "Call Now",
      card_call_copy: "Copy Number",
      card_mail_title: "Email Address",
      card_mail_desc: "Official inquiries, press communications, and formal letters.",
      card_mail_btn: "Send Email",
      card_mail_copy: "Copy Email",

      outreach_hq_title: "Party Headquarters",
      outreach_hq_text: "Aam Janata Party (AJP) Central Secretariat, Kathmandu, Nepal.",
      outreach_constituency_title: "Constituency Focus",
      outreach_constituency_text: "Parsa-2, Birgunj & surrounding rural municipalities, Madhesh Province.",
      outreach_origin_title: "Permanent Residence",
      outreach_origin_text: "Yamunamai Rural Municipality, Rautahat, Madhesh Province, Nepal.",

      // Footer
      footer_bio: "Ranju Sah is a sociologist (M.A., TU) and Central Office Secretary of Aam Janata Party, dedicated to social justice, border equity, and transparent public service.",
      footer_nav_title: "Quick Navigation",
      footer_connect_title: "Connect & Social",
      footer_symbol_title: "Official Election Symbol",
      footer_symbol_desc: "mobile phone with signal waves on a red square backdrop (AJP).",
      footer_symbol_title_card: "Mobile Phone Symbol",
      footer_symbol_desc_card: "Aam Janata Party (AJP)",
      footer_copyright: "Copyright claimed by Saiman. All rights reserved.",
      footer_designer: "Designed by Saiman Sah.",

      // Toast Messages
      toast_copied_phone: "Phone number copied to clipboard: +977 9843384839",
      toast_copied_email: "Email address copied to clipboard: sahranju6@gmail.com"
    },

    ne: {
      // Navigation
      nav_brand_title: "रन्जु साह",
      nav_brand_sub: "आम जनता पार्टी (AJP)",
      nav_home: "गृहपृष्ठ",
      nav_about: "परिचय",
      nav_campaigns: "आन्दोलन र एजेन्डा",
      nav_news: "समाचार कभरेज",
      nav_media: "मिडिया र ग्यालरी",
      nav_connect: "सिधा सम्पर्क",
      nav_quick_contact: "सिधा सम्पर्क",

      // Hero Section
      hero_badge: "केन्द्रीय कार्यालय सचिव एवं महिला नेत्री — आम जनता पार्टी (AJP)",
      hero_symbol_tag: "चुनाव चिन्ह: मोबाइल फोन",
      hero_title_p1: "जनताको हक, ",
      hero_title_highlight: "न्याय र मधेसको",
      hero_title_p2: " समृद्धिका लागि निरन्तर सङ्घर्ष।",
      hero_subtext: "त्रिभुवन विश्वविद्यालयबाट समाजशास्त्रमा स्नातकोत्तर (MA), भन्सार कानुन सुधार सङ्घर्ष समितिकी संयोजकका रूपमा सीमावर्ती जनताको हकमा बोल्दा प्रहरी धरपकड र गिरफ्तारी बेहोर्नुभएकी, र पर्सा क्षेत्र नं. २ तथा समग्र मधेसमा धरातलीय न्यायका लागि अडिग जनआवाज।",
      hero_cta_work: "अभियान र एजेन्डा हेर्नुहोस्",
      hero_cta_connect: "सिधा सम्पर्क गर्नुहोस्",
      hero_stat1_title: "त्रि.वि. स्नातकोत्तर",
      hero_stat1_desc: "समाजशास्त्र (Sociology)",
      hero_stat2_title: "भन्सार आन्दोलन नेतृत्व",
      hero_stat2_desc: "सीमावर्ती जनताका लागि गिरफ्तारी",
      hero_stat3_title: "मोबाइल फोन",
      hero_stat3_desc: "आजपा चुनाव चिन्ह",
      hero_portrait_status_title: "निरन्तर जनताको सेवामा समर्पित",
      hero_portrait_status_sub: "मधेसका आम नागरिकका लागि सदैव प्रत्यक्ष उपलब्ध",

      // Vision Quote Banner
      vision_quote: "जबसम्म राज्यका नीतिहरूमा मधेसका किसान, सीमावर्ती साना व्यापारी र उत्पीडित महिलाहरूको आवाज समेटिँदैन, तबसम्म वास्तविक लोकतन्त्र अधुरो रहन्छ।",
      vision_author: "— रन्जु साह, केन्द्रीय कार्यालय सचिव (आजपा)",

      // About Section
      about_badge: "सङ्क्षिप्त परिचय",
      about_title_p1: "रन्जु साहको ",
      about_title_highlight: "व्यक्तित्व र पृष्ठभूमि",
      about_subtitle: "ग्रासरुट सङ्घर्ष, समाजशास्त्रीय दृष्टिकोण र जनउत्तरदायी नेतृत्व।",
      about_lead: "रन्जु साह (रञ्जुकुमारी साह) आम जनता पार्टी (आजपा) की केन्द्रीय कार्यालय सचिव, निष्ठावान् युवा महिला नेत्री तथा समाजशास्त्री हुनुहुन्छ।",
      about_p1: "रौतहटको यमुनामाई गाउँपालिकामा जन्मनुभएकी रन्जु साहले नेपालको जेठो तथा अग्रणी त्रिभुवन विश्वविद्यालयबाट समाजशास्त्र विषयमा स्नातकोत्तर (MA) तहको उपाधि हासिल गर्नुभएको छ। समाजशास्त्रको गहिरो अध्ययनले उहाँलाई मधेसका ग्रामीण वर्ग, किसान र महिलाहरूका सामाजिक-आर्थिक समस्यालाई तथ्यगत रूपमा बुझ्न र समाधान खोज्न सशक्त बनाएको छ।",
      about_p2: "भन्सार कानुन सुधार सङ्घर्ष समितिको संयोजकका रूपमा उहाँले दक्षिण सीमावर्ती क्षेत्रका सर्वसाधारण र साना व्यापारीमाथि हुने ४५ प्रतिशत कमिसनको लुटकारी प्रावधान र प्रशासनिक दमन विरुद्ध ८ महिना लामो भन्सार आन्दोलनको नेतृत्व गर्नुभयो। आन्दोलनका क्रममा भन्सार विभाग घेराउ गर्दा प्रहरीको धरपकड र गिरफ्तारी बेहोरेर पनि उहाँ जनताको अधिकारको पक्षमा निरन्तर उभिनुभयो। पर्सा क्षेत्र नं. २ बाट सङ्घीय संसद्का लागि जनताको प्रत्यक्ष उम्मेदवार बनेर उहाँले राजनीतिलाई जनउत्तरदायी बनाउनुभएको छ।",
      about_origin_label: "स्थायी ठेगाना: यमुनामाई गाउँपालिका, रौतहट",
      about_constituency_label: "कार्यक्षेत्र: पर्सा क्षेत्र नं. २, मधेस प्रदेश",
      about_edu_label: "शैक्षिक योग्यता: समाजशास्त्रमा स्नातकोत्तर (त्रि.वि.)",

      // About Pillars
      pillar1_title: "उच्च शैक्षिक योग्यता",
      pillar1_desc: "त्रिभुवन विश्वविद्यालयबाट समाजशास्त्रमा स्नातकोत्तर (MA), जसले जननीति निर्माणमा बौद्धिक दृष्टिकोण प्रदान गर्दछ।",
      pillar2_title: "ग्रासरुट सङ्घर्ष र धरातलीय आवाज",
      pillar2_desc: "श्रमजीवी वर्ग, साना किसान, युवा र पछाडि पारिएका समुदायको हक-अधिकारका लागि चौतर्फी पैरवी।",
      pillar3_title: "भन्सार आन्दोलन तथा सीमावर्ती न्याय",
      pillar3_desc: "भन्सार सुधार सङ्घर्ष समितिको नेतृत्व गर्दै सीमावर्ती जनताको हकमा बोल्दा प्रहरी धरपकड र गिरफ्तारी बेहोर्नुभएकी साहको साहसी अडान।",
      pillar4_title: "पारदर्शी शासन र भ्रष्टाचार विरोध",
      pillar4_desc: "सरकारी सेवा प्रवाहमा पूर्ण पारदर्शिता र जनताको काम बिना कुनै घुस र ढिलासुस्ती हुनुपर्ने अडान।",

      // Key Campaigns & Movements
      campaigns_badge: "प्रमुख आन्दोलन तथा एजेन्डा",
      campaigns_title_p1: "जनहितका लागि ",
      campaigns_title_highlight: "धरातलीय सङ्घर्ष",
      campaigns_subtitle: "सिद्धान्तलाई व्यवहारमा उतार्दै मधेसका आम जनताको अधिकारका लागि मैदानमै उपस्थित नेतृत्व।",
      
      camp1_tag: "भन्सार सुधार",
      camp1_title: "भन्सार विभाग आन्दोलन तथा सीमावर्ती न्याय",
      camp1_arrest_badge: "प्रहरी गिरफ्तारी र धरातलीय सङ्घर्ष",
      camp1_desc: "भन्सार सुधार सङ्घर्ष समितिकी संयोजकका रूपमा सीमावर्ती जनताको हक-अधिकार र सम्मानका लागि ८ महिनासम्म ऐतिहासिक भन्सार आन्दोलनको नेतृत्व, प्रहरी धरपकड र गिरफ्तारी बेहोरेको साहसी सङ्घर्ष।",
      camp1_p1: "काठमाडौँस्थित भन्सार विभाग घेराउका क्रममा सीमावर्ती जनता र साना बटुवाको पक्षमा बोल्दा प्रहरीद्वारा धरपकड र गिरफ्तारी।",
      camp1_p2: "भन्सार नियमावलीमा रहेको '४५ प्रतिशत कमिसन वा पुरस्कार' को लुटकारी प्रावधान खारेज गर्न ८ महिनासम्म सडकदेखि वार्तासम्म निरन्तर सङ्घर्ष।",
      camp1_p3: "सीमा क्षेत्रका बासिन्दा, किसान र साना व्यापारीहरूलाई चोर-तस्कर जस्तो व्यवहार गर्ने विभेदकारी नीति अन्त्यका लागि सम्झौताहीन लडाइँ।",

      camp2_tag: "सामाजिक न्याय",
      camp2_title: "सामाजिक न्याय, सुशासन र महिला सशक्तीकरण",
      camp2_desc: "विभेदमुक्त समाज निर्माण र राज्यका हरेक तहमा उत्पीडित वर्ग तथा महिलाहरूको सम्मानित पहुँच।",
      camp2_p1: "मधेसका बेरोजगार युवाहरूलाई प्राविधिक सीप र स्थानीय रोजगारीको अवसर सुनिश्चित गर्न जोड।",
      camp2_p2: "महिलाहरूलाई राजनीति र सामाजिक नेतृत्वमा अगाडि बढाउने ठोस कार्यक्रमहरू।",
      camp2_p3: "आरती साहको परिवारलाई न्याय दिलाउन सडक धर्नादेखि कानुनी लडाइँसम्म प्रत्यक्ष ऐक्यबद्धता।",

      camp3_tag: "जनप्रतिनिधित्व",
      camp3_title: "पर्सा क्षेत्र नं. २ मा प्रत्यक्ष जनउत्तरदायित्व",
      camp3_desc: "जनतासँग निरन्तर संवाद र पारदर्शी जनप्रतिनिधित्वको नयाँ संस्कार स्थापना।",
      camp3_p1: "पर्सा क्षेत्रका हरेक वडा र गाउँमा प्रत्यक्ष जनसंवाद र समस्या सङ्कलन अभियान।",
      camp3_p2: "विकास निर्माणका काममा पारदर्शिता र बजेट दुरुपयोग विरुद्ध नागरिक अनुगमन।",
      camp3_p3: "आम जनता पार्टी (मोबाइल फोन चिन्ह) मार्फत आम नागरिकको हातमा वास्तविक शक्ति फर्काउने लक्ष्य।",

      banner_title: "श्रमजीवी तथा साना व्यापारीको पक्षमा हाम्रो आवाज",
      banner_desc: "भन्सार विभागको विभेदकारी नीति विरुद्ध आम जनता पार्टीको आन्दोलन जनअधिकारको रक्षाका लागि हो। हामीसँग जोडिनुहोस्।",
      banner_btn: "ह्वाट्सएपमा सम्पर्क गर्नुहोस्",

      // News & Media Coverage
      news_badge: "सञ्चारमाध्यममा रन्जु साह",
      news_title_p1: "राष्ट्रिय मिडिया र ",
      news_title_highlight: "समाचार कभरेज",
      news_subtitle: "रन्जु साहका सार्वजनिक अडान, पत्रकार सम्मेलन, धरातलीय आन्दोलन र राष्ट्रिय सञ्चारमाध्यममा प्रकाशित प्रमुख समाचारहरू।",
      news_read_full: "पूरा समाचार पढ्नुहोस्",
      news_source_ratopati: "रातोपाटी",
      news_source_reporters: "रिपोर्टर्स नेपाल",
      news_source_suryadainik: "सुर्या दैनिक",
      news_source_onlinekhabar: "अनलाइनखबर",

      news1_tag: "बालिका सुरक्षा र न्याय",
      news1_date: "२०८३ भदौ",
      news1_title: "बालिका गरिमा चौधरी प्रकरणमा बाराका सुरक्षा प्रमुखहरूलाई निलम्बन गर्न रन्जु साहको माग",
      news1_desc: "जितपुर सिमरामा ३ वर्षीया बालिका गरिमा चौधरीको जघन्य हत्यापछि बाराका प्रजिअ (CDO) र प्रहरी प्रमुखको चरम लापरबाही विरुद्ध छानबिन र निलम्बनको कडा माग गर्दै आम महिला मोर्चाकी इन्चार्ज रन्जु साहद्वारा प्रेस विज्ञप्ति जारी।",

      news2_tag: "भन्सार आन्दोलन र गणतन्त्र",
      news2_date: "१५ जेठ २०८२",
      news2_title: "दलतन्त्रले जनताको बलिदानीबाट प्राप्त भएको उपलब्धी चकनाचुर पारिदियोः आजपा नेतृ साह",
      news2_desc: "१८औं गणतन्त्र दिवसका अवसरमा आयोजित राष्ट्रिय अन्तरक्रियामा सम्बोधन गर्दै भन्सारको लुटकारी प्रावधानविरुद्ध आफूहरूले ८ महिना निरन्तर सङ्घर्ष गरेको स्मरण र सरकारलाई सम्झौता इमानदारीपूर्वक कार्यान्वयन गर्न कडा चेतावनी।",

      news3_tag: "मधेस सुख्खा र खानेपानी",
      news3_date: "१६ साउन २०८२",
      news3_title: "आजपा नेतृ साहको प्रधानमन्त्री ओलीलाई चेतावनी : तत्काल राहत प्याकेज नदिए मधेशी जनता चुप लागेर बस्दैनन्",
      news3_desc: "मधेसमा चरम खडेरी र खानेपानी अभावले नागरिक आक्रान्त हुँदा सरकारले ५०० डिप बोरिङको आश्वासन मात्र दिएकोमा आपत्ति जनाउँदै तत्काल राहत प्याकेज उपलब्ध गराउन प्रधानमन्त्रीसमक्ष सशक्त माग।",

      news4_tag: "पर्सा-२ जनसम्पर्क",
      news4_date: "१९ पुस २०८२",
      news4_title: "पर्सा–२ मा चुनावी तयारी तीव्र : गाउँ घरका जनतासँग महिला नेतृ रन्जू साहको सक्रियता",
      news4_desc: "वीरगन्ज महानगरपालिका वडा नं. २६ सुगौली बीर्ता टोलमा स्थानीय बासिन्दासँग प्रत्यक्ष जनसंवाद, ६१ सदस्यीय जनपरिचालन कमिटी गठन र विकास तथा सुशासनका पक्षमा प्रतिबद्धता।",

      news5_tag: "उम्मेदवार प्रोफाइल",
      news5_date: "निर्वाचन २०८२",
      news5_title: "रञ्जुकुमारी साह — पर्सा क्षेत्र नं. २, प्रतिनिधि सभा उम्मेदवार | निर्वाचन २०८२",
      news5_desc: "नेपालको अग्रणी राष्ट्रिय समाचार पोर्टल अनलाइनखबरको आधिकारिक निर्वाचन अभिलेखमा पर्सा क्षेत्र नं. २ बाट आम जनता पार्टी (चुनाव चिन्ह: मोबाइल फोन) का तर्फबाट रन्जु साहको केन्द्रीय उम्मेदवारी प्रोफाइल।",

      // Media & Social Hub
      media_badge: "सञ्चार तथा गतिविधि",
      media_title_p1: "मिडिया र ",
      media_title_highlight: "सामाजिक सञ्जाल",
      media_subtitle: "रन्जु साहका पछिल्ला सार्वजनिक अभिव्यक्ति, सभाहरू र सामाजिक सञ्जालमा जोडिनुहोस्।",
      social_fb_action: "फेसबुक पेज हेर्नुहोस्",
      social_ig_action: "इन्स्टाग्राममा जोडिनुहोस्",
      social_tt_action: "टिकटक भिडियो हेर्नुहोस्",

      gallery_filter_all: "सबै",
      gallery_filter_speech: "सार्वजनिक भाषण",
      gallery_filter_rally: "सभा तथा आन्दोलन",
      gallery_filter_press: "प्रेस तथा संवाद",

      gal1_badge: "पत्रकार सम्मेलन",
      gal1_title: "रिपोर्टर्स क्लबमा पत्रकार सम्मेलनलाई सम्बोधन गर्दै रन्जु साह",
      gal1_desc: "नागरिक अधिकार, सीमावर्ती न्याय र समसामयिक राजनीतिक विषयमा राष्ट्रिय सञ्चारमाध्यमका पत्रकारहरूसँग प्रत्यक्ष साक्षात्कार।",
      gal2_badge: "धरातलीय आन्दोलन",
      gal2_title: "भन्सार सुधार तथा भ्रष्टाचार विरोधी विशाल जनप्रदर्शन",
      gal2_desc: "भन्सार विभाग घेराउका क्रममा प्रहरी धरपकड र गिरफ्तारी बेहोर्दै सीमावर्ती जनताका लागि आम जनता पार्टीको झण्डासहित सडकमा उत्रिएर नेतृत्वदायी सङ्घर्ष।",
      gal3_badge: "न्याय र मानव अधिकार",
      gal3_title: "आरती साहको परिवारलाई न्याय दिलाउने आन्दोलनमा ऐक्यबद्धता",
      gal3_desc: "मधेसकी छोरी आरती साहको न्यायका लागि पीडित परिवारसँगै सडक धर्नामा बसी राज्यसमक्ष न्याय र कानुनी कारबाहीको सशक्त माग।",
      gal4_badge: "महिला सशक्तीकरण",
      gal4_title: "मधेसका ग्रामीण महिला तथा आमाहरूसँग प्रत्यक्ष संवाद",
      gal4_desc: "गाउँ-बस्तीका आमा, दिदीबहिनी तथा बालबालिकासँग शिक्षा, स्वास्थ्य र सामाजिक सशक्तीकरणका विषयमा आत्मीय भलाकुसारी।",
      gal5_badge: "घरदैलो अभियान",
      gal5_title: "पर्सा क्षेत्र नं. २ मा घरदैलो जनसम्पर्क अभियान",
      gal5_desc: "गाउँका जेष्ठ नागरिक तथा स्थानीय बासिन्दासँग हात जोडेर आशिर्वाद ग्रहण र आम जनता पार्टीको नीति तथा मोबाइल फोन चिन्हबारे जानकारी।",
      gal6_badge: "सार्वजनिक सम्बोधन",
      gal6_title: "सार्वजनिक कार्यक्रममा आफ्नो धारणा राख्दै रन्जु साह",
      gal6_desc: "सुशासन, नागरिक अधिकार र आम जनता पार्टीको जनपक्षीय नीतिबारे औपचारिक सभामा ओजस्वी सम्बोधन।",

      // Direct Connect
      connect_badge: "बिचौलिया बिना सिधा पहुँच",
      connect_title_p1: "नागरिकसँग ",
      connect_title_highlight: "प्रत्यक्ष संवाद",
      connect_subtitle: "कुनै लामो फाराम भर्नुपर्दैन। रन्जु साहसँग फोन, ह्वाट्सएप वा इमेलमार्फत सिधै सम्पर्क गर्नुहोस्।",
      avail_open_text: "कार्यालय हाल खुला छ (नेपाल समय)",
      avail_closed_text: "कार्यालय समय: बिहान ९:०० देखि साँझ ६:०० सम्म",
      avail_badge: "नेपाल समय: बिहान ९:०० – साँझ ६:००",

      card_wa_title: "ह्वाट्सएप (WhatsApp)",
      card_wa_desc: "सन्देश, कागजात वा गुनासो तुरुन्तै सिधै पठाउनुहोस्।",
      card_wa_btn: "ह्वाट्सएप खोल्नुहोस्",
      card_call_title: "प्रत्यक्ष फोन कल",
      card_call_desc: "तत्काल कुराकानी र सार्वजनिक समस्याका लागि सिधा नम्बर।",
      card_call_btn: "अहिले फोन गर्नुहोस्",
      card_call_copy: "नम्बर कपी गर्नुहोस्",
      card_mail_title: "इमेल (Email)",
      card_mail_desc: "औपचारिक पत्र, प्रेस विज्ञप्ति वा विस्तृत संवादका लागि।",
      card_mail_btn: "इमेल पठाउनुहोस्",
      card_mail_copy: "इमेल कपी गर्नुहोस्",

      outreach_hq_title: "पार्टी केन्द्रीय कार्यालय",
      outreach_hq_text: "आम जनता पार्टी (आजपा) केन्द्रीय सचिवालय, काठमाडौँ, नेपाल।",
      outreach_constituency_title: "कार्यक्षेत्र सम्पर्क",
      outreach_constituency_text: "पर्सा क्षेत्र नं. २, वीरगन्ज तथा आसपासका पालिकाहरू, मधेस प्रदेश।",
      outreach_origin_title: "स्थायी निवास",
      outreach_origin_text: "यमुनामाई गाउँपालिका, रौतहट, मधेस प्रदेश, नेपाल।",

      // Footer
      footer_bio: "रन्जु साह समाजशास्त्री (त्रि.वि.) तथा आम जनता पार्टीकी केन्द्रीय कार्यालय सचिव हुनुहुन्छ, जो सामाजिक न्याय र पारदर्शी जनसेवाका लागि समर्पित हुनुहुन्छ।",
      footer_nav_title: "मुख्य पृष्ठहरू",
      footer_connect_title: "सम्पर्क र सामाजिक सञ्जाल",
      footer_symbol_title: "आधिकारिक चुनाव चिन्ह",
      footer_symbol_desc: "रातो पृष्ठभूमिमा सेतो मोबाइल फोन र तरङ्ग (आम जनता पार्टी)।",
      footer_symbol_title_card: "मोबाइल फोन चिन्ह",
      footer_symbol_desc_card: "आम जनता पार्टी (आजपा)",
      footer_copyright: "Copyright claimed by Saiman. All rights reserved.",
      footer_designer: "Designed by Saiman Sah.",

      // Toast Messages
      toast_copied_phone: "फोन नम्बर कपी गरियो: +977 9843384839",
      toast_copied_email: "इमेल ठेगाना कपी गरियो: sahranju6@gmail.com"
    }
  };

  // State Management
  let currentLang = localStorage.getItem('ranju_sah_lang') || 'ne';
  let currentTheme = localStorage.getItem('ranju_sah_theme') || 'light';
  let currentGalleryIndex = 0;

  // DOM Elements
  const langEnBtn = document.getElementById('lang-en-btn');
  const langNeBtn = document.getElementById('lang-ne-btn');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const progressBar = document.getElementById('scroll-progress');
  const scrollTopBtn = document.getElementById('fab-scroll-top');
  const toastEl = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-message');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  // Availability Indicator
  const availIndicator = document.getElementById('avail-indicator');
  const availStatusText = document.getElementById('avail-status-text');

  // 2. Theme Engine (Light / Dark)
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ranju_sah_theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = (theme === 'dark') 
        ? '<i class="fa-solid fa-sun" title="Switch to Light Mode"></i>' 
        : '<i class="fa-solid fa-moon" title="Switch to Dark Mode"></i>';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = (currentTheme === 'dark') ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // 3. Language Switcher Engine
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('ranju_sah_lang', lang);

    if (lang === 'en') {
      langEnBtn.classList.add('active');
      langNeBtn.classList.remove('active');
      document.body.classList.remove('lang-ne');
      document.documentElement.lang = 'en';
    } else {
      langNeBtn.classList.add('active');
      langEnBtn.classList.remove('active');
      document.body.classList.add('lang-ne');
      document.documentElement.lang = 'ne';
    }

    // Apply translations across all data-i18n elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    updateOfficeHoursStatus();
  }

  if (langEnBtn && langNeBtn) {
    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langNeBtn.addEventListener('click', () => setLanguage('ne'));
  }

  // 4. Scroll Progress & Scroll-to-Top Button
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;

    if (scrollTopBtn) {
      if (window.scrollY > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. Mobile Navigation Drawer
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      }
    });
  }

  // 6. Scroll Spy Active Nav Highlighting
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add('active');
        } else {
          targetLink.classList.remove('active');
        }
      }
    });
  });

  // 7. Real-Time Nepal Standard Time (NPT) Office Hours Status (9 AM - 6 PM NPT)
  function updateOfficeHoursStatus() {
    if (!availIndicator || !availStatusText) return;

    const now = new Date();
    // UTC offset for Nepal Standard Time is +5h 45m (+345 minutes)
    const utcMinutes = now.getTime() + (now.getTimezoneOffset() * 60000);
    const nepalDate = new Date(utcMinutes + (345 * 60000));

    const nepalHours = nepalDate.getHours();
    const nepalMinutes = nepalDate.getMinutes();
    const timeInHours = nepalHours + (nepalMinutes / 60);

    const isOpen = (timeInHours >= 9 && timeInHours < 18);

    if (isOpen) {
      availIndicator.classList.remove('closed');
      availStatusText.textContent = translations[currentLang].avail_open_text;
    } else {
      availIndicator.classList.add('closed');
      availStatusText.textContent = translations[currentLang].avail_closed_text;
    }
  }

  // 8. Toast Notification Helper
  let toastTimer = null;
  function showToast(message) {
    if (!toastEl || !toastMsg) return;
    toastMsg.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3500);
  }

  // 9. Clipboard Copy Buttons
  const copyPhoneBtn = document.getElementById('copy-phone-btn');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('+9779843384839').then(() => {
        showToast(translations[currentLang].toast_copied_phone);
      }).catch(() => {
        showToast('+977 9843384839');
      });
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('sahranju6@gmail.com').then(() => {
        showToast(translations[currentLang].toast_copied_email);
      }).catch(() => {
        showToast('sahranju6@gmail.com');
      });
    });
  }

  // 10. Gallery Filtering & Lightbox with Next/Prev Controls
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  function openLightbox(index) {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentGalleryIndex = index;

    const item = galleryItems[index];
    const img = item.querySelector('.gallery-thumb-wrap img');
    const title = item.querySelector('.gallery-title');
    const desc = item.querySelector('.gallery-desc');

    if (lightboxModal && img && title && desc) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxTitle.textContent = title.textContent;
      lightboxDesc.textContent = desc.textContent;
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => openLightbox(currentGalleryIndex - 1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => openLightbox(currentGalleryIndex + 1));

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') openLightbox(currentGalleryIndex - 1);
      if (e.key === 'ArrowRight') openLightbox(currentGalleryIndex + 1);
    }
  });

  // 11. PWA Service Worker Registration
  if ('serviceWorker' in navigator && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  // Initial Boot
  applyTheme(currentTheme);
  setLanguage(currentLang);
  updateOfficeHoursStatus();
  setInterval(updateOfficeHoursStatus, 60000);
});
