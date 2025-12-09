const questions = [
  {
    question: "Istilah “arsip” berasal dari kata dalam bahasa Yunani, yaitu…",
    options: ["Archivum", "Archeion", "Archival", "Archibus"],
    answer: 1,
    explanation: "Arsip berasal dari kata 'Archeion' yang merujuk pada kantor pemerintahan di Yunani kuno. Kuno banget, Bu, masih zamannya toga bukan toga wisuda."
  },
  {
    question: "Pada peradaban kuno, arsip umumnya disimpan di…",
    options: ["Istana", "Kuil", "Rumah pejabat", "Ruang penyimpanan rahasia"],
    answer: 1,
    explanation: "Kuil dijadikan tempat menyimpan dokumen penting. Anggap saja seperti 'cloud storage' zaman batu, Bu."
  },
  {
    question: "Peradaban yang dikenal memiliki tradisi kearsipan tertua adalah…",
    options: ["Romawi", "Yunani", "Mesir Kuno", "Persia"],
    answer: 2,
    explanation: "Mesir Kuno menyimpan catatan pada papirus. Mereka serius banget, bahkan urusan pajak pun dicatat, Bu."
  },
  {
    question: "Pada masa Romawi, pusat arsip negara dikenal dengan sebutan…",
    options: ["Tabularium", "Recordum", "Documentum", "Archival Hall"],
    answer: 0,
    explanation: "Tabularium adalah gedung tempat arsip negara Romawi disimpan. Bukan nama minuman elektrolit ya, Bu."
  },
  {
    question: "Tradisi kearsipan di Indonesia mulai berkembang pesat pada masa…",
    options: ["Kerajaan Nusantara", "Kolonial Belanda", "Pendudukan Jepang", "Awal Kemerdekaan"],
    answer: 1,
    explanation: "Pada masa kolonial Belanda, sistem administrasi dan kearsipan diperkenalkan dengan lebih teratur. Sayangnya bukan cuma arsip yang dibawa, tapi kolonialismenya juga, Bu."
  },
  {
    question: "Arsip Nasional Republik Indonesia (ANRI) secara resmi berdiri pada tahun…",
    options: ["1945", "1950", "1967", "1980"],
    answer: 2,
    explanation: "ANRI berdiri tahun 1967 sebagai lembaga yang mengelola arsip statis negara. Jadi ANRI ini lebih tua dari banyak dosen muda, Bu."
  },
  {
    question: "Pada awal perkembangannya, arsip berfungsi terutama sebagai…",
    options: ["Sarana pembuktian hukum", "Koleksi sejarah", "Dokumentasi pribadi", "Data statistik"],
    answer: 0,
    explanation: "Arsip dipakai sebagai alat bukti hukum dan administrasi. Kalau ada yang ngeles, tinggal keluarkan arsip, auto diam, Bu."
  },
  {
    question: "Pada abad pertengahan, kegiatan penyalinan dokumen dilakukan di…",
    options: ["Library Hall", "Scriptorium", "Arsiparia", "Document Chamber"],
    answer: 1,
    explanation: "Scriptorium adalah ruangan tempat para biarawan menyalin naskah. Mirip ruang skripsi, tapi tanpa Wi-Fi, Bu."
  },
  {
    question: "Perkembangan arsip modern sangat dipengaruhi oleh…",
    options: ["Perang Dunia", "Revolusi Industri", "Restorasi Meiji", "Perkembangan literatur"],
    answer: 1,
    explanation: "Revolusi Industri membuat volume dokumen meningkat drastis sehingga perlu sistem kearsipan yang lebih rapi. Dokumen numpuknya kayak chat WA grup keluarga, Bu."
  },
  {
    question: "Arsip dinamis adalah arsip yang…",
    options: ["Memiliki nilai sejarah tinggi", "Masih digunakan dalam kegiatan organisasi", "Sudah tidak relevan", "Hanya berisi data keuangan"],
    answer: 1,
    explanation: "Arsip dinamis masih digunakan secara langsung dalam kegiatan administrasi. Jadi ini arsip yang masih 'aktif kerja', bukan pensiunan, Bu."
  },
  {
    question: "Arsip statis adalah arsip yang…",
    options: ["Tidak dipakai lagi tetapi bernilai sejarah", "Masih rutin digunakan", "Berisi catatan harian", "Hanya berisi data sementara"],
    answer: 0,
    explanation: "Arsip statis disimpan permanen karena punya nilai sejarah, hukum, atau informasi penting. Kayak mantan baik, susah dilupakan, Bu."
  },
  {
    question: "Lembaga arsip modern pertama di Eropa dipelopori oleh tokoh…",
    options: ["Napoleon Bonaparte", "Henry VIII", "Albert Camus", "Otto von Bismarck"],
    answer: 0,
    explanation: "Napoleon mengembangkan sistem arsip nasional di Prancis. Selain ahli strategi perang, ternyata beliau juga 'admin arsip' nasional, Bu."
  },
  {
    question: "Sistem kearsipan Indonesia banyak mengadopsi tradisi dari…",
    options: ["Jepang", "Cina", "Belanda", "Inggris"],
    answer: 2,
    explanation: "Banyak sistem administrasi dan istilah kearsipan kita yang berasal dari tradisi Belanda. Peninggalannya bukan cuma sepeda ontel, Bu."
  },
  {
    question: "Nama awal lembaga arsip pada masa kolonial Belanda adalah…",
    options: ["Archief Centrum", "Landsarchief", "Staatsarchief", "Document Centrum"],
    answer: 1,
    explanation: "Landsarchief merupakan lembaga arsip pada masa pemerintahan kolonial. Namanya terdengar mahal, tapi isinya tetap dokumen, bukan emas, Bu."
  },
  {
    question: "Arsip kuno umumnya ditulis pada media…",
    options: ["Kertas modern", "Papirus atau tanah liat", "Kulit sintetis", "Papan kayu modern"],
    answer: 1,
    explanation: "Papirus dan tablet tanah liat adalah media tulis utama pada masa kuno. Flashdisk belum tersedia di zaman Firaun, Bu."
  },
  {
    question: "Alat yang digunakan untuk menulis pada tablet tanah liat adalah…",
    options: ["Pena bulu", "Pisau kecil", "Stylus", "Pulpen tinta"],
    answer: 2,
    explanation: "Stylus digunakan untuk mencetak simbol ke permukaan tanah liat. Versi sangat-sangat jadul dari stylus tablet grafik, Bu."
  },
  {
    question: "Perkembangan arsip modern semakin pesat karena adanya…",
    options: ["Komputer", "Media sosial", "Mesin ketik", "Radio"],
    answer: 0,
    explanation: "Komputer memungkinkan pengelolaan arsip digital secara cepat dan terstruktur. Walau kadang kalau listrik mati, arsipnya ikutan hilang dari pandangan, Bu."
  },
  {
    question: "Tujuan utama pengarsipan pada masa kuno adalah…",
    options: ["Dokumentasi seni", "Pencatatan hukum dan administrasi", "Penyimpanan cerita rakyat", "Koleksi pribadi raja"],
    answer: 1,
    explanation: "Arsip digunakan untuk mencatat hukum, perjanjian, dan administrasi. Jadi kalau ada yang ngutang pajak, tinggal buka arsip, Bu."
  },
  {
    question: "Sumber arsip tertua banyak ditemukan pada…",
    options: ["Media bambu", "Tablet tanah liat Mesopotamia", "Papan batu Afrika", "Lembaran kulit hewan"],
    answer: 1,
    explanation: "Mesopotamia dikenal sebagai salah satu tempat ditemukannya arsip tertua berbentuk tablet tanah liat. Zaman itu belum ada binder lucu, Bu."
  },
  {
    question: "Arsip dianggap instrumen penting bagi negara karena…",
    options: ["Menjadi bukti sah administrasi", "Digunakan untuk promosi", "Menyimpan koleksi umum", "Mengatur komunikasi informal"],
    answer: 0,
    explanation: "Arsip menjadi bukti sah berbagai keputusan dan kegiatan administrasi negara. Tanpa arsip, negara bisa amnesia kebijakan sendiri, Bu."
  }
];
