export interface UserData {
  id: number;
  demographics: {
    name: string;
    Age: number;
    AgeRange: string;
    Gender: string;
    Employment: string;
    "Monthly Household Income": string;
    Education: string;
    "Relationship Status": string;
    "Parental Status": string;
    "Mobile Device": string;
  };
  location: {
    lat: number;
    lng: number;
  };
  insights: {
    questionId: number;
    mediaType: string;
    question: string;
    mediaUrl: string;
    description: string;
    dateSubmitted: string;
  };
  isCustomerBrand: boolean;
}

export const data: UserData[] = [
  {
    id: 1,
    demographics: {
      name: "Habiba U.",
      Age: 24,
      AgeRange: "21 - 29",
      Gender: "Male",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 5.572, lng: 7.0588 },
    insights: {
      questionId: 1,
      mediaType: "video",
      question: "What is the name of your favorite soft drink brand and why?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },

    isCustomerBrand: true,
  },
  {
    id: 2,
    demographics: {
      name: "Habiba U.",
      Age: 30,
      AgeRange: "30 - 39",
      Gender: "Male",
      Employment: "Full-time",
      "Monthly Household Income": "Middle Income",
      Education: "Did not finish secondary school",
      "Relationship Status": "Single",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 7.7337, lng: 6.6905 },
    insights: {
      questionId: 2,
      mediaType: "video",
      question: "How much does brand matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: true,
  },
  {
    id: 3,
    demographics: {
      name: "Habiba U.",
      Age: 27,
      AgeRange: "21 - 29",
      Gender: "Female",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },

    location: { lat: 8.9668, lng: 4.3874 },
    insights: {
      questionId: 3,
      mediaType: "video",
      question:
        "Another long question for a participant to answer with insights?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: false,
  },
  {
    id: 4,
    demographics: {
      name: "Habiba U.",
      Age: 27,
      AgeRange: "21 - 29",
      Gender: "Female",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },

    location: { lat: 13.0058, lng: 5.2475 },
    insights: {
      questionId: 4,
      mediaType: "video",
      question: "How much does price matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },

    isCustomerBrand: true,
  },
  {
    id: 5,
    demographics: {
      name: "Habiba U.",
      Age: 27,
      AgeRange: "21 - 29",
      Gender: "Female",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 6.6342, lng: 5.9304 },
    insights: {
      questionId: 5,
      mediaType: "video",
      question: "How much does company matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: true,
  },
  {
    id: 6,
    demographics: {
      name: "Habiba U.",
      Age: 27,
      AgeRange: "21 - 29",
      Gender: "Male",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 4.9057, lng: 7.8537 },
    insights: {
      questionId: 6,
      mediaType: "video",
      question: "What is the name of your favorite soft drink brand and why?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: false,
  },
  {
    id: 7,
    demographics: {
      name: "Habiba U.",
      Age: 18,
      AgeRange: "18 - 20",
      Gender: "Male",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 12.228, lng: 9.5616 },
    insights: {
      questionId: 7,
      mediaType: "video",
      question: "How much does brand matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: false,
  },
  {
    id: 8,
    demographics: {
      name: "Habiba U.",
      Age: 18,
      AgeRange: "18 - 20",
      Gender: "Male",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 10.5036, lng: 7.4337 },
    insights: {
      questionId: 8,
      mediaType: "video",
      question:
        "Another long question for a participant to answer with insights?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: true,
  },
  {
    id: 9,
    demographics: {
      name: "Habiba U.",
      Age: 30,
      AgeRange: "30 - 39",
      Gender: "Female",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 7.3369, lng: 8.7404 },
    insights: {
      questionId: 9,
      mediaType: "video",
      question: "How much does price matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: false,
  },
  {
    id: 10,
    demographics: {
      name: "Habiba U.",
      Age: 32,
      AgeRange: "30 - 39",
      Gender: "Female",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 10.2791, lng: 11.1731 },
    insights: {
      questionId: 10,
      mediaType: "video",
      question: "How much does company matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: false,
  },
  {
    id: 11,
    demographics: {
      name: "Habiba U.",
      Age: 40,
      AgeRange: "40 - 49",
      Gender: "Female",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 9.3264, lng: 12.3983 },
    insights: {
      questionId: 11,
      mediaType: "video",
      question: "What is the name of your favorite soft drink brand and why?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: true,
  },
  {
    id: 12,
    demographics: {
      name: "Habiba U.",
      Age: 52,
      AgeRange: "50 - 59",
      Gender: "Male",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 11.8846, lng: 13.152 },
    insights: {
      questionId: 12,
      mediaType: "video",
      question: "How much does brand matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: true,
  },
  {
    id: 13,
    demographics: {
      name: "Habiba U.",
      Age: 52,
      AgeRange: "50 - 59",
      Gender: "Female",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 12.3797, lng: 7.6306 },
    insights: {
      questionId: 13,
      mediaType: "video",
      question:
        "Another long question for a participant to answer with insights?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: false,
  },
  {
    id: 14,
    demographics: {
      name: "Habiba U.",
      Age: 45,
      AgeRange: "40 - 49",
      Gender: "Male",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 5.4527, lng: 7.5248 },
    insights: {
      questionId: 14,
      mediaType: "video",
      question: "How much does price matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: true,
  },
  {
    id: 15,
    demographics: {
      name: "Habiba U.",
      Age: 52,
      AgeRange: "50 - 59",
      Gender: "Female",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 10.306, lng: 9.8404 },
    insights: {
      questionId: 15,
      mediaType: "video",
      question: "How much does company matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: false,
  },
  {
    id: 16,
    demographics: {
      name: "Habiba U.",
      Age: 60,
      AgeRange: "60+",
      Gender: "Female",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 6.2649, lng: 8.0137 },
    insights: {
      questionId: 16,
      mediaType: "video",
      question: "What is the name of your favorite soft drink brand and why?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: false,
  },
  {
    id: 17,
    demographics: {
      name: "Habiba U.",
      Age: 19,
      AgeRange: "18 - 20",
      Gender: "Female",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 5.704, lng: 5.9339 },
    insights: {
      questionId: 17,
      mediaType: "video",
      question: "How much does brand matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: true,
  },
  {
    id: 18,
    demographics: {
      name: "Habiba U.",
      Age: 19,
      AgeRange: "18 - 20",
      Gender: "Female",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 4.7719, lng: 6.0699 },
    insights: {
      questionId: 18,
      mediaType: "video",
      question: "How much does brand matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: true,
  },
  {
    id: 19,
    demographics: {
      name: "Habiba U.",
      Age: 19,
      AgeRange: "18 - 20",
      Gender: "Female",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 6.4483, lng: 7.5139 },
    insights: {
      questionId: 19,
      mediaType: "video",
      question: "How much does company matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: false,
  },
  {
    id: 20,
    demographics: {
      name: "Habiba U.",
      Age: 19,
      AgeRange: "18 - 20",
      Gender: "Male",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Low Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 6.2209, lng: 6.937 },
    insights: {
      questionId: 20,
      mediaType: "video",
      question: "How much does price matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: false,
  },
  {
    id: 21,
    demographics: {
      name: "Habiba U.",
      Age: 23,
      AgeRange: "21 - 29",
      Gender: "Male",
      Employment: "Small Business Owner",
      "Monthly Household Income": "Middle Income",
      Education: "Undergraduate degree",
      "Relationship Status": "Married",
      "Parental Status": "Parent / Legal Guardian",
      "Mobile Device": "Android",
    },
    location: { lat: 6.7784660148471225, lng: 3.2454343324913912 },
    insights: {
      questionId: 21,
      mediaType: "video",
      question: "How much does price matter to you?",
      mediaUrl:
        "https://s3-figma-videos-production-sig.figma.com/video/855547240422431005/TEAM/8142/129d/-25e7-4191-93f2-149c4a699618?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMQHh~dPeOIP04x1SP5Lo4SYqKrjCb-nGZpKJyw-nrqOlPKwdTyyuN7z4DsjbUmIlUZuQwYOAkXJy3kfaEsZogXSwAXqYZVdgzqGPhR8otM~TqMjEWcSVvR2arS6s57NC1nc9sUZZE2mAjf0zK-Om-e09bR3dlQl8loUk35JFD2CfJXz6~i37tLRxFvvdMp3AhP93k14s5TedDzMCIsJSWhsEP5XmoATPELlB9WfJRHRqCqakcWxeficaL7en2HrP00d-t5~lvIczWVTQuxaC1mU4QUn0EBJ0b8N2UM1xaQY6zUyri3dG46KU7Wit1u1kyrmiytxKp-L1w-Qb7j8w__",
      description:
        "Brand X is my favorite because it's less sweet and more refreshing",
      dateSubmitted: "03/07/2024",
    },
    isCustomerBrand: true,
  },
];

export const filterQuestionOptions = [
  {
    text: "What is the name of your favorite soft drink brand and why?",
    id: 1,
  },
  {
    text: "How much does brand matter to you?",
    id: 2,
  },
  {
    text: "Another long question for a participant to answer with insights?",
    id: 3,
  },
  {
    text: "How much does price matter to you?",
    id: 4,
  },
  {
    text: "How much does company matter to you?",
    id: 5,
  },
];

export const demographics = [
  "Age",
  "Gender",
  "Employment",
  "Monthly Household Income",
  "Education",
  "Relationship Status",
  "Parental Status",
  "Mobile Device",
];

export const demographicsData = [
  {
    Age: ["18 - 20", "21 - 29", "30 - 39", "40 - 49", "50 - 59", "60+"],
  },
  {
    Gender: ["Male", "Female", "Prefer not to say"],
  },
  {
    Employment: [
      "Full-time",
      "Part-time",
      "Merchant/Small business Owner",
      "Business Owner (10+ employees)",
      "Homemaker",
      "Full-time student",
      "Part-time student",
      "Retired",
      "Unemployed",
      "Active paramilitary service",
    ],
  },
  {
    "Monthly Household Income": ["Low Income", "Middle Income", "High Income"],
  },

  {
    Education: [
      "Did not finish secondary school",
      "Secondary school graduate",
      "Some university",
      "Undergraduate degree",
      "Postgraduate degree",
      "Vocational or trade school",
    ],
  },

  {
    "Relationship Status": [
      "Single",
      "Engaged",
      "Married / Civil Union",
      "Separated",
      "Divorced",
      "Widowed",
    ],
  },

  {
    "Parental Status": [
      "No children",
      "Parent / Legal Gaurdian",
      "Single Parent",
      "Adopted Children",
      "Prefer not to disclose",
    ],
  },
  {
    "Mobile Device": ["Android", "Apple | iOS", "Other"],
  },
];
