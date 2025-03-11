const DataForm = [
  {
    id: 1,
    title: "Profle Information",
    field: [
      { label: "Name", type: "text", placeholder: "What is your name" },
      {
        label: "Phone",
        type: "text",
        placeholder: "What is your phone number",
      },
      {
        label: "Email",
        type: "email",
        placeholder: "What is your email",
      },
      {
        label: "linkedin",
        type: "text",
        placeholder: "What is your linkedin",
      },
      {
        label: "summary",
        component: "Textarea",
      },
    ],
  },
  {
    id: 2,
    title: "Education Information",
    field: [
      {
        label: "Name Of Institution",
        type: "text",
        placeholder: "what is your Name Of Institution",
      },
      {
        label: "Grade",
        type: "text",
        placeholder: "how many grade do you have",
      },
      {
        label: "Degree",
        type: "text",
        placeholder: "What is your Degree",
      },
      { label: "Date", type: "Date" },
    ],
  },
  {
    id: 3,
    title: "Work Experience",
    field: [
      {
        label: "Name Of Institution",
        type: "text",
        placeholder: "what is your Name Of Institution",
      },
      {
        label: "Address",
        type: "text",
        placeholder: "What is your address",
      },
      {
        label: "Date",
        type: "date",
      },
      {
        label: "Position",
        type: "text",
        placeholder: "What was your position",
      },
    ],
  },
  {
    id: 4,
    title: "Project",
    field: [
      {
        label: "Name Of Project",
        type: "text",
        placeholder: "what is your Project",
      },
      {
        label: "Date",
        type: "date",
      },
      {
        label: "Description",
        component: "Textarea",
        placeholder: "Describe Your Project",
      },
    ],
  },
];
export default DataForm;
