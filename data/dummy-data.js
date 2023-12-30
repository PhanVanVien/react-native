import Category from "../models/category";
import Clothe from "../models/clothe";

export const CATEGORIES = [
  new Category("c1", "Top", "black"),
  new Category("c2", "Bottom", "black"),
  new Category("c3", "Outerwear", "black"),
  new Category("c4", "Accessories", "black"),
  new Category("c5", "All Products", "black"),
];

export const CLOTHES = [
  new Clothe(
    "top1",
    ["c1", "c5"],
    "AA STU NON LOGO TEE",
    ["AA STU NON LOGO TEE products with a typical Aa"],
    ["2-way cotton spandex (Cotton; Spandex) ", "Quantity 260 gsm"],
    ["High Effect Printing", "Silk-screen printing on the neck part"],
    "280.000",
    "https://product.hstatic.net/200000321981/product/382_9c98e4527790467497aebcdcedb3b47e_master.jpg",
    false
  ),
  new Clothe(
    "top2",
    ["c1", "c5"],
    "AA RACING LOGO TEE V2",
    ["AA RACING LOGO TEE V2 products with a typical Aa"],
    ["2-way cotton spandex (Cotton; Spandex) ", "Quantity 260 gsm"],
    ["High Effect Printing", "Silk-screen printing on the neck part"],
    "380.000",
    "https://product.hstatic.net/200000321981/product/nta101_gu574jsu-1-e9h9-hinh_mat_truoc-0_4cbaf464f2fc4cb3b7684defc7bff60d_master.jpg",
    false
  ),
  new Clothe(
    "top3",
    ["c1", "c5"],
    "AA CROP CUBAN SHIRTS",
    ["AA CROP CUBAN SHIRTS products with a typical Aa"],
    ["Smooth Silk Cotton Fabric"],
    [
      "Sewing 1 needle and 2 needles, winding",
      "ribs, overlocking, applying 2 layers",
    ],
    "450.000",
    "https://product.hstatic.net/200000321981/product/785_46864ee1936a4eed952ce57643e2119c_master.jpg",
    false
  ),
  new Clothe(
    "bot1",
    ["c2", "c5"],
    "AA BERMUDA SHORT",
    ["AA BERMUDA SHORT products with a typical Aa"],
    ["Kaki", "Cotton"],
    [
      "Sewing large threads with 1 and 2 needles",
      "Sewing 5mm eyelids",
      "Overlocking",
      "Rib rolling",
      "Surgical bag",
    ],
    "420.000",
    "https://product.hstatic.net/200000321981/product/nta108_v6nkkweq-1-9hgp-hinh_mat_truoc-0_copy_96b5ceb7d8184db58f956866d73166e7_master.jpg",
    false
  ),
  new Clothe(
    "bot2",
    ["c2", "c5"],
    "AA ICON FAB SHORT",
    ["AA ICON FAB SHORT products with a typical Aa"],
    ["Stretch fabric makes it comfortable to wear"],
    [
      "2 layers sewing",
      "Inner wicking mesh layer for coolness",
      "Convenient 180cm drawstring",
      "3D embroidery Aa logo",
    ],
    "320.000",
    "https://product.hstatic.net/200000321981/product/go9211_43r8xuzg-1-szyq-hinh_mat_truoc-0_copy_2_70de560939ba406f87cfa86aef456e42_master.jpg",
    false
  ),
  new Clothe(
    "bot3",
    ["c2", "c5"],
    "AA SHORT JEANS",
    ["AA SHORT JEANS products with a typical Aa"],
    ["Jean cotton 100%"],
    ["Key pull YKK", "Waist and tube hiccups"],
    "680.000",
    "https://product.hstatic.net/200000321981/product/nta108_6o7vq7r1-1-24z7-hinh_mat_truoc-0_29428b2bb9124282ae4a37a675edf6b8_master.jpg",
    false
  ),
  new Clothe(
    "out1",
    ["c3", "c5"],
    "AA RACING LEATHER SHIRT",
    ["AA RACING LEATHER SHIRT products with a typical Aa"],
    ["PVC"],
    [
      "The cream color combination with the cool",
      "big A pattern on the back and the Aa Racing",
      "logo embroidered in leather looks like a real player.",
      "Handmade embroidery, leather embroidery",
      "Emulsion silk screen printing on the lining",
      "Silver tooth YKK zipper on the main body and",
      " 2 arms, pulls smoother than sunsilk 3 times",
    ],
    "720.000",
    "https://product.hstatic.net/200000321981/product/nta121_qv9oxrm9-1-dy84-hinh_mat_truoc-0_e0fae08a5dcb423b9b8c30b51fe6f8bf_master.jpg",
    false
  ),
  new Clothe(
    "out2",
    ["c3", "c5"],
    "THE A DAILY BOXY HOODIE",
    ["THE A DAILY BOXY HOODIE products with a typical Aa"],
    ["Felt Cotton Crab foot weave (100% Cotton)", "Quantity: >= 700g"],
    [
      "Embroidery with crab legs fabric",
      "Silk-screen printing on the neck part",
      "Split waist and hong kong",
      "Drawstring for the hybrid part",
    ],
    "620.000",
    "https://product.hstatic.net/200000321981/product/nta105_joextv4b-1-xrfx-hinh_mat_truoc-0_bf7b3f998310427b90ca31fa52e134bc_master.jpg",
    false
  ),
  new Clothe(
    "out3",
    ["c3", "c5"],
    "RACING LEATHER CROP JACKET",
    ["RACING LEATHER CROP JACKET products with a typical Aa"],
    [
      "Own dedicated PVC leather Aa Stu. (water",
      "resistant, scratch resistant)",
    ],
    ["1-needle and 2-needle seam", "2-layer clamp ( Khaki )"],
    "720.000",
    "https://product.hstatic.net/200000321981/product/w7czv20t-1-9u9b-hinh_mat_truoc-0_5db067b34ec54f9bba35f2d44cc08d74_master.jpg",
    false
  ),
  new Clothe(
    "acc1",
    ["c4", "c5"],
    "AASTU UMBRELLA",
    ["AASTU UMBRELLA products with a typical Aa"],
    [
      "Aluminum frame keeps the weight light",
      "Water-skiing PU rolled umbrella",
    ],
    ["Full-floor silk drag printing", "Assembly the bumper"],
    "280.000",
    "https://product.hstatic.net/200000321981/product/nt2604_2c7zrgb6-1-aaxs-hinh_nghieng_trai-0_4f2967e02b834f7daa8fa5f694c78b35_master.jpg",
    false
  ),
  new Clothe(
    "acc2",
    ["c4", "c5"],
    "SIGNATURE LOGO SKATEBOARD",
    ["SIGNATURE LOGO SKATEBOARD products with a typical Aa"],
    ["Pine"],
    [
      "Fiberglass increases elasticity",
      "High strength registance",
      "Reduces board weight",
      "Edge pressing / Epoxy adhesive",
    ],
    "880.000",
    "https://product.hstatic.net/200000321981/product/ntzh01_43r8xuzg-1-vnpe-hinh_mat_sau-0_58817c9dfc72472390d2362aa1fa29b7_master.jpg",
    false
  ),
  new Clothe(
    "acc3",
    ["c4", "c5"],
    "AA GLASS DECOR",
    ["AA GLASS DECOR products with a typical Aa"],
    ["High quality ceramic"],
    ["Directly printing filters"],
    "120.000",
    "https://product.hstatic.net/200000321981/product/regisster_glass_c243ffad36fb49aba2b6eabee8741310_master.png",
    false
  ),
];
