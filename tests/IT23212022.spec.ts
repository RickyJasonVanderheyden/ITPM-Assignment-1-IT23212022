import { test, expect } from '@playwright/test';


const testCases = [
  // --- POSITIVE SAMPLES ---
  {
    id: 'Pos_Fun_0001',
    input: 'maama kaamareta yanavaa',
    expected: 'මාම කාමරෙට යනවා',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_0002', 
    input: 'api nadhunge gedhara yanavaa, itapasse sandhunge gedhara yanavaa',
    expected: 'අපි නදුන්ගෙ ගෙදර යනවා, ඉටපස්සෙ සන්දුන්ගෙ ගෙදර යනවා',
    type: 'Positive'
  },
  {
     id: 'Pos_Fun_0003', 
    input: 'paadam kaloth sellam karanna puluvan',
    expected: 'පාඩම් කලොත් සෙල්ලම් කරන්න පුලුවන්',
    type: 'Positive'
  },
   {
     id: 'Pos_Fun_0004', 
    input: 'magee balu paetiyaa hondhin innavaadha?',
    expected: 'මගේ බලු පැටියා හොන්දින් ඉන්නවාද?',
    type: 'Positive'
  },
   {
     id: 'Pos_Fun_0005', 
    input: 'gedhara yathura dhenna',
    expected: 'ගෙදර යතුර දෙන්න',
    type: 'Positive'
  },
   {
     id: 'Pos_Fun_0006', 
    input: 'obata suBha naththalak veevaa!',
    expected: 'ඔබට සුභ නත්තලක් වේවා!',
    type: 'Positive'
  },
   {
     id: 'Pos_Fun_0007', 
    input: 'karuNaakara meya salakaa balanna',
    expected: 'කරුණාකර මෙය සලකා බලන්න',
    type: 'Positive'
  },
   {
     id: 'Pos_Fun_0008', 
    input: 'umba palayam machchan, mama ennam',
    expected: 'උම්බ පලයම් මච්චන්, මම එන්නම්',
    type: 'Positive'
  },
   {
     id: 'Pos_Fun_0009', 
    input: 'godaak rasneeyi',
    expected: 'ගොඩාක් රස්නේයි',
    type: 'Positive'
  },
   {
     id: 'Pos_Fun_0010', 
    input: 'kanna kanna',
    expected: 'කන්න කන්න',
    type: 'Positive'
  },
   {
     id: 'Pos_Fun_0011', 
    input: 'mama iye dhura gamanak gihin aave',
    expected: 'මම ඉයෙ දුර ගමනක් ගිහින් ආවෙ',
    type: 'Positive'
  },
   {
     id: 'Pos_Fun_0012', 
    input: 'mama oyaata heta udheeta kiyannam api kohedha yanne kiyala',
    expected: 'මම ඔයාට හෙට උදේට කියන්නම් අපි කොහෙද යන්නෙ කියල',
    type: 'Positive'
  },
   {
     id: 'Pos_Fun_0013', 
    input: 'mata oyaata kiyanna baehae mokadha mama dhanneth naee',
    expected: 'මට ඔයාට කියන්න බැහැ මොකද මම දන්නෙත් නෑ',
    type: 'Positive'
  },
   {
     id: 'Pos_Fun_0014', 
    input: 'Lamayi seerama panthi gihin',
    expected: 'ළමයි සේරම පන්ති ගිහින්',
    type: 'Positive'
  },
   {
     id: 'Pos_Fun_0015', 
    input: 'ahasa rathu paatayi',
    expected: 'අහස රතු පාටයි',
    type: 'Positive'
  },
    {
     id: 'Pos_Fun_0016', 
    input: 'machan puluvannam heta udheta edhdhi mata oyaagee gedhara thiyena magee sapaththu dheka aran enna puluvandha?',
    expected: 'මචන් පුලුවන්නම් හෙට උදෙට එද්දි මට ඔයාගේ ගෙදර තියෙන මගේ සපත්තු දෙක අරන් එන්න පුලුවන්ද?',
    type: 'Positive'
  },
    {
     id: 'Pos_Fun_0017', 
    input: 'iye mama udee pandara wadata yanna kiyala bas naevathumpole ekata gihin bas eka enakan balan innakota maage parana iskole kaale yaluvek vena roki hambuna, ethakota api dhennata godak vela parana iskole deval gaena kathaa kara kara inna puluvan vuna vagema eya mata kivvaa labana maase mul sathiye eya marry karanava kiyala, ithin eya matath wedding ekata enna kiyala invite karaa',
    expected: 'ඉයෙ මම උඩේ පන්ඩර wඅඩට යන්න කියල බස් නැවතුම්පොලෙ එකට ගිහින් බස් එක එනකන් බලන් ඉන්නකොට මාගෙ පරන ඉස්කොලෙ කාලෙ යලුවෙක් වෙන රොකි හම්බුන, එතකොට අපි දෙන්නට ගොඩක් වෙල පරන ඉස්කොලෙ ඩෙවල් ගැන කතා කර කර ඉන්න පුලුවන් වුන වගෙම එය මට කිව්වා ලබන මාසෙ මුල් සතියෙ එය marry කරනව කියල, ඉතින් එය මටත් wedding එකට එන්න කියල invite කරා',
  },
    {
     id: 'Pos_Fun_0018', 
    input: 'Google Calendar eka check karanna',
    expected: 'Google Calendar එක check කරන්න',
    type: 'Positive'
  },
    {
     id: 'Pos_Fun_0019', 
    input: 'Colombo valin helicopter ekaka naegala yanavaa',
    expected: 'Colombo වලින් helicopter එකක නැගල යනවා',
    type: 'Positive'
  },
    {
     id: 'Pos_Fun_0020', 
    input: 'LOL,ORM,CSS,DSA balaaganna',
    expected: 'LOL,ORM,CSS,DSA බලාගන්න',
    type: 'Positive'
  },
    {
     id: 'Pos_Fun_0021', 
    input: 'mokadhdha?',
    expected: 'මොකද්ද?',
    type: 'Positive'
  },
    {
     id: 'Pos_Fun_0022', 
    input: 'Rs.1600,$12',
    expected: 'Rs.1600,$12',
    type: 'Positive'
  },
    {
     id: 'Pos_Fun_0023', 
    input: '7/29/2003 ,magee upandhinaya',
    expected: '7/29/2003 ,මගේ උපන්දිනය',
    type: 'Positive'
  },
    {
     id: 'Pos_Fun_0024', 
    input: 'aado machan, mata podi sap ekak oone, kora velaa inne',
    expected: 'ආඩො මචන්, මට පොඩි සප් එකක් ඕනෙ, කොර වෙලා ඉන්නේ',
    type: 'Positive'
  },

  // --- NEGATIVE SAMPLES ---
  // Remember: These are EXPECTED to fail in the report.
  {
    id: 'Neg_Fun_0001',
    input: 'adhapooyadhavasa', 
    expected: 'අද පෝය දවස', 
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0002',
    input: 'Apiva siripaadhe aran giyaata ogolanta pin sidhdha  vevaa', 
    expected: 'අපිව සිරිපාදෙ අරන් ගියාට ඔගොලන්ට  පින්   සිද්ද  වෙවා', 
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0003',
    input: 'https://www.pizzahut.lk/', 
    expected: 'https://www.pizzahut.lk/', 
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0004',
    input: 'Meyaata email karanna sandun@gmail.com', 
    expected: 'මෙයාට email කරන්න sandun@gmail.com', 
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0005',
    input: 'mama dn gdrin pitath vee ynv', 
    expected: 'මම දැන් ගෙදරින් පිටත් වි  යනව', 
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0006',
    input: 'AhaSa RatHu Pata veLa', 
    expected: 'අහස රතු පාට වෙලා', 
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0007',
    input: 'My name is Jason', 
    expected: 'මාගෙ නම ජෙසන්', 
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0008',
    input: 'putu4', 
    expected: 'පුටුව', 
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0009',
    input: 'ge.dhara', 
    expected: 'ගෙදර', 
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_0010',
    input: 'Picture.png eka upload karanna', 
    expected: 'Picture.png එක upload කරන්න', 
    type: 'Negative'
  },
  
];

test.describe('IT3040 Assignment 1 - Singlish Converter Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // -----------------------------------------------------------------------
  // 2. AUTOMATED LOOP FOR FUNCTIONAL TESTS
  // -----------------------------------------------------------------------
  for (const data of testCases) {
    test(`${data.id}: Testing input "${data.input}"`, async ({ page }) => {
      
      // A. YOUR SPECIFIC LOCATORS
      const inputLocator = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
      // Using the specific class chain you found for the output
      const outputLocator = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

      // B. Action: Clear and Fill
      await inputLocator.clear(); 
      await inputLocator.fill(data.input);

      // C. Wait for conversion (adjust if site is slow)
      await page.waitForTimeout(1500); 

      // D. Assertion
      // We use .toHaveText() because the output is likely a display element (div), not an input.
      if (data.type === 'Positive') {
        await expect(outputLocator).toHaveText(data.expected);
      } else {
        // For Negative tests, this assertion checks if the Output is CORRECT.
        // Since the system is expected to fail, this line will turn RED in your report.
        // You then copy the "Received string" from the report into your Excel as "Actual Output".
        await expect(outputLocator).toHaveText(data.expected);
      }
    });
  }

  // -----------------------------------------------------------------------
  // 3. UI TEST SCENARIO
  // POSITIVE UI TEST (Real-time Update)
  // -----------------------------------------------------------------------
  test('Pos_UI_0001: Verify Real-Time Conversion', async ({ page }) => {
    const inputLocator = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    // Use the specific class locator we found earlier for the output
    const outputLocator = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

    // 1. Clear the box first
    await inputLocator.clear();

    // 2. Type "oya kohedha" slowly (100ms delay between keys) to simulate a real user
    await inputLocator.pressSequentially('oyaa kohedha yanne?', { delay: 100 });
    
    // 3. Wait a split second for the final character to process
    await page.waitForTimeout(500);

    // 4. Assertion: Verify the output matches exactly
    await expect(outputLocator).toHaveText('ඔයා කොහෙද යන්නෙ?');
  });

});