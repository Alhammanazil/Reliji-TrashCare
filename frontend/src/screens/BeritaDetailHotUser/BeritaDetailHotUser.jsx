import React from "react";
import { ContainerBerita } from "../../components/ContainerBerita";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";
import { SubJudulFix } from "../../components/SubJudulFix";
import { ContainerBerita2 } from "../../components/ContainerBerita2";

export const BeritaDetailHotUser = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 w-[1440px] h-[4674px]">
        <div className="relative h-[4674px]">
          <div className="absolute w-[1318px] h-[4674px] top-0 left-0">
            <p className="absolute w-[244px] top-[289px] left-[124px] [font-family:'Nunito',Helvetica] font-normal text-primary-1 text-[24px] tracking-[0.12px] leading-[36px]">
              <span className="font-[number:var(--heading-6-semibold-font-weight)] tracking-[var(--heading-6-semibold-letter-spacing)] font-heading-6-semibold [font-style:var(--heading-6-semibold-font-style)] leading-[var(--heading-6-semibold-line-height)] text-[length:var(--heading-6-semibold-font-size)]">
                Zainuddin Lubis <br />
              </span>
              <span className="text-[length:var(--heading-7-regular-font-size)] tracking-[var(--heading-7-regular-letter-spacing)] leading-[var(--heading-7-regular-line-height)] font-heading-7-regular [font-style:var(--heading-7-regular-font-style)] font-[number:var(--heading-7-regular-font-weight)]">
                <br />
              </span>
            </p>
            <p className="absolute w-[994px] top-[237px] left-[324px] font-heading-7-regular font-[number:var(--heading-7-regular-font-weight)] text-primary-1 text-[length:var(--heading-7-regular-font-size)] tracking-[var(--heading-7-regular-letter-spacing)] leading-[var(--heading-7-regular-line-height)] [font-style:var(--heading-7-regular-font-style)]">
              21 Maret 2024, 03.00 WIB
            </p>
            
            <div className="absolute w-[792px] h-[3735px] top-[122px] left-[426px]">
              <ContainerBerita2
                className="!absolute !left-0 !top-0"
                ramadhanMomentum="../../../static/img/ramadhan-momentum-untuk-menyadari-bahaya-sampah-1710922717-1-1.png"
                text="Kultum: Ramadhan, Momentum untuk Menyadari Bahaya Sampah"
                text1="nu.or.id"
                text2="Zainuddin Lubis"
              />
              <div className="flex flex-col w-[792px] items-center justify-center gap-[24px] absolute top-[586px] left-0">
                <p className="relative self-stretch mt-[-1.00px] font-heading-7-regular font-[number:var(--heading-7-regular-font-weight)] text-tersier-2 text-[length:var(--heading-7-regular-font-size)] text-justify tracking-[var(--heading-7-regular-letter-spacing)] leading-[var(--heading-7-regular-line-height)] [font-style:var(--heading-7-regular-font-style)]">
                  <br />
                  Permasalahan sampah telah menjadi sebuah ancaman bagi bangsa Indonesia. Tumpukan sampah kian
                  menggunung di berbagai tempat, mencemari lingkungan dan membahayakan kesehatan masyarakat. Tak hanya
                  itu, sampah juga menimbulkan dampak sosial dan ekonomi yang tak kalah serius. Dampak sosial dari
                  permasalahan sampah terlihat jelas dari kumuhnya lingkungan akibat tumpukan sampah. Hal ini dapat
                  memicu berbagai penyakit, seperti demam berdarah, leptospirosis, dan diare. Selain itu, bau busuk dari
                  sampah juga dapat mengganggu kenyamanan dan menurunkan kualitas hidup masyarakat. <br />
                  <br />
                  Dampak pencemaran lingkungan hidup sangatlah besar. Pencemaran air dapat menyebabkan penyakit diare,
                  kolera, dan tifoid. Hal ini terjadi karena air yang tercemar mengandung bakteri dan virus berbahaya
                  yang dapat menginfeksi tubuh manusia.
                </p>
                <img
                  className="relative w-[238px] h-[192px] object-cover"
                  alt="Person with a cold"
                  src="../../../static/img/person-with-a-cold-bro-2.png"
                />
                <p className="relative self-stretch font-heading-7-regular font-[number:var(--heading-7-regular-font-weight)] text-tersier-2 text-[length:var(--heading-7-regular-font-size)] tracking-[var(--heading-7-regular-letter-spacing)] leading-[var(--heading-7-regular-line-height)] [font-style:var(--heading-7-regular-font-style)]">
                  Sementara itu, pencemaran tanah dapat menyebabkan penurunan kesuburan tanah dan pencemaran udara dapat
                  menyebabkan penyakit pernapasan, seperti asma dan bronkitis. Pun, pencemaran tanah juga memiliki
                  dampak yang signifikan, di mana tanah yang tercemar dapat menyebabkan penurunan kesuburan tanah. Hal
                  ini tentu saja akan berdampak pada hasil panen dan ketahanan pangan. Pencemaran udara juga tidak kalah
                  berbahaya. Pencemaran udara dapat menyebabkan berbagai penyakit pernapasan seperti asma dan bronkitis.
                  Partikel-partikel halus yang terkandung dalam udara tercemar dapat masuk ke dalam paru-paru dan
                  menyebabkan peradangan dan kerusakan pada jaringan paru-paru. Dampak pencemaran lingkungan hidup tidak
                  hanya terbatas pada kesehatan manusia, tetapi juga dapat berdampak pada ekosistem dan keseimbangan
                  alam.
                </p>
                <img
                  className="relative w-[242px] h-[229px] object-cover"
                  alt="Hazardous waste"
                  src="../../../static/img/hazardous-waste-rafiki-2.png"
                />
                <p className="relative self-stretch font-heading-7-regular font-[number:var(--heading-7-regular-font-weight)] text-tersier-2 text-[length:var(--heading-7-regular-font-size)] text-justify tracking-[var(--heading-7-regular-letter-spacing)] leading-[var(--heading-7-regular-line-height)] [font-style:var(--heading-7-regular-font-style)]">
                  Dalam Islam, lingkungan hidup merupakan karunia Allah Swt. yang tak ternilai harganya. Lingkungan
                  menjadi bagian tak terpisahkan dari kehidupan umat manusia dan memiliki pengaruh besar terhadap
                  kualitas hidup. Oleh karena itu, menjaga dan melestarikan lingkungan hidup adalah tanggung jawab
                  setiap individu sebagai makhluk Allah yang bertugas memakmurkan bumi. Allah Swt. menciptakan
                  lingkungan hidup dengan penuh maksud baik. Alam semesta beserta segala isinya merupakan sumber
                  kehidupan dan kesejahteraan bagi manusia. Menjaganya berarti mensyukuri karunia Allah dan menjalankan
                  amanah sebagai khalifah di bumi. Oleh karena itu, menjaga dan melestarikan lingkungan hidup merupakan
                  tanggung jawab setiap individu, bukan hanya demi masa kini, tetapi juga untuk generasi mendatang.
                  <br />
                  <br />
                  Sebagai makhluk Allah yang bertugas memakmurkan bumi, manusia memiliki kewajiban untuk menjaga
                  kelestarian alam. Allah Swt. telah menciptakan alam dengan segala isinya untuk kemaslahatan manusia.
                  Namun, manusia tidak boleh semena-mena dalam memanfaatkannya. Pengelolaan sumber daya alam harus
                  dilakukan dengan bijak dan bertanggung jawab agar tidak terjadi kerusakan dan pencemaran. Menjaga
                  lingkungan hidup bukan hanya tentang menjaga kebersihan dan keindahan alam, tetapi juga tentang
                  menjaga keseimbangan ekosistem. Manusia haruslah hidup selaras dengan alam, menjaga kelestarian flora
                  dan fauna, serta mengurangi emisi gas rumah kaca. Dengan menjaga lingkungan hidup, manusia telah
                  menunjukkan rasa syukur atas karunia Allah Swt. dan menjalankan tanggung jawabnya sebagai khalifah di
                  bumi.
                  <br />
                  <br />
                  Nahdlatul Ulama (NU) memiliki pandangan tegas tentang hubungan antara kehidupan umat manusia dengan
                  kondisi lingkungan hidup. Dalam buku Fikih Penanggulangan Sampah Plastik, halaman 20, yang diterbitkan
                  oleh Lembaga Bahtsul Masail (LBM) PBNU &amp; Lembaga Penanggulangan Bencana dan Peribahan Iklim (LPBI)
                  PBNU, menyebutkan pencemaran lingkungan hidup merupakan tindakan yang bertentangan dengan ajaran
                  Islam. Islam memandang bahwa alam semesta adalah ciptaan Allah SWT yang harus dijaga dan dilestarikan.
                  Merusak alam sama dengan merusak ciptaan Allah, dan ini merupakan dosa besar. Oleh karena itu, segala
                  upaya untuk membangun kesejahteraan manusia harus dilakukan dengan mempertimbangkan kelestarian
                  lingkungan. Kita tidak boleh mengeksploitasi alam secara berlebihan tanpa memikirkan dampaknya.
                  Perusakan lingkungan hidup dan para pelakunya harus dikategorikan sebagai pelanggar syariat Allah dan
                  hukum.
                  <br />
                  <br />
                  Dalam surah Al-A&#39;raf [7] ayat 58, Allah melarang manusia untuk melakukan kerusakan di bumi setelah
                  Allah SWT memperbaikinya. Kerusakan ini dapat berupa berbagai tindakan yang mengganggu keseimbangan
                  dan keharmonisan alam, seperti pencemaran lingkungan, eksploitasi sumber daya alam berlebihan, dan
                  peperangan. <br />
                  <br />
                  وَلَا تُفْسِدُوْا فِى الْاَرْضِ بَعْدَ اِصْلَاحِهَاۗ
                  <br />
                  <br />
                  Artinya: &#34;Jangan (pula) berbuat kerusakan di bumi setelah perbaikannya.&#34;
                </p>
                <img
                  className="relative w-[208px] h-[184px] object-cover"
                  alt="Environment bro"
                  src="../../../static/img/environment-bro-2.png"
                />
                <p className="relative self-stretch font-heading-7-regular font-[number:var(--heading-7-regular-font-weight)] text-tersier-2 text-[length:var(--heading-7-regular-font-size)] text-justify tracking-[var(--heading-7-regular-letter-spacing)] leading-[var(--heading-7-regular-line-height)] [font-style:var(--heading-7-regular-font-style)]">
                  Pada sisi lain, terdapat juga hadis yang diriwayatkan oleh Al-Thabrani dari Hudzaifah ibn Usaid ra
                  menjadi pengingat penting bagi kita semua tentang pentingnya menjaga keamanan dan keselamatan sesama
                  Muslim, termasuk dari dampak sampah dan pencemaran lingkungan hidup. Nabi bersabda;
                  <br />
                  <br /> من آذَى المسلمين في طُرُقِهم ، وجبت عليه لعنتُهم
                  <br />
                  <br />
                  Artinya: “Barang siapa menyakiti orang Islam di jalan-jalan mereka, maka ia memperoleh laknat” (HR. Al
                  Thabrani) <br />
                  <br />
                  Mari jadikan Ramadhan ini sebagai momentum untuk meningkatkan kepedulian terhadap lingkungan dan
                  bersama-sama mewujudkan lingkungan yang bersih dan sehat.
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute w-[996px] h-[554px] top-[3912px] left-[325px]">
            <div className="absolute w-[486px] h-[491px] top-[63px] left-0 bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
              <div className="flex flex-col w-[451px] items-start gap-[32px] absolute top-[16px] left-[18px]">
                <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative self-stretch w-full h-[238.12px] ml-[-0.17px] mr-[-0.17px] object-cover"
                    alt="Sampah di TPA talang"
                    src="../../../static/img/sampah-di-tpa-talang-gulo-kota-jambi-5-1.png"
                  />
                  <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                    <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                      Jambi.tribunnews.com • 22 Maret 2024
                    </p>
                    <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                      <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-tersier-2 text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                        Atasi Persoalan Sampah, Pemkot Jambi Keluarkan Instruksi Wali Kota
                      </p>
                      <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap.svg" />
                    </div>
                    <p className="relative self-stretch mb-[-55.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                      Atasi permasalahan sampah Pemerintah Kota (Pemkot) Jambi mengeluarkan instruksi Wali Kota No 5
                      Tahun 2024.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-[451px] items-start gap-[8px] absolute top-[443px] left-[6px]">
                <div className="inline-flex items-start relative flex-[0_0_auto] mix-blend-multiply">
                  <div className="inline-flex items-center justify-center px-[10px] py-[2px] relative flex-[0_0_auto] bg-primary-1 rounded-[16px]">
                    <div className="relative w-fit mt-[-1.00px] font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] text-center tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                      Sampah
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-start relative flex-[0_0_auto] mix-blend-multiply">
                  <div className="inline-flex items-center justify-center px-[10px] py-[2px] relative flex-[0_0_auto] bg-primary-1 rounded-[16px]">
                    <div className="relative w-fit mt-[-1.00px] font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] text-center tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                      Instruksi Wali Kota
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[486px] h-[491px] top-[63px] left-[510px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
              <div className="flex flex-col w-[451px] items-start gap-[32px] absolute top-[16px] left-[18px]">
                <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative self-stretch w-full h-[235px] object-cover"
                    alt="Img"
                    src="../../../static/img/img-20240308-150338-1-1.png"
                  />
                  <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                    <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                      Infojambi.com • 8 Maret 2024
                    </p>
                    <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                      <p className="relative flex-1 mt-[-1.00px] [font-family:'Nunito',Helvetica] font-bold text-tersier-2 text-[18px] tracking-[0.09px] leading-[27px]">
                        DLH Provinsi Jambi Ajak Masyarakat Bersihkan Sampah di Danau Sipin
                      </p>
                      <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-1.svg" />
                    </div>
                    <p className="relative self-stretch mb-[-35.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                      Dinas Lingkungan Hidup (DLH) Provinsi Jambi melakukan aksi Bersih Negeri, memperingati Hari Peduli
                      Sampah Nasional (HPSN) 2024.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-[451px] items-start gap-[8px] absolute top-[443px] left-[6px]">
                <div className="inline-flex items-start relative flex-[0_0_auto] mix-blend-multiply">
                  <div className="inline-flex items-center justify-center px-[10px] py-[2px] relative flex-[0_0_auto] bg-primary-1 rounded-[16px]">
                    <div className="relative w-fit mt-[-1.00px] font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] text-center tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                      Sampah
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-start relative flex-[0_0_auto] mix-blend-multiply">
                  <div className="inline-flex items-center justify-center px-[10px] py-[2px] relative flex-[0_0_auto] bg-primary-1 rounded-[16px]">
                    <div className="relative w-fit mt-[-1.00px] font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] text-center tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                      Dinas Lingkungan Hidup
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SubJudulFix
              className="!gap-[15px] !flex !absolute !left-0 !w-[996px] !top-0"
              line="/img/line-18-1.svg"
              lineClassName="!self-stretch !w-full"
              subSubJudulClassName="!flex-1 !flex !grow"
              text="Lihat Lebih Banyak"
            />
          </div>
          <div className="flex w-[997px] h-[62px] items-center justify-between pt-[20px] pb-0 px-0 absolute top-[4508px] left-[324px] border-t-[0.5px] [border-top-style:solid] border-variable-collection-pure-black">
            <button className="all-[unset] box-border inline-flex items-start relative flex-[0_0_auto]">
              <div className="items-center justify-center gap-[8px] inline-flex relative flex-[0_0_auto]">
                <img className="relative w-[20px] h-[20px]" alt="Arrow left" src="../../../static/img/arrow-left.svg" />
                <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  Sebelumnya
                </div>
              </div>
            </button>
            <div className="inline-flex items-start gap-[2px] relative flex-[0_0_auto]">
              <div className="relative w-[40px] h-[40px] bg-primary-1 rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    1
                  </div>
                </div>
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    2
                  </div>
                </div>
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    3
                  </div>
                </div>
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    ...
                  </div>
                </div>
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    8
                  </div>
                </div>
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    9
                  </div>
                </div>
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    10
                  </div>
                </div>
              </div>
            </div>
            <button className="all-[unset] box-border items-start inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center gap-[8px] inline-flex relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  Selanjutnya
                </div>
                <img className="relative w-[20px] h-[20px]" alt="Arrow right" src="../../../static/img/arrow-right.svg" />
              </div>
            </button>
          </div>
        </div>
        <SideBarWrapper
              beritaPropertyDefaultClassName="!fixed !flex-[0_0_auto] !bg-secondary-1"
              className="!h-[4674px] !absolute !left-0 !top-0"
              deteksiDeteksi="../../../static/img/deteksi-3.svg"
              logoPlaceholderGroup="../../../static/img/group-7-2.png"
            />
        <NavbarUserFitur
            className="!fixed !left-[324px] !top-0"
            profilArrowDown="../../../static/img/arrow-down-2-3.svg"
            profilOpenartImage="../../../static/img/openart-image-nfswrdqc-1711466557108-raw-2-3.png"
          />
      </div>
    </div>
  );
};
