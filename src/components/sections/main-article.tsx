import React from 'react';
import Image from 'next/image';

const MainArticle = () => {
  return (
    <div className="bg-white p-[15px] border border-[#DDDDDD] flex flex-col gap-4">
      {/* Date Header */}
      <div className="border-b border-[#EEEEEE] mb-4">
        <h2 className="font-date inline-block pb-1">
          <span>Τετάρτη 6 Μαΐου 2020</span>
        </h2>
      </div>

      <article className="post hentry">
        {/* Post Title */}
        <h3 className="text-[22px] font-display text-[#000080] leading-[1.4] mb-2">
          <a href="#" className="hover:underline">Μήπως δεν εκτίθεστε όσο πρέπει;</a>
        </h3>

        <div className="post-body font-serif text-[16px] text-[#333333] leading-[1.5]">
          <div className="mb-6">
            <h2 className="text-[18px] font-display font-normal underline mb-4">
              Εκτεθείτε…. στον Ήλιο,
            </h2>
            <div className="flex flex-col items-center italic mb-4">
              <p className="underline text-center">Πάρτε συμπληρώματα Βιταμίνης D &</p>
              <p className="underline text-center">Μειώστε τον κίνδυνο του καρκίνου!!</p>
            </div>
            <div className="flex flex-col items-center italic mb-4">
              <p className="underline text-center">Ο Ήλιος, τα Συμπληρώματα και ο ρόλος της Βιταμίνης D</p>
              <p className="underline text-center">στη μείωση του κινδύνου και της εξέλιξης του καρκίνου!!!</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-[14px] font-display italic leading-snug">
              Επιλογή, Επεξεργασία και Μετάφραση ερευνών: <span className="font-bold">Κατερίνα Μηστριώτη</span> - Σύμβουλος Κλινικής Διατροφολογίας και Ολιστικών Εφαρμογών
            </h2>
            <h2 className="text-[14px] font-display italic leading-snug">
              Πηγές/Έρευνες /Ερευνητές: Βλ. τέλος άρθρου
            </h2>
          </div>

          {/* Sun Banner Image */}
          <div className="flex justify-center mb-6">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-diet-web-blogspot-com/assets/images/15-2.png"
              alt="Vitamin D and Sun"
              width={640}
              height={360}
              className="max-w-full h-auto"
            />
          </div>

          <div className="italic mb-6">
            Σύμφωνα με σοβαρές επιστημονικές έρευνες, «οι γυναίκες με χαμηλά επίπεδα Βιταμίνης D στο αίμα, έχουν σχεδόν διπλάσιες (97%) πιθανότητες να αναπτύξουν καρκίνο του μαστού σε σύγκριση με εκείνες με τα υψηλότερα επίπεδα».
          </div>

          {/* Awareness Image */}
          <div className="flex justify-center mb-6">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-diet-web-blogspot-com/assets/images/19__Vit-D-awareness-offer-3.jpg" 
              alt="Vitamin D awareness"
              width={320}
              height={224}
              className="max-w-full h-auto"
            />
          </div>

          <p className="italic mb-4">
            Αποφεύγουμε τα χαμηλά επίπεδα απολαμβάνοντας καθημερινά, με σωστό τρόπο*, τον Ήλιο – χωρίς αντηλιακό και χωρίς γυαλιά ηλίου - και παίρνοντας συμπληρώματα διατροφής Βιταμίνης D.
          </p>

          <p className="italic mb-4">Αυτός είναι ένας εύκολος, οικονομικός και ασφαλής τρόπος για τη μείωση:</p>

          {/* Breast Cancer Prevention Image */}
          <div className="flex justify-center mb-6">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-diet-web-blogspot-com/assets/images/vit_d_breast_cancer-4.png"
              alt="Vitamin D for Breast Cancer Prevention"
              width={400}
              height={223}
              className="max-w-full h-auto"
            />
          </div>

          <ul className="italic mb-6 list-none p-0">
            <li className="mb-2">α) της συχνότητας εμφάνισης,</li>
            <li className="mb-2">β) την βελτίωση της πρόγνωσης και</li>
            <li className="mb-2">γ) της έκβασης του καρκίνου!</li>
          </ul>

          <p className="italic mb-6 text-sm">(επιπλέον έρευνες βρίσκονται σε εξέλιξη)</p>

          <p className="italic mb-4">
            Η Βιταμίνη D στην πραγματικότητα δεν είναι Βιταμίνη!
          </p>
          <p className="italic mb-6">
            Είναι ο πρόδρομος της ισχυρής στεροειδούς ορμόνης καλσιτριόλης, η οποία έχει εκτεταμένες δράσεις σε ολόκληρο τον οργανισμό, ρυθμίζοντας πολλές κυτταρικές διεργασίες που θα μπορούσαν να παίζουν ρόλο στην πρόληψη μιας σειράς καρκίνων (μαστού, παχέως εντέρου, ουροδόχου κύστεως, προστάτη αλλά και άλλων σοβαρών παθήσεων).
          </p>

          <p className="italic mb-4 text-[#000080]">
            Από την τροφή μας μπορούμε να πάρουμε ελάχιστη ποσότητα Βιταμίνης D (D3) από την συνολική που χρειαζόμαστε.
          </p>

          <div className="flex justify-center mb-6">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-diet-web-blogspot-com/assets/images/18__6222-5.jpg"
              alt="Vitamin D sources"
              width={278}
              height={400}
              className="max-w-full h-auto"
            />
          </div>

          <p className="italic mb-6">
            Έτσι τα Συμπληρώματα και η σωστή* έκθεσή μας στον Ήλιο, είναι η απάντηση!!!!
          </p>

          <div className="bg-[#f0f8ff] p-4 border-l-4 border-[#0000FF] mb-8">
            <p className="italic font-bold mb-2">Σημείωση:</p>
            <p className="italic">
              Η Bιταμίνη D3 εμπλέκεται σε έναν λεπτό χορό με την Bιταμίνη K2, και θα πρέπει να έχετε και τα δύο συστατικά σε συνεργικές μεταξύ τους και επαρκείς ποσότητες για να εξασφαλίσετε βέλτιστη υγεία. Τα περισσότερα συμπληρώματα αποδίδουν αυτόν τον συνδυασμό.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="italic font-bold border-b border-[#DDDDDD] pb-1 mb-4">
              *Σωστός τρόπος έκθεσης στον ήλιο:
            </h3>
            
            <p className="italic mb-2 font-bold">Καλοκαίρι:</p>
            <p className="italic mb-4">Πρωί : μέχρι τις 12.00 &nbsp;&nbsp;&nbsp; Απόγευμα: από τις 18.00 και μετά</p>
            
            <p className="italic mb-6">Τον υπόλοιπο χρόνο, ελεύθερα οποιαδήποτε ώρα και για τουλάχιστον συνολικά 45 λεπτά την ημέρα.</p>

            <div className="flex justify-center mb-6">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-diet-web-blogspot-com/assets/images/1___vitamin_D-6.jpg"
                alt="Woman drinking water in sun"
                width={400}
                height={270}
                className="max-w-full h-auto"
              />
            </div>

            <p className="italic text-center font-bold mb-8">
              Πάντοτε ενυδατωμένοι το καλοκαίρι κατά την διάρκεια της έκθεσής μας στον ήλιο (πίνουμε συχνά νερό)
            </p>

            <p className="italic mb-6">
              Εάν έχουμε ευαίσθητο δέρμα, είναι καλό να φοράμε ένα λεπτό λευκό μπλουζάκι που θα απομακρύνει την πιθανότητα εγκαύματος.
            </p>

            <div className="flex justify-center mb-6">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-diet-web-blogspot-com/assets/images/18__vitamin_D-7.jpg"
                alt="Safe sun exposure"
                width={400}
                height={266}
                className="max-w-full h-auto"
              />
            </div>

            <p className="italic font-bold">Φοράμε πάντοτε καπέλο ανοιχτόχρωμο με γείσο.</p>
          </div>
          
          <div className="mt-12 text-[11px] font-sans text-[#2244BB] border-t border-[#DDDDDD] pt-6 overflow-hidden">
            <h4 className="font-bold text-[14px] text-[#666666] uppercase mb-4">Έρευνες/Πηγές</h4>
            <div className="flex flex-col gap-2">
              <p>1. Bray F, Ferlay J, Soerjomataram I, Siegel RL, Torre LA, Jemal A. Global cancer statistics 2018: GLOBOCAN estimates of incidence and mortality worldwide...</p>
              <p>2. Clegg LX, Li FP, Hankey BF, Chu K, Edwards BK. Cancer survival among US whites and minorities: a SEER analytics report...</p>
              <p>3. Siegel RL, Miller KD, Jemal A. Cancer statistics, 2019. CA Cancer J Clin. 2019; 69:7–34. doi: 10.3322/caac.21551 [PubMed] [CrossRef] [Google Scholar]</p>
              <p>4. Okazaki R. [Vitamin D and cancer]. Clin Calcium. 2014; 24:1193–99. [PubMed] [Google Scholar]</p>
              <p>5. Dunn JA, Jefferson K, MacDonald D, Iqbal G, Bland R. Low serum 25-hydroxyvitamin D is associated with increased bladder cancer risk...</p>
              <p className="text-[10px] text-gray-400 mt-4 italic">... [Περισσότερες πηγές διαθέσιμες στο πρωτότυπο άρθρο]</p>
            </div>
          </div>
        </div>

        <footer className="mt-8 pt-4 border-t border-[#EEEEEE] flex justify-between items-center">
          <div className="flex gap-2">
            <button className="text-[12px] font-sans text-[#999999] hover:bg-gray-100 p-1">Share to Twitter</button>
            <button className="text-[12px] font-sans text-[#999999] hover:bg-gray-100 p-1">Share to Facebook</button>
          </div>
          <div className="font-date">
            Αναρτήθηκε από <a href="#" className="underline">Katerina Mistrioti</a> στις 2:57 μ.μ.
          </div>
        </footer>
      </article>

      <div className="flex justify-between items-center text-[13px] font-nav mt-10 pt-4 border-t-2 border-[#EEEEEE]">
        <a href="#" className="text-[#0000FF]">&lt; Νεότερη ανάρτηση</a>
        <a href="#" className="text-[#0000FF]">Αρχική σελίδα</a>
        <a href="#" className="text-[#0000FF]">Παλαιότερες αναρτήσεις &gt;</a>
      </div>
    </div>
  );
};

export default MainArticle;