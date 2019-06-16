export default {
  header: {
    title: `TrueFootprint Tracker`,

    link1: `My account`,
    link2: `Help`,
  },



  email: {
    header: `Mail`,

    from: `From:`,
    sender_name: `Roger Atkins`,
    sender_email: `<roger.atkins@abc.com>`,

    to: `To:`,
    receiver_name: `Jane Dennet`,
    receiver_email: `<jane.dennet@abc.com>`,

    received: `Received:`,
    date: `17:09pm, July 3rd, 2019`,

    para1: `Dear Jane,`,

    para2: `On behalf of ABC we are committed to sustainability.
            We have been instructed to collect key outcome data of all our portfolio companies.
            We have therefore enlisted the services of independent platform TrueFootprint who have created a form for you to fill out.
            Give me a ring if you need any help. See you next week in Paris!`,

    link: `https://tracker.truefootprint.com/invite/5226-e0c2-f094`,

    para3: `Best, Roger.`,

    cta1: `↑ Reply`,
    cta2: `→ Forward`,
  },



  intro: {
    para1: `Hello G1,`,

    para2: `Asset manager XYZ invited you to provide them with outcome numbers using the TrueFootprint Tracker.`,
    para3: `Read more <a>here</a> about why asset managers want to have this data.`,
    para4: `The data you enter is yours. By submitting you give us a license to sell this data to XYZ and others. Read <a>here</a> the full T&amp;C.`,

    para5: `We have already created a basic company profile for you based on data provided by XYZ.`,

    cta: `Start`,
  },



  login: {
    title: `Create first login`,

    para: `Multiple people at G1 can have logins. You can create the first one now for yourself.`,

    label1: `Company name:`,
    label2: `Email address:`,
    label3: `Create password:`,

    value1: `G1`,
    value2: ``,
    value3: ``,

    place1: ``,
    place2: `for example janedoe@g1.com`,
    place3: ``,

    cta: `Create login`,
  },



  // You can add as many sections and questions as you want.
  form: [


    { // section 1
      title: `G1 outcome data - Section 1 - People`,

      intro: `We need 3 types of outcome data from you.
              The first type involves People data. These relate to ESG items 3 and 5.`,

      questions: [
        `1. Number of deaths of staff and contractors this year:`,
        `2. Recordable injury rate per 100,000 hours worked:`,
        `3. Lost time injuries and illness rate per 100,000 hours worked:`,
        `4. Percentage of board members who are female:`,
        `5. Percentage of executive team members who are female:`,
        `6. Percentage of senior managers who are female:`,
      ],

      secondary: [
        `Last year:`,
        `Last year:`,
        `Last year:`,
        `Last year:`,
        `Last year:`,
        `Last year:`,
      ],

      cta: `Next`,
    }, // end of section 1



    { // section 2
      title: `G1 outcome data - Section 2- Planet`,

      intro: `Next is outcome data for Planet.
              These relate to ESG items 6, 7, 12, 13, 14, and 15.`,

      questions: [
        `1. Greenhouse gas emissions per $100M turnover (scope 1) this year:`,
        `2. Greenhouse gas emissions per ton of product`,
        `3. Energy use per ton of product:`,
        `4. Water use per ton of product:`,
        `5. Hazardous waste per ton of product:`,
        `6. Disposed waste per ton of product:`,
        `7. Percentage of energy from renewable sources:`,
        `8. Percentage of water recycled:`,
        `9. Percentage increase in biodiversity:`,
        `10. Total amount paid in environmental fines:`,
      ],

      secondary: [
        `Last year:`,
        `Last year:`,
        `Last year:`,
        `Last year:`,
        `Last year:`,
        `Last year:`,
        `Last year:`,
        `Last year:`,
        `Last year:`,
        `Last year:`,
      ],

      cta: `Next`,
    }, // end of section 2



  ],



  thanks: {
    title: `Thank you!`,

    para1: `Your entries have been stored.`,
    para2: `We have notified asset company XYZ you have made these submissions.`,
    para3: `Asset managers really like data that has been verified independently by an auditor. If you already have your annual report audited by a third party, please select the logo of yours and you can invite them to audit these numbers.`,

    image1: `email.svg`,
    image2: `email.svg`,
    image3: `email.svg`,
    image4: `email.svg`,
  },
};
