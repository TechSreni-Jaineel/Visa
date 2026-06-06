const countryFlagData = {
  'Australia':        { code: 'au', color: '#00008B' },
  'Austria':          { code: 'at', color: '#ED2939' },
  'Belgium':          { code: 'be', color: '#2D2926' },
  'Brazil':           { code: 'br', color: '#009C3B' },
  'Canada':           { code: 'ca', color: '#FF0000' },
  'China':            { code: 'cn', color: '#DE2910' },
  'Czech Republic':   { code: 'cz', color: '#D7141A' },
  'Denmark':          { code: 'dk', color: '#C60C30' },
  'France':           { code: 'fr', color: '#0055A4' },
  'Germany':          { code: 'de', color: '#000000' },
  'Greece':           { code: 'gr', color: '#0D5EAF' },
  'Hungary':          { code: 'hu', color: '#436F4D' },
  'Iceland':          { code: 'is', color: '#003897' },
  'Ireland':          { code: 'ie', color: '#169B62' },
  'Italy':            { code: 'it', color: '#009246' },
  'Japan':            { code: 'jp', color: '#BC002D' },
  'Malta':            { code: 'mt', color: '#CF101A' },
  'Netherlands':      { code: 'nl', color: '#AE1C28' },
  'New Zealand':      { code: 'nz', color: '#00247D' },
  'Norway':           { code: 'no', color: '#EF2B2D' },
  'Poland':           { code: 'pl', color: '#DC143C' },
  'Portugal':         { code: 'pt', color: '#006600' },
  'South Africa':     { code: 'za', color: '#007A4D' },
  'South Korea':      { code: 'kr', color: '#003478' },
  'Spain':            { code: 'es', color: '#AA151B' },
  'Sweden':           { code: 'se', color: '#006AA7' },
  'Switzerland':      { code: 'ch', color: '#FF0000' },
  'Turkey':           { code: 'tr', color: '#E30A17' },
  'United Kingdom':   { code: 'gb', color: '#012169' },
  'United States':    { code: 'us', color: '#3C3B6E' },
  'Azerbaijan':       { code: 'az', color: '#0092BC' },
  'Bahrain':          { code: 'bh', color: '#CE1126' },
  'Egypt':            { code: 'eg', color: '#C8102E' },
  'Georgia':          { code: 'ge', color: '#FF0000' },
  'Indonesia':        { code: 'id', color: '#CE1126' },
  'Malaysia':         { code: 'my', color: '#CC0001' },
  'Morocco':          { code: 'ma', color: '#C1272D' },
  'Oman':             { code: 'om', color: '#DB161B' },
  'Qatar':            { code: 'qa', color: '#8D1B3D' },
  'Saudi Arabia':     { code: 'sa', color: '#006C35' },
  'Singapore':        { code: 'sg', color: '#EF3340' },
  'Sri Lanka':        { code: 'lk', color: '#8D153A' },
  'Thailand':         { code: 'th', color: '#A51931' },
  'United Arab Emirates': { code: 'ae', color: '#00732F' },
  'Vietnam':          { code: 'vn', color: '#DA251D' },
};

/* ═══════════════════════════════════════════════════════
   COMPREHENSIVE COUNTRY DATA
═══════════════════════════════════════════════════════ */
const countryData = {
  'Australia': {
    overview: "Australia is a vast continent-country in the Southern Hemisphere, celebrated for its stunning natural diversity — from the iconic Sydney Opera House and Bondi Beach to the awe-inspiring Uluru and the Great Barrier Reef. A leader in multicultural living, Australia draws millions of visitors each year with its world-class cities, ancient Aboriginal heritage, unique wildlife, and an enviable outdoor lifestyle.",
    visaTypes: ['Tourist (Subclass 600)', 'Business (Subclass 600)', 'Student (Subclass 500)'],
    keyInfo: "Indian nationals require a valid visa to visit Australia. Applications are lodged online via ImmiAccount or through the VFS Global centre in Mumbai, Delhi, or Chennai. The Tourist stream (Subclass 600) allows stays of up to 3, 6, or 12 months. Biometrics (fingerprints & photo) are mandatory and collected at the time of application. Police clearance may be required for stays over 12 months.",
    eligibility: "Valid Indian passport (minimum 6 months validity beyond the intended stay), sufficient financial means (approx. AUD 5,000–10,000 or equivalent), strong ties to India (employment, family, property), clear travel history, no serious criminal record, and genuine intention to return before visa expiry.",
    processing: "20–35 working days for tourist/business; 4–6 weeks for student visas.",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "Recent Passport-Size Photographs", "Completed Visa Application Form (ImmiAccount)", "Covering Letter (purpose of visit)", "Leave Letter from Employer", "Bank Statements (last 6 months)", "Income Tax Returns (last 3 years)", "Salary Slips (last 3 months)", "Hotel / Accommodation Proof", "Return Flight Itinerary", "Travel Insurance", "Overseas Travel Insurance", "Biometrics Enrollment"],
      business: ["Valid Passport (6+ months validity)", "Recent Passport-Size Photographs", "Completed Visa Application Form", "Covering Letter (Indian Company)", "Invitation Letter (Australian Company)", "Company Registration Documents", "Business Bank Statements (6 months)", "Personal Bank Statements (6 months)", "Income Tax Returns (3 years)", "Salary Slips / Proof of Income", "Overseas Medical Insurance", "Return Flight Tickets", "Biometrics Enrollment"],
      student: ["Valid Passport (covers full course duration)", "Confirmation of Enrolment (CoE) from Australian institution", "Genuine Temporary Entrant (GTE) Statement", "Academic Transcripts & Certificates", "English Proficiency Scores (IELTS/TOEFL/PTE)", "Statement of Purpose (SOP)", "Financial Evidence (AUD 21,041/year minimum)", "Bank Statements (last 6 months)", "Sponsorship Letter (if applicable)", "Overseas Student Health Cover (OSHC)", "Photographs", "Biometrics Enrollment"]
    }
  },
  'Austria': {
    overview: "Austria, nestled in the heart of Europe, is a land of imperial palaces, alpine grandeur, and unparalleled musical heritage. Vienna — its capital — is home to the Schönbrunn Palace, the Vienna State Opera, and some of the world's finest art museums. The Austrian Alps offer year-round adventure, while Salzburg enchants visitors as the birthplace of Wolfgang Amadeus Mozart.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Austria is part of the Schengen Area; Indian nationals can stay up to 90 days within any 180-day period on a Schengen visa. Applications are submitted at the Austrian Embassy or VFS Global. The visa allows travel across all 27 Schengen member states. Applications should be made 3–12 weeks before travel. Biometrics may be required at the consulate.",
    eligibility: "Valid Indian passport (minimum 3 months validity beyond return date, at least 2 blank pages), proof of sufficient funds (approx. €50–60/day), confirmed return ticket, travel insurance (minimum €30,000 medical coverage), confirmed accommodation, employment proof and leave approval, no prior Schengen visa refusals.",
    processing: "10–15 working days (standard); up to 30 days for complex applications.",
    docs: {
      tourist: ["Valid Passport (3+ months beyond return date)", "Visa Application Form (completed & signed)", "Recent Colour Photographs (35×45mm, white background)", "Covering Letter (purpose & itinerary)", "Leave Letter from Employer", "Hotel Booking Confirmation", "Return Air Ticket (confirmed)", "Bank Statements (last 6 months)", "Income Tax Returns (last 3 years)", "Salary Slips (last 3 months)", "Company Registration (if self-employed)", "Travel Medical Insurance (€30,000 minimum, Schengen-wide)"],
      business: ["Valid Passport", "Visa Application Form + Declaration", "Photographs", "Covering Letter (Indian Company letterhead)", "Invitation Letter from Austrian host company", "Financial Records – Personal (ITR, bank statements, salary slips)", "Financial Records – Company (if self-employed: GST, registration, balance sheet)", "Medical Insurance (€30,000 minimum)", "Return Flight Tickets", "Hotel / Accommodation Confirmation"],
      student: ["Valid Passport (covers full course duration)", "University / College Admission Letter", "Proof of Tuition Fee Payment", "Academic Transcripts & Mark Sheets", "German Language Proficiency Certificate (or English, if course is in English)", "Statement of Purpose (SOP)", "Bank Statements (personal & sponsor – last 6 months)", "Proof of Financial Guarantee (min. €900/month)", "Health Insurance (valid in Austria)", "Photographs", "Completed Student Visa Application Form", "Sponsorship Letter & Sponsor's Financial Documents (if applicable)"]
    }
  },
  'Belgium': {
    overview: "Belgium, a small yet richly layered nation in Western Europe, is famed for its medieval towns, world-class chocolate, waffles, and some of the finest beers on the planet. Brussels, the de facto capital of the European Union, blends grand Art Nouveau architecture with a cosmopolitan buzz. The historic cities of Bruges and Ghent offer breathtaking canals, guild halls, and centuries of Flemish artistry.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Belgium is a Schengen member state; Indian nationals may stay up to 90 days in any 180-day period. Applications are filed at the Belgian Embassy in New Delhi or the VFS centre. Belgium accepts applications up to 6 months before travel. Proof of passport validity of at least 3 months beyond the planned return date is mandatory.",
    eligibility: "Valid Indian passport with 3+ months validity beyond the return date, minimum 2 blank pages, sufficient financial means (approx. €95–100/day), confirmed return tickets, Schengen-wide travel insurance (€30,000), proof of accommodation, employment/business proof, and genuine intent to return to India.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Passport (valid 3+ months beyond return date)", "Recent Photographs", "Covering Letter (purpose of visit)", "Hotel & Travel Itinerary", "Bank Statements (last 6 months)", "Income Tax Returns or Company Documents", "Salary Slips (last 3 months)", "Travel / Medical Insurance (€30,000 minimum)", "Return Flight Ticket"],
      business: ["Passport (valid 3+ months beyond return date)", "Visa / Declaration Forms (signed)", "Photographs", "Covering Letter (Indian Company)", "Invitation Letter from Belgian Company", "Personal & Company Tax Documents (ITR)", "Bank Statements (personal & company)", "Salary Slips", "Medical Insurance", "Return Flight Ticket", "Company Registration Documents"],
      student: ["Valid Passport", "Admission Letter from Belgian University/Institution", "Proof of Tuition Fee Payment or Scholarship Letter", "Academic Transcripts & Diplomas", "French/Dutch/English Language Proficiency Proof", "Statement of Purpose", "Bank Statements (sponsor or personal – last 6 months)", "Proof of Accommodation in Belgium", "Health Insurance", "Photographs", "Sponsorship Letter (if applicable)"]
    }
  },
  'Brazil': {
    overview: "Brazil is South America's largest and most vibrant nation, a land of samba rhythms, Amazon rainforests, sun-drenched beaches, and Carnival spectacle. Rio de Janeiro dazzles with Christ the Redeemer and Copacabana Beach, while the Amazon basin offers some of the world's most biodiverse ecosystems. Brazil's rich mix of indigenous, African, and European cultures creates a uniquely warm and exuberant spirit.",
    visaTypes: ['Tourist', 'Business', 'Student'],
    keyInfo: "Indian nationals require a visa to visit Brazil. Applications are submitted at the Brazilian Embassy in New Delhi. From 2025, Brazil has introduced an e-visa option for some nationalities; however, Indians are currently required to submit applications at the consulate. The tourist visa allows a stay of up to 90 days and can be extended.",
    eligibility: "Valid Indian passport (minimum 6 months validity), sufficient financial proof for the duration of stay, confirmed return air ticket, hotel booking or invitation letter from a host in Brazil, no criminal record, and genuine purpose of visit.",
    processing: "10–20 working days.",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "Recent Passport-Size Photograph (white background)", "Completed Visa Application Form (signed)", "Covering Letter (purpose of visit)", "Bank Statements (last 6 months)", "Return Flight Ticket", "Hotel Booking / Accommodation Proof", "Travel Insurance"],
      business: ["Valid Passport", "Photographs", "Completed Visa Application Form", "Covering Letter (Indian Company)", "Invitation Letter (Brazilian Company)", "Company Registration / Business Documents", "Bank Statements (personal & company)", "Self-Employment Proof (if applicable)", "Return Flight Ticket"],
      student: ["Valid Passport", "Admission Letter from Brazilian Educational Institution", "Proof of Tuition Fee Payment", "Academic Transcripts", "Portuguese Language Proof (if applicable)", "Bank Statements (last 6 months)", "Sponsorship Letter (if applicable)", "Health Insurance", "Photographs", "Completed Student Visa Application Form"]
    }
  },
  'Canada': {
    overview: "Canada is a vast and breathtakingly diverse country stretching from the Atlantic to the Pacific and up to the Arctic. Famous for its natural wonders — Niagara Falls, Banff National Park, and the Northern Lights — Canada also offers world-class cities like Toronto, Vancouver, and Montreal. It is consistently ranked among the world's best destinations for quality of life, multicultural harmony, and natural beauty.",
    visaTypes: ['Temporary Resident Visa (Tourist)', 'Temporary Resident Visa (Business)', 'Study Permit (Student)'],
    keyInfo: "Indian nationals require a Temporary Resident Visa (TRV) to visit Canada. Applications are submitted online via the IRCC portal or at the VFS Global centre. Biometrics are mandatory for Indian passport holders (fee: CAD 85). The visa is typically issued for up to 10 years (multiple entry) or single entry. Canada also requires an Electronic Travel Authorization (eTA) for visa-exempt travellers; this does not apply to Indians.",
    eligibility: "Valid Indian passport (at least 6 months beyond intended stay), sufficient financial means (CAD 2,500–4,000 per month estimated), strong ties to India (job, family, property), clear travel history, no serious immigration violations, genuine intent to leave before visa expiry.",
    processing: "30–45 working days (standard); premium processing is not available for TRV.",
    docs: {
      tourist: ["Valid Passport + all old passports", "Recent Photographs (35×45mm)", "Completed IMM 5257 Application Form", "Covering Letter (purpose of visit)", "Leave Letter from Employer", "Bank Statements (last 6 months)", "Income Tax Returns (last 3 years)", "Salary Slips (last 3 months)", "Self-Employed Documents (if applicable)", "Return Flight Itinerary", "Hotel / Accommodation Proof", "Biometrics Fee (CAD 85)", "Visa Fee (CAD 100)"],
      business: ["Valid Passport + old passports", "Photographs", "IMM 5257 Application Form", "Covering Letter (Indian Company)", "Invitation Letter (Canadian Company)", "Business Registration Documents", "Company Bank Statements (6 months)", "Personal Bank Statements (6 months)", "Income Tax Returns", "Return Flight Itinerary", "Biometrics Fee", "Visa Fee"],
      student: ["Valid Passport", "Letter of Acceptance (LOA) from Designated Learning Institution (DLI)", "Proof of Tuition Fee Payment", "Academic Transcripts & Certificates", "English Proficiency (IELTS/TOEFL)", "Statement of Purpose", "Bank Statements (minimum CAD 10,000 beyond tuition)", "Sponsorship Letter & Financial Documents (if sponsored)", "Quebec Acceptance Certificate (CAQ) – for Quebec only", "Photographs", "Biometrics", "Study Permit Application Fee (CAD 150)"]
    }
  },
  'China': {
    overview: "China is one of the world's oldest civilisations and its most populous nation, offering an unparalleled blend of ancient heritage and modern dynamism. The Great Wall, the Forbidden City in Beijing, the Terracotta Army in Xi'an, and the karst landscapes of Guilin are among the most iconic sights on Earth. China's rapid economic transformation has made it a global powerhouse, while its cuisine, philosophy, and art continue to enchant the world.",
    visaTypes: ['Tourist (L Visa)', 'Business (M/F Visa)', 'Student (X Visa)'],
    keyInfo: "Indian nationals require a visa to visit China. Applications are submitted at the Chinese Visa Application Service Centre (CVASC) in Mumbai, Delhi, Kolkata, or Chennai. China categorises visas by purpose: L (tourism), M/F (business/trade), X1/X2 (student). From 2025, China has extended visa-free access for several nationalities but Indians are not yet included. Photos must meet strict specifications.",
    eligibility: "Valid Indian passport (6+ months validity, at least 2 blank pages), confirmed return tickets, hotel booking or confirmed itinerary, sufficient funds for the trip, and clear purpose of visit. Business travellers need official invitation from a Chinese entity.",
    processing: "4–7 working days (standard); express processing in 2–3 days available.",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "Old/Previous Passports", "Recent Photographs (48×33mm, white background)", "Covering Letter (purpose & itinerary)", "Completed Visa Application Form", "Flight Itinerary (confirmed)", "Day-to-Day Travel Itinerary", "Hotel Booking (all nights)", "Bank Statements (last 3–6 months)", "Income Proof (salary slips / ITR)"],
      business: ["Valid Passport", "Photographs", "Covering Letter (Indian Company)", "Invitation Letter from Chinese Company (with company chop)", "Business Registration / GST Certificate", "Bank Statements (personal & company)", "Return Flight Ticket", "Business License Copy of Chinese Company", "ID Proof of Chinese Signatory"],
      student: ["Valid Passport", "Admission Notice (JW201 or JW202 form) from Chinese Institution", "Physical Examination Record for Foreigners (Form JW202)", "Academic Transcripts & Certificates", "HSK Certificate (if Chinese-medium course)", "Bank Statements (sufficient funds)", "Sponsorship Letter (if applicable)", "Photographs", "Completed Student Visa Application Form (X1/X2)"]
    }
  },
  'Czech Republic': {
    overview: "The Czech Republic, often called Czechia, is a Central European gem renowned for its fairy-tale landscapes, medieval architecture, and world-famous Bohemian crystal and beer. Prague, the City of a Hundred Spires, enchants visitors with the Charles Bridge, Prague Castle, and the Old Town Square. Beyond the capital, Český Krumlov and the Bohemian countryside offer timeless beauty.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Long-Stay (Student)'],
    keyInfo: "Czech Republic is a Schengen member; Indian nationals can visit for up to 90 days in any 180-day period. Applications are submitted at the Czech Embassy in New Delhi or the VFS centre. The Czech Republic also has a National Visa (Type-D) for stays exceeding 90 days (study, work). Travel insurance is mandatory and must cover the entire Schengen zone.",
    eligibility: "Valid Indian passport (3+ months beyond return date), 2+ blank pages, proof of accommodation, return ticket, travel insurance (min. €30,000), sufficient financial means (approx. CZK 1,100/day), employment/business ties to India.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport (3+ months beyond return date)", "Photographs (35×45mm)", "Completed Visa Application Form", "Covering Letter", "Return Air Ticket", "Hotel / Accommodation Booking", "Bank Statements (last 6 months)", "Salary Slips / Income Proof", "Travel Insurance (€30,000, Schengen)"],
      business: ["Valid Passport", "Application Form", "Photographs", "Covering & Invitation Letters", "Financial Proof (personal & company)", "Travel Documents & Insurance", "Company Registration / Business Documents"],
      student: ["Valid Passport", "Acceptance Letter from Czech University", "Proof of Tuition Fee Payment", "Academic Transcripts (attested)", "Czech / English Language Proficiency Certificate", "Bank Statements (min. CZK 90,000 per year)", "Accommodation Proof in Czech Republic", "Health Insurance", "Photographs", "Statement of Purpose"]
    }
  },
  'Denmark': {
    overview: "Denmark, the southernmost of the Nordic countries, is a land of design brilliance, hygge (cosiness), and fairy-tale history — quite literally, as it was the birthplace of Hans Christian Andersen. Copenhagen, its vibrant capital, is famous for Nyhavn's colourful waterfront, the Little Mermaid statue, and Tivoli Gardens. Denmark consistently tops global indices for happiness, sustainability, and quality of life.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Denmark is a Schengen member. Indian nationals may visit for up to 90 days in 180 days. Applications are filed at the Danish Embassy or VFS Global. Denmark is also part of the Common Travel Area with the Faroe Islands and Greenland. Vaccine certificates may be requested in certain circumstances.",
    eligibility: "Valid Indian passport (3+ months beyond stay, 2 blank pages), confirmed return ticket, hotel bookings, travel insurance (€30,000 Schengen-wide), bank statements, salary slips / ITR, leave letter, and company registration if self-employed.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Colour Photographs", "Covering Letter", "Leave Letter from Employer", "Hotel Booking Confirmation", "Return Air Ticket", "Bank Statements (last 6 months)", "Salary Slips", "Income Tax Returns (last 3 years)", "Travel Medical Insurance (€30,000 Schengen)", "Company Registration Documents (if self-employed)", "Vaccine Certificate (if required)"],
      business: ["Valid Passport", "Visa Application Form", "Declaration Form", "Colour Photographs", "Covering Letter (Indian Company)", "Invitation Letter (Danish Company)", "Personal ITRs", "Company ITRs", "Personal Bank Statements", "Company Bank Statements", "Salary Slips", "Overseas Medical Insurance", "Return Air Ticket", "Company Registration Proof"],
      student: ["Valid Passport", "University Admission Letter", "Proof of Tuition Payment or Scholarship", "Academic Transcripts", "Danish / English Language Proficiency", "Bank Statements (min. DKK 5,000/month)", "Health Insurance", "Accommodation Proof", "Statement of Purpose", "Photographs"]
    }
  },
  'France': {
    overview: "France is arguably the world's most visited country, a timeless symbol of art, fashion, gastronomy, and romance. Paris — the City of Light — dazzles with the Eiffel Tower, the Louvre, and Notre-Dame Cathedral. Beyond the capital, the French Riviera, Loire Valley châteaux, Mont-Saint-Michel, and the lavender fields of Provence offer an extraordinary variety of experiences.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (VLS-TS)'],
    keyInfo: "France is a Schengen member; Indian nationals may stay up to 90 days in any 180-day period. Applications are submitted at the French Consulate or TLScontact visa centres in Mumbai, Delhi, Bengaluru, and other cities. France also issues a Long-Stay Visa equivalent to a Residence Permit (VLS-TS) for students. Employment documents and proof of leave are important for employed applicants.",
    eligibility: "Valid passport (3+ months beyond return date, 2 blank pages), confirmed return ticket, accommodation proof, travel insurance (€30,000), financial means (€120/day as a general estimate), employment/business ties, and genuine intent to return.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Recent Photographs", "Covering/Leave Letter from Employer", "Return Air Ticket", "Hotel / Accommodation Proof", "Bank Statements (last 3–6 months)", "Salary Slips / Employment Proof", "Travel Insurance (€30,000, Schengen-wide)"],
      business: ["Valid Passport", "Application & Declaration Forms", "Photographs", "Covering Letter (Indian Company)", "Invitation Letter from French company", "Personal & Company Documents (ITR, bank statements, registration)", "Return Ticket", "Travel Insurance"],
      student: ["Valid Passport", "Admission Letter from French institution (Campus France approved)", "Campus France Procedure Certificate", "Academic Transcripts", "French Language Proficiency (DELF/DALF) or English proficiency", "Proof of Funds (€615/month minimum)", "Bank Statements", "Accommodation Proof", "Health Insurance (student-specific)", "Photographs", "Statement of Purpose"]
    }
  },
  'Germany': {
    overview: "Germany is Europe's economic powerhouse and a nation of extraordinary cultural depth — from the medieval castles of the Rhine Valley and the fairy-tale Neuschwanstein Castle to world-renowned museums in Berlin and Munich's legendary Oktoberfest. Germany boasts the continent's most visited Christmas markets, a thriving arts scene, and some of Europe's finest engineering and automotive heritage.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Germany is a Schengen member. Indian nationals may stay up to 90 days in any 180-day period. Applications are submitted through VFS Global centres in Mumbai, Delhi, Chennai, Bengaluru, Hyderabad, and Kolkata. The German Embassy handles complex/national visa cases. Applications should be made 3 months in advance. Appointment slots can be scarce — book early.",
    eligibility: "Valid Indian passport (3+ months beyond return, 2+ blank pages), confirmed return ticket, hotel booking or accommodation proof, travel insurance (minimum €30,000 Schengen coverage), bank statements (last 6 months), ITR (last 3 years), salary slips, leave/NOC letter, and self-employment documentation if applicable.",
    processing: "10–15 working days; up to 30 days in peak season.",
    docs: {
      tourist: ["Valid Passport (3+ months beyond return date)", "Two Photographs (35×45mm, white background)", "Covering Letter + Leave Letter (if employed)", "Return Air Ticket (confirmed)", "Hotel / Accommodation Booking", "Bank Statements (last 6 months)", "Salary Slips (last 3 months)", "Income Tax Returns (last 3 years)", "Travel Medical Insurance (€30,000, Schengen)", "Company Registration (if self-employed / GST / MOA)"],
      business: ["Valid Passport", "Application Form + Signed Declaration", "Two Photographs", "Covering Letter (Indian Company letterhead)", "Invitation Letter + ID of German host", "Personal ITRs (last 3 years)", "Company ITRs (last 3 years)", "Bank Statements – Personal (6 months)", "Bank Statements – Company (6 months)", "Salary Slips (6 months)", "Company Registration / GST", "Return Air Ticket", "Overseas Medical Insurance (€30,000)"],
      student: ["Valid Passport", "University Admission Letter (Zulassungsbescheid)", "Proof of Tuition Payment or Blocked Account (€11,208/year – Deutsche Bank / Fintiba)", "Academic Transcripts (attested/apostilled)", "German Language Proficiency (TestDaF / DSH) or English proficiency", "Statement of Purpose", "Health Insurance (public German insurer)", "Accommodation Proof in Germany", "Photographs", "APS Certificate (mandatory for Indian students)", "Completed Student Visa Form"]
    }
  },
  'Greece': {
    overview: "Greece is the cradle of Western civilisation and one of the world's most beloved travel destinations. The Acropolis in Athens, the volcanic island of Santorini, the Palace of Knossos in Crete, and the monasteries of Meteora are just a few of Greece's extraordinary treasures. With its azure seas, sun-drenched islands, and legendary cuisine, Greece offers an experience that is at once ancient and deeply alive.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Greece is a Schengen member. Indian nationals may stay up to 90 days in any 180-day period. Applications are submitted at the Greek Embassy or VFS Global. Greece is a popular destination — apply early during peak summer season. All 27 Schengen states can be visited on a Greek Schengen visa.",
    eligibility: "Valid passport (3+ months beyond return, 2 blank pages), return ticket, accommodation proof, Schengen travel insurance (€30,000), bank statements showing sufficient funds, employment proof / leave letter.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Photographs", "Covering Letter", "Accommodation / Hotel Proof", "Return Air Ticket", "Bank Statements (last 6 months)", "Salary Slips / Employment Proof", "Company Registration (if self-employed)", "Travel Proof (itinerary)", "Medical Insurance (€30,000, Schengen)"],
      business: ["Valid Passport", "Photographs", "Forms & Declarations", "Covering Letter (Indian Company)", "Invitation Letter from Greek Company", "Financial Documents (personal & company)", "Employment Proof", "Company Registration Proof", "Return Air Ticket", "Medical Insurance"],
      student: ["Valid Passport", "Admission Letter from Greek University", "Proof of Tuition Payment", "Academic Transcripts", "Greek / English Language Proficiency Certificate", "Bank Statements (sufficient funds)", "Accommodation Proof", "Health Insurance", "Photographs", "Statement of Purpose"]
    }
  },
  'Hungary': {
    overview: "Hungary is a Central European treasure, celebrated for the stunning Budapest skyline straddling the Danube, its renowned thermal baths, and a vibrant café culture. The Hungarian Parliament Building, Buda Castle, and the Great Market Hall are among Budapest's most iconic landmarks. Hungary is also home to the Puszta (Great Hungarian Plain) and the wine regions of Eger and Tokaj.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Hungary is a Schengen member; Indian nationals may stay up to 90 days in 180 days. Applications are submitted at the Hungarian Embassy or VFS Global. Hungary also offers a National Visa (Type-D) for long-stay purposes. Income Tax Returns and employment proof are particularly important for Hungarian visa applications.",
    eligibility: "Valid Indian passport (3+ months beyond return), 2 blank pages, return ticket, hotel booking, bank statements, salary slips, ITR, leave letter, travel insurance (Schengen, €30,000).",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Photographs", "Covering Letter", "Employment Proof", "Hotel Booking Confirmation", "Return Air Ticket", "Bank Statements (last 6 months)", "Income Tax Returns", "Salary Slips", "Company / Business Documents", "Travel Medical Insurance (€30,000 Schengen)"],
      business: ["Valid Passport", "Photographs", "Visa Application Forms", "Covering Letter (Indian Company)", "Invitation Letter from Hungarian Entity", "Financial Documents (personal & company)", "Income Tax Returns", "Salary Slips", "Company Proof", "Medical Insurance", "Travel Itinerary"],
      student: ["Valid Passport", "University Admission Letter from Hungarian institution", "Proof of Tuition Payment or Scholarship", "Academic Transcripts", "Hungarian / English Language Proficiency", "Bank Statements (HUF 340,000/month equivalent)", "Health Insurance", "Accommodation Proof", "Photographs", "Statement of Purpose"]
    }
  },
  'Iceland': {
    overview: "Iceland, the 'Land of Fire and Ice', is one of the world's most dramatic and otherworldly destinations. This Nordic island nation is home to the Northern Lights, geysers (including the famous Geysir), powerful waterfalls like Gullfoss, black sand beaches, and active volcanoes. Reykjavík, the world's northernmost capital, is a hub of Scandinavian culture, design, and cuisine.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Iceland is a Schengen member despite not being an EU state. Indian nationals may stay up to 90 days in any 180-day period. Iceland visa applications for Indians are typically handled through the Norwegian Embassy (as Iceland's honorary consulate in India) or VFS Global. Travel insurance covering the Schengen area (minimum €30,000) is mandatory.",
    eligibility: "Valid Indian passport (3+ months validity beyond return date), at least 2 blank pages, confirmed return ticket, hotel/accommodation booking, Schengen travel insurance (€30,000), bank statements showing min. €100/day, employment proof, and leave letter.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport (3+ months beyond return)", "Recent Colour Photographs (35×45mm)", "Completed Schengen Visa Application Form", "Covering Letter (purpose & itinerary)", "Leave Letter from Employer", "Return Air Ticket", "Hotel / Accommodation Booking", "Bank Statements (last 6 months)", "Salary Slips (last 3 months)", "Income Tax Returns (last 3 years)", "Travel Medical Insurance (€30,000 Schengen-wide)", "Company Registration (if self-employed)"],
      business: ["Valid Passport", "Visa Application Form", "Photographs", "Covering Letter (Indian Company)", "Invitation Letter from Icelandic company", "Personal ITRs + Bank Statements", "Company ITRs + Company Bank Statements", "Salary Slips", "Medical Insurance (€30,000 Schengen)", "Return Air Ticket", "Company Registration Proof"],
      student: ["Valid Passport", "University Admission Letter from Icelandic institution", "Proof of Tuition Fee Payment or Scholarship", "Academic Transcripts & Certificates", "English or Icelandic Language Proficiency Proof", "Bank Statements (ISK 260,000/month or equivalent)", "Accommodation Proof in Iceland", "Health Insurance (valid in Iceland)", "Photographs", "Statement of Purpose", "Sponsor's Financial Documents (if applicable)"]
    }
  },
  'Ireland': {
    overview: "Ireland, the Emerald Isle, is a land of ancient myths, rolling green landscapes, dramatic coastal cliffs, and legendary hospitality. The Cliffs of Moher, the Ring of Kerry, the Book of Kells in Dublin, and the Giant's Causeway are just a few of Ireland's storied attractions. Dublin itself is a vibrant European capital rich in literary heritage — home of Joyce, Beckett, and Wilde.",
    visaTypes: ['Short Stay (C Visa – Tourist)', 'Short Stay (C Visa – Business)', 'Long Stay (D Visa – Student)'],
    keyInfo: "Ireland is NOT part of the Schengen Area — a separate Irish visa is required. Indian nationals need a Short Stay C Visa (tourism/business, up to 90 days) or Long Stay D Visa (study/work). Applications are submitted online via the Irish Immigration Service (INIS) portal. Processing can take 8–10 weeks. A VFS Global centre exists in Mumbai and Delhi. Foreign exchange proof may be required.",
    eligibility: "Valid passport (6+ months validity), strong financial proof, return ticket, accommodation confirmation, clear immigration history, employment/business ties to India, and genuine intent to leave Ireland before visa expiry.",
    processing: "8–10 weeks (allow ample time).",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "Online Visa Application Form (INIS)", "Recent Photographs", "Return / Onward Flight Ticket", "Covering Letter (purpose of visit)", "Hotel / Accommodation Proof", "Bank Statements (last 6 months – strong balance)", "Income Tax Returns (last 3 years)", "Salary Slips", "Personal Bank Statement", "Medical / Travel Insurance", "Financial Proof / Sponsorship Letter (if applicable)"],
      business: ["Valid Passport", "Online Visa Application Form", "Photographs", "Return / Onward Ticket", "Covering Letter (Indian Company)", "Invitation Letter & Business Documents from Irish Company", "Salary Slips / Personal ITRs", "Company ITRs", "Personal & Company Bank Statements", "Medical / Travel Insurance", "Foreign Exchange / Credit Card Statement"],
      student: ["Valid Passport (6+ months)", "Letter of Acceptance from Irish educational institution", "Proof of Tuition Fee Payment (or scholarship letter)", "Academic Transcripts & Certificates", "English Proficiency (IELTS/TOEFL)", "Statement of Purpose", "Bank Statements (€7,000/year minimum)", "Sponsorship Letter & Financial Proof (if sponsored)", "Accommodation Proof", "Health Insurance", "Photographs"]
    }
  },
  'Italy': {
    overview: "Italy is a living museum of Western art, history, and culture — a country where ancient Roman forums, Renaissance masterpieces, and Baroque fountains coexist with world-famous cuisine, fashion, and the dolce vita way of life. Rome's Colosseum, Florence's Uffizi Gallery, Venice's Grand Canal, and the Amalfi Coast represent just a fraction of Italy's extraordinary cultural and natural heritage.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Italy is a Schengen member. Indian nationals may stay up to 90 days in any 180-day period. Applications are submitted at the Italian Embassy or VFS Global centres across India. Italy's Schengen visa covers all 27 Schengen states. Applications for peak season (June–September) should be made well in advance due to high demand.",
    eligibility: "Valid passport (3+ months beyond return, 2+ blank pages), confirmed return ticket, accommodation proof, Schengen travel insurance (€30,000), bank statements showing sufficient funds, salary slips, ITR, employment/leave letter.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Passport-Size Photograph", "Covering Letter", "Hotel / Accommodation & Travel Proof", "Return Air Ticket", "Bank Statements (last 6 months)", "Salary Slips", "Income Tax Returns", "Company Registration (if self-employed)", "Travel Medical Insurance (€30,000 Schengen)"],
      business: ["Valid Passport", "Visa Application Form", "Photograph", "Covering Letter (Indian Company letterhead)", "Invitation Letter (Italian Company)", "Personal & Company Financial Documents (ITR, bank statements)", "Salary Slips", "Company Registration", "Return Air Ticket", "Medical Insurance"],
      student: ["Valid Passport", "University Admission Letter (pre-enrolment declaration)", "Declaration of Value (DoV) for academic certificates", "Academic Transcripts (attested)", "Italian Language Proficiency (if Italian-medium)", "Bank Statements or Proof of Scholarship (€5,824.91/year minimum)", "Accommodation Proof", "Health Insurance", "Photographs", "Statement of Purpose"]
    }
  },
  'Japan': {
    overview: "Japan is a land of profound contrasts — ancient Shinto shrines and zen gardens coexist with cutting-edge technology and pop culture. From the iconic Mount Fuji and the temples of Kyoto to the neon-lit streets of Tokyo's Shibuya and the serene beauty of cherry blossom season, Japan offers an unmatched travel experience rooted in precision, hospitality (omotenashi), and aesthetic perfection.",
    visaTypes: ['Tourist (Single/Multiple Entry)', 'Business (Short Stay)', 'Student (College / University)'],
    keyInfo: "Indian nationals require a visa to visit Japan. Applications are submitted at the Embassy of Japan in New Delhi or the Consulate-General in Mumbai, Kolkata, Chennai, or Bengaluru. Japan does not use VFS for Indian applicants — direct embassy submission is standard. A detailed day-by-day itinerary and confirmed hotel bookings are strictly required. Japan has a separate Designated Activities visa for specific purposes.",
    eligibility: "Valid Indian passport (6+ months validity), 2+ blank pages, detailed itinerary, confirmed hotel bookings, bank statements, sufficient funds, return ticket, and a genuine tourist or business purpose.",
    processing: "5–7 working days.",
    docs: {
      tourist: ["Valid Passport", "Completed Visa Application Form", "Recent Photographs (45×45mm, white background)", "Covering Letter (with day-to-day itinerary)", "Hotel Bookings for all nights", "Return / Onward Flight Booking", "Bank Statements (last 6 months)", "Salary Slips / Income Proof", "Financial Proof (sufficient balance)"],
      business: ["Valid Passport", "Visa Application Form", "Photographs", "Covering Letter (Indian Company)", "Invitation Letter from Japanese Company", "Guarantee Letter from Japanese Company", "Schedule of Stay in Japan", "Japanese Company Registration Documents", "Financial Proof (India)", "Company Registration Proof (India)", "Return Flight Booking"],
      student: ["Valid Passport", "Certificate of Eligibility (COE) issued by Japanese immigration", "Admission Letter from Japanese institution", "Academic Transcripts & Certificates", "Japanese Language Proficiency Certificate (JLPT) if applicable", "Bank Statements (JPY 2,000,000 equivalent)", "Sponsorship / Guarantee Letter", "Photographs", "Completed Student Visa Application Form"]
    }
  },
  'Malta': {
    overview: "Malta, a tiny archipelago in the heart of the Mediterranean, punches far above its weight in history, culture, and natural beauty. The ancient city of Valletta — a UNESCO World Heritage Site — the prehistoric Ħaġar Qim temples, the Azure Window of Gozo, and the fortified medieval city of Mdina make Malta one of Europe's most historically rich destinations per square kilometre.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Malta is a Schengen member. Indian nationals may stay up to 90 days in any 180-day period. Applications are filed at the Maltese Embassy or through a designated VFS Global centre. Malta's Schengen visa covers all 27 Schengen states. Malta is also increasingly popular as a study destination for its English-medium education system.",
    eligibility: "Valid passport (3+ months beyond return), 2+ blank pages, return ticket, accommodation proof, travel insurance (€30,000 Schengen), sufficient financial means, employment/leave documentation.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Photographs", "Covering Letter", "Hotel & Travel Proof", "Bank Statements (last 6 months)", "Salary Slips / Income Tax Returns", "Company Registration Proof (if self-employed)", "Travel Medical Insurance (€30,000 Schengen)"],
      business: ["Valid Passport", "Visa Application + Declaration Form", "Photographs", "Covering Letter (Indian Company)", "Invitation Letter from Maltese Company", "Personal Income Tax Papers", "Company Income Tax Papers", "Personal Bank Statements", "Company Bank Statements", "Salary Slips", "Return Air Ticket", "Company Registration Proof"],
      student: ["Valid Passport", "Admission Letter from Maltese institution", "Proof of Tuition Fee Payment", "Academic Transcripts", "English Language Proficiency (IELTS/Cambridge)", "Bank Statements (€11,000/year minimum)", "Accommodation Proof", "Health Insurance", "Photographs", "Statement of Purpose"]
    }
  },
  'Netherlands': {
    overview: "The Netherlands is a country of extraordinary character — famous for tulip fields, windmills, masterwork paintings by Rembrandt and Vermeer, and an extensive network of canals in its capital Amsterdam. The Van Gogh Museum, Anne Frank House, Keukenhof Gardens, and the Rijksmuseum draw millions of visitors. Dutch design, cycling culture, and progressive society are equally part of the country's unique identity.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (MVV + Residence Permit)'],
    keyInfo: "The Netherlands is a Schengen member. Indian nationals may stay up to 90 days. Applications are filed at the Dutch Embassy or VFS Global. The Netherlands handles applications for Schengen visas on behalf of several other countries where Dutch embassies represent multiple member states. A detailed declaration of purpose may be required.",
    eligibility: "Valid passport (3+ months beyond return, 2+ blank pages), return ticket, confirmed accommodation, Schengen travel insurance (€30,000), bank statements, salary slips, ITR, leave letter, employment ties.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Photographs", "Covering Letter", "Leave Letter (if employed)", "Hotel Booking Confirmation", "Return Air Ticket", "Bank Statements – Personal & Company (last 6 months)", "Salary Slips", "Personal & Company ITRs", "Overseas Medical Insurance (€30,000 Schengen)", "Company Registration (if self-employed)"],
      business: ["Valid Passport", "Visa Application Form", "Declaration Form", "Photographs", "Covering Letter (Indian Company)", "Invitation Letter from Dutch Company + ID of host", "Personal ITRs", "Company ITRs", "Personal Bank Statement", "Company Bank Statement", "Salary Slips", "Overseas Medical Insurance", "Return Air Ticket", "Company Registration Copy"],
      student: ["Valid Passport", "Acceptance Letter from Dutch university (MVV required for stays > 90 days)", "Proof of Tuition Fee Payment", "Academic Transcripts (certified)", "Dutch / English Language Proficiency Proof", "Bank Statements (€870/month minimum)", "Health Insurance (Dutch public insurer preferred)", "Accommodation Proof", "Photographs", "Statement of Purpose"]
    }
  },
  'New Zealand': {
    overview: "New Zealand, a remote island nation in the southwestern Pacific, is one of the world's most spectacular natural destinations. Made famous globally by the Lord of the Rings trilogy, New Zealand's landscapes range from volcanic plateaus and geothermal fields to pristine fjords, snow-capped Alps, and ancient Māori cultural sites. Milford Sound, the Bay of Islands, and Tongariro National Park are among its crown jewels.",
    visaTypes: ['Visitor Visa (Tourist)', 'Business Visitor Visa', 'Student Visa'],
    keyInfo: "Indian nationals require a Visitor Visa to visit New Zealand. Applications are submitted online via Immigration New Zealand (INZ) or through VFS Global. The visitor visa allows a stay of up to 9 months. New Zealand and India do not have a visa-free arrangement. Biometrics may be required for some applicants.",
    eligibility: "Valid Indian passport (3+ months beyond intended departure), return ticket, sufficient funds (NZD 1,000/month minimum), accommodation proof, strong ties to India, genuine visitor intent.",
    processing: "10–20 working days.",
    docs: {
      tourist: ["Valid Passport (3+ months beyond return)", "Recent Photograph", "Completed Online Visa Application Form (INZ)", "Covering Letter (purpose & itinerary)", "Leave Letter from Employer", "Personal Bank Statements (last 6 months)", "Income Tax Returns", "Business / Company Documents (if self-employed)", "Hotel / Accommodation Booking", "Return Flight Itinerary", "Overseas Travel Insurance", "Minor Travel Requirements (if travelling with children)"],
      business: ["Valid Passport", "Photograph", "Completed Application Form", "Business Letter / Purpose of Visit", "Invitation Letter from New Zealand Entity", "Financial Proof (applicant)", "Return Flight Itinerary"],
      student: ["Valid Passport", "Offer of Place from New Zealand educational institution", "Proof of Tuition Fee Payment", "Academic Transcripts & Certificates", "English Language Proficiency (IELTS/PTE/TOEFL)", "Statement of Purpose", "Bank Statements (NZD 15,000/year minimum)", "Sponsorship Letter & Financials (if sponsored)", "Health & Character Requirements (medical + police clearance)", "Accommodation Proof", "Photographs"]
    }
  },
  'Norway': {
    overview: "Norway is synonymous with natural splendour — a land of dramatic fjords, the Midnight Sun, the Northern Lights, and some of the world's most breathtaking coastal scenery. Geirangerfjord and Nærøyfjord are UNESCO World Heritage Sites. Oslo, the capital, is a compact and culturally rich city, home to the Nobel Peace Center, the Vigeland Sculpture Park, and the Munch Museum.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Norway is a Schengen member despite not being an EU member state. Indian nationals may stay up to 90 days in 180 days. Applications are submitted at the Norwegian Embassy or VFS Global centres. Iceland visa applications for Indians may also be routed through the Norwegian Embassy.",
    eligibility: "Valid passport (3+ months beyond return, 2+ blank pages), return ticket, accommodation proof, Schengen travel insurance (€30,000), bank statements, salary slips, ITR, leave letter.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Photographs", "Covering Letter / Leave Letter", "Return Air Ticket & Itinerary", "Accommodation / Hotel Proof", "Bank Statements (last 6 months)", "Salary Slips", "Income Tax Returns", "Travel Medical Insurance (€30,000 Schengen)"],
      business: ["Valid Passport", "Application Form + Declaration", "Photographs", "Covering Letter (Indian Company)", "Invitation Letter from Norwegian Host (with host ID)", "Personal & Company Financial Documents", "Company Registration Copy", "Return Air Ticket", "Medical Insurance"],
      student: ["Valid Passport", "Admission Letter from Norwegian institution", "Proof of Tuition Fee Payment or Scholarship", "Academic Transcripts", "Norwegian / English Language Proficiency", "Bank Statements (NOK 116,369/year equivalent)", "Accommodation Proof in Norway", "Health Insurance", "Photographs", "Statement of Purpose"]
    }
  },
  'Poland': {
    overview: "Poland is a Central European nation of dramatic history, remarkable resilience, and vibrant culture. Warsaw's Royal Castle and Old Town — rebuilt from WWII rubble — stand as testaments to Polish spirit. Kraków, one of Europe's best-preserved medieval cities, enchants visitors with Wawel Castle and the historic Jewish district of Kazimierz. The Wieliczka Salt Mine and the Białowieża Forest are UNESCO World Heritage Sites.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Poland is a Schengen member. Indian nationals may stay up to 90 days in any 180-day period. Applications are submitted at the Polish Consulate or VFS Global. Poland is increasingly a popular destination for Indian students due to its English-medium medical and engineering programmes.",
    eligibility: "Valid passport (3+ months beyond return, 2+ blank pages), return ticket, accommodation proof, Schengen travel insurance (€30,000), bank statements, salary slips, ITR, leave letter.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Photographs", "Covering Letter", "Hotel Booking Confirmation", "Bank Statements – Personal & Company (last 6 months)", "Salary Slips (last 3–6 months)", "IT Returns – Personal & Company (last 3 years)", "Return Air Ticket", "Company Registration / GST / MOA (if self-employed)", "Travel Medical Insurance (€30,000 Schengen)"],
      business: ["Valid Passport", "Visa Application Form + Declaration", "Photographs", "Covering Letter (Indian Company)", "Invitation Letter from Polish Entity", "Personal Income Tax Papers", "Company Income Tax Papers", "Personal Bank Statement", "Company Bank Statement", "Salary Slips", "Return Air Ticket", "Company Registration Copy", "Travel Medical Insurance"],
      student: ["Valid Passport", "Admission / Acceptance Letter from Polish university", "Proof of Tuition Payment or Scholarship", "Academic Transcripts (apostilled)", "English / Polish Language Proficiency Certificate", "Bank Statements (PLN 2,000/month minimum)", "Health Insurance", "Accommodation Proof", "Photographs", "Statement of Purpose"]
    }
  },
  'Portugal': {
    overview: "Portugal, on the western edge of Europe, is a country of explorers, fado music, azulejo tile art, and a coastline of extraordinary beauty. Lisbon, built across seven hills, is one of Europe's most charming and affordable capitals. The Douro Valley produces world-famous Port wine, while the Algarve's golden cliffs and beaches attract millions of sun-seekers. Portugal's Age of Discovery legacy is visible in its magnificent Manueline architecture.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Portugal is a Schengen member. Indian nationals may stay up to 90 days in 180 days. Applications are filed at the Portuguese Embassy or VFS Global. Portugal also offers a Digital Nomad Visa and a Golden Visa (residence programme), but standard tourism/business applies to short-stay Schengen visas.",
    eligibility: "Valid passport (3+ months beyond return), 2 blank pages, return ticket, accommodation proof, Schengen insurance (€30,000), bank statements, salary slips, ITR.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Photographs", "Covering Letter", "Hotel & Travel Proof", "Bank Statements (last 6 months)", "Salary Slips", "Income Tax / Tax Documents", "Medical Insurance (€30,000 Schengen)", "Company Registration Copy (self-employed)"],
      business: ["Valid Passport", "Online Application Form + Declaration", "Photographs", "Covering Letter (India)", "Invitation Letter (Portuguese Company)", "Personal Tax Documents", "Company Tax Documents", "Personal Bank Statements", "Company Bank Statements", "Salary Slips", "Return Air Ticket", "Medical Insurance", "Company Registration"],
      student: ["Valid Passport", "Acceptance Letter from Portuguese University", "Proof of Tuition Fee Payment", "Academic Transcripts (apostilled)", "Portuguese / English Language Proficiency", "Bank Statements (€760/month minimum)", "Accommodation Proof", "Health Insurance", "Photographs", "Statement of Purpose"]
    }
  },
  'South Africa': {
    overview: "South Africa is a nation of staggering diversity — from the iconic Table Mountain overlooking Cape Town and the wildlife-rich plains of Kruger National Park to the Winelands of Stellenbosch and the vibrant culture of Johannesburg. The 'Rainbow Nation' has a complex and fascinating history, and its blend of eleven official languages, varied landscapes, and world-class wildlife make it a truly unique destination.",
    visaTypes: ['Tourist Visa', 'Business Visa', 'Student Visa'],
    keyInfo: "Indian nationals require a visa to visit South Africa. Applications are submitted at the South African High Commission in New Delhi or the Consulate-General in Mumbai. South Africa does not currently use a VFS centre for Indian applicants — direct consulate submission is required. Yellow fever vaccination proof may be required if travelling from/through certain African countries.",
    eligibility: "Valid passport (30+ days beyond return date, 2+ blank pages), return ticket, accommodation proof, bank statements, sufficient financial means, no criminal record, Yellow Fever certificate (if applicable).",
    processing: "7–10 working days.",
    docs: {
      tourist: ["Valid Passport (30+ days beyond intended departure)", "Recent Photographs", "Completed Visa Application Form (BI-84)", "Covering Letter (purpose of visit)", "Return Air Ticket", "Hotel / Accommodation Proof", "Bank Statements (last 3 months)", "Salary Slips / Financial Proof", "Yellow Fever Certificate (if applicable)", "Travel Insurance"],
      business: ["Valid Passport", "Visa Application Form (BI-84)", "Photographs", "Covering Letter (Indian Company)", "Invitation Letter from South African company + ID of host", "Financial Proof (personal & company bank statements, ITR)", "Hotel + Return Flight", "Company Registration Proof (India)"],
      student: ["Valid Passport", "Admission Letter from South African institution", "Proof of Tuition Fee Payment or Scholarship", "Academic Transcripts & Certificates", "Bank Statements (ZAR 8,000/month equivalent)", "Sponsorship Letter (if applicable)", "Accommodation Proof in South Africa", "Medical Insurance", "Photographs", "Statement of Purpose", "Proof of Parental/Guardian Consent (if under 18)"]
    }
  },
  'South Korea': {
    overview: "South Korea is a dynamic East Asian nation that seamlessly blends ancient Confucian traditions with world-leading technology, K-pop culture, and exceptional cuisine. Seoul — one of Asia's most vibrant megacities — is home to the UNESCO-listed Changdeokgung Palace, the futuristic Dongdaemun Design Plaza, and some of the world's best street food. South Korea's dramatic landscapes, from Jeju Island to the DMZ, add to its allure.",
    visaTypes: ['Tourist (C-3 Visa)', 'Business (C-3 Visa)', 'Student (D-2/D-4 Visa)'],
    keyInfo: "Indian nationals require a visa to visit South Korea. Applications are submitted at the Embassy of the Republic of Korea in New Delhi or the Consulate-General in Mumbai or Chennai. South Korea has streamlined its visa application process and appointment wait times are generally short. Multiple-entry visas may be available for frequent travellers.",
    eligibility: "Valid Indian passport (6+ months validity), return ticket, hotel booking, bank statements, salary slips, income tax returns, sufficient financial means, and genuine tourist or business purpose.",
    processing: "5–7 working days.",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "Photographs (35×45mm, white background)", "Completed Visa Application Form", "Covering / Leave Letter from Employer", "Hotel Booking + Travel Itinerary", "Income Tax Returns (last 3 years)", "Bank Statements (last 6 months)", "Salary Slips (last 3 months)", "Travel Insurance (recommended)"],
      business: ["Valid Passport", "Photographs", "Visa Application Form", "Covering Letter (Indian Company)", "Invitation Letter from Korean Entity (with company details)", "Korean Entity Registration Proof", "Personal ITRs & Bank Statements", "Company Bank Statements", "Salary Slips"],
      student: ["Valid Passport", "Admission Letter from Korean university/language school", "Standard of Admission (Certificate of Admission)", "Academic Transcripts & Certificates", "TOPIK (Korean) or English proficiency certificate", "Bank Statements (KRW 9,000,000 minimum per semester)", "Sponsorship Letter & Financials (if sponsored)", "Photographs", "Completed Student Visa Application Form (D-2/D-4)"]
    }
  },
  'Spain': {
    overview: "Spain is a country of passionate contrasts — from the Sagrada Família and Gaudí's surreal architecture in Barcelona to the grandeur of the Alhambra in Granada, the Prado Museum in Madrid, and the sun-drenched beaches of the Costa del Sol. Spanish culture is synonymous with flamenco, bullfighting, tapas, La Tomatina, and a zest for life (la siesta included). Spain is also the 3rd most visited country in the world.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Spain is a Schengen member. Indian nationals may stay up to 90 days in any 180-day period. Applications are submitted at the Spanish Consulate or VFS Global. Spain recommends applying at the consulate of the main destination country if visiting multiple Schengen states. Peak season applications (June–September) should be submitted well in advance.",
    eligibility: "Valid passport (3+ months beyond return, 2+ blank pages), return ticket, accommodation proof, Schengen travel insurance (€30,000), bank statements, salary slips, ITR, leave letter.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Photographs", "Covering Letter", "Accommodation / Hotel Proof", "Bank Statements (last 6 months)", "Salary Slips (last 3 months, if employed)", "ITRs (last 3 years, if applicable)", "Travel Medical Insurance (€30,000 Schengen)", "Return Air Ticket", "Company Documents (if self-employed)"],
      business: ["Valid Passport", "Application Form + Declaration", "Photographs", "Covering Letter (Indian Company letterhead)", "Invitation Letter (Spanish Company)", "Personal ITRs", "Company ITRs", "Personal Bank Statement", "Company Bank Statement", "Salary Slips", "Return Air Ticket", "Company Registration Copy", "Travel Insurance"],
      student: ["Valid Passport", "University Admission Letter", "Proof of Tuition Payment or Scholarship", "Academic Transcripts (apostilled)", "Spanish Language Proficiency (DELE) or English (if course in English)", "Bank Statements (€6,000/year minimum)", "Accommodation Proof", "Health Insurance (Spanish public insurer or equivalent)", "Photographs", "Statement of Purpose", "Consent of Parents / Legal Guardian (if under 18)"]
    }
  },
  'Sweden': {
    overview: "Sweden, the largest of the Nordic countries, is a land of minimalist design, towering forests, thousands of lakes, and a deep respect for nature (the concept of lagom — 'just the right amount' — defines Swedish philosophy). Stockholm, spread across 14 islands, is one of Europe's most beautiful capitals. The Northern Lights, the ABBA Museum, Drottningholm Palace, and the Vasa Museum are among Sweden's iconic highlights.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Residence Permit)'],
    keyInfo: "Sweden is a Schengen member. Indian nationals may stay up to 90 days in any 180-day period. Applications are filed at the Swedish Embassy or VFS Global. Sweden also issues national residence permits for studies lasting more than 90 days, applied through the Swedish Migration Agency (Migrationsverket).",
    eligibility: "Valid passport (3+ months beyond return, 2+ blank pages), return ticket, accommodation proof, Schengen insurance (€30,000), bank statements, salary slips, ITR, leave letter.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Visa Application Form", "Photographs", "Covering Letter", "Confirmed Hotel Bookings", "Return Air Ticket", "Personal Bank Statements (last 6 months)", "Salary Slips / ITRs", "Medical Insurance (€30,000 Schengen)", "Travel Proof"],
      business: ["Valid Passport", "Visa Application Form", "Photographs", "Covering Letter (Indian Company)", "Invitation Letter from Swedish company", "Company / Personal Financial Documents", "Bank Statements", "Travel Proof", "Medical Insurance", "Company Registration Proof"],
      student: ["Valid Passport", "Admission Decision from Swedish University", "Proof of Tuition Payment or Scholarship Letter", "Academic Transcripts & Certificates", "English / Swedish Language Proficiency", "Proof of Funds (SEK 8,568/month)", "Health Insurance", "Accommodation Proof", "Photographs", "Statement of Purpose"]
    }
  },
  'Switzerland': {
    overview: "Switzerland is the jewel of the Alps — a small, landlocked nation of staggering natural beauty, precision engineering, luxury watchmaking, and exquisite chocolate. Zermatt and the Matterhorn, the Jungfrau region, Lake Geneva, the Rhine Falls, and the old city of Bern (a UNESCO World Heritage Site) are among Switzerland's treasured landmarks. Geneva hosts numerous international organisations, adding a cosmopolitan dimension to the Swiss experience.",
    visaTypes: ['Schengen Tourist', 'Schengen Business', 'National Student (Type-D)'],
    keyInfo: "Switzerland is a Schengen member despite not being an EU state. Indian nationals may stay up to 90 days in any 180-day period on a Schengen visa. Applications are submitted at the Swiss Embassy in New Delhi or VFS Global. Switzerland is particularly popular as a transit destination for Indian travellers exploring multiple European countries.",
    eligibility: "Valid passport (3+ months beyond return, 2+ blank pages), return ticket, accommodation proof, Schengen insurance (€30,000), bank statements, salary slips, ITR, leave letter.",
    processing: "10–15 working days.",
    docs: {
      tourist: ["Valid Passport", "Photographs", "Covering Letter", "Hotel/Flight Confirmation", "Bank Statements (last 6 months)", "Salary Slips", "Personal & Company ITRs", "Company Documents (if self-employed)", "Medical Insurance (€30,000 Schengen)"],
      business: ["Valid Passport", "Application + Declaration Forms", "Photographs", "Covering & Invitation Letters", "Personal ITRs", "Company ITRs", "Personal Bank Statement", "Company Bank Statement", "Salary Slips", "Return Air Ticket", "Company Registration", "Medical Insurance"],
      student: ["Valid Passport", "Admission Letter from Swiss University (public or accredited private)", "Proof of Tuition Fee Payment", "Academic Transcripts (apostilled)", "German / French / Italian / English Language Proficiency", "Bank Statements (CHF 21,000/year minimum)", "Health Insurance (Swiss obligatory insurer)", "Accommodation Proof", "Photographs", "Statement of Purpose"]
    }
  },
  'Turkey': {
    overview: "Turkey is a transcontinental nation straddling Europe and Asia, a land where East meets West in the most spectacular fashion. Istanbul's Hagia Sophia, Blue Mosque, and Grand Bazaar are world-famous; Cappadocia's fairy chimneys and hot-air balloon rides are bucket-list experiences. The ruins of Ephesus, the cotton terraces of Pamukkale, and the turquoise coast make Turkey one of the Mediterranean's most compelling destinations.",
    visaTypes: ['Tourist E-Visa', 'Business Visa', 'Student Visa'],
    keyInfo: "Indian nationals can obtain a Turkey e-Visa online at evisa.gov.tr (single-entry, 30 days stay, up to 3 months validity). The e-Visa process takes 24–72 hours. For longer stays, business or student visas must be applied for at the Turkish Consulate or VFS Global. NOC for children travelling with one parent or with non-family adults is required.",
    eligibility: "Valid Indian passport (minimum 6 months validity beyond the intended date of entry), a return ticket, sufficient funds for stay (USD 50/day estimated), confirmed accommodation, and a valid credit/debit card for e-Visa payment.",
    processing: "E-Visa: 24–72 hours online. Sticker Visa: 7–14 working days.",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "Application Form / e-Visa printout", "Recent Photographs", "Covering / Declaration Letter", "Indian Company Proof (if self-employed)", "Leave / NOC Letter (if employed)", "NOC for Children (if applicable)", "Personal Bank Statement (last 3 months)", "Hotel Booking & Travel Itinerary", "Return Air Ticket", "Travel Insurance"],
      business: ["Valid Passport", "Photographs", "Visa Application Form", "Covering Letter (Indian Company)", "Invitation Letter from Turkish Company", "Indian Company Proof (GST / Registration)", "Personal & Company Bank Statements", "GST Certificate", "Salary Slips (if employed)", "Hotel Booking & Itinerary", "Travel Insurance", "Return Air Ticket"],
      student: ["Valid Passport", "University Acceptance Letter from Turkish institution", "Proof of Tuition Payment or Scholarship", "Academic Transcripts & Certificates", "Turkish Language Proficiency (Tömer/YÖS) or English proficiency", "Bank Statements (sufficient funds)", "Accommodation Proof", "Health Insurance", "Photographs", "Statement of Purpose"]
    }
  },
  'United Kingdom': {
    overview: "The United Kingdom — comprising England, Scotland, Wales, and Northern Ireland — is one of the world's most historically significant and culturally influential nations. London, its capital, is a global metropolis home to Buckingham Palace, the British Museum, Tower Bridge, and the West End theatre scene. Beyond London, Edinburgh Castle, the Scottish Highlands, Stonehenge, the Lake District, and the Welsh coastline offer extraordinary beauty and history.",
    visaTypes: ['Standard Visitor Visa (Tourist)', 'Standard Visitor Visa (Business)', 'Student Visa (Tier 4)'],
    keyInfo: "The UK is NOT part of the Schengen Area — a separate UK visa is required. Indian nationals require a Standard Visitor Visa (up to 6 months). Applications are submitted online and biometrics collected at VFS Global centres across India. The UK Visa is typically issued for up to 10 years (multiple entry) for frequent visitors with a strong travel history. Applications should be submitted at least 3 months in advance.",
    eligibility: "Valid passport (6+ months validity), proof of financial ability to support the stay (no fixed minimum, but typically £1,000+ in accessible savings), strong ties to India (job, family, property), genuine purpose of visit, clear immigration history, and evidence of intent to leave the UK before visa expiry.",
    processing: "15–21 working days (standard); priority service available in 5 working days.",
    docs: {
      tourist: ["Valid Passport (6+ months validity) + all previous passports", "Recent Photographs", "Completed Online UK Visa Application (UKVI)", "Covering Letter (purpose of visit & itinerary)", "Employment Proof / Leave Letter (if employed)", "Bank Statements (last 6 months – strong balance)", "Self-Employment Proof (if applicable)", "Hotel / Accommodation Proof (or invitation letter)", "Return Flight Ticket", "Invitation Documents (if visiting family/friends)", "Additional Financial Proof (property, fixed deposits, etc.)"],
      business: ["Valid Passport + Previous Passports", "Photographs", "Online Visa Application (UKVI)", "Covering Letter (Indian Company)", "Business Invitation Letter from UK company", "Employment / Self-Employment Proof", "Business / Financial Documents", "Bank Statements (6 months)", "Return Flight Ticket"],
      student: ["Valid Passport (6+ months beyond course end)", "Confirmation of Acceptance for Studies (CAS) from UK institution", "Proof of English Proficiency (IELTS Academic – min. 5.5–6.5)", "Academic Transcripts & Certificates", "Bank Statements (£1,334/month for London; £1,023/month elsewhere)", "ATAS Certificate (if required for the course)", "Tuberculosis (TB) Test Certificate", "Parental Consent (if under 18)", "Photographs", "Student Visa Application Fee (£490)"]
    }
  },
  'United States': {
    overview: "The United States of America is a vast and extraordinarily diverse nation spanning from the Atlantic to the Pacific, from the Arctic wilderness of Alaska to the tropical beaches of Hawaii. New York City, Los Angeles, Las Vegas, the Grand Canyon, Yellowstone, the Florida Everglades, and Washington D.C.'s Smithsonian museums represent just a fraction of what the US offers. America's cultural influence — in film, music, technology, and sport — is felt across the globe.",
    visaTypes: ['B-1/B-2 Tourist & Business Visa', 'F-1 Student Visa', 'J-1 Exchange Visitor Visa'],
    keyInfo: "Indian nationals require a B-1/B-2 visa for tourism and business visits to the USA. The application is submitted online (DS-160 form) followed by a mandatory in-person interview at the US Embassy in New Delhi or Consulates in Mumbai, Chennai, Kolkata, or Hyderabad. Interview wait times can be lengthy (several months in peak periods). ESTA/Visa Waiver Program does not apply to Indian passport holders. The visa is typically issued for 10 years (multiple entry, up to 6 months per stay).",
    eligibility: "Valid Indian passport (6+ months beyond intended stay), strong ties to India (employment, family, property), sufficient financial means, genuine purpose of visit, no immigration violations in any country, completed DS-160 form, visa fee payment (USD 185), and mandatory personal interview at US Consulate.",
    processing: "2–8 weeks after the interview (varies significantly by workload).",
    docs: {
      tourist: ["Valid Passport + all old passports", "Completed DS-160 Online Application Form", "Recent Photographs (50×50mm, white background)", "Visa Fee Receipt (USD 185 MRV fee)", "Appointment Confirmation", "Bank Statements (last 6 months)", "Income Tax Returns (last 3 years)", "Salary Slips / Pay Stubs (last 3 months)", "Employment Letter / Business Registration", "Property / Investment Documents", "Return Flight Itinerary", "Hotel / Accommodation Proof", "Travel Itinerary", "Family ties proof (if visiting family)"],
      business: ["Valid Passport + old passports", "DS-160 Form", "Photographs", "Visa Fee Receipt", "Appointment Confirmation", "Covering Letter (Indian Company)", "Business Invitation Letter from US Company", "Company Registration / ITR", "Personal & Company Bank Statements", "Return Flight Itinerary", "Financial / Employment Ties to India"],
      student: ["Valid Passport (valid beyond course end)", "Form I-20 from US SEVP-certified institution", "Completed DS-160 Form", "SEVIS Fee Receipt (USD 350)", "Visa Fee Receipt (USD 185)", "Appointment Confirmation for F-1 Visa Interview", "Academic Transcripts & Certificates", "English Proficiency (TOEFL/IELTS/SAT/GRE/GMAT)", "Financial Evidence (USD 25,000–50,000/year)", "Sponsorship Letter & Bank Statements", "Statement of Purpose", "Proof of Ties to India"]
    }
  },
  'Azerbaijan': {
    overview: "Azerbaijan, the 'Land of Fire', sits at the crossroads of Eastern Europe and Western Asia, blending ancient Silk Road heritage with futuristic architecture. Baku, its capital, contrasts the medieval walled Old City (a UNESCO World Heritage Site) with the iconic flame-shaped Flame Towers. The country is famous for its Zoroastrian fire temples, the mud volcanoes of Gobustan, and the stunning landscapes of the Caucasus mountains.",
    visaTypes: ['E-Visa (Tourist)', 'E-Visa (Business)', 'Student Visa'],
    keyInfo: "Indian nationals can obtain an Azerbaijan e-Visa via evisa.gov.az (single-entry, 30-day stay). The application takes 3–5 business days. For longer stays or business purposes, a standard visa can be applied at the Azerbaijani Embassy. A Visa on Arrival is also available at Heydar Aliyev International Airport.",
    eligibility: "Valid Indian passport (6+ months validity beyond the visa expiry date), confirmed return ticket, hotel booking, sufficient funds for stay, and a completed online e-Visa application.",
    processing: "3–5 business days (e-Visa); 5–7 working days for sticker visa.",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "E-Visa Application Form (online – evisa.gov.az)", "Recent Photograph (passport-size)", "Return Flight Ticket", "Hotel / Accommodation Booking", "Bank Statement (last 3 months)", "Travel Insurance"],
      business: ["Valid Passport", "E-Visa / Visa Application Form", "Photograph", "Covering Letter (Indian Company)", "Invitation Letter from Azerbaijani company (notarised)", "Bank Statement (personal & company)", "Company Registration Documents", "Return Ticket"],
      student: ["Valid Passport", "Admission Letter from Azerbaijani University", "Proof of Tuition Payment", "Academic Transcripts", "Language Proficiency (Azerbaijani/Russian/English)", "Bank Statements", "Accommodation Proof", "Health Insurance", "Photographs"]
    }
  },
  'Bahrain': {
    overview: "Bahrain, a small island kingdom in the Arabian Gulf, is a sophisticated blend of ancient pearling heritage and modern prosperity. The Bahrain Fort (Qal'at al-Bahrain), a UNESCO World Heritage Site, reflects 5,000 years of civilisation, while the Formula One circuit and the futuristic Bahrain World Trade Center showcase its modern ambition. Manama, the capital, is a major financial and cultural hub of the Middle East.",
    visaTypes: ['E-Visa (Tourist)', 'E-Visa (Business)', 'Student Visa'],
    keyInfo: "Indian nationals can obtain a Bahrain e-Visa via evisa.gov.bh or on arrival at Bahrain International Airport (subject to eligibility). The e-Visa is valid for 30 days (single-entry). Multiple-entry visas valid for 1 year are also available. Applications are processed in 2–5 business days. GCC residents with valid permits may be eligible for different conditions.",
    eligibility: "Valid Indian passport (6+ months validity), confirmed return ticket, hotel booking, bank statement showing sufficient funds, and a completed online e-Visa application.",
    processing: "2–5 business days (e-Visa).",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "Online E-Visa Application Form", "Recent Passport-Size Photograph", "Return Flight Ticket", "Hotel / Accommodation Confirmation", "Bank Statement (last 3 months)", "Travel Insurance"],
      business: ["Valid Passport", "E-Visa / Visa Application Form", "Photograph", "Invitation Letter from Bahraini Company (on official letterhead)", "Covering Letter (Indian Company)", "Company Registration Documents", "Bank Statement"],
      student: ["Valid Passport", "Admission Letter from Bahraini institution", "Proof of Tuition Payment", "Academic Transcripts", "English / Arabic Language Proficiency", "Bank Statements", "Health Insurance", "Accommodation Proof", "Photographs"]
    }
  },
  'Egypt': {
    overview: "Egypt is one of the world's most ancient and extraordinary civilisations, home to the Great Pyramids of Giza — the last remaining Wonder of the Ancient World — the Sphinx, the Valley of the Kings in Luxor, the temples of Abu Simbel, and the vibrant bazaars of Cairo's Khan el-Khalili. The Red Sea Riviera, with its world-class diving and beach resorts at Sharm el-Sheikh and Hurghada, adds a modern tourism dimension.",
    visaTypes: ['E-Visa (Tourist)', 'E-Visa (Business)', 'Student Visa'],
    keyInfo: "Indian nationals can apply for an Egypt e-Visa online via visa2egypt.gov.eg. The e-Visa is valid for 30 days (single-entry or multiple-entry options available). Processing takes 3–7 business days. Visa on Arrival is also available at Egyptian airports, though the e-Visa is recommended. The visa fee is USD 25 (single-entry).",
    eligibility: "Valid Indian passport (6+ months validity), return ticket, hotel booking, sufficient funds, and a completed online e-Visa application.",
    processing: "3–7 business days (e-Visa).",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "Online E-Visa Application Form (visa2egypt.gov.eg)", "Recent Photograph", "Return Flight Ticket", "Hotel Booking / Accommodation Proof", "Bank Statement (last 3 months)", "Travel Insurance"],
      business: ["Valid Passport", "E-Visa Application Form", "Photograph", "Invitation Letter from Egyptian Company", "Covering Letter (Indian Company)", "Business Registration Documents", "Bank Statement (personal & company)"],
      student: ["Valid Passport", "Admission Letter from Egyptian University / Al-Azhar", "Academic Transcripts", "Arabic Language Proficiency (if applicable)", "Bank Statements", "Sponsorship Letter (if applicable)", "Health Insurance", "Photographs"]
    }
  },
  'Georgia': {
    overview: "Georgia, nestled in the South Caucasus between Europe and Asia, is one of the world's oldest wine-producing nations and a country of extraordinary natural beauty. Tbilisi, the capital, enchants with its medieval fortress Narikala, the Old Town's narrow lanes, and a vibrant arts scene. The Caucasus mountains, the cave monastery of Vardzia, and the UNESCO-listed Svaneti region are among Georgia's most remarkable treasures.",
    visaTypes: ['E-Visa (Tourist)', 'E-Visa (Business)', 'Student Visa'],
    keyInfo: "Indian nationals are eligible for a Georgia e-Visa (valid up to 30 days) via evisa.gov.ge. Processing takes 5 working days. Georgia also has an open visa-on-arrival policy at its main border points. Additionally, Indian nationals with a valid US, UK, Schengen, or several other visas may enter Georgia visa-free for up to 90 days.",
    eligibility: "Valid Indian passport (3+ months beyond the intended stay), return ticket, hotel booking, sufficient funds, and a completed online e-Visa application. Holders of valid US/Schengen/UK visas may not need an e-Visa.",
    processing: "5 working days (e-Visa).",
    docs: {
      tourist: ["Valid Passport (3+ months validity)", "E-Visa Application Form (evisa.gov.ge)", "Recent Photograph", "Return Ticket", "Hotel Booking", "Bank Statement", "Travel Insurance"],
      business: ["Valid Passport", "E-Visa Application / Visa Form", "Photograph", "Covering Letter (Indian Company)", "Invitation Letter (Georgian Company)", "Financial Proof (personal & business)", "Business Proof", "Travel Proof"],
      student: ["Valid Passport", "Admission Letter from Georgian institution", "Proof of Tuition Payment", "Academic Transcripts", "Georgian / English Language Proficiency", "Bank Statements", "Health Insurance", "Accommodation Proof", "Photographs"]
    }
  },
  'Indonesia': {
    overview: "Indonesia is the world's largest archipelago nation, comprising over 17,000 islands and an extraordinary range of cultures, landscapes, and wildlife. Bali, the 'Island of the Gods', is perhaps its most famous destination — a magical blend of terraced rice paddies, Hindu temples, surf beaches, and spa culture. Komodo National Park, Borobudur Temple, Raja Ampat's diving, and the jungles of Borneo and Sumatra add to Indonesia's extraordinary appeal.",
    visaTypes: ['E-Visa (Tourist)', 'Visa on Arrival', 'Student Visa (KITAS)'],
    keyInfo: "Indian nationals can enter Indonesia on a Visa on Arrival (VoA) at major international airports and seaports (fee: USD 35, valid 30 days, extendable once). An e-Visa can also be applied online in advance via molina.imigrasi.go.id. Bali and other popular destinations are covered. The VoA is available at 34 airports and 19 seaports.",
    eligibility: "Valid Indian passport (6+ months validity), return ticket, sufficient funds (USD 100/day recommended), hotel booking, and e-Visa application or VoA eligibility at the port of entry.",
    processing: "E-Visa: 3–5 business days. VoA: On arrival.",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "E-Visa Application or VoA Payment (USD 35)", "Recent Photograph", "Return Flight Ticket", "Hotel / Accommodation Booking", "Bank Statement (last 3 months)", "Travel Insurance"],
      business: ["Valid Passport", "E-Visa / Visa Application", "Photograph", "Invitation Letter from Indonesian Company", "Covering Letter (Indian Company)", "Company Registration Documents", "Bank Statement"],
      student: ["Valid Passport", "Admission Letter from Indonesian institution", "KITAS Sponsor Letter from institution", "Academic Transcripts", "Bank Statements", "Health Certificate", "Photographs", "Completed Student Visa Application"]
    }
  },
  'Malaysia': {
    overview: "Malaysia is a tropical Southeast Asian nation of remarkable diversity — a vibrant mix of Malay, Chinese, Indian, and indigenous cultures, reflected in its cuisine, architecture, and festivals. Kuala Lumpur's iconic Petronas Twin Towers, the ancient rainforests of Borneo, the idyllic beaches of Langkawi and the Perhentian Islands, and the UNESCO World Heritage cities of Penang and Melaka make Malaysia an endlessly rewarding destination.",
    visaTypes: ['eNTRI / e-Visa (Tourist)', 'Business Visa', 'Student Pass'],
    keyInfo: "Indian nationals with an Indian ePassport (biometric) can apply for an eNTRI (Electronic Travel Registration & Information) note online, allowing a 15-day single-entry stay. For longer stays, an e-Visa (up to 30 days) is available. The eNTRI note can be obtained at evisa.imi.gov.my. A Malaysia Digital Arrival Card (MDAC) must be completed before arrival.",
    eligibility: "Valid Indian biometric passport (6+ months validity), return ticket, hotel booking, sufficient funds, and a completed eNTRI/e-Visa application.",
    processing: "1–3 business days (eNTRI/e-Visa).",
    docs: {
      tourist: ["Valid Indian e-Passport (biometric, 6+ months validity)", "eNTRI Note / e-Visa printout", "Recent Photograph", "Return Flight Ticket", "Hotel / Accommodation Booking", "Bank Statement (last 3 months)", "Malaysia Digital Arrival Card (MDAC)"],
      business: ["Valid Passport", "Business Visa Application Form", "Photograph", "Invitation Letter from Malaysian Company", "Covering Letter (Indian Company)", "Company Registration Documents", "Bank Statement"],
      student: ["Valid Passport", "Offer Letter from Malaysian institution", "Visa Approval Letter from Immigration (processed by institution)", "Academic Transcripts", "English Language Proficiency Proof", "Bank Statements", "Medical Examination Report", "Photographs"]
    }
  },
  'Morocco': {
    overview: "Morocco is a North African kingdom of extraordinary contrasts — the ancient medinas of Marrakech, Fès, and Chefchaouen's famous blue-washed streets; the Sahara Desert; the Atlas Mountains; and beautiful Atlantic and Mediterranean coastlines. Morocco's souks, riads, hammams, and tagine cuisine offer a sensory experience unlike anywhere else. The UNESCO-listed medinas of Fès and Marrakech are among the world's most mesmerising old cities.",
    visaTypes: ['E-Visa (Tourist)', 'Business Visa', 'Student Visa'],
    keyInfo: "Indian nationals require a visa to enter Morocco. An e-Visa is available online. Applications can also be submitted at the Moroccan Embassy in New Delhi or the Consulate in Mumbai. The tourist visa allows a stay of up to 90 days. Morocco has simplified its visa process in recent years, and e-Visa processing takes 3–7 business days.",
    eligibility: "Valid Indian passport (6+ months validity), return ticket, hotel booking, bank statements, and a genuine purpose of visit.",
    processing: "3–7 business days (e-Visa).",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "E-Visa Application Form", "Recent Photographs", "Return Flight Ticket", "Hotel / Accommodation Proof", "Bank Statements (last 3 months)", "Travel Insurance", "Covering Letter"],
      business: ["Valid Passport", "Visa Application Form", "Photographs", "Invitation Letter from Moroccan company", "Covering Letter (Indian Company)", "Company Registration Documents", "Bank Statements"],
      student: ["Valid Passport", "Admission Letter from Moroccan University", "Proof of Tuition Payment", "Academic Transcripts", "Arabic / French Language Proficiency", "Bank Statements", "Health Insurance", "Photographs"]
    }
  },
  'Oman': {
    overview: "Oman is one of the Arabian Peninsula's most beautiful and least-crowded destinations — a country of dramatic desert landscapes, ancient frankincense trade routes, stunning coastal scenery, and a proud Ibadi Islamic heritage. Muscat, the capital, is a relaxed and elegant city with the magnificent Sultan Qaboos Grand Mosque, Muttrah Souq, and a dramatic mountain backdrop. Wadi Shab, Wadi Rum, and the Dhofar region are extraordinary natural experiences.",
    visaTypes: ['E-Visa (Tourist)', 'E-Visa (Business)', 'Student Visa'],
    keyInfo: "Indian nationals can obtain an Oman e-Visa online via evisa.rop.gov.om (single-entry 30 days, multiple-entry, or annual multiple-entry). Processing takes 3–5 business days. A Visa on Arrival is available for Indian nationals at Muscat International Airport and other border points. GCC residents with a valid permit can enter on a special scheme.",
    eligibility: "Valid Indian passport (6+ months validity), return ticket, hotel booking, bank statements, and a completed online e-Visa application.",
    processing: "3–5 business days (e-Visa).",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "E-Visa Application (evisa.rop.gov.om)", "Recent Photograph", "Return Flight Ticket", "Hotel / Accommodation Booking", "Bank Statement (last 3 months)", "Travel Insurance"],
      business: ["Valid Passport", "E-Visa Application / Visa Form", "Photograph", "Invitation Letter from Omani Company", "Covering Letter (Indian Company)", "Company Registration Documents", "Bank Statement"],
      student: ["Valid Passport", "Admission Letter from Omani institution", "Proof of Tuition Payment or Scholarship", "Academic Transcripts", "Arabic / English Language Proficiency", "Bank Statements", "Health Insurance", "Photographs"]
    }
  },
  'Qatar': {
    overview: "Qatar, a small but extraordinarily wealthy Gulf state on the Arabian Peninsula, has emerged as a global destination of remarkable ambition. Doha's futuristic skyline — featuring the Museum of Islamic Art, the iconic Burj Doha, and the Corniche waterfront — contrasts with the quiet sands of the desert interior and the souqs of old Doha. Qatar hosted the 2022 FIFA World Cup, cementing its status as a world-class destination.",
    visaTypes: ['E-Visa (Tourist)', 'Visa on Arrival', 'Student Visa'],
    keyInfo: "Indian nationals are eligible for a Qatar e-Visa or Visa on Arrival. The e-Visa (30 days, extendable) can be applied online at portal.moi.gov.qa. Visa on Arrival is also available at Hamad International Airport. Transit visas are free for up to 96 hours for eligible passengers. Qatar also offers free visas for short visits through Hayya and other programmes.",
    eligibility: "Valid Indian passport (6+ months validity), return ticket, hotel booking, bank statements showing sufficient funds, and an online e-Visa application or VoA eligibility.",
    processing: "1–3 business days (e-Visa).",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "E-Visa Application Form (portal.moi.gov.qa)", "Recent Photograph", "Return Flight Ticket", "Hotel Booking Confirmation", "Bank Statement (last 3 months)", "Travel Insurance"],
      business: ["Valid Passport", "E-Visa Application / Business Visa Form", "Photograph", "Invitation Letter from Qatari Company", "Covering Letter (Indian Company)", "Company Registration Documents", "Bank Statement"],
      student: ["Valid Passport", "Admission Letter from Qatari institution", "Proof of Tuition Payment", "Academic Transcripts", "Arabic / English Language Proficiency", "Bank Statements", "Health Insurance", "Accommodation Proof", "Photographs"]
    }
  },
  'Saudi Arabia': {
    overview: "Saudi Arabia, the birthplace of Islam and custodian of its two holiest mosques — Masjid al-Haram in Mecca and Masjid an-Nabawi in Medina — is undergoing a dramatic transformation under Vision 2030. Beyond its Islamic heritage, Saudi Arabia is opening to tourism with extraordinary archaeological sites like Al-Ula and Hegra (a UNESCO World Heritage Site), the futuristic mega-project NEOM, the Red Sea coast, and the ancient Diriyah near Riyadh.",
    visaTypes: ['E-Visa (Tourist)', 'Business Visa', 'Student Visa'],
    keyInfo: "Indian nationals can obtain a Saudi Arabia tourist e-Visa online via visa.visitsaudi.com (single or multiple entry, up to 90 days per visit within 1 year). This visa was introduced in 2019 as part of Vision 2030's tourism push. The e-Visa fee is SAR 535.50 (approx. INR 11,500). A mandatory travel health insurance must also be purchased. Applications are processed in 3–7 business days.",
    eligibility: "Valid Indian passport (6+ months validity), return ticket, hotel booking, travel insurance, and payment of e-Visa fee online.",
    processing: "3–7 business days (e-Visa).",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "Online E-Visa Application (visa.visitsaudi.com)", "Recent Photograph", "Return Flight Ticket", "Hotel / Accommodation Booking", "Mandatory Saudi Travel Insurance", "Bank Statement (last 3 months)"],
      business: ["Valid Passport", "Business Visa Application Form", "Photograph", "Invitation Letter from Saudi Arabian company (attested by Chamber of Commerce)", "Covering Letter (Indian Company)", "Company Registration Documents", "Bank Statements"],
      student: ["Valid Passport", "Admission Letter from Saudi institution", "Academic Transcripts", "Arabic / English Language Proficiency", "Ministry of Education Approval (Saudi Arabia)", "Bank Statements or Scholarship Letter", "Medical Fitness Certificate", "Photographs"]
    }
  },
  'Singapore': {
    overview: "Singapore, the Lion City, is a spectacular city-state that exemplifies modern urban planning, multiculturalism, and economic success. Despite its tiny size, Singapore packs in world-class attractions: Marina Bay Sands, Gardens by the Bay, Sentosa Island, Orchard Road shopping, and a dining scene that ranges from hawker stalls (a UNESCO Intangible Cultural Heritage) to Michelin-starred restaurants. Singapore is consistently ranked one of the world's safest and most liveable cities.",
    visaTypes: ['E-Visa (Tourist)', 'E-Visa (Business)', 'Student Pass'],
    keyInfo: "Indian nationals require a Visa to visit Singapore. Applications are submitted online via the Immigration & Checkpoints Authority (ICA) of Singapore. Visa agents (registered with ICA) must submit applications on behalf of Indian nationals; direct online submission by individuals is not permitted. Mandatory passport submission at the Singapore High Commission or VFS Global is required. Processing takes 3–7 working days.",
    eligibility: "Valid Indian passport (6+ months validity), return ticket, accommodation proof, bank statements, sufficient funds (SGD 100/day recommended), and confirmed purpose of visit.",
    processing: "3–7 working days.",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "Online Visa Application (via registered agent to ICA)", "Recent Photograph (35×45mm, white background)", "Return Flight Ticket", "Hotel / Accommodation Booking", "Bank Statement (last 3 months)", "Salary Slips / Income Proof", "Covering Letter (purpose of visit)"],
      business: ["Valid Passport", "E-Visa Application (via registered agent)", "Photograph", "Invitation Letter from Singapore Company", "Covering Letter (Indian Company)", "Business Registration Documents", "Bank Statements"],
      student: ["Valid Passport", "Offer Letter from Singapore institution", "In-Principle Approval (IPA) for Student Pass from ICA", "Academic Transcripts & Certificates", "English Language Proficiency (IELTS/O-Level/GCE)", "Bank Statements or Scholarship Letter", "Medical Examination", "Photographs"]
    }
  },
  'Sri Lanka': {
    overview: "Sri Lanka, the 'Pearl of the Indian Ocean', is a tropical island nation of staggering beauty and ancient cultural depth. The UNESCO-listed sites of Sigiriya Rock Fortress, the ancient city of Anuradhapura, the Temple of the Tooth in Kandy, and the Dutch colonial fort at Galle are extraordinary. Sri Lanka's tea-covered hill country, pristine beaches, elephant sanctuaries, and warm hospitality make it one of South Asia's most beloved destinations.",
    visaTypes: ['E-Visa (Tourist)', 'E-Visa (Business)', 'Student Visa'],
    keyInfo: "Indian nationals can apply for a Sri Lanka e-Visa online via eta.gov.lk (Electronic Travel Authorisation). The e-Visa is valid for 30 days (extendable to 6 months in-country). Short stay (30 days) e-Visa fee is USD 20 for tourism, USD 35 for business. A double-entry tourist visa is also available. Sri Lanka has been promoting Indian tourism aggressively after the 2022 economic crisis recovery.",
    eligibility: "Valid Indian passport (6+ months validity), return ticket, hotel booking, sufficient funds, and online e-Visa application.",
    processing: "2–3 business days (e-Visa).",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "ETA Online Application (eta.gov.lk)", "Recent Photograph", "Return Flight Ticket", "Hotel / Accommodation Booking", "Bank Statement (last 3 months)", "Travel Insurance (recommended)"],
      business: ["Valid Passport", "ETA Business Application", "Photograph", "Invitation Letter from Sri Lankan Company", "Covering Letter (Indian Company)", "Company Registration Documents", "Bank Statement"],
      student: ["Valid Passport", "Admission Letter from Sri Lankan institution", "Proof of Tuition Payment", "Academic Transcripts", "English / Sinhala / Tamil Language Proof", "Bank Statements", "Health Insurance", "Photographs"]
    }
  },
  'Thailand': {
    overview: "Thailand, the 'Land of Smiles', is one of Southeast Asia's most popular travel destinations — a country of ornate Buddhist temples, tropical beaches, vibrant street food, and warm, welcoming people. Bangkok's Grand Palace and Wat Pho, the ancient ruins of Ayutthaya, the misty mountains of Chiang Mai, and the turquoise waters of Koh Samui and Phuket represent just a portion of Thailand's rich travel tapestry.",
    visaTypes: ['E-Visa (Tourist)', 'E-Visa (Business)', 'Student Visa (ED Visa)'],
    keyInfo: "Indian nationals can apply for a Thailand e-Visa online via thaievisa.go.th. The tourist visa (TR) is valid for 60 days, extendable by 30 days. A Visa on Arrival (VoA) is also available for Indian nationals at 38 international airports and seaports (fee: THB 2,000, 15-day stay). From 2024, Thailand has extended visa-free access; however, Indians may still be required to apply. Check current status before travel.",
    eligibility: "Valid Indian passport (6+ months validity), return ticket, hotel booking, sufficient funds (THB 20,000 per person), and e-Visa application or VoA eligibility.",
    processing: "3–7 business days (e-Visa).",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "E-Visa Application Form (thaievisa.go.th)", "Recent Photograph (white background)", "Return Flight Ticket", "Hotel / Accommodation Booking", "Bank Statement (last 3 months – THB 20,000 minimum)", "Travel Insurance"],
      business: ["Valid Passport", "E-Visa (Non-Immigrant B) Application", "Photograph", "Invitation Letter from Thai Company", "Covering Letter (Indian Company)", "Company Registration / GST / Business Docs", "Bank Statements"],
      student: ["Valid Passport", "Acceptance Letter from Thai institution (ED Visa required)", "Proof of Tuition Payment", "Academic Transcripts", "Thai / English Language Proficiency Proof", "Bank Statements", "Health Insurance", "Photographs"]
    }
  },
  'United Arab Emirates': {
    overview: "The United Arab Emirates is a federation of seven emirates — most famously Dubai and Abu Dhabi — that has transformed from a pearl-diving backwater into one of the world's most glamorous and ambitious destinations in just 50 years. Dubai's Burj Khalifa (the world's tallest building), the Palm Jumeirah, the gold and spice souqs, and Abu Dhabi's Sheikh Zayed Grand Mosque and the Louvre Abu Dhabi represent the UAE's extraordinary ambition and multicultural modernity.",
    visaTypes: ['E-Visa (Tourist)', 'E-Visa (Business)', 'Student Visa'],
    keyInfo: "Indian nationals can obtain a UAE e-Visa online via ICA (Federal Authority for Identity, Citizenship, Customs & Port Security) or through airlines like Emirates and Air Arabia. Visas are available as single-entry 30-day, single-entry 60-day, or multiple-entry 60-day options. Many UAE hotels, tour operators, and travel agencies can also apply on the applicant's behalf. Processing takes 2–5 business days.",
    eligibility: "Valid Indian passport (6+ months validity), return ticket, hotel booking, sufficient funds, and online e-Visa application.",
    processing: "2–5 business days (e-Visa).",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "Online E-Visa Application (ICA portal or airline)", "Recent Photograph (white background)", "Return Flight Ticket", "Hotel / Accommodation Booking", "Bank Statement (last 3 months)", "Travel Insurance"],
      business: ["Valid Passport", "E-Visa (Business) Application", "Photograph", "Invitation Letter from UAE Company", "Covering Letter (Indian Company)", "Company Registration Documents", "Bank Statements"],
      student: ["Valid Passport", "Admission Letter from UAE institution", "Proof of Tuition Payment", "Academic Transcripts", "English / Arabic Language Proficiency", "Bank Statements", "Health Insurance", "Accommodation Proof", "Photographs"]
    }
  },
  'Vietnam': {
    overview: "Vietnam is a long, slender country of stunning geographical diversity — from the limestone karsts of Ha Long Bay (a UNESCO World Heritage Site) and the lantern-lit ancient town of Hoi An to the buzzing streets of Hanoi's Old Quarter, Ho Chi Minh City's energy, and the verdant rice terraces of Sapa. Vietnam's cuisine — pho, banh mi, fresh spring rolls — is celebrated worldwide, and its beaches at Da Nang and Phu Quoc are increasingly drawing international visitors.",
    visaTypes: ['E-Visa (Tourist)', 'E-Visa (Business)', 'Student Visa'],
    keyInfo: "Indian nationals can apply for a Vietnam e-Visa online via evisa.xuatnhapcanh.gov.vn (valid for 90 days, multiple entry, fee: USD 25). The e-Visa processing takes 2–3 business days. Vietnam launched this upgraded e-Visa in 2023, making it one of the most flexible in Southeast Asia. Visa on Arrival is also possible but requires a pre-arranged letter through an authorised agency.",
    eligibility: "Valid Indian passport (6+ months validity), return ticket, hotel booking, sufficient funds, and a completed e-Visa application with photo and passport scan.",
    processing: "2–3 business days (e-Visa).",
    docs: {
      tourist: ["Valid Passport (6+ months validity)", "Online E-Visa Application (evisa.xuatnhapcanh.gov.vn)", "Recent Photograph (4×6cm, white background)", "Return Flight Ticket", "Hotel / Accommodation Booking", "Bank Statement (last 3 months)", "Travel Insurance"],
      business: ["Valid Passport", "E-Visa (Business) Application", "Photograph", "Invitation Letter from Vietnamese Company (notarised)", "Covering Letter (Indian Company)", "Company Registration Documents", "Bank Statements"],
      student: ["Valid Passport", "Admission Letter from Vietnamese institution", "Proof of Tuition Payment", "Academic Transcripts", "Vietnamese / English Language Proficiency", "Bank Statements", "Health Insurance", "Photographs"]
    }
  }
};

/* ── Utility functions ── */
function getFlagUrl(countryName, size = 'w320') {
  const data = countryFlagData[countryName];
  if (!data) return null;
  return `https://flagcdn.com/${size}/${data.code}.png`;
}

function getLocalFlag(countryName) {
  return `images/flags/${countryName.toLowerCase().replace(/\s+/g, '-')}.webp`;
}

function getThemeColor(countryName) {
  const data = countryFlagData[countryName];
  return data ? data.color : '#0b1530';
}

function hexToRgba(hex, alpha = 1) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ── Country arrays ── */
const regularVisa = [
  { name: 'Australia',       flag: '🇦🇺', region: 'Oceania',        types: ['Tourist', 'Business', 'Student'], processing: '20–35 working days' },
  { name: 'Austria',         flag: '🇦🇹', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Belgium',         flag: '🇧🇪', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Brazil',          flag: '🇧🇷', region: 'South America',  types: ['Tourist', 'Business', 'Student'], processing: '10–20 working days' },
  { name: 'Canada',          flag: '🇨🇦', region: 'North America',  types: ['Tourist', 'Business', 'Student'], processing: '30–45 working days' },
  { name: 'China',           flag: '🇨🇳', region: 'Asia Pacific',   types: ['Tourist (L)', 'Business (M/F)', 'Student (X)'], processing: '4–7 working days' },
  { name: 'Czech Republic',  flag: '🇨🇿', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Denmark',         flag: '🇩🇰', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'France',          flag: '🇫🇷', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Germany',         flag: '🇩🇪', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Greece',          flag: '🇬🇷', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Hungary',         flag: '🇭🇺', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Iceland',         flag: '🇮🇸', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Ireland',         flag: '🇮🇪', region: 'Europe',         types: ['Tourist (C Visa)', 'Business (C Visa)', 'Student (D Visa)'], processing: '8–10 weeks' },
  { name: 'Italy',           flag: '🇮🇹', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Japan',           flag: '🇯🇵', region: 'Asia Pacific',   types: ['Tourist', 'Business', 'Student'], processing: '5–7 working days' },
  { name: 'Malta',           flag: '🇲🇹', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Netherlands',     flag: '🇳🇱', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'New Zealand',     flag: '🇳🇿', region: 'Oceania',        types: ['Visitor Visa', 'Business Visitor', 'Student Visa'], processing: '10–20 working days' },
  { name: 'Norway',          flag: '🇳🇴', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Poland',          flag: '🇵🇱', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Portugal',        flag: '🇵🇹', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'South Africa',    flag: '🇿🇦', region: 'Africa',         types: ['Tourist', 'Business', 'Student'], processing: '7–10 working days' },
  { name: 'South Korea',     flag: '🇰🇷', region: 'Asia Pacific',   types: ['Tourist (C-3)', 'Business (C-3)', 'Student (D-2/D-4)'], processing: '5–7 working days' },
  { name: 'Spain',           flag: '🇪🇸', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Sweden',          flag: '🇸🇪', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Switzerland',     flag: '🇨🇭', region: 'Europe',         types: ['Schengen Tourist', 'Business', 'Student'], processing: '10–15 working days' },
  { name: 'Turkey',          flag: '🇹🇷', region: 'Eurasia',        types: ['Tourist (E-Visa)', 'Business Visa', 'Student Visa'], processing: 'E-Visa: 24–72 hrs; Sticker: 7–14 days' },
  { name: 'United Kingdom',  flag: '🇬🇧', region: 'Europe',         types: ['Standard Visitor Visa', 'Business Visitor', 'Student Visa (Tier 4)'], processing: '15–21 working days' },
  { name: 'United States',   flag: '🇺🇸', region: 'North America',  types: ['B-1/B-2 Visa', 'Student (F-1)', 'Exchange (J-1)'], processing: '2–8 weeks post interview' },
];

const eVisa = [
  { name: 'Azerbaijan',           flag: '🇦🇿', region: 'Caucasus',      types: ['E-Visa'], processing: '3–5 business days', visaNote: 'E-Visa' },
  { name: 'Bahrain',              flag: '🇧🇭', region: 'Middle East',   types: ['E-Visa'], processing: '2–5 business days', visaNote: 'E-Visa' },
  { name: 'Egypt',                flag: '🇪🇬', region: 'North Africa',  types: ['E-Visa'], processing: '3–7 business days', visaNote: 'E-Visa' },
  { name: 'Georgia',              flag: '🇬🇪', region: 'Caucasus',      types: ['E-Visa'], processing: '5 working days', visaNote: 'E-Visa' },
  { name: 'Indonesia',            flag: '🇮🇩', region: 'Southeast Asia', types: ['E-Visa', 'Visa on Arrival'], processing: '3–5 business days', visaNote: 'E-Visa & Visa on Arrival' },
  { name: 'Malaysia',             flag: '🇲🇾', region: 'Southeast Asia', types: ['eNTRI / E-Visa'], processing: '1–3 business days', visaNote: 'eNTRI / E-Visa' },
  { name: 'Morocco',              flag: '🇲🇦', region: 'North Africa',  types: ['E-Visa'], processing: '3–7 business days', visaNote: 'E-Visa' },
  { name: 'Oman',                 flag: '🇴🇲', region: 'Middle East',   types: ['E-Visa'], processing: '3–5 business days', visaNote: 'E-Visa' },
  { name: 'Qatar',                flag: '🇶🇦', region: 'Middle East',   types: ['E-Visa', 'Visa on Arrival'], processing: '1–3 business days', visaNote: 'E-Visa & Visa on Arrival' },
  { name: 'Saudi Arabia',         flag: '🇸🇦', region: 'Middle East',   types: ['E-Visa'], processing: '3–7 business days', visaNote: 'E-Visa' },
  { name: 'Singapore',            flag: '🇸🇬', region: 'Southeast Asia', types: ['E-Visa'], processing: '3–7 working days', visaNote: 'E-Visa (Mandatory Passport Submission)' },
  { name: 'Sri Lanka',            flag: '🇱🇰', region: 'South Asia',    types: ['E-Visa (ETA)'], processing: '2–3 business days', visaNote: 'E-Visa (ETA)' },
  { name: 'Thailand',             flag: '🇹🇭', region: 'Southeast Asia', types: ['E-Visa'], processing: '3–7 business days', visaNote: 'E-Visa / Visa on Arrival' },
  { name: 'United Arab Emirates', flag: '🇦🇪', region: 'Middle East',   types: ['E-Visa'], processing: '2–5 business days', visaNote: 'E-Visa' },
  { name: 'Vietnam',              flag: '🇻🇳', region: 'Southeast Asia', types: ['E-Visa'], processing: '2–3 business days', visaNote: 'E-Visa' },
];

let activeTab = 'regular';
const allCountries = { regular: regularVisa, evisa: eVisa };

const listing = document.getElementById('screen-listing');
const detail  = document.getElementById('screen-detail');

function showListing() {
  detail.classList.remove('active');
  listing.style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (typeof AOS !== 'undefined') AOS.refresh();
}

function getCountryByGlobalIndex(globalIndex) {
  if (globalIndex < regularVisa.length) {
    return { country: regularVisa[globalIndex], tab: 'regular', localIndex: globalIndex };
  }
  const localIndex = globalIndex - regularVisa.length;
  return { country: eVisa[localIndex], tab: 'evisa', localIndex };
}

/* ── Build flag <img> with fallback chain ── */
function buildFlagImgElement(countryName, className) {
  const onlineUrl = getFlagUrl(countryName, 'w640');
  const localUrl  = getLocalFlag(countryName);
  const img = document.createElement('img');
  img.className = className;
  img.alt = countryName + ' flag';
  img.loading = 'lazy';
  img.src = onlineUrl || localUrl;
  img.onerror = function () {
    if (this.src !== window.location.origin + '/' + localUrl) {
      this.src = localUrl;
    } else {
      this.style.display = 'none';
    }
  };
  return img;
}

/* ── Render document tab with Tourist / Business / Student toggle ── */
function renderDocsTab(countryName) {
  const data = countryData[countryName];
  const pane = document.getElementById('dtab-docs');
  if (!pane) return;

  if (!data || !data.docs) {
    pane.innerHTML = '<p style="color:rgba(180,200,240,0.7);padding:1rem 0;">Document information coming soon.</p>';
    return;
  }

  const tabs = [
    { key: 'tourist',  label: 'Tourist' },
    { key: 'business', label: 'Business' },
    { key: 'student',  label: 'Student' },
  ];

  pane.innerHTML = `
    <div class="doc-visa-tabs">
      ${tabs.map((t,i) => `<button class="doc-vtab${i===0?' active':''}" data-vtype="${t.key}">${t.label}</button>`).join('')}
    </div>
    <div class="doc-visa-panels">
      ${tabs.map((t,i) => {
        const docs = data.docs[t.key] || [];
        return `<div class="doc-vpanel${i===0?' active':''}" id="dvp-${t.key}">
          ${docs.length
            ? `<ul class="doc-list">${docs.map(d => `<li><i class="bi bi-check2-circle"></i> ${d}</li>`).join('')}</ul>`
            : `<p style="color:rgba(180,200,240,0.6);padding:0.5rem 0;">Information for this visa type coming soon.</p>`
          }
        </div>`;
      }).join('')}
    </div>`;

  /* attach toggle handlers */
  pane.querySelectorAll('.doc-vtab').forEach(btn => {
    btn.addEventListener('click', () => {
      pane.querySelectorAll('.doc-vtab').forEach(b => b.classList.remove('active'));
      pane.querySelectorAll('.doc-vpanel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = pane.querySelector('#dvp-' + btn.dataset.vtype);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ── Show detail screen ── */
function showDetail(globalIndex) {
  const { country: c, tab } = getCountryByGlobalIndex(globalIndex);
  const themeColor = getThemeColor(c.name);
  const info = countryData[c.name] || {};

  /* ── Hero ── */
  const hero = document.querySelector('.detail-hero');
  hero.style.setProperty('--detail-theme-color', themeColor);

  ['detail-hero-right','detail-hero-bottom-fade','detail-hero-tint']
    .forEach(cls => { const el = hero.querySelector('.'+cls); if (el) el.remove(); });

  const rightEl = document.createElement('div');
  rightEl.className = 'detail-hero-right';
  rightEl.style.setProperty('--detail-theme-color', themeColor);
  const heroImg = buildFlagImgElement(c.name, 'detail-hero-right-img');
  heroImg.style.background = 'transparent';
  rightEl.appendChild(heroImg);
  hero.insertBefore(rightEl, hero.firstChild);

  const tintEl = document.createElement('div');
  tintEl.className = 'detail-hero-tint';
  hero.insertBefore(tintEl, hero.firstChild);

  const bottomFade = document.createElement('div');
  bottomFade.className = 'detail-hero-bottom-fade';
  hero.insertBefore(bottomFade, hero.firstChild);

  /* ── Flag badge ── */
  const flagBigEl = document.getElementById('detailFlagBig');
  flagBigEl.innerHTML = '';
  const flagImg = buildFlagImgElement(c.name, '');
  flagImg.style.cssText = 'width:68%;height:68%;object-fit:contain;border-radius:4px;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.4));';
  flagBigEl.appendChild(flagImg);
  flagImg.onerror = function () { flagBigEl.textContent = c.flag; flagBigEl.style.fontSize='clamp(2rem,6vw,4rem)'; };

  const bgFlagEl = document.getElementById('detailBgFlag');
  if (bgFlagEl) bgFlagEl.textContent = '';

  /* ── Hero title & tags ── */
  document.getElementById('detailTitle').textContent = c.name;
  const tagsEl = document.getElementById('detailTags');
  let tagHTML = `<span class="detail-tag">${c.region}</span>`;
  if (c.visaNote) {
    tagHTML += `<span class="detail-tag">${c.visaNote}</span>`;
  } else {
    const types = info.visaTypes || c.types;
    tagHTML += types.map(t => `<span class="detail-tag">${t}</span>`).join('');
  }
  tagsEl.innerHTML = tagHTML;

  /* ── Overview tab ── */
  const overviewText = document.querySelector('#dtab-overview .detail-overview-text');
  if (overviewText) {
    overviewText.innerHTML = info.overview
      ? `<p>${info.overview}</p>`
      : `<p>Detailed overview for ${c.name} coming soon.</p>`;
  }

  const visaTypesEl = document.getElementById('detailVisaTypes');
  if (visaTypesEl) {
    const types = info.visaTypes || c.types;
    visaTypesEl.innerHTML = types.map(t => `<li>${t}</li>`).join('');
  }

  const keyInfoEl = document.getElementById('detailKeyInfo');
  if (keyInfoEl) keyInfoEl.textContent = info.keyInfo || `Key visa information for ${c.name} will be updated shortly.`;

  const eligEl = document.querySelector('#dtab-overview .detail-info-card:nth-child(3) p');
  if (eligEl) eligEl.textContent = info.eligibility || 'Eligibility details will be updated shortly.';

  const procEl = document.getElementById('detailProcessingTime');
  if (procEl) procEl.textContent = info.processing || c.processing || 'Contact us for current processing times.';

  /* ── Documents tab ── */
  renderDocsTab(c.name);

  /* ── Reset tabs to overview ── */
  document.querySelectorAll('.dtab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.detail-tab-pane').forEach(p => p.classList.remove('active'));
  const overviewTab = document.querySelector('.dtab[data-dtab="overview"]');
  if (overviewTab) overviewTab.classList.add('active');
  document.getElementById('dtab-overview').classList.add('active');

  detail.dataset.country = c.name;
  listing.style.display = 'none';
  detail.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ── Build country cards ── */
function buildCards(tab) {
  const grid = document.getElementById('countriesGrid');
  grid.innerHTML = '';
  const list = allCountries[tab];

  list.forEach((c, localIndex) => {
    const globalIndex = tab === 'regular' ? localIndex : regularVisa.length + localIndex;
    const delay = Math.min(localIndex * 35, 400);
    const tagline = c.visaNote || c.types.join(' · ');
    const badgeLabel = c.visaNote
      ? (c.visaNote.includes('Arrival') && c.visaNote.includes('E-Visa') ? 'E-Visa & VOA'
        : c.visaNote.includes('Arrival') ? 'Visa on Arrival'
          : c.visaNote.includes('Mandatory') ? 'E-Visa'
            : c.visaNote.includes('eNTRI') ? 'eNTRI / E-Visa'
              : c.visaNote)
      : '';
    const badge = c.visaNote ? `<div class="card-evisa-badge">${badgeLabel}</div>` : '';
    const themeColor = getThemeColor(c.name);
    const themeRgba  = hexToRgba(themeColor, 0.22);

    const card = document.createElement('div');
    card.className = 'country-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', delay);
    card.style.setProperty('--card-accent', themeRgba);
    card.style.setProperty('--card-theme-bg', themeColor);

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front" style="--card-theme-bg:${themeColor};">
          <div class="card-front-flag-fallback"></div>
          <div class="card-front-overlay"></div>
          ${badge}
          <span class="card-front-corner-flag">${c.flag}</span>
          <div class="card-front-content">
            <div class="card-country-name">${c.name}</div>
            <div class="card-region">${c.region}</div>
          </div>
          <div class="card-hover-line"></div>
        </div>
        <div class="card-back" style="--card-accent:${themeRgba};">
          <div class="card-back-flag">${c.flag}</div>
          <div class="card-back-title">${c.name}</div>
          <div class="card-back-tagline">${tagline}</div>
          <div class="card-back-cta">View Details</div>
        </div>
      </div>`;

    const front = card.querySelector('.card-front');
    const flagImgEl = buildFlagImgElement(c.name, 'card-front-flag-img');
    const fallbackDiv = front.querySelector('.card-front-flag-fallback');
    front.insertBefore(flagImgEl, fallbackDiv.nextSibling);

    card.addEventListener('click', () => {
      history.pushState({ view: 'detail', globalIndex, tab }, '', `#country-${globalIndex}`);
      showDetail(globalIndex);
    });
    grid.appendChild(card);
  });

  if (typeof AOS !== 'undefined') AOS.refresh();
}

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.vt-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.vt === tab);
  });
  buildCards(tab);
}

/* ── Event listeners ── */
document.querySelectorAll('.vt-tab').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.vt));
});

document.getElementById('backBtn').addEventListener('click', () => {
  history.pushState({ view: 'listing' }, '', window.location.pathname);
  showListing();
  setTimeout(() => {
    const dest = document.getElementById('destinations');
    if (dest) dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
});

document.querySelectorAll('.dtab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dtab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.detail-tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('dtab-' + btn.dataset.dtab).classList.add('active');
  });
});

document.getElementById('detailApplyBtn').addEventListener('click', () => {
  window.location.href = 'contact.html';
});

window.addEventListener('popstate', e => {
  if (e.state && e.state.view === 'detail') {
    if (e.state.tab) switchTab(e.state.tab);
    showDetail(e.state.globalIndex);
  } else {
    showListing();
  }
});

function handleInitialHash() {
  const hash = window.location.hash;
  const match = hash.match(/^#country-(\d+)$/);
  if (match) {
    const globalIndex = parseInt(match[1]);
    const { tab } = getCountryByGlobalIndex(globalIndex);
    switchTab(tab);
    history.replaceState({ view: 'detail', globalIndex, tab }, '', hash);
    showDetail(globalIndex);
  } else {
    history.replaceState({ view: 'listing' }, '', window.location.pathname);
    buildCards('regular');
  }
}

function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const step = target / (1800 / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString();
    }, 16);
  });
}

let countersStarted = false;
const statsEl = document.querySelector('.stats-section');
if (statsEl) {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !countersStarted) {
      countersStarted = true;
      animateCounters();
    }
  }, { threshold: 0.4 }).observe(statsEl);
}

const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle) navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('page-loader');
    if (loader) loader.classList.add('hidden');
  }, 1000);
});

if (typeof AOS !== 'undefined') {
  AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
}
handleInitialHash();

document.querySelectorAll('.footer-about-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.getElementById('stackScene');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.querySelectorAll('.footer-visa-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const tab = this.dataset.vt;
    switchTab(tab);
    const dest = document.getElementById('destinations');
    if (dest) setTimeout(() => dest.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  });
});

// ── STACKING CARDS ──
(function () {
  const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
  const easeOut = t => 1 - Math.pow(1 - clamp(t, 0, 1), 3);

  const scene = document.getElementById('stackScene');
  if (!scene) return;

  const cards = Array.from(scene.querySelectorAll('.stack-card'));
  const N = cards.length;
  const PEEK = window.innerWidth < 768 ? 0 : 18;
  const NAV = window.innerWidth < 768 ? 0 : 80;

  function getStep(card) {
    if (window.innerWidth < 768) {
      const contentHeight = card
        ? card.querySelector('.stack-card-inner').scrollHeight
        : window.innerHeight * 1.5;
      return Math.max(contentHeight, window.innerHeight * 1.5);
    }
    return window.innerHeight * 1.5;
  }

  function setup() {
    const step = getStep();
    scene.style.height = (N * step) + 'px';
    cards.forEach((card, i) => {
      card.style.position = 'sticky';
      card.style.top = (NAV + i * PEEK) + 'px';
      card.style.zIndex = String(i + 2);
      card.style.marginBottom = '0';
      card.style.transformOrigin = 'center top';
    });
  }

  function tick() {
    const step = getStep();
    const rect = scene.getBoundingClientRect();
    const sceneTop = rect.top + window.scrollY;
    const scrolled = window.scrollY - sceneTop;

    cards.forEach((card, i) => {
      const phaseStart = i * step;
      const rawT = (scrolled - phaseStart) / step;
      const t = clamp(rawT, 0, 1);
      const enterRaw = i === 0 ? 1 : (scrolled - (i - 1) * step) / step;
      const enterT = easeOut(clamp(enterRaw, 0, 1));
      const translateY = (1 - enterT) * 80;
      const opacity = i === 0 ? 1 : enterT;
      const scaleT = easeOut(t);
      const hasNext = i < N - 1;
      const scale = hasNext ? 1 - scaleT * 0.05 : 1;
      card.style.transform = `translateY(${translateY.toFixed(2)}px) scale(${scale.toFixed(4)})`;
      card.style.opacity = opacity.toFixed(3);
    });
  }

  setup();
  tick();
  window.addEventListener('scroll', tick, { passive: true });
  window.addEventListener('resize', () => { setup(); tick(); });
})();
