document.addEventListener('DOMContentLoaded', () => {

    // Core translations and content
    const translations = {
        en: {
            // UI Text
            disclaimer_title: "Disclaimer",
            disclaimer_text: "This is an educational tool for privacy awareness. The scenarios presented are hypothetical and generalized. This tool does not provide legal advice, and its results are not an exhaustive analysis of any specific service's security or privacy practices.",
            main_title: "Digital Privacy Checkup",
            main_subtitle: "Answer a few questions about your online habits to see your privacy score and learn how to better protect your data in the digital world.",
            select_checklist_label: "Select Checklist:",
            checklist_general: "General Online Habits",
            language_switcher: "العربية",
            restart_btn: "🔄 Restart",
            score_title: "Your Privacy Score",
            score_initial_desc: "Answer the questions to see your score and get feedback.",
            score_desc_inprogress: "Keep going! Every question is a chance to learn.",
            score_desc_excellent: "Excellent! You have strong privacy habits.",
            score_desc_good: "Good start! There are a few areas you can improve.",
            score_desc_improvement: "There's room for improvement. Use the feedback to strengthen your digital defenses!",
            stat_answered: "Answered",
            stat_correct: "Correct",
            stat_incorrect: "Incorrect",
            completion_title: "Checkup Complete!",
            completion_text: "You've finished the assessment. Your final score is shown in the panel.",
            yes_btn: "Yes",
            no_btn: "No",
            next_btn: "Next Question",
            finish_btn: "Finish Checkup",
            worst_case_title: "Worst-Case Scenario",
            best_practice_title: "Best Practice:",
            best_practice_answer: "The better answer is",
            notes_label: "My Notes (Why I answered this way, what to change, etc.)",
            notes_placeholder: "e.g., I should start using a password manager...",
            case_study_title: "Real-World Case",
            footer_text: "This tool is open source, created by",
            footer_author: "Qusai Ismail",
            footer_repo: "View on GitHub",
            // Questions
            questions: [
                 {
                    id: 1,
                    article: "AI & Chatbots",
                    question: "Do you paste sensitive personal or work information (like private conversations, code, or internal documents) into public AI chatbots to get summaries or help发起?",
                    bestPractice: 'no',
                    worstCase: "Your sensitive information is often used to train the AI model. This means your 'private' data becomes a permanent part of the AI's knowledge base and could potentially be surfaced in answers to other users, leading to an irreversible data leak.",
                    remediation: "Treat public AI tools like a public forum. Never input any data you wouldn't post on the internet. Use company-approved or on-device AI for sensitive information.",
                    realCase: {
                        title: "Major Tech Company's AI Data Leak",
                        story: "In 2023, engineers at a major technology company reportedly leaked sensitive internal source code and meeting notes by pasting them into public AI chatbots to fix errors and summarize notes. This confidential data was absorbed into the AI systems, outside of the company's control, highlighting the risk of treating public AIs as private tools."
                    }
                },
                {
                    id: 2,
                    article: "Online Document Editors",
                    question: "When using a free online tool to edit or convert a sensitive PDF (e.g., a signed contract, a resume), do you assume the file is securely deleted from their servers right after you're done?",
                    bestPractice: 'no',
                    worstCase: "The service provider may store your documents on their servers indefinitely for 'analytics' or other purposes outlined in their ToS. A security breach of their system would expose your private files to hackers.",
                    remediation: "For sensitive documents, use trusted, offline software (like Adobe Acrobat or Preview on Mac). If you must use a web tool, check its privacy policy for data retention clauses.",
                    realCase: {
                        title: "The Vague Policies of Free Tools",
                        story: "While not a single breach, investigations into the privacy policies of many popular free online PDF editors and converters reveal that they often grant themselves the right to store, analyze, and even share anonymized data from uploaded documents. Users are often unaware their sensitive files are not immediately deleted."
                    }
                },
                {
                    id: 3,
                    article: "Cloud Photo Editors",
                    question: "Do you upload personal photos to free online 'AI enhancer' or 'profile picture maker' websites without reading their terms of service?",
                    bestPractice: 'no',
                    worstCase: "You may unknowingly grant the service a perpetual, worldwide license to use your face and photos in their advertising, for AI model training, or to sell to data brokers who build facial recognition databases.",
                    remediation: "Read the 'User Content' or 'License' section of the ToS before uploading images, especially of faces. Be extremely wary of services that require an account for a simple edit.",
                    realCase: {
                        title: "The Photo-Editing App Privacy Controversy",
                        story: "In 2019, a viral photo-editing app faced a massive backlash when users discovered its terms of service granted the parent company a 'perpetual, irrevocable, nonexclusive, royalty-free, worldwide' license to use, reproduce, and publish their photos, including their likeness, for any purpose."
                    }
                },
                {
                    id: 4,
                    article: "Local vs. Cloud Processing",
                    question: "Do you assume that a simple web app (like an image resizer) does all the work locally in your browser without uploading your file to a server?",
                    bestPractice: 'no',
                    worstCase: "Most web apps require uploading your file to their server for processing. This means your data leaves your computer, even for a simple task, exposing it to interception and storage on a third-party system you don't control.",
                    remediation: "Look for tools that explicitly state 'processes files locally' or 'your data never leaves your computer.' Assume uploading is the default unless proven otherwise.",
                    realCase: {
                        title: "The Unseen Upload",
                        story: "Many simple web utilities, such as online image compressors or format converters, silently upload user files to their servers for processing. While convenient, this was exploited in the past where unsecured servers of such small services were breached, leaking user files that individuals wrongly assumed were processed locally and privately on their own machines."
                    }
                },
                {
                    id: 5,
                    article: "Browser Extensions",
                    question: "Have you installed a browser extension (like a 'free' VPN, grammar checker, or coupon finder) that has permission to 'read and change all your data on the websites you visit'?",
                    bestPractice: 'no',
                    worstCase: "The extension can act as a keylogger for the web, capturing everything you type—including passwords and credit card numbers—across all sites. It's a massive privacy and security vulnerability.",
                    remediation: "Audit your browser extensions now. Remove any extension that asks for overly broad permissions or that you don't absolutely need and trust from a reputable developer.",
                    realCase: {
                        title: "The Browser Extension Scandal",
                        story: "A popular browser extension with millions of users that allowed them to customize website appearances was caught secretly recording the complete browsing history of every user. This data, tied to a unique identifier, was sent to a remote server, effectively spying on its entire user base."
                    }
                },
                {
                    id: 6,
                    article: "Password Managers",
                    question: "Do you use the same password for multiple online accounts, or do you rely on your memory instead of a password manager?",
                    bestPractice: 'no',
                    worstCase: "Reusing passwords means that if one site is breached, attackers can access your accounts on other sites. This can lead to identity theft, financial loss, and loss of control over your digital presence.",
                    remediation: "Use a reputable password manager to generate and store unique, strong passwords for every account. Enable two-factor authentication wherever possible.",
                    realCase: {
                        title: "Credential Stuffing Attacks",
                        story: "After a major data breach exposed millions of email/password pairs, attackers used automated tools to try those credentials on other popular sites. Thousands of people had their social media, email, and even bank accounts compromised because they reused the same password."
                    }
                },
                {
                    id: 7,
                    article: "Data Deletion",
                    question: "When you're finished with an online service or tool, do you just close the tab and abandon the account without formally deleting it?",
                    bestPractice: 'no',
                    worstCase: "Your data and files remain on their servers indefinitely as a 'ghost profile.' If that service is breached years later, your old, forgotten data is stolen and can be used in phishing attacks or for identity theft.",
                    remediation: "Before leaving a service, find the 'Delete Account' option (often buried in settings). This formally requests the removal of your data under regulations like GDPR/CCPA.",
                    realCase: {
                        title: "The Dating Site Data Breach",
                        story: "In 2015, a social network was hacked, and the data of millions of users was leaked. A significant number of those exposed were individuals who had created accounts years prior and had long since forgotten about them. Their 'ghost profiles' came back to cause immense personal and professional damage."
                    }
                },
                {
                    id: 8,
                    article: "Terms of Service",
                    question: "Do you click 'Accept' on the Terms of Service for online tools assuming they are all standard and can't really affect you?",
                    bestPractice: 'no',
                    worstCase: "You could be agreeing to binding arbitration (waiving your right to sue in court), allowing your personal data to be sold to third-party marketers, or giving up the intellectual property rights to anything you create on the platform.",
                    remediation: "Use tools like 'ToS;DR' (Terms of Service; Didn't Read) to get a quick summary. For any app where you'll upload important content, search the ToS for 'license,' 'content,' and 'third parties.'",
                    realCase: {
                        title: "Social Media Platform's Content Rights Grab",
                        story: "In 2012, a major social media platform updated its terms of service with a clause that many interpreted as granting the platform the right to sell users' photos to advertisers without payment or notification. The public outcry was so intense that the platform was forced to retract the controversial clause and clarify its policy."
                    }
                },
                {
                    id: 9,
                    article: "AI Image Generators",
                    question: "Do you use photos of yourself or your family as a base for AI image generators without considering how that biometric data will be used?",
                    bestPractice: 'no',
                    worstCase: "You are providing high-quality biometric data (the unique geometry of a face) to a company. This can be used to train facial recognition models, sold to other entities, or leaked in a breach, creating a permanent, unchangeable record of someone's face.",
                    remediation: "Avoid using real, identifiable faces in public AI image generators. Use them for creative, non-personal projects, or use services that have strong, clear privacy policies regarding biometric data.",
                    realCase: {
                        title: "AI Art Generators and Unconsented Data Training",
                        story: "Many popular AI image generators have faced public outcry and legal challenges for training their models on billions of images scraped from the internet, including personal photos and copyrighted works, often without the consent of the individuals or creators. This practice raised significant privacy concerns, as users' personal likenesses and private moments could become part of the AI's training data, potentially leading to their inadvertent recreation or use in ways they never authorized, and making it difficult to control their digital footprint once their biometric data is absorbed into such models."
                    }
                },
                {
                    id: 10,
                    article: "Connection Security",
                    question: "Do you ever use an online tool or app that does not have a padlock icon and 'https://' in the address bar?",
                    bestPractice: 'no',
                    worstCase: "Without HTTPS, your connection is unencrypted. Anyone on the same network (e.g., at a coffee shop, an airport) can intercept and read all the data you upload or the credentials you enter in plain text.",
                    remediation: "Never use a web app that isn't served over HTTPS. Modern browsers will warn you, but it's crucial to manually verify the padlock icon is present before sending any data.",
                    realCase: {
                        title: "Hacking Tool Demonstration",
                        story: "In 2010, a simple browser extension demonstrated how easy it was to hijack user accounts on an unsecured public Wi-Fi network. By listening to unencrypted traffic, it could steal session cookies from social media sites, allowing the attacker to take over a user's logged-in session with a single click."
                    }
                }
            ]
        },
        ar: {
            // UI Text - Improved for clarity and wider Arabic audience
            disclaimer_title: "إخلاء مسؤولية",
            disclaimer_text: "هذه أداة تعليمية للتوعية بالخصوصية. السيناريوهات المعروضة هي افتراضية وعامة. هذه الأداة لا تقدم استشارة قانونية، ونتائجها ليست تحليلاً شاملاً للممارسات الأمنية أو الخصوصية لأي خدمة محددة.",
            main_title: "فحص الخصوصية الرقمية",
            main_subtitle: "أجب عن بعض الأسئلة حول عاداتك على الإنترنت لترى درجة خصوصيتك وتتعلم كيف تحمي بياناتك بشكل أفضل في العالم الرقمي.",
            select_checklist_label: "اختر قائمة الفحص:",
            checklist_general: "العادات العامة على الإنترنت",
            language_switcher: "English",
            restart_btn: "🔄 إعادة البدء",
            score_title: "درجة خصوصيتك",
            score_initial_desc: "أجب عن الأسئلة لترى نتيجتك وتحصل على تقييم.",
            score_desc_inprogress: "استمر! كل سؤال هو فرصة لتعلم شيء جديد.",
            score_desc_excellent: "ممتاز! لديك عادات خصوصية قوية.",
            score_desc_good: "بداية جيدة! هناك بعض الجوانب التي يمكنك تحسينها.",
            score_desc_improvement: "هناك مجال للتحسين. استخدم الملاحظات لتقوية دفاعاتك الرقمية!",
            stat_answered: "تمت الإجابة",
            stat_correct: "صحيحة",
            stat_incorrect: "غير صحيحة",
            completion_title: "اكتمل الفحص!",
            completion_text: "لقد أنهيت التقييم. نتيجتك النهائية معروضة في اللوحة.",
            yes_btn: "نعم",
            no_btn: "لا",
            next_btn: "السؤال التالي",
            finish_btn: "إنهاء الفحص",
            worst_case_title: "السيناريو الأسوأ",
            best_practice_title: "أفضل ممارسة:",
            best_practice_answer: "الإجابة الأفضل هي",
            notes_label: "ملاحظاتي (لماذا أجبت هكذا، ما الذي يجب تغييره، إلخ.)",
            notes_placeholder: "مثال: يجب أن أبدأ في استخدام مدير كلمات المرور...",
            case_study_title: "حالة من الواقع",
            footer_text: "هذه الأداة مفتوحة المصدر، أنشأها",
            footer_author: "قصي اسماعيل",
            footer_repo: "عرض على GitHub",
            // Questions - Translated and Refined
            questions: [
                {
                    id: 1,
                    article: "الذكاء الاصطناعي وروبوتات الدردشة",
                    question: "هل تقوم بلصق معلومات شخصية أو مهنية حساسة (مثل محادثات خاصة، أكواد برمجية، أو مستندات داخلية) في روبوتات الدردشة العامة التي تعمل بالذكاء الاصطناعي للحصول على ملخصات أو مساعدة؟",
                    bestPractice: 'no',
                    worstCase: "غالباً ما تُستخدم معلوماتك الحساسة لتدريب نموذج الذكاء الاصطناعي. هذا يعني أن بياناتك 'الخاصة' تصبح جزءاً دائماً من قاعدة معارفه، وقد تظهر في إجابات لمستخدمين آخرين، مما يؤدي إلى تسريب بيانات لا يمكن عكسه.",
                    remediation: "تعامل مع أدوات الذكاء الاصطناعي العامة كأنها منتدى عام. لا تدخل أبداً أي بيانات لا تنشرها على الإنترنت. استخدم أدوات الذكاء الاصطناعي المعتمدة من شركتك أو التي تعمل على جهازك الخاص للمعلومات الحساسة.",
                    realCase: {
                        title: "تسريب بيانات الذكاء الاصطناعي في شركة تقنية كبرى",
                        story: "في عام 2023، قام مهندسون في إحدى الشركات التقنية الكبرى بتسريب شفرة مصدر داخلية حساسة وملاحظات اجتماعات عن طريق لصقها في روبوتات دردشة عامة تعمل بالذكاء الاصطناعي لإصلاح الأخطاء وتلخيص الملاحظات. تم استيعاب هذه البيانات السرية في أنظمة الذكاء الاصطناعي، خارج سيطرة الشركة، مما يسلط الضوء على مخاطر التعامل مع الذكاء الاصطناعي العام كأداة خاصة."
                    }
                },
                {
                    id: 2,
                    article: "محررات المستندات عبر الإنترنت",
                    question: "عند استخدام أداة مجانية عبر الإنترنت لتعديل أو تحويل ملف PDF حساس (مثل عقد موقّع أو سيرة ذاتية)، هل تفترض أن الملف يُحذف بأمان من خوادمهم فور انتهائك؟",
                    bestPractice: 'no',
                    worstCase: "قد يقوم مزود الخدمة بتخزين مستنداتك على خوادمه إلى أجل غير مسمى لأغراض 'التحليلات' أو لأغراض أخرى مذكورة في شروط الخدمة. أي خرق أمني لنظامهم سيكشف ملفاتك الخاصة للمخترقين.",
                    remediation: "للمستندات الحساسة، استخدم برامج موثوقة تعمل دون اتصال بالإنترنت (مثل Adobe Acrobat أو Preview على Mac). إذا كان لا بد من استخدام أداة ويب، تحقق من سياسة الخصوصية الخاصة بها لمعرفة بنود الاحتفاظ بالبيانات.",
                    realCase: {
                        title: "السياسات الغامضة للأدوات المجانية",
                        story: "على الرغم من عدم وجود خرق واحد محدد، إلا أن التحقيقات في سياسات الخصوصية للعديد من محررات ومحولات PDF المجانية الشهيرة عبر الإنترنت تكشف أنها غالبًا ما تمنح نفسها الحق في تخزين وتحليل وحتى مشاركة البيانات المجهولة من المستندات المرفوعة. غالبًا ما يكون المستخدمون غير مدركين أن ملفاتهم الحساسة لا يتم حذفها على الفور."
                    }
                },
                {
                    id: 3,
                    article: "محررات الصور السحابية",
                    question: "هل ترفع صوراً شخصية إلى مواقع 'تحسين الصور بالذكاء الاصطناعي' أو 'صانع صور الملف الشخصي' المجانية على الإنترنت دون قراءة شروط الخدمة الخاصة بهم؟",
                    bestPractice: 'no',
                    worstCase: "قد تمنح الخدمة دون علمك ترخيصًا دائمًا وعالميًا لاستخدام وجهك وصورك في إعلاناتها، أو لتدريب نماذج الذكاء الاصطناعي، أو لبيعها لوسطاء البيانات الذين ينشئون قواعد بيانات للتعرف على الوجه.",
                    remediation: "اقرأ قسم 'محتوى المستخدم' أو 'الترخيص' في شروط الخدمة قبل تحميل الصور، خاصة صور الوجوه. كن حذرًا للغاية من الخدمات التي تتطلب حسابًا لإجراء تعديل بسيط.",
                    realCase: {
                        title: "جدل الخصوصية في تطبيق تعديل الصور",
                        story: "في عام 2019، واجه تطبيق شهير لتعديل الصور رد فعل عنيفًا عندما اكتشف المستخدمون أن شروط خدمته تمنح الشركة الأم ترخيصًا 'دائمًا، وغير قابل للإلغاء، وغير حصري، وخالي من حقوق الملكية، وعالمي' لاستخدام واستنساخ ونشر صورهم، بما في ذلك مظهرهم، لأي غرض كان."
                    }
                },
                {
                    id: 4,
                    article: "المعالجة المحلية مقابل السحابية",
                    question: "هل تفترض أن تطبيق ويب بسيطًا (مثل أداة تغيير حجم الصور) يقوم بكل العمل محليًا في متصفحك دون رفع ملفك إلى خادم؟",
                    bestPractice: 'no',
                    worstCase: "تتطلب معظم تطبيقات الويب تحميل ملفك إلى خادمها لمعالجته. هذا يعني أن بياناتك تغادر جهاز الكمبيوتر الخاص بك، حتى لو كانت لمهمة بسيطة، مما يعرضها للاعتراض والتخزين على نظام طرف ثالث لا تتحكم فيه.",
                    remediation: "ابحث عن الأدوات التي تذكر صراحةً أنها 'تعالج الملفات محليًا' أو أن 'بياناتك لا تغادر جهازك أبدًا'. افترض أن التحميل هو الوضع الافتراضي ما لم يثبت العكس.",
                    realCase: {
                        title: "التحميل غير المرئي",
                        story: "تقوم العديد من أدوات الويب البسيطة، مثل ضواغط الصور عبر الإنترنت أو محولات الصيغ، بتحميل ملفات المستخدمين بصمت إلى خوادمها للمعالجة. ورغم أنها مريحة، فقد تم استغلال ذلك في الماضي حيث تم اختراق الخوادم غير المؤمنة لهذه الخدمات الصغيرة، مما أدى إلى تسريب ملفات المستخدمين الذين افترضوا خطأً أنها عولجت محليًا وخصوصية على أجهزتهم."
                    }
                },
                {
                    id: 5,
                    article: "إضافات المتصفح",
                    question: "هل قمت بتثبيت إضافة للمتصفح (مثل VPN 'مجاني'، أو مدقق نحوي، أو باحث عن كوبونات) لديها إذن 'لقراءة وتغيير جميع بياناتك على المواقع التي تزورها'؟",
                    bestPractice: 'no',
                    worstCase: "يمكن للإضافة أن تعمل كمسجل لكل ما تكتبه على الويب، بما في ذلك كلمات المرور وأرقام بطاقات الائتمان، عبر جميع المواقع. هذه ثغرة أمنية وخصوصية هائلة.",
                    remediation: "دقق في إضافات متصفحك الآن. أزل أي إضافة تطلب أذونات واسعة بشكل مفرط أو لا تحتاجها تمامًا ولا تثق في مطورها.",
                    realCase: {
                        title: "فضيحة إضافة المتصفح",
                        story: "تم اكتشاف إضافة متصفح شهيرة يستخدمها الملايين لتخصيص مظهر المواقع وهي تسجل سرًا سجل التصفح الكامل لكل مستخدم. تم إرسال هذه البيانات، المرتبطة بمعرّف فريد، إلى خادم بعيد، مما يعني أنها كانت تتجسس فعليًا على قاعدة مستخدميها بأكملها."
                    }
                },
                {
                    id: 6,
                    article: "مدير كلمات المرور",
                    question: "هل تستخدم نفس كلمة المرور لعدة حسابات على الإنترنت، أو تعتمد على ذاكرتك بدلاً من استخدام مدير كلمات مرور؟",
                    bestPractice: 'no',
                    worstCase: "إعادة استخدام كلمات المرور تعني أنه إذا تم اختراق أحد المواقع، يمكن للمهاجمين الوصول إلى حساباتك على مواقع أخرى. هذا قد يؤدي إلى سرقة الهوية، وخسارة مالية، وفقدان السيطرة على وجودك الرقمي.",
                    remediation: "استخدم مدير كلمات مرور موثوقًا لإنشاء وتخزين كلمات مرور قوية وفريدة لكل حساب. فعّل المصادقة الثنائية كلما أمكن.",
                    realCase: {
                        title: "تكرار استخدام نفس كلمة السر",
                        story: "بعد تسريب ضخم كشف ملايين من عناوين البريد الإلكتروني وكلمات المرور، استخدم المهاجمون أدوات آلية لتجربة تلك البيانات على مواقع شهيرة أخرى. تم اختراق آلاف حسابات البريد الإلكتروني ووسائل التواصل الاجتماعي وحتى الحسابات البنكية لأن المستخدمين أعادوا استخدام نفس كلمة المرور."
                    }
                },
                {
                    id: 7,
                    article: "حذف البيانات",
                    question: "عندما تنتهي من استخدام خدمة أو أداة عبر الإنترنت، هل تكتفي بإغلاق علامة التبويب وترك الحساب دون حذفه رسميًا؟",
                    bestPractice: 'no',
                    worstCase: "تبقى بياناتك وملفاتك على خوادمهم إلى أجل غير مسمى كـ 'ملف شخصي شبح'. إذا تم اختراق تلك الخدمة بعد سنوات، تُسرق بياناتك القديمة والمنسية ويمكن استخدامها في هجمات التصيد الاحتيالي أو لسرقة الهوية.",
                    remediation: "قبل مغادرة أي خدمة، ابحث عن خيار 'حذف الحساب' (غالبًا ما يكون مخفيًا في الإعدادات). هذا يطلب رسميًا إزالة بياناتك بموجب لوائح مثل GDPR/CCPA.",
                    realCase: {
                        title: "خرق بيانات موقع مواعدة",
                        story: "في عام 2015، تم اختراق شبكة اجتماعية، وتم تسريب بيانات ملايين المستخدمين. كان عدد كبير من المتضررين أفرادًا أنشأوا حسابات قبل سنوات ونسوها منذ فترة طويلة. عادت 'ملفاتهم الشبحية' لتسبب أضرارًا شخصية ومهنية هائلة."
                    }
                },
                {
                    id: 8,
                    article: "شروط الخدمة",
                    question: "هل تنقر على 'أوافق' على شروط الخدمة للأدوات عبر الإنترنت مفترضًا أنها كلها قياسية ولا يمكن أن تؤثر عليك حقًا؟",
                    bestPractice: 'no',
                    worstCase: "قد توافق على التحكيم المُلزم (التنازل عن حقك في المقاضاة في المحكمة)، أو السماح ببيع بياناتك الشخصية لأطراف ثالثة، أو التنازل عن حقوق الملكية الفكرية لأي شيء تنشئه على المنصة.",
                    remediation: "استخدم أدوات مثل 'ToS;DR' (شروط الخدمة؛ لم أقرأ) للحصول على ملخص سريع. لأي تطبيق ستحمّل عليه محتوى مهم، ابحث في شروط الخدمة عن كلمات مثل 'ترخيص'، 'محتوى'، و 'أطراف ثالثة'.",
                    realCase: {
                        title: "استيلاء منصة تواصل اجتماعي على حقوق المحتوى",
                        story: "في عام 2012، قامت منصة تواصل اجتماعي كبرى بتحديث شروط خدمتها ببند فسره الكثيرون على أنه يمنح المنصة الحق في بيع صور المستخدمين للمعلنين دون مقابل أو إشعار. كان الغضب العام شديدًا لدرجة أن المنصة اضطرت إلى التراجع عن البند المثير للجدل وتوضيح سياستها."
                    }
                },
                {
                    id: 9,
                    article: "مولدات الصور بالذكاء الاصطناعي",
                    question: "هل تستخدم صورًا لنفسك أو لعائلتك كقاعدة لمولدات الصور بالذكاء الاصطناعي دون التفكير في كيفية استخدام هذه البيانات البيومترية؟",
                    bestPractice: 'no',
                    worstCase: "أنت تقدم بيانات بيومترية عالية الجودة (الهندسة الفريدة للوجه) لشركة ما. يمكن استخدام هذا لتدريب نماذج التعرف على الوجه، أو بيعها لجهات أخرى، أو تسريبها في خرق أمني، مما يخلق سجلاً دائمًا وغير قابل للتغيير لوجه شخص ما.",
                    remediation: "تجنب استخدام وجوه حقيقية يمكن التعرف عليها في مولدات الصور العامة بالذكاء الاصطناعي. استخدمها للمشاريع الإبداعية وغير الشخصية، أو استخدم خدمات ذات سياسات خصوصية قوية وواضحة بشأن البيانات البيومترية.",
                    realCase: {
                        title: "مولدات فنون الذكاء الاصطناعي وتدريب البيانات غير الموافق عليها",
                        story: "واجهت العديد من مولدات الصور بالذكاء الاصطناعي الشهيرة انتقادات واسعة وتحديات قانونية لتدريب نماذجها على مليارات الصور المجمعة من الإنترنت، بما في ذلك الصور الشخصية والأعمال الفنية المحمية بحقوق الطبع والنشر، غالبًا دون موافقة صريحة من الأفراد أو المبدعين. أثارت هذه الممارسة مخاوف كبيرة بشأن الخصوصية، حيث يمكن أن تصبح الأشكال الشخصية واللحظات الخاصة للمستخدمين جزءًا من بيانات تدريب الذكاء الاصطناعي، مما قد يؤدي إلى إعادة إنتاجها عن غير قصد أو استخدامها بطرق لم يصرحوا بها أبدًا، ويجعل من الصعب التحكم في بصمتهم الرقمية بمجرد امتصاص بياناتهم البيومترية في مثل هذه النماذج."
                    }
                },
                {
                    id: 10,
                    article: "أمان الاتصال",
                    question: "هل تستخدم أبدًا أداة أو تطبيقًا عبر الإنترنت لا يحتوي على أيقونة القفل و 'https://' في شريط العنوان؟",
                    bestPractice: 'no',
                    worstCase: "بدون HTTPS، يكون اتصالك غير مشفر. يمكن لأي شخص على نفس الشبكة (على سبيل المثال، في مقهى أو مطار) اعتراض وقراءة جميع البيانات التي تحمّلها أو بيانات الاعتماد التي تدخلها كنص عادي.",
                    remediation: "لا تستخدم أبدًا تطبيق ويب لا يتم تقديمه عبر HTTPS. ستحذرك المتصفحات الحديثة، ولكن من الضروري التحقق يدويًا من وجود أيقونة القفل قبل إرسال أي بيانات.",
                    realCase: {
                        title: " عرض أداة اختراق",
                        story: "في عام 2010، أظهرت إضافة متصفح بسيطة مدى سهولة اختطاف حسابات المستخدمين على شبكة Wi-Fi عامة غير مؤمنة. من خلال الاستماع إلى حركة المرور غير المشفرة، كان بإمكانها سرقة ملفات تعريف ارتباط الجلسة من مواقع التواصل الاجتماعي، مما يسمح للمهاجم بالاستيلاء على جلسة تسجيل دخول المستخدم بنقرة واحدة."
                    }
                }
            ]
        }
    };
    // App state
    let currentLang = 'en';
    let questions = [...translations.en.questions].map(q => ({ ...q, answer: null, note: "" }));
    let currentQuestionIndex = 0;

    // DOM elements
    const questionnaireContainer = document.getElementById('questionnaire-container');
    const checklistSelect = document.getElementById('checklist-select');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const progressBar = document.getElementById('progress-bar');
    const restartBtn = document.getElementById('restart-btn');
    const scoreCircle = document.getElementById('score-circle');
    const scoreText = document.getElementById('score-text');
    const scoreDescription = document.getElementById('score-description');
    const statAnswered = document.getElementById('stat-answered');
    const statCorrect = document.getElementById('stat-correct');
    const statIncorrect = document.getElementById('stat-incorrect');
    const langModal = document.getElementById('lang-modal');

    // Language management
    const setLanguage = (lang) => {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem('privacyCheckupLang', lang);

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        const oldAnswers = new Map(questions.map(q => [q.id, { answer: q.answer, note: q.note }]));
        questions = translations[lang].questions.map(q => ({
            ...q,
            ...oldAnswers.get(q.id) || { answer: null, note: "" }
        }));

        if (currentQuestionIndex < questions.length) {
            renderQuestion(currentQuestionIndex);
        } else {
            renderCompletion();
        }
        updateScore();
    };
    
    const initLanguage = () => {
        const savedLang = localStorage.getItem('privacyCheckupLang');
        if (savedLang) {
            setLanguage(savedLang);
        } else {
            langModal.classList.add('show');
        }
    };
    
    // UI rendering
    const renderQuestion = (index) => {
        const qData = translations[currentLang].questions[index];
        const question = questions[index];
        
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `question-${question.id}`;

        const bestPracticeText = `${translations[currentLang].best_practice_answer} "<strong>${translations[currentLang][question.bestPractice + '_btn'].toUpperCase()}</strong>".`;
        const nextButtonText = currentQuestionIndex < questions.length - 1 ? translations[currentLang].next_btn : translations[currentLang].finish_btn;
        
        card.innerHTML = `
            <div class="article-title">${qData.article}</div>
            <p class="question-text">${qData.question}</p>
            <div class="button-group">
                <button class="yes-btn" data-answer="yes">${translations[currentLang].yes_btn}</button>
                <button class="no-btn" data-answer="no">${translations[currentLang].no_btn}</button>
            </div>
            <div class="feedback-section" id="feedback-${question.id}">
                <strong class="feedback-title">${translations[currentLang].worst_case_title}</strong>
                <p>${qData.worstCase}</p>
                <div class="best-practice-info">
                    <strong>${translations[currentLang].best_practice_title}</strong> ${bestPracticeText}
                </div>
            </div>
             <div class="real-case-section" id="real-case-${question.id}">
                <strong class="case-title">${translations[currentLang].case_study_title}: ${qData.realCase.title}</strong>
                <p>${qData.realCase.story}</p>
            </div>
            <div class="note-section" id="note-container-${question.id}">
                <label for="note-${question.id}">${translations[currentLang].notes_label}</label>
                <textarea id="note-${question.id}" class="note-input" placeholder="${translations[currentLang].notes_placeholder}"></textarea>
            </div>
            <div class="next-button-container" id="next-container-${question.id}" style="display: none;">
                <button class="next-btn" id="next-btn-${question.id}">${nextButtonText}</button>
            </div>
        `;
        questionnaireContainer.innerHTML = '';
        questionnaireContainer.appendChild(card);
        
        const noteInput = card.querySelector(`#note-${question.id}`);
        noteInput.value = question.note;
        
        card.querySelector('.yes-btn').addEventListener('click', () => handleAnswer(question.id, 'yes'));
        card.querySelector('.no-btn').addEventListener('click', () => handleAnswer(question.id, 'no'));
        noteInput.addEventListener('input', (e) => {
            question.note = e.target.value;
        });
        
        const nextBtn = card.querySelector(`#next-btn-${question.id}`);
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const currentCard = document.getElementById(`question-${question.id}`);
                if(currentCard) {
                    currentCard.classList.add('exiting');
                }
                setTimeout(() => {
                    currentQuestionIndex++;
                    if (currentQuestionIndex < questions.length) {
                        renderQuestion(currentQuestionIndex);
                    } else {
                        renderCompletion();
                    }
                }, 400);
            });
        }
    };
    
    const renderCompletion = () => {
        questionnaireContainer.innerHTML = `
            <div class="completion-card">
                <h2 data-lang-key="completion_title">${translations[currentLang].completion_title}</h2>
                <p data-lang-key="completion_text">${translations[currentLang].completion_text}</p>
            </div>
        `;
    };

    // Core app logic
    const handleAnswer = (questionId, userAnswer) => {
        const question = questions.find(q => q.id === questionId);
        if (question.answer !== null) return; 
        question.answer = userAnswer;
        
        const card = document.getElementById(`question-${question.id}`);
        const yesBtn = card.querySelector('.yes-btn');
        const noBtn = card.querySelector('.no-btn');
        const feedbackSection = card.querySelector(`#feedback-${question.id}`);
        const realCaseSection = card.querySelector(`#real-case-${question.id}`);
        const noteContainer = card.querySelector(`#note-container-${question.id}`);
        const nextContainer = card.querySelector(`#next-container-${question.id}`);
        
        yesBtn.disabled = true;
        noBtn.disabled = true;
        
        const isCorrect = userAnswer === question.bestPractice;
        const clickedBtn = userAnswer === 'yes' ? yesBtn : noBtn;
        
        clickedBtn.classList.add('answered');
        clickedBtn.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        if (!isCorrect) {
            feedbackSection.classList.add('show');
        }
        realCaseSection.classList.add('show');
        noteContainer.style.borderTop = "1px solid var(--border-color)";

        updateScore();
        
        setTimeout(() => {
            nextContainer.style.display = 'block';
            nextContainer.classList.add('show');
        }, 1500);
    };

    const updateScore = () => {
        // Calculate score based on correct answers vs best practices
        const answeredQuestions = questions.filter(q => q.answer !== null);
        const correctAnswers = answeredQuestions.filter(q => q.answer === q.bestPractice).length;
        const totalAnswered = answeredQuestions.length;
        const score = totalAnswered === 0 ? 0 : Math.round((correctAnswers / totalAnswered) * 100);
        
        const progressPercent = questions.length === 0 ? 0 : (totalAnswered / questions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
        
        scoreText.textContent = `${score}%`;
        let scoreColor = 'var(--success-color)';
        if (score < 75) scoreColor = 'var(--warning-color)';
        if (score < 50) scoreColor = 'var(--danger-color)';
        scoreCircle.style.background = `conic-gradient(${scoreColor} ${score * 3.6}deg, var(--border-color) 0deg)`;
        
        statAnswered.textContent = `${totalAnswered}/${questions.length}`;
        statCorrect.textContent = correctAnswers;
        statIncorrect.textContent = totalAnswered - correctAnswers;
        
        if (totalAnswered === 0) {
            scoreDescription.textContent = translations[currentLang].score_initial_desc;
        } else if (totalAnswered < questions.length) {
            scoreDescription.textContent = translations[currentLang].score_desc_inprogress;
        } else {
            if (score >= 90) {
                scoreDescription.textContent = translations[currentLang].score_desc_excellent;
            } else if (score >= 60) {
                scoreDescription.textContent = translations[currentLang].score_desc_good;
            } else {
                scoreDescription.textContent = translations[currentLang].score_desc_improvement;
            }
        }
    };

    const resetQuiz = () => {
        // Reset all questions and start over
        currentQuestionIndex = 0;
        questions.forEach(q => {
            q.answer = null;
            q.note = "";
        });
        updateScore();
        renderQuestion(currentQuestionIndex);
        questionnaireContainer.scrollIntoView({ behavior: 'smooth' });
    };



    // Event listeners
    document.querySelectorAll('.lang-select-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
            langModal.classList.remove('show');
        });
    });



    restartBtn.addEventListener('click', resetQuiz);
    
    checklistSelect.addEventListener('change', () => {
        resetQuiz();
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // App initialization
    initLanguage();
    updateScore();
});