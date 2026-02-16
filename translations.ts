
type Translations = {
  [key: string]: string | Translations;
};

export const translations: Translations = {
  header: {
    subtitle: "Fotografi Produk AI",
    about: "Tentang"
  },
  footer: {
    createdBy: "dibuat oleh"
  },
  sidebar: {
    // AI Product Photography
    virtualTryOn: "Magic TryOn",
    productStudio: "Magic Product",
    magicModel: "Magic Model",
    magicFashion: "Magic Fashion",
    magicBRoll: "Magic B-Roll",
    povStudio: "Magic POV Studio",
    listingStudio: "Magic Listing",
    
    // Photo Editor
    magicPose: "Magic Pose",
    magicGenEditor: "Magic Editor",
    magicRestore: "Magic Restore",
    magicFusion: "Magic Fusion",
    mergeProduct: "Magic Merge",
    backgroundChanger: "Magic Background",
    lifestylePhotoshoot: "Magic Lifestyle",
    
    // Catalog & Marketing
    magicCarousel: "Magic Carousel",
    adCreator: "Magic Poster",
    mockupGenerator: "Magic Mockup",
    magicPhotoshoot: "Magic Photoshoot",
    
    // Creative Suite
    magicVideo: "Magic Video",
    magicStoryboard: "Magic Storyboard",
    magicVoice: "Magic Voice",

    // Deprecated/Unused in new grouping but kept for safety
    motionPromptStudio: "Magic Motion Prompt",
    videoStudio: "Studio Video",
    mirrorStudio: "Magic Mirror",
    perspectiveStudio: "Magic Perspective",
    digitalImaging: "Magic Imaging",
  },
  about: {
    title: "Tentang Magic Photo Studio",
    description: "Aplikasi ini menggunakan teknologi Google Gemini AI terbaru untuk membantu UMKM dan konten kreator membuat aset visual berkualitas tinggi dengan mudah, cepat, dan hemat biaya.",
    techStack: "Tentang",
    geminiModels: "Model Gemini yang Digunakan",
    geminiFlashImage: "Otak di balik pengeditan dan pembuatan gambar.",
    geminiFlash: "Otak untuk membuat teks iklan dan ide kreatif.",
    geminiVeo: "Teknologi untuk membuat video dari gambar.",
    
    // Descriptions updated to be more user-friendly
    productStudio: "Ubah foto produk biasa jadi foto studio profesional dengan berbagai tema estetik.",
    virtualTryOn: "Cobain baju ke model AI atau fotomu sendiri tanpa perlu ganti baju beneran.",
    lifestylePhotoshoot: "Masukin produk ke situasi nyata (misal: di kafe, di taman) biar lebih hidup.",
    mergeProduct: "Gabungin beberapa gambar jadi satu frame yang rapi. Cocok buat bikin paket bundling atau koleksi.",
    poseStudio: "Ubah gaya pose model di fotomu jadi macem-macem gaya baru biar nggak bosenin.",
    adCreator: "Bikin desain poster iklan otomatis lengkap dengan teks promosi yang menarik.",
    imageEditor: "Edit bagian foto yang nggak dimau, hapus objek, atau ganti detail foto sesuka hati.",
    digitalImaging: "Bikin foto produk yang artistik dan unik, kayak editan profesional.",
    videoStudio: "Hidupkan foto produk yang diam jadi video gerak singkat yang estetik.",
    povStudio: "Bikin foto seolah-olah produk lagi dipegang tangan kamu (POV), cocok buat review.",
    mirrorStudio: "Bikin foto gaya selfie di depan cermin buat produk fashion atau casing HP.",
    listingStudio: "Bikin gambar info produk (infografis) yang jelas buat ditaruh di marketplace.",
    perspectiveStudio: "Samakan gaya foto produk dari depan, samping, dan belakang biar seragam.",
    backgroundChanger: "Hapus dan ganti background foto produkmu dengan pemandangan lain secara instan.",
    magicStoryboard: "Visualisasikan ide ceritamu jadi gambar panel (storyboard) sebelum bikin video.",
    magicVideo: "Ubah ide tulisan atau gambar jadi video sinematik keren.",
    mockupGenerator: "Tempel desain logomu ke berbagai produk (kaos, mug, dll) secara instan.",
    magicPhotoshoot: "Ubah foto biasa jadi potret studio kelas atas dengan nuansa Korea atau Cinematic.",
    magicBRoll: "Unggah 1 gambar produk, tambahkan model (opsional), dan biarkan AI membuat 6 pose foto profesional.",
    developedBy: "Dikembangkan oleh",
    closeButton: "Tutup"
  },
  sections: {
    upload: {
      title: "1. Unggah Gambar",
      subtitle: "Pilih foto terbaikmu yang jelas dan terang."
    },
    style: {
      title: "2. Pilih Gaya",
      subtitle: "Mau dibuat seperti apa fotonya? Pilih di sini."
    },
    tools: {
      title: "2. Pilih Alat",
      subtitle: "Pilih alat ajaib untuk mengedit fotomu.",
      options: {
        title: "3. Pengaturan",
        subtitle: "Sesuaikan detailnya biar makin pas."
      }
    }
  },
  uploader: {
    productLabel: "Unggah Foto Produk",
    imageLabel: "Unggah Gambar",
    modelLabel: "Unggah Foto Model",
    referenceLabel: "Unggah Contoh Gaya (Referensi)",
    styleReferenceLabel: "Unggah Referensi Gaya",
    backgroundLabel: "Unggah Background Baru",
    designLabel: "Unggah Desain/Logo",
    mockupLabel: "Unggah Mockup Polos",
    fileTypes: "Format: PNG, JPG, WEBP (Maks 10MB)"
  },
  options: {
    smart: {
      title: "Otomatis Cerdas",
      description: "Biarkan AI yang mikir dan pilihin gaya terbaik buat produkmu."
    },
    customize: {
      theme: {
        label: "Pilih Tema",
        other: "Tulis Sendiri..."
      },
      customTheme: {
        label: "Tema Kustom",
        placeholder: "cth., 'Di atas meja kayu dengan sinar matahari pagi'"
      },
      props: {
        label: "Tambah Properti (Opsional)",
        placeholder: "cth., 'ada bunga kering dan biji kopi'"
      }
    },
    reference: {
      description: "Punya contoh foto bagus? Unggah di sini, AI akan meniru gayanya."
    },
    shared: {
      instructions: {
        label: "Catatan Tambahan (Opsional)",
        placeholderCustomize: "cth., 'Pastikan produk terlihat terang dan jelas'",
        placeholderReference: "cth., 'Ikuti pencahayaan dari foto contoh ini'"
      }
    },
    enhanceButton: "Mulai Sulap Foto"
  },
  results: {
    title: "3. Hasil Foto",
    titleEditor: "4. Hasil Edit",
    description: "Tadaa! Ini dia hasil foto barumu.",
    descriptionEditor: "Ini hasil editan fotomu.",
    loading: {
      title: "Sedang menyulap foto...",
      titleEditor: "Sedang mengedit...",
      subtitle: "Tunggu sebentar ya, AI lagi bekerja buat kamu."
    },
    error: {
      title: "Yah, Gagal...",
      button: "Coba Lagi Yuk"
    },
    placeholder: "Hasil foto nanti muncul di sini.",
    imageAlt: "Foto hasil generasi AI",
    variantLabel: "Pilihan",
    downloadButton: "Simpan Gambar",
    resetButton: "Ulangi Lagi"
  },
  errors: {
    noProductImage: "Jangan lupa upload foto produknya dulu ya.",
    noImage: "Upload gambarnya dulu dong.",
    noReferenceImage: "Kamu perlu upload foto contoh (referensi) buat mode ini."
  },
  themes: {
    cleanStudio: "Studio Bersih (Latar Putih)",
    dramaticMoody: "Dramatis & Elegan (Latar Gelap)",
    naturalOrganic: "Nuansa Alam & Organik",
    vibrantPlayful: "Ceria & Warna-warni",
    modernSleek: "Modern & Kekinian",
    softDreamy: "Lembut & Estetik",
    industrialRugged: "Gaya Industrial",
    vintageNostalgic: "Vintage / Jadul",
    luxeElegant: "Mewah & Mahal",
    minimalistZen: "Tenang & Minimalis",
    cosmicFuturistic: "Masa Depan & Neon",
    cozyRustic: "Nyaman & Homey",
    tropicalParadise: "Suasana Liburan Tropis",
    aquaticFreshness: "Segar & Berair",
    urbanStreet: "Gaya Jalanan Kota",
    holidayCheer: "Suasana Liburan / Natal",
  },
  perspectiveStudio: {
    page: {
      title: "Magic Perspective",
      description: "Punya foto produk dari depan, samping, and belakang? Upload semua di sini, AI akan bikin background mereka seragam dan estetik."
    },
    sections: {
      upload: {
        title: "1. Unggah Sisi Produk",
        subtitle: "Minimal upload 1 sisi, tapi lebih banyak lebih bagus."
      },
      style: {
        title: "2. Pilih Gaya",
        subtitle: "Mau background seperti apa untuk semua foto ini?"
      }
    },
    labels: {
      front: "Tampak Depan",
      back: "Tampak Belakang",
      side: "Tampak Samping",
      top: "Tampak Atas/Detail"
    },
    generateButton: "✨ Seragamkan Background",
    errors: {
      noImages: "Upload minimal satu sisi foto produk ya."
    }
  },
  povStudio: {
    page: {
      title: "Magic POV Studio",
      description: "Bikin foto seolah-olah produk lagi dipegang tangan kamu (POV), cocok buat review."
    },
    sections: {
      upload: {
        title: "1. Unggah Produk",
        subtitle: "Foto produknya aja, tanpa tangan."
      },
      configure: {
        title: "2. Atur Gaya",
        subtitle: "Pilih tangan siapa dan mau di mana fotonya."
      }
    },
    handStyle: {
      label: "Model Tangan",
      auto: "Otomatis Aja",
      female: "Tangan Cewek",
      male: "Tangan Cowok",
      sweater: "Pakai Sweater"
    },
    background: {
      modeLabel: "Background",
      preset: "Pilih Tema",
      custom: "Upload Sendiri",
      themeLabel: "Mau suasana apa?"
    },
    themes: {
      cozyBedroom: "Di Kamar Nyaman",
      aestheticDesk: "Di Meja Kerja Estetik",
      softMinimalist: "Dinding Polos Minimalis",
      cafeVibes: "Nongkrong di Kafe",
      urbanOutdoor: "Jalanan Kota",
      natureWalk: "Jalan-jalan di Alam",
      bathroomSelfie: "Di Depan Caca Wastafel",
    },
    generateButton: "✨ Buat Foto POV",
    errors: {
      noBackground: "Jangan lupa upload backgroundnya ya."
    }
  },
  backgroundChanger: {
    page: {
      title: "Magic Background",
      description: "Hapus dan ganti background foto produkmu dengan pemandangan lain secara instan."
    },
    tabs: {
      change: "Ubah Background",
      remove: "Remove Background"
    },
    sections: {
      upload: {
        title: "1. Unggah Produk",
        subtitle: "Pilih foto produk yang mau diganti backgroundnya."
      },
      method: {
        title: "2. Pilih Background",
        subtitle: "Mau upload gambar sendiri atau dibuatin AI?"
      },
      remove: {
        title: "2. Hapus Latar",
        subtitle: "AI akan memisahkan objek dari latar belakang."
      }
    },
    modes: {
      upload: "Upload Sendiri",
      generate: "Dibuatin AI"
    },
    form: {
      prompt: {
        label: "Mau Background Apa?",
        placeholder: "cth., 'Di atas meja marmer putih', 'Di pasir pantai bali'"
      },
      instructions: {
        label: "Catatan Tambahan (Opsional)",
        placeholder: "cth., 'Bikin bayangannya lebih natural', 'Cahayanya dari kiri'"
      }
    },
    generateButton: "✨ Ganti Background",
    removeButton: "✂️ Hapus Background",
    errors: {
      noProduct: "Upload foto produknya dulu ya.",
      noBackground: "Upload foto background penggantinya dong.",
      noPrompt: "Tulis dulu mau background kayak gimana."
    }
  },
  mirrorStudio: {
    page: {
      title: "Magic Mirror",
      description: "Bikin foto gaya selfie di depan cermin buat produk fashion atau casing HP."
    },
    sections: {
      upload: {
        title: "1. Unggah Produk",
        subtitle: "Produk apa yang mau dipamerin? (Casing HP, Tas, Baju)"
      },
      configure: {
        title: "2. Atur Model & Lokasi",
        subtitle: "Pilih siapa modelnya dan di mana fotonya."
      }
    },
    options: {
      modelSourceLabel: "Modelnya Dari Mana?",
      generate: "Bikin Model AI",
      upload: "Upload Foto Sendiri",
      uploadModelLabel: "Unggah Foto Model",
      genderLabel: "Gender Model",
      ethnicityLabel: "Wajah Model (Etnis)",
      ethnicityPlaceholder: "cth., Indonesia, Asia, Bule",
      frameLabel: "Jarak Foto",
      themeLabel: "Lokasi Cermin",
      female: "Cewek",
      male: "Cowok"
    },
    themes: {
      elevatorSelfie: "Cermin Lift",
      gymMirror: "Cermin Gym",
      bathroomAesthetic: "Kamar Mandi Estetik",
      bedroomOotd: "Cermin Kamar Tidur",
      fittingRoom: "Kamar Ganti Mall",
      streetReflection: "Kaca Jendela Toko"
    },
    frames: {
      halfBody: "Setengah Badan",
      fullBody: "Seluruh Badan",
      closeUp: "Close Up (Fokus HP/Tangan)"
    },
    generateButton: "✨ Cekrek Selfie",
    errors: {
      noModel: "Upload foto orangnya dulu ya."
    }
  },
  listingStudio: {
    page: {
      title: "Magic Listing",
      description: "Bikin gambar info produk (infografis) yang jelas buat ditaruh di marketplace."
    },
    sections: {
      upload: {
        title: "1. Unggah Produk",
        subtitle: "Pilih foto produk utamamu."
      },
      features: {
        title: "2. Fitur Unggulan",
        subtitle: "Apa kelebihan produkmu? Tulis 3-5 poin."
      },
      style: {
        title: "3. Desain Tampilan",
        subtitle: "Pilih gaya desain yang cocok sama brandmu."
      }
    },
    form: {
      addFeature: "Tambah Poin",
      featurePlaceholder: "cth. 'Anti Air', 'Baterai Awet'",
      styleLabel: "Pilih Gaya Desain"
    },
    styles: {
      minimalistWhite: "Putih Bersih (Minimalis)",
      techSpecs: "Teknologi (Gelap & Neon)",
      ecoOrganic: "Natural (Warna Bumi)",
      boldSale: "Promo (Tegas & Mencolok)",
      luxuryElegant: "Mewah (Elegan)"
    },
    generateButton: "✨ Buat Gambar Listing",
    errors: {
      minFeatures: "Tulis minimal 1 kelebihan produkmu ya."
    }
  },
  productStudio: {
    page: {
      title: "Magic Product",
      description: "Ubah foto produk biasa jadi foto studio profesional dengan berbagai tema estetik."
    },
    steps: {
        upload: "1. Unggah Foto",
        lighting: "2. Pencahayaan",
        mood: "3. Suasana",
        ratio: "4. Ukuran Foto",
        location: "5. Lokasi",
    },
    options: {
        light: "Terang",
        dark: "Gelap",
        clean: "Bersih",
        crowd: "Ramai",
        indoor: "Dalam Ruangan",
        outdoor: "Luar Ruangan"
    },
    generateButton: "Buat Foto Studio",
    generatingConcepts: "Mencari ide konsep...",
    visualizing: "Memvisualisasikan...",
    resultsTitle: "4 Variasi Foto Studio"
  },
  mergeProduct: {
    page: {
      title: "Magic Merge",
      description: "Gabungin beberapa gambar jadi satu frame yang rapi. Cocok buat bikin paket bundling atau koleksi."
    },
    sections: {
      uploadProducts: {
        title: "1. Unggah Gambar",
        subtitle: "Minimal 2 gambar yang mau digabungin.",
        addProduct: "Tambah Gambar Lain"
      }
    },
    errors: {
      atLeastTwo: "Minimal harus ada 2 gambar buat digabungin."
    }
  },
  digitalImaging: {
    page: {
      title: "Magic Imaging",
      description: "Bikin foto produk yang artistik dan unik, kayak editan profesional."
    },
    modes: {
      customize: "Atur Sendiri",
      generateConcept: "Minta Ide AI"
    },
    sections: {
      style: {
        title: "3. Atur Gaya",
        subtitle: "Pilih tema seni yang kamu suka."
      },
      concept: {
        title: "2. Pilih Cara",
        subtitle: "Mau atur sendiri atau biarkan AI kasih ide kreatif?"
      }
    },
    conceptGenerator: {
      title: "3. Cari Ide Kreatif",
      subtitle: "Biarkan AI melihat produkmu dan kasih saran konsep yang keren.",
      button: "✨ Cari Ide Konsep",
      loading: "Lagi mikirin ide-ide liar...",
      resultsTitle: "4. Pilih Concept",
      resultsSubtitle: "Pilih salah satu ide di bawah ini buat digenerate.",
      generateImageButton: "Pilih & Buat"
    },
    generateButton: "✨ Buat Karya Seni",
    errors: {
      conceptError: "Gagal cari ide nih. Coba lagi ya."
    },
    themes: {
      miniatureWorld: "Dunia Miniatur (Kecil)",
      natureFusion: "Menatu dengan Alam",
      surrealFloating: "Melayang & Ajaib",
      cyberneticGlow: "Cyberpunk & Neon",
      watercolorSplash: "Percikan Cat Air",
      papercraftArt: "Kerajinan Kertas",
      galaxyInfused: "Luar Angkasa",
      architecturalIllusion: "Ilusi Bangunan"
    }
  },
  virtualTryOn: {
    page: {
      title: "Magic TryOn",
      description: "Cobain baju ke model AI atau fotomu sendiri tanpa perlu ganti baju beneran."
    },
    sections: {
      uploadProduct: {
        title: "1. Unggah Baju",
        subtitle: "Lengkapi slot tampak depan dan belakang untuk hasil 360° maksimal.",
        addProduct: "Tambah Baju"
      },
      provideModel: {
        title: "2. Siapkan Model",
        subtitle: "Mau pakai foto sendiri atau model buatan AI?"
      }
    },
    labels: {
        front: "Tampak Depan",
        back: "Tampak Belakang"
    },
    modelOptions: {
      upload: "Foto Sendiri",
      generate: "Buat Model AI",
      gender: "Gender",
      female: "Cewek",
      male: "Cowok",
      other: "Lainnya",
      ethnicity: "Wajah (Etnis)",
      aspectRatio: "Ukuran Foto",
      ethnicities: {
        caucasian: "Bule (Eropa)",
        asian: "Asia",
        african: "Afrika",
        hispanic: "Latin",
        middleEastern: "Timur Tengah",
        other: "Lainnya"
      },
      details: "Detail Tambahan",
      detailsPlaceholder: "cth., 'rambut panjang, tersenyum, pakai kacamata'",
      customEthnicity: {
        label: "Etnis Khusus",
        placeholder: "cth., 'Jawa', 'Sunda', 'Korea'"
      }
    },
    errors: {
      noProducts: "Upload foto bajunya dulu ya.",
      noFrontImage: "Upload foto tampak depan baju dulu ya (slot utama).",
      noModel: "Upload foto modelnya (orangnya) dulu."
    },
    generateButton: "✨ Pasang Baju"
  },
  lifestylePhotoshoot: {
    page: {
      title: "Magic Lifestyle",
      description: "Masukin produk ke situasi nyata (misal: di kafe, di taman) biar lebih hidup."
    },
    sections: {
      uploadProduct: {
        title: "1. Unggah Produk",
        subtitle: "Produk apa yang mau difoto?"
      },
      provideModel: {
        title: "2. Model",
        subtitle: "Siapa yang pakai? Upload foto atau buat model AI."
      },
      direct: {
        title: "3. Arahan Gaya",
        subtitle: "Ceritain adegan apa yang kamu mau."
      }
    },
    form: {
      interaction: {
        label: "Deskripsi Adegan",
        placeholder: "cth., 'Wanita sedang duduk santai di sofa sambil memegang botol skincare, tersenyum rileks, cahaya matahari pagi masuk dari jendela.'"
      }
    },
    generateButton: "✨ Buat Foto Lifestyle",
    errors: {
      noProduct: "Produknya belum diupload.",
      noModel: "Modelnya belum ada."
    }
  },
  poseStudio: {
    page: {
        title: "Magic Pose",
        description: "Ubah gaya pose model di fotomu jadi macem-macem gaya baru biar nggak bosenin."
    },
    sections: {
        uploadModel: {
            title: "1. Unggah Foto",
            subtitle: "Foto model yang sedang pakai produk."
        },
        chooseStyle: {
            title: "2. Pilih Pose Baru",
            subtitle: "Mau diganti jadi gaya apa?"
        }
    },
    modes: {
      smart: { 
        title: "Otomatis",
        description: "Biarkan AI yang pilihin pose-pose keren buat kamu."
       },
      customize: { title: "Atur Sendiri" }
    },
    form: {
        theme: { label: "Tema Foto" },
        angle: { label: "Sudut Kamera" },
        framing: { label: "Jarak Foto" },
        instructions: {
            label: "Catatan (Opsional)",
            placeholder: "cth., 'Bikin modelnya terlihat lebih bahagia'"
        }
    },
    angles: {
      eyeLevel: "Sejajar Mata",
      highAngle: "Dari Atas",
      lowAngle: "Dari Bawah"
    },
    frames: {
      fullBody: "Seluruh Badan",
      mediumShot: "Setengah Badan",
      cowboyShot: "Sampai Lutut",
      closeup: "Close-up Wajah"
    },
    generateButton: "✨ Ganti Pose",
    errors: {
        noModelImage: "Upload foto modelnya dulu dong."
    }
  },
  adCreator: {
    page: {
      title: "Magic Poster",
      description: "Bikin desain poster iklan otomatis lengkap dengan teks promosi yang menarik."
    },
    sections: {
      addCopy: {
        title: "2. Isi Teks Iklan",
        subtitle: "Apa yang mau ditulis di poster?"
      }
    },
    form: {
      headline: {
        label: "Judul Besar",
        placeholder: "cth., 'Diskon Spesial Hari Ini!'"
      },
      description: {
        label: "Tulisan Kecil / Deskripsi",
        placeholder: "cth., 'Beli 1 Gratis 1 khusus member.'"
      },
      cta: {
        label: "Tombol / Ajakan (Call to Action)",
        placeholder: "cth., 'Beli Sekarang'"
      },
      reference: {
        label: "Contoh Desain (Opsional)",
        description: "Punya contoh poster yang disuka? Upload biar AI niru gayanya."
      },
      instructions: {
        label: "Catatan Desain (Opsional)",
        placeholder: "cth., 'Bikin warnanya dominan merah dan emas.'"
      }
    },
    generateButton: "✨ Desain Poster",
    errors: {
      noProductImage: "Upload produknya dulu ya.",
      noHeadline: "Judul iklannya belum diisi."
    },
    copywriter: {
      button: "✨ Bantu Bikin Kata-kata",
      modalTitle: "Asisten Penulis AI",
      productNameLabel: "Nama Produk",
      productNamePlaceholder: "cth., 'Sepatu Lari Kencang'",
      keywordsLabel: "Kata Kunci / Fitur",
      keywordsPlaceholder: "cth., 'ringan, empuk, diskon'",
      generateButton: "Cari Ide",
      useButton: "Pakai Ini",
      loading: "Lagi mikirin kata-kata jualan...",
      suggestionsFor: {
        headline: "Ide Judul",
        description: "Ide Deskripsi",
        cta: "Ide Tombol Ajakan"
      },
      error: "Gagal cari ide. Coba lagi ya."
    }
  },
  imageEditor: {
    page: {
      title: "Magic Editor",
      description: "Edit bagian foto yang nggak dimau, hapus objek, atau ganti detail foto sesuka hati."
    },
    tools: {
      resize: {
        title: "Ubah Ukuran (Resize)",
        description: "Ubah ukuran foto jadi kotak, portrait, atau landscape tanpa bikin gepeng (AI akan nambahin backgroundnya).",
        label: "Pilih Ukuran Baru",
        ar_1_1: "1:1 (Kotak)",
        ar_4_3: "4:3",
        ar_3_4: "3:4",
        ar_16_9: "16:9 (Youtube)",
        ar_9_16: "9:16 (Story/Reels)",
        ar_3_2: "3:2",
        ar_2_3: "2:3"
      },
      magicBrush: {
        title: "Kuas Ajaib (Magic Brush)",
        description: "Warnai area yang mau diedit, terus suruh AI ngapain aja.",
        promptLabel: "Perintah Edit",
        promptPlaceholder: "cth., 'hapus orang ini', 'ganti jadi vas bunga', 'ganti warna baju jadi merah'",
        brushSize: "Ukuran Kuas",
        undo: "Batal",
        clear: "Hapus Semua"
      }
    },
    generateButton: "✨ Jalankan Perintah",
    errors: {
      noMask: "Warnai dulu bagian foto yang mau diedit pakai kuas.",
      noPrompt: "Tulis perintahnya dulu, mau diapain bagian itu?"
    }
  },
  videoStudio: {
    page: {
      title: "Studio Video",
      description: "Hidupkan foto produk yang diam jadi video gerak singkat yang estetik."
    },
    sections: {
      upload: {
        title: "1. Unggah Gambar",
        subtitle: "Pilih foto yang mau digerakkan."
      },
      prompt: {
        title: "2. Mau Gerak Kayak Gimana?",
        subtitle: "Ceritain gerakannya."
      }
    },
    form: {
      prompt: {
        label: "Deskripsi Gerakan",
        placeholder: "cth., 'Kamera zoom in perlahan ke produk, ada asap tipis mengepul, cahaya berkilauan.'"
      },
      magicPrompt: {
        label: "Bantu Bikin Deskripsi",
        loading: "Mikirin..."
      }
    },
    generateButton: "✨ Bikin Video",
    loading: {
      title: "Lagi syuting video...",
      messages: "[\"Sabar ya, bikin video emang butuh waktu...\",\"Lagi ngatur kamera dan pencahayaan...\",\"Render frame demi frame biar halus...\",\"Dikit lagi jadi kok, hasilnya bakal keren!\"]"
    },
    results: {
      title: "3. Hasil Video",
      description: "Videomu sudah jadi! Bisa langsung diputar atau didownload.",
      downloadButton: "Simpan Video",
      placeholder: "Video hasil karyamu bakal muncul di sini."
    },
    errors: {
      noPrompt: "Tulis dulu deskripsi gerakannya.",
      noImage: "Upload gambarnya dulu."
    },
    quotaWarning: "Info: Fitur Video ini adalah BONUS ujicoba. Google membatasi kuota pembuatan video (sekitar 10 video per akun). Kalau gagal, mungkin kuotanya habis."
  },
  notes: {
    staticWarning: "Demo: Hasil tidak disimpan di server. Langsung download ya kalau sudah jadi.",
    navigationWarning: "JANGAN tutup atau pindah halaman ini selagi proses berjalan, nanti gagal."
  },
  mockupGenerator: {
    page: {
        title: "Magic Mockup",
        description: "Tempel desain logomu ke berbagai produk (kaos, mug, dll) secara instan."
    },
    sections: {
        uploadDesign: {
            title: "1. Unggah Desain",
            subtitle: "Logo atau gambar yang mau ditempel."
        },
        chooseMockup: {
            title: "2. Pilih Mockup",
            subtitle: "Pilih jenis barang atau upload foto barang sendiri."
        }
    },
    presets: {
        tshirt: "Kaos Putih",
        mug: "Mug Keramik",
        totebag: "Tote Bag Kanvas",
        hoodie: "Hoodie Hitam",
        box: "Box Kemasan"
    },
    tabs: {
        presets: "Pilih dari Daftar",
        upload: "Upload Mockup Sendiri"
    },
    generateButton: "✨ Pasang Mockup",
    errors: {
        noDesign: "Upload desainnya dulu ya.",
        noMockup: "Pilih mockup dari daftar atau upload foto barangnya sendiri."
    }
  },
  magicPhotoshoot: {
    page: {
        title: "Magic Photoshoot",
        description: "Ubah foto biasa jadi potret studio kelas atas dengan nuansa Korea atau Cinematic."
    },
    sections: {
        upload: {
            title: "1. Unggah Foto Sumber",
            subtitle: "Direkomendasikan foto resolusi tinggi."
        },
        theme: {
            title: "2. Tema Khusus (Opsional)",
            subtitle: "Tambahkan nuansa khusus jika diinginkan."
        }
    },
    form: {
        customTheme: {
            placeholder: "Contoh: Nuansa neon city malam hari, atau elegan di perpustakaan tua..."
        }
    },
    generateButton: "Buat 4 Foto Studio",
    errors: {
        noImage: "Harap unggah gambar terlebih dahulu."
    }
  }
};

export function getTranslation(key: string, source: any): string {
  const keys = key.split('.');
  let result = source;
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      return key;
    }
  }
  
  if (typeof result === 'string') {
      return result;
  }

  return key;
}
