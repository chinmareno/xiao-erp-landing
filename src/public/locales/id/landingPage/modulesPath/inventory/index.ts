import { features } from "./features";
import { visualFlow } from "./visualFlow";

export const inventory = {
  header: {
    title: "Modul Inventaris",
    desc: "Kelola stok dengan mudah dan akurat",
  },
  summary: {
    title: "Fungsi Modul Inventaris",
    desc: "Pantau stok secara otomatis, dapatkan peringatan kalau stok menipis, dan pastikan stok selalu update sesuai penjualan dan pembelian.",
  },
  visualFlow: visualFlow,
  featureGridTitle: "Fitur Utama Inventaris",
  useCase: {
    title: "Contoh Kasus",
    desc: "Ketika pesanan 500 unit diproses, stok langsung berkurang, sistem memberi peringatan stok menipis, dan buat permintaan pembelian untuk restock. Semua update secara otomatis di modul terkait.",
  },
  benefitListTitle: "Manfaat untuk Bisnis Anda",
  features: features,
  benefits:
    "Hindari kehabisan dan penumpukan stok||" +
    "Kurangi kesalahan di gudang||" +
    "Dukung pelacakan multi lokasi dan batch||" +
    "Stok selalu terupdate antar modul||" +
    "Data historis untuk prediksi pemesanan ulang lebih baik",
};
