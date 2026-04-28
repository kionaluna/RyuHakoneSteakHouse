// Ryu Hakone Steak House - Modern Editorial Website

const THEME_STORAGE_KEY = 'ryu-theme';
const LANGUAGE_STORAGE_KEY = 'ryu-language';
const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.language-toggle');
const themeSensitiveLogos = document.querySelectorAll('.hero-mark, .footer-logo');
const lightLogoSrc = 'Untitled%20design.svg';
const darkLogoSrc = lightLogoSrc;

const translations = {
  en: {
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.vision': 'Vision',
    'nav.values': 'Values',
    'nav.location': 'Location',
    'hero.headline': 'The Best Steak House Experience in the Heart of Hakone',
    'hero.cta': 'Visit Us',
    'about.marker': 'ABOUT',
    'about.label': 'About Us',
    'about.subtitle': 'Welcome to Ryu Hakone Steak House',
    'about.text': 'Looking for an unforgettable meal during your Hakone adventure? Located just a short walk from the scenic beauty of Yumoto, Ryu Hakone Steak House is where traditional Japanese hospitality meets the world\'s finest beef.\n\nWhether you are exploring the local hot springs or taking in the mountain views, we invite you to sit back, relax, and enjoy a taste of luxury.',
    'about.more': 'More About Us',
    'purpose.marker': 'PURPOSE',
    'purpose.label': 'Our Purpose',
    'purpose.title': 'VISION & MISSION',
    'vision.label': 'Vision',
    'vision.title': 'To be the premier steak house in Hakone.',
    'vision.text': 'To be the premier steak house in Hakone, offering tourists an unforgettable Japanese dining experience through our signature premium beef and traditional hospitality.',
    'mission.label': 'Mission',
    'mission.title': 'To serve valued visitors with premium beef, craft, and warmth.',
    'mission.text': 'At Ryu Hakone Steak House, we serve valued visitors and food enthusiasts by providing premium Japanese beef steaks, hand-crafted hamburgs, and authentic meal sets in the heart of Yumoto, Hakone. We utilize modern culinary techniques to ensure sustainable growth and long-term success. Our philosophy is rooted in traditional Japanese hospitality and a commitment to simple, high-quality ingredients. We distinguish ourselves through our unique \'melt-in-your-mouth\' beef textures and cozy atmosphere, striving to be a beloved landmark in the Hakone community while fostering a workplace where every team member is treated with the same warmth we show our guests.',
    'values.marker': 'VALUES',
    'values.label1': 'RYU Standard',
    'values.title': 'CORE VALUES',
    'values.label2': 'Every Service',
    'value.1.title': 'Quality First',
    'value.1.text': 'We believe that great meals start with the finest ingredients. We are committed to serving only premium beef that delivers a signature "melt-in-your-mouth" texture in every bite.',
    'value.2.title': 'Heartfelt Hospitality',
    'value.2.text': 'Rooted in traditional Japanese culture, we treat every guest like a valued visitor in our own home. We strive to provide a warm, cozy atmosphere where everyone feels welcome.',
    'value.3.title': 'Simplicity & Integrity',
    'value.3.text': 'We keep things simple because we trust our craft. From our hand-crafted patties to our traditional meal sets, we honor the natural flavors of Japan without unnecessary distractions.',
    'value.4.title': 'Community & Connection',
    'value.4.text': 'We aim to be more than just a restaurant; we are a landmark in Hakone. We foster lasting relationships with our guests, our neighbors, and our team members through mutual respect and warmth.',
    'value.5.title': 'Excellence in Every Set',
    'value.5.text': 'Whether it is a steaming bowl of rice or a tender steak, we uphold the highest standards in everything we prepare. We combine modern techniques with a passion for consistent, high-quality dining.',
    'menu.marker': 'MENU',
    'menu.label': 'Simple, Premium, Japanese',
    'menu.title': "WHAT'S ON THE MENU?",
    'menu.intro': 'We keep it simple because when the ingredients are this good, they speak for themselves. We specialize in premium beef, known for its incredible marble and "melt-in-your-mouth" texture.',
    'menu.1.title': 'Japanese Beef Steak Set',
    'menu.1.sub': 'Rice & miso soup included',
    'menu.1.text': 'Perfectly tender and full of flavor. A rich, delicious steak that melts in your mouth, served with steamed rice, miso soup, and seasonal vegetables.',
    'menu.2.title': 'Japanese Hamburg Set',
    'menu.2.sub': 'Rice & miso soup included',
    'menu.2.text': 'A tender and flavorful patty that melts in your mouth. A classic Japanese comfort dish served with our savory signature sauce, steamed rice, miso soup, and seasonal vegetables.',
    'menu.3.title': 'Japanese Beef Stew Set',
    'menu.3.sub': 'Rice & miso soup included',
    'menu.3.text': 'A Japanese stew featuring tender beef and vegetables, simmered until soft and full of flavor. This rich, savory dish is warm, wholesome, and satisfying.',
    'menu.note.title': 'Every Meal is a Set',
    'menu.note.text': 'To give you a true Japanese dining experience, all of our main dishes are served with a steaming bowl of Japanese Rice and traditional Miso Soup.',
    'drinks.label': 'Beer, Sake & Wine',
    'drinks.title': 'Alcoholic Drinks',
    'drink.1.name': 'Kirin Beer Bottle',
    'drink.1.sub': 'Kirin Beer 500 ML',
    'drink.2.name': 'Non-Alcohol Beer',
    'drink.2.sub': 'Non-Alcohol Beer',
    'drink.3.name': 'Whiskey Highball',
    'drink.3.sub': 'Whiskey Highball',
    'drink.4.name': 'Sake (Glass)',
    'drink.4.sub': 'Japanese Rice Wine Glass',
    'drink.5.name': 'Plum Wine',
    'drink.5.sub': 'Plum Wine',
    'drink.6.name': 'Red Wine (Glass)',
    'drink.6.sub': 'Red Wine Glass',
    'drink.7.name': 'Red Wine (Bottle)',
    'drink.7.sub': 'Red Wine Bottle',
    'drink.8.name': 'White Wine (Glass)',
    'drink.8.sub': 'White Wine Glass',
    'drink.9.name': 'White Wine (Bottle)',
    'drink.9.sub': 'White Wine Bottle',
    'location.title': 'Visit Us',
    'location.address': 'Japan, 〒250-0311 Kanagawa, Ashigarashimo District, Hakone, Yumoto, 694-5 2F',
    'location.open': 'We are Open',
    'location.lunch': 'Lunch: 11:00 AM - 3:00 PM',
    'location.last1': 'Last order: 2:30 PM',
    'location.dinner': 'Dinner: 6:00 PM - 9:00 PM',
    'location.last2': 'Last order: 8:30 PM',
    'location.closed': 'Closed every Thursday',
    'footer.owner': 'By: Andy Ryu B. Abiko',
    'footer.address': 'Japan, 〒250-0311 Kanagawa, Ashigarashimo District, Hakone, Yumoto, 694-5 2F',
    'footer.copy': '© 2026 Ryu Hakone Steak House. All rights reserved.'
  },
  ja: {
    'nav.menu': 'メニュー',
    'nav.about': '私たちについて',
    'nav.vision': 'ビジョン',
    'nav.values': '価値観',
    'nav.location': 'アクセス',
    'hero.headline': '箱根の中心で最高のステーキ体験を',
    'hero.cta': 'ご来店はこちら',
    'about.marker': 'ABOUT',
    'about.label': '私たちについて',
    'about.subtitle': 'リュウ箱根ステーキハウスへようこそ',
    'about.text': '箱根観光の途中で、忘れられない食事体験をお探しですか。湯本の景観エリアから歩いてすぐの場所にあるリュウ箱根ステーキハウスは、日本のおもてなしと上質な牛肉を味わえるステーキハウスです。\n\n温泉巡りや山の景色を楽しんだ後は、どうぞゆっくりとくつろぎながら、贅沢な味わいをお楽しみください。',
    'about.more': '詳しく見る',
    'purpose.marker': 'PURPOSE',
    'purpose.label': '私たちの目的',
    'purpose.title': 'ビジョン & ミッション',
    'vision.label': 'ビジョン',
    'vision.title': '箱根を代表するステーキハウスへ。',
    'vision.text': '看板メニューのプレミアムビーフと日本らしいおもてなしを通して、観光客の皆さまに忘れられない食体験を提供する、箱根で最も愛されるステーキハウスを目指します。',
    'mission.label': 'ミッション',
    'mission.title': '上質な牛肉と技、温かさでお迎えします。',
    'mission.text': 'リュウ箱根ステーキハウスは、湯本・箱根の中心で、プレミアム和牛ステーキ、手ごねハンバーグ、和定食を提供し、観光で訪れるお客さまと食を愛する方々に価値ある時間をお届けします。現代的な調理技術を取り入れながら、持続的な成長と長期的な成功を目指します。私たちの哲学は、日本の伝統的なおもてなしと、シンプルで高品質な食材へのこだわりです。「口の中でとろける」牛肉の食感と居心地のよい空間で、箱根のランドマークとして地域に愛される店を目指し、スタッフにもお客さまと同じ温かさで接します。',
    'values.marker': 'VALUES',
    'values.label1': 'RYUスタンダード',
    'values.title': 'コアバリュー',
    'values.label2': 'すべてのサービスに',
    'value.1.title': '品質第一',
    'value.1.text': '素晴らしい食事は最高の食材から始まると信じています。ひと口ごとに「とろける食感」を届けるプレミアムビーフのみを提供します。',
    'value.2.title': '心を込めたおもてなし',
    'value.2.text': '日本の伝統文化に根ざし、すべてのお客さまを大切な来訪者としてお迎えします。誰もが安心して過ごせる温かく居心地のよい空間づくりを大切にしています。',
    'value.3.title': 'シンプルさと誠実さ',
    'value.3.text': '技術に自信があるからこそ、私たちはシンプルであり続けます。手ごねのパティから和定食まで、余計なものを足さず、日本本来の味わいを大切にします。',
    'value.4.title': '地域とつながり',
    'value.4.text': '私たちは単なるレストランではなく、箱根のランドマークを目指しています。お客さま、地域の皆さま、スタッフとの長い信頼関係を育みます。',
    'value.5.title': 'すべてのセットに最高品質を',
    'value.5.text': '炊きたてのご飯から柔らかなステーキまで、すべてに高い基準を徹底します。現代的な技法と情熱で、安定した高品質な食体験を提供します。',
    'menu.marker': 'MENU',
    'menu.label': 'シンプル・上質・和の味わい',
    'menu.title': 'メニュー',
    'menu.intro': '食材が主役だからこそ、私たちのメニューはシンプルです。とろける食感と美しいサシが魅力のプレミアムビーフを中心にご用意しています。',
    'menu.1.title': '和牛ステーキセット',
    'menu.1.sub': 'ご飯・味噌汁付き',
    'menu.1.text': '柔らかく旨み豊かなステーキを、季節の野菜とともにご提供。ご飯と味噌汁が付いた満足感のあるセットです。',
    'menu.2.title': '和風ハンバーグセット',
    'menu.2.sub': 'ご飯・味噌汁付き',
    'menu.2.text': '口どけのよいハンバーグを、特製ソースで。日本の定番洋食を、季節の野菜・ご飯・味噌汁とともにお楽しみください。',
    'menu.3.title': '和風ビーフシチューセット',
    'menu.3.sub': 'ご飯・味噌汁付き',
    'menu.3.text': '牛肉と野菜をやわらかく煮込んだ、深いコクのある和風シチュー。体が温まる、やさしい味わいです。',
    'menu.note.title': 'すべてセットでご提供',
    'menu.note.text': '本格的な和の食体験をお届けするため、すべてのメイン料理に炊きたてのご飯と味噌汁をお付けしています。',
    'drinks.label': 'ビール・日本酒・ワイン',
    'drinks.title': 'アルコールドリンク',
    'drink.1.name': 'キリンビール中瓶',
    'drink.1.sub': 'キリンビール 500ml',
    'drink.2.name': 'ノンアルコールビール',
    'drink.2.sub': 'ノンアルコールビール',
    'drink.3.name': 'ウィスキーハイボール',
    'drink.3.sub': 'ウィスキーハイボール',
    'drink.4.name': '日本酒グラス',
    'drink.4.sub': '日本酒（グラス）',
    'drink.5.name': '梅酒',
    'drink.5.sub': '梅酒',
    'drink.6.name': '赤ワイングラス',
    'drink.6.sub': '赤ワイン（グラス）',
    'drink.7.name': '赤ワインボトル',
    'drink.7.sub': '赤ワイン（ボトル）',
    'drink.8.name': '白ワイングラス',
    'drink.8.sub': '白ワイン（グラス）',
    'drink.9.name': '白ワインボトル',
    'drink.9.sub': '白ワイン（ボトル）',
    'location.title': 'アクセス',
    'location.address': '日本、〒250-0311 神奈川県足柄下郡箱根町湯本694-5 2F',
    'location.open': '営業時間',
    'location.lunch': 'ランチ: 11:00 - 15:00',
    'location.last1': 'ラストオーダー: 14:30',
    'location.dinner': 'ディナー: 18:00 - 21:00',
    'location.last2': 'ラストオーダー: 20:30',
    'location.closed': '毎週木曜日 定休',
    'footer.owner': '運営: Andy Ryu B. Abiko',
    'footer.address': '日本、〒250-0311 神奈川県足柄下郡箱根町湯本694-5 2F',
    'footer.copy': '© 2026 Ryu Hakone Steak House. All rights reserved.'
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
  { selector: '#menu .section-heading .showcase-label', key: 'menu.label' },
  { selector: '#menu .section-heading .section-title', key: 'menu.title' },
  { selector: '#menu .menu-intro', key: 'menu.intro' },
  { selector: '#menu .menu-item:nth-child(1) .menu-item-title', key: 'menu.1.title' },
  { selector: '#menu .menu-item:nth-child(1) .menu-item-sub', key: 'menu.1.sub' },
  { selector: '#menu .menu-item:nth-child(1) .menu-item-text', key: 'menu.1.text' },
  { selector: '#menu .menu-item:nth-child(2) .menu-item-title', key: 'menu.2.title' },
  { selector: '#menu .menu-item:nth-child(2) .menu-item-sub', key: 'menu.2.sub' },
  { selector: '#menu .menu-item:nth-child(2) .menu-item-text', key: 'menu.2.text' },
  { selector: '#menu .menu-item:nth-child(3) .menu-item-title', key: 'menu.3.title' },
  { selector: '#menu .menu-item:nth-child(3) .menu-item-sub', key: 'menu.3.sub' },
  { selector: '#menu .menu-item:nth-child(3) .menu-item-text', key: 'menu.3.text' },
  { selector: '#menu .menu-note-title', key: 'menu.note.title' },
  { selector: '#menu .menu-note-text', key: 'menu.note.text' },
  { selector: '#menu .drinks-menu-heading .showcase-label', key: 'drinks.label' },
  { selector: '#menu #drinks-menu-title', key: 'drinks.title' },
  { selector: '#menu .drinks-item:nth-child(1) .drinks-item-name', key: 'drink.1.name' },
  { selector: '#menu .drinks-item:nth-child(1) .drinks-item-sub', key: 'drink.1.sub' },
  { selector: '#menu .drinks-item:nth-child(2) .drinks-item-name', key: 'drink.2.name' },
  { selector: '#menu .drinks-item:nth-child(2) .drinks-item-sub', key: 'drink.2.sub' },
  { selector: '#menu .drinks-item:nth-child(3) .drinks-item-name', key: 'drink.3.name' },
  { selector: '#menu .drinks-item:nth-child(3) .drinks-item-sub', key: 'drink.3.sub' },
  { selector: '#menu .drinks-item:nth-child(4) .drinks-item-name', key: 'drink.4.name' },
  { selector: '#menu .drinks-item:nth-child(4) .drinks-item-sub', key: 'drink.4.sub' },
  { selector: '#menu .drinks-item:nth-child(5) .drinks-item-name', key: 'drink.5.name' },
  { selector: '#menu .drinks-item:nth-child(5) .drinks-item-sub', key: 'drink.5.sub' },
  { selector: '#menu .drinks-item:nth-child(6) .drinks-item-name', key: 'drink.6.name' },
  { selector: '#menu .drinks-item:nth-child(6) .drinks-item-sub', key: 'drink.6.sub' },
  { selector: '#menu .drinks-item:nth-child(7) .drinks-item-name', key: 'drink.7.name' },
  { selector: '#menu .drinks-item:nth-child(7) .drinks-item-sub', key: 'drink.7.sub' },
  { selector: '#menu .drinks-item:nth-child(8) .drinks-item-name', key: 'drink.8.name' },
  { selector: '#menu .drinks-item:nth-child(8) .drinks-item-sub', key: 'drink.8.sub' },
  { selector: '#menu .drinks-item:nth-child(9) .drinks-item-name', key: 'drink.9.name' },
  { selector: '#menu .drinks-item:nth-child(9) .drinks-item-sub', key: 'drink.9.sub' },
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

  updateLanguageToggle(language);

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(currentTheme);
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

// Add scroll animation to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

function updateScrollToggle(currentScroll = window.pageYOffset) {
  if (!scrollToggle) {
    return;
  }

  scrollToggle.classList.add('is-visible');

  if (currentScroll <= 80) {
    scrollToggle.setAttribute('aria-label', 'Scroll to bottom');
    scrollToggle.setAttribute('title', 'Scroll to bottom');
    scrollToggle.querySelector('.scroll-toggle-icon').textContent = '↓';
    return;
  }

  scrollToggle.setAttribute('aria-label', 'Scroll to top');
  scrollToggle.setAttribute('title', 'Scroll to top');
  scrollToggle.querySelector('.scroll-toggle-icon').textContent = '↑';
}

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    const themedShadow = getComputedStyle(document.documentElement).getPropertyValue('--shadow-nav').trim();
    navbar.style.boxShadow = `0 2px 20px ${themedShadow || 'rgba(0, 0, 0, 0.1)'}`;
    navbar.classList.add('scrolled');
  } else {
    navbar.style.boxShadow = 'none';
    navbar.classList.remove('scrolled');
  }

  updateScrollToggle(currentScroll);
  
  lastScroll = currentScroll;
});

if (scrollToggle) {
  scrollToggle.addEventListener('click', () => {
    const isAtTop = window.pageYOffset <= 80;
    const targetPosition = isAtTop ? document.documentElement.scrollHeight - window.innerHeight : 0;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: 'smooth'
    });
  });

  updateScrollToggle();
}

// Intersection Observer for fade-in animations
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections for animation with slight stagger
const revealTargets = document.querySelectorAll('.story-container, .story-image-large, .story-image-small, .vision-container, .vision-panel, .value-item, .menu-container, .menu-item, .drinks-menu, .menu-note, .location-container, .location-address, .location-map, .showcase-header');
revealTargets.forEach((el, index) => {
  if (prefersReducedMotion) {
    el.style.opacity = '1';
    el.style.transform = 'none';
    return;
  }

  const delay = Math.min(index * 70, 280);
  el.style.opacity = '0';
  el.style.transform = 'translateY(34px) scale(0.985)';
  el.style.transition = `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;
  observer.observe(el);
});

// Hero image parallax effect (subtle)
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
  window.addEventListener('scroll', () => {
    if (prefersReducedMotion) {
      return;
    }

    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.14;
    const scale = Math.max(0.78, 1 - scrolled * 0.00045);
    heroImage.style.transform = `translateY(${parallax}px) scale(${scale})`;
  });
}

console.log('Ryu Hakone Steak House - Website loaded successfully');
