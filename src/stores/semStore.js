import { createPinia, defineStore } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const BASE_MATERIALS = ["notes", "Past Qsns", "assignments", "mcqs"];
const LAB_MATERIALS = [...BASE_MATERIALS, "lab-reports"];

export const useSemStore = defineStore("semStore", {
  state: () => ({
    semesterData: {
      1: [
        {
          code: "CACS101",
          name: "Computer Fundamentals & Applications",
          materials: LAB_MATERIALS,
        },
        {
          code: "CACS102",
          name: "Society & Technology",
          materials: BASE_MATERIALS,
        },
        { code: "CA103", name: "English I", materials: BASE_MATERIALS },
        { code: "CA104", name: "Mathematics I", materials: BASE_MATERIALS },
        { code: "CACS105", name: "Digital Logic", materials: LAB_MATERIALS },
      ],
      2: [
        {
          code: "CA201",
          name: "Financial Accounting",
          materials: BASE_MATERIALS,
        },
        { code: "CA202", name: "English II", materials: BASE_MATERIALS },
        { code: "CA203", name: "Mathematics II", materials: BASE_MATERIALS },
        { code: "CACS204", name: "C Programming", materials: LAB_MATERIALS },
        { code: "CACS205", name: "MP & Comp. Arch", materials: LAB_MATERIALS },
      ],
      3: [
        {
          code: "CACS301",
          name: "Data Structures & Algorithms",
          materials: LAB_MATERIALS,
        },
        {
          code: "CA302",
          name: "Probability & Statistics",
          materials: BASE_MATERIALS,
        },
        {
          code: "CACS303",
          name: "System Analysis & Design",
          materials: BASE_MATERIALS,
        },
        { code: "CACS304", name: "OOP in Java", materials: LAB_MATERIALS },
        { code: "CACS305", name: "Web Technology", materials: BASE_MATERIALS },
      ],
      4: [
        { code: "CACS401", name: "Operating System", materials: LAB_MATERIALS },
        {
          code: "CACS402",
          name: "Numerical Methods",
          materials: LAB_MATERIALS,
        },
        {
          code: "CACS403",
          name: "Software Engineering",
          materials: BASE_MATERIALS,
        },
        {
          code: "CACS404",
          name: "Scripting Language",
          materials: LAB_MATERIALS,
        },
        {
          code: "CACS405",
          name: "Database Management System",
          materials: LAB_MATERIALS,
        },
      ],
      5: [
        {
          code: "CACS501",
          name: "MIS & E-Business",
          materials: BASE_MATERIALS,
        },
        {
          code: "CACS502",
          name: "DotNet Technology",
          materials: LAB_MATERIALS,
        },
        {
          code: "CACS503",
          name: "Computer Networking",
          materials: LAB_MATERIALS,
        },
        {
          code: "CACS504",
          name: "Computer Graphics & Animation",
          materials: LAB_MATERIALS,
        },
        {
          code: "CACS505",
          name: "Simulation & Modeling",
          materials: LAB_MATERIALS,
        },
      ],
      6: [
        {
          code: "CACS601",
          name: "Mobile Programming",
          materials: LAB_MATERIALS,
        },
        {
          code: "CACS602",
          name: "Distributed System",
          materials: BASE_MATERIALS,
        },
        { code: "CA603", name: "Applied Economics", materials: BASE_MATERIALS },
        {
          code: "CACS604",
          name: "Network Programming",
          materials: LAB_MATERIALS,
        },
        {
          code: "CACS605",
          name: "Advanced Java Programming",
          materials: LAB_MATERIALS,
        },
      ],
      7: [
        {
          code: "CA701",
          name: "Cyber Law & Professional Ethics",
          materials: BASE_MATERIALS,
        },
        { code: "CACS702", name: "Cloud Computing", materials: LAB_MATERIALS },
        {
          code: "CACS703",
          name: "Data Mining & Data Warehousing",
          materials: LAB_MATERIALS,
        },
        { code: "CACS704", name: "Network Security", materials: LAB_MATERIALS },
        {
          code: "CACS705",
          name: "Enterprise Architecture",
          materials: BASE_MATERIALS,
        },
      ],
      8: [
        {
          code: "CA801",
          name: "Operations Research",
          materials: BASE_MATERIALS,
        },
      ],
    },
  }),
  actions: {
    getSemData(sem) {
      return this.semesterData[sem];
    },
    getSemSubjects(sem) {
      return this.semesterData[sem].map(
        (subject) => [subject.name, subject.code],
      );
    },
  },
});
