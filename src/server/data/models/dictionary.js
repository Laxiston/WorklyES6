import async from 'async'
import Models from '../../models/models'
import addArray from '../utils/add_array'

const city = {
  name: 'City',
  data: ["Алчевськ", "Артемівськ", "Бердичів", "Бердянськ", "Біла Церква", "Бровари", "Вінниця", "Горлівка", "Дніпродзержинськ", "Дніпропетровськ", "Донецьк", "Євпаторія", "Єнакієве", "Житомир", "Запоріжжя", "Івано-Франківськ", "Ізмаїл", "Кам’янець-Подільський", "Керч", "Київ", "Кіровоград", "Конотоп", "Краматорськ", "Красний Луч", "Кременчук", "Кривий Ріг", "Лисичанськ", "Луганськ", "Луцьк", "Львів", "Макіївка", "Маріуполь", "Мелітополь", "Миколаїв", "Мукачеве", "Нікополь", "Одеса", "Олександрія", "Павлоград", "Полтава", "Рівне", "Севастополь", "Сєвєродонецьк", "Сімферополь", "Слов’янськ", "Суми", "Тернопіль", "Ужгород", "Умань", "Харків", "Херсон", "Хмельницький", "Черкаси", "Чернівці", "Чернігів", "Шостка", "Ялта"]
}

const skill = {
  name: 'Skill',
  data: ["@Formula","A","A# (Axiom)","A# .NET","A+","A++","A-0 System","ABAP","ABC","ABC ALGOL","ABLE","ABSET","ABSYS","ACC","ACL2","ACT-III","AIMMS","ALF","ALGOL 58","ALGOL 60","ALGOL 68","ALGOL W","AMOS","AMPL","APL","AROS","ARexx","ATS","AWK","Accent","Ace DASL","Action!","ActionScript","Ada","Adenine","Agda","Agilent VEE","Agora","Alef","Algorithms","Alice","Alma-0","Alphabetical","AmbientTalk","Amiga E","Analysis","Analytical","Analytics","Analyze Data","Analyze Technical Issues","Answer Calls","Apex (Salesforce.com)","App Inventor for Android's visual block language","AppleScript","Application Development","Application Development Methodologies","Application Development Techniques","Application Development Tools","Application Installations","Application Programming Interfaces","Application Support","Applications","Apps","Arc","Architecture","Argus","Ars Based Programming","Aspect Oriented Programming","AspectJ","Assembling","Assembly language","Assess Customer Support Needs","Ateji PX","Attention to Detail","AutoHotkey","AutoIt","AutoLISP / Visual LISP","Autocoder","Averest","Axum","B","B","BASIC","BCPL","BETA","BLISS","BPEL","BREW","Babbage","Balancing","Bash","Batch (Windows/Dos)","BeanShell","Bertrand","Best Practices","Big Data","Bigwig","Bistro","BitC","Blue","Boo","Boomerang","Bourne shell (including bash and ksh)","Browsers","Business Analytics","Business Intelligence","Business Process Modeling","C","C","C Shell","C# – ISO/IEC 23270","C++ – ISO/IEC 14882","C--","C/AL","CASE Tools","CDuce","CFEngine","CFML","CHAIN","CHILL","CHIP-8","CICS","CL (IBM)","CLIST","CLU","CMS EXEC (EXEC)","CMS-2","COBOL – ISO/IEC 1989","CODE","COMAL","COMIT","COMPASS","COWSEL","CPL","CSP","CUDA","Caché ObjectScript","Calculating","Caml","Case Notes","Categorical","Cayenne","Cecil","Cel","Certifications","Cesil","Ceylon","Cg","Ch","Chapel","Charity","Charm","Chef","Chronological","ChucK","Cilk","Claire","Clarion","Clean","Clipper","Clojure","Cloud Computing","Cobra","Code","Coding","CoffeeScript","Cola","ColdC","ColdFusion","Collaboration","Combined Programming Language (CPL)","Common Intermediate Language (CIL)","Common Lisp (also known as CL)","Communication","Compiling Statistics","Component Pascal","Components","Comprehending Technical Documents","Computer","Computer Platforms","Computer Science","Computing","Concurrent Programming","Conducting Online Chats","Configuration","Conflict Resolution","Constraint Handling Rules (CHR)","Constraint-based Programming","Content Management","Content Management Systems (CMS)","Content Strategy","Converge","Convincing Customers to Stay with Platforms","Cool","Coq","CorVision","Coral 66","Corn","Creative Thinking","Critical Thinking","Cryptol","Csound","Curl","Curry","Customer Service","Customer Support","Cyclone","Cython","D","D","DASL (Datapoint's Advanced Systems Language)","DASL (Distributed Application Specification Language)","DATATRIEVE","DCL","DIBOL","DRAKON","DYNAMO","Dart","Data","Data Analysis","Data Analytics","Data Intelligence","Data Migration","Data Mining","Data Science","Data Settings","Data Storage","Data Strategy","Data Structures","Data Visualizations","DataFlex","Database","Database Administration","Database Design","Database Management","Database Management Systems (DBMS)","Database Techniques","Databases","Datalog","Debugging","Decision Making","Deductive Reasoning","Deesel (formerly G)","Delphi","Design","Design Principles","Design Prototypes","Design Specifications","Design Tools","Desktop Support","Detail Oriented","Developer","Development","Development Tools","Diagnosing Hardware","Diagnosing Software","DinkC","Document","Document Bugs","Document Issues","Documentation","Dog","Draco","Drilling","Driving","Dylan","E","E","E#","EASYTRIEVE PLUS","ECMAScript","EGL","ELAN","EPL","ESPOL","EXEC 2","Ease","Easy PL/I","Easy Programming Language","Edinburgh IMP","Eiffel","Electronics","Elixir","Elm","Emacs Lisp","Email","Embedded Hardware","Emerald","Emerging Technologies","Empathy","End User Support","Engineering","Enterprise Systems","Epigram","Erlang","Error Logs","Escalate Issues","Escher","Esterel","Etoys","Euclid","Euler","Euphoria","EusLisp Robot Programming Language","Excel","Executable UML","Explaining Technical Information Clearly","F","F","F#","F-Script","FAUST","FFP","FL","FLOW-MATIC","FOCAL","FOCUS","FOIL","FORMAC","FP","FPr","Fabrication","Factor","Falcon","Fantom","File Systems","Finishing","First Level Support","Fjölnir","Flavors","Flex","Flexibility","Follow Scripts","Follow Specifications","Follow Technical Instructions","Forth","Fortran – ISO/IEC 1539","Fortress","Fourth Generation Languages","FoxBase","FoxPro","Franz Lisp","Frege","Friendly Demeanor","Front End Design","G","G","G-code","GAMS","GAP","GDL","GEORGE","GJ","GLSL","GM","GNU E","GOAL","GOM (Good Old Mad)","GOTRAN","GPSS","GRASS","Game Maker Language","GameMonkey Script","Generational","Genie","Go","Go!","Godiva","Goo","Google Analytics","Google Apps Script","Gosu","GraphTalk","Grinding","Groovy","Gödel","H","HAL/S","HLSL","HTML Authoring Tools","HTML Conversion Tools","Hack","Hamilton C shell","Harbour","Hardware","Hardware Upgrades","Hartmann pipelines","Haskell","Haxe","Help Desk","Help Desk Reporting Systems","High Level Assembly","Hop","Hope","Hugo","Hume","HyperTalk","I","IBM Basic assembly language","IBM HAScript","IBM Informix-4GL","IBM RPG","ICI","IDL","IMP","IPL","IPTSCRAE","ISLISP","ISPF","ISWIM","IT Manager","IT Optimization","IT Security","IT Soft Skills","IT Solutions","IT Support","Icon","Id","Identify Process Improvements","Identify Solutions","Idris","Implementation","Industry Systems","Inform","Information Architecture","Information Design","Information Systems","Information Technology","Infrastructure","Installation","Installing Systems","Integrated Technologies","Interacting Calmly with Agitated Customers","Interaction Design","Interaction Flows","Interface with Clients","Interface with Vendors","Internet","Interpersonal","Io","Ioke","J","J","J#","J++","JADE","JAL","JASS","JCL","JEAN","JOSS","JOVIAL","JScript","JScript .NET","Jako","Janus","Java","JavaFX Script","JavaScript","Join Java","Joule","Joy","Julia","Jython","K","K","KEE","KIF","KRC","KRL","KRL (KUKA Robot Language)","KRYPTON","Kaleidoscope","Karel","Karel++","Kixtart","Klerer-May System","Kojo","Kotlin","L","L","L# .NET","LANSA","LC-3","LIL","LINC","LIS","LISA","LPC","LSE","LSL","LYaPAS","LaTeX","LabVIEW","Ladder","Lagoona","Languages","Lasso","Lava","Leadership","Leda","Legoscript","LilyPond","Limbo","Limnor","Lingo","Linoleum","Linux","Lisaac","Lisp – ISO/IEC 13816","Listening","Lite-C","Lithe","Little b","LiveCode","LiveScript","Logic","Logical Thinking","Logo","Logtalk","LotusScript","Lua","Lucid","Lustre","Lynx","M","M#","M2001","M4","MAD (Michigan Algorithm Decoder)","MAD/I","MAPPER now part of BIS","MARK-IV now VISION:BUILDER","MASM Microsoft Assembly x86","MATLAB","MDL","MIIS","MIMIC","MIVA Script","ML","MOO","MPD","MSIL – deprecated name for CIL","MSL","MUMPS","Mac OS","MacOS","Machine code","Magik","Magma","Maintain Composure","Maintenance","Management","Managing Customer Expectations","Manual Dexterity","Maple","Mary","Math","Mathematica","Max (Max Msp – Graphical Programming Environment)","MaxScript internal language 3D Studio Max","Maxima (see also Macsyma)","Maya (MEL)","Mechanical","Mechanical Reasoning","Meeting Deadlines","Mentoring Junior Staff","Mercury","Mesa","Messaging","Metacard","Metafont","Methodology","Metrics","MicroScript","Microcode","Microsoft Office","MillScript","Mirah","Miranda","Mobile","Mobile Applications","Mobile Devices","Moby","Mock Ups","Model 204","Modelica","Modeling","Modification","Modula","Modula-2","Modula-3","Mohol","Mortran","Motivation","Mouse","Multi-Tasking","Multimedia","Multitasking","Mystic Programming Language (MPL)","N","NASM","NATURAL","NESL","NEWP","NGL","NPL","NSIS","NWScript","NXT-G","Napier88","Needs Analysis","Neko","Nemerle","Net.Data","NetLogo","NetRexx","Network Architecture","Network Operations","Network Security","Networking","Networks","New Technologies","NewLISP","Newspeak","NewtonScript","Nial","Nice","Nickle","Nim","Not Quite C (NQC)","Not eXactly C (NXC)","Nu","O","OBJ2","OCaml","OPL","OPS5","ORCA/Modula-2","OS Programming","Oak","Oberon","Object Lisp","Object Pascal","Object REXX","ObjectLOGO","Objective-C","Objective-J","Obliq","Octave","OmniMark","Ongoing Learning about Products","Onyx","Opa","Opal","OpenCL","OpenEdge ABL","Operating Systems","Operations","OptimJ","Optimizing","Optimizing User Experiences","Optimizing Website Performance","Orc","Organization","Organizational","Oriel","Orwell","Outlook","Oxygene","Oz","P","P#","PARI/GP","PCASTL","PCF","PDL","PEARL","PHP","PIKT","PILOT","PL-11","PL/0","PL/B","PL/C","PL/I – ISO 6160","PL/M","PL/P","PL/SQL","PL360","PLANC","PLEX","PLEXIL","POP-11","PPL","PROIV","PROMAL","PROSE modeling language","PROTEL","ParaSail (programming language)","Parallel Processing","Pascal – ISO 7185","Patience","People Skills","PeopleCode","Performance","Perl","Perl6","Personal","Personas","Photography","Phrogram","Physics","Pico","Picolisp","Pict","Pike","Pipelines","Pizza","Plankalkül","Planner","Planning","Platforms","Plus","PortablE","Post Object Programming","PostScript","PowerBuilder – 4GL GUI applcation generator from Sybase","PowerPoint","PowerShell","Powerhouse","Presentation","Prioritizing","Pro*C","Problem Solving","Problem Solving Skills","Process Flows","Processing","Processing.js","Product Design","Product Development","Product Management","Product Reliability","Product Support","Product Training","Proficiency","Programming","Programming Languages","Programming Methodologies","Prograph","Project Management","Prolog","Promela","Promoting Additional Products and Services","Prototyping Methods","ProvideX","Pure","Python","P′′","Q","Q (equational programming language)","Q (programming language from Kx Systems)","QPL","Qalb","QtScript","QuakeC","Quality Assurance","Quality Conscious","Quality Control","Quantitative Reports","Quantitative Research","Questioning","R","R","R++","RAPID","REBOL","REFAL","REXX","ROOP","RPG","RPL","RSL","RTL/2","Racket","Rapira","Ratfiv","Ratfor","Red","Redcode","Redirecting Problems to Appropriate Resources","Refinishing","Reia","Relational Databases","Relational Programming","Reliability","Remodeling","Repairing","Repairs","Report Bugs","Reporting","Reporting Product Flaws to Appropriate Staff","Reporting Systems","Research","Resolve Customer Issues","Resolve Technical Issues","Respond to Email","Responsive Design","Restoration","Revision Control","Revolution","Rlab","Ruby","RuneScript","Rust","S","S","S-Lang","S-PLUS","S/SL","S2","S3","SA-C","SAIL","SALSA","SAM76","SAS","SASL","SBL","SETL","SIGNAL","SIMPOL","SIMSCRIPT","SISAL","SLIP","SMALL","SML","SNOBOL(SPITBOL)","SOL","SP/k","SPARK","SPIN","SPS","SQR","SR","SYMPL","SabreTalk","Sather","Sawzall","Scala","Scheduling","Scheme","Scilab","Scratch","Script.NET","Search Engine Optimization (SEO)","Second Level Support","Security","Sed","See also","Seed7","Self","Self Motivated","Self Starting","Self-Motivation","SenseTalk","SequenceL","Servers","SiMPLE","Simula","Simulink","Small Basic","Smalltalk","Snap!","Snowball","Social Media","Software","Software Development","Software Engineering","Software Installations","Software Quality Assurance (QA)","Software Support","Software Upgrades","Soliciting Customer Feedback to Improve Service","Solution Delivery","Sorting","Span","Speedcode","Spelling and Grammar","Squeak","Squirrel","Stackless Python","Starlogo","Stata","Stateflow","Statistical Analysis","Storage","Storyboards","Strand","Stress Management","Structured Query Language (SQL)","Structures","Style Guides","Subtext","SuperCollider","SuperTalk","Support","Support Systems","Swift (Apple programming language)","Swift (parallel scripting language)","Symbolic Programming","SyncCharts","System Architecture","System Design","System Development","System Programming","System Testing","SystemVerilog","Systems Analysis","Systems Software","T","T","T-SQL","TACL","TACPOL","TADS","TAL","TECO","TELCOMP","TEX","TIE","TMG, compiler-compiler","TOM","TPU","TTCN","TTM","TUTOR","TXL","Tablets","Tcl","TeX","Tea","Teaching Customers How to Work Around Product Limitations","Team Building","Team Oriented","Teamwork","Teamwork Skills","Tech Skills Listed by Job","Tech Support","Technical","Technical Aptitude","Technical Services","Technical Support","Technical Writing","Technology","Telephone Communication","Testing","Third Generation Languages","Ticketing Systems","Timber","Time Management","Time Management Skills","Tom","Tools","Topspeed","Touch Input Navigation","TouchDevelop","Trac","Training","Training Customers to Use Technology","Triage on Support Requests","Troubleshooting","Troubleshooting Tools","Turbo C++","Turing","TypeScript","Typing","U","UCSD Pascal","UNITY","UNIX","Ubercode","Umple","Unicon","Uniface","Unix shell","UnrealScript","Usability","Use Logical Reasoning","User Experience","User Experience Design","User Flows","User Interaction Diagrams","User Interface","User Research","User Testing","User-Centered Design","V","VBA","VBScript","VHDL","VSXu","Vala","Verbal Communications","Verilog","Virtualization","Visual Basic","Visual Basic .NET","Visual DataFlex","Visual Design","Visual DialogScript","Visual Fortran","Visual FoxPro","Visual J#","Visual J++","Visual Objects","Visual Prolog","W","WATFIV, WATFOR","Web","Web Analytics","Web Applications","Web Design","Web Development","Web Platforms","Web Services","Web Support","Web Technologies","WebDNA","WebQL","Winbatch","Window","Windowing Systems","Windows","Windows PowerShell","Wireframes","Wolfram Language","Work Independently","Working Independently","Working Odd Hours","Working Quickly","Workstations","Writing","Writing Clear and Concise Emails, Memos and Reports","Written Communications","Wyvern","X","X#","X++","X10","XBL","XC (exploits XMOS architecture)","XL","XOTcl","XPL","XPL0","XQuery","XSB","XSLT – see XPath","Xojo","Xtend","Y","YQL","Yorick","Z","Z notation","ZOPL","ZPL","Zeno","alytical","bc","chomski","csh","dBase","dc","es","iOS","ksh","make","ministrative Skills","nesC","o:XML","occam","occam-π","rc","rex","vvvv","xHarbour"]
}

const university = {
  name: 'University',
  data: ["Донбаський державний технічний університет","Білоцерківський державний аграрний університет","Бучацький інститут менеджменту і аудиту","Вінницький національний аграрний університет","Вінницький державний педагогічний університет імені Михайла Коцюбинського","Вінницький національний медичний університет імені Миколи Пирогова","Вінницький національний технічний університет","Глухівський національний педагогічний університет імені Олександра Довженка","Кролевецький соціально-гуманітарний інститут","Дніпродзержинський державний технічний університет","Дніпропетровський державний університет внутрішніх справ","Дніпропетровський національний університет","Дніпропетровський державний аграрний університет","Дніпропетровський національний університет залізничного транспорту","Дніпропетровський університет економіки та права","Національна металургійна академія","Національний гірничий університет","Придніпровська державна академія будівництва і архітектури","Український державний хіміко-технологічний університет","Донецький державний інститут штучного інтелекту","Донецька академія автомобільного транспорту","Донецький державний медичний університет імені Максима Горького","Донецький державний університет економіки і торгівлі імені Михайла Туган-Барановського","Донецький державний університет управління","Донецький інститут туристичного бізнесу","Донецький національний технічний університет","Донецький національний університет","Донецький фізико-технічний інститут","Дрогобицький державний педагогічний університет імені Івана Франка","Житомирський державний технологічний університет","Житомирський державний університет імені Івана Франка","Запорізька державна інженерна академія","Запорізький державний медичний університет","Запорізький національний університет","Запорізький національний технічний університет","Класичний приватний університет","Івано-Франківський державний медичний університет","Івано-Франківський національний технічний університет нафти і газу","Прикарпатський університет імені Василя Стефаника","Національний університет державної податкової служби України","Ірпінська фінансово-юридична академія","Кам'янець-Подільський національний університет імені Івана Огієнка","Подільський державний аграрно-технічний університет","Академія адвокатури України","Академія муніципального управління","Відкритий міжнародний університет розвитку людини «Україна»","Державна академія житлово-комунального господарства Міністерства будівництва, архітектури та житлово-комунального господарства України","Державна академія статистики, обліку та аудиту Держкомстату України","Державний університет інформаційно-комунікаційних технологій","Київський гуманітарний інститут","Київська державна академія водного транспорту імені гетьмана Петра Конашевича-Сагайдачного","Київський інститут сучасної психології та психотерапії","Київська школа економіки","Київський міжнародний університет","Київський університет імені Бориса Грінченка","Київський національний економічний університет імені Вадима Гетьмана","Київський національний лінгвістичний університет","Київський національний торговельно-економічний університет","Київський національний університет будівництва і архітектури","Київський національний університет внутрішніх справ","Київський національний університет імені Тараса Шевченка","Київський національний університет культури і мистецтв","Київський національний університет технологій і дизайну","Київський славістичний університет","Київський державний інститут декоративно-прикладного мистецтва та дизайну імені Михайла Бойчука","Київський університет права НАН України","Київський університет ринкових відносин","Міжнародний Соломонів університет","Національна академія внутрішніх справ України","Національна академія державного управління при Президентові України","Національна академія образотворчого мистецтва і архітектури","Національна академія управління","Національна академія Служби безпеки України","Національний авіаційний університет","Національний аграрний університет","Національний медичний університет імені акад. Олександра Богомольця","Національний педагогічний університет імені М.П. Драгоманова","Національний технічний університет України «Київський політехнічний інститут»","Національний транспортний університет","Національний університет \"Києво-Могилянська академія\"","Національний університет фізичного виховання і спорту України","Національний університет харчових технологій","Український державний університет економіки і фінансів Міністерства фінансів України","Українсько-американський гуманітарний інститут \"Вісконсінський міжнародний університет\"","Кіровоградський державний педагогічний університет імені Володимира Винниченка","Кіровоградський національний технічний університет","Кіровоградський інститут державного та муніципального управління Класичного приватного університету","Кременчуцький національний університет","Криворізький державний педагогічний університет","Криворізький технічний університет","Луганський національний аграрний університет","Луганський національний педагогічний університет імені Тараса Шевченка","Східноукраїнський національний університет імені Володимира Даля","Волинський національний університет імені Лесі Українки","Луцький державний технічний університет","Луцький гуманітарний університет","Академія сухопутних військ імені гетьмана Петра Сагайдачного","Інститут підприємництва та перспективних технологій","Львівська національна академія мистецтв","Львівський національний університет ветеринарної медицини та біотехнологій імені Степана Гжицького","Львівська національна музична академія імені Миколи Лисенка","Львівська богословська семінарія","Львівська комерційна академія","Львівська православна богословська академія","Львівський інститут менеджменту","Львівський національний аграрний університет","Львівська державна фінансова академія","Львівський державний університет фізичної культури","Львівський інститут банківської справи","Львівський державний університет внутрішніх справ","Львівський національний медичний університет імені Данила Галицького","Львівський національний університет імені Івана Франка","Національний університет «Львівська політехніка»","Національний лісотехнічний університет України","Львівський державний інститут новітніх технологій та управління ім. В.Чорновола","Львівський інститут економіки і туризму","Українська академія друкарства","Український католицький університет","Львівський державний університет безпеки життєдіяльності","Львівський центр дистанційно-заочного навчання ВНЗ \"Східноєвропейський університет економіки і менеджменту\"","Донбаська національна академія будівництва і архітектури","Приазовський державний технічний університет","Мелітопольський державний педагогічний університет","Таврійський державний агротехнологічний університет","Національний університет кораблебудування імені адмірала Макарова","Миколаївський державний аграрний університет","Чорноморський державний університет імені Петра Могили","Миколаївський обласний інститут післядипломної педагогічної освіти","Миколаївський політехнічний інститут","Мукачівський державний університет","Ніжинський державний університет імені Миколи Гоголя","Ніжинський агротехнічний інститут","Військова академія м. Одеса","Одеська державна академія будівництва та архітектури","Одеська державна академія холоду","Одеський державний аграрний університет","Одеська національна академія зв'язку імені Олександра Попова","Одеська національна академія харчових технологій","Одеська національна морська академія","Національний університет «Одеська юридична академія»","Одеський державний екологічний університет","Одеський національний економічний університет","Одеський національний морський університет","Одеський національний політехнічний університет","Одеський національний університет імені Іллі Мечникова","Південноукраїнський державний педагогічний університет імені Костянтина Ушинського","Національний університет \"Острозька академія\"","Переяслав-Хмельницький державний педагогічний університет імені Григорія Сковороди","Міжгалузевий інститут підвищення кваліфікації та перепідготовки спеціалістів","MBA від Міжгалузевого інституту підвищення кваліфікації та перепідготовки спеціалістів споживчої кооперації","Полтавський університет економіки і торгівлі","Полтавська державна аграрна академія","Полтавський державний педагогічний університет імені В.Г. Короленка","Полтавський національний технічний університет імені Юрія Кондратюка","Українська медична стоматологічна академія","Міжнародний економіко-гуманітарний університет імені академіка Степана Дем'янчука","Національний університет водного господарства та природокористування","Рівненський державний гуманітарний університет","Слов'янський державний педагогічний університет","Перший Український морський інститут","Сумський державний університет","Сумський національний аграрний університет","Українська академія банківської справи","Європейський університет фінансів, інформаційних систем, менеджменту і бізнесу","Тернопільський національний технічний університет імені Івана Пулюя","Тернопільський національний економічний університет","Тернопільський національний педагогічний університет імені В. Гнатюка","Тернопільський державний медичний університет імені І. Я. Горбачевського","Закарпатський державний університет","Ужгородський національний університет","Ужгородський торговельно-економічний інститут Київського національного торговельно-економічного університету","Український інститут лінгвістики і менеджменту","Уманський національний університет садівництва","Уманський державний педагогічний університет імені Павла Тичини","Національна академія Національної гвардії України","Національна юридична академія імені Ярослава Мудрого","Харківська державна академія дизайну і мистецтв","Харківська державна академія культури","Харківський гуманітарний університет \"Народна українська академія\"","Харківський державний економічний університет","Харківський державний медичний університет","Харківський державний технічний університет будівництва та архітектури","Харківський державний університет харчування та торгівлі","Харківський національний автомобільно-дорожній технічний університет","Харківський національний економічний університет","Харківський національний педагогічний університет імені Григорія Сковороди","Харківський національний університет внутрішніх справ","Харківський національний університет імені Василя Каразіна","Харківський національний університет радіоелектроніки","Національний аерокосмічний університет імені Миколи Жуковського \"ХАІ\"","Національний технічний університет \"Харківський політехнічний інститут\"","Національний фармацевтичний університет","Українська інженерно-педагогічна академія","Харківський національний університет імені Петра Василенка","Херсонський державний морський інститут","Херсонський державний університет","Херсонський економічно-правовий інститут","Херсонський національний технічний університет","Хмельницький економічний університет","Хмельницький національний університет","Хмельницький університет управління та права","Хмельницька гуманітарно-педагогічна академія","Черкаський державний технологічний університет","Черкаський інститут банківської справи","Черкаський інститут пожежної безпеки імені Героїв Чорнобиля","Черкаський національний університет імені Богдана Хмельницького","Буковинський державний медичний університет","Буковинський університет","Чернівецький національний університет імені Юрія Федьковича","Чернівецький торговельно-економічний інститут","Чернігівський державний педагогічний університет ім. Т.Г. Шевченка","Чернігівський державний технологічний університет","Ялтинський університет менеджменту"]
}

const speciality = {
  name: 'Speciality',
  data: ['Адміністратор баз даних', 'Архітектор програмного забезпечення', 'Менеджер з інформаційних технологій', 'Менеджер продуктів в області ІТ', 'Програміст', 'Керівник проектів в області ІТ', 'Керівник розробки програмного забезпечення', 'Системний аналітик', 'Фахівець з інформаційних ресурсів', 'Спеціаліст з інформаційних систем', 'Спеціаліст з тестування в області ІТ', 'Технічний письменник (фахівець з технічної документації в галузі ІТ)']
}

const position = {
  name: 'Position',
  data: [".NET Developer","Account Executive","Administrative Assistant","Advanced Business Intelligence Analyst/Project Manager","Analyst","Analytical Lab Technician","Analytical Services Chemist","Animator","Announcer","Application Developer","Application Support Analyst","Application Technical Specialist","Applications Engineer","Art Director","Assistant Editor","Assistant Field Technician","Assistant Technician","Associate Developer","Associate Director Social Business Intelligence and Big Data","Associate Producer","Audio and Video Equipment Technician","Author","Broadcast News Analyst","Broadcast and Sound Engineering Technician","Broadcaster","Business Analyst","Business Intelligence Analyst","Business Intelligence Developer","Business Intelligence Director","Business Intelligence Engineer","Business Intelligence Solutions Developer","Business Intelligence and Foundation Services Leader","Business Intelligence and Reporting Analyst","Business Objects Architect","Business System Analyst","Business intelligence Business Analyst","Camera Operator","Chemical Technician","Chief Information Officer","Chief Technology Officer","Climate Data Analyst","Clinical Data Research","Clinical Pharmacy Assistant","Clinical Research Associate","Clinical Research Coordinator","Clinical Research Director","Cognos Business Development Architect","Cognos Business Intelligence Developer","Communication Specialist","Communications Director","Communications Manager","Compliance Technician","Computer Programmer","Computer Systems Manager","Computer and Information Systems Manager","Computing Consultant","Conservation Technician","Consumer Insight Manager","Content Engineer","Content Manager","Copy Editor","Copy Writer","Creative Director","Creative Project Manager","Customer Support Administrator","Customer Support Specialist","Cyber Intelligence Watch Officer","Data Analyst - Business Intelligence","Data Architect","Data Center Support Specialist","Data Quality Manager","Data Warehouse and Business Intelligence Developer","Database Administrator","Database Coordinator","Designer","Desktop Support Manager","Desktop Support Specialist","Developer","Development Technologist","Digital Media Specialist","Director of Business Intelligence and Data Warehouse","Director of Technology","Drug Evaluator","Editor","Editorial Assistant","Electronic Data Interchange Specialist","Electronic Marketing Manager","Enterprise Account Executive - Predictive Intelligence","Enterprise Intelligence Reporting Architect","Environmental Data Analyst","Environmental Emergencies Assistant","Environmental Emergencies Planner","Environmental Project Analyst","Environmental Research Assistant","Environmental Services Representative","Environmental Specialist","Ethics Office Business Intelligence Officer","Executive Producer","Exploration Director","Federal - Business Intelligence Lead","Field Technician","Film/Video Editor","Financial Analyst","Freelance Writer","Front End Developer","Genetic Counselor","Grants/Proposal Writer","Graphic Artist","Graphic Designer","Graphic/Web Designer","Graphical User Interface (GUI) Programmer","Groundwater Technician","Hardware Designer","Health Research Assistant","Health Technology Assistant","Healthcare Business Intelligence Manager","Help Desk Specialist","Help Desk Technician","Hospital Accounting Analyst","Hospital Research Assistant","IT Support Manager","IT Support Specialist","IT Systems Administrator","Informatica Extract Transform Load (ETL) Developer","Information Delivery, Data Analyst","Information Technology Business Intelligence Platform Product Manager","Information Technology Coordinator","Information Technology Director","Information Technology Manager","Institutional Research Business Intelligence Systems Analyst","Integration/Business Intelligence Technical Lead","Interface Designer","Intranet Applications Manager","Intranet Applications Specialist","Intranet Specialist","Intranet Support","Java Developer","Java Developer - Big Data/Business Intelligence","Journalist","Junior Analyst","Junior Software Engineer","Laboratory Assistant","Laboratory Instructor","Laboratory Technician","Lead Analytics Engineer","Lead Business Intelligence Developer","Line Producer","Management Information Systems Director","Manager, Business Intelligence","Manager, Business Metrics/Analytics","Managing Editor","Market Access Analyst","Market Access Associate","Marketing Assistant","Marketing Consultant","Media Director","Media Planner","Media Product Development Manager","Media Specialist","Media and Communication Equipment Operator","Medical Physics Researcher","Medical Research Assistant","Medical Research Technician","Medical Scientist","Medical Services Assistant","Merchandising Manager","Microstrategy Dashboard Developer and Architect","Multimedia Designer","Multimedia Services Manager","Multimedia Specialist","Network Architect","Network Engineer","Network Systems Administrator","News Analysts","Operations Clerk","Operations Research Analysis Manager","Operations Section Manager","Operations Supervisor","Operations Team Leader","Operations Unit Manager","Oracle Technical Lead","Organic Lab Research Assistant","Organic Lab Worker","P - S","PeopleSoft Business Analyst","Pharmaceutical Assistant","Pharmaceutical Marketing Assistant","Pharmaceutical Research Analyst","Pharmaceutical Research Assistant","Pharmaceutical Research Technician","Pharmaceutical Technician","Pharmacy Affairs Assistant","Pharmacy Assistant","Pharmacy Innovation Assistant","Photo Editor","Photographer","Power Regulator","Process Inspector","Process Research Manager","Producer","Product Test Specialist","Production Artist","Production Assistant","Production Manager","Production Team Leader","Production Test Supervisor","Professional Programs Assistant","Programmer","Programmer Analyst","Project Coordinator","Project Manager","Project Support, Business Intelligence and Fraud Agents","Promotions Specialist","Proofreader","Public Relations Specialist","Publicist","Quality Assistant","Quality Assurance Manager","Quality Assurance Technologist","Quality Control Analyst","Quality Control Manager","Quality Control Supervisor","Radio Operator","Recording Engineer","Regulatory Affairs Associate","Rehabilitation Engineering Assistant","Reimbursement Analyst","Report and Visualization Developer, Business Intelligence","Reporter","Research Assistant","Research Technician","Research and Development Associate","Research and Development Director","Research and Development Manager","Research and Development Supervisor","Research and Development Technician","Research and Development Tester","Researcher","Retail Analyst","SAP Business Intelligence Consultant","SQL Business Intelligence and data Warehouse Manager","Sales Analyst","Satellite Data Analyst","Science Technician","Scientific Artist","Section Editor","Security Specialist","Senior Analyst, Retail Analytics and Reporting","Senior Applications Engineer","Senior Competitive Intelligence Manager","Senior Database Administrator","Senior Developer with Pentaho Business Intelligence Suite","Senior Engineer Information Technology - Business intelligence Reporting","Senior Manager, Product Intelligence and Cost Analytics","Senior Market Intelligence Analyst","Senior Network Architect","Senior Network Engineer","Senior Network System Administrator","Senior Pharmacy Student","Senior Programmer","Senior Programmer Analyst","Senior Security Specialist","Senior Software Engineer","Senior Support Specialist","Senior System Administrator","Senior System Analyst","Senior System Architect","Senior System Designer","Senior Systems Analyst","Senior Systems Software Engineer","Senior Technical Consultant - Business Intelligence","Senior Web Administrator","Senior Web Developer","Service Market Intelligence Manager","Social Media Specialist","Social Media and Analytics Associate","Software Architech","Software Developer","Software Engineer","Software Engineer - Data Warehouse/Business Intelligence","Software Engineering Assistant","Software Quality Assurance Analyst","Solid Waste Field Technician","Solution Architect, Business Intelligence","Solutions Designer, Business Intelligence","Sound Mixer","Special Projects Coordinator","Stage Hand","Statistician","Strategic Business Manager","Structural Engineer","Subject Matter Expert - Business Intelligence Tools","Supply Chain Business Intelligence - Senior Consultant","Support Specialist","System Architect","Systems Administrator","Systems Analyst","Systems Designer","Systems Software Engineer","Tableau Data Analytics Platform Lead","Technical Operations Officer","Technical Producer","Technical Specialist","Technical Support Engineer","Technical Support Specialist","Technical Support Technician","Technical Writer","Technology Research Analyst","Technology Research Manager","Technology Specialist","Telecommunications Specialist","Telecommunications Technician","Television Announcer","Therapeutic Director","Threat Intelligence Analyst","Total Quality Management Director","Total Quality Manager","Transportation Project Manager","Videographer","Web Administrator","Web Content Executive","Web Customer Support Specialist","Web Designer","Web Developer","Web Product Manager","Web Systems Director","Webmaster"]
}

const companyName = {
  name: 'CompanyName',
  data: ["SoftServe","EPAM","Ciklum","ELEKS","GlobalLogic","Luxoft","Infopulse","Miratech","NetCracker","Samsung R&D Institute Ukraine","Netpeak","Terrasoft","Intellias","Cogniance","AMC Bridge","Daxx BV","Astound Commerce","N-iX","DataArt","Delphi LLC","Provectus","Playtika UA","Levi9 Ukraine","Depositphotos","INTROPRO LLC","Sigma Software","Maxymiser","Symphony Solutions","Lucky Labs","GeeksForLess Inc.","Playtech","Plarium Global","Magento Commerce","Prom.ua","Lohika Systems","TEAM International Services, Inc.","CyberVision, Inc.","Svitla Systems, Inc.","Zone3000","Intecracy Group Consortium","Dev-Pro.net","Win Interactive LLC","DIO-soft","Noosphere","ZEO Alliance","Materialise","Innovecs","Intetics Co","CMK","Wargaming.net","ISD","CloneFish","Grammarly","AltexSoft","Brightgrove LTD.","PFSOFT","3Shape Ukraine","Trionika","Perfectial","Light IT","BETLAB","Epom","111PIX UA","[bvblogic]","TeamDev","SPD-Ukraine","Govitall","DevelopEx","Itera","AB Soft","Ostware Services","UNITY-BARS","PulsarFour","HYS Enterprise","LogNet Systems","Intersog","SoftBistro","Zfort Group","MobiDev","Rokitt","Grid Dynamics","SimCorp","Lime Systems","CHI Software","Trinetix","Sitecore","Nika Entertainment","Anadea Inc.","Softheme","Amadeus Product and Solution Centre, CESE","EngagePoint","Comodo Group","Program-Ace","Ignite Outsourcing","AgileEngine","Apriorit","Cleveroad","Creative Webmedia","Serena Software Ukraine","ABBYY Ukraine","B2B Soft","Digital Screens","PortaOne","Akvelon Ukraine","EpsySoft","Looksery Inc.","ArtyGeek","DEVOLER","The APP Solutions","X1 Group","INSART","Techery","Eltrino, LLC","WIX.com","v-jet","MWDN","VertaMedia","Beetroot Resources","Grossum","Stanfy","Astwellsoft","ComboApp","Opower Ukraine","Acceptic","NetEnt","Appus","UniSender","FFW","Prophonix","Pixabit solutions","Swivl","MacPaw","Clickky Family","Redwerk","Eastern Peak Software","Timecode LLC","Qoderoom (formerly known as Dev IQ)","TechMagic","Keystonett","AppliKey Solutions","KeepSolid","Brander","Nitra","Miritec","Envion Software","IDAP Group LLC.","Sloboda studio","Waverley Software","Trust Sourcing","Caspio","Digicode","LEZGRO","Active Bridge, LLC","Bkstg","Attract Group","AnvilEight","BOOMERS Group","Abweb","Rails Reactor","COAX Software","Ringostat","Valor Software Solutions","NCube Ltd.","Riff Point","Qualium Systems","Arbitas","A-MTOSS","IntellectEU","T4web","Blackthorn Vision","Apps-O-Rama","Romexsoft","MindK","ORO, Inc","Talkable","GORILLA","JBS","Rozdoum/Gentleware Ukraine","Readdle Inc.","Mobisoft Ltd.","Mobindustry Corp.","InvisibleCRM","SandSIV Group","Integrity Vision","SharpMinds"]
}

export default {
  generate: cb => {
    async.each([city, skill, university, speciality, position, companyName], ({name, data}, callback) => {
      addArray(Models[name], data, err => callback())
    }, err => cb(err))
  },
  city, skill, university, speciality, position, companyName
}
