import React, {Component} from "react"
import { Divider,Collapse, Menu } from 'antd';
import CoolTabs from 'react-cool-tabs';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}


class Content1 extends Component {
    render() {
      return <div className='content' >
        <h2>Umum</h2>
        <Collapse onChange={callback}>
            <Panel header="1. Mengapa harus update ke aplikasi Anterin terbaru?" key="1">
            <p>
                Aplikasi Anterin yang baru memiliki banyak keunggulan, tampilan yang menarik, berbagai fitur baru yang kami hadirkan seluruhnya tidak hanya untuk memenuhi kebutuhan transportasi Kamu namun juga kebutuhan sehari – hari dengan cara digital.
            </p>

            <p>
                Salah satunya, pembayaran dengan menggunakan AnterinPay. Kamu bisa menukarkan A-Poin dengan voucher untuk trip (perjalanan).
            </p>
            </Panel>
            <Panel header="2. Kapan aplikasi Anterin terbaru resmi diluncurkan?" key="2">
            <p>Aplikasi Anterin baru diluncurkan tanggal 11 November 2019</p>
            </Panel>
            <Panel header="3. Di mana saja aplikasi Anterin terbaru dapat di akses?" key="3">
            <p>Playstore dan Appstore</p>
            </Panel>
            <Panel header="4. Apa saja keuntungan / kelebihan dari aplikasi Anterin terbaru dibandingkan aplikasi Anterin sebelumnya?" key="4">
            <ul>
                <li>Anterinpay sebagai alat pembayaran </li>
                <li>Beli kebutuhan harian di aplikasi Anterin (pulsa, PLN,Paket data)</li>
                <li>Tukar saldo A-Poin menjadi voucher perjalanan</li>
            </ul>
            </Panel>
            <Panel header="5. Jika sudah unduh aplikasi Anterin yang baru, apakah aplikasi yang lama harus di hapus?" key="5">
            <p>Untuk sementara aplikasi yang lama jangan di hapus sampai pemberitahuan lebih lanjut dari Anterin. Karena aplikasi Anterin yang baru saat ini masih versi BETA.</p>
            </Panel>
            </Collapse>

        <Divider/>
        <h2>Spesifikasi ponsel yang digunakan</h2>
        <Collapse onChange={callback}>
            <Panel header="6. Bagaimana spesifikasi ponsel yang dapat digunakan pada aplikasi Anterin terbaru untuk Teman?" key="6">
            <p>Spesifikasi minimal RAM 2GB, android KitKat minimal 19</p>
            <p>
                iOS 9 ke atas
            </p>
            </Panel>
        </Collapse>
        
        <Divider/>
        <h2>Order</h2>
        <Collapse onChange={callback}>
            <Panel header="7. Bagaimana cara install dan daftar aplikasi Anterin Customer terbaru di ponsel?" key="7">
            <ol>
                <li> <p> Buka Playstore di ponsel Android atau buka Appstore di iPhone. </p></li>
                <li> <p> Ketik di pencarian Playstore / Appstore dengan kata kunci “Anterin” Tekan Install dan tunggu hingga proses unduh aplikasi Anterin serta instalasinya selesai. </p></li>
                <li> <p> Setelah proses instalasi selesai, buka aplikasi Anterin. Di aplikasi, akan muncul menu pembuka Anterin Customer. Silahkan langsung masukkan nomor ponsel Kamu pada kolom nomor handphone. Secara otomatis, sistem akan langsung menampilkan form registrasi. Jika nomor handphone yang dimasukan sudah terdaftar, sistem akan menampilkan halaman input OTP.</p> </li>
                <li> Lengkapi data pendaftarannya, meliputi: </li>
                <ul>
                    <li>Foto</li>
                    <li>Nama Lengkap</li>
                    <li>Email Aktif</li>
                    <li>Nomor handphone dan </li>
                    <li>Jenis Kelamin </li>
                    <li>silahkan isi data yang benar</li>
                </ul>
                <p>Kode verifikasi akan dikirimkan melalui nomor ponsel yang terdaftar. Jika nomor ponsel yang dimasukkan salah, maka pendaftaran tidak dapat di proses lebih lanjut.</p>
                <p>Mengisi email yang aktif juga penting, karena Kamu  akan mendapat verifikasi email. Dengan mengisi email yang benar, Kamu akan mendapat informasi rincian perjalanan di Anterin. Tidak hanya itu, Kamu juga akan mendapat informasi promo Anterin di email tersebut.</p>
            </ol>
            </Panel>
            <Panel header="8. Bagaimana cara melakukan pemesanan layanan Motor dan Mobil di aplikasi Anterin terbaru? " key="8">
            <p>Untuk melakukan pemesanan layanan Motor dan Mobil dilakukan dengan cara sebagai berikut:</p>
            <ol>
                <li> Masuk ke menu utama aplikasi penumpang (Teman). </li>
                <li> Masukkan titik penjemputan dan tujuan. </li>
                <li> Tentukan Metode pembayaran (tunai/AnterinPay). 
                    Jika saldo AnterinPay tidak mencukupi, maka pembayaran akan dialihkan ke tunai.</li>
                <li> Penumpang (Teman) dapat memindahkan layanan Motor ke Mobil atau sebaliknya. </li>
                <li> Masukkan catatan jika diperlukan untuk memudahkan pengemudi (Warga) mencari alamat atau yang lainya.</li>
                <li> Masukan voucher jika penumpang (Teman) memiliki voucher.</li>
                <li> Selanjutnya, tekan tombol "Cari Pengemudi" untuk mencari pengemudi (Warga) di sekitar penumpang (Teman) selama 60 detik. </li>
                <li> Pengemudi (Warga) yang berada di sekitar penumpang (Teman) akan muncul dengan variasi harga yang ditawarkan. Penumpang (Teman) dapat memilih lebih dari 1 pengemudi (Warga) yang sesuai kriterianya. Penumpang (Teman) diberi waktu selama 60 detik untuk memilih pengemudi (Warga). Setelah itu, tunggu sampai pengemudi (Warga) memilih Kamu.  </li>
                <li> Jika sudah dipilih oleh pengemudi (Warga), maka pengemudi (Warga) akan menuju ke lokasi penjemputan. </li>
                <li> Tekan "Sudah" jika Kamu sudah bersama pengemudi (Warga). Jika tombol tersebut tidak di tekan, maka pengemudi (Warga) tidak dapat melanjutkan perjalanan untuk pengantaran.</li>
                <li> Setelah bersama pengemudi (Warga), selanjutnya menuju ke lokasi tujuan sesuai denagan ada di aplikasi. </li>
                <li> Jika sudah sampai tujuan, pengemudi (Warga) akan menyelesaikan order dan penumpang (Teman) wajib memberi penilain untuk pengemudi (Warga) atas layanan yang diberikan selama perjalanan. </li>
            </ol>
            </Panel>
            <Panel header="9. Bagaimana cara membatalkan pesanan?" key="9">
            <p>Terdapat 2 cara bagi penumpang (Teman) Anterin untuk membatalkan pesanannya, yaitu:</p>
            <ol>
                <li> Saat proses pencarian driver (Warga) Anterin dengan waktu 60 detik. Jika waktu 60 detik tersebut sudah habis, maka penumpang (Teman) Anterin diminta untuk memesan ulang.</li>
                <li> Ketika proses pemilihan driver (Warga) Anterin dengan waktu 60 detik untuk memilih driver (Warga) Anterin. Jika tidak memilih, maka penumpang (Teman) Anterin diminta untuk memesan ulang.</li>
            </ol>
            </Panel>
        </Collapse>
        
        <Divider/>
        <h2>Cara Pembayaran</h2>
        <Collapse onChange={callback}>
            <Panel header="10. Bagaimana cara pembayaran di aplikasi Anterin terbaru?" key="10">
            <p>Pada aplikasi Anterin yang baru ada dua metode pembayaran yaitu Anterin Pay dan Tunai.</p>
            </Panel>
        </Collapse>

         <Divider/>
        <h2>JalinJalan</h2>  
        <Collapse onChange={callback}> 
            <Panel header="11. Apakah poin JalinJalan saya di aplikasi sebelumnya hangus?" key="11">
            <p>Tidak hangus, poin akan tetap dan jumlahnya tidak bertambah dan berkurang</p>
            </Panel>
        </Collapse>
            
        <Divider/>
        <h2>AnterinPay</h2>  
        <Collapse onChange={callback}> 
            <Panel header="12. Apa itu AnterinPay?" key="12">
            <p>AnterinPay merupakan dompet virtual yang bisa digunakan untuk membayar transaksi-transaksi yang berkaitan dengan layanan di dalam aplikasi Anterin.</p>
            </Panel>
            <Panel header="13. Keuntungan AnterinPay?" key="13">
            <p>AnterinPay merupakan dompet virtual yang bisa digunakan untuk membayar transaksi-transaksi yang berkaitan dengan layanan di dalam aplikasi Anterin. 
                AnterinPay sudah terdapat didalam aplikasi Anterin yang baru sehingga fungsinya sudah terintegrasi dengan baik dan mempermudah untuk memesan jenis layanan Anterin Motor, Mobil, Kurir, Pembayaran BPJS, Paket Pulsa, dan lainya. </p>
            
            <p>Kini top up AnterinPay dapat dilakukan kapan saja dan dimana saja melalui berbagai fasilitas yang disediakan. Kamu dapat memilih menggunakan ATM, Internet Banking, Mobile Banking.</p>
            </Panel>
        </Collapse>

        <Divider/>
        <h2>Voucher</h2>  
        <Collapse onChange={callback}> 
            <Panel header="14. Bagaimana cara mendapatkan voucher perjalanan (voucher ride)?" key="14">
            <p>Voucher layanan motor / mobil didapat dengan menukarkan Anterin Poin atau A-Poin Kamu, yang diperoleh dari program JalinJalan. Cara tukar A-poin melalui fitur A-poin yang terletak di panel header pada halaman utama aplikasi. </p>
            <p>Harga voucher: </p>
            <p>Voucher 5.000 = 500 A-Poin</p>
            <p>Voucher 10.000 = 1.000 A-Poin</p>
            <p>voucher 15.000 = 1.500 A-Poin</p>
            <p>Voucher 20.000 = 2.000 A-Poin</p>
            </Panel>
            <Panel header="15. Bagaimana cara menggunakan voucher perjalanan (voucher ride)?" key="15">
            <span>Ada dua cara untuk menggunakan voucher:</span>
            <ol>
                <li> Dengan menekan tombol "Detail" di halaman voucher kemudian pilih "Pakai Voucher". </li>
                <li> Melalui tombol voucher setelah Kamu menentukan tujuan perjalanan. Di halaman tersebut, Kamu dapat menggunakan voucher dengan nekan tombol "Gunakan" dan memasukkan kode voucher pada form pencarian voucher. </li>
            </ol>
            </Panel>
            <Panel header="16. Bagaimana cara mencairkan / meng-uangkan voucher perjalanan (voucher ride)? " key="16">
            <p>Voucher tidak dapat diuangkan.</p>
            </Panel>
            <Panel header="17. Bagaimana cara melakukan pengecekan voucher perjalanan (voucher ride) sudah digunakan?" key="17">
            <p>Tidak ada history voucher, yang ada adalah history order. Pada menu history order, Kamu dapat melihat riwayat order secara detail. Jadi ketika voucher sudah digunakan, maka voucher tersebut akan otomatis hilang di aplikasi Anterin.</p>
            </Panel>
        </Collapse>
      </div>
    }
  }
  class Content2 extends Component {
    render() {
      return <div >
         <h2>Umum</h2>
        <Collapse onChange={callback}>
            <Panel header="1. Mengapa harus update ke aplikasi Anterin terbaru?" key="1">
                <p>
                Aplikasi Anterin yang baru memiliki banyak keunggulan, tampilan yang menarik, berbagai fitur baru yang kami hadirkan seluruhnya tidak hanya untuk memenuhi kebutuhan transportasi Kamu namun juga kebutuhan sehari – hari dengan cara digital.
                </p>
            </Panel>
            <Panel header="2. Kapan aplikasi Anterin terbaru resmi diluncurkan?" key="2">
                <p>Aplikasi anterin baru diluncurkan tanggal 11 November 2019</p>
            </Panel>
            <Panel header="3. Di mana saja aplikasi Anterin terbaru dapat di akses?" key="3">
            <p>Playstore</p>
            </Panel>
            <Panel header="4. Apa saja keuntungan / kelebihan dari aplikasi Anterin terbaru dibandingkan aplikasi Anterin sebelumnya?" key="4">
            <ol>
                <li> Anterinpay sebagai alat pembayaran  </li>
                <li> Beli kebutuhan harian di aplikasi Anterin (pulsa, PDAM, Paket data)</li>
            </ol>
            </Panel>
            </Collapse>
            <Divider/>
            <h2>Spesifikasi ponsel yang digunakan</h2>
            <Collapse onChange={callback}>
                <Panel header="5. Bagaimana spesifikasi ponsel yang dapat digunakan pada aplikasi Anterin terbaru untuk Warga?" key="5">
                <p>Spesifikasi minimal RAM 2GB, android KitKat minimal 19</p>
                </Panel>
                <Panel header="6. Jika sudah unduh aplikasi Anterin yang baru, apakah aplikasi yang lama harus di hapus?" key="6">
                <p>Untuk sementara aplikasi yang lama jangan di hapus sampai pemberitahuan lebih lanjut dari Anterin. Karena aplikasi Anterin yang baru saat ini masih versi BETA.</p>
                </Panel>
            </Collapse>

            <Divider/>
        <h2>Order</h2>
        <Collapse onChange={callback}>
            <Panel header="7. Bagaimana cara install dan daftar aplikasi Anterin Customer terbaru di ponsel?" key="7">
            <ol>
                <li><p> Buka Playstore di ponsel Android.</p></li>
                <li><p> Ketik di pencarian Playstore dengan kata kunci “Anterin Driver” Tekan Install dan tunggu hingga proses unduh aplikasi Anterin serta instalasinya selesai.</p></li>
                <li> <p>Setelah proses instalasi selesai, buka aplikasi Anterin Driver. Di aplikasi, akan muncul menu pembuka Anterin Driver.  
                   Untuk Kamu yang berada di luar wilayah distributor / dealer / agen dan ingin menjadi pengemudi (Warga) Anterin, Kamu bisa langsung daftar online menggunakan nomor ponsel dengan menekan tombol "Daftar Yuk". 
                    Untuk Kamu yang berada di wilayah cakupan distributor / dealer / agen dan ingin menjadi pengemudi (Warga) Anterin, Kamu bisa langsung daftar ke distributor / dealer / agen terdekat di kota Kamu. Klik informasinya di tautan berikut: <a href="https://m.anterin.id/faq-berlangganan/">berlangganan</a> </p></li>
                    
                <li> Untuk menjadi pengemudi (Warga) Anterin terdapat 5 tahap pengisian data, yaitu: </li>
                    <ul>
                        <li>Tahap 1: Isi biodata diri </li>
                            <ul>
                                <li>Nama Lengkap</li>
                                <li>Email Aktif</li>
                                <li>Jenis Kelamin</li>
                                <li>Tanggal Lahir</li>
                                <li>Provinsi</li>
                                <li>Kota, dan</li>
                                <li>Alamat lengkap</li>
                            </ul>
                        <li>Tahap 2: Lengkapi biodata diri </li>
                            <ul>
                                <li>Foto Profile (Harus jelas dan sesuai standar Anterin)</li>
                                <li>Nomor KTP</li>
                                <li>Foto KTP</li>
                                <li>Foto KTP dan Selfie</li>
                            </ul>
                        <li>Tahap 3: Isi data SIM </li>
                            <ul>
                                <li>Nomor SIM</li>
                                <li>Tipe SIM (motor/mobil)</li>
                                <li>Masa berlaku SIM, dan </li>
                                <li>Foto SIM.</li>
                            </ul>
                        <li>Tahap 4: Isi data Kendaraan  </li>
                            <ul>
                                <li>Jenis Kendaraan (motor/mobil)</li>
                                <li>Merek kendaraan</li>
                                <li>Sub merek kendaraan </li>
                                <li>Nomor Polisi kendaraan</li>
                                <li>Nomor STNK dan </li>
                                <li>Foto STNK</li>
                            </ul>
                        <li>Tahap 4: Isi data Kendaraan  </li>
                        <ul>
                            <li>Kesibukan saat ini</li>
                            <li>Daerah/wilayah Beroperasi Anterin</li>
                            <li>Apakah bergabung dengan ojol (Gojek dan Grab)</li>
                            <li>*Tombol "Lanjutkan" akan aktif jika data pada setiap tahapan sudah terisi dan benar. </li>
                        </ul>
                        <li>tahap 6: Konfirmasi data terisi dengan benar dan menyetujui syarat dan ketentuan yang berlaku di PT Anterin Digital Nusanta untuk menjadi mitra driver (Warga) Anterin. </li>  
                    </ul>
                    <p>Jika berhasil melakukan registrasi, Kamu akan mendapatkan feedback dari PT Anterin Digital Nusantara berupa email.</p>
                    <p>Proses approval untuk menjadi mitra driver (Warga) Anterin 2x24 jam dan akan diberitau melalui email yang didaftarkan.</p>

            </ol>
            </Panel>
            <Panel header="8. Bagaimana cara menerima order yang masuk di aplikasi Anterin terbaru?  " key="8">
            <p>Untuk melakukan pemesanan layanan Motor dan Mobil dilakukan dengan cara sebagai berikut:</p>
            <ol>
                <li> Jika pengemudi (Warga) mendapat order masuk maka akan muncul notifikasi blue screen beserta ringtone sebagai penanda tawaran masuk dari penumpang (Teman) Anterin. </li>
                <li> Tekan tombol "Lihat Tawaran" untuk melihat informasi tawaran. </li>
                <li> Tentukan Metode pembayaran (tunai/AnterinPay). Jika saldo AnterinPay tidak mencukupi, maka pembayaran akan dialihkan ke tunai.Tekan tombol "Ambil" tawaran. Jangan biarkan order masuk diabaikan selama 60 detik.</li>
                <li> Jika Kamu dipilih oleh penumpang (Teman) Anterin, maka sistem akan menampilkan "yeay, anda dipilih oleh penumpang" dan jika Kamu bersedia ambil order tersebut, silahkan tekan tombol "Saya dalam Perjalanan" sebagai informasi ke penumpang (Teman) Anterin bahwa Kamu sedang menuju lokasi penjemputan. Pengemudi (Warga) Anterin tidak dapat melakukan perjalanan jika penumpang (Teman) Anterin belum mengkonfirmasi bahwa penumpang (Teman) Anterin sudah bersama pengemudi (Warga) Anterin dan pengemudi (Warga) Anterin tidak bisa membatalkan order. </li>
                <li> Masukkan catatan jika diperlukan untuk memudahkan pengemudi (Warga) mencari alamat atau yang lainya.</li>
                <li> Jika sudah sampai di lokasi tujuan, tekan tombol "Perjanan Selesai" untuk mengakhiri perjalanan.  </li>
                <li> Setelah selesai pengantaran penumpang (Teman) Anterin, pengemudi (Warga) Anterin diminta untuk memberi penilaian berupa bintang untuk penumpang (Teman) Anterin dan dapat memberi alasan mengapa pengemudi (Warga) memberi bintang dengan jumlah tersebut. </li>
                    <ul>
                        <li>Terdapat fitur chat & call pada layar map sebagai sarana komunikasi dengan penumpang (Teman) Anterin selama proses penjemputan sampai dengan pengantaran ke lokasi tujuan. </li>
                        <li>Informasi yang pengemudi (Warga) dapatkan selama proses penjemputan dan pengantaran penumpang yaitu:</li>
                        <ol>
                            <li> Status aktivitas selama proses penjemputan dan pengantaran penumpang (Teman) Anterin yang terdapat pada header bar informasi.</li>
                            <li> Nama dan foto penumpang (Teman) Anterin</li>
                            <li> Metode pembayaran (Tunai/AnterinPay) </li>
                            <li> Harga total yang harus dibayar oleh penumpang (Teman) Anterin</li>
                            <li> Informasi voucher yang digunakan oleh penumpang (Teman) Anterin (jika menggunakan voucher dan harga yang terpotong voucher)</li>
                            <li> Jarak penjemputan dan lokasi penjemputan</li>
                            <li> Jarak pengantaran dan lokasi pengantaran</li>
                            <li> Catatan / note dari penumpang (Teman) Anterin</li>
                        </ol>
                        <li>Terdapat tombol navigasi pada layar map untuk memudahkan driver (Warga) Anterin selama perjalanan.</li>
                    </ul>
            </ol>
            </Panel>
            <Panel header="9. Bagaimana cara membatalkan pesanan?" key="9">
            <p>Terdapat 2 cara bagi driver (Warga) Anterin untuk membatalkan pesanannya, yaitu:</p>
            <ol>
                <li> Ketika ada tawaran masuk dan sudah memilih order, pada saat itu driver (Warga) Anterin dapat membatalkan tawaran masuk. Tawaran yang dibatalkan akan hilang.</li>
                <li> Pada saat driver (Warga) Anterin telah dipilih oleh penumpang (Teman) Anterin namun order tersebut dibiarkan oleh driver driver (Warga) Anterin selama 15 detik, maka order tersebut dibatalkan otomatis oleh sistem. </li>
            </ol>
            </Panel>
        </Collapse>

        <Divider/>
        <h2>Cara Pembayaran</h2>
        <Collapse onChange={callback}>
            <Panel header="10. Bagaimana cara pembayaran di aplikasi Anterin terbaru?" key="10">
            <p>Pada aplikasi Anterin yang baru ada dua metode pembayaran yaitu AnterinPay dan Tunai.</p>
            </Panel>
        </Collapse>

         <Divider/>
        <h2>JalinJalan</h2>  
        <Collapse onChange={callback}> 
            <Panel header="11. Apakah poin JalinJalan saya di aplikasi sebelumnya hangus?" key="11">
            <p>Tidak hangus, poin akan tetap dan jumlahnya tidak bertambah dan berkurang</p>
            </Panel>
        </Collapse>
            
        <Divider/>
        <h2>Token / Berlangganan</h2>  
        <Collapse onChange={callback}> 
            <Panel header="12. Apakah Token dan masa aktif saya di aplikasi sebelumnya hangus?" key="12">
            <p>Tidak hangus, masa aktif akan tetap berlanjut sesuai dengan masa aktif pada aplikasi lamanya.</p>
            </Panel>
            <Panel header="13. Bagaimana cara Warga membeli dan aktivasi paket di aplikasi Anterin yang baru?" key="13">
            <p>Pada aplikasi baru, pembelian token dan aktivasi token sudah dibuat menjadi satu proses. Sehingga, istilah yang digunakan pada aplikasi baru adalah aktivasi token bukan pembelian token. Pembelian token hanya bisa menggunakan AnterinPay. </p>
                <ol>
                    <li> Buka menu AnterinPay</li>
                    <li> Pilih "Isi Ulang A-Token</li>
                    <li> Pilih paket yang di inginkan, pastikah saldo AnterinPay cukup.</li>
                    <li> Tekan tombol "Aktivasi"</li>
                    <li> Sistem akan menampilkan konfirmasi aktivasi paket. Pilih ya jika ingin dilanjutkan. pilih tidak jika ingin membatalkan. </li>
                    <li> Jika berhasil, sistem akan menampilkan pesan berhasil dan masa aktif paket akan tampil di halaman dashboard. </li>
                </ol>
            </Panel>
        </Collapse>

        <Divider/>
        <h2>AnterinPay</h2>  
        <Collapse onChange={callback}> 
            <Panel header="14. Apa itu AnterinPay?" key="14">
            <p>AnterinPay merupakan dompet virtual yang bisa digunakan untuk membayar transaksi-transaksi yang berkaitan dengan layanan di dalam aplikasi Anterin.</p>
            </Panel>
            <Panel header="15. Apakah AnterinPay dan A-Poin dapat di uangkan? dan bagaimana caranya?" key="15">
            <p>Berikut langkah-langkah untuk penarikan tunai AnterinPay dan A-Poin :</p>
            <ul>
                <li>Masuk ke menu AnterinPay</li>
                <li>Pilih penarikan</li>
                <li>Pilih bank tujuan</li>
                <li>Masukan nomor rekening tujuan</li>
                <li>Pilih sumber dana yang ingin ditarik (AnterinPay atau A-Poin)</li>
                <li>Masukkan nominal yang ingin di tarik. Minimal penarikan Rp 50.000 dan pastikan saldo atau poin Kamu cukup untuk melakukan penarikan</li>
                <li>Tekan tombol "Cashout" untuk memproses penarikan tunai</li>
                <li>Kemudian akan muncul inquiry transfer untuk mengkonfirmasi apakah jumlah sudah sesuai. Untuk penarikan tunai akan ada penambahan biaya admin, besarnya tergantung bank yang dituju.</li>
                <li>Tekan YA jika ingin melanjutkan. Tekan Tidak jika ada data yang tidak sesuai. </li>
                <li>Jika berhasil, sistem akan memberikan informasi berhasil. Jika gagal, sistem akan menampilkan informasi gagal.</li>
                <li>Saldo akan masuk ke rekening dalam waktu 1x24 jam</li>
            </ul>
            </Panel>
            <Panel header="16. Bagaimana cara mencairkan / meng-uangkan voucher perjalanan (voucher ride)? " key="16">
            <p>Anterin Pay merupakan dompet virtual yang bisa digunakan untuk membayar transaksi-transaksi yang berkaitan dengan layanan di dalam aplikasi Anterin. 
                Anterin Pay sudah terdapat didalam aplikasi Anterin yang baru sehingga fungsinya sudah terintegrasi dengan baik dan mempermudah untuk memesan jenis layanan Anterin Motor, Mobil, Kurir, Pembayaran BPJS, Paket Pulsa, dan lainya. </p>
            <p>Kini top up Anterin Pay dapat dilakukan kapan saja dan dimana saja melalui berbagai fasilitas yang disediakan. Kamu dapat memilih menggunakan ATM, Internet Banking, Mobile Banking.</p>
            </Panel>
        </Collapse>

        <Divider/>
        <h2>Voucher</h2>  
        <Collapse onChange={callback}> 
            <Panel header="17. Berapa lama proses mencairkan / meng-uangkan voucher perjalanan (voucher ride)? " key="17">
            <p>Untuk driver (Warga) Anterin tidak ada fitur pengecekan voucher dan driver (Warga) Anterin tidak memiliki voucher untuk di cairkan. Yang bisa dicairkan oleh driver (Warga) Anterin adalah Anterin Pay dan A-Poin. Proses pencairan berlangsung dalam 1x24 jam.</p>
            </Panel>
  
            <Panel header="18. Bagaimana cara melakukan pengecekan voucher perjalanan (voucher ride) sudah dicairkan?  " key="18">
            <p>Untuk driver (Warga) Anterin tidak ada fitur pengecekan voucher dan driver (Warga) Anterin tidak memiliki voucher untuk di cairkan. Yang bisa dicairkan oleh driver (Warga) Anterin adalah Anterin Pay dan A-Poin. Proses pencairan berlangsung dalam 1x24 jam.</p>
            </Panel>
        </Collapse>

        <Divider/>
      </div>
    }
  }

export default class FAQ extends Component{

    
    render(){
        return(
            <div>
                <div className="section-banner section-blue ">
                    <h2 style={{color:'white', margin:'1%',fontWeight:'bold'}}> Frequenly Asked Quetion</h2>
                </div>

                <CoolTabs className="tab" 
                    tabKey={'1'}
                    style={{height:3500, width:'100%', background:  'white', potition: 'sticky' }}
                    activeTabStyle={{ background:  'white', color:  '#12B1D3' }}
                    unActiveTabStyle={{ background:  '#12B1D3', color:  'white', opacity:0.7 }}
                    leftTabTitle={'Teman'}
                    rightTabTitle={'Warga'}
                    leftContent={<Content1/>}
                    rightContent={<Content2/>}
                    contentTransitionStyle={'transform 0.6s ease-in'}
                    borderTransitionStyle={'all 0.6s ease-in'}/>     
            </div>

        )
    }
}
