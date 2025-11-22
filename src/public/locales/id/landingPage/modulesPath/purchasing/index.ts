import { features } from "./features";
import { visualFlow } from "./visualFlow";

export const purchasing = {
  header: {
    title: "Modul Pembelian",
    desc: "Kontrol penuh proses pengadaan barang",
  },
  summary: {
    title: "Sederhanakan Pengadaan Anda",
    desc: "Mulai dari permintaan pembelian sampai penerimaan barang dan pencocokan faktur, semua bisa dipantau dan dikelola dalam satu sistem.",
  },
  visualFlow: visualFlow,
  featureGridTitle: "Fitur Penting Modul Pembelian",
  useCase: {
    title: "Studi Kasus",
    desc: "Misalnya, permintaan 200 kursi kantor diproses cepat melalui sistem: PR diajukan, disetujui, PO diterbitkan, dan faktur dicocokkan saat barang diterima.",
  },
  benefitListTitle: "Keunggulan Sistem Pengadaan",
  features: features,
  benefits:
    "Kurangi pembelian tak sah atau ganda||" +
    "Data pengadaan dan vendor tersimpan lengkap||" +
    "Update otomatis di inventaris dan akuntansi||" +
    "Bantu negosiasi dengan catatan kinerja vendor||" +
    "Proses audit jadi lebih mudah dan transparan",
};
