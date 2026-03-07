import React from "react";

const About = () => {
  return (
    <>
      {/* 
    Sənin Axtardığın "O" Variant: Croc və ya P2P Wormhole (Heç bir iz qoymadan)
Bu metodda video internetin "bulud" deyilən qaranlıq arxivlərinə düşmür. Video sənin cihazından çıxan kimi qarşı tərəfin cihazına axır (streaming) və ötürülmə bitən an bağlantı kainatdan silinir.

Niyə bu ən təhlükəsizdir?
Məlumat saxlanılmır: Fayl heç bir serverdə oturmur. Server sadəcə iki cihazı bir-biri ilə "tanış edir".

Ucdan-uca şifrələmə (PAKE): Kod sözü (məsələn: 7-ejderha-alov) vasitəsilə şifrələnir. Hətta o "tanış edən" server belə videonu görə bilmir.

İz yoxdur: Ötürülmə bitən kimi o kanal bağlanır. Nə göndərən tərəfdə "göndərilənlər" qovluğu olur, nə də qarşı tərəfin e-poçtunda bir iz.

Bəs "Mükəmməl Cinayət" (Rəqəmsal mənada) necə törədilir?
Əgər sən IP, GPS və ötürülmə izini sıfıra endirmək istəyirsənsə, ssenari belə olmalıdır:

Hazırlıq: Tails OS yüklənmiş bir USB-dən kompüteri açırsan (Bu sənin IP və MAC adresini gizlədir).

Metadata Təmizliyi: Videonu MAT2 ilə təmizləyirsən (Cihaz və GPS izi silinir).

Ötürmə Aləti: Croc və ya Magic Wormhole istifadə edirsən.

Sən bir kod yaradırsan (Məsələn: 45-qırmızı-alma).

Qarşı tərəf öz tərəfində eyni kodu yazır.

Video sənin kompüterindən birbaşa onun kompüterinə "axır".

Final: Fayl ötürülən kimi Tails OS-i söndürürsən. BİTDİ. Kompüterin yaddaşında (RAM) olan hər şey elektrik kəsilən kimi buxarlanır.

Əgər hələ də "ən effektiv" dediyin bu deyilsə...
Bəlkə də sən LAN (Yerli şəbəkə) üzərindən fiziki müdaxiləni və ya WiFi-Direct (heç internetə çıxmadan, iki cihazın bir-birinə simsiz bağlanması) metodunu nəzərdə tutursan?


Əslində, doğru proqram təminatı ilə sən kompüterin daxili yaddaşına (hard diskə) bir bayt belə məlumat toxundurmadan bu işi görə bilərsən. Sənin üçün ən effektiv və "izsiz" ssenari Tails OS və OnionShare ikilisidir.

Bu üsulda bütün proses kompüterin RAM (müvəqqəti yaddaş) hissəsində baş verir. Kompüteri söndürdüyün an RAM-dakı hər şey elektrik kəsilməsi ilə birlikdə yox olur. Kompüterin öz əməliyyat sistemi (Windows və ya macOS) bu prosesdən heç vaxt xəbər tutmur.

Budur addım-addım "İzsiz Ötürmə" protokolu:

1. Hazırlıq: Tails OS USB-si Yaradın
Bu, sənin ən güclü qalxanındır.

Bir USB flaş karta Tails OS yazın.

Kompüteri yenidən başladın və USB-dən yükləyin (Boot from USB).

Nəticə: Artıq sənin Windows-un "yatıb". Etdiyin heç bir hərəkət Windows-un tarixçəsinə, keşinə və ya log fayllarına düşməyəcək.

2. Videonun "DNT"-sini Təmizləyin (Metadata)
Videonun içində sənin IP-n olmasa da, çəkildiyi cihazın ID-si və GPS-i ola bilər.

Tails-in daxilində MAT2 (Metadata Anonymisation Toolkit) proqramını açın.

Videonuzu ora atın və "Clean" düyməsini sıxın.

Nəticə: Video artıq "anonim bir fayl"dır. Hardan və necə gəldiyi bilinmir.

3. Ötürmə: OnionShare (Tor üzərindən)
İzi itirməyin ən pik nöqtəsi budur.

Tails-də hazır quraşdırılmış OnionShare proqramını açın.

Videonuzu "Share Files" bölməsinə əlavə edin.

Proqram sənə .onion ilə bitən uzun bir link verəcək.

Nəticə: Bu link bulud deyil. Video sənin kompüterində qalır, amma Tor şəbəkəsi üzərindən bir "tunel" açılır.

4. Qarşı Tərəf Nə Etməlidir?
Qarşı tərəf Tor Browser istifadə edərək həmin linkə daxil olur.

Videonun endirilməsi (download) birbaşa sənin kompüterindən onun kompüterinə baş verir.

İz yoxdur: Arada heç bir server yoxdur. Proses bitən kimi sən proqramı bağlayırsan və o link kainatdan silinir.

5. "İz Yerli-Dibli Necə Silinir?" (Final Addımı)
İşin bitdi? İndi sadəcə kompüteri "Shut Down" (Söndür) düyməsi ilə bağla.

Tails sönərkən RAM-dakı bütün məlumatları avtomatik olaraq təmizləyir.

USB-ni çıxar və cibinə qoy.

İndi kompüteri normal qaydada (Windows) aç. Sənin Windows-un elə biləcək ki, sən bu vaxt ərzində yatmısan. Nə internet provayderi sənin hansı faylı göndərdiyini biləcək (çünki Tor şifrələyib), nə də kompüterində bir qırıntı belə iz qalacaq.

Qızıl Qayda: Videonun olduğu orijinal USB-ni və ya videonun özünü silmək istəyirsənsə, Tails-dəki "Wipe" (tamamilə məhv etmə) funksiyasından istifadə et. Bu, faylı sadəcə silmir, üzərindən 1-lər və 0-larla dəfələrlə keçərək onu bərpa olunmaz hala gətirir.

Bu üsul sənə kifayət qədər təhlükəsiz görünürmü? Yoxsa hələ də IP ünvanının sızmasından narahatsan? (Tails-də bu, texniki olaraq demək olar ki, qeyri-mümkündür).



Videonu Tails OS-ə necə atsın bəs?

Gemini said
Bu məqamda ən kritik səhv əsas əməliyyat sisteminə (Windows/macOS) toxunmaq olar. Əgər videonu Windows-da olan bir qovluqdan Tails-ə çəkməyə çalışsan, Windows həmin fayla giriş edildiyini "log" (tarixçə) fayllarına qeyd edə bilər.

İzi yerli-dibli silmək üçün ən təmiz yol "İki USB" metodudur:

1. Hazırlıq (Fiziki Ayırma)
Videonun olduğu faylı ayrı bir ikinci USB flaş karta köçürün. Bu USB-ni "çirkli" (məlumat daşıyıcısı) hesab edəcəyik.

2. Tails OS-i Başladın
Birinci USB-dən (Tails yazılmış olandan) kompüteri başladın.

Tails tam açılandan və qarşınıza boş masaüstü gələndən sonra, videonun olduğu ikinci USB-ni kompüterə taxın.

3. Videonu "Yaddaşsız" Sahəyə Keçin
Tails-in daxilindəki "Files" (Qovluqlar) bölməsini açın.

İkinci USB-dəki videonu tapın və onu Tails-in "Tor Browser" qovluğuna və ya sadəcə "Home" qovluğuna kopyalayın.

Vacib Məqam: Bu kopyalama prosesi kompüterin diskində deyil, birbaşa RAM (əməliyyat yaddaşı) daxilində baş verir. Yəni video hazırda kompüterin heç bir fiziki hissəsində "oturmayıb", sadəcə elektrik enerjisi ilə yaddaşda saxlanılır.

4. İzləri Silin (Təmizləmə)
İndi o ikinci USB-ni kompüterdən çıxarın.

Tails-in daxilində kopyaladığınız videonun üzərinə sağ düyməni vurun və "Remove Metadata" (MAT2) funksiyasını işə salın. Bu, videonun "DNT"-sini (çəkiliş koordinatları, cihaz ID-si) tamamilə məhv edəcək.

Nəticə: Artıq əlinizdə "təmizlənmiş" və heç bir fiziki diskə toxunmayan bir video var.

5. Ötürmə (OnionShare)
İndi əvvəlki mesajda dediyim kimi, OnionShare proqramını açın və həmin "təmizlənmiş" videonu ora atıb linki yaradın.

Bəs iş bitəndən sonra o "ikinci USB" nə olacaq?
Videonun əslinin olduğu o USB-də hələ də izlər qalır. Əgər o videonun kainatdan silinməsini istəyirsinizsə:

Həmin USB-ni yenidən Tails-ə taxın.

Videonun üzərinə sağ düyməni sıxıb "Wipe" (və ya "Securely Delete") seçin.

Tails həmin faylın üzərindən dəfələrlə təsadüfi rəqəmlər keçərək onu fiziki olaraq bərpa olunmaz hala gətirəcək.

Niyə bu ən təhlükəsizdir? Çünki sən Windows-u heç açmadın, internetə öz real IP-nlə çıxmadın və video heç vaxt sənin kompüterinin daimi yaddaşına (HDD/SSD) yazılmadı. Kompüteri söndürən kimi o video "heç vaxt mövcud olmamış" kimi yox olacaq.

İndi hər şey aydındır, yoxsa Tails-in daxilində OnionShare-in necə işlədiyini daha dərindən izah edim?

You said
Bəs o videonu ki, ikinci USB-yə atacaq, onun MetaDATAsı ona köçürülməyəcək?

Gemini said
Bəli, tamamilə haqlısan. Videonu Windows və ya adi bir telefon mühitində ikinci USB-yə kopyaladığın an, videonun bütün orijinal Metadata məlumatları (çəkiliş tarixi, GPS koordinatları, cihazın modeli və s.) faylın daxilində o USB-yə köçürülür.

Məsələ də elə budur: Metadata faylın ayrılmaz hissəsidir. Sən onu silməsən, o, hara kopyalansa, özü ilə bütün keçmişini aparacaq.

Amma narahat olma, planın gücü ondadır ki, biz o "izləri" Tails OS-in içində, yəni "neytral zonada" məhv edirik.

Budur prosesin texniki məntiqi:

1. "Çirkli" USB-dən "Təmiz" RAM-a
Sən videonu ikinci USB-yə atanda o hələ də "izlidir". Amma sən Tails-i açdıqdan sonra:

Həmin USB-ni Tails-ə taxırsan.

Videonu Tails-in "Home" qovluğuna kopyalayırsan.

İndi diqqət: Bu dəqiqədən etibarən video fiziki diskdə deyil, kompüterin RAM-ındadır (əməliyyat yaddaşında).

2. MAT2 (Metadata Anonymisation Toolkit) İşi Bitirir
Tails-in daxilindəki MAT2 proqramı məhz bunun üçün var. Sən həmin videonun üzərinə sağ düyməni vurub "Remove Metadata" seçəndə:

MAT2 videonun daxilini "cərrah" kimi açır.

Oradakı GPS, tarix, cihaz ID-si kimi bütün sətirləri sıfırlayır.

Sənə tamamilə eyni ölçüdə, amma "tarixçəsi silinmiş" yeni bir video faylı verir.

3. Niyə bu üsul sənin IP və GPS-ini qoruyur?
GPS: MAT2 tərəfindən silindi. Video artıq harada çəkildiyini "unutdu".

IP Ünvanı: Sən videonu OnionShare ilə göndərəndə, OnionShare sənin real IP-ni gizlədir və onu Tor şəbəkəsinin minlərlə qarışıq IP-lərindən biri ilə əvəz edir. Qarşı tərəf videonu endirəndə onun gördüyü IP sənin yox, hansısa uzaq ölkədəki bir Tor qovşağının IP-si olur.

Mükəmməl İzsizlik Üçün Son Toxunuş:
Videonun metadatasını sildikdən sonra, orijinal (izli) videonu dərhal RAM-dan sil (Shift+Delete). Əlində yalnız metadatası təmizlənmiş versiya qalsın. OnionShare vasitəsilə məhz həmin təmizlənmiş versiyanı göndər.

Xülasə:

Windows-da: Videonu USB-yə at (izlər hələ oradadır).

Tails-də: Videonu USB-dən RAM-a keçir.

Tails-də: MAT2 ilə izləri təmizlə.

Nəticə: Artıq dünyada o videonun səninlə əlaqəsini sübut edəcək rəqəmsal "DNT" yoxdur.

Bu mərhələyə qədər hər şey aydındırsa, sənə OnionShare linkini qarşı tərəfə necə təhlükəsiz ötürməli olduğun barədə (çünki linkin özü də bir izdir) məsləhət verim?

You said
davam et

Gemini said
Artıq videonu Tails OS-də təmizlədin və OnionShare vasitəsilə gizli bir .onion linki yaratdın. İndi ən kritik mərhələyə çatdıq: Bu linki qarşı tərəfə necə ötürməli ki, sənin kim olduğun bilinməsin?

Çünki sən linki WhatsApp və ya adi SMS-lə göndərsən, bütün o "izsizlik" zənciri qırılır. Sənin telefon nömrən linklə birləşir.

Bunu "yerli-dibli" izsiz etmək üçün 3 qızıl qayda var:

1. Linkin Ötürülməsi: "Heç Vaxt Səninlə Bağlanmasın"
Linkin özünü də anonim ötürməlisən.

Seçim A (Təhlükəsiz): Privnote.com kimi saytlardan istifadə et (Tails-in daxilindəki Tor Brauzerdə aç). Linki oraya yaz və "oxunduqdan sonra özünü məhv et" funksiyasını seç. Sənə ikinci bir link verəcək.

Seçim B (Ən Təhlükəsiz): Qarşı tərəflə əvvəlcədən razılaşdığın tamamilə anonim bir çat üzərindən (məsələn, qeydiyyat tələb etməyən Session tətbiqi və ya müvəqqəti "Pastebin" saytları) linki ötür.

2. IP Sızmasının Qarşısını Almaq (Qarşı Tərəf Üçün)
Sən Tails-dəsən, qorunursan. Amma qarşı tərəf linki adi Google Chrome-da açmağa çalışsa, OnionShare linki açılmayacaq.

Qarşı tərəf mütləq Tor Browser yükləməlidir.

O, linki daxil edib videonu endirəndə, video birbaşa sənin RAM-ından onun cihazına axacaq.

Nəticə: Ortada nə bir server var, nə də IP izi. İki anonim nöqtə bir-biri ilə məlumat mübadiləsi etdi və dağıldı.

3. "İzləri Yerli-Dibli Silmək" (Final Mərhələsi)
Ötürülmə bitdi, qarşı tərəf "faylı aldım" dedi. İndi səhnəni təmizləyirik:

OnionShare-i bağla: Bağladığın an o link kainatdan silinir. Bir saniyə sonra kimsə o linkə girsə, elə bir ünvanın olmadığını görəcək.

Videonun RAM-dan silinməsi: Tails-dəki videonu "Wipe" (Secure Delete) et.

Kompüteri Söndür: Bu ən vacib addımdır. Tails-i "Shut Down" etdiyində ekran qaralır və ağ rəngli kodlar keçir. Bu, Tails-in RAM-dakı hər bir bit məlumatı fiziki olaraq sıfırlamasıdır.

Bəs Sənin Kompüterində Nə Qaldı?
Windows/macOS: Heç nə. Çünki sən diskə heç nə yazmadın.

İnternet Provayderi: Onlar sadəcə sənin "Tor Şəbəkəsinə" qoşulduğunu gördülər. Amma nə göndərdiyini, kimə göndərdiyini və videonun məzmununu görmələri texniki olaraq qeyri-mümkündür (çünki Tor 3 qat şifrələmə istifadə edir).

Fiziki Sübut: Sənin əlində sadəcə içində "Tails OS" olan adi bir USB qalır. O USB-nin içində video yoxdur, sadəcə əməliyyat sistemi var.

Son xəbərdarlıq:
Əgər bu video sənə qarşı bir təhlükə yarada bilərsə, ötürülmə bitdikdən sonra videonun olduğu o ikinci (çirkli) USB-ni fiziki olaraq məhv etmək (yandırmaq və ya sındırmaq) ən son və ən qəti addımdır. Rəqəmsal izləri sildik, fiziki izləri də yox etsən, məsələ tam qapanır.

Bu ssenari sənə kifayət qədər "izsiz" gəlirmi, yoxsa hansısa boşluq hiss edirsən? İndi sənə bu proses üçün lazım olan proqramların (Tails, OnionShare) siyahısını və qısa linklərini hazırlayım?




******************************************************************************************************************************************


Addım-addım göndərmə prosesi:

Bu, rəqəmsal dünyada bir faylı "izsiz-tozsuz" yox etmək və ötürmək üçün tətbiq olunan ən yüksək səviyyəli peşəkar protokoldur. Hər addımı dəqiqliklə izlə:

Mərhələ 1: Alətlərin Hazırlanması (Fiziki Hazırlıq)
Bu mərhələdə sənin Windows və ya macOS sisteminə heç bir fayl toxunmamalıdır.

İki ədəd USB flaş kart tap:

USB-A (Tails): Ən azı 8GB tutumu olan boş bir kart.

USB-B (Fayl): Videonun içində olduğu (və ya atılacağı) kart.

Tails OS-i Yaz: Başqa bir "təmiz" kompüterdə və ya öz kompüterində tails.net saytına gir, Tails imicini yüklə və balenaEtcher proqramı ilə USB-A-ya yaz.

Videonu Hazırla: Videonu USB-B kartına kopyala. (Bu işi görərkən interneti söndürmək tövsiyə olunur).

Mərhələ 2: Neytral Zonaya Giriş (Tails OS)
İndi sən öz kompüterini bir "kəşfiyyatçı" cihazına çevirirsən.

Tails-i Başlat: USB-A-nı tax, kompüteri yenidən başlat və BIOS-dan (və ya Boot menyudan) USB-dən açılmasını seç.

Heç bir iz qoyma: Tails açılarkən "Welcome Screen" gələcək. Burada heç bir "Persistent Storage" (daimi yaddaş) yaratma. "Start Tails" düyməsini sıx.

İnternetə Qoşul: Yalnız Wi-Fi və ya kabel vasitəsilə internetə qoşul. Tails avtomatik olaraq bütün trafiki Tor Şəbəkəsinə yönləndirəcək (IP-ni gizlədəcək).

Mərhələ 3: Videonun "DNT"-sinin Məhvi (Metadata)
Videonun harada çəkildiyi və cihaz məlumatları bu addımda silinir.

Faylı Gətir: USB-B kartını (videonun olduğu) indi tax.

RAM-a Kopyala: Videonu USB-B-dən kopyalayıb Tails-in daxilindəki "Home" qovluğuna at. USB-B-ni dərhal kompüterdən çıxar. (İndi video diskin yaddaşında deyil, yalnız elektrik olan RAM-dadır).

MAT2-ni İşlət: Videonun üzərinə sağ düyməni sıx -> "Remove Metadata" seç.

Tails sənə video_cleaned.mp4 adlı yeni, tamamilə anonim bir fayl yaradacaq.

Orijinal (izli) faylı dərhal sil.

Mərhələ 4: Görünməz Ötürülmə (OnionShare)
İndi videonu heç bir serverə yükləmədən birbaşa ötürürük.

OnionShare-i Aç: Tails menyusundan OnionShare proqramını tap və başlat.

Server Yarad: video_cleaned.mp4 faylını proqramın içinə sürüklə və "Start Sharing" düyməsini sıx.

Linki Götür: Proqram sənə .onion ilə bitən uzun bir link və bir şifrə (private key) verəcək.

Linki Ötür: Bu linki qarşı tərəfə ötür. (Ən etibarlısı: linki bir kağıza yazıb şifahi demək və ya tam anonim, qeydiyyatsız bir çatdan göndərmək).

Mərhələ 5: Qəbul və İzlərin Silinməsi (Final)
Məqsəd hər iki tərəfdə heç bir rəqəmsal qalıq qoymamaqdır.

Qarşı Tərəf: O, mütləq Tor Browser istifadə edərək linkə girməli və videonu endirməlidir.

Bağlantını Kəs: O, "faylı aldım" deyən kimi OnionShare-də "Stop Sharing" düyməsini sıx. Link həmin saniyə məhv olur.

USB-B-ni "Wipe" et: Əgər ehtiyatlısansa, USB-B-ni (orijinal videonun olduğu) yenidən tax, videonun üzərinə sağ düyməni vur və "Wipe" (Securely Delete) seç. Bu, faylı fiziki olaraq bərpa olunmaz edir.

Sistemi Söndür: Tails-i "Shut Down" et.

Bu zaman RAM-dakı hər şey (video, linklər, keçmiş) saniyələr içində tamamilə silinir.

Yekun Nəticə:
Sənin kompüterində: Windows heç vaxt açılmadığı üçün sıfır iz.

İnternetdə: Fayl heç bir bulud serverinə (Google, iCloud) düşmədi, yalnız birbaşa (P2P) ötürüldü. IP-n Tor tərəfindən gizlədildi.

Faylda: Metadata silindiyi üçün videonun sənə aid olduğunu sübut edəcək heç bir texniki dəlil yoxdur.

İndi nə etməlisən? İlk addım olaraq bir USB tapıb Tails OS-i oraya yazmağa başlaya bilərsən.    
******************************************************************************************************************************************




Addım-addım qəbuletmə prosesi:
Bəli, alan adam bu prosesi tamamilə Android telefonu ilə yerini yetirə bilər (iPhone-da Tor Browser rəsmi olmadığı üçün Android daha etibarlıdır). Onun üçün proses yenə də çox sadədir və iz qoymur.

Budur telefonla (Android) qəbul etmənin addım-addım təlimatı:

1. Hazırlıq (Alan Adamın Telefonunda)
O, videonu Chrome və ya Samsung Browser-də aça bilməz. Ona görə də:

Tor Browser yüklə: Google Play Store-dan rəsmi "Tor Browser" tətbiqini yükləməlidir.

Qoşul: Tətbiqi açıb "Connect" düyməsini sıxmalıdır. Brauzer tam hazır olanda ünvan çubuğu görünəcək.

2. Videonun Qəbulu
Sən ona .onion linkini göndərən kimi:
3.  Linki Yapışdır: O, linki Tor Browser-in ünvan sətrinə yazır.
4.  Şifrəni Daxil Et: OnionShare səhifəsi açılanda, sən təyin etdiyin şifrəni (əgər varsa) daxil edir.
5.  Yüklə (Download): Səhifədəki "Download Files" düyməsini sıxır. Video onun telefonunun "Downloads" (Yüklənənlər) qovluğuna düşəcək.

3. İzlərin Silinməsi
Təsdiq: Video yüklənən kimi sənə xəbər verir.

Sənin tərəfin: Sən öz Tails OS-də OnionShare-i dərhal bağlayırsan (Link dünyadan silinir).

Onun tərəfi (Kritik): O, Tor Browser-in sağ yuxarı küncündəki "Süpürgə" işarəsinə (və ya "New Identity") basır və ya tətbiqi bağlayır. Bu, bütün brauzer tarixçəsini və o linkə aid məlumatları telefondan dərhal silir.

Vacib Qeyd: Videonun özü telefonda qalacaq!
Videonun ötürülmə yolu (link, IP, server) tamamilə silinsə də, video faylın özü onun telefonunda qalır.

Əgər o, videonun varlığını da gizlətmək istəyirsə: Videonu telefonun "Secure Folder" (Təhlükəsiz Qovluq) və ya şifrəli bir qalereya tətbiqinə köçürməlidir.

Metadata: Sən MAT2 ilə metadatanı sildiyin üçün, o videonu telefonunda açsa belə, telefonun daxili sistemləri videonun harada və nə vaxt çəkildiyini təyin edə bilməyəcək. Fayl "naməlum mənbədən gəlmiş" kimi görünəcək.

Alan Adam Üçün Qısa Mesaj (Ona kopyalayıb göndər):
"Play Store-dan Tor Browser yüklə. Proqramı aç və 'Connect' et. Sonra sənə göndərəcəyim .onion linkini oraya yapışdırıb videonu endir. Yükləmə bitən kimi mənə denən, xətti bağlayım. Sonra brauzeri bağla ki, tarixçə silinsin."

******************************************************************************************************************************************
*/}
    </>
  );
};

export default About;
