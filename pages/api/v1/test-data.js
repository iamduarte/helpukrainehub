export default function handler(req, res) {
  res.status(200).json({
    campaign: {
      e1: {
        name: "Unity Fund",
        description:
          "This initiative created by Sigma Software runs several fund raising projects to help the Ukrainian army.",
        location: "Ukraine",
        image:
          "https://unity.sigma.software/wp-content/uploads/2023/03/ssuf-logo.svg",
        logoBackground: "#F2F5E4",
        link: "https://unity.sigma.software/en/",
        email: "help@unity.sigma.software",
        tags: ["military", "supplies"],
        featured: true,
      },
      e2: {
        name: "Ukrainian Red Cross Society",
        description:
          "We are helping Ukrainians to survive this humanitarian disaster. Thanks to donors and partners from all over the world",
        location: "Ukraine",
        image:
          "https://donate.redcrossredcrescent.org/cdn.iraiser.eu/KqP7JzKR05hAPdpxBDVM4g==/default/logoappealeng.png",
        logoBackground: "#FF0000",
        link: "https://donate.redcrossredcrescent.org/ua/500days-ad/~my-donation",
        email: "friends@redcross.org.ua",
        tags: ["medical", "supplies"],
        featured: true,
      },
      e3: {
        name: "World Food Programme",
        description:
          "We need your ongoing support to provide food to the most vulnerable people inside Ukraine and in neighbouring countries, especially those on the move in search of safety.",
        location: "Ukraine",
        image: "https://donate.wfp.org/media/320/v43ehpwf/unwfpde.webp",
        logoBackground: "#E4E4FF",
        link: "https://donate.wfp.org/1243/donation/regular/?campaign=1471&_ga=2.202319634.206894899.1697710114-1932745460.1697710114&_gac=1.262751998.1697710605.CjwKCAjwp8OpBhAFEiwAG7NaEmz2dBtH1sCLYWHaQB8mA3Z6XmcjsQsRsWV-km6paLSlD9TEI0sRuBoComsQAvD_BwE",
        email: "someemail@someprovider.com",
        tags: ["food"],
        featured: true,
      },
      e4: {
        name: "Unicef Ukraine",
        description:
          "UNICEF is working with partners to reach vulnerable children and families with essential services – including health, education, protection, water and sanitation – as well as life-saving supplies.",
        location: "Ukraine",
        image:
          "https://www.unicef.org/ukraine/sites/unicef.org.ukraine/files/styles/logo/public/English_33.png?itok=PHCMCal4",
        logoBackground: "#3DABE2",
        link: "https://www.unicef.org/ukraine/en",
        email: "kyiv@unicef.org",
        tags: ["children", "medical", "supplies", "education"],
        featured: true,
      },
    },
  });
}
