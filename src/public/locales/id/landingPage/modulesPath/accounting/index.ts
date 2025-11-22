import { features } from "./features";
import { visualFlow } from "./visualFlow";

export const accounting = {
  header: {
    title: "Modul Akuntansi",
    desc: "Permudah urusan keuangan dengan otomatisasi pintar",
  },
  summary: {
    title: "Apa yang Dilakukan Modul Akuntansi",
    desc: "Modul ini membantu otomatisasi pencatatan transaksi hingga pelaporan keuangan, tanpa perlu input manual. Terhubung langsung dengan penjualan, inventaris, dan operasional secara real-time.",
  },
  visualFlow: visualFlow,
  featureGridTitle: "Key Accounting Features",
  useCase: {
    title: "Contoh Kasus Nyata",
    desc: "Misalnya, tim sales menutup transaksi Rp225 juta. Begitu dikonfirmasi, sistem otomatis membuat faktur, mencatat transaksi, menghitung pajak, memperbarui piutang, dan mencocokkan pembayaran. Laporan keuangan pun langsung siap tanpa proses manual.",
  },
  benefitListTitle: "Manfaat yang Didapatkan",
  features: features,
  benefits:
    "Meminimalkan kesalahan input manual||" +
    "Data keuangan siap diaudit kapan saja||" +
    "Integrasi mulus dengan penjualan dan inventaris||" +
    "Patuhi aturan pajak lokal secara otomatis||" +
    "Ekspor laporan ke Excel, PDF, atau software akuntansi",
};
