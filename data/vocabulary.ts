import type { VocabWord, VocabCategory } from "@/types";

export const VOCAB_CATEGORIES: VocabCategory[] = [
  "Salam",
  "Angka",
  "Keluarga",
  "Makanan",
  "Warna",
  "Perjalanan",
];

export const VOCABULARY: VocabWord[] = [
  // Salam
  { id: "sal-1", category: "Salam", french: "Bonjour", phonetic: "[bɔ̃ʒuʁ]", indonesian: "Halo / Selamat siang", example: "Bonjour, comment ça va?", exampleTranslation: "Halo, apa kabar?" },
  { id: "sal-2", category: "Salam", french: "Bonsoir", phonetic: "[bɔ̃swaʁ]", indonesian: "Selamat malam", example: "Bonsoir tout le monde!", exampleTranslation: "Selamat malam semuanya!" },
  { id: "sal-3", category: "Salam", french: "Merci", phonetic: "[mɛʁsi]", indonesian: "Terima kasih", example: "Merci beaucoup!", exampleTranslation: "Terima kasih banyak!" },
  { id: "sal-4", category: "Salam", french: "Au revoir", phonetic: "[o ʁəvwaʁ]", indonesian: "Sampai jumpa", example: "Au revoir, à demain!", exampleTranslation: "Sampai jumpa, sampai besok!" },
  { id: "sal-5", category: "Salam", french: "S'il vous plaît", phonetic: "[sil vu plɛ]", indonesian: "Tolong / Silakan", example: "Un café, s'il vous plaît.", exampleTranslation: "Satu kopi, tolong." },
  { id: "sal-6", category: "Salam", french: "Excusez-moi", phonetic: "[ɛkskyze mwa]", indonesian: "Permisi / Maaf", example: "Excusez-moi, où est la gare?", exampleTranslation: "Permisi, di mana stasiun?" },
  { id: "sal-7", category: "Salam", french: "De rien", phonetic: "[də ʁjɛ̃]", indonesian: "Sama-sama", example: "— Merci! — De rien!", exampleTranslation: "— Terima kasih! — Sama-sama!" },
  { id: "sal-8", category: "Salam", french: "Pardon", phonetic: "[paʁdɔ̃]", indonesian: "Maaf", example: "Pardon, je suis en retard.", exampleTranslation: "Maaf, saya terlambat." },
  { id: "sal-9", category: "Salam", french: "Bienvenue", phonetic: "[bjɛ̃vəny]", indonesian: "Selamat datang", example: "Bienvenue en France!", exampleTranslation: "Selamat datang di Prancis!" },
  { id: "sal-10", category: "Salam", french: "À bientôt", phonetic: "[a bjɛ̃to]", indonesian: "Sampai nanti", example: "À bientôt, mon ami!", exampleTranslation: "Sampai nanti, temanku!" },

  // Angka
  { id: "ang-1", category: "Angka", french: "Un / Une", phonetic: "[œ̃] / [yn]", indonesian: "Satu", example: "J'ai un chat.", exampleTranslation: "Saya punya satu kucing." },
  { id: "ang-2", category: "Angka", french: "Deux", phonetic: "[dø]", indonesian: "Dua", example: "Deux cafés, s'il vous plaît.", exampleTranslation: "Dua kopi, tolong." },
  { id: "ang-3", category: "Angka", french: "Trois", phonetic: "[tʁwa]", indonesian: "Tiga", example: "Il est trois heures.", exampleTranslation: "Sekarang jam tiga." },
  { id: "ang-4", category: "Angka", french: "Quatre", phonetic: "[katʁ]", indonesian: "Empat", example: "Nous sommes quatre.", exampleTranslation: "Kami berempat." },
  { id: "ang-5", category: "Angka", french: "Cinq", phonetic: "[sɛ̃k]", indonesian: "Lima", example: "J'ai cinq euros.", exampleTranslation: "Saya punya lima euro." },
  { id: "ang-6", category: "Angka", french: "Dix", phonetic: "[dis]", indonesian: "Sepuluh", example: "Dix minutes de marche.", exampleTranslation: "Sepuluh menit berjalan kaki." },
  { id: "ang-7", category: "Angka", french: "Vingt", phonetic: "[vɛ̃]", indonesian: "Dua puluh", example: "Elle a vingt ans.", exampleTranslation: "Dia berumur dua puluh tahun." },
  { id: "ang-8", category: "Angka", french: "Trente", phonetic: "[tʁɑ̃t]", indonesian: "Tiga puluh", example: "Trente jours en avril.", exampleTranslation: "Tiga puluh hari di bulan April." },
  { id: "ang-9", category: "Angka", french: "Cent", phonetic: "[sɑ̃]", indonesian: "Seratus", example: "Cent pour cent!", exampleTranslation: "Seratus persen!" },
  { id: "ang-10", category: "Angka", french: "Mille", phonetic: "[mil]", indonesian: "Seribu", example: "Mille mercis!", exampleTranslation: "Seribu terima kasih!" },

  // Keluarga
  { id: "kel-1", category: "Keluarga", french: "Père", phonetic: "[pɛʁ]", indonesian: "Ayah", example: "Mon père travaille beaucoup.", exampleTranslation: "Ayah saya banyak bekerja." },
  { id: "kel-2", category: "Keluarga", french: "Mère", phonetic: "[mɛʁ]", indonesian: "Ibu", example: "Ma mère cuisine très bien.", exampleTranslation: "Ibu saya masak sangat enak." },
  { id: "kel-3", category: "Keluarga", french: "Frère", phonetic: "[fʁɛʁ]", indonesian: "Saudara laki-laki", example: "J'ai un grand frère.", exampleTranslation: "Saya punya kakak laki-laki." },
  { id: "kel-4", category: "Keluarga", french: "Sœur", phonetic: "[sœʁ]", indonesian: "Saudara perempuan", example: "Ma sœur habite à Paris.", exampleTranslation: "Adik perempuan saya tinggal di Paris." },
  { id: "kel-5", category: "Keluarga", french: "Grand-père", phonetic: "[gʁɑ̃ pɛʁ]", indonesian: "Kakek", example: "Mon grand-père raconte des histoires.", exampleTranslation: "Kakek saya bercerita." },
  { id: "kel-6", category: "Keluarga", french: "Grand-mère", phonetic: "[gʁɑ̃ mɛʁ]", indonesian: "Nenek", example: "Ma grand-mère aime jardiner.", exampleTranslation: "Nenek saya suka berkebun." },
  { id: "kel-7", category: "Keluarga", french: "Enfant", phonetic: "[ɑ̃fɑ̃]", indonesian: "Anak", example: "L'enfant joue dehors.", exampleTranslation: "Anak itu bermain di luar." },
  { id: "kel-8", category: "Keluarga", french: "Ami(e)", phonetic: "[ami]", indonesian: "Teman", example: "C'est mon meilleur ami.", exampleTranslation: "Ini teman terbaik saya." },
  { id: "kel-9", category: "Keluarga", french: "Mari", phonetic: "[maʁi]", indonesian: "Suami", example: "Son mari est médecin.", exampleTranslation: "Suaminya seorang dokter." },
  { id: "kel-10", category: "Keluarga", french: "Femme", phonetic: "[fam]", indonesian: "Istri / Wanita", example: "Sa femme est professeure.", exampleTranslation: "Istrinya seorang guru." },

  // Makanan
  { id: "mak-1", category: "Makanan", french: "Pain", phonetic: "[pɛ̃]", indonesian: "Roti", example: "Je mange du pain le matin.", exampleTranslation: "Saya makan roti di pagi hari." },
  { id: "mak-2", category: "Makanan", french: "Fromage", phonetic: "[fʁɔmaʒ]", indonesian: "Keju", example: "La France a beaucoup de fromage.", exampleTranslation: "Prancis punya banyak keju." },
  { id: "mak-3", category: "Makanan", french: "Eau", phonetic: "[o]", indonesian: "Air", example: "Un verre d'eau, s'il vous plaît.", exampleTranslation: "Segelas air, tolong." },
  { id: "mak-4", category: "Makanan", french: "Café", phonetic: "[kafe]", indonesian: "Kopi", example: "J'adore le café le matin.", exampleTranslation: "Saya suka kopi di pagi hari." },
  { id: "mak-5", category: "Makanan", french: "Vin", phonetic: "[vɛ̃]", indonesian: "Anggur (wine)", example: "Le vin rouge est délicieux.", exampleTranslation: "Anggur merah itu enak." },
  { id: "mak-6", category: "Makanan", french: "Poulet", phonetic: "[pulɛ]", indonesian: "Ayam", example: "Je voudrais du poulet.", exampleTranslation: "Saya mau ayam." },
  { id: "mak-7", category: "Makanan", french: "Pomme", phonetic: "[pɔm]", indonesian: "Apel", example: "Une pomme par jour.", exampleTranslation: "Satu apel setiap hari." },
  { id: "mak-8", category: "Makanan", french: "Croissant", phonetic: "[kʁwasɑ̃]", indonesian: "Kroisan", example: "Un croissant chaud, s'il vous plaît.", exampleTranslation: "Kroisan hangat, tolong." },
  { id: "mak-9", category: "Makanan", french: "Soupe", phonetic: "[sup]", indonesian: "Sup", example: "La soupe est très chaude.", exampleTranslation: "Sup ini sangat panas." },
  { id: "mak-10", category: "Makanan", french: "Salade", phonetic: "[salad]", indonesian: "Salad", example: "Je prends une salade.", exampleTranslation: "Saya pesan salad." },

  // Warna
  { id: "war-1", category: "Warna", french: "Rouge", phonetic: "[ʁuʒ]", indonesian: "Merah", example: "La pomme est rouge.", exampleTranslation: "Apel itu berwarna merah." },
  { id: "war-2", category: "Warna", french: "Bleu(e)", phonetic: "[blø]", indonesian: "Biru", example: "Le ciel est bleu.", exampleTranslation: "Langit berwarna biru." },
  { id: "war-3", category: "Warna", french: "Vert(e)", phonetic: "[vɛʁ]", indonesian: "Hijau", example: "L'herbe est verte.", exampleTranslation: "Rumput berwarna hijau." },
  { id: "war-4", category: "Warna", french: "Jaune", phonetic: "[ʒon]", indonesian: "Kuning", example: "Le soleil est jaune.", exampleTranslation: "Matahari berwarna kuning." },
  { id: "war-5", category: "Warna", french: "Noir(e)", phonetic: "[nwaʁ]", indonesian: "Hitam", example: "J'ai un chat noir.", exampleTranslation: "Saya punya kucing hitam." },
  { id: "war-6", category: "Warna", french: "Blanc(he)", phonetic: "[blɑ̃]", indonesian: "Putih", example: "La neige est blanche.", exampleTranslation: "Salju berwarna putih." },
  { id: "war-7", category: "Warna", french: "Rose", phonetic: "[ʁoz]", indonesian: "Merah muda", example: "Sa robe est rose.", exampleTranslation: "Gaunnya berwarna merah muda." },
  { id: "war-8", category: "Warna", french: "Violet(te)", phonetic: "[vjɔlɛ]", indonesian: "Ungu", example: "La fleur est violette.", exampleTranslation: "Bunga itu berwarna ungu." },
  { id: "war-9", category: "Warna", french: "Orange", phonetic: "[ɔʁɑ̃ʒ]", indonesian: "Oranye", example: "J'aime la couleur orange.", exampleTranslation: "Saya suka warna oranye." },
  { id: "war-10", category: "Warna", french: "Gris(e)", phonetic: "[gʁi]", indonesian: "Abu-abu", example: "Le ciel est gris aujourd'hui.", exampleTranslation: "Langit berwarna abu-abu hari ini." },

  // Perjalanan
  { id: "per-1", category: "Perjalanan", french: "Aéroport", phonetic: "[aeʁɔpɔʁ]", indonesian: "Bandara", example: "L'aéroport est loin d'ici.", exampleTranslation: "Bandara jauh dari sini." },
  { id: "per-2", category: "Perjalanan", french: "Train", phonetic: "[tʁɛ̃]", indonesian: "Kereta", example: "Le train part à midi.", exampleTranslation: "Kereta berangkat jam 12 siang." },
  { id: "per-3", category: "Perjalanan", french: "Hôtel", phonetic: "[otɛl]", indonesian: "Hotel", example: "Notre hôtel est confortable.", exampleTranslation: "Hotel kami nyaman." },
  { id: "per-4", category: "Perjalanan", french: "Passeport", phonetic: "[paspɔʁ]", indonesian: "Paspor", example: "N'oublie pas ton passeport!", exampleTranslation: "Jangan lupa paspormu!" },
  { id: "per-5", category: "Perjalanan", french: "Valise", phonetic: "[valiz]", indonesian: "Koper", example: "Ma valise est trop lourde.", exampleTranslation: "Koper saya terlalu berat." },
  { id: "per-6", category: "Perjalanan", french: "Billet", phonetic: "[bijɛ]", indonesian: "Tiket", example: "J'ai acheté un billet.", exampleTranslation: "Saya sudah beli tiket." },
  { id: "per-7", category: "Perjalanan", french: "Gare", phonetic: "[gaʁ]", indonesian: "Stasiun", example: "La gare est près d'ici.", exampleTranslation: "Stasiun dekat dari sini." },
  { id: "per-8", category: "Perjalanan", french: "Avion", phonetic: "[avjɔ̃]", indonesian: "Pesawat", example: "L'avion décolle bientôt.", exampleTranslation: "Pesawat akan segera lepas landas." },
  { id: "per-9", category: "Perjalanan", french: "Taxi", phonetic: "[taksi]", indonesian: "Taksi", example: "Appelons un taxi.", exampleTranslation: "Ayo panggil taksi." },
  { id: "per-10", category: "Perjalanan", french: "Carte", phonetic: "[kaʁt]", indonesian: "Peta / Kartu", example: "Regarde la carte de la ville.", exampleTranslation: "Lihat peta kota ini." },
];
