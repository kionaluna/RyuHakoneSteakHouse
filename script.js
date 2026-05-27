// Ryu Hakone Restaurant - Modern Editorial Website

const THEME_STORAGE_KEY = 'ryu-theme';
const LANGUAGE_STORAGE_KEY = 'ryu-language';
const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.language-toggle');
const themeSensitiveLogos = document.querySelectorAll('.hero-mark, .footer-logo');
const lightLogoSrc = 'Logo/Logo_Final.png';
const darkLogoSrc = 'Logo/Logo_Final_dark.png';

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
    'menu.label': 'Japanese and Filipino Comfort',
    'menu.title': "WHAT'S ON THE MENU?",
    'menu.intro': 'From comforting set meals to shareable favorites and drinks, discover the flavors that make every visit feel special. All listed prices include tax.',
    'menu.group.set': 'Set Meals',
    'menu.group.ala': 'Ala Carte',
    'menu.group.drinks': 'Drinks',
    'menu.panel.japaneseSets': 'Japanese set meals',
    'menu.panel.japaneseIncludes': 'with rice, miso soup, and salad',
    'menu.1.title': 'Japanese Beef Steak Set (Picanha)',
    'menu.1.text': 'A perfectly tender cut from the upper rump, known for generous marbling and rich flavor.',
    'menu.2.title': 'Japanese Beef Steak Set (Rump)',
    'menu.2.text': 'A lean rump cut that is tender and full of deep beef flavor.',
    'menu.3.title': 'Japanese Hamburg Set',
    'menu.3.text': 'A tender and flavorful patty that melts in your mouth. A classic Japanese comfort dish served with our savory signature sauce.',
    'menu.4.title': 'Japanese Pork Belly Yakiniku Set',
    'menu.4.text': 'A juicy cut of grilled meat characterized by the sweetness of its fat and rich meaty flavor.',
    'ala.label': 'Japanese Favorites',
    'ala.title': 'Japanese Ala Carte',
    'ala.1.name': 'Japanese Beef Steak (Picanha)',
    'ala.1.desc': 'A perfectly tender cut from the upper rump, known for generous marbling and rich flavor.',
    'ala.2.name': 'Japanese Beef Steak (Rump)',
    'ala.2.desc': 'A lean rump cut that is tender and full of deep beef flavor.',
    'ala.3.name': 'Japanese Hamburg',
    'ala.3.desc': 'A tender and flavorful patty that melts in your mouth. A classic Japanese comfort dish served with our savory signature sauce.',
    'ala.4.name': 'Japanese Pork Belly Yakiniku',
    'ala.4.desc': 'A juicy cut of grilled meat characterized by the sweetness of its fat and rich meaty flavor.',
    'ala.5.name': 'Miso Soup',
    'ala.5.desc': 'A warm, savory, and comforting Japanese soup made with a traditional miso broth.',
    'ala.6.name': 'Rice',
    'ala.6.desc': 'Rice (Small, Medium, Large)',
    'set.label': 'Served as Set Meals',
    'set.title': 'Filipino set meals',
    'set.includes': 'with rice, miso soup, and salad',
    'set.1.name': 'Pork Adobo Set',
    'set.1.desc': 'A typical Filipino home-style dish of pork simmered in vinegar, soy sauce, garlic, and other spices.',
    'set.2.name': 'Filipino-style Fried Chicken Set',
    'set.2.desc': 'It features a crispy texture with a crispy skin and juicy flesh.',
    'set.3.name': 'Lumpiang Togue Set',
    'set.3.desc': 'A Filipino spring roll filled with bean sprouts and vegetables, wrapped in a thin pastry and deep-fried until crisp.',
    'dish.label': 'Filipino Classics',
    'dish.title': 'Filipino Dish',
    'dish.1.name': 'Pork Adobo',
    'dish.1.desc': 'A typical Filipino home-style dish of pork simmered in vinegar, soy sauce, garlic, and other spices.',
    'dish.2.name': 'Filipino-style Fried Chicken',
    'dish.2.desc': 'It features a crispy texture with a crispy skin and juicy flesh.',
    'dish.3.name': 'Lumpiang Togue',
    'dish.3.desc': 'A Filipino spring roll filled with bean sprouts and vegetables, wrapped in a thin pastry and deep-fried until crisp.',
    'drinks.label': 'Beer, Sake, & Wine',
    'drinks.title': 'Alcoholic Drinks',
    'drink.1.name': 'Kirin Beer 500 ML',
    'drink.2.name': 'Non-Alcohol Beer',
    'drink.3.name': 'Whiskey Highball',
    'drink.4.name': 'Sake (Glass)',
    'drink.5.name': 'Plum Wine',
    'drink.6.name': 'Red Wine Glass',
    'drink.7.name': 'Red Wine Bottle',
    'drink.8.name': 'White Wine Glass',
    'drink.9.name': 'White Wine Bottle',
    'soft.label': 'Coffee, Tea, & Juice',
    'soft.title': 'Soft Drinks',
    'soft.1.name': 'Coke',
    'soft.2.name': 'Ginger Ale',
    'soft.3.name': '100% Orange Juice',
    'soft.4.name': 'Oolong Tea',
    'soft.5.name': 'Green Tea',
    'soft.6.name': 'Hot Coffee',
    'soft.7.name': 'Iced Coffee',
    'dessert.title': 'Dessert',
    'dessert.1.name': "Juna's Homemade Leche Flan (Whole)",
    'dessert.2.name': "Juna's Homemade Leche Flan (Half)",
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
    'menu.label': '日本とフィリピンの心温まる味',
    'menu.title': 'メニュー',
    'menu.intro': '心温まるセットメニューから、みんなで楽しめる一品料理やドリンクまで、特別なひとときを彩る味わいをお楽しみください。表示価格はすべて税込です。',
    'menu.group.set': 'セットメニュー',
    'menu.group.ala': '単品メニュー',
    'menu.group.drinks': 'ドリンク',
    'menu.panel.japaneseSets': '和定食',
    'menu.panel.japaneseIncludes': 'ご飯・味噌汁・サラダ付き',
    'menu.1.title': '国産牛ステーキセット（イチボ）',
    'menu.1.text': 'ランプの上部にある部位で、サシが多く、やわらかいのが特徴です。',
    'menu.2.title': '国産牛ステーキセット（ランプ）',
    'menu.2.text': 'ランプ部位の赤身肉。やわらかく、肉の旨みがしっかり感じられます。',
    'menu.3.title': '和風ハンバーグセット',
    'menu.3.text': '口の中でほどける、やわらかく風味豊かなハンバーグ。特製ソースでお楽しみください。',
    'menu.4.title': '国産豚バラ焼肉セット',
    'menu.4.text': '脂の甘みと濃厚な旨味が特徴のジューシーな焼肉部位。',
    'ala.label': '和の定番',
    'ala.title': '和食アラカルト',
    'ala.1.name': '国産牛ステーキ（イチボ）',
    'ala.1.desc': 'ランプの上部にある部位で、サシが多く、やわらかいのが特徴です。',
    'ala.2.name': '国産牛ステーキ（ランプ）',
    'ala.2.desc': 'ランプ部位の赤身肉。やわらかく、肉の旨みがしっかり感じられます。',
    'ala.3.name': '和風ハンバーグ',
    'ala.3.desc': '口の中でほどける、やわらかく風味豊かなハンバーグ。特製ソースでお楽しみください。',
    'ala.4.name': '国産豚バラ焼肉',
    'ala.4.desc': '脂の甘みと濃厚な旨味が特徴のジューシーな焼肉部位。',
    'ala.5.name': '味噌汁',
    'ala.5.desc': '香り豊かな味噌だしで作る、ほっとする和のスープです。',
    'ala.6.name': 'ご飯',
    'ala.6.desc': 'ライス (小・中・大)',
    'set.label': 'セットでご提供',
    'set.title': 'フィリピン料理セット',
    'set.includes': 'ご飯・味噌汁・サラダ付き',
    'set.1.name': 'ポークアドボセット',
    'set.1.desc': '豚肉を酢、醤油、にんにくなどで煮込んだ、フィリピンの代表的な家庭料理です。',
    'set.2.name': 'フィリピン風唐揚げセット',
    'set.2.desc': '皮がパリパリで身がジューシーな、クリスピーな食感が特徴。',
    'set.3.name': 'ルンピアン・トゲセット',
    'set.3.desc': 'もやしや野菜を薄い皮で巻いて揚げた、フィリピンの定番春巻きです。',
    'dish.label': 'フィリピンの定番',
    'dish.title': 'フィリピン料理',
    'dish.1.name': 'ポークアドボ',
    'dish.1.desc': '豚肉を酢、醤油、にんにくなどで煮込んだ、フィリピンの代表的な家庭料理です。',
    'dish.2.name': 'フィリピン風唐揚げ',
    'dish.2.desc': '皮がパリパリで身がジューシーな、クリスピーな食感が特徴。',
    'dish.3.name': 'ルンピアン・トゲ',
    'dish.3.desc': 'もやしや野菜を薄い皮で巻いて揚げた、フィリピンの定番春巻きです。',
    'drinks.label': 'ビール・日本酒・ワイン',
    'drinks.title': 'アルコールドリンク',
    'drink.1.name': 'キリンビール中瓶',
    'drink.2.name': 'ノンアルコールビール',
    'drink.3.name': 'ウィスキーハイボール',
    'drink.4.name': '日本酒（グラス）',
    'drink.5.name': '梅酒',
    'drink.6.name': '赤ワイングラス',
    'drink.7.name': '赤ワインボトル',
    'drink.8.name': '白ワイングラス',
    'drink.9.name': '白ワインボトル',
    'soft.label': 'コーヒー・お茶・ジュース',
    'soft.title': 'ソフトドリンク',
    'soft.1.name': 'コーラ',
    'soft.2.name': 'ジンジャーエール',
    'soft.3.name': '100% オレンジジュース',
    'soft.4.name': '烏龍茶',
    'soft.5.name': '緑茶',
    'soft.6.name': 'ホットコーヒー',
    'soft.7.name': 'アイスコーヒー',
    'dessert.title': 'デザート',
    'dessert.1.name': 'ジュナの自家製レチェフラン（ホール）',
    'dessert.2.name': 'ジュナの自家製レチェフラン（ハーフ）',
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
  { selector: '#menu .section-heading .showcase-label', key: 'menu.label' },
  { selector: '#menu .section-heading .section-title', key: 'menu.title' },
  { selector: '#menu .menu-intro', key: 'menu.intro' },
  { selector: '#menu-group-set-title', key: 'menu.group.set' },
  { selector: '#menu-group-ala-title', key: 'menu.group.ala' },
  { selector: '#menu-group-drinks-title', key: 'menu.group.drinks' },
  { selector: '#menu .menu-board-panel--japanese .menu-board-panel-title', key: 'menu.panel.japaneseSets' },
  { selector: '#menu .menu-board-panel--japanese .menu-board-panel-note', key: 'menu.panel.japaneseIncludes' },
  { selector: '#menu .menu-item:nth-child(1) .menu-item-title', key: 'menu.1.title' },
  { selector: '#menu .menu-item:nth-child(1) .menu-item-text', key: 'menu.1.text' },
  { selector: '#menu .menu-item:nth-child(2) .menu-item-title', key: 'menu.2.title' },
  { selector: '#menu .menu-item:nth-child(2) .menu-item-text', key: 'menu.2.text' },
  { selector: '#menu .menu-item:nth-child(3) .menu-item-title', key: 'menu.3.title' },
  { selector: '#menu .menu-item:nth-child(3) .menu-item-text', key: 'menu.3.text' },
  { selector: '#menu .menu-item:nth-child(4) .menu-item-title', key: 'menu.4.title' },
  { selector: '#menu .menu-item:nth-child(4) .menu-item-text', key: 'menu.4.text' },
  { selector: '#menu .food-card--ala .drinks-menu-heading .showcase-label', key: 'ala.label' },
  { selector: '#ala-carte-title', key: 'ala.title' },
  { selector: '#menu .food-card--ala .ala-carte-item:nth-child(1) .drinks-item-name', key: 'ala.1.name' },
  { selector: '#menu .food-card--ala .ala-carte-item:nth-child(1) .ala-carte-desc', key: 'ala.1.desc' },
  { selector: '#menu .food-card--ala .ala-carte-item:nth-child(2) .drinks-item-name', key: 'ala.2.name' },
  { selector: '#menu .food-card--ala .ala-carte-item:nth-child(2) .ala-carte-desc', key: 'ala.2.desc' },
  { selector: '#menu .food-card--ala .ala-carte-item:nth-child(3) .drinks-item-name', key: 'ala.3.name' },
  { selector: '#menu .food-card--ala .ala-carte-item:nth-child(3) .ala-carte-desc', key: 'ala.3.desc' },
  { selector: '#menu .food-card--ala .ala-carte-item:nth-child(4) .drinks-item-name', key: 'ala.4.name' },
  { selector: '#menu .food-card--ala .ala-carte-item:nth-child(4) .ala-carte-desc', key: 'ala.4.desc' },
  { selector: '#menu .food-card--ala .ala-carte-item:nth-child(5) .drinks-item-name', key: 'ala.5.name' },
  { selector: '#menu .food-card--ala .ala-carte-item:nth-child(5) .ala-carte-desc', key: 'ala.5.desc' },
  { selector: '#menu .food-card--ala .ala-carte-item:nth-child(6) .drinks-item-name', key: 'ala.6.name' },
  { selector: '#menu .food-card--ala .ala-carte-item:nth-child(6) .ala-carte-desc', key: 'ala.6.desc' },
  { selector: '#menu .food-card--set .drinks-menu-heading .showcase-label', key: 'set.label' },
  { selector: '#menu .food-card--set .drinks-menu-heading .drinks-menu-title', key: 'set.title' },
  { selector: '#menu .food-card--set .drinks-menu-heading .menu-board-panel-note', key: 'set.includes' },
  { selector: '#menu .food-card--set .ala-carte-item:nth-child(1) .drinks-item-name', key: 'set.1.name' },
  { selector: '#menu .food-card--set .ala-carte-item:nth-child(1) .ala-carte-desc', key: 'set.1.desc' },
  { selector: '#menu .food-card--set .ala-carte-item:nth-child(2) .drinks-item-name', key: 'set.2.name' },
  { selector: '#menu .food-card--set .ala-carte-item:nth-child(2) .ala-carte-desc', key: 'set.2.desc' },
  { selector: '#menu .food-card--set .ala-carte-item:nth-child(3) .drinks-item-name', key: 'set.3.name' },
  { selector: '#menu .food-card--set .ala-carte-item:nth-child(3) .ala-carte-desc', key: 'set.3.desc' },
  { selector: '#menu .food-card--dish .drinks-menu-heading .showcase-label', key: 'dish.label' },
  { selector: '#menu .food-card--dish .drinks-menu-heading .drinks-menu-title', key: 'dish.title' },
  { selector: '#menu .food-card--dish .ala-carte-item:nth-child(1) .drinks-item-name', key: 'dish.1.name' },
  { selector: '#menu .food-card--dish .ala-carte-item:nth-child(1) .ala-carte-desc', key: 'dish.1.desc' },
  { selector: '#menu .food-card--dish .ala-carte-item:nth-child(2) .drinks-item-name', key: 'dish.2.name' },
  { selector: '#menu .food-card--dish .ala-carte-item:nth-child(2) .ala-carte-desc', key: 'dish.2.desc' },
  { selector: '#menu .food-card--dish .ala-carte-item:nth-child(3) .drinks-item-name', key: 'dish.3.name' },
  { selector: '#menu .food-card--dish .ala-carte-item:nth-child(3) .ala-carte-desc', key: 'dish.3.desc' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="drinks-menu-title"] .drinks-menu-heading .showcase-label', key: 'drinks.label' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="drinks-menu-title"] #drinks-menu-title', key: 'drinks.title' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="drinks-menu-title"] .drinks-item:nth-child(1) .drinks-item-name', key: 'drink.1.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="drinks-menu-title"] .drinks-item:nth-child(2) .drinks-item-name', key: 'drink.2.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="drinks-menu-title"] .drinks-item:nth-child(3) .drinks-item-name', key: 'drink.3.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="drinks-menu-title"] .drinks-item:nth-child(4) .drinks-item-name', key: 'drink.4.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="drinks-menu-title"] .drinks-item:nth-child(5) .drinks-item-name', key: 'drink.5.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="drinks-menu-title"] .drinks-item:nth-child(6) .drinks-item-name', key: 'drink.6.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="drinks-menu-title"] .drinks-item:nth-child(7) .drinks-item-name', key: 'drink.7.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="drinks-menu-title"] .drinks-item:nth-child(8) .drinks-item-name', key: 'drink.8.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="drinks-menu-title"] .drinks-item:nth-child(9) .drinks-item-name', key: 'drink.9.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="softdrinks-menu-title"] .drinks-menu-heading .showcase-label', key: 'soft.label' },
  { selector: '#softdrinks-menu-title', key: 'soft.title' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="softdrinks-menu-title"] .softdrinks-list .drinks-item:nth-child(1) .drinks-item-name', key: 'soft.1.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="softdrinks-menu-title"] .softdrinks-list .drinks-item:nth-child(2) .drinks-item-name', key: 'soft.2.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="softdrinks-menu-title"] .softdrinks-list .drinks-item:nth-child(3) .drinks-item-name', key: 'soft.3.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="softdrinks-menu-title"] .softdrinks-list .drinks-item:nth-child(4) .drinks-item-name', key: 'soft.4.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="softdrinks-menu-title"] .softdrinks-list .drinks-item:nth-child(5) .drinks-item-name', key: 'soft.5.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="softdrinks-menu-title"] .softdrinks-list .drinks-item:nth-child(6) .drinks-item-name', key: 'soft.6.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="softdrinks-menu-title"] .softdrinks-list .drinks-item:nth-child(7) .drinks-item-name', key: 'soft.7.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="softdrinks-menu-title"] .ala-carte-subheading .drinks-menu-title', key: 'dessert.title' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="softdrinks-menu-title"] .dessert-list .drinks-item:nth-child(1) .drinks-item-name', key: 'dessert.1.name' },
  { selector: '#menu .drinks-menu--separate[aria-labelledby="softdrinks-menu-title"] .dessert-list .drinks-item:nth-child(2) .drinks-item-name', key: 'dessert.2.name' },
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
const revealTargets = document.querySelectorAll('.story-container, .story-image-large, .story-image-small, .vision-container, .vision-panel, .value-item, .menu-container, .menu-group-heading, .menu-board-panel, .menu-item, .drinks-item, .location-container, .location-address, .location-map, .showcase-header');
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

console.log('Ryu Hakone Restaurant - Website loaded successfully');
