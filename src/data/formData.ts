const Cards = [
  {
    id: 1,
    title: "Profile InformatIon",
    fields: [
      {
        LabelName: "name",
        type: "text",
      },
      {
        LabelName: "Phone Number",
        type: "text",
      },
      {
        LabelName: "Email",
        type: "email",
      },
      {
        LabelName: "Linkedin",
        type: "text",
      },
      {
        component: "Textarea",
        type: "text",
      },
    ],
  },
  {
    id: 2,
    title: "Education Information",
    fields: [
      {
        LabelName: "Name Of institution",
        type: "text",
      },
      {
        LabelName: "Degree",
        type: "text",
      },
      {
        LabelName: "date",
        type: "date",
      },
    ],
  },
];

export default Cards;
