// Ryu Hakone Restaurant - Modern Editorial Website

const THEME_STORAGE_KEY = 'ryu-theme';
const LANGUAGE_STORAGE_KEY = 'ryu-language';
const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.language-toggle');
// the footer is dark in both themes, so it always uses the light-on-dark logo
const themeSensitiveLogos = document.querySelectorAll('.hero-mark');
const lightLogoSrc = 'Logo/web/logo.webp';
const darkLogoSrc = 'Logo/web/logo-dark.webp';

const translations = {
  en: {
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.vision': 'Vision',
    'nav.values': 'Values',
    'nav.location': 'Location',
    'hero.headline': 'The Best Restaurant Experience in the Heart of Hakone',
    'hero.cta': 'Visit Us',
    'about.marker': 'ABOUT',
    'about.label': 'About Us',
    'about.subtitle': 'Welcome to Ryu Hakone Restaurant',
    'about.text': 'At Ryu Hakone Restaurant, we bring together the comforting flavors of Japanese and Filipino cuisine. Our restaurant serves special set meals that combine the best of both worlds, giving you a unique and satisfying dining experience.\n\nLocated in the beautiful area of Hakone, we are dedicated to serving delicious food made with care and offering a warm, welcoming space for all our guests. Whether you are looking for a taste of traditional Japanese hospitality or the heartwarming flavors of the Philippines, our set meals are crafted to make you feel right at home.\n\nCome and share a delicious meal with us!',
    'about.more': 'More About Us',
    'purpose.marker': 'PURPOSE',
    'purpose.label': 'Our Purpose',
    'purpose.title': 'VISION & MISSION',
    'vision.label': 'Vision',
    'vision.title': "To become Hakone's most loved restaurant.",
    'vision.text': "To become Hakone's most loved restaurant, where families and friends connect over delicious homemade Japanese and Filipino set meals.",
    'mission.label': 'Mission',
    'mission.title': 'To serve every guest with quality food, warm hospitality, and care.',
    'mission.text': 'At Ryu Hakone Restaurant, we serve local guests and visitors to Hakone with delicious Japanese and Filipino set meals. We use modern kitchen equipment to provide fast, safe, high-quality service and keep our restaurant growing strong. We believe in warm Japanese hospitality and friendly Filipino service, and our mix of flavors is what makes us stand out. We support our community by using quality local ingredients, and we treat our team with love and respect so they can give every guest the best experience.',
    'values.marker': 'VALUES',
    'values.label1': 'RYU Standard',
    'values.title': 'CORE VALUES',
    'values.label2': 'Every Service',
    'value.1.title': 'Respect',
    'value.1.text': 'We treat our guests and staff with kindness, courtesy, and fairness while honoring the cultural traditions behind our food.',
    'value.2.title': 'Integrity',
    'value.2.text': 'We are committed to being honest and transparent by always using fresh, high-quality ingredients.',
    'value.3.title': 'Accountability',
    'value.3.text': 'We take responsibility to ensure that every customer feels welcome, comfortable, and valued.',
    'value.4.title': 'Teamwork',
    'value.4.text': 'We support each other in the kitchen and the dining room to work together as one united team.',
    'value.5.title': 'Excellence',
    'value.5.text': 'We are always learning and looking for ways to improve our skills to make our food and restaurant better every day.',
    'menu.marker': 'MENU',
    'menu.title': "WHAT'S ON THE MENU?",
    'menu.intro': 'From comforting set meals to shareable favorites and drinks, discover the flavors that make every visit feel special. All listed prices include tax.',
    "menu.label": "Steak & Japanese Comfort",
    "menu.group.set": "Set Menu",
    "menu.set.note": "Served with rice, soup, and salad",
    "menu.group.ala": "Ala Carte",
    "menu.group.sides": "Sides",
    "menu.group.drinks": "Drinks",
    "menu.group.dessert": "Dessert",
    "dish.set1": "Wagyu Steak Set (Sirloin)",
    "dish.set2": "Hakone Seiroku Beef Set (Rump)",
    "dish.set3": "Hakone Seiroku Beef Set (Picanha)",
    "dish.set4": "Hakone Seiroku Beef Set (Top Blade)",
    "dish.set5": "Cheese-Filled Hamburg Steak Set with Demi-Glace Sauce",
    "dish.set6": "Japanese Hamburg Steak Set (100% Beef)",
    "dish.ala1": "Wagyu Steak (Sirloin)",
    "dish.ala2": "Hakone Seiroku Beef (Rump)",
    "dish.ala3": "Hakone Seiroku Beef (Picanha)",
    "dish.ala4": "Hakone Seiroku Beef (Top Blade)",
    "dish.ala5": "Cheese-Filled Hamburg Steak with Demi-Glace Sauce",
    "dish.ala6": "Japanese Hamburg Steak (100% Beef)",
    "desc.sirloin": "A perfect balance of lean and fat, with a fine texture and rich flavor.",
    "desc.rump": "Perfectly tender and full of meaty flavor — a lean cut from the rump.",
    "desc.picanha": "Perfectly tender and located above the rump, with minimal marbling.",
    "desc.topblade": "A cut from the shoulder blade, known for being tender and flavorful, with rich marbling and a good balance of lean and fat.",
    "desc.cheese": "A tender, flavorful patty that melts in your mouth. This classic Japanese comfort dish is made with a pork and beef blend, filled with cheese and finished with demi-glace sauce.",
    "desc.beef100": "A tender, flavorful patty made with 100% beef, served with your choice of sauce.",
    "variant.demi": "With demi-glace sauce",
    "variant.ponzu": "With grated radish & ponzu sauce",
    "side.rice": "Rice",
    "desc.rice": "Small, medium, or large",
    "side.miso": "Miso Soup",
    "desc.miso": "A warm, savory soup made with a traditional miso broth.",
    "side.salad": "Salad",
    "desc.salad": "Fresh cabbage, tomato, cucumber, and broccoli.",
    "drinks.alcohol.label": "Beer, Sake & Highball",
    "drinks.alcohol.title": "Alcoholic Drinks",
    "drink.sake": "Japanese Sake (Hakoneyama)",
    "drink.nonalc": "Non-Alcohol Beer",
    "drink.highball": "Whiskey Highball (Pure / With Soda)",
    "drink.kirin": "Kirin Ichiban Beer (500 ml)",
    "drink.plum": "Plum Wine",
    "drink.plum.rock": "On the Rocks",
    "drink.plum.soda": "With Soda",
    "wine.label": "By the Glass or Bottle",
    "wine.title": "Wine",
    "wine.red": "Red Wine",
    "wine.white": "White Wine",
    "wine.glass": "Glass",
    "wine.bottle": "Bottle",
    "wine.azusa": "Azusa (Dry)",
    "wine.shinshu": "Shinshu Black Queen (Semi-Dry)",
    "wine.akadama": "Akadama Sweet Red Wine",
    "wine.sen": "Grande Polaire Esprit de Vin Japonais Sen",
    "wine.koshu": "Koshu White Wine (Dry)",
    "bev.label": "Each ¥300",
    "bev.title": "Beverages",
    "bev.coke": "Coke (Regular / Zero)",
    "bev.ginger": "Ginger Ale",
    "bev.orange": "100% Orange Juice",
    "bev.oolong": "Oolong Tea (Hot / Iced)",
    "bev.green": "Green Tea (Hot / Iced)",
    "bev.hotcoffee": "Hot Coffee",
    "bev.icedcoffee": "Iced Coffee",
    "dessert.large": "Juna's Homemade Leche Flan (Large)",
    "dessert.small": "Juna's Homemade Leche Flan (Small)",
    'location.title': 'Visit Us',
    'location.address': 'Japan, 〒250-0311 Kanagawa, Ashigarashimo District, Hakone, Yumoto, 694-5 2F',
    'location.open': 'We are Open',
    'location.lunch': 'Lunch: 11:00 AM - 2:00 PM',
    'location.last1': 'Last order: 1:30 PM',
    'location.dinner': 'Dinner: 5:00 PM - 8:00 PM',
    'location.last2': 'Last Order: 7:30 PM',
    'location.closed': 'Closed every Wednesday and Thursday',
    'footer.owner': 'By: Andy Ryu B. Abiko',
    'footer.address': 'Japan, 〒250-0311 Kanagawa, Ashigarashimo District, Hakone, Yumoto, 694-5 2F',
    'footer.reservation': 'For reservations, please call +81-070-3817-9120 or send us a message via Facebook or Instagram.',
    'footer.copy': '© 2026 Ryu Hakone Restaurant. All rights reserved.'
  },
  ja: {
    'nav.menu': 'メニュー',
    'nav.about': '私たちについて',
    'nav.vision': 'ビジョン',
    'nav.values': '価値観',
    'nav.location': 'アクセス',
    'hero.headline': '箱根の中心で最高のレストラン体験を',
    'hero.cta': 'ご来店はこちら',
    'about.marker': 'ABOUT',
    'about.label': '私たちについて',
    'about.subtitle': 'リュウ箱根レストランへようこそ',
    'about.text': 'リュウ箱根では、日本料理とフィリピン料理の心温まる味わいをひとつにしました。それぞれの魅力を組み合わせた特別なセットメニューで、個性的で満足感のあるお食事をお楽しみいただけます。\n\n美しい箱根の地で、心を込めて作るおいしい料理と、すべてのお客さまにくつろいでいただける温かい空間をご用意しています。日本の伝統的なおもてなしを味わいたい方にも、フィリピンの家庭的な味を楽しみたい方にも、ほっとできるセットメニューをお届けします。\n\nぜひ私たちと一緒に、おいしい食事をお楽しみください。',
    'about.more': '詳しく見る',
    'purpose.marker': 'PURPOSE',
    'purpose.label': '私たちの目的',
    'purpose.title': 'ビジョン & ミッション',
    'vision.label': 'ビジョン',
    'vision.title': '箱根で最も愛されるレストランへ。',
    'vision.text': '手作りの日本料理とフィリピン料理のセットメニューを通して、ご家族やご友人が楽しくつながれる、箱根で最も愛されるレストランを目指します。',
    'mission.label': 'ミッション',
    'mission.title': '質の高い料理、温かいおもてなし、思いやりをもって、すべてのお客さまをお迎えします。',
    'mission.text': 'リュウ箱根レストランでは、地元のお客さまや箱根を訪れる皆さまに、日本料理とフィリピン料理のおいしいセットメニューを提供します。最新の厨房設備を活用し、早く、安全で、質の高いサービスを実現することで、レストランを力強く成長させていきます。日本らしい温かいおもてなしと、フィリピンらしい親しみのあるサービスを大切にし、二つの文化の味わいを組み合わせた料理で私たちらしさを表現します。良質な地元食材を活かして地域を支え、スタッフにも愛情と敬意をもって接することで、すべてのお客さまに最高の時間をお届けします。',
    'values.marker': 'VALUES',
    'values.label1': 'RYUスタンダード',
    'values.title': 'コアバリュー',
    'values.label2': 'すべてのサービスに',
    'value.1.title': '尊重',
    'value.1.text': '私たちは、料理に込められた文化的な伝統を大切にしながら、お客さまとスタッフに思いやり、礼儀、公平さをもって接します。',
    'value.2.title': '誠実さ',
    'value.2.text': '常に新鮮で高品質な食材を使用し、正直で透明性のある姿勢を大切にします。',
    'value.3.title': '責任感',
    'value.3.text': 'すべてのお客さまが歓迎され、快適で、大切にされていると感じられるよう責任を持って取り組みます。',
    'value.4.title': 'チームワーク',
    'value.4.text': 'キッチンでもダイニングでも互いに支え合い、一つのチームとして協力します。',
    'value.5.title': '卓越性',
    'value.5.text': '私たちは常に学び、技術を高め、料理とレストランを毎日より良くする方法を探し続けます。',
    'menu.marker': 'MENU',
    'menu.title': 'メニュー',
    'menu.intro': '心温まるセットメニューから、みんなで楽しめる一品料理やドリンクまで、特別なひとときを彩る味わいをお楽しみください。表示価格はすべて税込です。',
    "menu.label": "ステーキと和の味わい",
    "menu.group.set": "セットメニュー",
    "menu.set.note": "ライス・スープ・サラダ付き",
    "menu.group.ala": "単品メニュー",
    "menu.group.sides": "サイドメニュー",
    "menu.group.drinks": "ドリンク",
    "menu.group.dessert": "デザート",
    "dish.set1": "和牛ステーキセット (ロース)",
    "dish.set2": "国産ステーキセット (ランプ)",
    "dish.set3": "国産ステーキセット (イチボ)",
    "dish.set4": "国産ステーキセット (ミスジ)",
    "dish.set5": "チーズインデミグラスハンバーグセット",
    "dish.set6": "国産ハンバーグセット (国産牛100%)",
    "dish.ala1": "和牛ステーキ (ロース)",
    "dish.ala2": "国産ステーキ (ランプ)",
    "dish.ala3": "国産ステーキ (イチボ)",
    "dish.ala4": "国産ステーキ (ミスジ)",
    "dish.ala5": "チーズインデミグラスハンバーグ",
    "dish.ala6": "国産ハンバーグ (国産牛100%)",
    "desc.sirloin": "赤身と脂身のバランスが良く、きめ細かい肉質と濃厚な旨味が特徴です。",
    "desc.rump": "脂肪が少なくあっさりしていながらも、噛むほどに肉本来の深い旨みを感じられます。",
    "desc.picanha": "ランプの上に位置する部位。少しサシがあり柔らかい。",
    "desc.topblade": "肩甲骨の部位のお肉で、適度な霜降りがあり、柔らかく風味豊かなことで知られています。",
    "desc.cheese": "口の中でとろける、やわらかく風味豊かなハンバーグ。豚と牛の合挽き肉にチーズを包み、デミグラスソースで仕上げた定番の洋食です。",
    "desc.beef100": "国産牛100%で作る、口の中でとろけるやわらかなハンバーグ。お好みのソースでお召し上がりください。",
    "variant.demi": "デミグラスソース",
    "variant.ponzu": "おろしポン酢",
    "side.rice": "ご飯",
    "desc.rice": "小・中・大",
    "side.miso": "味噌汁",
    "desc.miso": "香り豊かな味噌だしで作る、ほっとする和のスープです。",
    "side.salad": "サラダ",
    "desc.salad": "キャベツ、トマト、きゅうり、ブロッコリーの新鮮なサラダ。",
    "drinks.alcohol.label": "ビール・日本酒・ハイボール",
    "drinks.alcohol.title": "アルコールドリンク",
    "drink.sake": "箱根山 (日本酒)",
    "drink.nonalc": "ノンアルコールビール",
    "drink.highball": "ウィスキーハイボール (ロック / ソーダ割り)",
    "drink.kirin": "キリンビール一番搾り 中瓶",
    "drink.plum": "梅酒",
    "drink.plum.rock": "ロック",
    "drink.plum.soda": "ソーダ割り",
    "wine.label": "グラス・ボトル",
    "wine.title": "ワイン",
    "wine.red": "赤ワイン",
    "wine.white": "白ワイン",
    "wine.glass": "グラス",
    "wine.bottle": "ボトル",
    "wine.azusa": "あずさ 辛口",
    "wine.shinshu": "信州ブラッククイーン やや辛口",
    "wine.akadama": "赤玉スイートワイン (赤)",
    "wine.sen": "エスプリ ド ヴァン ジャポネ 泉-SEN",
    "wine.koshu": "甲州白ワイン 辛口",
    "bev.label": "各 ¥300",
    "bev.title": "ソフトドリンク",
    "bev.coke": "コーラ (レギュラー / ゼロ)",
    "bev.ginger": "ジンジャーエール",
    "bev.orange": "オレンジジュース 100%",
    "bev.oolong": "烏龍茶 (ホット / アイス)",
    "bev.green": "緑茶 (ホット / アイス)",
    "bev.hotcoffee": "ホットコーヒー",
    "bev.icedcoffee": "アイスコーヒー",
    "dessert.large": "ジュナの自家製プリン (大)",
    "dessert.small": "ジュナの自家製プリン (小)",
    'location.title': 'アクセス',
    'location.address': '日本、〒250-0311 神奈川県足柄下郡箱根町湯本694-5 2F',
    'location.open': '営業時間',
    'location.lunch': 'ランチ: 11:00 - 14:00',
    'location.last1': 'ラストオーダー: 13:30',
    'location.dinner': 'ディナー: 17:00 - 20:00',
    'location.last2': 'ラストオーダー: 19:30',
    'location.closed': '毎週水曜日・木曜日 定休',
    'footer.owner': '運営: Andy Ryu B. Abiko',
    'footer.address': '日本、〒250-0311 神奈川県足柄下郡箱根町湯本694-5 2F',
    'footer.reservation': 'ご予約は +81-070-3817-9120 までお電話、またはFacebook・Instagramのメッセージにてご連絡ください。',
    'footer.copy': '© 2026 Ryu Hakone Restaurant. All rights reserved.'
  }
};

const i18nTargets = [
  { selector: '.nav-left .nav-item:nth-child(1)', key: 'nav.menu' },
  { selector: '.nav-left .nav-item:nth-child(2)', key: 'nav.about' },
  { selector: '.nav-left .nav-item:nth-child(3)', key: 'nav.vision' },
  { selector: '.nav-left .nav-item:nth-child(4)', key: 'nav.values' },
  { selector: '.nav-left .nav-item:nth-child(5)', key: 'nav.location' },
  { selector: '.hero-headline', key: 'hero.headline' },
  { selector: '.cta-button-text', key: 'hero.cta' },
  { selector: '#about .vertical-section-mark', key: 'about.marker' },
  { selector: '#about .about-label', key: 'about.label' },
  { selector: '#about .about-subtitle', key: 'about.subtitle' },
  { selector: '#about .story-text', key: 'about.text' },
  { selector: '.story-btn-text', key: 'about.more' },
  { selector: '#vision .vertical-section-mark', key: 'purpose.marker' },
  { selector: '#vision .section-heading .showcase-label', key: 'purpose.label' },
  { selector: '#vision .section-heading .section-title', key: 'purpose.title' },
  { selector: '#vision .vision-panel:nth-child(1) .about-label', key: 'vision.label' },
  { selector: '#vision .vision-panel:nth-child(1) .about-subtitle', key: 'vision.title' },
  { selector: '#vision .vision-panel:nth-child(1) .section-text', key: 'vision.text' },
  { selector: '#vision .vision-panel:nth-child(2) .about-label', key: 'mission.label' },
  { selector: '#vision .vision-panel:nth-child(2) .about-subtitle', key: 'mission.title' },
  { selector: '#vision .vision-panel:nth-child(2) .section-text', key: 'mission.text' },
  { selector: '#values .vertical-section-mark', key: 'values.marker' },
  { selector: '#values .values-header .showcase-label:nth-child(1)', key: 'values.label1' },
  { selector: '#values .values-header .showcase-title', key: 'values.title' },
  { selector: '#values .values-header .showcase-label:nth-child(3)', key: 'values.label2' },
  { selector: '#values .value-item:nth-child(1) .value-title', key: 'value.1.title' },
  { selector: '#values .value-item:nth-child(1) .value-text', key: 'value.1.text' },
  { selector: '#values .value-item:nth-child(2) .value-title', key: 'value.2.title' },
  { selector: '#values .value-item:nth-child(2) .value-text', key: 'value.2.text' },
  { selector: '#values .value-item:nth-child(3) .value-title', key: 'value.3.title' },
  { selector: '#values .value-item:nth-child(3) .value-text', key: 'value.3.text' },
  { selector: '#values .value-item:nth-child(4) .value-title', key: 'value.4.title' },
  { selector: '#values .value-item:nth-child(4) .value-text', key: 'value.4.text' },
  { selector: '#values .value-item:nth-child(5) .value-title', key: 'value.5.title' },
  { selector: '#values .value-item:nth-child(5) .value-text', key: 'value.5.text' },
  { selector: '#menu .vertical-section-mark', key: 'menu.marker' },
  { selector: '#menu .section-heading .section-title', key: 'menu.title' },
  { selector: '#menu .menu-intro', key: 'menu.intro' },
  { selector: '#menu .section-heading .showcase-label', key: 'menu.label' },
  { selector: '#location .location-title', key: 'location.title' },
  { selector: '#location .location-address p:nth-child(2)', key: 'location.address' },
  { selector: '#location .visit-schedule-title', key: 'location.open' },
  { selector: '#location .visit-schedule > .visit-schedule-hours:nth-child(2)', key: 'location.lunch' },
  { selector: '#location .visit-schedule > .visit-last-order:nth-child(3)', key: 'location.last1' },
  { selector: '#location .visit-schedule > .visit-schedule-hours:nth-child(4)', key: 'location.dinner' },
  { selector: '#location .visit-schedule > .visit-last-order:nth-child(5)', key: 'location.last2' },
  { selector: '#location .visit-schedule-days', key: 'location.closed' },
  { selector: '.footer-owner', key: 'footer.owner' },
  { selector: '.footer-address', key: 'footer.address' },
  { selector: '.footer-reservation', key: 'footer.reservation' },
  { selector: '.footer-copyright', key: 'footer.copy' }
];

function getCurrentLanguage() {
  const language = document.documentElement.getAttribute('lang');
  return language === 'ja' ? 'ja' : 'en';
}

function getPreferredLanguage() {
  return navigator.language && navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en';
}

function updateLanguageToggle(language) {
  if (!languageToggle) {
    return;
  }

  const nextLanguage = language === 'ja' ? 'en' : 'ja';
  const nextLabel = nextLanguage === 'ja' ? '日本語' : 'English';
  languageToggle.setAttribute('aria-pressed', String(language === 'ja'));
  languageToggle.setAttribute('aria-label', language === 'ja' ? 'Switch language to English' : '言語を日本語に切り替え');

  const label = languageToggle.querySelector('.language-toggle-label');
  if (label) {
    label.textContent = nextLabel;
  }
}

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.setAttribute('lang', language === 'ja' ? 'ja' : 'en');

  i18nTargets.forEach(({ selector, key }) => {
    const element = document.querySelector(selector);
    const text = dictionary[key];
    if (element && typeof text === 'string') {
      element.textContent = text;
    }
  });

  // Menu text is marked up with data-i18n; data-i18n-alt shows the other language underneath
  const altDictionary = language === 'ja' ? translations.en : translations.ja;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const text = dictionary[element.dataset.i18n];
    if (typeof text === 'string') {
      element.textContent = text;
    }
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    const text = altDictionary[element.dataset.i18nAlt];
    if (typeof text === 'string') {
      element.textContent = text;
    }
  });

  updateLanguageToggle(language);
  splitHeadline(language);

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(currentTheme);
}

// Wrap each word (each character in Japanese) so the headline can rise in word by word
function splitHeadline(language) {
  const headline = document.querySelector('.hero-headline');
  if (!headline) {
    return;
  }

  const text = headline.textContent.trim();
  const isJapanese = language === 'ja';
  const parts = isJapanese ? Array.from(text) : text.split(/\s+/);
  const step = isJapanese ? 35 : 60;

  headline.setAttribute('aria-label', text);
  headline.textContent = '';

  parts.forEach((part, index) => {
    const word = document.createElement('span');
    word.className = 'word';
    word.setAttribute('aria-hidden', 'true');

    const inner = document.createElement('span');
    inner.className = 'word-inner';
    inner.textContent = part;
    inner.style.setProperty('--d', `${index * step}ms`);

    word.appendChild(inner);
    headline.appendChild(word);

    if (!isJapanese && index < parts.length - 1) {
      headline.appendChild(document.createTextNode(' '));
    }
  });
}

function getPreferredTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);

  themeSensitiveLogos.forEach((logo) => {
    logo.setAttribute('src', theme === 'dark' ? darkLogoSrc : lightLogoSrc);
  });

  if (themeToggle) {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const currentLanguage = getCurrentLanguage();
    const englishLabel = nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1);
    const japaneseLabel = nextTheme === 'dark' ? 'ダーク' : 'ライト';
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
    themeToggle.setAttribute('aria-label', currentLanguage === 'ja' ? `${japaneseLabel}モードに切り替え` : `Switch to ${nextTheme} mode`);

    const label = themeToggle.querySelector('.theme-toggle-label');
    if (label) {
      label.textContent = currentLanguage === 'ja' ? japaneseLabel : englishLabel;
    }
  }
}

const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
const initialLanguage = savedLanguage || getPreferredLanguage();
document.documentElement.setAttribute('lang', initialLanguage);

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
applyTheme(savedTheme || getPreferredTheme());
applyLanguage(initialLanguage);

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const currentLanguage = getCurrentLanguage();
    const nextLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
    // replay the headline animation right away instead of waiting for the intro
    document.querySelector('.hero-headline')?.style.setProperty('--word-base', '0s');
    applyLanguage(nextLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

const scrollToggle = document.querySelector('.scroll-toggle');
const navbar = document.querySelector('.navbar');
const scrollProgress = document.querySelector('.scroll-progress');

// Remember the last applied state so the DOM is only touched when something changes
let isNavScrolled = null;
let isScrollUp = null;
let maxScroll = 0;
let scrollFrame = null;

function measureScroll() {
  maxScroll = document.documentElement.scrollHeight - window.innerHeight;
}

function updateScrollToggle(currentScroll = window.pageYOffset) {
  if (!scrollToggle) {
    return;
  }

  // the arrow stays ↓ and is rotated by CSS so the flip animates
  const isUp = currentScroll > 80;
  if (isUp === isScrollUp) {
    return;
  }

  isScrollUp = isUp;
  const label = isUp ? 'Scroll to top' : 'Scroll to bottom';
  scrollToggle.classList.add('is-visible');
  scrollToggle.classList.toggle('is-up', isUp);
  scrollToggle.setAttribute('aria-label', label);
  scrollToggle.setAttribute('title', label);
}

// Runs at most once per frame; only writes a compositor-friendly transform every frame
function updateScrollEffects() {
  scrollFrame = null;
  const currentScroll = window.pageYOffset;

  if (scrollProgress) {
    const progress = maxScroll > 0 ? Math.min(currentScroll / maxScroll, 1) : 0;
    scrollProgress.style.transform = `scaleX(${progress.toFixed(4)})`;
  }

  const scrolled = currentScroll > 100;
  if (scrolled !== isNavScrolled) {
    isNavScrolled = scrolled;
    navbar.classList.toggle('scrolled', scrolled);
  }

  updateScrollToggle(currentScroll);
}

function requestScrollUpdate() {
  if (!scrollFrame) {
    scrollFrame = requestAnimationFrame(updateScrollEffects);
  }
}

measureScroll();
updateScrollEffects();

window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', () => {
  measureScroll();
  requestScrollUpdate();
}, { passive: true });
// page height changes as lazy images and fonts load
window.addEventListener('load', measureScroll);

if (scrollToggle) {
  scrollToggle.addEventListener('click', () => {
    const isAtTop = window.pageYOffset <= 80;
    const targetPosition = isAtTop ? document.documentElement.scrollHeight - window.innerHeight : 0;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: 'smooth'
    });
  });
}

// Dishes with two sauce options: the 6.1 / 6.2 buttons (or tapping the photo) swap the picture
function showDishVariant(card, variant) {
  card.querySelectorAll('.dish-media--pair img').forEach(img => {
    const isActive = img.dataset.variant === variant;
    img.classList.toggle('is-active', isActive);
    img.setAttribute('aria-hidden', String(!isActive));
  });
  card.querySelectorAll('.dish-variant').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.variant === variant));
  });
}

function toggleDishVariant(media) {
  const active = media.querySelector('img.is-active');
  showDishVariant(media.closest('.dish-card'), active && active.dataset.variant === '1' ? '2' : '1');
}

document.querySelectorAll('.dish-variant').forEach(button => {
  button.addEventListener('click', () => showDishVariant(button.closest('.dish-card'), button.dataset.variant));
});

document.querySelectorAll('.dish-media--pair').forEach(media => {
  media.addEventListener('click', () => toggleDishVariant(media));
  media.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDishVariant(media);
    }
  });
});

// Highlight the nav link for the section in the middle of the screen
const navLinks = document.querySelectorAll('.nav-left .nav-item');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('main > section[id]').forEach(section => sectionObserver.observe(section));

// Scroll-triggered reveals (styles live in the Motion section of style.css)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -80px 0px'
});

// [selector, variant class, base delay ms, stagger between siblings ms]
const revealGroups = [
  ['.section-heading, .showcase-header, .menu-intro, .location-title, .menu-group-heading, .menu-group-note, .footer-content', '', 0, 0],
  ['.story-left, .vision-panel:nth-child(1), .location-address', 'reveal--left', 0, 0],
  ['.vision-panel:nth-child(2), .location-map', 'reveal--right', 120, 0],
  ['.story-image-large, .story-image-small', 'reveal--wipe', 0, 140],
  ['.value-item', 'reveal--zoom', 0, 90],
  ['.dish-card, .side-card, .menu-board-panel', 'reveal--zoom', 0, 90],
  ['.drinks-item', 'reveal--soft', 200, 50]
];

revealGroups.forEach(([selector, variant, base, step]) => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('reveal');
    if (variant) {
      el.classList.add(variant);
    }

    if (prefersReducedMotion) {
      el.classList.add('is-visible');
      return;
    }

    const siblingIndex = Array.prototype.indexOf.call(el.parentElement.children, el);
    el.style.setProperty('--reveal-delay', `${base + Math.min(siblingIndex * step, 500)}ms`);
    observer.observe(el);
  });
});

try {
  sessionStorage.setItem('ryu-intro-seen', '1');
} catch (e) {
  // storage unavailable — the intro simply plays again next time
}

console.log('Ryu Hakone Restaurant - Website loaded successfully');
