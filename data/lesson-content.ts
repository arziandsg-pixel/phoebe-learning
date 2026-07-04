import type { Flashcard, QuizQuestion } from "@/types";

export const FLASHCARDS: Flashcard[] = [
  // Level 1 - Alfabet & Bunyi
  { id: "f1-1", levelId: 1, french: "A, E, I, O, U", phonetic: "[a] [ə] [i] [o] [y]", indonesian: "Huruf vokal dasar Prancis", example: "Le mot 'ami' a deux voyelles.", exampleTranslation: "Kata 'ami' punya dua vokal." },
  { id: "f1-2", levelId: 1, french: "ou", phonetic: "[u]", indonesian: "Bunyi gabungan seperti 'u' Indonesia", example: "Vous, nous, bonjour.", exampleTranslation: "Anda, kami, halo." },
  { id: "f1-3", levelId: 1, french: "an / en", phonetic: "[ɑ̃]", indonesian: "Bunyi sengau 'ang'", example: "Enfant, France.", exampleTranslation: "Anak, Prancis." },
  { id: "f1-4", levelId: 1, french: "oi", phonetic: "[wa]", indonesian: "Bunyi seperti 'wa'", example: "Trois, moi, toi.", exampleTranslation: "Tiga, saya, kamu." },
  { id: "f1-5", levelId: 1, french: "ch", phonetic: "[ʃ]", indonesian: "Bunyi seperti 'sy'", example: "Chat, chocolat.", exampleTranslation: "Kucing, cokelat." },

  // Level 2 - Salam & Sapaan
  { id: "f2-1", levelId: 2, french: "Bonjour", phonetic: "[bɔ̃ʒuʁ]", indonesian: "Halo / Selamat siang", example: "Bonjour madame!", exampleTranslation: "Selamat siang, bu!" },
  { id: "f2-2", levelId: 2, french: "Comment ça va?", phonetic: "[kɔmɑ̃ sa va]", indonesian: "Apa kabar?", example: "Comment ça va aujourd'hui?", exampleTranslation: "Apa kabar hari ini?" },
  { id: "f2-3", levelId: 2, french: "Je m'appelle...", phonetic: "[ʒə mapɛl]", indonesian: "Nama saya...", example: "Je m'appelle Phoebe.", exampleTranslation: "Nama saya Phoebe." },
  { id: "f2-4", levelId: 2, french: "Enchanté(e)", phonetic: "[ɑ̃ʃɑ̃te]", indonesian: "Senang berkenalan", example: "Enchanté de vous rencontrer.", exampleTranslation: "Senang bertemu Anda." },
  { id: "f2-5", levelId: 2, french: "Ça va bien, merci", phonetic: "[sa va bjɛ̃ mɛʁsi]", indonesian: "Baik, terima kasih", example: "— Ça va? — Ça va bien, merci!", exampleTranslation: "— Apa kabar? — Baik, terima kasih!" },

  // Level 3 - Angka & Waktu
  { id: "f3-1", levelId: 3, french: "Quelle heure est-il?", phonetic: "[kɛl œʁ ɛtil]", indonesian: "Jam berapa sekarang?", example: "Quelle heure est-il maintenant?", exampleTranslation: "Jam berapa sekarang?" },
  { id: "f3-2", levelId: 3, french: "Il est midi", phonetic: "[il ɛ midi]", indonesian: "Sekarang jam 12 siang", example: "Il est midi, on mange!", exampleTranslation: "Sekarang jam 12, ayo makan!" },
  { id: "f3-3", levelId: 3, french: "Sept", phonetic: "[sɛt]", indonesian: "Tujuh", example: "J'ai sept livres.", exampleTranslation: "Saya punya tujuh buku." },
  { id: "f3-4", levelId: 3, french: "Huit", phonetic: "[ɥit]", indonesian: "Delapan", example: "Il est huit heures.", exampleTranslation: "Sekarang jam delapan." },
  { id: "f3-5", levelId: 3, french: "Neuf", phonetic: "[nœf]", indonesian: "Sembilan", example: "Neuf plus un font dix.", exampleTranslation: "Sembilan tambah satu jadi sepuluh." },

  // Level 4 - Kata Ganti & être
  { id: "f4-1", levelId: 4, french: "Je suis", phonetic: "[ʒə sɥi]", indonesian: "Saya adalah", example: "Je suis indonésien.", exampleTranslation: "Saya orang Indonesia." },
  { id: "f4-2", levelId: 4, french: "Tu es", phonetic: "[ty ɛ]", indonesian: "Kamu adalah", example: "Tu es gentil.", exampleTranslation: "Kamu baik hati." },
  { id: "f4-3", levelId: 4, french: "Il / Elle est", phonetic: "[il ɛ] / [ɛl ɛ]", indonesian: "Dia adalah", example: "Elle est professeure.", exampleTranslation: "Dia (pr) seorang guru." },
  { id: "f4-4", levelId: 4, french: "Nous sommes", phonetic: "[nu sɔm]", indonesian: "Kami adalah", example: "Nous sommes amis.", exampleTranslation: "Kami adalah teman." },
  { id: "f4-5", levelId: 4, french: "Ils / Elles sont", phonetic: "[il sɔ̃] / [ɛl sɔ̃]", indonesian: "Mereka adalah", example: "Ils sont étudiants.", exampleTranslation: "Mereka adalah mahasiswa." },

  // Level 5 - Keluarga
  { id: "f5-1", levelId: 5, french: "La famille", phonetic: "[la famij]", indonesian: "Keluarga", example: "J'aime ma famille.", exampleTranslation: "Saya menyayangi keluarga saya." },
  { id: "f5-2", levelId: 5, french: "Père", phonetic: "[pɛʁ]", indonesian: "Ayah", example: "Mon père est grand.", exampleTranslation: "Ayah saya tinggi." },
  { id: "f5-3", levelId: 5, french: "Mère", phonetic: "[mɛʁ]", indonesian: "Ibu", example: "Ma mère chante bien.", exampleTranslation: "Ibu saya menyanyi dengan baik." },
  { id: "f5-4", levelId: 5, french: "Frère et sœur", phonetic: "[fʁɛʁ e sœʁ]", indonesian: "Saudara laki-laki dan perempuan", example: "J'ai un frère et une sœur.", exampleTranslation: "Saya punya kakak laki-laki dan perempuan." },
  { id: "f5-5", levelId: 5, french: "Grands-parents", phonetic: "[gʁɑ̃ paʁɑ̃]", indonesian: "Kakek-nenek", example: "Mes grands-parents habitent à Lyon.", exampleTranslation: "Kakek-nenek saya tinggal di Lyon." },

  // Level 6 - Makanan & Restoran
  { id: "f6-1", levelId: 6, french: "Je voudrais...", phonetic: "[ʒə vudʁɛ]", indonesian: "Saya mau...", example: "Je voudrais un croissant.", exampleTranslation: "Saya mau satu kroisan." },
  { id: "f6-2", levelId: 6, french: "L'addition, s'il vous plaît", phonetic: "[ladisjɔ̃ sil vu plɛ]", indonesian: "Tolong bonnya", example: "L'addition, s'il vous plaît!", exampleTranslation: "Tolong bonnya!" },
  { id: "f6-3", levelId: 6, french: "Le menu", phonetic: "[lə məny]", indonesian: "Menu", example: "Pouvez-vous me montrer le menu?", exampleTranslation: "Bisa tunjukkan menunya?" },
  { id: "f6-4", levelId: 6, french: "C'est délicieux", phonetic: "[sɛ delisjø]", indonesian: "Ini enak sekali", example: "Ce plat est délicieux!", exampleTranslation: "Makanan ini enak sekali!" },
  { id: "f6-5", levelId: 6, french: "Une réservation", phonetic: "[yn ʁezɛʁvasjɔ̃]", indonesian: "Reservasi", example: "J'ai une réservation pour deux.", exampleTranslation: "Saya punya reservasi untuk dua orang." },

  // Level 7 - Kata Kerja Présent
  { id: "f7-1", levelId: 7, french: "Je parle", phonetic: "[ʒə paʁl]", indonesian: "Saya berbicara", example: "Je parle français.", exampleTranslation: "Saya berbicara Bahasa Prancis." },
  { id: "f7-2", levelId: 7, french: "Tu manges", phonetic: "[ty mɑ̃ʒ]", indonesian: "Kamu makan", example: "Tu manges vite.", exampleTranslation: "Kamu makan dengan cepat." },
  { id: "f7-3", levelId: 7, french: "Il va", phonetic: "[il va]", indonesian: "Dia pergi", example: "Il va à l'école.", exampleTranslation: "Dia pergi ke sekolah." },
  { id: "f7-4", levelId: 7, french: "Nous faisons", phonetic: "[nu fəzɔ̃]", indonesian: "Kami melakukan", example: "Nous faisons du sport.", exampleTranslation: "Kami berolahraga." },
  { id: "f7-5", levelId: 7, french: "Ils finissent", phonetic: "[il finis]", indonesian: "Mereka menyelesaikan", example: "Ils finissent leurs devoirs.", exampleTranslation: "Mereka menyelesaikan PR mereka." },

  // Level 8 - Imparfait & Cerita
  { id: "f8-1", levelId: 8, french: "J'étais", phonetic: "[ʒetɛ]", indonesian: "Saya dulu adalah", example: "J'étais très timide.", exampleTranslation: "Saya dulu sangat pemalu." },
  { id: "f8-2", levelId: 8, french: "Il faisait beau", phonetic: "[il fəzɛ bo]", indonesian: "Cuaca dulu cerah", example: "Hier, il faisait beau.", exampleTranslation: "Kemarin, cuaca cerah." },
  { id: "f8-3", levelId: 8, french: "Nous jouions", phonetic: "[nu ʒwjɔ̃]", indonesian: "Kami dulu bermain", example: "Nous jouions ensemble.", exampleTranslation: "Kami dulu bermain bersama." },
  { id: "f8-4", levelId: 8, french: "Un jour...", phonetic: "[œ̃ ʒuʁ]", indonesian: "Suatu hari...", example: "Un jour, elle est partie.", exampleTranslation: "Suatu hari, dia pergi." },
  { id: "f8-5", levelId: 8, french: "Ensuite", phonetic: "[ɑ̃sɥit]", indonesian: "Kemudian", example: "Ensuite, nous sommes rentrés.", exampleTranslation: "Kemudian, kami pulang." },

  // Level 9 - Masa Depan
  { id: "f9-1", levelId: 9, french: "Je voyagerai", phonetic: "[ʒə vwajaʒʁe]", indonesian: "Saya akan bepergian", example: "Je voyagerai en France.", exampleTranslation: "Saya akan bepergian ke Prancis." },
  { id: "f9-2", levelId: 9, french: "Tu seras", phonetic: "[ty səʁa]", indonesian: "Kamu akan menjadi", example: "Tu seras un bon médecin.", exampleTranslation: "Kamu akan menjadi dokter yang baik." },
  { id: "f9-3", levelId: 9, french: "Nous irons", phonetic: "[nu iʁɔ̃]", indonesian: "Kami akan pergi", example: "Nous irons à Paris demain.", exampleTranslation: "Kami akan pergi ke Paris besok." },
  { id: "f9-4", levelId: 9, french: "Bientôt", phonetic: "[bjɛ̃to]", indonesian: "Segera", example: "On se reverra bientôt.", exampleTranslation: "Kita akan bertemu lagi segera." },
  { id: "f9-5", levelId: 9, french: "L'année prochaine", phonetic: "[lane pʁɔʃɛn]", indonesian: "Tahun depan", example: "L'année prochaine, je vais étudier à Lyon.", exampleTranslation: "Tahun depan, saya akan belajar di Lyon." },

  // Level 10 - Media & Percakapan
  { id: "f10-1", levelId: 10, french: "Tu as vu ça?", phonetic: "[ty a vy sa]", indonesian: "Kamu lihat itu?", example: "Tu as vu ça à la télé?", exampleTranslation: "Kamu lihat itu di TV?" },
  { id: "f10-2", levelId: 10, french: "Franchement", phonetic: "[fʁɑ̃ʃmɑ̃]", indonesian: "Terus terang", example: "Franchement, c'était super.", exampleTranslation: "Terus terang, itu keren." },
  { id: "f10-3", levelId: 10, french: "Ça dépend", phonetic: "[sa depɑ̃]", indonesian: "Tergantung", example: "Ça dépend du temps.", exampleTranslation: "Tergantung cuaca." },
  { id: "f10-4", levelId: 10, french: "Un réseau social", phonetic: "[œ̃ ʁezo sɔsjal]", indonesian: "Media sosial", example: "Elle passe du temps sur les réseaux sociaux.", exampleTranslation: "Dia menghabiskan waktu di media sosial." },
  { id: "f10-5", levelId: 10, french: "En fait", phonetic: "[ɑ̃ fɛt]", indonesian: "Sebenarnya", example: "En fait, je suis d'accord.", exampleTranslation: "Sebenarnya, saya setuju." },

  // Level 11 - Pendapat & Debat
  { id: "f11-1", levelId: 11, french: "À mon avis", phonetic: "[a mɔ̃n avi]", indonesian: "Menurut saya", example: "À mon avis, c'est une bonne idée.", exampleTranslation: "Menurut saya, itu ide bagus." },
  { id: "f11-2", levelId: 11, french: "Je pense que...", phonetic: "[ʒə pɑ̃s kə]", indonesian: "Saya pikir bahwa...", example: "Je pense que tu as raison.", exampleTranslation: "Saya pikir kamu benar." },
  { id: "f11-3", levelId: 11, french: "Je ne suis pas d'accord", phonetic: "[ʒə nə sɥi pa dakɔʁ]", indonesian: "Saya tidak setuju", example: "Je ne suis pas d'accord avec toi.", exampleTranslation: "Saya tidak setuju denganmu." },
  { id: "f11-4", levelId: 11, french: "Au contraire", phonetic: "[o kɔ̃tʁɛʁ]", indonesian: "Sebaliknya", example: "Au contraire, c'est très utile.", exampleTranslation: "Sebaliknya, ini sangat berguna." },
  { id: "f11-5", levelId: 11, french: "D'un côté... de l'autre...", phonetic: "[dœ̃ kote... də lotʁ]", indonesian: "Di satu sisi... di sisi lain...", example: "D'un côté c'est cher, de l'autre c'est utile.", exampleTranslation: "Di satu sisi mahal, di sisi lain berguna." },

  // Level 12 - Berita & Artikel
  { id: "f12-1", levelId: 12, french: "L'actualité", phonetic: "[laktɥalite]", indonesian: "Berita terkini", example: "Je suis l'actualité chaque matin.", exampleTranslation: "Saya mengikuti berita setiap pagi." },
  { id: "f12-2", levelId: 12, french: "Un journal", phonetic: "[œ̃ ʒuʁnal]", indonesian: "Koran", example: "Il lit le journal au petit-déjeuner.", exampleTranslation: "Dia membaca koran saat sarapan." },
  { id: "f12-3", levelId: 12, french: "Un reportage", phonetic: "[œ̃ ʁəpɔʁtaʒ]", indonesian: "Reportase/laporan", example: "Ce reportage est intéressant.", exampleTranslation: "Reportase ini menarik." },
  { id: "f12-4", levelId: 12, french: "Selon l'article", phonetic: "[səlɔ̃ laʁtikl]", indonesian: "Menurut artikel", example: "Selon l'article, le climat change.", exampleTranslation: "Menurut artikel, iklim berubah." },
  { id: "f12-5", levelId: 12, french: "Une source fiable", phonetic: "[yn suʁs fjabl]", indonesian: "Sumber terpercaya", example: "C'est une source fiable.", exampleTranslation: "Ini sumber yang terpercaya." },

  // Level 13 - Sastra & Akademik
  { id: "f13-1", levelId: 13, french: "Un roman", phonetic: "[œ̃ ʁɔmɑ̃]", indonesian: "Novel", example: "Elle écrit un roman.", exampleTranslation: "Dia menulis sebuah novel." },
  { id: "f13-2", levelId: 13, french: "Un auteur", phonetic: "[œ̃n otœʁ]", indonesian: "Penulis", example: "Victor Hugo est un grand auteur.", exampleTranslation: "Victor Hugo adalah penulis besar." },
  { id: "f13-3", levelId: 13, french: "Une thèse", phonetic: "[yn tɛz]", indonesian: "Tesis/argumen utama", example: "Sa thèse est convaincante.", exampleTranslation: "Argumennya meyakinkan." },
  { id: "f13-4", levelId: 13, french: "Analyser", phonetic: "[analize]", indonesian: "Menganalisis", example: "Nous devons analyser ce poème.", exampleTranslation: "Kita harus menganalisis puisi ini." },
  { id: "f13-5", levelId: 13, french: "Une métaphore", phonetic: "[yn metafɔʁ]", indonesian: "Metafora", example: "C'est une belle métaphore.", exampleTranslation: "Ini metafora yang indah." },

  // Level 14 - Budaya Prancis
  { id: "f14-1", levelId: 14, french: "La gastronomie", phonetic: "[la gastʁɔnɔmi]", indonesian: "Kuliner khas", example: "La gastronomie française est célèbre.", exampleTranslation: "Kuliner Prancis terkenal." },
  { id: "f14-2", levelId: 14, french: "Le patrimoine", phonetic: "[lə patʁimwan]", indonesian: "Warisan budaya", example: "Ce château fait partie du patrimoine.", exampleTranslation: "Kastil ini bagian dari warisan budaya." },
  { id: "f14-3", levelId: 14, french: "Une fête traditionnelle", phonetic: "[yn fɛt tʁadisjɔnɛl]", indonesian: "Perayaan tradisional", example: "Le 14 juillet est une fête importante.", exampleTranslation: "14 Juli adalah perayaan penting." },
  { id: "f14-4", levelId: 14, french: "Un savoir-vivre", phonetic: "[œ̃ savwaʁ vivʁ]", indonesian: "Tata krama", example: "Le savoir-vivre est important en France.", exampleTranslation: "Tata krama itu penting di Prancis." },
  { id: "f14-5", levelId: 14, french: "Un artiste", phonetic: "[œ̃n aʁtist]", indonesian: "Seniman", example: "Monet était un grand artiste.", exampleTranslation: "Monet adalah seniman besar." },

  // Level 15 - Fasih & Natural
  { id: "f15-1", levelId: 15, french: "Ça marche!", phonetic: "[sa maʁʃ]", indonesian: "Oke, setuju!", example: "— On se voit à 8h? — Ça marche!", exampleTranslation: "— Ketemu jam 8? — Oke!" },
  { id: "f15-2", levelId: 15, french: "Du coup", phonetic: "[dy ku]", indonesian: "Jadi / Akibatnya", example: "Il pleut, du coup on reste à la maison.", exampleTranslation: "Hujan, jadi kita di rumah saja." },
  { id: "f15-3", levelId: 15, french: "Genre...", phonetic: "[ʒɑ̃ʁ]", indonesian: "Semacam / Kayak", example: "C'était genre incroyable.", exampleTranslation: "Itu kayak luar biasa." },
  { id: "f15-4", levelId: 15, french: "Bref", phonetic: "[bʁɛf]", indonesian: "Pokoknya / Singkatnya", example: "Bref, tout va bien.", exampleTranslation: "Pokoknya, semua baik-baik saja." },
  { id: "f15-5", levelId: 15, french: "Carrément", phonetic: "[kaʁemɑ̃]", indonesian: "Benar-benar / Banget", example: "C'est carrément génial.", exampleTranslation: "Ini keren banget." },

  // Level 16 - Sertifikasi DELF/DALF
  { id: "f16-1", levelId: 16, french: "L'épreuve", phonetic: "[lepʁœv]", indonesian: "Ujian/tes", example: "L'épreuve orale dure vingt minutes.", exampleTranslation: "Ujian lisan berlangsung dua puluh menit." },
  { id: "f16-2", levelId: 16, french: "La compréhension orale", phonetic: "[la kɔ̃pʁeɑ̃sjɔ̃ ɔʁal]", indonesian: "Pemahaman menyimak", example: "La compréhension orale est difficile.", exampleTranslation: "Pemahaman menyimak itu sulit." },
  { id: "f16-3", levelId: 16, french: "La production écrite", phonetic: "[la pʁɔdyksjɔ̃ ekʁit]", indonesian: "Produksi tulisan", example: "Je m'entraîne à la production écrite.", exampleTranslation: "Saya berlatih produksi tulisan." },
  { id: "f16-4", levelId: 16, french: "Le jury", phonetic: "[lə ʒyʁi]", indonesian: "Penguji", example: "Le jury pose des questions.", exampleTranslation: "Penguji mengajukan pertanyaan." },
  { id: "f16-5", levelId: 16, french: "Réussir l'examen", phonetic: "[ʁeysiʁ legzamɛ̃]", indonesian: "Lulus ujian", example: "J'espère réussir l'examen.", exampleTranslation: "Saya berharap lulus ujian." },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Level 1
  { id: "q1-1", levelId: 1, question: "Bagaimana bunyi huruf 'ou' dalam Bahasa Prancis?", options: ["[u]", "[o]", "[wa]", "[ɑ̃]"], correctIndex: 0, explanation: "'ou' dibaca seperti 'u' Indonesia, contoh: vous, nous." },
  { id: "q1-2", levelId: 1, question: "Kata 'chat' dibaca dengan bunyi 'ch' seperti...", options: ["k", "sy", "s", "j"], correctIndex: 1, explanation: "'ch' dalam Bahasa Prancis dibaca seperti 'sy'." },
  { id: "q1-3", levelId: 1, question: "Manakah kata yang mengandung bunyi sengau [ɑ̃]?", options: ["ami", "chat", "enfant", "oui"], correctIndex: 2, explanation: "'enfant' mengandung bunyi sengau 'an/en'." },
  { id: "q1-4", levelId: 1, question: "Kombinasi huruf 'oi' dibaca seperti...", options: ["oi", "wa", "wi", "oa"], correctIndex: 1, explanation: "'oi' dibaca [wa], contoh: trois, moi." },
  { id: "q1-5", levelId: 1, question: "Berapa jumlah huruf vokal dasar dalam Bahasa Prancis?", options: ["3", "4", "5", "6"], correctIndex: 2, explanation: "A, E, I, O, U adalah 5 huruf vokal dasar." },

  // Level 2
  { id: "q2-1", levelId: 2, question: "Apa arti 'Bonjour'?", options: ["Selamat malam", "Halo/Selamat siang", "Sampai jumpa", "Terima kasih"], correctIndex: 1, explanation: "'Bonjour' berarti halo atau selamat siang." },
  { id: "q2-2", levelId: 2, question: "Bagaimana cara mengatakan 'Nama saya...' dalam Bahasa Prancis?", options: ["Comment ça va?", "Je m'appelle...", "Enchanté", "Au revoir"], correctIndex: 1, explanation: "'Je m'appelle...' berarti 'Nama saya...'." },
  { id: "q2-3", levelId: 2, question: "Apa balasan yang tepat untuk 'Comment ça va?'", options: ["Bonjour", "Ça va bien, merci", "Pardon", "Bienvenue"], correctIndex: 1, explanation: "'Ça va bien, merci' berarti 'Baik, terima kasih'." },
  { id: "q2-4", levelId: 2, question: "'Enchanté(e)' digunakan untuk...", options: ["Meminta maaf", "Berpamitan", "Menyatakan senang berkenalan", "Memesan makanan"], correctIndex: 2, explanation: "'Enchanté(e)' diucapkan saat berkenalan dengan seseorang." },
  { id: "q2-5", levelId: 2, question: "Manakah sapaan yang tepat untuk malam hari?", options: ["Bonjour", "Bonsoir", "Bonne nuit seulement", "Salut seulement"], correctIndex: 1, explanation: "'Bonsoir' digunakan untuk menyapa di malam hari." },

  // Level 3
  { id: "q3-1", levelId: 3, question: "Bagaimana cara bertanya jam berapa sekarang?", options: ["Quel âge as-tu?", "Quelle heure est-il?", "Où es-tu?", "Comment ça va?"], correctIndex: 1, explanation: "'Quelle heure est-il?' berarti 'Jam berapa sekarang?'." },
  { id: "q3-2", levelId: 3, question: "'Il est midi' artinya...", options: ["Sekarang tengah malam", "Sekarang jam 12 siang", "Sekarang jam 1", "Sekarang pagi hari"], correctIndex: 1, explanation: "'Midi' berarti tengah hari (jam 12 siang)." },
  { id: "q3-3", levelId: 3, question: "Angka 'huit' berarti...", options: ["Enam", "Tujuh", "Delapan", "Sembilan"], correctIndex: 2, explanation: "'Huit' adalah angka delapan." },
  { id: "q3-4", levelId: 3, question: "Angka 'neuf' berarti...", options: ["Delapan", "Sembilan", "Sepuluh", "Tujuh"], correctIndex: 1, explanation: "'Neuf' adalah angka sembilan." },
  { id: "q3-5", levelId: 3, question: "Manakah urutan angka yang benar (1-3)?", options: ["Un, deux, trois", "Deux, un, trois", "Trois, deux, un", "Un, trois, deux"], correctIndex: 0, explanation: "Urutan yang benar adalah un (1), deux (2), trois (3)." },

  // Level 4
  { id: "q4-1", levelId: 4, question: "Konjugasi être untuk 'je' adalah...", options: ["es", "est", "suis", "sommes"], correctIndex: 2, explanation: "'Je suis' adalah konjugasi être untuk orang pertama tunggal." },
  { id: "q4-2", levelId: 4, question: "Konjugasi être untuk 'nous' adalah...", options: ["sommes", "êtes", "sont", "es"], correctIndex: 0, explanation: "'Nous sommes' adalah bentuk yang benar." },
  { id: "q4-3", levelId: 4, question: "'Ils sont étudiants' artinya...", options: ["Dia adalah mahasiswa", "Kami adalah mahasiswa", "Mereka adalah mahasiswa", "Kamu adalah mahasiswa"], correctIndex: 2, explanation: "'Ils sont' berarti 'mereka adalah' (untuk subjek maskulin/campuran)." },
  { id: "q4-4", levelId: 4, question: "Kata ganti untuk 'kamu' (informal) adalah...", options: ["vous", "tu", "il", "nous"], correctIndex: 1, explanation: "'Tu' digunakan untuk menyapa teman dekat secara informal." },
  { id: "q4-5", levelId: 4, question: "Konjugasi être yang benar untuk 'elle' adalah...", options: ["es", "est", "sont", "êtes"], correctIndex: 1, explanation: "'Elle est' adalah bentuk yang benar untuk orang ketiga tunggal feminin." },

  // Level 5
  { id: "q5-1", levelId: 5, question: "'Père' artinya...", options: ["Ibu", "Ayah", "Kakak", "Adik"], correctIndex: 1, explanation: "'Père' berarti ayah." },
  { id: "q5-2", levelId: 5, question: "'Sœur' artinya...", options: ["Saudara laki-laki", "Saudara perempuan", "Nenek", "Kakek"], correctIndex: 1, explanation: "'Sœur' berarti saudara perempuan." },
  { id: "q5-3", levelId: 5, question: "'Grand-père' artinya...", options: ["Ayah", "Paman", "Kakek", "Nenek"], correctIndex: 2, explanation: "'Grand-père' berarti kakek." },
  { id: "q5-4", levelId: 5, question: "Kata untuk 'keluarga' dalam Bahasa Prancis adalah...", options: ["La famille", "Les amis", "La maison", "Le frère"], correctIndex: 0, explanation: "'La famille' berarti keluarga." },
  { id: "q5-5", levelId: 5, question: "'Mari' dalam Bahasa Prancis berarti...", options: ["Istri", "Anak", "Suami", "Teman"], correctIndex: 2, explanation: "'Mari' berarti suami." },

  // Level 6
  { id: "q6-1", levelId: 6, question: "Bagaimana cara memesan sesuatu dengan sopan?", options: ["Donne-moi!", "Je voudrais...", "Vite!", "Non merci"], correctIndex: 1, explanation: "'Je voudrais...' adalah cara sopan untuk memesan." },
  { id: "q6-2", levelId: 6, question: "Apa yang dikatakan untuk meminta bon/nota?", options: ["Le menu", "L'addition, s'il vous plaît", "Bon appétit", "C'est délicieux"], correctIndex: 1, explanation: "'L'addition, s'il vous plaît' berarti 'tolong bonnya'." },
  { id: "q6-3", levelId: 6, question: "'C'est délicieux' artinya...", options: ["Ini mahal", "Ini enak sekali", "Ini pedas", "Ini dingin"], correctIndex: 1, explanation: "'C'est délicieux' berarti 'ini enak sekali'." },
  { id: "q6-4", levelId: 6, question: "'Le menu' dalam konteks restoran artinya...", options: ["Meja", "Menu", "Kursi", "Pelayan"], correctIndex: 1, explanation: "'Le menu' berarti daftar menu makanan." },
  { id: "q6-5", levelId: 6, question: "'Une réservation' artinya...", options: ["Reservasi", "Diskon", "Antrian", "Pembayaran"], correctIndex: 0, explanation: "'Une réservation' berarti reservasi/pemesanan tempat." },

  // Level 7
  { id: "q7-1", levelId: 7, question: "Konjugasi 'parler' untuk 'je' adalah...", options: ["parle", "parles", "parlons", "parlent"], correctIndex: 0, explanation: "'Je parle' adalah bentuk présent orang pertama tunggal." },
  { id: "q7-2", levelId: 7, question: "Akhiran présent untuk 'nous' pada kata kerja -er adalah...", options: ["-es", "-ons", "-ez", "-ent"], correctIndex: 1, explanation: "Akhiran '-ons' dipakai untuk subjek 'nous'." },
  { id: "q7-3", levelId: 7, question: "'Il va à l'école' artinya...", options: ["Dia makan di sekolah", "Dia pergi ke sekolah", "Dia belajar di rumah", "Dia suka sekolah"], correctIndex: 1, explanation: "'Il va à l'école' berarti 'dia pergi ke sekolah'." },
  { id: "q7-4", levelId: 7, question: "Bentuk présent 'ils finissent' berasal dari kata kerja...", options: ["finir", "faire", "aller", "parler"], correctIndex: 0, explanation: "'Finir' (menyelesaikan) dikonjugasikan menjadi 'ils finissent'." },
  { id: "q7-5", levelId: 7, question: "'Nous faisons du sport' artinya...", options: ["Kami menonton olahraga", "Kami berolahraga", "Kami membeli baju olahraga", "Kami melatih tim"], correctIndex: 1, explanation: "'Faire du sport' berarti berolahraga." },

  // Level 8
  { id: "q8-1", levelId: 8, question: "Imparfait digunakan untuk...", options: ["Kejadian tunggal masa lalu", "Kebiasaan/keadaan masa lalu", "Rencana masa depan", "Perintah"], correctIndex: 1, explanation: "Imparfait dipakai untuk kebiasaan atau latar belakang cerita di masa lalu." },
  { id: "q8-2", levelId: 8, question: "'J'étais très timide' artinya...", options: ["Saya sangat pemalu (sekarang)", "Saya dulu sangat pemalu", "Saya akan menjadi pemalu", "Saya tidak pemalu"], correctIndex: 1, explanation: "'J'étais' adalah bentuk imparfait dari être, menunjukkan keadaan masa lalu." },
  { id: "q8-3", levelId: 8, question: "'Il faisait beau' artinya...", options: ["Cuaca akan cerah", "Cuaca dulu cerah", "Dia membuat sesuatu yang indah", "Dia berpakaian rapi"], correctIndex: 1, explanation: "'Il faisait beau' berarti 'cuaca dulu cerah' (imparfait dari faire)." },
  { id: "q8-4", levelId: 8, question: "Kata penghubung cerita 'ensuite' berarti...", options: ["Sebelumnya", "Kemudian", "Akhirnya", "Karena"], correctIndex: 1, explanation: "'Ensuite' berarti 'kemudian' dalam alur cerita." },
  { id: "q8-5", levelId: 8, question: "'Nous jouions ensemble' artinya...", options: ["Kami akan bermain bersama", "Kami dulu bermain bersama", "Kami sedang bermain", "Kami tidak bermain"], correctIndex: 1, explanation: "'Jouions' adalah bentuk imparfait dari jouer." },

  // Level 9
  { id: "q9-1", levelId: 9, question: "Futur simple dari 'voyager' untuk 'je' adalah...", options: ["voyage", "voyageais", "voyagerai", "voyagé"], correctIndex: 2, explanation: "'Je voyagerai' adalah bentuk futur simple." },
  { id: "q9-2", levelId: 9, question: "'Nous irons à Paris' artinya...", options: ["Kami pernah ke Paris", "Kami akan pergi ke Paris", "Kami tinggal di Paris", "Kami suka Paris"], correctIndex: 1, explanation: "'Irons' adalah bentuk futur simple dari aller." },
  { id: "q9-3", levelId: 9, question: "'Bientôt' artinya...", options: ["Kemarin", "Sekarang", "Segera", "Dulu"], correctIndex: 2, explanation: "'Bientôt' berarti 'segera'." },
  { id: "q9-4", levelId: 9, question: "'L'année prochaine' artinya...", options: ["Tahun lalu", "Tahun ini", "Tahun depan", "Bulan depan"], correctIndex: 2, explanation: "'L'année prochaine' berarti 'tahun depan'." },
  { id: "q9-5", levelId: 9, question: "Akhiran futur simple untuk 'tu' adalah...", options: ["-ai", "-as", "-a", "-ez"], correctIndex: 1, explanation: "Akhiran '-as' dipakai untuk subjek 'tu' pada futur simple." },

  // Level 10
  { id: "q10-1", levelId: 10, question: "'Franchement' artinya...", options: ["Mungkin", "Terus terang", "Jarang", "Selalu"], correctIndex: 1, explanation: "'Franchement' berarti 'terus terang'." },
  { id: "q10-2", levelId: 10, question: "'Ça dépend' artinya...", options: ["Itu pasti", "Tergantung", "Tidak mungkin", "Sudah selesai"], correctIndex: 1, explanation: "'Ça dépend' berarti 'tergantung'." },
  { id: "q10-3", levelId: 10, question: "'Un réseau social' artinya...", options: ["Jaringan telepon", "Media sosial", "Komunitas lokal", "Grup belajar"], correctIndex: 1, explanation: "'Un réseau social' berarti media sosial." },
  { id: "q10-4", levelId: 10, question: "'En fait' artinya...", options: ["Sebenarnya", "Mungkin saja", "Tidak pernah", "Selamanya"], correctIndex: 0, explanation: "'En fait' berarti 'sebenarnya'." },
  { id: "q10-5", levelId: 10, question: "'Tu as vu ça?' artinya...", options: ["Kamu akan melihat itu?", "Kamu lihat itu?", "Kamu suka itu?", "Kamu punya itu?"], correctIndex: 1, explanation: "'Tu as vu ça?' berarti 'kamu lihat itu?' (passé composé dari voir)." },

  // Level 11
  { id: "q11-1", levelId: 11, question: "'À mon avis' artinya...", options: ["Menurut saya", "Menurut kamu", "Menurut mereka", "Secara umum"], correctIndex: 0, explanation: "'À mon avis' berarti 'menurut saya'." },
  { id: "q11-2", levelId: 11, question: "Bagaimana menyatakan tidak setuju dengan sopan?", options: ["Je suis d'accord", "Je ne suis pas d'accord", "C'est vrai", "Bien sûr"], correctIndex: 1, explanation: "'Je ne suis pas d'accord' berarti 'saya tidak setuju'." },
  { id: "q11-3", levelId: 11, question: "'Au contraire' artinya...", options: ["Selain itu", "Sebaliknya", "Akhirnya", "Secara kebetulan"], correctIndex: 1, explanation: "'Au contraire' berarti 'sebaliknya'." },
  { id: "q11-4", levelId: 11, question: "'Je pense que tu as raison' artinya...", options: ["Saya pikir kamu salah", "Saya pikir kamu benar", "Saya tidak yakin", "Saya setuju sebagian"], correctIndex: 1, explanation: "'Avoir raison' berarti 'benar'." },
  { id: "q11-5", levelId: 11, question: "Frasa 'd'un côté... de l'autre...' digunakan untuk...", options: ["Menceritakan masa lalu", "Membandingkan dua sisi pendapat", "Memberi perintah", "Meminta maaf"], correctIndex: 1, explanation: "Frasa ini dipakai untuk membandingkan dua sudut pandang." },

  // Level 12
  { id: "q12-1", levelId: 12, question: "'L'actualité' artinya...", options: ["Sejarah", "Berita terkini", "Cerita fiksi", "Ramalan"], correctIndex: 1, explanation: "'L'actualité' berarti berita terkini." },
  { id: "q12-2", levelId: 12, question: "'Un journal' artinya...", options: ["Koran", "Majalah mode", "Buku harian pribadi", "Kamus"], correctIndex: 0, explanation: "'Un journal' berarti koran/surat kabar." },
  { id: "q12-3", levelId: 12, question: "'Un reportage' artinya...", options: ["Opini pribadi", "Reportase/laporan", "Iklan", "Wawancara santai"], correctIndex: 1, explanation: "'Un reportage' berarti laporan atau reportase berita." },
  { id: "q12-4", levelId: 12, question: "'Selon l'article' artinya...", options: ["Terlepas dari artikel", "Menurut artikel", "Sebelum artikel", "Setelah artikel"], correctIndex: 1, explanation: "'Selon' berarti 'menurut'." },
  { id: "q12-5", levelId: 12, question: "'Une source fiable' artinya...", options: ["Sumber yang meragukan", "Sumber terpercaya", "Sumber anonim", "Sumber lama"], correctIndex: 1, explanation: "'Fiable' berarti 'dapat dipercaya'." },

  // Level 13
  { id: "q13-1", levelId: 13, question: "'Un roman' artinya...", options: ["Puisi", "Novel", "Drama", "Esai"], correctIndex: 1, explanation: "'Un roman' berarti novel." },
  { id: "q13-2", levelId: 13, question: "'Un auteur' artinya...", options: ["Pembaca", "Penulis", "Penerbit", "Kritikus"], correctIndex: 1, explanation: "'Un auteur' berarti penulis." },
  { id: "q13-3", levelId: 13, question: "'Une thèse' dalam konteks akademik berarti...", options: ["Tesis/argumen utama", "Judul buku", "Daftar isi", "Catatan kaki"], correctIndex: 0, explanation: "'Une thèse' berarti tesis atau argumen utama." },
  { id: "q13-4", levelId: 13, question: "'Analyser' artinya...", options: ["Menyalin", "Menganalisis", "Menerjemahkan", "Meringkas"], correctIndex: 1, explanation: "'Analyser' berarti menganalisis." },
  { id: "q13-5", levelId: 13, question: "'Une métaphore' adalah istilah untuk...", options: ["Rima", "Metafora", "Alur cerita", "Dialog"], correctIndex: 1, explanation: "'Une métaphore' berarti metafora, gaya bahasa kiasan." },

  // Level 14
  { id: "q14-1", levelId: 14, question: "'La gastronomie' artinya...", options: ["Kuliner khas", "Pertanian", "Kesehatan", "Pariwisata"], correctIndex: 0, explanation: "'La gastronomie' berarti seni kuliner atau kuliner khas." },
  { id: "q14-2", levelId: 14, question: "'Le patrimoine' artinya...", options: ["Warisan budaya", "Kekayaan pribadi", "Sejarah keluarga", "Peraturan negara"], correctIndex: 0, explanation: "'Le patrimoine' berarti warisan budaya/nasional." },
  { id: "q14-3", levelId: 14, question: "Tanggal 14 Juli di Prancis dirayakan sebagai...", options: ["Hari kemerdekaan biasa", "Une fête nationale importante", "Hari libur biasa", "Awal tahun ajaran"], correctIndex: 1, explanation: "14 Juli adalah hari nasional penting (Bastille Day)." },
  { id: "q14-4", levelId: 14, question: "'Le savoir-vivre' artinya...", options: ["Pengetahuan umum", "Tata krama", "Cara memasak", "Keterampilan kerja"], correctIndex: 1, explanation: "'Le savoir-vivre' berarti tata krama atau etiket." },
  { id: "q14-5", levelId: 14, question: "Claude Monet dikenal sebagai seorang...", options: ["Un artiste", "Un auteur", "Un chef", "Un journaliste"], correctIndex: 0, explanation: "Monet adalah seorang seniman (artiste) terkenal." },

  // Level 15
  { id: "q15-1", levelId: 15, question: "'Ça marche!' dalam percakapan santai berarti...", options: ["Itu rusak", "Oke, setuju!", "Ayo jalan", "Tidak mungkin"], correctIndex: 1, explanation: "'Ça marche!' adalah ungkapan santai untuk menyetujui sesuatu." },
  { id: "q15-2", levelId: 15, question: "'Du coup' artinya...", options: ["Sebelum itu", "Jadi/Akibatnya", "Tidak pernah", "Kadang-kadang"], correctIndex: 1, explanation: "'Du coup' dipakai untuk menyatakan akibat, seperti 'jadi'." },
  { id: "q15-3", levelId: 15, question: "'Carrément' artinya...", options: ["Sedikit", "Mungkin", "Benar-benar/Banget", "Jarang"], correctIndex: 2, explanation: "'Carrément' berarti 'benar-benar' atau 'banget'." },
  { id: "q15-4", levelId: 15, question: "'Bref' digunakan untuk...", options: ["Memulai cerita panjang", "Meringkas/menyingkat", "Bertanya", "Meminta maaf"], correctIndex: 1, explanation: "'Bref' dipakai untuk meringkas, seperti 'pokoknya/singkatnya'." },
  { id: "q15-5", levelId: 15, question: "'Genre...' dalam percakapan informal berarti...", options: ["Jenis kelamin", "Semacam/Kayak", "Genre musik saja", "Selalu"], correctIndex: 1, explanation: "'Genre' dalam percakapan santai berarti 'semacam' atau 'kayak'." },

  // Level 16
  { id: "q16-1", levelId: 16, question: "'L'épreuve' dalam konteks ujian berarti...", options: ["Sertifikat", "Ujian/tes", "Nilai akhir", "Jadwal"], correctIndex: 1, explanation: "'L'épreuve' berarti ujian atau tes." },
  { id: "q16-2", levelId: 16, question: "'La compréhension orale' menguji kemampuan...", options: ["Menulis", "Membaca", "Menyimak", "Berbicara"], correctIndex: 2, explanation: "'Compréhension orale' menguji kemampuan menyimak." },
  { id: "q16-3", levelId: 16, question: "'La production écrite' menguji kemampuan...", options: ["Menulis", "Menyimak", "Membaca cepat", "Berhitung"], correctIndex: 0, explanation: "'Production écrite' menguji kemampuan menulis." },
  { id: "q16-4", levelId: 16, question: "'Le jury' dalam ujian DELF/DALF adalah...", options: ["Peserta ujian", "Penguji", "Materi ujian", "Ruang ujian"], correctIndex: 1, explanation: "'Le jury' adalah penguji yang menilai peserta." },
  { id: "q16-5", levelId: 16, question: "'Réussir l'examen' artinya...", options: ["Gagal ujian", "Lulus ujian", "Mendaftar ujian", "Menunda ujian"], correctIndex: 1, explanation: "'Réussir' berarti berhasil/lulus." },
];

export function getFlashcardsForLevel(levelId: number): Flashcard[] {
  return FLASHCARDS.filter((f) => f.levelId === levelId);
}

export function getQuizForLevel(levelId: number): QuizQuestion[] {
  return QUIZ_QUESTIONS.filter((q) => q.levelId === levelId);
}
