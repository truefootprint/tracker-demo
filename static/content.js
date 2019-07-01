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
    receiver_email: `<jane.dennet@g1.com>`,

    received: `Received:`,
    date: `17:09, July 3rd, 2019`,

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

    para2: `Asset manager XYZ invited you to provide them with 2018 and 2017 outcome numbers using the TrueFootprint Tracker.`,
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


  // Framework: People, Planet, Peace, Prosperity, Partnerships
  sdg_form: [

    { // section 1
      title: `G1 outcome data - Section 1 - People`,

      intro: `We need 2 types of outcome data from you.
              The first type involves People data. These relate to Sustainable Development Goals 3 and 5.`,

      icons: [
        `sustainable-development-goals/3-good-health-and-well-being.png`,
        `sustainable-development-goals/5-gender-equality.png`,
      ],

      questions: [
        `1. Percentage of board members who are female in 2018:`,
        `2. Percentage of executive team members who are female:`,
        `3. Percentage of senior managers who are female:`,
        `4. Number of deaths of staff and contractors:`,
        `5. Recordable injury rate per 100,000 hours worked:`,
        `6. Lost time injuries and illness rate per 100,000 hours worked:`,

      ],

      secondary: [
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
      ],

      cta: `Next`,
    }, // end of section 1



    { // section 2
      title: `G1 outcome data - Section 2- Planet`,

      intro: `Next is outcome data for Planet.
              These relate to Sustainable Development Goals 6, 7, 12, 13, 14, and 15.`,

      icons: [
        `sustainable-development-goals/6-clean-water-and-sanitation.png`,
        `sustainable-development-goals/7-affordable-and-clean-energy.png`,
        `sustainable-development-goals/12-responsible-consumption-and-production.png`,
        `sustainable-development-goals/13-climate-action.png`,
        `sustainable-development-goals/14-life-below-water.png`,
        `sustainable-development-goals/15-life-on-land.png`,
      ],

      questions: [
        `1. Total greenhouse gas emissions (scope 1) in 2018:`,
        `2. Total revenues in USD in 2018:`,
        `3. Total ore production in metric tonnes:`,
        `4. Total energy use in MwH:`,
        `5. Total water use:`,
        `6. Total hazardous waste:`,
        `7. Total disposed waste:`,
        `8. Percentage of energy from renewable sources:`,
        `9. Percentage of water recycled:`,
        `10. Percentage increase in biodiversity:`,
        `11. Total amount paid in environmental fines:`,
      ],

      secondary: [
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
      ],

      cta: `Next`,
    }, // end of section 2



    { // section 3
      title: `G1 outcome data - Section 3 - Prosperity`,

      intro: `The Prosperity questions relate to Sustainable Development Goals 8, 9, 10 and 11.`,

      icons: [
        `sustainable-development-goals/8-decent-work-and-economic-growth.png`,
        `sustainable-development-goals/9-industry-innovation-and-infrastructure.png`,
        `sustainable-development-goals/10-reduced-inequalities.png`,
        `sustainable-development-goals/11-sustainable-cities-and-communities.png`,
      ],

      questions: [
        `1. Percentage of suppliers that are SMEs in 2018:`,
        `2. Percentage of in-country procurement:`,
        `3. Percentage of employees covered by collective bargaining agreements:`,
      ],

      secondary: [
        `2017:`,
        `2017:`,
        `2017:`,

      ],

      cta: `Next`,
    }, // end of section 3


    { // section 4
      title: `G1 outcome data - Section 4 - Peace`,

      intro: `The Peace questions relate to Sustainable Development Goal 16.`,

      icons: [
        `sustainable-development-goals/16-peace-justice-and-strong-institutions.png`,
      ],

      questions: [
        `1. Percentage of identified child labour cases dealt with successfully within 12 months in 2018:`,
        `2. Percentage of identified human rights cases dealt with successfully within 12 months:`,
        `3. Percentage of conflicts with indigenous communities dealt with successfully in 12 months:`,
      ],

      secondary: [
        `2017:`,
        `2017:`,
        `2017:`,
      ],

      cta: `Next`,
    }, // end of section 4


    { // section 5
      title: `G1 outcome data - Section 5 - Partnerships`,

      intro: `The Partnerships questions relate to Sustainable Development Goals 1, 2, 4 and 17.`,

      icons: [
        `sustainable-development-goals/1-no-poverty.png`,
        `sustainable-development-goals/2-zero-hunger.png`,
        `sustainable-development-goals/4-quality-education.png`,
        `sustainable-development-goals/17-partnerships-for-the-goals.png`,
      ],

      questions: [
        `1. Partnerships spend as percentage of revenues in 2018:`,
        `2. Donated employee hours per 200,000 hours worked:`,
      ],

      secondary: [
        `2017:`,
        `2017:`,
      ],

      cta: `Next`,
    }, // end of section 5
  ],

  // Framework: Environment, Social, Governance
  esg_form: [

    { // section 1
      title: `G1 outcome data - Section 1 - Environment`,

      intro: `We need 2 types of outcome data from you. The first type involves Environment data.`,

      icons: [],

      questions: [
        `1. Percentage of board members who are female in 2018:`,
        `2. Percentage of executive team members who are female:`,
        `3. Percentage of senior managers who are female:`,
        `4. Number of deaths of staff and contractors:`,
        `5. Recordable injury rate per 100,000 hours worked:`,
        `6. Lost time injuries and illness rate per 100,000 hours worked:`,

      ],

      secondary: [
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
      ],

      cta: `Next`,
    }, // end of section 1



    { // section 2
      title: `G1 outcome data - Section 2 - Social`,

      intro: `Next is outcome data for Social factors.`,

      icons: [],

      questions: [
        `1. Total greenhouse gas emissions (scope 1) in 2018:`,
        `2. Total revenues in USD in 2018:`,
        `3. Total ore production in metric tonnes:`,
        `4. Total energy use in MwH:`,
        `5. Total water use:`,
        `6. Total hazardous waste:`,
        `7. Total disposed waste:`,
        `8. Percentage of energy from renewable sources:`,
        `9. Percentage of water recycled:`,
        `10. Percentage increase in biodiversity:`,
        `11. Total amount paid in environmental fines:`,
      ],

      secondary: [
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
        `2017:`,
      ],

      cta: `Next`,
    }, // end of section 2



    { // section 3
      title: `G1 outcome data - Section 3 - Governance`,

      intro: `Finally, please answer the questions about Governance.`,

      icons: [],

      questions: [
        `1. Percentage of suppliers that are SMEs in 2018:`,
        `2. Percentage of in-country procurement:`,
        `3. Percentage of employees covered by collective bargaining agreements:`,

        // These questions were previous in the Peace section:
        `1. Percentage of identified child labour cases dealt with successfully within 12 months in 2018:`,
        `2. Percentage of identified human rights cases dealt with successfully within 12 months:`,
        `3. Percentage of conflicts with indigenous communities dealt with successfully in 12 months:`,

        // These questions were previous in the Partnerships section:
        `1. Partnerships spend as percentage of revenues in 2018:`,
        `2. Donated employee hours per 200,000 hours worked:`,
      ],

      secondary: [
        `2017:`,
        `2017:`,
        `2017:`,

        `2017:`,
        `2017:`,
        `2017:`,

        `2017:`,
        `2017:`,
      ],

      cta: `Next`,
    }, // end of section 3
  ],



  thanks: {
    title: `Thank you!`,

    para1: `Your entries have been stored.`,
    para2: `We have notified asset company XYZ you have made these submissions.`,
    para3: `Asset managers really like data that has been verified independently by an auditor. If you already have your annual report audited by a third party, please select the logo of yours and you can invite them to audit these numbers.`,

    image1: `kpmg.svg`,
    image2: `deloitte.svg`,
    image3: `pwc.svg`,
    image4: `ey.svg`,
  },
};
